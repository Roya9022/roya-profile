import { useRef, useState, useEffect } from 'react';
import { Minus, Square, X } from 'lucide-react';
import type { Position } from '@/types';
import { TitleBarButton } from '@/components/content';

interface ContentModalProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isMaximized?: boolean;
  children: React.ReactNode;
  headerColor?: string;
  width?: string;
  height?: string;
  position: Position;
  onDrag: (pos: Position) => void;
  onFocus?: () => void;
  isMinimized?: boolean;
  icon?: string;
  noPadding?: boolean;
  scrollable?: boolean;
}

const ContentModal: React.FC<ContentModalProps> = ({
  title,
  onClose,
  onMinimize,
  onMaximize,
  isMaximized = false,
  children,
  headerColor = 'from-violet-400 to-sky-400',
  width = 'md:w-[700px]',
  height,
  position,
  onDrag,
  onFocus,
  isMinimized = false,
  noPadding = false,
  icon = '📁',
  scrollable = true,
}) => {
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 1024 : false));

  const dragInfo = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const windowOutset = 'border-2 border-white border-b-black border-r-black shadow-[1px_1px_0_0_#808080]';
  const contentInset = 'border-2 border-[#808080] border-b-white border-r-white shadow-[inset_1px_1px_0_0_#000]';

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isMaximized || isMobile || (e.target as HTMLElement).closest('button')) return;

    dragInfo.current = {
      isDragging: true,
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };

    onFocus?.();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragInfo.current.isDragging) return;

    onDrag({
      x: e.clientX - dragInfo.current.startX,
      y: e.clientY - dragInfo.current.startY,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragInfo.current.isDragging) return;
    dragInfo.current.isDragging = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  if (isMinimized) return null;

  const mobileCenterClasses = isMobile && !isMaximized ? 'flex items-center justify-center' : '';

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${mobileCenterClasses}`}
      style={{ zIndex: isMaximized ? 200 : 50 }}>
      <div
        className={`${isMobile && !isMaximized ? 'relative' : 'absolute'} pointer-events-auto`}
        style={{
          left: isMaximized || isMobile ? 'auto' : `${position.x}px`,
          top: isMaximized || isMobile ? 'auto' : `${position.y}px`,
        }}>
        <div
          className={`
            bg-[#C0C0C0] flex flex-col p-0.5 ${windowOutset}
            ${
              isMaximized
                ? 'fixed inset-0 w-screen h-screen'
                : isMobile
                ? 'w-[95vw] max-h-[85vh]'
                : `${width} ${height || 'h-fit'}`
            }
          `}>
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`bg-linear-to-r ${headerColor} px-2 py-1 flex justify-between items-center select-none ${
              isMaximized || isMobile ? 'cursor-default' : 'cursor-move'
            }`}>
            <div className='flex items-center gap-2 pointer-events-none text-white font-bold text-xs'>
              <span className='[image-rendering:pixelated] text-sm'>{icon}</span>
              <span className='truncate uppercase tracking-wider'>{title}</span>
            </div>

            <div className='flex gap-1'>
              <TitleBarButton Icon={Minus} onClick={onMinimize} />
              <TitleBarButton Icon={Square} onClick={onMaximize} />
              <TitleBarButton Icon={X} onClick={onClose} />
            </div>
          </div>
          <div className='px-2 py-0.5 flex gap-3 text-xs border-b border-gray-400 text-black bg-[#C0C0C0]'>
            {['File', 'Edit', 'View', 'Help'].map((item) => (
              <button key={item} className='hover:bg-[#000080] hover:text-white px-1 cursor-default outline-none'>
                <span className='underline'>{item[0]}</span>
                {item.slice(1)}
              </button>
            ))}
          </div>
          <div
            className={`
              m-1 flex-1 bg-white ${contentInset} 
              ${noPadding ? 'p-0' : 'p-4 md:p-6'} 
              ${scrollable ? 'overflow-y-auto' : 'overflow-hidden'} 
              scrollbar-retro
            `}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;

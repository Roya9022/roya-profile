import { useRef } from 'react';
import { Minus, Square, X } from 'lucide-react';
import type { Position } from '../../../types';
import { WIN_OUTSET, WIN_INSET } from '../../../constants/icons';
import TitleBarButton from '../intro-notepad/components/TitleBarButton';


interface ContentModalProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  children: React.ReactNode;
  headerColor?: string;
  width?: string;
  position: Position;
  onDrag: (pos: Position) => void;
  onFocus?: () => void;
  isMinimized?: boolean;
}

const ContentModal: React.FC<ContentModalProps> = ({
  title,
  onClose,
  onMinimize,
  children,
  headerColor = 'from-purple-800 to-purple-400',
  width = 'max-w-3xl',
  position,
  onDrag,
  onFocus,
  isMinimized = false,
}) => {
  const dragInfo = useRef({ isDragging: false, startX: 0, startY: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
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
    if (dragInfo.current.isDragging) {
      dragInfo.current.isDragging = false;
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    }
  };

  if (isMinimized) return null;

  return (
    <div className='relative z-50' onPointerDown={onFocus}>
      <div
        className='fixed inset-0 bg-black/10'
        onClick={(e) => {
          e.stopPropagation();
        }}
      />

      <div
        className={`absolute bg-[#C0C0C0] flex flex-col p-0.5 ${WIN_OUTSET} ${width} w-full max-h-[85vh] md:max-h-[80vh]`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          willChange: 'left, top',
        }}>
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`bg-linear-to-r ${headerColor} px-2 py-1 flex justify-between items-center select-none cursor-move touch-none`}>
          <div className='flex items-center gap-2 pointer-events-none text-white font-bold text-xs'>
            <span>📁</span>
            <span className='truncate'>{title}</span>
          </div>

          <div className='flex gap-1'>
            <TitleBarButton
              Icon={Minus}
              onClick={(e) => {
                e.stopPropagation();
                onMinimize?.();
              }}
            />
            <TitleBarButton
              Icon={Square}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <TitleBarButton
              Icon={X}
              className='ml-0.5'
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            />
          </div>
        </div>

        <div className='px-2 py-1 flex gap-2 md:gap-4 text-xs md:text-sm border-b border-gray-400 text-gray-800 bg-[#C0C0C0]'>
          {['File', 'Edit', 'View', 'Help'].map((item) => (
            <button
              key={item}
              className='hover:bg-blue-800 hover:text-white px-1 cursor-default focus:outline-none focus:bg-blue-800 focus:text-white'>
              <span className='underline'>{item[0]}</span>
              {item.slice(1)}
            </button>
          ))}
        </div>

        <div className={`m-0.5 overflow-auto flex-1 bg-white ${WIN_INSET}`}>{children}</div>
      </div>
    </div>
  );
};

export default ContentModal;

import { useState, useEffect, useRef } from 'react';
import type { Position } from '../../../types';

interface DraggableIconProps {
  label: string;
  onClick: () => void;
  position: Position;
  onDrag: (pos: Position) => void;
  imageSrc: string;
}

const DraggableIcon: React.FC<DraggableIconProps> = ({ imageSrc, label, onClick, position, onDrag }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    startPos.current = { x: e.clientX, y: e.clientY };
    if (isMobile) return;
    setIsDragging(true);
    dragOffset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    onDrag({ x: e.clientX - dragOffset.current.x, y: e.clientY - dragOffset.current.y });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging && !isMobile) {
      onClick();
    }

    if (isDragging) {
      setIsDragging(false);
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      const distance = Math.sqrt(
        Math.pow(e.clientX - startPos.current.x, 2) + Math.pow(e.clientY - startPos.current.y, 2)
      );
      if (distance < 5) {
        onClick();
      }
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={() => isMobile && onClick()}
      className={`relative md:absolute flex flex-col items-center gap-1 select-none touch-none w-20 md:w-24 p-2 rounded ${
        isDragging ? 'z-50 cursor-grabbing' : 'z-20 cursor-default'
      }`}
      style={{
        transform: !isMobile ? `translate3d(${position.x}px, ${position.y}px, 0)` : 'none',
        transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.1, 0.2, 0.1, 1)',
        left: 0,
        top: 0,
      }}>
      <div className='w-14 h-14 md:w-18 md:h-18 flex items-center justify-center pointer-events-none'>
        <img
          src={imageSrc}
          alt={label}
          className={`w-full h-full object-contain [image-rendering:pixelated] ${
            isDragging ? 'opacity-50' : 'opacity-100'
          }`}
        />
      </div>
      <span
        className={`text-white text-[10px] md:text-xs text-center leading-tight px-1 py-0.5 rounded pointer-events-none ${
          isDragging ? 'bg-[#000080]' : 'bg-transparent'
        } drop-shadow-[0_1px_1px_rgba(0,0,0,1)]`}>
        {label}
      </span>
    </div>
  );
};

export default DraggableIcon;

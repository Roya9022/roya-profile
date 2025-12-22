import { useState } from 'react';
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
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [clickTime, setClickTime] = useState(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    setClickTime(Date.now());
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    onDrag({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    if (Date.now() - clickTime < 200) {
      onClick();
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`absolute flex flex-col items-center gap-1 select-none touch-none ${
        isDragging ? 'z-50 cursor-grabbing' : 'z-20 cursor-default'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out',
      }}>
      <div className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center pointer-events-none'>
        <img
          src={imageSrc}
          alt={label}
          className={`w-full h-full object-contain image-pixelated ${isDragging ? 'opacity-50' : 'opacity-100'}`}
        />
      </div>
      <span
        className={`text-white text-xs md:text-sm text-center leading-tight px-2 py-0.5 rounded pointer-events-none ${
          isDragging ? 'bg-blue-600' : 'bg-black/30'
        } drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]`}>
        {label}
      </span>
    </div>
  );
};

export default DraggableIcon;

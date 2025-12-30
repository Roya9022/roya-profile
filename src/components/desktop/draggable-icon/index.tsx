import { useState, useEffect, useRef } from 'react';
import type { Position } from '@/types';

interface DraggableIconProps {
  label: string;
  onClick: () => void;
  position: Position;
  onDrag: (pos: Position) => void;
  imageSrc: string;
}

const DraggableIcon: React.FC<DraggableIconProps> = ({ imageSrc, label, onClick, position, onDrag }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const dragOffset = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 1024;

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsPressed(true);
    startPos.current = { x: e.clientX, y: e.clientY };

    if (!isMobile) {
      setIsDragging(true);
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isMobile) return;
    onDrag({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsPressed(false);
    if (isDragging) {
      setIsDragging(false);
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      const distance = Math.hypot(e.clientX - startPos.current.x, e.clientY - startPos.current.y);
      if (distance < 5) onClick();
    } else {
      onClick();
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`flex flex-col items-center gap-1 select-none touch-none w-20 md:w-24 p-2 ${
        isMobile ? 'relative' : 'absolute'
      } ${isDragging ? 'z-50 cursor-grabbing' : 'z-20 cursor-default'}`}
      style={{
        transform: isMobile ? 'none' : `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.1, 0.2, 0.1, 1)',
      }}>
      <div className='relative w-14 h-14 md:w-18 md:h-18 flex items-center justify-center pointer-events-none icon-selected-wrapper'>
        {isPressed && <div className='icon-selected-overlay' />}
        <img
          src={imageSrc}
          alt={label}
          className={`w-full h-full object-contain [image-rendering:pixelated] ${
            isPressed ? 'icon-selected-image' : ''
          }`}
        />
      </div>
      <span
        className={`text-[10px] md:text-xs text-center leading-tight px-1 py-0.5 pointer-events-none text-nowrap ${
          isPressed ? 'icon-selected-label' : 'text-white'
        } drop-shadow-[0_1px_1px_rgba(0,0,0,1)]`}>
        {label}
      </span>
    </div>
  );
};

export default DraggableIcon;

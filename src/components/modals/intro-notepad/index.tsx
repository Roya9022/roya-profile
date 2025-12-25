import { useState, useEffect } from 'react';
import { Minus, Square, X } from 'lucide-react';
import type { Position } from '../../../types';
import { WIN_OUTSET, WIN_INSET } from '../../../constants/icons';
import TitleBarButton from './components/TitleBarButton';

const IntroNotepad = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setWindowWidth(window.innerWidth);
      if (!mobile) {
        setPosition({
          x: Math.max(20, Math.floor((window.innerWidth - 450) / 2)),
          y: 120,
        });
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile || (e.target as HTMLElement).closest('button')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const lines = [
    'Hello, World!',
    "I'm Roya Azemi,",
    'a Front-End Software Engineer',
    "based in Maryland",
    "with 4+ years of experience.",

  ];

  return (
    <div
      className='relative mx-auto mb-10 mt-4 lg:absolute lg:mx-0 lg:mb-0 lg:mt-0 z-40 w-[90vw] sm:w-96 md:w-105 lg:w-130'
      style={{
        transform: !isMobile ? `translate3d(${position.x}px, ${position.y}px, 0)` : 'none',
        left: 0,
        top: 0,
      }}>
      <div className={`bg-[#C0C0C0] flex flex-col p-0.5 ${WIN_OUTSET}`}>
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`bg-linear-to-r from-blue-700 to-sky-400 px-2 py-1 flex justify-between items-center ${
            isMobile ? 'cursor-default' : 'cursor-move'
          } touch-none`}>
          <div className='flex items-center gap-2 pointer-events-none text-white font-bold text-xs select-none'>
            <span>📝</span> Untitled - Notepad
          </div>
          <div className='flex gap-1'>
            <TitleBarButton Icon={Minus} onClick={() => console.log('minimize')} />
            <TitleBarButton Icon={Square} onClick={() => console.log('maximize')} />
            <TitleBarButton Icon={X} className='ml-0.5' />
          </div>
        </div>
        <div
          className={`m-0.5 bg-white p-3 md:p-5 font-mono text-xs sm:text-sm md:text-base h-full ${WIN_INSET} relative`}>
          {windowWidth > 404 && (
            <img
              src='/me.png'
              alt='Roya Azemi'
              className='absolute top-2 right-2 w-20 h-20 md:w-25 md:h-25 lg:w-35 lg:h-35 object-contain'
            />
          )}

          {lines.map((line, index) => (
            <p key={index} className='mb-1 md:mb-2 text-black'>
              {line}
            </p>
          ))}
          <div className='flex items-end flex-wrap'>
            <p className='inline text-black'>Feel free to browse my desktop! :D</p>
            <span
              className={`ml-1 inline-block h-3 w-2 mb-0.5 md:h-5 md:w-2 bg-black ${!cursorVisible ? 'invisible' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroNotepad;

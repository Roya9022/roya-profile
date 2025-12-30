import React, { useState, useEffect } from 'react';
import { WIN_INSET, WIN_OUTSET } from '@/constants/icons';

interface TaskbarProps {
  windows: Array<{ id: string; title: string; isMinimized: boolean; isFocused: boolean; icon?: string }>;
  onStartClick: (e: React.MouseEvent) => void;
  onClickWindow: (id: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ windows = [], onStartClick, onClickWindow }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className='fixed bottom-0 w-full h-10 md:h-12 bg-[#C0C0C0] border-t-2 border-white z-[200] flex items-center px-1 md:px-2 gap-1 md:gap-2'>
      <button
        onClick={onStartClick}
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-[#C0C0C0] hover:brightness-110 active:shadow-inner active:translate-y-[1px] ${WIN_OUTSET}`}>
        <img
          src='/windows.png'
          alt='Start'
          className='w-5 h-5 md:w-6 md:h-6 object-contain [image-rendering:pixelated]'
        />
        <span className='font-bold text-xs md:text-sm'>Start</span>
      </button>
      <div className='h-6 md:h-8 w-0.5 bg-gray-400 border-r border-white mx-1' />
      <div className='flex-1 flex gap-1 overflow-x-auto h-full items-center no-scrollbar'>
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => onClickWindow(window.id)}
            className={`
              px-2 md:px-3 py-1 flex items-center gap-2 min-w-[100px] md:min-w-[150px] max-w-[200px]
              ${window.isFocused ? WIN_INSET + ' bg-[#dfdfdf]' : WIN_OUTSET + ' bg-[#C0C0C0]'}
              hover:brightness-110 transition-all
            `}>
            <span className='text-xs md:text-sm'>{window.icon || '📁'}</span>
            <span className={`text-xs md:text-sm truncate ${window.isFocused ? 'font-bold' : ''}`}>{window.title}</span>
          </button>
        ))}
      </div>
      <div
        className={`px-2 md:px-4 py-1 bg-[#C0C0C0] text-xs md:text-sm font-bold min-w-[80px] text-center ${WIN_INSET} shadow-inner`}>
        {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
      </div>
    </footer>
  );
};

export default Taskbar;

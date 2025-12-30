import { useState, useEffect } from 'react';
import { Power } from 'lucide-react';
import { GITHUB_LINK, LINKEDIN_LINK } from '@/constants/links';
const StartMenu: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleShutdownClick = () => {
    setShowMessage(true);
  };

  return (
    <div
      className='absolute bottom-11 md:bottom-12 left-2 w-[calc(100vw-16px)] max-w-70 md:max-w-75 bg-[#c0c0c0] border-0.5 border-white border-r-black border-b-black shadow-[2px_2px_0_0_#000] z-[999] flex'
      onClick={(e) => e.stopPropagation()}>
      {showMessage && (
        <div className='absolute -top-16 left-2 right-2 bg-sky-200 border border-black p-2 shadow-[2px_2px_0_0_#000] animate-bounce z-[1000]'>
          <div className='text-[11px] text-black text-center font-sans font-bold leading-tight'>
            Nooo, don't leave yet! <br /> Are you sure you've seen everything? •ᴗ•
          </div>
          <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[8px] border-t-black'></div>
          <div className='absolute -bottom-1.75 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-sky-200'></div>
        </div>
      )}
      <div className='w-6 md:w-8 bg-linear-to-b from-indigo-500 to-indigo-200 flex items-center justify-center shrink-0 overflow-hidden'>
        <span className='text-white font-bold -rotate-90 whitespace-nowrap tracking-widest text-sm md:text-lg uppercase inline-block'>
          Roya OS
        </span>
      </div>
      <div className='flex-1 flex flex-col min-w-0'>
        <div className='p-3 md:p-4 text-xs md:text-xs italic border-b border-gray-400 leading-relaxed text-gray-700 bg-white/30'>
          Welcome to Roya's PC! Explore my projects and experience my portfolio via the desktop icons!
        </div>
        <div className='py-1'>
          <a
            href={LINKEDIN_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full flex items-center gap-3 px-3 py-2 hover:bg-[#DFDFDF] hover:text-white text-sm group transition-colors'>
            <p className='text-2xl'>↗</p>
            <span className='truncate'>LinkedIn Profile</span>
          </a>
          <a
            href={GITHUB_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full flex items-center gap-3 px-3 py-2 hover:bg-[#DFDFDF] hover:text-white text-sm group transition-colors'>
            <p className='text-2xl'>↗</p>
            <span className='truncate'>GitHub Profile</span>
          </a>

          <div className='border-t border-white border-b my-1' />
          <button
            onClick={handleShutdownClick}
            className='w-full flex items-center justify-between px-3 py-2 hover:bg-[#DFDFDF] hover:text-white text-sm group transition-colors'>
            <div className='flex items-center gap-3 min-w-0'>
              <Power size={16} className='text-pink-500 group-hover:text-white shrink-0' />
              <span className='truncate'>Shut Down...</span>
            </div>
            <span className='text-[9px] opacity-50 font-mono hidden sm:inline ml-2 shrink-0'>Roya's PC</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;

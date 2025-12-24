const WIN95_OUTSET = 'border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600';
const WIN95_INSET = 'border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white';

const Taskbar: React.FC = () => {
  return (
    <footer
      className={`fixed bottom-0 w-full h-10 md:h-12 bg-[#C0C0C0] border-t-2 border-white z-100 flex items-center px-1 md:px-2 gap-1 md:gap-2`}>
      <button
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-[#C0C0C0] hover:brightness-110 active:pt-1.5 active:pl-2.5 ${WIN95_OUTSET}`}>
        <img
          src='/windows.png'
          alt='Start'
          className='w-5 h-5 md:w-6 md:h-6 object-contain [image-rendering:pixelated]'
        />
        <span className='font-bold text-xs md:text-sm hidden sm:inline'>Start</span>
      </button>
      <div className='h-6 md:h-8 w-0.5 bg-gray-400 border-r border-white mx-1' />
      <div className='flex-1 flex gap-1 overflow-x-auto h-full items-center'>
        <button
          className={`bg-[#C0C0C0] px-2 md:px-3 py-1 flex items-center gap-2 min-w-25 md:min-w-37.5 hover:brightness-110 shadow-sm ${WIN95_OUTSET}`}>
          <span className='text-xs md:text-sm'>📝</span>
          <span className='text-xs md:text-sm truncate font-bold text-black'>Untitled - Notepad</span>
        </button>
      </div>
      <div
        className={`px-2 md:px-4 py-1 bg-[#C0C0C0] text-xs md:text-sm font-bold min-w-20 text-center ${WIN95_INSET}`}>
        {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
      </div>
    </footer>
  );
};

export default Taskbar;

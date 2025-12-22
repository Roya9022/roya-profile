const Taskbar: React.FC = () => {
  return (
    <div className='fixed bottom-0 w-full h-10 md:h-12 bg-[#E0E0E0] border-t-2 border-white shadow-[0_-2px_4px_rgba(0,0,0,0.2)] z-40 flex items-center px-1 md:px-2 gap-1 md:gap-2'>
      <button className='flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-gray-300 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-gray-600 border-b-gray-600 hover:brightness-110 shadow-sm'>
        <img
          src='/windows.png'
          alt='Start'
          className='w-6 h-6 md:w-7 md:h-7 object-contain [image-rendering:pixelated] scale-95'
        />
        <span className='font-bold text-xs md:text-sm hidden sm:inline'>Start</span>
      </button>
      <div className='h-6 md:h-8 w-0.5 bg-gray-400 border-r border-white mx-1' />
      <div className='flex-1' />
      <div className='px-2 md:px-3 py-1 bg-gray-300 border-t-2 border-l-2 border-gray-600 border-r-2 border-b-2 text-xs md:text-sm font-bold'>
        {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
      </div>
    </div>
  );
};

export default Taskbar;

interface MyComputerProps {
  onClose: () => void;
}

const MyComputer: React.FC<MyComputerProps> = ({ onClose }) => {
  const fieldsetClasses =
    'relative border-2 border-white border-b-[#808080] border-r-[#808080] p-4 pt-6 shadow-[inset_1px_1px_0_0_#808080]';
  const labelClasses = 'absolute -top-3 left-3 bg-[#C0C0C0] px-2 text-xs font-bold uppercase';

  return (
    <div className='border border-gray-500 bg-[#C0C0C0] h-full flex flex-col font-mono text-black selection:bg-[#000080] selection:text-white'>
      <div className='p-4 sm:p-6 flex-1 overflow-auto'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-start'>
          <div className='flex flex-col items-center gap-4 min-w-30'>
            <div className='p-2 bg-white/20 rounded shadow-inner'>
              <img
                src='/my-computer.png'
                className='w-20 h-20 sm:w-28 sm:h-28 [image-rendering:pixelated] drop-shadow-md'
                alt='Computer System Icon'
              />
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-6 md:gap-8 w-full'>
            <fieldset className={fieldsetClasses}>
              <legend className={labelClasses}>System:</legend>
              <div className='space-y-1 text-sm'>
                <p className='text-black font-semibold'>Windows 98 (Roya Special Edition)</p>
                <p className='text-gray-700 italic text-xs'>Version 2025.1.0</p>
              </div>
            </fieldset>
            <fieldset className={fieldsetClasses}>
              <legend className={labelClasses}>Registered to:</legend>
              <div className='space-y-1'>
                <p className='text-lg font-bold text-violet-400 tracking-tight'>ROYA-PC</p>
                <p className='text-sm text-gray-700'>2025-FRONTEND-ENGINEER</p>
              </div>
            </fieldset>
            <fieldset className={fieldsetClasses}>
              <legend className={`${labelClasses}`}>Computer Specs:</legend>
              <table className='w-full text-sm'>
                <tbody>
                  <tr className='align-top'>
                    <td className='font-bold pr-3 pb-2 text-black whitespace-nowrap'>Processor:</td>
                    <td className='pb-2 text-gray-900'>Frontend Engineer @ 233MHz</td>
                  </tr>
                  <tr className='align-top'>
                    <td className='font-bold pr-3 pb-2 text-black whitespace-nowrap'>Memory:</td>
                    <td className='pb-2 text-gray-900'>32MB Problem-Solving RAM</td>
                  </tr>
                  <tr className='align-top'>
                    <td className='font-bold pr-3 pb-2 text-black whitespace-nowrap'>Graphics:</td>
                    <td className='pb-2 text-gray-900'>TypeScript/React Accelerator</td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          </div>
        </div>
        <div className='mt-8 md:mt-12 flex justify-end'>
          <button
            onClick={onClose}
            className='min-w-18.75 px-6 py-1.5 bg-[#C0C0C0] text-sm font-bold border-2
             border-t-white border-l-white border-b-[#000000] border-r-[#000000] 
             shadow-[inset_-1px_-1px_0_0_#808080,inset_1px_1px_0_0_#DFDFDF] active:border-t-[#000000] 
             active:border-l-[#000000] active:border-b-white active:border-r-white active:shadow-[inset_1px_1px_0_0_#808080]
             hover:bg-[#DFDFDF] focus:outline-dotted focus:outline-1 focus:outline-black focus:-outline-offset-4'
            type='button'
            aria-label='Close My Computer properties'>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComputer;

import React from 'react';
import { RetroFieldset, RetroButton } from '@/shared';

interface MyComputerProps {
  onClose: () => void;
}

const fieldsetWrapperClass = '[&>legend]:text-violet-500';

const MyComputer: React.FC<MyComputerProps> = ({ onClose }) => {
  return (
    <div className='border border-gray-500 bg-[#C0C0C0] h-full flex flex-col font-mono text-black selection:bg-[#000080] selection:text-white'>
      <div className='p-4 sm:p-6 flex-1 overflow-auto'>
        <h2 className='text-lg font-bold text-sky-500 mb-6'>MY COMPUTER</h2>
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
            <RetroFieldset label='System:' className={fieldsetWrapperClass}>
              <div className='space-y-1 text-sm'>
                <p className='text-black font-semibold'>Windows 98 (Roya Special Edition)</p>
                <p className='text-gray-700 italic text-xs'>Version 2025.1.0</p>
              </div>
            </RetroFieldset>
            <RetroFieldset label='Registered to:' className={fieldsetWrapperClass}>
              <div className='space-y-1'>
                <p className='text-lg font-bold  tracking-tight'>ROYA-PC</p>
                <p className='text-sm text-gray-700'>2025-FRONTEND-ENGINEER</p>
              </div>
            </RetroFieldset>
            <RetroFieldset label='Computer Specs:' className={fieldsetWrapperClass}>
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
            </RetroFieldset>
          </div>
        </div>
        <div className='mt-8 md:mt-12 flex justify-end'>
          <RetroButton onClick={onClose} className='min-w-20'>
            OK
          </RetroButton>
        </div>
      </div>
    </div>
  );
};

export default MyComputer;

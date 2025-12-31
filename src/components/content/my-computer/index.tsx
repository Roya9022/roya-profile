import React from 'react';
import { RetroFieldset, RetroButton } from '@/shared';

interface MyComputerProps {
  onClose: () => void;
}

const fieldsetWrapperClass = '[&>legend]:text-violet-500 [&>legend]:text-[10px] md:[&>legend]:text-sm';

const MyComputer: React.FC<MyComputerProps> = ({ onClose }) => {
  return (
    <div className='border border-gray-500 bg-[#C0C0C0] h-full flex flex-col font-mono text-black'>
      <div className='p-3 sm:p-6 flex-1 overflow-auto scrollbar-retro'>
        <h2 className='text-sm md:text-lg font-bold text-sky-500 mb-3 md:mb-6 uppercase'>MY COMPUTER</h2>
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center'>
          <div className='flex flex-col items-center gap-2 mx-auto md:mx-0 w-full md:w-auto'>
            <div className='p-1.5 bg-white/20 rounded shadow-inner w-full md:w-auto flex justify-center'>
              <picture>
                <source srcSet='/my-computer.png' media='(min-width: 768px)' />
                <img
                  src='/my-workspace.png'
                  className='w-auto h-16 md:w-28 md:h-28 [image-rendering:pixelated] drop-shadow-md object-contain'
                  alt='My Workspace'
                />
              </picture>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-3 md:gap-8 w-full'>
            <RetroFieldset label='System:' className={fieldsetWrapperClass}>
              <div className='space-y-0.5 text-[11px] md:text-sm'>
                <p className='text-black font-semibold'>Nostalgia OS (Roya Special Edition)</p>
                <p className='text-gray-700'>Version 2026.1.0</p>
              </div>
            </RetroFieldset>
            <RetroFieldset label='Registered to:' className={fieldsetWrapperClass}>
              <div className='space-y-0.5 text-[11px] md:text-sm'>
                <p className='text-xs md:text-lg font-bold tracking-tight'>ROYA-PC</p>
                <p className='text-gray-700'>2026-FRONTEND-ENGINEER</p>
              </div>
            </RetroFieldset>
            <RetroFieldset label='Computer Specs:' className={fieldsetWrapperClass}>
              <table className='w-full text-[11px] md:text-sm'>
                <tbody>
                  <tr className='align-top'>
                    <td className='font-bold pr-2 pb-1 text-black whitespace-nowrap'>CPU:</td>
                    <td className='pb-1 text-gray-900'>Frontend Engineer @ 233MHz</td>
                  </tr>
                  <tr className='align-top'>
                    <td className='font-bold pr-2 pb-1 text-black whitespace-nowrap'>RAM:</td>
                    <td className='pb-1 text-gray-900'>32MB Problem-Solving</td>
                  </tr>
                  <tr className='align-top'>
                    <td className='font-bold pr-2 pb-1 text-black whitespace-nowrap'>GPU:</td>
                    <td className='pb-1 text-gray-900'>React Accelerator</td>
                  </tr>
                </tbody>
              </table>
            </RetroFieldset>
          </div>
        </div>
        <div className='mt-4 md:mt-12 flex justify-end'>
          <RetroButton onClick={onClose} className='min-w-16 h-7 text-[11px] md:text-sm px-4'>
            OK
          </RetroButton>
        </div>
      </div>
    </div>
  );
};

export default MyComputer;

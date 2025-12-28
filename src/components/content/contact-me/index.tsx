import { RetroFieldset, RetroButton } from '@/shared';

const ContactMe: React.FC = () => {
  return (
    <div className='flex-1 overflow-auto '>
      <RetroFieldset className='bg-[#C0C0C0]'>
        <div className='flex flex-col gap-4 '>
          <RetroButton href='mailto:azemiroya@gmail.com' className='w-full !justify-start !p-3'>
            <span className='text-xl'>📧</span>
            <div className='text-left ml-2'>
              <div className='text-[10px] uppercase text-gray-500'>Email</div>
              <div className='text-sm text-black'>azemiroya@gmail.com</div>
            </div>
          </RetroButton>
          <RetroButton
            href='https://www.linkedin.com/in/roya-azemi/'
            target='_blank'
            className='w-full !justify-start !p-3'>
            <span className='text-xl'>💼</span>
            <div className='text-left ml-2'>
              <div className='text-[10px] uppercase text-gray-500'>LinkedIn</div>
              <div className='text-sm text-black'>linkedin.com/in/roya9022</div>
            </div>
          </RetroButton>
        </div>
        <div className='mt-6 text-center text-[10px] text-gray-600 uppercase italic tracking-widest'>
          *** Status: Online ***
        </div>
      </RetroFieldset>
    </div>
  );
};

export default ContactMe;

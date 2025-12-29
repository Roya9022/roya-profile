import React from 'react';
import { RetroFieldset, RetroButton } from '@/shared';

interface ContactItemProps {
  imageName: string;
  label: string;
  value: string;
  href: string;
  target?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ imageName, label, value, href, target }) => (
  <RetroButton href={href} target={target} className='w-full justify-start! p-2!'>
    <div className='retro-icon-recessed'>
      <img src={`/contact-me/${imageName}`} alt={label} />
    </div>

    <div className='text-left ml-4'>
      <div className='uppercase text-gray-600 leading-none mb-0.5'>{label}</div>
      <div className='font-medium'>{value}</div>
    </div>
  </RetroButton>
);

const ContactMe: React.FC = () => {
  return (
    <div className='flex-1 overflow-auto'>
      <RetroFieldset className='bg-[#C0C0C0]'>
        <div className='flex flex-col gap-4 mb-4'>
          <ContactItem
            imageName='email.png'
            label='Email'
            value='azemiroya@gmail.com'
            href='mailto:azemiroya@gmail.com'
          />
          <ContactItem
            imageName='linkedin.png'
            label='LinkedIn'
            value='linkedin.com/in/roya-azemi/'
            href='https://www.linkedin.com/in/roya-azemi/'
            target='_blank'
          />
          <ContactItem
            imageName='github.png'
            label='GitHub'
            value='github.com/Roya9022'
            href='https://github.com/Roya9022'
            target='_blank'
          />
        </div>
        <div className='system-log-footer'>*** Status: Online ***</div>
      </RetroFieldset>
    </div>
  );
};

export default ContactMe;

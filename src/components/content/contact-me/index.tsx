import React from 'react';
import { RetroFieldset, RetroButton } from '@/shared';
import { GITHUB_LINK, LINKEDIN_LINK, MY_EMAIL } from '@/constants/links';

interface ContactItemProps {
  imageName: string;
  label: string;
  value: string;
  href: string;
  target?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ imageName, label, value, href, target }) => (
  <RetroButton href={href} target={target} className='w-full justify-start! p-2!'>
    <div className='retro-icon-recessed shrink-0'>
      <img src={`/contact-me/${imageName}`} alt={label} className='w-6 h-6 md:w-8 md:h-8' />
    </div>

    <div className='text-left ml-3 md:ml-4 overflow-hidden'>
      <div className='uppercase text-gray-600 text-[9px] md:text-[10px] leading-none mb-0.5'>{label}</div>
      <div className='font-medium text-xs md:text-sm truncate'>{value}</div>
    </div>
  </RetroButton>
);

const ContactMe: React.FC = () => {
  return (
    <div className='flex-1 overflow-auto'>
      <RetroFieldset className='bg-[#C0C0C0]'>
        <div className='flex flex-col gap-3 md:gap-4 mb-4'>
          <ContactItem imageName='email.png' label='Email' value='azemiroya@gmail.com' href={`mailto:${MY_EMAIL}`} />
          <ContactItem
            imageName='linkedin.png'
            label='LinkedIn'
            value={LINKEDIN_LINK}
            href={LINKEDIN_LINK}
            target='_blank'
          />
          <ContactItem imageName='github.png' label='GitHub' value={GITHUB_LINK} href={GITHUB_LINK} target='_blank' />
        </div>
        <div className='system-log-footer text-[10px]'>*** Status: Online ***</div>
      </RetroFieldset>
    </div>
  );
};

export default ContactMe;

import React from 'react';
import { RetroFieldset } from '@/shared';
import text from '@/content/text.json';

const AboutMe: React.FC = () => {
  const fieldsetWrapperClass = 'mb-4 md:mb-8 [&>legend]:text-violet-500 [&>legend]:text-xs md:[&>legend]:text-sm';
  const aboutMeText = text.aboutMe;

  return (
    <div className='border border-gray-500 bg-[#C0C0C0] h-full overflow-y-auto p-4 sm:p-6'>
      <h2 className='text-base md:text-lg font-bold text-sky-500 mb-3 md:mb-6 uppercase'>{aboutMeText.header}</h2>
      <RetroFieldset label={aboutMeText.introLabel} className={fieldsetWrapperClass}>
        <p className='text-gray-800 text-xs md:text-sm leading-relaxed'>{aboutMeText.intro}</p>
      </RetroFieldset>
      <RetroFieldset label={aboutMeText.childhoodLabel} className={fieldsetWrapperClass}>
        <p className='text-gray-800 text-xs md:text-sm leading-relaxed'>{aboutMeText.childhood}</p>
      </RetroFieldset>
      <RetroFieldset label={aboutMeText.educationLabel} className={fieldsetWrapperClass}>
        <p className='text-gray-800 text-xs md:text-sm leading-relaxed'>{aboutMeText.education}</p>
      </RetroFieldset>
      <RetroFieldset label={aboutMeText.hobbiesLabel} className={fieldsetWrapperClass}>
        <p className='text-gray-800 text-xs md:text-sm leading-relaxed'>{aboutMeText.hobbies}</p>
      </RetroFieldset>
      <RetroFieldset label={aboutMeText.thanksLabel} className={fieldsetWrapperClass}>
        <p className='text-gray-800 text-xs md:text-sm italic leading-relaxed'>{aboutMeText.thanks}</p>
      </RetroFieldset>
      <div className='system-log-footer text-[10px] md:text-xs opacity-80'>{aboutMeText.log}</div>
    </div>
  );
};

export default AboutMe;

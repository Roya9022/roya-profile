import React from 'react';
import { RetroFieldset } from '@/shared';

const AboutMe: React.FC = () => {
  const fieldsetWrapperClass = 'mb-8 [&>legend]:text-violet-500';

  return (
    <div
      className='bg-[#C0C0C0] max-h-125 overflow-y-auto p-4 sm:p-6 
    font-mono text-sm scrollbar-retro 
    shadow-[inset_1px_1px_0_0_#000]'>
      <h2 className='text-lg font-bold text-sky-500 mb-6'>ABOUT ME</h2>
      <RetroFieldset label='User Identification:' className={fieldsetWrapperClass}>
        <p className='text-gray-800'>
          My name is Roya and I'm a front-end software engineer with a passion for creating engaging and functional web
          experiences. This portfolio is a reflection of what first made me fall in love with computers and serves as a
          small homage to those early sparks of curiosity and creativity.
        </p>
      </RetroFieldset>
      <RetroFieldset label='System History:' className={fieldsetWrapperClass}>
        <p className='text-gray-800'>
          As a 90s kid, I spent countless hours on the computer playing games like RollerCoaster Tycoon and drawing in
          Paint. I still remember how much I loved computer class in elementary school, especially the days when we were
          allowed to open Paint, create whatever we wanted, and take our drawings home on a floppy disk. Those moments
          stay with me, and that is why I knew I had to include them here.
        </p>
      </RetroFieldset>
      <RetroFieldset label='Kernel Update:' className={fieldsetWrapperClass}>
        <p className='text-gray-800'>
          I originally studied electrical engineering and went on to complete my master’s degree. Along the way, I
          discovered that what truly excited me was creating and working with visuals. I found myself drawn to building
          interfaces and bringing ideas to life on the screen, which eventually led me to front end development. I am
          largely self taught and genuinely enjoy learning, experimenting, and improving a little more every day.
        </p>
      </RetroFieldset>
      <RetroFieldset label='Background Processes:' className={fieldsetWrapperClass}>
        <p className='text-gray-800'>
          Outside of coding, I enjoy reading, playing video games, working out (trying :D), listening to all kinds of
          music, taking photos, doing crafts like knitting (only scarves for now), and spending time with my cat Felix.
          I am naturally curious, positive, and always striving to improve both my technical and soft skills.
        </p>
      </RetroFieldset>
      <RetroFieldset label='Session Summary:' className={fieldsetWrapperClass}>
        <p className='text-gray-800 italic'>
          Thank you for taking the time to look through my profile. I hope you enjoy exploring my work as much as I
          enjoy creating it!
        </p>
      </RetroFieldset>
      <div className='text-center text-[10px] text-gray-500 pb-2 italic uppercase tracking-widest'>
        *** Log Terminated ***
      </div>
    </div>
  );
};

export default AboutMe;

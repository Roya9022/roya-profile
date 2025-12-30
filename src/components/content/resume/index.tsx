import React from 'react';
import { RetroFieldset } from '@/shared';

const fieldsetWrapperClass = 'mb-6 [&>legend]:text-violet-500 [&>legend]:text-xs md:[&>legend]:text-sm space-y-4';

interface ResumeItemProps {
  title: string;
  company?: string;
  period?: string;
  description?: string;
  bullets?: string[];
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, company, period, description, bullets }) => (
  <div className='text-xs md:text-sm'>
    <div className='flex flex-col sm:flex-row justify-between font-bold text-black gap-1'>
      <span>
        {title}
        {company ? ` — ${company}` : ''}
      </span>
      <span className='text-[10px] md:text-xs text-gray-600 font-normal whitespace-nowrap'>{period}</span>
    </div>
    {description && <p className='italic text-gray-600 text-[11px] md:text-xs mb-2'>{description}</p>}
    {bullets && bullets.length > 0 && (
      <ul className='list-disc pl-4 space-y-1.5 text-gray-800 text-[11px] md:text-xs'>
        {bullets.map((bullet, index) => (
          <li key={index} className='leading-relaxed'>
            {bullet}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Resume: React.FC = () => {
  return (
    <div className='border border-gray-500 p-4 bg-[#C0C0C0] h-full flex flex-col overflow-y-auto pr-2 scrollbar-retro max-h-161.25'>
      <section className='space-y-1 mb-6'>
        <h2 className='text-lg md:text-xl font-bold uppercase text-sky-500 mb-4'>RESUME</h2>
        <p className='font-bold text-base md:text-lg text-black'>Front-End Software Engineer</p>
        <p className='text-gray-700 text-xs md:text-sm'>+1 484-843-3993 | Fruitland, MD</p>
        <p className='text-gray-700 text-xs md:text-sm'>azemiroya@gmail.com | linkedin.com/in/roya-azemi/</p>
      </section>

      <p className='leading-relaxed mb-8 text-xs md:text-sm text-gray-900'>
        Front-End Software Engineer with 4+ years of experience building scalable, high-traffic web applications used by
        millions of users. Specialized in React and TypeScript, with strong expertise in performance optimization,
        design systems, and building reusable, maintainable front-end architectures for mobile and desktop platforms.
      </p>

      <RetroFieldset label='Experience' className={fieldsetWrapperClass}>
        <ResumeItem
          title='Front-End Software Engineer'
          company='Digikala'
          period='Oct 2024 – Jul 2025'
          description='E-commerce platform with 40M+ monthly visitors'
          bullets={[
            'Architected scalable front-end features for Transportation and Admin Platforms using React and Zustand.',
            'Built interactive dashboards with Chart.js and TanStack Table featuring complex filtering.',
            'Developed admin tools for station data and geo-location using React Leaflet.',
            'Developed accessible (WCAG 2.1) UI components with Tailwind CSS and Storybook.',
          ]}
        />
        <ResumeItem
          title='Front-End Developer'
          company='Ramzinex'
          period='Feb 2021 – Apr 2024'
          description='Founding Crypto Exchange with 2M+ active users'
          bullets={[
            'Redesigned core PWA financial pages, reducing user-reported errors by ~35%.',
            'Engineered scalable features using TypeScript and Redux for 2M+ users.',
            'Optimized performance (lazy loading, memoization), reducing load times by ~20%.',
            'Improved SEO initiatives implementing SSR/SSG and dynamic metadata.',
          ]}
        />
      </RetroFieldset>

      <RetroFieldset label='Skills' className={fieldsetWrapperClass}>
        <ResumeItem
          title='Technical Proficiencies'
          bullets={[
            'Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript',
            'Frameworks: React.js, Next.js, Material-UI, Tailwind CSS',
            'State: Redux, Zustand, React Query',
            'Testing: Jest, React Testing Library',
            'Tools: Git, Docker, Storybook, Agile/Scrum',
          ]}
        />
      </RetroFieldset>

      <div className='system-log-footer mt-4 text-[10px] md:text-xs'>
        *** System Status: Powered by React and caffeine ***
      </div>
    </div>
  );
};

export default Resume;

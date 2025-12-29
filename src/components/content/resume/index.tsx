import React from 'react';
import { RetroFieldset } from '@/shared';

const fieldsetWrapperClass = 'mb-6 [&>legend]:text-violet-500 space-y-4';

interface ResumeItemProps {
  title: string;
  company?: string;
  period?: string;
  description?: string;
  bullets?: string[];
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, company, period, description, bullets }) => (
  <div>
    <div className='flex flex-col sm:flex-row justify-between font-bold text-black'>
      <span>
        {title}
        {company ? ` — ${company}` : ''}
      </span>
      <span className='text-xs sm:text-sm text-gray-600 font-normal whitespace-nowrap'>{period}</span>
    </div>
    <p className='italic text-gray-600 text-sm mb-2'>{description}</p>
    {bullets && bullets.length > 0 && (
      <ul className='list-disc pl-4 space-y-1.5 text-gray-800'>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

const Resume: React.FC = () => {
  return (
    <div className='border border-gray-500 p-4 bg-[#C0C0C0] h-full flex flex-col overflow-y-auto pr-2 scrollbar-retro max-h-161.25'>
      <section className='space-y-1 mb-3.5'>
        <h2 className='text-xl font-bold uppercase text-sky-500 mb-4'>RESUME</h2>
        <p className='font-bold text-lg text-black'>Front-End Software Engineer</p>
        <p className='text-gray-700 text-sm'>+1 484-843-3993 | Fruitland, MD</p>
        <p className='text-gray-700 text-sm'>azemiroya@gmail.com | linkedin.com/in/roya-azemi/</p>
      </section>
      <p className='leading-relaxed mb-7'>
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
            'Architected scalable front-end features for Transportation and Admin Platforms using React and Zustand, improving workflow efficiency and long-term maintainability.',
            'Built interactive dashboards with Chart.js and TanStack Table, featuring sortable tables, filtering, and visual progress tracking for data-driven decisions.',
            'Developed admin tools for station data, ticket management, and geo-location (React Leaflet) to streamline operations.',
            'Developed high-quality, accessible (WCAG 2.1-compliant) UI components with Tailwind CSS and Storybook, ensuring responsive, inclusive, and consistent design across projects.',
            'Collaborated with UX designers, back-end engineers, and researchers to translate design concepts into responsive, production-ready front-end systems supporting millions of users.',
          ]}
        />
        <ResumeItem
          title='Front-End Developer'
          company='Tosan Techno'
          period='Jul 2024 – Oct 2024'
          description='Fintech / Virtual Banking provider'
          bullets={[
            'Refactored and unified two state machines into a single robust system, enhancing frontend code structure, simplifying debugging, reducing potential errors, and improving maintainability and scalability.',
            'Enhanced component reusability and centralized state management to strengthen scalability and code quality.',
          ]}
        />
        <ResumeItem
          title='Front-End Developer'
          company='Ramzinex'
          period='Feb 2021 – Apr 2024'
          description='Founding Crypto Exchange with 2M+ active users'
          bullets={[
            'Redesigned and optimized core PWA financial pages (Wallet, Deposit, Withdraw, Portfolio, Security, Referral, Easy Trade), reducing user-reported errors by ~35% while improving accessibility compliance (WCAG 2.1) and overall usability.',
            'Engineered scalable frontend features using TypeScript, Redux, and REST APIs, including an API Management module for 2M+ users, handling authentication flows, error states, and endpoint validation with Postman and Swagger.',
            'Built responsive onboarding and account-security flows with Next.js (PIN Lock, password change), increasing mobile sign-up completion by ~50% and strengthening user trust and platform security.',
            'Established reusable frontend components and shared UI patterns, standardizing code structure and improving development speed, maintainability, and consistency across multiple product areas throughout the project.',
            'Designed and implemented a lightweight in-app feedback and rating system integrated with the Google Sheets API, enabling thousands of users to submit feedback without backend infrastructure and accelerating product iteration cycles.',
            'Optimized application performance through code-splitting, lazy loading, memoization, and image optimization, reducing load times by ~20% and improving Core Web Vitals.',
            'Improved SEO and growth initiatives by implementing dynamic meta tags, structured data, Open Graph metadata, optimized routing with sitemaps and canonical tags, SSR/SSG, and Google Analytics (gtag) event tracking to support user acquisition and campaign analysis.',
            'Built and launched a referral program using reusable components and centralized state management, contributing to increased user engagement and platform adoption.',
            'Integrated automated testing with Jest and React Testing Library to improve reliability and reduce regression risk.',
            'Collaborated cross-functionally with UX designers, researchers, and engineers in Agile/Scrum teams to ship responsive, accessible, production-ready React and Next.js applications at scale.',
          ]}
        />
      </RetroFieldset>
      <RetroFieldset label='Personal Projects' className={fieldsetWrapperClass}>
        <ResumeItem
          title='Charity Finder - Next.js, TypeScript, Material-UI'
          company='Ramzinex'
          description='A centralized platform for discovering and supporting charities, helping users find donation opportunities easily and make an impact'
          bullets={[
            'Developing a production-ready charity discovery platform using Next.js and TypeScript, featuring dynamic routing, filtering, and search across 50+ organizations.',
            'Designing the project end-to-end, focusing on scalability, accessibility, and clean component architecture, and deploying it with CI/CD on Vercel.',
          ]}
        />
        <ResumeItem
          title='Healthcare Dashboard - React, TypeScript, Material-UI'
          description='A digital healthcare management platform dashboard.'
          bullets={[
            'Developed a medical monitoring dashboard visualizing real-time patient vitals using **Chart.js**.',
            'Implemented a secure user data view for healthcare providers to track patient history and demographic information in a centralized interface.',
          ]}
        />
      </RetroFieldset>
      <RetroFieldset label='Education' className={fieldsetWrapperClass}>
        <ResumeItem
          title='M.Sc. in Planning and Management of Electrical Energy Systems'
          description='Amirkabir University of Technology - Tehran Polytechnic'
        />
        <ResumeItem title='B.Sc in Electrical Engineering' description='International University of Imam Reza' />
      </RetroFieldset>
      <RetroFieldset label='Skills' className={fieldsetWrapperClass}>
        <ResumeItem
          title='Front-End'
          bullets={['HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, PWA, Flexbox, CSS, Grid']}
        />
        <ResumeItem
          title='UI Frameworks'
          bullets={['Material-UI, Tailwind CSS, Storybook, TanStack Table, React Leaflet,Chart.js']}
        />
        <ResumeItem title='State & APIs' bullets={['Redux, Zustand, React Query, REST, Axios, Postman, Swagger']} />
        <ResumeItem title='Testing & Quality' bullets={['Jest, React Testing Library, ESLint, WCAG 2.1 compliance']} />
        <ResumeItem
          title='Tools & Practices'
          bullets={['Git, GitHub, CI/CD, Agile/Scrum, Performance optimization, SEO (SSR/SSG), Accessibility']}
        />
        <ResumeItem title='Currently Learning' bullets={['AWS, LLMs & AI integration']} />
      </RetroFieldset>
      <div className='system-log-footer'>*** System Status: Powered by React and caffeine ***</div>
    </div>
  );
};

export default Resume;

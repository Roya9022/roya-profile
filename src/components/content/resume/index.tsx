import React from 'react';
import { RetroFieldset } from '@/shared';

const fieldsetWrapperClass = 'mb-6 [&>legend]:text-violet-500';

const Resume: React.FC = () => {
  return (
    <div className='border border-gray-500 p-4 bg-[#C0C0C0] h-full flex flex-col overflow-y-auto pr-2 scrollbar-retro max-h-161.25'>
      <section className='space-y-1'>
        <h2 className='text-xl font-bold uppercase text-sky-500 mb-4'>RESUME</h2>
        <p className='font-bold'>Front-End Software Engineer</p>
        <p className='text-gray-600 text-xs'>+1 484-843-3993 | Fruitland, MD</p>
        <p className='text-gray-600 text-xs'>azemiroya@gmail.com | linkedin.com/in/roya-azemi/</p>
      </section>
      <p className='text-gray-700 leading-relaxed mb-4'>
        Front-End Software Engineer with 4+ years of experience building scalable, high-traffic web applications used by
        millions of users. Specialized in React and TypeScript, with strong expertise in performance optimization,
        design systems, and building reusable, maintainable front-end architectures for mobile and desktop platforms.
        Passionate about delivering reliable, intuitive user experiences through clean architecture and cross-functional
        collaboration.
      </p>
      <RetroFieldset label='Experience' className={fieldsetWrapperClass}>
        <div className='space-y-6'>
          <div>
            <div className='flex flex-col sm:flex-row justify-between font-bold text-black'>
              <span>Front-End Software Engineer — Digikala</span>
              <span className='text-xs sm:text-sm text-gray-500 font-normal'>Oct 2024 – Jul 2025</span>
            </div>
            <p className='italic text-gray-600 text-[11px] mb-2'>E-commerce platform with 40M+ monthly visitors</p>
            <ul className='list-disc pl-4 space-y-1 text-gray-800 text-[13px]'>
              <li>
                Architected scalable front-end features for Transportation and Admin Platforms using React and Zustand,
                improving workflow efficiency and long-term maintainability.
              </li>
              <li>
                Built interactive dashboards with Chart.js and TanStack Table, featuring sortable tables, filtering, and
                visual progress tracking for data-driven decisions.
              </li>
              <li>
                Developed admin tools for station data, ticket management, and geo-location (React Leaflet) to
                streamline operations.
              </li>
              <li>
                Developed high-quality, accessible (WCAG 2.1-compliant) UI components with Tailwind CSS and Storybook,
                ensuring responsive, inclusive, and consistent design across projects.
              </li>
              <li>
                • Collaborated with UX designers, back-end engineers, and researchers to translate design concepts into
                responsive, production-ready front-end systems supporting millions of users.
              </li>
            </ul>
          </div>
          <div>
            <div className='flex flex-col sm:flex-row justify-between font-bold text-black'>
              <span>Front-End Developer — Tosan Techno</span>
              <span className='text-xs sm:text-sm text-gray-500 font-normal'>Jul 2024 – Oct 2024</span>
            </div>
            <p className='italic text-gray-600 text-[11px] mb-2'>Fintech / Virtual Banking provider</p>
            <ul className='list-disc pl-4 space-y-1 text-gray-800 text-[13px]'>
              <li>
                Refactored and unified two state machines into a single robust system, enhancing frontend code
                structure, simplifying debugging, reducing potential errors, and improving maintainability and
                scalability.
              </li>
              <li>
                Enhanced component reusability and centralized state management to strengthen scalability and code
                quality.
              </li>
            </ul>
          </div>
          <div>
            <div className='flex flex-col sm:flex-row justify-between font-bold text-black'>
              <span>Front-End Developer — Ramzinex</span>
              <span className='text-xs sm:text-sm text-gray-500 font-normal'>Feb 2021 – Apr 2024</span>
            </div>
            <p className='italic text-gray-600 text-[11px] mb-2'>Founding Crypto Exchange with 2M+ active users</p>
            <ul className='list-disc pl-4 space-y-1 text-gray-800 text-[13px]'>
              <li>
                Redesigned and optimized core PWA financial pages (Wallet, Deposit, Withdraw, Portfolio, Security,
                Referral, Easy Trade), reducing user-reported errors by ~35% while improving accessibility compliance
                (WCAG 2.1) and overall usability.
              </li>
              <li>
                Engineered scalable frontend features using TypeScript, Redux, and REST APIs, including an API
                Management module for 2M+ users, handling authentication flows, error states, and endpoint validation
                with Postman and Swagger.
              </li>
              <li>
                Built responsive onboarding and account-security flows with Next.js (PIN Lock, password change),
                increasing mobile sign-up completion by ~50% and strengthening user trust and platform security.
              </li>
              <li>
                Established reusable frontend components and shared UI patterns, standardizing code structure and
                improving development speed, maintainability, and consistency across multiple product areas throughout
                the project.
              </li>
              <li>
                Designed and implemented a lightweight in-app feedback and rating system integrated with the Google
                Sheets API, enabling thousands of users to submit feedback without backend infrastructure and
                accelerating product iteration cycles.
              </li>
              <li>
                Optimized application performance through code-splitting, lazy loading, memoization, and image
                optimization, reducing load times by ~20% and improving Core Web Vitals.
              </li>
              <li>
                Improved SEO and growth initiatives by implementing dynamic meta tags, structured data, Open Graph
                metadata, optimized routing with sitemaps and canonical tags, SSR/SSG, and Google Analytics (gtag) event
                tracking to support user acquisition and campaign analysis.
              </li>
              <li>
                Built and launched a referral program using reusable components and centralized state management,
                contributing to increased user engagement and platform adoption.
              </li>
              <li>
                • Integrated automated testing with Jest and React Testing Library to improve reliability and reduce
                regression risk.
              </li>
              <li>
                Collaborated cross-functionally with UX designers, researchers, and engineers in Agile/Scrum teams to
                ship responsive, accessible, production-ready React and Next.js applications at scale.
              </li>
            </ul>
          </div>
        </div>
      </RetroFieldset>
      <RetroFieldset label='Personal Projects' className={fieldsetWrapperClass}>
        <div className='text-gray-800'>
          <p className='font-bold text-black'>Charity Finder — Next.js, TypeScript, Material-UI</p>
          <p className='text-[13px]'>
            Developing a production-ready platform featuring dynamic routing and filtering for 50+ organizations.
          </p>
        </div>
      </RetroFieldset>
      <RetroFieldset label='Education' className={fieldsetWrapperClass}>
        <ul className='space-y-2 text-[13px] text-gray-800'>
          <li>
            <strong className='text-black'>M.Sc. Electrical Energy Systems</strong> <br /> Amirkabir University of
            Technology
          </li>
          <li>
            <strong className='text-black'>B.Sc. Electrical Engineering</strong> <br /> International University of Imam
            Reza
          </li>
        </ul>
      </RetroFieldset>
      <RetroFieldset label='Skills' className={fieldsetWrapperClass}>
        <div className='space-y-2 text-[13px] text-gray-800'>
          <p>
            <strong>Front-End</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Progressive Web
            Apps (PWA), Responsive Layout Systems (Flexbox, CSS Grid)
          </p>
          <p>
            <strong>UI Frameworks & Libraries:</strong> Material-UI, Tailwind CSS, Storybook (component development &
            visual regression testing with Chromatic), TanStack Table, React Leaflet, Data Visualization (Chart.js)
          </p>
          <p>
            <strong>State Management & APIs:</strong> Redux, Zustand, React Query, REST API integration, Axios, Postman,
            Swagger
          </p>
          <p>
            <strong>Testing & Quality:</strong> : React Testing Library, ESLint, WCAG 2.1 compliance
          </p>
          <p>
            <strong>Tools & Practices:</strong> Git, GitHub, CI/CD, Agile/Scrum, Performance optimization, SEO
            (SSR/SSG), Design system implementation, Responsive design principles, Accessibility & Usability Best
            Practices
            <strong>Currently Learning: </strong> Git, Jest, CI/CD, Agile, SEO, WCAG 2.1.
            <strong>Tools:</strong> AWS, LLMs & AI integration
          </p>
        </div>
      </RetroFieldset>
      <div className='mt-8 text-center text-[10px] text-gray-600 uppercase italic tracking-widest'>
        *** System Status: Powered by React and caffeine ***
      </div>
    </div>
  );
};

export default Resume;

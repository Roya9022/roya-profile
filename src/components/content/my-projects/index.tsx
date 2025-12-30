import React from 'react';
import type { Project } from '@/types';
import { getTotalSize } from '../../../lib/getTotalSize';
import { RetroFieldset, RetroButton } from '@/shared';

const projects: (Project & { github: string; live?: string })[] = [
  {
    id: 0,
    name: 'Retro Portfolio',
    iconSrc: '/my-projects/portfolio.png',
    size: '553 KB',
    description: 'A unconventional retro style portfolio with a few personal twists!',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/roya-profile',
  },
  {
    id: 1,
    name: 'Donation App (in progress)',
    iconSrc: '/my-projects/donation.png',
    size: '38.2 MB',
    description: 'A centralized platform for discovering and supporting charitable causes.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/donation-app',
    live: 'https://donation-app-nu.vercel.app/home',
  },
  {
    id: 2,
    name: 'Healthcare Dashboard',
    iconSrc: '/my-projects/healthcare.png',
    size: '218 KB',
    description: 'A digital healthcare management platform dashboard visualizing patient vitals and data.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/healthcare-dashboard',
  },
];

const fieldsetWrapperClass = 'mb-4 [&>legend]:text-violet-500 [&>legend]:text-xs md:[&>legend]:text-sm';

const MyProjects: React.FC = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 bg-[#C0C0C0] overflow-y-auto p-3 sm:p-6 scrollbar-retro shadow-[inset_1px_1px_0_0_#000]'>
        <h2 className='text-base md:text-lg font-bold text-sky-500 mb-4 md:mb-6 uppercase tracking-tight'>
          MY PROJECTS
        </h2>
        <div className='space-y-6'>
          {projects.map((project) => (
            <div key={project.id} className='group'>
              <RetroFieldset label={project.name} className={fieldsetWrapperClass}>
                <div className='flex items-start gap-3 md:gap-4'>
                  {/* Icon size slightly smaller on mobile */}
                  <div className='retro-icon-recessed shrink-0 w-10 h-10 md:w-auto md:h-auto'>
                    <img src={project.iconSrc} alt={project.name} className='w-full h-full object-contain' />
                  </div>

                  <div className='flex-1 min-w-0'>
                    {/* Responsive text for description */}
                    <p className='text-xs md:text-sm text-gray-800 mb-3 leading-tight'>{project.description}</p>

                    <div className='flex flex-wrap items-center gap-x-2 gap-y-2'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-[10px] md:text-[11px] bg-white px-2 py-0.5 border border-gray-400 text-gray-700 uppercase whitespace-nowrap shadow-[1px_1px_0_0_#fff]'>
                          {tag}
                        </span>
                      ))}

                      {/* Using the text-xs on buttons for mobile to prevent overflow */}
                      <RetroButton
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-[11px] md:text-sm h-7 md:h-auto px-2 md:px-4'>
                        GitHub
                      </RetroButton>

                      {project.live && (
                        <RetroButton
                          href={project.live}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-[11px] md:text-sm text-emerald-700 gap-1.5 md:gap-3 h-7 md:h-auto px-2 md:px-4'>
                          <span className='flex h-2.5 w-2.5 md:h-3 md:w-3 items-center justify-center'>
                            <span className='absolute h-2.5 w-2.5 md:h-3 md:w-3 animate-ping rounded-full bg-emerald-500 opacity-75'></span>
                            <span className='relative h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-600'></span>
                          </span>
                          Live →
                        </RetroButton>
                      )}
                    </div>
                  </div>

                  {/* Show size only on larger mobile/desktop to keep the view clean */}
                  <div className='hidden md:block text-sm text-gray-600 self-start opacity-70 italic'>
                    {project.size}
                  </div>
                </div>
              </RetroFieldset>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Status Bar - Adjusted for mobile text size */}
      <div className='flex justify-between items-center text-[10px] md:text-sm text-gray-700 px-3 py-1.5 bg-[#C0C0C0] border-t-2 border-white shadow-[0_-1px_0_0_#808080]'>
        <div className='flex gap-2 md:gap-4'>
          <span className='border-r border-gray-400 pr-2 md:pr-4'>{projects.length} object(s)</span>
          <span className='text-gray-500 italic hidden sm:inline'>Local Disk (C:)</span>
        </div>
        <span className='font-bold uppercase tracking-wider'>Total: {getTotalSize(projects)}</span>
      </div>
    </div>
  );
};

export default MyProjects;

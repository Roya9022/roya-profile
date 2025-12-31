import React from 'react';
import type { Project } from '@/types';
import { getTotalSize } from '../../../hooks/getTotalSize';
import { RetroFieldset, RetroButton } from '@/shared';
import { GITHUB_LINK, DONATION_APP_LINK_LIVE } from '@/constants/links';

const projects: (Project & { github: string; live?: string })[] = [
  {
    id: 0,
    name: 'Retro Portfolio',
    iconSrc: '/my-projects/portfolio.png',
    size: '19.8 MB',
    description: 'A unconventional retro style portfolio with a few personal twists!',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: `${GITHUB_LINK}roya-profile`,
  },
  {
    id: 1,
    name: 'Donation App (in progress)',
    iconSrc: '/my-projects/donation.png',
    size: '38.2 MB',
    description: 'A centralized platform for discovering and supporting charitable causes.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    github: `${GITHUB_LINK}donation-app`,
    live: DONATION_APP_LINK_LIVE,
  },
  {
    id: 2,
    name: 'Healthcare Dashboard',
    iconSrc: '/my-projects/healthcare.png',
    size: '218 KB',
    description: 'A digital healthcare dashboard visualizing patient vitals and data.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: `${GITHUB_LINK}healthcare-dashboard`,
  },
];

const fieldsetWrapperClass = 'mb-2 md:mb-4 [&>legend]:text-violet-500 [&>legend]:text-[10px] md:[&>legend]:text-sm';

const MyProjects: React.FC = () => {
  return (
    <div className='flex flex-col h-full font-mono'>
      <div className='flex-1 bg-[#C0C0C0] overflow-y-auto p-2.5 md:p-6 scrollbar-retro border border-gray-500'>
        <h2 className='text-sm md:text-lg font-bold text-sky-500 mb-3 md:mb-6 uppercase tracking-tight'>MY PROJECTS</h2>
        <div className='space-y-3 md:space-y-6'>
          {projects.map((project) => (
            <div key={project.id} className='group'>
              <RetroFieldset label={project.name} className={fieldsetWrapperClass}>
                <div className='flex items-start gap-2 md:gap-4'>
                  <div className='retro-icon-recessed shrink-0 w-8 h-8 md:w-12 md:h-12'>
                    <img src={project.iconSrc} alt={project.name} className='w-full h-full object-contain' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-[11px] md:text-sm text-gray-800 mb-2 leading-tight'>{project.description}</p>
                    <div className='flex flex-wrap items-center gap-1.5'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-[9px] md:text-[11px] bg-white px-1.5 py-0 border border-gray-400 text-gray-700 uppercase shadow-[1px_1px_0_0_#fff]'>
                          {tag}
                        </span>
                      ))}
                      <RetroButton
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-[10px] md:text-sm h-6 md:h-8 px-2 md:px-4'>
                        GitHub
                      </RetroButton>
                      {project.live && (
                        <RetroButton
                          href={project.live}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-[10px] md:text-sm text-emerald-700 gap-1 h-6 md:h-8 px-2 md:px-4'>
                          <span className='flex h-2 w-2 items-center justify-center'>
                            <span className='absolute h-2 w-2 animate-ping rounded-full bg-emerald-500 opacity-75'></span>
                            <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-600'></span>
                          </span>
                          Live
                        </RetroButton>
                      )}
                    </div>
                  </div>
                </div>
              </RetroFieldset>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center text-[9px] md:text-sm text-gray-700 px-3 py-1 bg-[#C0C0C0] border-t-2 border-white shadow-[0_-1px_0_0_#808080]'>
        <div className='flex gap-2 md:gap-4'>
          <span className='border-r border-gray-400 pr-2'>{projects.length} object(s)</span>
          <span className='text-gray-500 italic hidden sm:inline'>Local Disk (C:)</span>
        </div>
        <span className='font-bold uppercase tracking-wider'>Total: {getTotalSize(projects)}</span>
      </div>
    </div>
  );
};

export default MyProjects;

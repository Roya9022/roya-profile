import React from 'react';
import type { Project } from '@/types';
import { getTotalSize } from '../../../lib/getTotalSize';
import { RetroFieldset, RetroButton } from '@/shared';

const projects: (Project & { github: string; live?: string })[] = [
  {
    id: 0,
    name: 'Retro Portfolio',
    iconSrc: '/project-icons/portfolio.png',
    color: 'bg-violet-400',
    size: '553 KB',
    description: 'A unconventional retro style portfolio with a few personal twists!',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/roya-profile',
  },
  {
    id: 1,
    name: 'Donation App (in progress)',
    iconSrc: '/project-icons/donation.png',
    color: 'bg-pink-300',
    size: '38.2 MB',
    description: 'A centralized platform for discovering and supporting charitable causes.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/donation-app',
    live: 'https://donation-app-nu.vercel.app/home',
  },
  {
    id: 2,
    name: 'Healthcare Dashboard',
    iconSrc: '/project-icons/healthcare.png',
    color: 'bg-sky-300',
    size: '218 KB',
    description: 'A digital healthcare management platform dashboard.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/healthcare-dashboard',
  },
];

const fieldsetWrapperClass = 'mb-4 [&>legend]:text-violet-500';

const MyProjects: React.FC = () => {
  return (
    <div className='flex flex-col h-full font-mono text-black selection:bg-[#000080] selection:text-white'>
      <div className='flex-1 bg-[#C0C0C0] overflow-y-auto p-4 sm:p-6 scrollbar-retro shadow-[inset_1px_1px_0_0_#000]'>
        <h2 className='text-lg font-bold text-sky-500 mb-6 uppercase'>MY PROJECTS</h2>
        <div className='space-y-6'>
          {projects.map((project) => (
            <div key={project.id} className='group'>
              <RetroFieldset label={project.name} className={fieldsetWrapperClass}>
                <div className='flex items-start gap-4'>
                  <div
                    className={`w-12 h-12 min-w-12 ${project.color} border-2 border-white border-b-[#808080] border-r-[#808080] shadow-[inset_1px_1px_0_0_#808080] flex items-center justify-center`}>
                    <img
                      src={project.iconSrc}
                      alt={project.name}
                      className='w-10 h-10 object-contain [image-rendering:pixelated]'
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm text-gray-800 mb-3 leading-tight'>{project.description}</p>
                    <div className='flex flex-wrap items-center gap-x-2 gap-y-2'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-[10px] bg-white px-2 py-0.5 border border-gray-400 text-gray-700 uppercase whitespace-nowrap'>
                          {tag}
                        </span>
                      ))}
                      <RetroButton
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-[10px]'>
                        GitHub
                      </RetroButton>

                      {project.live && (
                        <RetroButton
                          href={project.live}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-[10px] text-blue-800'>
                          <span className='flex h-2 w-2 items-center justify-center'>
                            <span className='absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75'></span>
                            <span className='relative h-1.5 w-1.5 rounded-full bg-green-600'></span>
                          </span>
                          Live →
                        </RetroButton>
                      )}
                    </div>
                  </div>
                  <div className='hidden sm:block text-[10px] text-gray-600 self-start opacity-70'>{project.size}</div>
                </div>
              </RetroFieldset>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-[10px] text-gray-700 px-3 py-1 bg-[#C0C0C0] border-t-2 border-white shadow-[0_-1px_0_0_#808080]'>
        <span>{projects.length} object(s)</span>
        <span className='font-bold uppercase'>{getTotalSize(projects)}</span>
      </div>
    </div>
  );
};

export default MyProjects;

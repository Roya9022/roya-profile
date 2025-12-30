import { PaintModal, RecycleBin, MusicPlayer, AboutMe, ContactMe, Resume, MyComputer, MyProjects } from '..';
// import resumePDF from '../../../../assets/Roya_Azemi_Resume.pdf';

export const MODAL_DATA: Record<
  string,
  {
    title: string;
    icon?: string; // New optional emoji property
    headerColor?: string;
    content: React.ReactNode;
    noPadding?: boolean;
    width?: string;
    height?: string;
  }
> = {
  projects: {
    title: 'C:\\My Projects',
    icon: '📂',
    headerColor: 'from-pink-400 to-violet-400',
    content: <MyProjects />,
  },
  about: {
    title: 'C:\\About Me',
    icon: '📝',
    headerColor: 'from-purple-600 to-cyan-300',
    content: <AboutMe />,
  },
  contact: {
    title: 'C:\\Contact Me',
    icon: '📧',
    headerColor: 'from-amber-400 to-fuchsia-400',
    content: <ContactMe />,
  },
  resume: {
    title: 'C:\\Resume.txt',
    icon: '📝',
    headerColor: 'from-blue-400 to-gray-500',
    content: <Resume />,
  },
  paint: {
    title: 'Untitled - Paint',
    icon: '🎨',
    headerColor: 'from-teal-500 to-indigo-400',
    content: <PaintModal />,
    noPadding: true,
    width: 'w-[70vw] md:w-[700px]',
    height: 'aspect-[4/3]',
  },
  recycle: {
    title: 'Recycle Bin',
    icon: '🗑️',
    headerColor: 'from-amber-300 to-amber-100',
    content: <RecycleBin />,
  },
  vibes: {
    title: 'Vibes Player',
    icon: '🎶',
    headerColor: 'from-teal-400 to-amber-200',
    content: <MusicPlayer />,
    noPadding: true,
  },
  computer: {
    title: 'My Computer',
    icon: '💻',
    headerColor: 'from-pink-300 to-violet-500',
    content: <MyComputer onClose={() => {}} />,
  },
};

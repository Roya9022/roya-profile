import { PaintModal, RecycleBin, MusicPlayer, AboutMe, ContactMe, Resume, MyComputer, MyProjects } from '..';
// import resumePDF from '../../../../assets/Roya_Azemi_Resume.pdf';

export const MODAL_DATA: Record<
  string,
  {
    title: string;
    headerColor?: string;
    content: React.ReactNode;
    noPadding?: boolean;
    width?: string;
    height?: string;
  }
> = {
  projects: {
    title: 'C:\\My Projects',
    headerColor: 'from-pink-400 to-violet-400',
    content: <MyProjects />,
  },

  about: {
    title: 'C:\\About Me',
    headerColor: 'from-purple-600 to-cyan-300',
    content: <AboutMe />,
  },

  contact: {
    title: 'C:\\Contact Me',
    headerColor: 'from-amber-400 to-fuchsia-400',
    content: <ContactMe />,
  },

  resume: {
    title: 'C:\\Resume.txt',
    headerColor: 'from-blue-400 to-gray-500',
    content: <Resume />,
  },
  paint: {
    title: 'Untitled - Paint',
    headerColor: 'from-teal-500 to-indigo-400',
    content: <PaintModal />,
    noPadding: true,
    width: 'w-[70vw] md:w-[700px]',
    height: 'aspect-[4/3]',
  },

  recycle: {
    title: 'Recycle Bin',
    headerColor: 'from-amber-300 to-amber-100',
    content: <RecycleBin />,
  },

  vibes: {
    title: 'Vibes Player',
    headerColor: 'from-teal-400 to-amber-200',
    content: <MusicPlayer />,
    noPadding: true,
  },

  computer: {
    title: 'My Computer',
    headerColor: 'from-pink-300 to-violet-500',
    content: <MyComputer onClose={() => {}} />,
  },
};

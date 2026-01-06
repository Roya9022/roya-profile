import { PaintModal, RecycleBin, MusicPlayer, AboutMe, ContactMe, Resume, MyComputer, MyProjects } from '..';
import text from '@/content/text.json';

const dataText = text.data;

export const MODAL_DATA: Record<
  string,
  {
    title: string;
    icon?: string;
    headerColor?: string;
    content: React.ReactNode;
    noPadding?: boolean;
    width?: string;
    height?: string;
    scrollable?: boolean;
  }
> = {
  projects: {
    title: dataText.myProjects,
    icon: '📂',
    headerColor: 'from-pink-400 to-violet-400',
    content: <MyProjects />,
  },
  about: {
    title: dataText.aboutMe,
    icon: '📝',
    headerColor: 'from-purple-600 to-cyan-300',
    content: <AboutMe />,
  },
  contact: {
    title: dataText.contactMe,
    icon: '📧',
    headerColor: 'from-amber-400 to-fuchsia-400',
    content: <ContactMe />,
  },
  resume: {
    title: dataText.resume,
    icon: '📝',
    headerColor: 'from-blue-400 to-gray-500',
    content: <Resume />,
    // scrollable: false,
  },
  paint: {
    title: dataText.untitledPaint,
    icon: '🎨',
    headerColor: 'from-teal-500 to-indigo-400',
    content: <PaintModal />,
    noPadding: true,
    width: 'w-[70vw] md:w-[700px]',
    height: 'aspect-[4/3]',
  },
  recycle: {
    title: dataText.bin,
    icon: '🗑️',
    headerColor: 'from-amber-300 to-amber-100',
    content: <RecycleBin />,
  },
  vibes: {
    title: dataText.player,
    icon: '🎶',
    headerColor: 'from-teal-400 to-amber-200',
    content: <MusicPlayer />,
    noPadding: true,
  },
  computer: {
    title: dataText.myComputer,
    icon: '💻',
    headerColor: 'from-pink-300 to-violet-500',
    content: <MyComputer onClose={() => {}} />,
  },
};

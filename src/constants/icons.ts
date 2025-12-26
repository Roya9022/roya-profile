import type { Position } from '../types';

export interface IconData {
  id: string;
  label: string;
  img: string;
}

export const DESKTOP_ICONS: IconData[] = [
  { id: 'computer', label: 'My Computer', img: 'my-computer.png' },
  { id: 'projects', label: 'Projects', img: 'my-projects.png' },
  { id: 'about', label: 'About Me', img: 'about-me.png' },
  { id: 'contact', label: 'Contact Me', img: 'contact-me.png' },
  { id: 'resume', label: 'Resume.txt', img: 'resume.png' },
  { id: 'vibes', label: 'Vibes.mp3', img: 'music.png' },
  { id: 'paint', label: 'Paint', img: 'paint.png' },
  { id: 'recycle', label: 'Recycle Bin', img: 'recycle.png' },
];

export const INITIAL_ICON_POSITIONS: Record<string, Position> = {
  computer: { x: 80, y: 80 },
  projects: { x: 80, y: 220 },
  vibes: { x: 80, y: 340 },
  about: { x: 80, y: 460 },
  resume: { x: 220, y: 220 },
  paint: { x: 220, y: 340 },
  contact: { x: 220, y: 460 },
  recycle: { x: 0, y: 0 },
};

export const WIN_OUTSET =
  'border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 shadow-[1px_1px_0_rgba(0,0,0,1)]';
export const WIN_INSET = 'border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white';

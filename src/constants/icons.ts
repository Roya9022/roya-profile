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
];

export const INITIAL_ICON_POSITIONS: Record<string, Position> = {
  computer: { x: 80, y: 80 },
  projects: { x: 80, y: 200 },
  vibes: { x: 80, y: 320 },
  about: { x: 80, y: 440 },
  resume: { x: 220, y: 200 },
  paint: { x: 220, y: 320 },
  contact: { x: 220, y: 440 },
};

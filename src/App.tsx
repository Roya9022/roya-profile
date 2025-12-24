import { useState, useEffect, useCallback } from 'react';
import type { Position } from './types';
import { DESKTOP_ICONS, INITIAL_ICON_POSITIONS } from './constants/icons';
import Background from './components/visuals/background';
import Taskbar from './components/desktop/taskbar';
import DraggableIcon from './components/desktop/draggable-icons';
import IntroNotepad from './components/modals/intro-notepad';

export default function App() {
  const [iconPositions, setIconPositions] = useState<Record<string, Position>>(INITIAL_ICON_POSITIONS);

  const clampPositions = useCallback(() => {
    setIconPositions((prev) => {
      const next = { ...prev };
      const padding = 20;
      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 120;

      Object.keys(next).forEach((id) => {
        next[id] = {
          x: Math.min(Math.max(padding, next[id].x), maxX),
          y: Math.min(Math.max(padding, next[id].y), maxY),
        };
      });
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', clampPositions);
    return () => window.removeEventListener('resize', clampPositions);
  }, [clampPositions]);

  const updateIconPosition = (id: string, pos: Position) => {
    setIconPositions((prev) => ({ ...prev, [id]: pos }));
  };

  return (
    <div className='min-h-screen bg-linear-to-br from-sky-500 via-indigo-400 to-purple-400 relative font-mono flex flex-col overflow-hidden'>
      <Background />
      <div className='flex-1 relative z-10 md:overflow-hidden overflow-y-auto pb-24 md:pb-0'>
        <div className='flex flex-wrap justify-start gap-6 p-6 md:block md:p-0 md:h-full md:w-full'>
          {DESKTOP_ICONS.map((icon) => (
            <DraggableIcon
              key={icon.id}
              imageSrc={`/desktop-icons/${icon.img}`}
              label={icon.label}
              position={iconPositions[icon.id] || { x: 0, y: 0 }}
              onDrag={(newPos) => updateIconPosition(icon.id, newPos)}
              onClick={() => console.log(`${icon.label} opened`)}
            />
          ))}
        </div>
        <IntroNotepad />
      </div>
      <Taskbar />
    </div>
  );
}

import { useState } from 'react';
import type { Position } from './types';
import { DESKTOP_ICONS, INITIAL_ICON_POSITIONS } from './constants/icons';
import Background from './components/visuals/background';
import Taskbar from './components/desktop/taskbar';
import DraggableIcon from './components/desktop/draggable-icons';

export default function App() {
  const [iconPositions, setIconPositions] = useState<Record<string, Position>>(INITIAL_ICON_POSITIONS);

  const updateIconPosition = (id: string, pos: Position) => {
    setIconPositions((prev) => ({ ...prev, [id]: pos }));
  };

  return (
    <div className='min-h-screen bg-linear-to-br from-sky-500 via-indigo-400 to-purple-400 overflow-hidden relative font-mono'>
      <Background />
      <div className='relative z-10'>
        {DESKTOP_ICONS.map((icon) => {
          const position = iconPositions[icon.id] || { x: 0, y: 0 };
          return (
            <DraggableIcon
              key={icon.id}
              imageSrc={`/desktop-icons/${icon.img}`}
              label={icon.label}
              position={position}
              onDrag={(newPos) => updateIconPosition(icon.id, newPos)}
              onClick={() => console.log('open')}
            />
          );
        })}
      </div>
      <Taskbar />
    </div>
  );
}

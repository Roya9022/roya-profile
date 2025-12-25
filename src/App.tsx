import { useState, useEffect, useCallback } from 'react';
import type { Position } from './types';
import { DESKTOP_ICONS, INITIAL_ICON_POSITIONS } from './constants/icons';
import Background from './components/visuals/background';
import Taskbar from './components/desktop/taskbar';
import DraggableIcon from './components/desktop/draggable-icons';
import ContentModal from './components/modals/content-modal';
import IntroNotepad from './components/modals/intro-notepad';
import { WINDOW_REGISTRY } from './components/modals/content-modal/data';

export default function App() {
  const [iconPositions, setIconPositions] = useState<Record<string, Position>>(INITIAL_ICON_POSITIONS);
  const [openWindowIds, setOpenWindowIds] = useState<string[]>([]);
  const [minimizedWindowIds, setMinimizedWindowIds] = useState<string[]>([]);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [windowPositions, setWindowPositions] = useState<Record<string, Position>>({});

  const taskbarWindows = openWindowIds.map((id) => ({
    id,
    title: WINDOW_REGISTRY[id]?.title || 'Window',
    isMinimized: minimizedWindowIds.includes(id),
    isFocused: focusedId === id,
  }));

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

  const openWindow = (id: string) => {
    if (!openWindowIds.includes(id)) {
      const offset = openWindowIds.length * 30;

      setWindowPositions((prev) => ({
        ...prev,
        [id]: {
          x: window.innerWidth / 2 - 250 + offset,
          y: window.innerHeight / 2 - 150 + offset,
        },
      }));

      setOpenWindowIds((prev) => [...prev, id]);
    }

    setMinimizedWindowIds((prev) => prev.filter((w) => w !== id));
    setFocusedId(id);
  };
  const closeWindow = (id: string) => {
    setOpenWindowIds((prev) => prev.filter((wId) => wId !== id));
    setMinimizedWindowIds((prev) => prev.filter((wId) => wId !== id));
    if (focusedId === id) setFocusedId(null);
  };

  const minimizeWindow = (id: string) => {
    if (!minimizedWindowIds.includes(id)) {
      setMinimizedWindowIds((prev) => [...prev, id]);
    }
    if (focusedId === id) setFocusedId(null);
  };

  const updateWindowPosition = (id: string, pos: Position) => {
    setWindowPositions((prev) => ({ ...prev, [id]: pos }));
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
              onClick={() => openWindow(icon.id)}
            />
          ))}
        </div>
        <IntroNotepad />
        {openWindowIds.map((id) => {
          const config = WINDOW_REGISTRY[id];
          if (!config) return null;

          const isFocused = focusedId === id;
          const isMinimized = minimizedWindowIds.includes(id);

          return (
            <div
              key={id}
              className='absolute w-[90vw] md:w-150 min-h-50'
              style={{ zIndex: isFocused ? 100 : 50 }}
              onPointerDown={() => setFocusedId(id)}>
              <ContentModal
                title={config.title}
                headerColor={config.headerColor}
                position={windowPositions[id] || { x: 100, y: 100 }}
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)}
                onDrag={(pos) => updateWindowPosition(id, pos)}
                onFocus={() => setFocusedId(id)}
                isMinimized={isMinimized}>
                <div className='flex flex-col h-full'>
                  <div className='flex-1 bg-white overflow-y-auto p-4 md:p-6'>{config.content}</div>
                  {config.footer && (
                    <div className='bg-gray-200 border-t border-gray-400 px-2 py-1 flex justify-between text-xs text-gray-600'>
                      {config.footer}
                    </div>
                  )}
                </div>
              </ContentModal>
            </div>
          );
        })}
      </div>

      <Taskbar
        windows={taskbarWindows}
        onClickWindow={(id) => {
          if (minimizedWindowIds.includes(id)) {
            setMinimizedWindowIds((prev) => prev.filter((w) => w !== id));
          }
          setFocusedId(id);
        }}
      />
    </div>
  );
}

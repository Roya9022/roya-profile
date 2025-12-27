import React from 'react';
import { DESKTOP_ICONS } from './constants/icons';
import Background from './components/visuals/background';
import Taskbar from './components/desktop/taskbar';
import DraggableIcon from './components/desktop/draggable-icons';
import ContentModal from './components/modals/content-modal';
import IntroNotepad from './components/modals/intro-notepad';
import { WINDOW_CONTENT } from './components/modals/data';
import { useWindowManager } from './hooks/useWindowManager';
import { useDesktopIcons } from './hooks/useDesktopIcons';

interface InjectedProps {
  isMaximized: boolean;
}

export default function App() {
  const { iconPositions, updateIconPosition } = useDesktopIcons();
  const {
    openWindowIds,
    minimizedWindowIds,
    maximizedWindowIds,
    focusedId,
    windowPositions,
    setFocusedId,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    updateWindowPosition,
  } = useWindowManager();

  const taskbarWindows = openWindowIds.map((id) => ({
    id,
    title: WINDOW_CONTENT[id]?.title || 'Window',
    isMinimized: minimizedWindowIds.includes(id),
    isFocused: focusedId === id,
  }));

  return (
    <div className='min-h-screen bg-linear-to-br from-sky-500 via-indigo-400 to-purple-400 relative font-mono flex flex-col overflow-hidden'>
      <Background />

      <div className='flex-1 relative z-10 lg:overflow-hidden overflow-y-auto pb-24 lg:pb-0'>
        <div className='flex flex-wrap justify-start gap-6 p-6 lg:block lg:p-0 lg:h-full lg:w-full relative z-20'>
          {DESKTOP_ICONS.map((icon) => (
            <DraggableIcon
              key={icon.id}
              imageSrc={`/desktop-icons/${icon.img}`}
              label={icon.label}
              position={iconPositions[icon.id] || { x: 0, y: 0 }}
              onDrag={(pos) => updateIconPosition(icon.id, pos)}
              onClick={() => openWindow(icon.id)}
            />
          ))}
        </div>
        <IntroNotepad />
        {openWindowIds.map((id) => {
          const config = WINDOW_CONTENT[id];
          if (!config) return null;
          const isMaximized = maximizedWindowIds.includes(id);
          const isFocused = focusedId === id;
          return (
            <div
              key={id}
              className={`fixed inset-0 pointer-events-none ${
                isMaximized ? 'z-150' : 'lg:absolute lg:inset-auto lg:block'
              } ${!isMaximized && 'flex items-center justify-center p-4'}`}
              style={{
                zIndex: isMaximized ? 150 : isFocused ? 100 : 50,
                left: isMaximized || window.innerWidth < 1024 ? 0 : undefined,
                top: isMaximized || window.innerWidth < 1024 ? 0 : undefined,
              }}>
              <ContentModal
                {...config}
                noPadding={config.noPadding}
                position={windowPositions[id] || { x: 100, y: 100 }}
                isMaximized={isMaximized}
                isMinimized={minimizedWindowIds.includes(id)}
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)}
                onMaximize={() => toggleMaximize(id)}
                onDrag={(pos) => updateWindowPosition(id, pos)}
                onFocus={() => setFocusedId(id)}>
                <div className='flex flex-col h-full pointer-events-auto'>
                  {React.isValidElement<InjectedProps>(config.content)
                    ? React.cloneElement(config.content, { isMaximized })
                    : config.content}
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
      <div className='relative z-200'>
        <Taskbar
          windows={taskbarWindows}
          onClickWindow={(id) => {
            if (minimizedWindowIds.includes(id)) openWindow(id);
            else setFocusedId(id);
          }}
        />
      </div>
    </div>
  );
}

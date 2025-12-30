import React from 'react';
import { DESKTOP_ICONS } from '@/constants/icons';
import { Background } from '@/components/visuals';
import { Taskbar, DraggableIcon } from '@/components/desktop';
import { IntroNotepad } from '@/components/content';
import { ContentModal } from '@/shared';
import { MODAL_DATA } from './components/content/data';
import { useWindowManager } from './hooks/useWindowManager';
import { useDesktopIcons } from './hooks/useDesktopIcons';

export interface WindowComponentProps {
  isMaximized?: boolean;
  onClose?: () => void;
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
    title: MODAL_DATA[id]?.title || 'Window',
    isMinimized: minimizedWindowIds.includes(id),
    isFocused: focusedId === id,
    icon: MODAL_DATA[id]?.icon || '📁',
  }));

  return (
    <div className='min-h-screen bg-linear-to-br from-sky-500 via-indigo-400 to-purple-400 relative font-mono flex flex-col overflow-hidden pb-1'>
      <Background />

      {/* Desktop Area */}
      <div className='flex-1 relative z-10 overflow-hidden'>
        {/* Mobile: Grid Layout | Desktop: Absolute Layout */}
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 p-4 lg:block lg:p-0 lg:h-full lg:w-full relative z-20'>
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
          const config = MODAL_DATA[id];
          if (!config) return null;
          const isMaximized = maximizedWindowIds.includes(id);
          const isFocused = focusedId === id;

          return (
            <div
              key={id}
              className={`fixed lg:absolute inset-0 lg:inset-auto pointer-events-none ${
                isMaximized ? 'z-150' : 'z-50'
              }`}
              style={{
                zIndex: isMaximized ? 150 : isFocused ? 100 : 50,
                // On mobile, we ignore the manual position state and center it
                left: isMaximized || window.innerWidth < 1024 ? 0 : undefined,
                top: isMaximized || window.innerWidth < 1024 ? 0 : undefined,
                width: isMaximized || window.innerWidth < 1024 ? '100%' : 'auto',
                height: isMaximized || window.innerWidth < 1024 ? '100%' : 'auto',
              }}>
              <ContentModal
                {...config}
                noPadding={config.noPadding}
                position={windowPositions[id] || { x: 100, y: 40 }}
                isMaximized={isMaximized}
                isMinimized={minimizedWindowIds.includes(id)}
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)}
                onMaximize={() => toggleMaximize(id)}
                onDrag={(pos) => updateWindowPosition(id, pos)}
                onFocus={() => setFocusedId(id)}>
                <div className='flex flex-col h-full pointer-events-auto'>
                  {React.isValidElement<WindowComponentProps>(config.content)
                    ? React.cloneElement(config.content, {
                        isMaximized,
                        onClose: () => closeWindow(id),
                      })
                    : config.content}
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
            if (minimizedWindowIds.includes(id)) {
              openWindow(id);
            } else {
              setFocusedId(id);
            }
          }}
        />
      </div>
    </div>
  );
}

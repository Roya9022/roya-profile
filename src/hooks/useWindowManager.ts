import { useState } from 'react';
import type { Position } from '@/types';

export const useWindowManager = () => {
  const [openWindowIds, setOpenWindowIds] = useState<string[]>([]);
  const [minimizedWindowIds, setMinimizedWindowIds] = useState<string[]>([]);
  const [maximizedWindowIds, setMaximizedWindowIds] = useState<string[]>([]);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [windowPositions, setWindowPositions] = useState<Record<string, Position>>({});

  const openWindow = (id: string) => {
    if (!openWindowIds.includes(id)) {
      const offset = openWindowIds.length * 25;
      setWindowPositions((prev) => ({
        ...prev,
        [id]: {
          x: window.innerWidth / 2 - 350 + offset,
          y: 100 + offset,
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
    setMaximizedWindowIds((prev) => prev.filter((wId) => wId !== id));
    if (focusedId === id) setFocusedId(null);
  };

  const minimizeWindow = (id: string) => {
    if (!minimizedWindowIds.includes(id)) {
      setMinimizedWindowIds((prev) => [...prev, id]);
    }
    if (focusedId === id) setFocusedId(null);
  };

  const toggleMaximize = (id: string) => {
    setMaximizedWindowIds((prev) => (prev.includes(id) ? prev.filter((wId) => wId !== id) : [...prev, id]));
  };

  const updateWindowPosition = (id: string, pos: Position) => {
    setWindowPositions((prev) => ({ ...prev, [id]: pos }));
  };

  return {
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
  };
};

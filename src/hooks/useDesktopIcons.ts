import { useState, useCallback, useEffect } from 'react';
import type { Position } from '@/types';
import { INITIAL_ICON_POSITIONS } from '@/constants/icons';

const RECYCLE_OFFSETS = {
  horizontal: 200,
  vertical: 250,
  iconWidth: 80,
};

export const useDesktopIcons = () => {
  const [iconPositions, setIconPositions] = useState<Record<string, Position>>(INITIAL_ICON_POSITIONS);

  const updatePositions = useCallback(() => {
    setIconPositions((prev) => {
      const next = { ...prev };
      const padding = 20;
      const iconWidth = 80;
      const maxX = window.innerWidth - iconWidth;
      const maxY = window.innerHeight - 120;

      Object.keys(next).forEach((id) => {
        if (id === 'recycle') {
          next[id] = {
            x: window.innerWidth - RECYCLE_OFFSETS.iconWidth - RECYCLE_OFFSETS.horizontal,
            y: window.innerHeight - RECYCLE_OFFSETS.vertical,
          };
        } else {
          next[id] = {
            x: Math.min(Math.max(padding, next[id].x || 0), maxX),
            y: Math.min(Math.max(padding, next[id].y || 0), maxY),
          };
        }
      });
      return next;
    });
  }, []);

  useEffect(() => {
    const initialSnap = requestAnimationFrame(updatePositions);
    window.addEventListener('resize', updatePositions);
    return () => {
      cancelAnimationFrame(initialSnap);
      window.removeEventListener('resize', updatePositions);
    };
  }, [updatePositions]);

  const updateIconPosition = (id: string, pos: Position) => {
    setIconPositions((prev) => ({ ...prev, [id]: pos }));
  };

  return { iconPositions, updateIconPosition };
};

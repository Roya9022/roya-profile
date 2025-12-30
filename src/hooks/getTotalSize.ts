import type { Project } from '../types';

export const getTotalSize = (projects: Project[]) => {
  const totalKB = projects.reduce((total, project) => {
    const [value, unit] = project.size.split(' ');
    const num = parseFloat(value);
    if (unit === 'MB') return total + num * 1024;
    if (unit === 'KB') return total + num;
    return total;
  }, 0);
  return totalKB >= 1024 ? `${(totalKB / 1024).toFixed(2)} MB` : `${Math.round(totalKB)} KB`;
};

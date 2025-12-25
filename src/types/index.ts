export type ModalType = 'projects' | 'about' | 'resume' | 'photos' | null;

export interface Position {
  x: number;
  y: number;
}

export interface Project {
  id: number;
  name: string;
  iconSrc?: string;
  color: string;
  size: string;
  description: string;
  tags: string[];
}

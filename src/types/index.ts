export interface Task {
  id: string;
  title: string;
  description?: string;
  time?: string;
  location?: string;
  category?: string;
  priority?: 'urgent' | 'normal';
  completed: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  taskCount: number;
  color?: string;
}

export interface User {
  name: string;
  avatar: string;
}

export interface JoyPet {
  name: string;
  avatar: string;
  mood: string;
  streak: number;
  progress: number; // 0-1
}
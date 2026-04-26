export interface Project {
  id: string;
  title: string;
  category: string;
  section: 'competitions' | 'photography';
  description: string;
  year: string;
  imageUrl: string;
  tags: string[];
  details?: string;
  gallery?: string[];
  content?: string[];
  award?: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: 'professional' | 'leadership' | 'military';
  bullets: string[];
}

export type PageView = 'landing' | 'about' | 'experience' | 'competitions' | 'photography';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string; // Display category (e.g., "The Founders", "RSM260")
  section: 'rotman' | 'photography'; // For filtering which page it belongs to
  description: string;
  year: string;
  imageUrl: string;
  tags: string[];
  details?: string;
  gallery?: string[]; // Array of image URLs for photography albums
}

export type PageView = 'landing' | 'rotman' | 'photography' | 'about' | 'contact';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
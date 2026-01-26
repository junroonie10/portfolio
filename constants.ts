import { Project } from './types';

export const PORTFOLIO_OWNER = "Hyunjun You";
export const ROLE = "Undergraduate Student and Hobby Photographer at UofT";

// --- ASSET PATHS ---
// Place these files in your 'public' folder.
// Example: public/resume.pdf -> "/resume.pdf"
export const RESUME_URL = "/resume.pdf"; 
export const PROFILE_IMAGE_URL = "/hyunjun-landing.jpg"; 

export const PAGE_CONTENT = {
  rotman: {
    title: 'Rotman Commerce',
    description: "Welcome to my academic portfolio. Feel free to click on any image to see some of the work I have done in my undergraduate years!",
  },
  photography: {
    title: 'Photography',
    description: "A collection of moments captured across different cities. Shot on iPhone.",
  }
};

export const PROJECTS: Project[] = [
  // --- Rotman Projects ---
  {
    id: 'rotman-1',
    title: 'North American Cosmetics Market Research',
    category: 'The Founders',
    section: 'rotman',
    year: '2026',
    description: 'In-depth analysis of consumer trends and competitive landscape.',
    imageUrl: 'https://picsum.photos/seed/cosmetics/800/1000', // Replace with: "/images/cosmetics.jpg"
    tags: ['Market Research', 'Data Analysis', 'Consumer Behavior'],
    details: 'A comprehensive study of the North American cosmetics industry, focusing on emerging indie brands, shifting consumer preferences towards sustainability, and supply chain challenges.'
  },
  {
    id: 'rotman-2',
    title: 'Deloitte Case Competition',
    category: 'Rotman Commerce Consulting Association',
    section: 'rotman',
    year: '2025',
    description: 'Strategic consulting proposal for a major tech client.',
    imageUrl: 'https://picsum.photos/seed/deloitte/800/600',
    tags: ['Consulting', 'Strategy', 'Teamwork'],
    details: 'Finalist presentation involving a go-to-market strategy for a cloud computing solution. Focused on financial viability and implementation timelines.'
  },
  {
    id: 'rotman-3',
    title: 'Organizational Behaviour',
    category: 'RSM260',
    section: 'rotman',
    year: '2025',
    description: 'Analysis of corporate culture and leadership dynamics.',
    imageUrl: 'https://picsum.photos/seed/org-behaviour/800/800',
    tags: ['Management', 'HR', 'Psychology'],
    details: 'Case studies on workplace motivation, team dynamics, and conflict resolution within multinational corporations.'
  },
  {
    id: 'rotman-4',
    title: 'Marketing Management',
    category: 'RSM350',
    section: 'rotman',
    year: '2025',
    description: 'Integrated marketing campaign simulation.',
    imageUrl: 'https://picsum.photos/seed/marketing/800/1200',
    tags: ['Marketing', 'Brand Management', 'Digital Strategy'],
    details: 'Developed a full-funnel marketing strategy for a new beverage product launch, including STP analysis, 4Ps implementation, and ROI projection.'
  },
  {
    id: 'rotman-5',
    title: 'Spanish',
    category: 'SPA101',
    section: 'rotman',
    year: '2025',
    description: 'Advanced language studies and cultural analysis.',
    imageUrl: 'https://picsum.photos/seed/spanish/800/1000',
    tags: ['Language', 'Culture', 'Communication'],
    details: 'Coursework focused on advanced grammar, literature analysis, and the socio-economic history of Spanish-speaking regions.'
  },

  // --- Photography Collections ---
  {
    id: 'photo-1',
    title: 'Toronto',
    category: 'Photography',
    section: 'photography',
    year: '2023-2024',
    description: 'St. George campus and city life in The 6ix.',
    imageUrl: 'https://picsum.photos/seed/toronto-cover/900/1200',
    tags: ['Street', 'Urban', 'Canada'],
    gallery: [
      'https://picsum.photos/seed/tor1/800/1000', // Replace with: "/images/toronto/1.jpg"
      'https://picsum.photos/seed/tor2/800/600',
      'https://picsum.photos/seed/tor3/800/1200',
      'https://picsum.photos/seed/tor4/800/800',
      'https://picsum.photos/seed/tor5/800/1000',
      'https://picsum.photos/seed/tor6/800/600',
    ]
  },
  {
    id: 'photo-2',
    title: 'Saigon',
    category: 'Photography',
    section: 'photography',
    year: '2023',
    description: 'Capturing the vibrant energy where I grew up.',
    imageUrl: 'https://picsum.photos/seed/saigon-cover/900/1200',
    tags: ['Travel', 'Vietnam', 'Color'],
    gallery: [
      'https://picsum.photos/seed/sai1/800/600',
      'https://picsum.photos/seed/sai2/800/1000',
      'https://picsum.photos/seed/sai3/800/800',
      'https://picsum.photos/seed/sai4/800/1200',
      'https://picsum.photos/seed/sai5/800/600',
      'https://picsum.photos/seed/sai6/800/1000',
    ]
  },
  {
    id: 'photo-3',
    title: 'Seoul',
    category: 'Photography',
    section: 'photography',
    year: '2022',
    description: 'My home, where heritage meets modernity.',
    imageUrl: 'https://picsum.photos/seed/seoul-cover/900/1200',
    tags: ['Korea', 'Heritage', 'Night'],
    gallery: [
      'https://picsum.photos/seed/seoul1/800/1200',
      'https://picsum.photos/seed/seoul2/800/600',
      'https://picsum.photos/seed/seoul3/800/800',
      'https://picsum.photos/seed/seoul4/800/1000',
      'https://picsum.photos/seed/seoul5/800/1200',
      'https://picsum.photos/seed/seoul6/800/800',
    ]
  }
];

export const BIO_TEXT = `Welcome to my portfolio! My name is Hyunjun You. I am a student at the University of Toronto pursuing a degree in Commerce (Rotman Commerce). I am passionate about the intersection of consulting and technology.

I also am an active case competition participant and am involved in student organizations where I work to make business environment more accessible for international students. 

Outside of academics, I am an avid photographer, capturing moments from my travels and daily life. I believe in the power of visual storytelling to convey emotions that words sometimes cannot.`;

export const SOCIAL_LINKS = [
  { name: 'Email', url: 'mailto:hj.you@mail.utoronto.ca' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hyunjunyou/' },
];
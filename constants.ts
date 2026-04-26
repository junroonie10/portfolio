import { Project, ExperienceItem } from './types';

export const PORTFOLIO_OWNER = "Hyunjun You";
export const ROLE = "Strategy & Consulting · Rotman Commerce '27";
export const TAGLINE = "I help organizations solve complex problems through structured thinking, data-driven analysis, and clear communication.";

export const RESUME_URL = "/resume.pdf";
export const PROFILE_IMAGE_URL = "https://drive.google.com/thumbnail?sz=w1000&id=1dkLID7htn8caTSYC7pGcwAfTCTnjAJar";

export const BIO_TEXT = `I'm a third-year Commerce student at the University of Toronto (Rotman) focusing on Strategy and Data Science — driven by a genuine curiosity for how businesses grow and make decisions under uncertainty.

My experience spans strategy consulting at The Founders, Inc., where I led a market entry workstream for a D2C brand, and an incoming research analyst role at Kearney (Seoul, 2026). Outside of professional roles, I've placed 2nd at Deloitte and Karrot case competitions, and reached semi-finalist rounds at Bain & Company and Google AI challenges.

I thrive at the intersection of rigorous analysis and practical execution — whether that's sizing a new market, designing a go-to-market strategy, or streamlining operations under pressure.

Beyond work, I'm a hobby photographer who captures moments from Toronto, Seoul, and Saigon. I also play viola and compete in soccer.`;

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Kearney',
    role: 'Incoming Research Analyst',
    location: 'Seoul, Korea',
    period: 'May 2026 – Aug 2026',
    type: 'professional',
    bullets: [
      'Incoming summer analyst role within the global management consulting firm\'s Seoul office',
    ],
  },
  {
    id: 'exp-2',
    company: 'The Founders, Inc.',
    role: 'Strategy Intern',
    location: 'Toronto, ON',
    period: 'Jan 2026 – Mar 2026',
    type: 'professional',
    bullets: [
      'Led a hypothesis-driven market entry workstream analyzing D2C demand via a 3-stage screening approach across 600+ consumer responses; identified key purchase triggers (40% driven by TikTok FYP) to validate buyer decision model and inform GTM choices',
      'Built and sized a 2-segment customer typology, prioritizing the highest-potential segment (15.4% virality-driven) as the initial D2C target; translated insights into North America positioning, messaging, and channel strategy',
      'Synthesized analysis into an executive-ready recommendation deck proposing a college ambassador pilot as the initial acquisition wedge, defining success metrics and outlining next-step decisions',
    ],
  },
  {
    id: 'exp-3',
    company: 'Republic of Korea Army',
    role: 'Squad Leading Sergeant',
    location: 'Seoul, Korea',
    period: 'Sep 2023 – Mar 2025',
    type: 'military',
    bullets: [
      'Streamlined reservist communication by redesigning training notifications, improving confirmation rates across a 2,500-person unit and eliminating day-of coordination bottlenecks',
      'Restructured day-prior reporting and supply workflows across 15+ military trainings, reducing pre-training prep time by 75% (from 2 hours to 30 minutes)',
      'Authored detailed post-training compliance reports synthesizing attendance and operational data for command review',
    ],
  },
  {
    id: 'lead-1',
    company: 'Rotman Commerce Emerging Technologies',
    role: 'Operations Manager',
    location: 'Toronto, ON',
    period: 'Feb 2026 – Present',
    type: 'leadership',
    bullets: [
      'Spearheaded recruitment of 27 industry panelists and coordinated end-to-end logistics for a 100+ attendee technology-focused event within the Rotman community',
      'Reduced attendee wait time by redesigning the sign-in process from a single queue to a dual-lane system, improving operational efficiency and overall event experience',
    ],
  },
  {
    id: 'lead-2',
    company: 'University of Toronto Korean Commerce Community',
    role: 'President',
    location: 'Toronto, ON',
    period: 'Sep 2022 – Present',
    type: 'leadership',
    bullets: [
      'Secured 10+ annual corporate partnerships (in-kind sponsorships) reducing club operational costs by 20% through structured, data-backed financial proposals',
      'Secured Karrot (hyperlocal second-hand marketplace app) as a CAD $5,000 corporate partner to support the company\'s Canadian university-market expansion, leading outreach, negotiation, and onboarding',
      'Directed end-to-end planning and execution of student-facing promotional events, coordinating cross-functional logistics and presenting campaign outcomes to senior executives',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'comp-1',
    title: 'Deloitte Consulting Case Competition',
    category: 'Rotman Commerce Consulting Association',
    section: 'competitions',
    year: '2025',
    award: '2nd Place',
    description: 'Strategic recommendation for a major tech client, covering go-to-market, financial viability, and implementation roadmap.',
    imageUrl: '/deloitte.jpg',
    tags: ['Strategy', 'GTM', 'Financial Modeling'],
    details: 'Developed a comprehensive go-to-market strategy for a cloud computing solution. Delivered a finalist presentation covering market sizing, competitive positioning, financial viability, and phased implementation timelines — placing 2nd overall.',
    content: ['/deloitte.pdf', '/deloitte.jpg'],
  },
  {
    id: 'comp-2',
    title: 'Bain & Company Toronto Case Competition',
    category: 'Rotman Commerce',
    section: 'competitions',
    year: '2025',
    award: 'Semi-finalist',
    description: 'Advanced to the semi-final round, delivering structured strategic analysis under tight time constraints.',
    imageUrl: 'https://picsum.photos/seed/bain/800/600',
    tags: ['Consulting', 'Problem Structuring', 'Presentation'],
    details: 'Competed in a fast-paced case environment, advancing to the semi-final round with a team of four. Focused on issue-tree driven problem solving and a concise, data-backed recommendation.',
  },
  {
    id: 'comp-3',
    title: 'Google AI Case Competition',
    category: 'Rotman Commerce',
    section: 'competitions',
    year: '2025',
    award: 'Semi-finalist',
    description: 'Explored AI adoption strategy and product integration for an enterprise client using Google Cloud tools.',
    imageUrl: 'https://picsum.photos/seed/googleai/800/600',
    tags: ['AI Strategy', 'Product', 'Technology'],
    details: 'Advanced to the semi-final round analyzing AI integration opportunities for enterprise clients, leveraging Google Cloud capabilities. Synthesized technical feasibility with business case development.',
  },
  {
    id: 'comp-4',
    title: 'Karrot Sprint',
    category: 'Karrot (당근마켓)',
    section: 'competitions',
    year: '2024',
    award: '2nd Place',
    description: 'Product strategy sprint for Karrot\'s Canadian university-market expansion, leading to a real corporate partnership.',
    imageUrl: 'https://picsum.photos/seed/karrot/800/600',
    tags: ['Product Strategy', 'Market Entry', 'User Research'],
    details: 'Competed in a product sprint focused on Karrot\'s Canadian university expansion. The team\'s 2nd-place finish and subsequent outreach led to a real CAD $5,000 corporate partnership with the Korean Commerce Community.',
  },
  {
    id: 'comp-5',
    title: 'North American Cosmetics Market Research',
    category: 'The Founders, Inc.',
    section: 'competitions',
    year: '2026',
    description: 'Consumer research and GTM strategy for a D2C cosmetics brand entering the North American market.',
    imageUrl: 'https://picsum.photos/seed/cosmetics/800/600',
    tags: ['Market Research', 'GTM', 'Consumer Behavior'],
    details: 'Analyzed 600+ consumer survey responses using a 3-stage screening approach to identify key purchase triggers, segment target customers, and develop a phased go-to-market strategy for North America.',
  },

  // Photography
  {
    id: 'photo-1',
    title: 'Toronto',
    category: 'Photography',
    section: 'photography',
    year: '2023–2024',
    description: 'St. George campus and city life in The 6ix.',
    imageUrl: 'https://picsum.photos/seed/toronto-cover/900/1200',
    tags: ['Street', 'Urban', 'Canada'],
    gallery: [
      'https://picsum.photos/seed/tor1/800/1000',
      'https://picsum.photos/seed/tor2/800/600',
      'https://picsum.photos/seed/tor3/800/1200',
      'https://picsum.photos/seed/tor4/800/800',
      'https://picsum.photos/seed/tor5/800/1000',
      'https://picsum.photos/seed/tor6/800/600',
    ],
  },
  {
    id: 'photo-2',
    title: 'Saigon',
    category: 'Photography',
    section: 'photography',
    year: '2023',
    description: 'Capturing the vibrant energy of a city that never stops.',
    imageUrl: 'https://picsum.photos/seed/saigon-cover/900/1200',
    tags: ['Travel', 'Vietnam', 'Color'],
    gallery: [
      'https://picsum.photos/seed/sai1/800/600',
      'https://picsum.photos/seed/sai2/800/1000',
      'https://picsum.photos/seed/sai3/800/800',
      'https://picsum.photos/seed/sai4/800/1200',
      'https://picsum.photos/seed/sai5/800/600',
      'https://picsum.photos/seed/sai6/800/1000',
    ],
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
    ],
  },
];

export const SKILLS = [
  { category: 'Analytics & Data', items: ['Excel (Advanced)', 'Power BI', 'Python', 'SQL'] },
  { category: 'Strategy & Consulting', items: ['Case Structuring', 'Market Sizing', 'GTM Strategy', 'Financial Modeling'] },
  { category: 'Digital & Product', items: ['Figma', 'Vercel', 'PowerPoint', 'Word'] },
  { category: 'Languages', items: ['English (Native)', 'Korean (Native)', 'Spanish (Basic)'] },
];

export const SOCIAL_LINKS = [
  { name: 'Email', url: 'mailto:hj.you@mail.utoronto.ca' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hyunjunyou/' },
];

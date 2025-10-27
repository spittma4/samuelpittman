// Content data for the website

export const techStack = [
  { icon: 'laravel', label: 'Laravel (7 years)', featured: true },
  { icon: 'php', label: 'PHP (7 years)', featured: true },
  { icon: 'livewire', label: 'Livewire (2 years)', featured: false },
  { icon: 'aws', label: 'AWS (4 years)', featured: false },
  { icon: 'database', label: 'MySQL/Postgres (8 years)', featured: false },
  { icon: 'api', label: 'API Development (REST/RPC)', featured: false },
  { icon: 'javascript', label: 'JavaScript (5 years)', featured: false },
  { icon: 'code', label: 'HTML/TailwindCSS (4 years)', featured: false },
  { icon: 'check', label: 'PHPUnit/PEST Testing (6 years)', featured: false },
  { icon: 'clipboard', label: 'Requirement Gathering Expert', featured: true },
]

export const projects = [
  {
    title: 'Job Shop Routing Software',
    description: 'Built an application that creates manufacturing instructions for parts based on input parameters and provides real-time tracking throughout processing. This venture focuses on the manufacturing tracking world, helping job shops streamline their operations and improve efficiency.',
    tags: ['Manufacturing', 'Real-time Tracking', 'Process Automation']
  },
  {
    title: 'AI Honeymoon/Vacation Planner',
    description: "Created an application that uses OpenAI's API to generate custom honeymoon or vacation itineraries based on user interests. Demonstrates expertise in AI integration and user-centric design.",
    tags: ['OpenAI API', 'AI Integration', 'Travel Tech']
  },
  {
    title: 'PittWerx Software Consultancy',
    description: 'Owner and Chief Problem Solver specializing in Laravel/PHP and Livewire application development. Working on custom applications for small businesses provides opportunities to explore new technologies and deliver tailored solutions.',
    tags: ['Laravel', 'Livewire', 'Consulting']
  }
]

export const workExperience = [
  {
    company: 'Auctic',
    role: 'Senior Software Engineer',
    period: 'Mar 2025 - Present',
    logo: '/auctic_logo.svg',
    current: true,
    achievements: [
      'Contributing to a complex Laravel application designed for adaptability across diverse use cases with strong emphasis on maintainability and enterprise architecture',
      'Accountable for delivering large-scale features while ensuring scalability and architectural integrity',
      'Serving as team lead for development pod, coordinating deliverables and technical direction'
    ]
  },
  {
    company: 'Hello Eyes / SeekWell',
    role: 'Senior Software Engineer (III)',
    period: 'Oct 2021 - Feb 2025',
    logo: '/helloeyes_logo.jpeg',
    logoClass: 'w-24 h-24 object-contain rounded-lg',
    current: false,
    achievements: [
      'Engineered a robust, high-performance, scalable, multi-tenant E-commerce API from scratch using Laravel/PHP/MySQL/Postgres for the largest online retailer of contact lenses',
      'Built complex product management systems, state machine status tracking, payment processing, RMA system, robust promotion engine, scalable microservices, and integrated many third-party APIs',
      'Increased testing pipeline speed by 150%, increased reliability by 100%, and built custom monitoring tools to improve developer experience and productivity',
      'Fostered a culture of continued learning and improvement, mentored team and participated in internal development program'
    ]
  },
  {
    company: 'NarcBox',
    role: 'Director of Software Development / Lead Developer',
    period: 'Sep 2018 - Oct 2021',
    logo: '/narcbox_logo.png',
    logoClass: 'w-24 h-24 object-contain',
    current: false,
    achievements: [
      'Developed a robust, Laravel/PHP powered IoT REST-ful API used by smart narcotics safes providing extensive interface for controlling and monitoring all access and usage events',
      'Developed world-class reporting system allowing emergency response agencies full visibility for narcotics administration',
      'Provided "one-click" reporting tools for DEA inspections saving hours and ensuring compliance and responsible narcotics management',
      'Managed all backend API development/architecture, hardware firmware coordination, AWS DevOps, consultants, front-end engineering team, and offshore team'
    ]
  }
]

// Make data globally available for Alpine
window.techStack = techStack
window.projects = projects
window.workExperience = workExperience

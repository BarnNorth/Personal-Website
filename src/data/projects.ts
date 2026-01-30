import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Dreamscape Series',
    category: 'ai-art',
    year: '2024',
    slug: 'dreamscape-series',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjB8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An exploration of surreal landscapes generated through AI, blending photorealism with impossible geometries. Each piece started as a prompt and evolved through iterative refinement.',
    tools: 'Midjourney, Stable Diffusion, Photoshop',
    location: 'Digital',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Abstract digital landscape with flowing forms',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Surreal geometric composition',
        aspectRatio: 'portrait'
      },
      {
        id: '1-3',
        src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Colorful abstract digital art',
        aspectRatio: 'landscape'
      },
      {
        id: '1-4',
        src: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'AI-generated cosmic scene',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '2',
    title: 'Portfolio Platform',
    category: 'web-apps',
    year: '2024',
    slug: 'portfolio-platform',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and responsive design—all created through vibe coding.',
    tools: 'React, TypeScript, Tailwind CSS, Framer Motion',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Mobile responsive design showcase',
        aspectRatio: 'portrait'
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Code editor with React components',
        aspectRatio: 'landscape'
      },
      {
        id: '2-3',
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Development workspace setup',
        aspectRatio: 'landscape'
      },
      {
        id: '2-4',
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Laptop with code on screen',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Neural Portraits',
    category: 'ai-art',
    year: '2024',
    slug: 'neural-portraits',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A series of AI-generated portraits exploring the intersection of human emotion and digital interpretation. Each portrait tells a story through color, texture, and form.',
    tools: 'DALL-E, Midjourney, Runway ML',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1686191128892-3b37add4f844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'AI-generated abstract portrait',
        aspectRatio: 'portrait'
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1699839644951-fc5f67c43c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Digital art portrait with vibrant colors',
        aspectRatio: 'portrait'
      },
      {
        id: '3-3',
        src: 'https://images.unsplash.com/photo-1683009427619-a1a11b799e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Stylized AI portrait',
        aspectRatio: 'square'
      },
      {
        id: '3-4',
        src: 'https://images.unsplash.com/photo-1676573409967-986dcf64d835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Abstract digital face composition',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '4',
    title: 'Interactive Dashboard',
    category: 'web-apps',
    year: '2023',
    slug: 'interactive-dashboard',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A data visualization dashboard built with vibe coding techniques. Features real-time charts, smooth transitions, and an intuitive interface.',
    tools: 'React, Recharts, Tailwind CSS, shadcn/ui',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Analytics dashboard with charts',
        aspectRatio: 'landscape'
      },
      {
        id: '4-2',
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Data visualization graphs',
        aspectRatio: 'landscape'
      },
      {
        id: '4-3',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Business metrics display',
        aspectRatio: 'landscape'
      },
      {
        id: '4-4',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Interactive data panels',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '5',
    title: 'Generative Patterns',
    category: 'experiments',
    year: '2023',
    slug: 'generative-patterns',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Experiments in procedural generation and creative coding. These patterns emerge from algorithms that balance randomness with mathematical precision.',
    tools: 'p5.js, Processing, Custom Scripts',
    client: 'Personal Exploration',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Generative geometric pattern',
        aspectRatio: 'square'
      },
      {
        id: '5-2',
        src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Abstract colorful pattern',
        aspectRatio: 'portrait'
      },
      {
        id: '5-3',
        src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Digital abstract composition',
        aspectRatio: 'landscape'
      },
      {
        id: '5-4',
        src: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Procedural art pattern',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'UI Component Library',
    category: 'open-source',
    year: '2023',
    slug: 'ui-component-library',
    coverImage: 'https://images.unsplash.com/photo-1545670723-196ed0954986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An open-source collection of reusable React components designed for rapid development. Built with accessibility and customization in mind.',
    tools: 'React, TypeScript, Storybook, Tailwind CSS',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Component library documentation',
        aspectRatio: 'landscape'
      },
      {
        id: '6-2',
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Code on monitor',
        aspectRatio: 'landscape'
      },
      {
        id: '6-3',
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Programming code',
        aspectRatio: 'landscape'
      },
      {
        id: '6-4',
        src: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Developer workspace',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '7',
    title: 'Cosmic Visions',
    category: 'ai-art',
    year: '2023',
    slug: 'cosmic-visions',
    coverImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Space-inspired AI art exploring the mysteries of the cosmos. Each piece imagines worlds beyond our reach, rendered with stunning detail.',
    tools: 'Midjourney, Stable Diffusion XL',
    images: [
      {
        id: '7-1',
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Digital space visualization',
        aspectRatio: 'landscape'
      },
      {
        id: '7-2',
        src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Starry night sky',
        aspectRatio: 'landscape'
      },
      {
        id: '7-3',
        src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Earth from space',
        aspectRatio: 'landscape'
      },
      {
        id: '7-4',
        src: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Nebula and stars',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '8',
    title: 'Creative Automation',
    category: 'creative-tech',
    year: '2023',
    slug: 'creative-automation',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tools and workflows for automating creative processes. From batch image processing to content generation pipelines, these projects explore efficiency in creativity.',
    tools: 'Python, Node.js, Various AI APIs',
    images: [
      {
        id: '8-1',
        src: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'AI robot concept',
        aspectRatio: 'landscape'
      },
      {
        id: '8-2',
        src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Technology interface',
        aspectRatio: 'landscape'
      },
      {
        id: '8-3',
        src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Python code on screen',
        aspectRatio: 'landscape'
      },
      {
        id: '8-4',
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Matrix-style code visualization',
        aspectRatio: 'landscape'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};

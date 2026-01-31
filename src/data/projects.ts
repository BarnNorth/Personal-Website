import type { Project } from "@/types";
import healthfreakPreview from "@/assets/projects/healthfreak-preview.png";
import commutesdontsuckPreview from "@/assets/projects/commutesdontsuck-preview.png";
import claudeLogo from "@/assets/logos/claude-logo.ico";
import boltLogo from "@/assets/logos/bolt-logo.ico";
import cursorLogo from "@/assets/logos/cursor-logo.ico";
import expoLogo from "@/assets/logos/expo-logo.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Health Freak (iOS App)",
    category: "ai-art",
    year: "2024",
    slug: "health-freak",
    coverImage: healthfreakPreview,
    description:
      "Your AI-powered food ingredient scanner. Snap a photo of any ingredient list and get instant analysis of which ingredients are clean and which to avoid. Built with React Native and powered by OpenAI's GPT-4 Vision for OCR and ingredient classification. Features smart caching for near-instant results and a color-coded system that evaluates ingredients through a wellness-focused, 'crunchy lifestyle' lens.",
    tools: "React Native, GPT-4 Vision, OpenAI, Mobile App",
    location: "healthfreak.io",
    images: [
      {
        id: "1-1",
        src: healthfreakPreview,
        alt: "Health Freak app screenshot",
        aspectRatio: "portrait",
      },
    ],
    features: "Advanced AI Vision • Instant Analysis • Color-Coded Results • Scan History • Smart Caching",
    externalLink: "https://healthfreak.io",
    tags: ["AI", "React Native", "GPT-4 Vision", "OpenAI", "Mobile App"],
    builtWith: [
      { name: "Claude", logo: claudeLogo, url: "https://claude.ai/" },
      { name: "Bolt", logo: boltLogo, url: "https://bolt.new/" },
      { name: "Cursor", logo: cursorLogo, url: "https://cursor.com/" },
      { name: "Expo", logo: expoLogo, url: "https://expo.dev/" },
    ],
  },
  {
    id: "2",
    title: "CommutesDontSuck (WebApp)",
    category: "web-apps",
    year: "2024",
    slug: "commutes-dont-suck",
    coverImage: commutesdontsuckPreview,
    description:
      "Get exact commute times instead of vague ranges. This app tracks your routes at specific times and days to give you real traffic data based on actual conditions. No more '25-45 minutes'—know that your Monday 8am commute averages exactly 32 minutes. Built with React, TypeScript, and Google Maps Directions API.",
    tools: "React, TypeScript, Google Maps API, Supabase, Real-time Data",
    location: "commutesdontsuck.com",
    images: [
      {
        id: "2-1",
        src: commutesdontsuckPreview,
        alt: "CommutesDontSuck app interface",
        aspectRatio: "landscape",
      },
    ],
    features: "Route Management • Flexible Scheduling • Traffic-Aware Data • Historical Tracking • Pattern Analysis",
    externalLink: "https://commutesdontsuck.com",
    tags: ["React", "TypeScript", "Google Maps API", "Supabase", "Real-time Data"],
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};

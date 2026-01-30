import type { PhotographerInfo } from "@/types";
import portraitImage from "@/assets/tommy-portrait.jpg";

export const photographerInfo: PhotographerInfo = {
  name: "BarnNorth Studios",
  tagline: "BarnNorth Studios",
  heroIntroduction:
    "I'm Tommy Mulder, an IT professional turned vibecoder. I spent 8 years building AI systems and automation tools at Pinterest and Snap. Now I build things for myself.",
  biography: `I spent 8 years in tech operations at Pinterest and Snap Inc., where I led AI implementations and automation projects. At Pinterest, I built Beacon—an AI-powered Slack support bot that achieved a 68% inquiry deflection rate. At Snap, I scaled Troopr (a Slack-Jira automation tool) to 1,500+ users in 30 days and owned the Voice of Tech survey that translated employee feedback into product roadmaps.

But I got tired of just managing projects. I wanted to build the thing, not just coordinate the people building the thing.

So I started vibecoding—using AI tools like Cursor and Claude to build my own projects. I'm not a software engineer, but I've learned to leverage AI to turn ideas into real products. Health Freak started as a weekend experiment and became a full iOS app. CommutesDontSuck was born from my frustration with San Diego's transit system.

I love the problem-solving aspect of building—figuring out architecture, debugging issues, and seeing something work that didn't exist before. BarnNorth Studios is where I explore what's possible when you combine domain knowledge with AI-powered development tools.`,
  approach: `My creative process is guided by curiosity, iteration, and a belief that the best results come from the collaboration between human intuition and AI capabilities.

Whether I'm prompting AI models to generate stunning visuals, building web applications with modern frameworks, or experimenting with new technologies, I strive to push boundaries and create work that inspires others to explore what's possible.`,
  awards: [
    "68% Inquiry Deflection - Beacon AI Bot at Pinterest",
    "1,500+ Users in 30 Days - Troopr at Snap",
    "Voice of Tech Survey Owner - Snap Inc.",
  ],
  clients: ["Pinterest", "Snap Inc.", "Personal Projects"],
  education: "Self-taught vibecoder & AI enthusiast",
  location: "San Diego, CA",
  email: "tmulder3@gmail.com",
  phone: "",
  availability: "Open to collaborations and new projects",
  socialLinks: {
    linkedin: "http://www.linkedin.com/in/tommy-mulder-a800905b",
    twitter: "https://twitter.com/barn_north",
    github: "https://github.com/BarnNorth",
  },
  portraitImage: portraitImage,
};

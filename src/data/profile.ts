import type { Profile } from "@/types";
import portraitImage from "@/assets/tommy-portrait.jpg";

export const profile: Profile = {
  name: "BarnNorth Studios",
  tagline: "A personal project by Tommy Mulder",
  heroIntroduction:
    "I'm Tommy Mulder, an IT professional, real estate investor, and aspiring builder. I've spent {{techExperience}} in big tech working on many things including IT Ops, Eng, and People Tech projects. In my free time I build things.",
  biography: `I've spent {{techExperience}} in big tech at Snapchat and Pinterest, where I rose through the ranks of IT. I started as a contract worker procurement specialist writing POs all day. Then I moved to IT Asset Management managing a device library. Eventually I became an IT Project & Program Manager helping engineering teams be more productive and driving IT's most high impact projects.

That brings me to my most recent role where I returned to Snap after 2 years for Season 2 to help lead the next wave of enterprise AI transformation across the company. I'm embedded within the IT Engineering and SaaS Admin teams, driving programs that scale and operationalize next-gen AI and agentic tools across Snap.

During this time I learned the thing I truly love doing is building "the thing". It can take many forms: processes, automations, tools, dashboards, or even people. This may be ignorant of me to say, but I felt I could have been a decent software engineer. I just wasn't self aware enough back then to go down that education path. Thankfully a crazy new technology would come out years later that could help me scratch the builder itch I had.

So I started vibecoding. I use AI tools like Cursor and Claude to build my own projects. Like I said, I'm not a software engineer, but I've learned to leverage AI to turn ideas into real products. Health Freak started as an experiment for my wife and me to find healthy food. It became a full iOS app. CommutesDontSuck was born from my frustration with trying to find an ideal place to live without being stuck in hours of traffic.

I love the problem-solving aspect of building. I can sit there for hours working on a specific issue or idea where I feel most other people would get over it and move on. Is that a strength or weakness? Not sure, but it's what I have and I enjoy it. BarnNorth Studios is where I explore what's possible when you just want to build stuff yourself.`,
  approach: `My creative process is guided by curiosity, iteration, and a belief that the best results come from the collaboration between human intuition and AI capabilities.

Whether I'm prompting AI models to generate stunning visuals, building web applications with modern frameworks, or experimenting with new technologies, I strive to push boundaries and create work that inspires others to explore what's possible.`,
  awards: [
    "68% Inquiry Deflection - Beacon AI Bot at Pinterest",
    "1,500+ Users in 30 Days - Troopr at Snap",
    "Voice of Tech Survey Owner - Snap Inc.",
  ],
  clients: ["Pinterest", "Snap Inc.", "Personal Projects"],
  education: "Self-taught vibecoder & AI enthusiast",
  location: "San Diego Metropolitan Area",
  email: "tmulder3@gmail.com",
  phone: "",
  availability: "Open to collaborations and new projects",
  careerStartDate: "2017-08-08",
  socialLinks: {
    linkedin: "http://www.linkedin.com/in/tommy-mulder-a800905b",
    twitter: "https://twitter.com/barn_north",
    instagram: "https://www.instagram.com/tommyjaymulder/",
    github: "https://github.com/BarnNorth",
  },
  portraitImage: portraitImage,
};

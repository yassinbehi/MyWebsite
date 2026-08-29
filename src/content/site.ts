// Single source of truth for every piece of copy on the site.
// Edit here — the sections read from this file.

export const site = {
  name: "Yassin El Behi",
  role: "Web & AI Developer",
  email: "behiyassin98@gmail.com",
  phone: "+216 98 321 075",
  phoneHref: "tel:+21698321075",
  github: "https://github.com/yassinbehi",
  linkedin: "https://www.linkedin.com/in/behi-yassin-59993536b/",
  cv: "/Yassin-Elbehi-CV.pdf",
  location: "Tunisia · working remotely",
  available: true,
};

export const hero = {
  eyebrow: "Freelance web & AI developer",
  // Static so it reads in under a second. The rotating line below carries the motion.
  headlineLead: "I build web and AI products",
  headlineAccent: "businesses actually use",
  rotating: [
    "online stores that sell",
    "dashboards that decide",
    "AI assistants that answer",
    "internal tools that save hours",
  ],
  sub: "Software engineering student and certified AI developer. I take a real business problem, shape it into something people can use, and ship it — clearly explained the whole way.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "See selected work", href: "#work" },
  credentials: [
    "Software Engineering student",
    "Certified AI Developer — Claude Code Partner Program",
    "Web + AI projects delivered for real use cases",
  ],
};

export const services = [
  {
    id: "web",
    title: "Web applications",
    lead: "Sites and stores that load fast, work on every screen, and turn visitors into customers.",
    points: [
      "Storefronts, landing pages, customer portals",
      "Built with React, Next.js and TypeScript",
      "Responsive, accessible, deployed and live",
    ],
  },
  {
    id: "ai",
    title: "AI features & assistants",
    lead: "Practical AI inside your product — not a demo, something your users and your team can rely on.",
    points: [
      "Assistants that answer from your own content",
      "Document handling and repetitive-task automation",
      "Built with current LLM tooling, cost kept in check",
    ],
  },
  {
    id: "tools",
    title: "Dashboards & internal tools",
    lead: "Scattered spreadsheets turned into one clear screen your team can actually act on.",
    points: [
      "Data pulled together and visualised",
      "Roles, filters, exports — the boring parts done right",
      "Handed over with docs you can maintain",
    ],
  },
];

// Only real, verifiable work. Add new entries here as you ship them.
export const projects = [
  {
    title: "GreenHaven",
    kind: "E-commerce platform",
    summary:
      "An online shop built end to end — catalogue, product pages and a checkout flow designed so a first-time visitor never has to think about where to click next.",
    image: "/e-commerce.png",
    tags: ["React", "Next.js"],
    href: "https://github.com/yassinbehi/GreenHaven-onlineShop",
    linkLabel: "View on GitHub",
  },
  {
    title: "Claims Triage Assistant",
    kind: "AI assistant",
    summary:
      "Reads an incoming auto-insurance claim, works out the coverage, flags what's missing or suspicious and drafts the reply — then hands it to a human to decide. 20/20 correct triage across the evaluation suite, for under ten cents.",
    image: "/capturePorjet2.png",
    tags: ["Next.js", "FastAPI", "Claude API"],
    href: "https://github.com/yassinbehi/AI-powered-auto-insurance-claims-triage-assistant",
    linkLabel: "View on GitHub",
  },
];

export const process = [
  {
    step: "01",
    title: "A short call",
    body: "Twenty minutes, free. You describe the problem; I tell you honestly whether I'm the right person for it.",
  },
  {
    step: "02",
    title: "Scope and quote",
    body: "You get a written scope, a fixed price and a delivery date before any code is written. No moving targets.",
  },
  {
    step: "03",
    title: "Build, in the open",
    body: "You see a working version every week and can steer it. Progress is something you click, not something you're told about.",
  },
  {
    step: "04",
    title: "Launch and handover",
    body: "Deployed, documented and walked through with you — so the project stays yours after I'm done.",
  },
];

export const about = {
  heading: "About me",
  bio: [
    "I'm Yassin, a software engineering student and freelance developer. I build web applications and AI-powered tools for specific business needs.",
    "I started with C, picked up database design along the way, and now spend most of my time in React, Next.js and modern AI tooling.",
    "What I care about most is that the thing works for the person using it. I explain what I'm doing in plain language, show you progress as it happens, and hand over something you can keep running without me.",
  ],
  facts: [
    { label: "Focus", value: "Web & AI applications" },
    { label: "Certification", value: "Certified AI Developer — Claude Code Partner Program" },
    { label: "Studying", value: "Software Engineering" },
    { label: "Based in", value: "Tunisia · remote worldwide" },
  ],
};

// Qualitative tiers instead of invented percentages — clients trust honest framing,
// and no one believes a self-scored "90%".
export const skills = [
  {
    tier: "Core — what I build with daily",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    tier: "Comfortable — used across projects",
    items: ["Node / Express", "Python", "Flask", "Pandas", "SQL & database design", "REST APIs", "Git"],
  },
  {
    tier: "AI & tooling",
    items: ["Claude Code", "LLM app development", "Prompt & context design", "AI-assisted workflows"],
  },
  {
    tier: "Also worked with",
    items: ["C", "C#", "PHP", "Java Swing", "Chart.js"],
  },
];

// Leave empty until you have real, permission-granted quotes.
// The section renders an invitation instead of fake praise.
export const testimonials: { quote: string; author: string; role: string }[] = [];

export const cta = {
  heading: "Have something you need built?",
  body: "Tell me what the problem is — not the solution, the problem. If I can help, you'll get a scope and a price. If I can't, I'll say so and point you somewhere better.",
  button: "Email me",
};

export const siteConfig = {
  name: "Nahid Azad",
  title: "nahid",
  role: "Full-Stack Developer (AI/ML)",
  tagline: "No generic builds. No black-box promises.",
  taglineSub:
    "Just rigorous full-stack engineering, with AI/ML woven in where it earns its place.",
  email: "hello@nahidazad.dev",
  phone: "",
  location: "United Kingdom",
  social: [
    { label: "GitHub", href: "https://github.com/inv-nahid" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tagnahid" },
    { label: "Twitter", href: "https://x.com/xizt_7" },
  ],
  nav: [
    { label: "Studio", href: "/" },
    { label: "Projects", count: "6", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    "Full-Stack Web Development",
    "Backend & API Engineering",
    "Machine Learning & AI Integration",
    "Cloud & DevOps",
  ],
  teamLead: {
    role: "Full-Stack Developer (AI/ML)",
    company: "Available for work",
    name: "Nahid Azad",
    photo: "/images/headshot.jpg",
    ctaText: "Let's talk",
    ctaHref: "/contact",
  },
} as const;

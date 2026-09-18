export type ProgressEntry = {
  period: string;
  year: number;
  title: string;
  summary: string;
  details: string[];
  tags: string[];
};

export const monthlyProgress: ProgressEntry[] = [
  {
    period: "August — Present",
    year: 2026,
    title: "Venture Group — Zuvo Intelligence",
    summary:
      "Helping a multi-brand Amazon business across six countries become AI-first — building internal tools that let a non-technical team see and act on what's happening in the business, without reading raw data.",
    details: [
      "Built approval screens for the daily advertising system, connected to live business data.",
      "Verify every number against the real database before building anything on top of it — caught and fixed several real reporting bugs this way.",
      "Redesigned screens so a business owner can understand what's happening in seconds.",
    ],
    tags: ["Full-Stack", "AI/ML", "Amazon Ecommerce"],
  },
  {
    period: "June — July",
    year: 2026,
    title: "PreSales AI Agent",
    summary:
      "Built the core of a platform that automates writing software project proposals — turning a client's plain description of what they need into a priced, professional proposal automatically.",
    details: [
      "Clients describe their project in their own words — by typing, filling a form, or speaking — and the system understands what they're asking for.",
      "The system then works out realistically who's needed, how long it will take, and what it should cost, based on real team availability rather than a guess.",
      "Produces a polished, ready-to-download proposal document, and lets clients negotiate changes to scope or timeline directly with the system.",
    ],
    tags: ["Full-Stack", "AI/ML", "SaaS Platform"],
  },
  {
    period: "April — May",
    year: 2026,
    title: "Lead Generation — AI Tool",
    summary:
      "Built an AI-powered tool to help generate new business leads, closing the loop between engineering work and bringing in new clients.",
    details: [
      "Focused on automating the parts of lead generation that used to take manual effort.",
      "Built to support the wider team's growth and outreach work, not just as an internal experiment.",
    ],
    tags: ["AI/ML", "Automation"],
  },
  {
    period: "March",
    year: 2026,
    title: "Cerebree — Interface Rebuild",
    summary:
      "Rebuilt Cerebree's interface pages from Figma designs into precise, pixel-accurate HTML and CSS, ready for the development team to build real screens from.",
    details: [
      "Translated design mockups into clean, accurate markup — matching spacing, type, and layout exactly.",
      "Gave the development team a reliable, ready-to-use foundation instead of building screens from scratch.",
    ],
    tags: ["Frontend", "UI Development"],
  },
];

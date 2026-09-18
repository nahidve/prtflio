export type Engagement = {
  slug: string;
  client: string;
  project: string;
  since: string;
  summary: string;
  challenge: string;
  approach: { title: string; body: string }[];
  highlights: { label: string; value: string }[];
  tags: string[];
};

export const engagements: Engagement[] = [
  {
    slug: "venture-group",
    client: "Venture Group",
    project: "Zuvo Intelligence",
    since: "Since August 2026",
    summary:
      "Venture Group sells across six countries and two different Amazon selling models, all at once. I'm helping them build an internal system that turns that complexity into something a business owner can actually look at and understand — no spreadsheets, no guesswork, no waiting on an engineer to explain what the numbers mean.",
    challenge:
      "Running an Amazon business across the UK, US, Germany, France, Italy, and Spain — through both their own storefronts and Amazon's own retail channel — means the day-to-day decisions about ads, stock, and pricing are buried in more raw data than any one person can read. Venture Group wanted to go AI-first: tools that surface what matters and let their team act on it, without needing to be technical to use them.",
    approach: [
      {
        title: "Built the tools their ads team actually uses daily",
        body: "Screens that show what the advertising system recommends changing — and let the team approve, reject, or fix those recommendations — all connected to real, live business data instead of sample numbers.",
      },
      {
        title: "Checked everything against the real numbers first",
        body: "Before building any screen, I verify the actual data behind it myself. That habit has already caught and fixed real mistakes — a report undercounting how much work was waiting for approval, an old number left in a shared report that no longer matched reality, and a claim about the data that simply didn't hold up once checked.",
      },
      {
        title: "Redesigned screens so the answer is obvious at a glance",
        body: "The standard I hold every screen to: a business owner should be able to look at it for a few seconds and know exactly what's going on and what to do next — not read a spreadsheet or ask someone to translate it for them.",
      },
      {
        title: "Worked across the entire system, not just the interface",
        body: "From the database and the logic that powers each screen, through to the actual pages people click through every day — plus improvements to how the whole application is organised and navigated.",
      },
    ],
    highlights: [
      { label: "Amazon marketplaces covered", value: "6" },
      { label: "Selling channels unified", value: "2" },
      { label: "Real data bugs caught & fixed", value: "3+" },
    ],
    tags: ["Full-Stack Development", "AI/ML Integration", "Amazon Ecommerce", "Internal Tools"],
  },
];

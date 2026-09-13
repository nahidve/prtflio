export type JourneyBeat = {
  index: string;
  label: string;
  title: string;
  body: string;
};

export const journey: JourneyBeat[] = [
  {
    index: "01",
    label: "Getting started",
    title: "Onboarded and built my first real feature.",
    body: "Joined as an intern and was put straight onto an e-commerce project under a senior developer's mentorship — learning the codebase, the standards, and how a production team actually ships.",
  },
  {
    index: "02",
    label: "First milestone",
    title: "Presented the work to my manager.",
    body: "Took the project from mentored builds to something I could stand behind — walked my manager through what was built, why it was built that way, and what came next.",
  },
  {
    index: "03",
    label: "Range",
    title: "Moved on to building full products, end to end.",
    body: "From there I started owning full-stack platforms outright — HR systems, logistics tracking, travel platforms, real-time apps — each with its own AI/ML piece where it earned its place.",
  },
  {
    index: "04",
    label: "Client work",
    title: "Automating a client's Amazon business.",
    body: "Now working directly with a client to automate their operations on Amazon — ads, product listings, and the workflows around them — while upskilling the team behind it.",
  },
  {
    index: "05",
    label: "Where I am now",
    title: "Presales, and building our own lead engine.",
    body: "Alongside client delivery, I'm now in presales and building an in-house tool to generate leads and bring in new clients — closing the loop from engineering into growth.",
  },
];

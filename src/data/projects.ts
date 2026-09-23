export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  description: string;
  overview?: string;
  role?: string;
  results?: { label: string; value: string }[];
  thumbnail: string;
  thumbnailPosition?: string;
  heroImage: string;
  heroImageSize?: { width: number; height: number };
  gallery: string[] | GalleryImage[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ve-hr",
    title: "VE HR",
    year: 2026,
    category: "AI/ML Integration",
    description:
      "An enterprise HR platform with AI-parsed employee profiles, competency scoring, OKR tracking, and a conversational policy assistant.",
    overview:
      "VE HR is a full-stack workforce management platform built for enterprise HR teams. Beyond the usual employee directory and leave management, it layers in a set of applied AI features: resumes are parsed and scored automatically, candidates get an AI-recommended department placement with reasoning, and an internal chat assistant lets staff query company policy documents in plain language instead of digging through PDFs.",
    role: "Full-Stack Developer",
    results: [
      { label: "HR workflows automated", value: "6" },
      { label: "Resume parsing accuracy", value: "94%" },
      { label: "AI assistant models", value: "1" },
      { label: "Departments tracked", value: "16" },
    ],
    thumbnail: "/projects/ve-hr/dashboard.png",
    thumbnailPosition: "top",
    heroImage: "/projects/ve-hr/dashboard.png",
    heroImageSize: { width: 1920, height: 2850 },
    gallery: [
      {
        src: "/projects/ve-hr/employee-profile.png",
        alt: "VE HR — AI-parsed employee profile with competency map",
        width: 1920,
        height: 1563,
      },
      {
        src: "/projects/ve-hr/goals.png",
        alt: "VE HR — OKR and goal tracking",
        width: 1920,
        height: 1178,
      },
      {
        src: "/projects/ve-hr/policy-assistant.png",
        alt: "VE HR — AI policy assistant chat",
        width: 1920,
        height: 1082,
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
    ],
    liveUrl: "https://hr-frontend-five-eta.vercel.app",
    githubUrl: "",
    featured: true,
  },
  {
    slug: "gotrip",
    title: "GoTrip",
    year: 2026,
    category: "Full-Stack Platform",
    description:
      "A luxury travel platform with a member concierge portal, an editorial travel journal, and an AI system that drafts and publishes content across channels automatically.",
    overview:
      "GoTrip is a luxury travel and concierge platform spanning a full marketing site, a members-only portal, and an editorial journal. Signed-in members get a personalized dashboard — VIP tier status, points balance, upcoming itineraries, and a live chat with an AI concierge that can action requests directly. Behind the scenes, an internal admin system (Vanguard) runs an AI content pipeline: it scans travel RSS feeds, drafts articles and social posts with an AI agent, and — once approved — auto-publishes them across the blog, LinkedIn, and Instagram, logging every step in a real-time operations feed.",
    role: "Full-Stack Developer",
    results: [
      { label: "Platform surfaces built", value: "5" },
      { label: "Channels auto-published", value: "4" },
      { label: "AI content pipeline stages", value: "3" },
      { label: "Member tiers tracked", value: "3" },
    ],
    thumbnail: "/projects/gotrip/homepage.png",
    thumbnailPosition: "top",
    heroImage: "/projects/gotrip/homepage.png",
    heroImageSize: { width: 1920, height: 6820 },
    gallery: [
      {
        src: "/projects/gotrip/member-portal.png",
        alt: "GoTrip — member portal with VIP status and AI concierge chat",
        width: 1920,
        height: 1910,
      },
      {
        src: "/projects/gotrip/dispatch-journal.png",
        alt: "GoTrip — The Dispatch editorial travel journal",
        width: 1920,
        height: 3407,
      },
      {
        src: "/projects/gotrip/vanguard-about.png",
        alt: "GoTrip — The Vanguard team and company story page",
        width: 1920,
        height: 3903,
      },
      {
        src: "/projects/gotrip/vanguard-admin.png",
        alt: "GoTrip — Vanguard admin dashboard with AI content automation and publishing logs",
        width: 1920,
        height: 1067,
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "OpenAI API",
      "Tailwind CSS",
    ],
    liveUrl: "https://gotrip-psi.vercel.app",
    githubUrl: "",
    featured: true,
  },
  {
    slug: "libya-logistics",
    title: "Libya Logistics",
    year: 2026,
    category: "Full-Stack Platform",
    description:
      "A role-based warehouse and shipment tracking platform coordinating 8 logistics hubs across Libya, from booking through final delivery.",
    overview:
      "Libya Logistics is an operations platform for a national warehouse and parcel network. Super Admins get a real-time overview across all hubs, Operators book and register shipments at origin, and Managers dispatch, track, and complete deliveries at their warehouse. Every shipment carries a full lifecycle audit trail — booked, stored, dispatched, in transit, received, ready for pickup, completed — with a timestamped history of who updated what and where.",
    role: "Full-Stack Developer",
    results: [
      { label: "Warehouse hubs coordinated", value: "8" },
      { label: "User roles supported", value: "3" },
      { label: "Shipment lifecycle stages", value: "7" },
      { label: "Active shipments tracked", value: "200+" },
    ],
    thumbnail: "/projects/libya-logistics/dashboard.png",
    thumbnailPosition: "top",
    heroImage: "/projects/libya-logistics/dashboard.png",
    heroImageSize: { width: 1920, height: 3988 },
    gallery: [
      {
        src: "/projects/libya-logistics/login.png",
        alt: "Libya Logistics — sign-in with role-based demo quick-login",
        width: 1920,
        height: 895,
      },
      {
        src: "/projects/libya-logistics/warehouses.png",
        alt: "Libya Logistics — warehouse directory across Libyan hubs",
        width: 1920,
        height: 2020,
      },
      {
        src: "/projects/libya-logistics/shipment-detail.png",
        alt: "Libya Logistics — shipment detail with full movement history audit trail",
        width: 1920,
        height: 1787,
      },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://libya-logistics.vercel.app",
    githubUrl: "",
    featured: true,
  },
  {
    slug: "aigramx",
    title: "AIGramX",
    year: 2026,
    category: "Full-Stack Platform",
    description:
      "A real-time messaging app with contacts, groups, calls, stories, and per-chat theming and notification preferences.",
    overview:
      "AIGramX is a full-stack real-time chat application built around the core messaging experience: contacts and groups, one-to-one calls, stories, archived and starred conversations, and customizable chat wallpapers. A dedicated settings area lets users switch between light and dark themes with a live preview, and fine-tune notification behavior — desktop push, sound effects, or mentions-only.",
    role: "Full-Stack Developer",
    results: [
      { label: "Core chat features", value: "6" },
      { label: "Theme modes", value: "2" },
      { label: "Notification controls", value: "3" },
    ],
    thumbnail: "/projects/aigramx/chat.png",
    thumbnailPosition: "top",
    heroImage: "/projects/aigramx/chat.png",
    heroImageSize: { width: 1919, height: 1504 },
    gallery: [
      {
        src: "/projects/aigramx/login.png",
        alt: "AIGramX — sign in screen",
        width: 1920,
        height: 942,
      },
      {
        src: "/projects/aigramx/settings.png",
        alt: "AIGramX — theme and notification settings with live preview",
        width: 1920,
        height: 2076,
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
    ],
    liveUrl: "https://texts-frontend-swart.vercel.app",
    githubUrl: "",
  },
  {
    slug: "tea",
    title: "Tea",
    year: 2026,
    category: "Full-Stack Platform",
    description:
      "A modern, lightweight social media platform with rich post creation, real-time messaging, and ephemeral stories.",
    overview:
      "Tea is a social media platform built for real-time interaction. Posts support text, up to 6 images, carousels, GIFs via the Giphy API, and polls, with live @username suggestions while composing. Direct messages run in real time with live typing indicators through Pusher, and Stories add ephemeral photo/video posts with seen/unseen status rings and a timed progress viewer. Beyond posting, users can like and comment on posts, follow and unfollow each other, bookmark posts for later, and track it all through an activity feed for likes, comments, and follows.",
    role: "Full-Stack Developer",
    results: [
      { label: "Post types supported", value: "5" },
      { label: "Real-time messaging", value: "Live" },
      { label: "Story status tracking", value: "Seen/Unseen" },
    ],
    thumbnail: "/projects/tea/feed.png",
    thumbnailPosition: "top",
    heroImage: "/projects/tea/feed.png",
    heroImageSize: { width: 1920, height: 918 },
    gallery: [
      {
        src: "/projects/tea/profile.png",
        alt: "Tea — user profile with posts, stats, and profile music",
        width: 1920,
        height: 1112,
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Pusher",
    ],
    liveUrl: "https://tea-lovat.vercel.app",
    githubUrl: "",
    featured: true,
  },
  {
    slug: "tomato",
    title: "Tomato",
    year: 2026,
    category: "Full-Stack Platform",
    description:
      "A modern food ordering and delivery web application with category exploration, cart management, and real-time order status tracking.",
    overview:
      "Tomato is a full-stack food delivery and ordering web application designed for seamless customer dining experiences. Users can explore curated culinary categories—from salads and rolls to pasta and desserts—filter dishes by price, manage their cart, and track order lifecycles from placement to delivery in real time.",
    role: "Full-Stack Developer",
    results: [
      { label: "Menu categories", value: "8+" },
      { label: "Order lifecycle stages", value: "Live" },
      { label: "Responsive experience", value: "100%" },
    ],
    thumbnail: "/projects/tomato/homepage.png",
    thumbnailPosition: "top",
    heroImage: "/projects/tomato/homepage.png",
    heroImageSize: { width: 708, height: 1024 },
    gallery: [
      {
        src: "/projects/tomato/orders.png",
        alt: "Tomato — My Orders dashboard with order status tracking",
        width: 1024,
        height: 615,
      },
    ],
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "CSS",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
];

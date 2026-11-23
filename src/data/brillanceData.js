import TwitterIcon from "../components/icons/TwitterIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GitHubIcon from "../components/icons/GitHubIcon";

export const headerNavItems = [
  { id: 1, label: "Products", href: "#services" },
  { id: 2, label: "Pricing", href: "#pricing" },
  { id: 3, label: "Docs", href: "#features" },
];

export const heroHighlightCards = [
  {
    id: 1,
    title: "Plan your schedules",
    description: "Streamline customer subscriptions and billing with automated scheduling tools.",
    image: "./assets/images/services/plan-your-schedules.jpeg",
    alt: "Plan schedules dashboard",
    imgClass: "w-full h-40 object-cover rounded-md mt-3",
    isLast: false,
  },
  {
    id: 2,
    title: "Analytics & insights",
    description: "Transform your business data into actionable insights with real-time analytics.",
    image: "./assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg",
    alt: "Analytics dashboard",
    imgClass: "w-full h-40 object-cover rounded-md mt-3",
    isLast: false,
  },
  {
    id: 3,
    title: "Collaborate seamlessly",
    description: "Keep your team aligned with shared dashboards and collaborative workflows.",
    image: "./assets/images/services/data-visualization-dashboard-with-interactive-char.jpg",
    alt: "Data visualization dashboard",
    imgClass: "w-full h-40 object-cover rounded-md mt-3",
    isLast: true,
  },
];

export const testimonialsData = [
  {
    id: 1,
    quote: '"In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!"',
    author: "Jamie Marshall",
    role: "Co-founder, Exponent",
    image: "./assets/images/avatar/professional-man-avatar-with-beard-and-glasses-loo.jpg",
    alt: "Jamie Marshall",
    logoImage: "./assets/logo.svg",
    logoAlt: "Brillance logo",
  },
];

export const servicesGridData = [
  {
    id: 1,
    title: "Smart. Simple. Brilliant.",
    description: "Your data is beautifully organized so you see everything clearly without the clutter.",
    image: "./assets/images/services/work-order.png",
    alt: "Smart. Simple. Brilliant.",
    imgClass: "h-1/2 object-cover",
    hasBottomBorder: true,
    hasRightBorder: true,
  },
  {
    id: 2,
    title: "Your work, in sync",
    description: "Every update flows instantly across your team and keeps collaboration effortless and fast.",
    image: "./assets/images/services/work-sync.png",
    alt: "Your work, in sync",
    imgClass: "h-full object-cover",
    hasBottomBorder: true,
    hasRightBorder: false,
  },
  {
    id: 3,
    title: "Effortless integration",
    description: "All your favorite tools connect in one place and work together seamlessly by design.",
    image: "./assets/images/services/integration.png",
    alt: "Effortless integration",
    imgClass: "h-full object-cover",
    hasBottomBorder: false,
    hasRightBorder: true,
  },
  {
    id: 4,
    title: "Numbers that speak",
    description: "Track growth with precision and turn raw data into confident decisions you can trust.",
    image: "./assets/images/services/speak.png",
    alt: "Numbers that speak",
    imgClass: "h-full object-cover",
    hasBottomBorder: false,
    hasRightBorder: false,
  },
];

export const extraFeaturesData = [
  {
    id: 1,
    title: "Automated Contract Clauses",
    description: "Generate custom billing cycles, milestones, and usage tiers directly from contract terms.",
  },
  {
    id: 2,
    title: "Instant Invoice Reconciliation",
    description: "Match payments, credits, and adjustments automatically without manual spreadsheet work.",
  },
  {
    id: 3,
    title: "Role-Based Team Permissions",
    description: "Give finance, legal, and operations clear visibility while protecting sensitive pricing rules.",
  },
  {
    id: 4,
    title: "Webhook & API Events",
    description: "Trigger real-time billing events across your stack whenever a contract status changes.",
  },
];

export const pricingPlansData = [
  {
    id: 1,
    name: "Starter",
    price: "$0",
    cadence: "/month",
    summary: "For individuals and small teams testing custom contract workflows.",
    cta: "Start for free",
  },
  {
    id: 2,
    name: "Growth",
    price: "$49",
    cadence: "/month",
    summary: "For scaling businesses automating recurring and milestone billing.",
    cta: "Get started",
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    summary: "For organizations needing dedicated support, SSO, and custom SLAs.",
    cta: "Contact us",
  },
];

export const socialLinksData = [
  { id: 1, name: "Twitter", href: "#twitter", Icon: TwitterIcon },
  { id: 2, name: "LinkedIn", href: "#linkedin", Icon: LinkedInIcon },
  { id: 3, name: "GitHub", href: "#github", Icon: GitHubIcon },
];

export const footerColumnsData = [
  {
    id: 1,
    heading: "Product",
    alignCenter: false,
    links: [
      { id: 11, label: "Features", href: "#features" },
      { id: 12, label: "Pricing", href: "#pricing" },
      { id: 13, label: "Integrations", href: "#services" },
      { id: 14, label: "Real-time Previews", href: "#services" },
      { id: 15, label: "Multi-Agent Coding", href: "#services" },
    ],
  },
  {
    id: 2,
    heading: "Company",
    alignCenter: false,
    links: [
      { id: 21, label: "About us", href: "#top" },
      { id: 22, label: "Our team", href: "#testimonials" },
      { id: 23, label: "Careers", href: "#top" },
      { id: 24, label: "Brand", href: "#top" },
      { id: 25, label: "Contact", href: "#footer" },
    ],
  },
  {
    id: 3,
    heading: "Resources",
    alignCenter: true,
    links: [
      { id: 31, label: "Terms of use", href: "#footer" },
      { id: 32, label: "API Reference", href: "#features" },
      { id: 33, label: "Documentation", href: "#features" },
      { id: 34, label: "Community", href: "#testimonials" },
      { id: 35, label: "Support", href: "#footer" },
    ],
  },
];


import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "3",
    title: "Process",
    url: "#roadmap",
  },
 
  {
    id: "1",
    title: "Solutions",
    url: "#how-to-use",
  },
  {
    id: "0",
    title: "Projects",
    url: "#features",
  },
  // {
  //   id: "2",
  //   title: "Pricing",
  //   url: "#pricing",
  // },
 
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  {
    id: "5",
    title: "Contact Us",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Comfy UI Workflows",
  "Custom LLM Chatbots",
  "Custom AI Modules",
  "AI Tools Enterprise Deployment",
  "Generative AI for Enterprises",
  "AI Wrappers",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI Workflow Mapping",
    text: "We specialize in identifying and implementing the most advanced AI workflows tailored to your specific business needs. Our expertise lies in understanding the intricate landscape of AI tools and mapping the most efficient solutions without creating or training custom models.",
    date: "November 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Enterprise AI Integration",
    text: "Our core strength is bridging the knowledge gap for enterprises struggling to navigate the complex AI ecosystem. We provide comprehensive guidance on selecting and implementing best-in-class AI tools, ensuring seamless integration within your existing infrastructure.",
    date: "August 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Custom Solution Architecture",
    text: "We don't just recommend tools; we architect complete AI solution ecosystems. By understanding your unique business requirements, we design and implement pre-configured workflows that leverage top-tier market solutions, optimized for your specific operational context.",
    date: "September 2025",
    status: "in progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Strategic AI Deployment",
    text: "Our strategic approach focuses on deploying proven AI workflows directly within your organization. We eliminate the complexity of tool selection and implementation, providing turnkey solutions that immediately enhance productivity and technological capabilities.",
    date: "TBD",
    status: "in progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Hair Diagnostic Technology",
    text: "Our groundbreaking hair analysis AI leverages advanced computer vision and head detection algorithms to generate comprehensive hair health visualizations.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Nail Dimension Mapping",
    text: "We've developed a cutting-edge AI vision system that revolutionizes nail diagnostics through precise marker-based measurement technologies.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "AI Travel Planner",
    text: "We architect complete AI solution ecosystems. By understanding your unique business requirements, we design and implement pre-configured workflows that leverage top-tier market solutions.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  // {
  //   id: "3",
  //   title: "Strategic AI Deployment",
  //   text: "Our strategic approach focuses on deploying proven AI workflows directly within your organization. We eliminate the complexity of tool selection and implementation",
  //   backgroundUrl: "assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/invite/yGqSnBCdUW",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/CryenxLabs",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/cryenxlabs/",
  },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "https://web.telegram.org/",
  // },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/cryenxlabs/",
  },
];

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,

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
  loreal,
  cola,
  disney,
  sxsw,
  lego,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Solutions",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Process",
    url: "#roadmap",
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

export const companyLogos = [loreal,
  cola,
  disney,
  sxsw,
  lego];

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
    title: "Image Acquisition",
    text: "The process commences with the acquisition of a head image using a mobile camera. This image serves as the primary input for subsequent processing stages.",
    date: "Step 1",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Head Detection",
    text: "Following image acquisition, an AI-based detection algorithm is employed to identify and isolate the head within the captured image.",
    date: "Step 2",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Image Segmentation",
    text: "Once the head is detected, image segmentation techniques are applied to extract the head from its background. This step ensures that only relevant features are retained for further processing.",
    date: "Step 3",
    status: "in progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Quality Assessment",
    text: "The segmented image undergoes a quality assessment to evaluate its suitability for animation. Factors such as clarity, lighting, and angle are analyzed.",
    date: "Step 4",
    status: "in progress",
    imageUrl: roadmap4,
  },
  {
    id: "4",
    title: "Animated Overlay Generation",
    text: "Upon passing quality checks, an animated overlay representing hair growth is generated and applied to the segmented head image.",
    date: "Step 5",
    status: "in progress",
    imageUrl: roadmap4,
  },
  {
    id: "5",
    title: "Frame Interpolation for Animation",
    text: "To achieve smooth transitions in the animation, frame interpolation techniques are employed. This involves generating intermediate frames that depict gradual changes in hair growth.",
    date: "Step 6",
    status: "in progress",
    imageUrl: roadmap4,
  },
  {
    id: "6",
    title: "Video Enhancement and Upscaling",
    text: "The final animated video undergoes enhancement processes to improve its resolution and overall visual quality before presentation to users.",
    date: "Step 7",
    status: "in progress",
    imageUrl: roadmap4,
  },
  {
    id: "7",
    title: "User Presentation of Final Video",
    text: "The completed animated video is presented through an interactive web interface, allowing users to view and engage with their personalized content easily.",
    date: "Step 8",
    status: "in progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "At Cryenx Labs, we revolutionize businesses with cutting-edge AI solutions tailored for the future. From custom chatbots to seamless UI workflows, our innovative tools empower you to elevate operations and engage customers like never before. Let us help you unlock the full potential of AI and transform your vision into reality!";

export const collabContent = [
  {
    id: "0",
    title: "WE",
    text: collabText,
  },
  // {
  //   id: "1",
  //   title: "Smart Automation",
  // },
  // {
  //   id: "2",
  //   title: "Top-notch Security",
  // },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 34,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 34,
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
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 34,
    height: 34,
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
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "2",
    title: "AI Travel Planner",
    text: "We architect complete AI solution ecosystems. By understanding your unique business requirements, we design and implement pre-configured workflows that leverage top-tier market solutions.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
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

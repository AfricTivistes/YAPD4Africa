// Editorial content that rarely changes and stays in the codebase.
import innovation from "@/assets/images/values/innovation.png";
import teamwork from "@/assets/images/values/teamwork.jpg";
import gender from "@/assets/images/values/gender-inclusivity.jpg";
import transparency from "@/assets/images/values/transparency-accountability.jpg";
import commitment from "@/assets/images/values/commitment.jpg";
import collaboration from "@/assets/images/values/collaboration-partnership.jpg";

export const SITE_NAME = "YAPD4Africa";
export const ORG_LEGAL_NAME = "Connected Youth for Accountability, Peace and Development Initiative";
export const SITE_DESCRIPTION =
  "YAPD4Africa is a Pan-African youth-led civil society organization advancing social development and empowering grassroots communities through youth-led empowerment, inclusive governance and advocacy.";
export const FOUNDING_YEAR = 2017;

export const mission =
  "To build strong people and sustainable communities in Africa through innovative solutions and collaborative partnerships.";

export const vision =
  "We envision a world where people are empowered to drive sustainable social development, even in the most remote areas of the globe, creating lasting positive change.";

export const coreValues = [
  {
    title: "Innovation",
    description: "Pioneering creative solutions for community development",
    image: innovation,
  },
  {
    title: "Teamwork Ethic",
    description: "Working together with dedication and purpose",
    image: teamwork,
  },
  {
    title: "Gender Inclusivity",
    description: "Ensuring equal opportunities and representation",
    image: gender,
  },
  {
    title: "Transparency and Accountability",
    description: "Maintaining accountability in all our actions",
    image: transparency,
  },
  {
    title: "Commitment to Making a Difference",
    description: "Dedicated to making a lasting difference",
    image: commitment,
  },
  {
    title: "Collaboration and Partnership",
    description: "Building strong collaborations for greater impact",
    image: collaboration,
  },
];

/** The six pillars of the CARE-SD framework. */
export const approach = [
  {
    icon: "lucide:users",
    title: "Community Engagement",
    description:
      "Centering community voices and needs in all our work, ensuring local ownership and participation in development initiatives.",
  },
  {
    icon: "lucide:megaphone",
    title: "Advocacy",
    description:
      "Amplifying marginalized voices and advocating for policy changes that promote equity, justice, and sustainable development.",
  },
  {
    icon: "lucide:clipboard-check",
    title: "Research",
    description:
      "Conducting rigorous research to inform evidence-based interventions and measure impact across our programs.",
  },
  {
    icon: "lucide:award",
    title: "Empowerment",
    description:
      "Building capacity and creating opportunities for individuals and communities to lead their own development journey.",
  },
  {
    icon: "lucide:handshake",
    title: "Strategic Partnerships",
    description:
      "Collaborating with diverse stakeholders to leverage resources and expertise for greater collective impact.",
  },
  {
    icon: "lucide:globe",
    title: "Digital Campaigns",
    description:
      "Utilizing digital platforms to raise awareness, mobilize support, and drive social change at scale.",
  },
] as const;

export const navigation = [
  { name: "What We Do", href: "/what-we-do" },
  { name: "Who We Are", href: "/who-are-we" },
  { name: "Reports", href: "/reports" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export const founderQuote = {
  text: "The grassroots is the heart of democracy; if it stops beating, any nation will definitely fail.",
  author: "Idris Bilyaminu Ndasadu'Lau",
  role: "Founder & Chief Executive",
};

/** International recognition (source: 2025 Annual Report). */
export const recognitions = [
  {
    title: "Top 15 Finalist",
    award: "Reimagine Civic Engagement Award",
    by: "YGC Germany",
    year: "2024",
  },
  {
    title: "Top 100 Finalist",
    award: "Excellence Actions for Global Youth Development",
    by: "China",
    year: "2024-2025",
  },
  {
    title: "Delegate",
    award: "World Youth Development Forum",
    by: "Our Chief Executive",
    year: "2025",
  },
  {
    title: "1 of 10 organizations selected",
    award: "WYDE Civic Engagement Project",
    by: "ALDA & European Commission",
    year: "2024",
  },
];

/** Milestones shown on the Who We Are page. */
export const timeline = [
  { year: "2017", text: "YAPD4Africa is founded by a group of passionate young Africans." },
  { year: "2018", text: "The We Need Peace campaign engages leaders ahead of the 2019 elections." },
  { year: "2019", text: "Launch of the Community Action-Led Initiative (CAL), our flagship program." },
  { year: "2020", text: "Rescue Mission against COVID-19 supports 500 vulnerable people." },
  { year: "2021", text: "Our Board of Trustees starts steering the organization." },
  { year: "2023", text: "After our advocacy, a national commission for Almajiri and out-of-school children is signed into law." },
  {
    year: "2024",
    text: "Official registration with the Corporate Affairs Commission, Murya needs assessment in Gwaraji Ward, clean water restored in Joga, and CAL named a Top 15 finalist in Germany.",
  },
  {
    year: "2025",
    text: "LAW Project and NaijaAdvocate Fellowship, CAL finalist in China, launch of yapd4africa.org and 8 years of impact.",
  },
  { year: "2026", text: "Expanding LAW and NaijaAdvocate, and launching the Kuri'a AI Monitor ahead of the 2027 elections." },
];

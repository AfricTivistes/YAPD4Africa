import type { Post } from "@/lib/types";
import wyde from "@/assets/images/news/wyde-selection.png";
import law from "@/assets/images/projects/law.jpg";

export const posts: Post[] = [
  {
    slug: "local-accountability-watch-project-closes",
    title: "LAW Project wraps up: 20 LAW Drivers and a Citizen Toolkit for Accountability",
    excerpt:
      "The Local Accountability Watch project officially closed on 28 November 2025 in Jigawa State, after training 20 LAW Drivers and engaging over 200 citizens in local governance.",
    content: `<p>The Local Accountability Watch (LAW Project) officially wrapped up on 28 November 2025, alongside our international partners WYDE Civic Engagement, the European Commission, ALDA – European Association for Local Democracy and others.</p>
<p>Through the Local Accountability Fellowship, which received over 400 applications from 23 Nigerian states, 20 young leaders were trained as <strong>LAW Drivers</strong>. They led advocacy in Disina, Sasarai and Birnin Kudu, directly engaging over 200 citizens, including women, low-income groups and youth, with a bilingual English and Hausa sensitization toolkit.</p>
<p>The project also launched the <strong>Citizen Toolkit for Accountability</strong>, engaged high-level stakeholders including the Emir of Dutse and Federal University Dutse, and reached millions of Nigerians through radio, television and social media.</p>
<p>We now look forward to replicating LAW in Nigeria's most underserved states.</p>
<p><a href="/what-we-do/local-accountability-watch">Discover the LAW Project</a> · <a href="/reports">Download the LAW report and the Citizen Toolkit</a></p>`,
    date: "2025-11-28",
    image: { src: law, alt: "LAW Drivers of the Local Accountability Fellowship holding their certificates" },
  },
  {
    slug: "wyde-civic-engagement-project-selection",
    title: "YAPD4Africa selected among 10 organizations in the WYDE Civic Engagement Project",
    excerpt:
      "YAPD4Africa has been selected as one of the 10 organizations to participate in the WYDE Civic Engagement Project, recognizing our commitment to youth empowerment and community development.",
    content: "",
    date: "2024-05-01",
    image: { src: wyde, alt: "WYDE Civic Engagement Project announcement" },
    externalUrl:
      "https://www.alda-europe.eu/meet-the-10-selected-organisations-from-the-3rd-call-for-proposals-of-the-wyde-civic-engagement-project/",
  },
];

import type { Project } from "@/lib/types";
import cal from "@/assets/images/projects/cal.jpg";
import law from "@/assets/images/projects/law.jpg";
import naijaAdvocate from "@/assets/images/projects/naija-advocate.jpg";
import murya from "@/assets/images/projects/murya.png";
import kuria from "@/assets/images/projects/kuria.png";
import rescueAGirl from "@/assets/images/projects/rescue-a-girl.jpg";
import water from "@/assets/images/projects/water-for-local-communities.jpg";
import almajiri from "@/assets/images/projects/almajiri.jpg";
import covid from "@/assets/images/projects/covid-19-rescue.jpg";
import weNeedPeace from "@/assets/images/projects/we-need-peace.jpg";

export const projects: Project[] = [
  {
    slug: "community-action-led-initiative",
    title: "Community Action-Led Initiative (CAL)",
    category: "homegrown",
    period: "Since 2019",
    summary:
      "Our flagship civic education movement, empowering grassroots communities to understand their rights and hold their representatives accountable, in Nigeria, Cameroon and beyond.",
    content: `<p>The Community Action-Led Initiative (CAL) is the driving force behind our work: a grassroots movement that equips underserved communities with the civic literacy they need to understand their rights, responsibilities and duties as citizens, and to hold their representatives accountable.</p>
<p>CAL started by teaching community groups to track public development budgets with digital platforms such as FollowTheMoney and TrackaNigeria. Those early field experiences shaped our core conviction: public authorities can only be engaged effectively when communities present concrete, evidence-based data.</p>
<h2>2025 highlights</h2>
<ul>
<li>Over 1,500 people, including women, youth and the elderly, empowered across 6 remote areas of Kaduna and Jigawa States, including Igabi, Dutse and Birnin Kudu.</li>
<li>Community accountability structures established, enabling citizens to safely engage local governments and demand transparency.</li>
<li>Sustainable community development plans designed with local authorities and stakeholders.</li>
<li>After a successful launch in Cameroon, regional expansion underway in Ghana and Kenya.</li>
</ul>
<h2>International recognition</h2>
<p>CAL was shortlisted among the Top 15 finalists of the Reimagine Civic Engagement Award by YGC Germany (2024), and selected among the 100 finalists of the Excellence Actions for Global Youth Development in China (2025).</p>`,
    impact:
      "Since 2019, over 8,000 young citizens empowered across 15 communities with sustainable solutions for youth civic participation.",
    tags: ["Civic Education", "Accountability", "Nigeria", "Cameroon"],
    image: { src: cal, alt: "CAL project facilitators meeting with community members" },
    stats: [
      { value: "8,000+", label: "young citizens empowered since 2019" },
      { value: "1,500+", label: "people reached in 2025" },
      { value: "2", label: "countries active, with Ghana and Kenya underway" },
    ],
  },
  {
    slug: "local-accountability-watch",
    title: "Local Accountability Watch (LAW Project)",
    category: "homegrown",
    period: "2025",
    summary:
      "A citizen-led response to local governance challenges: 20 trained LAW Drivers, a Citizen Toolkit for Accountability and direct engagement with local authorities in Jigawa State.",
    content: `<p>The Local Accountability Watch (LAW Project) is a bold, citizen-led response to the governance challenges facing local communities. Recognizing that the heart of democracy lies at the grassroots, we bridge the gap between citizens and local authorities by fostering a culture of transparency and proactive engagement.</p>
<p>The project equips community members with the <strong>Citizen Toolkit for Accountability</strong>, a practical manual that helps citizens demand better service delivery and hold officials responsible. A bilingual Citizen Engagement and Sensitization toolkit in English and Hausa removed literacy barriers during community sessions.</p>
<h2>The Local Accountability Fellowship</h2>
<p>The fellowship received over 400 applications from 23 Nigerian states and one other African country. 20 young leaders, the <strong>LAW Drivers</strong>, were trained in local governance, transparency and accountability, communication for change, social accountability tools and monitoring and evaluation. They then led advocacy in three target communities: Disina, Sasarai and Birnin Kudu.</p>
<h2>Key components</h2>
<ul>
<li><strong>Citizen Toolkit for Accountability:</strong> a practical guide for navigating local governance and demanding transparency.</li>
<li><strong>LAW Drivers Fellowship:</strong> intensive training for civil society leaders and youth advocates championing accountability at community level.</li>
<li><strong>Stakeholder engagement:</strong> direct advocacy with local government officials, academic leaders and traditional institutions, including the Special Assistant to the Governor of Jigawa State on Youth Mobilization, the Deputy Vice Chancellor of Federal University Dutse and the Emir of Dutse.</li>
<li><strong>Community sensitization:</strong> public events, media campaigns and press briefings to educate citizens on their rights and civic duties.</li>
</ul>
<p>The project officially wrapped up on 28 November 2025 and will be replicated in other underserved states.</p>`,
    impact:
      "Over 200 citizens directly engaged in local governance, community accountability structures established, and millions reached through media campaigns across Nigeria.",
    tags: ["Local Governance", "Accountability", "Fellowship", "Jigawa State"],
    image: { src: law, alt: "LAW Drivers of the Local Accountability Fellowship holding their certificates" },
    stats: [
      { value: "400+", label: "fellowship applications from 23 states" },
      { value: "20", label: "LAW Drivers trained" },
      { value: "200+", label: "citizens directly engaged" },
      { value: "5M+", label: "people reached through radio and TV" },
    ],
    supporters: [
      "WYDE Civic Engagement",
      "European Commission",
      "ALDA",
      "European Partnership for Democracy",
      "People in Need",
      "Elbarlament",
    ],
  },
  {
    slug: "naija-advocate",
    title: "NaijaAdvocate Fellowship",
    category: "homegrown",
    period: "2025",
    summary:
      "Empowering young Nigerians to champion healthcare equity through accountability and evidence-based advocacy, including the #FixOurPHCs campaign for local clinics.",
    content: `<p>The NaijaAdvocate Program empowers young Nigerians to champion healthcare equity through accountability and evidence-based advocacy. It bridges the gap between policymakers and grassroots communities.</p>
<p>The fellowship was born out of the deteriorating state of Nigeria's Primary Healthcare Centres (PHCs), especially in remote and underserved communities, where facilities are often outdated, poorly equipped and understaffed.</p>
<h2>#FixOurPHCs</h2>
<p>A key component is the <strong>#FixOurPHCs</strong> campaign, a grassroots movement that turns data and digital storytelling into pressure for systemic reform.</p>
<h2>Results</h2>
<ul>
<li>Over 400 applications received nationwide; 10 finalists trained in Kano State in healthcare policy tracking and digital advocacy, and 8 fellows graduated.</li>
<li>Seed funding provided to 3 fellows to launch #FixOurPHCs campaign projects for the restoration of local clinics.</li>
<li>Over 100 residents reached to understand their rights and demand better healthcare.</li>
<li>Advocacy carried to the 13th Kaduna State Council on Health, and partnerships with the Centre for Information Technology and Development (CITAD) and PRNigeria to drive digital activism in primary healthcare.</li>
</ul>
<p>In 2026, we plan to expand the fellowship across the North-West and North-East geopolitical zones of Nigeria.</p>`,
    impact:
      "A cohort of young leaders now at the forefront of healthcare reform, holding local health providers and institutions accountable.",
    tags: ["Health", "Primary Healthcare", "Fellowship", "Kano State"],
    image: { src: naijaAdvocate, alt: "NaijaAdvocate fellows holding their certificates" },
    stats: [
      { value: "400+", label: "applications received" },
      { value: "10", label: "fellows trained in Kano State" },
      { value: "3", label: "fellows funded for #FixOurPHCs projects" },
      { value: "100+", label: "residents reached" },
    ],
    supporters: ["Nigeria Youth Futures Fund (NYFF)"],
  },
  {
    slug: "murya",
    title: "Murya",
    category: "homegrown",
    period: "Since 2024",
    summary:
      "A civic tech initiative bridging the gap between citizens' needs and government projects with data-driven evidence reports.",
    content: `<p>Murya is an innovative civic tech initiative designed to bridge the gaps between citizens' needs and government projects. It provides a platform for citizens to voice their concerns about service delivery and empowers the government with data-driven evidence reports.</p>
<h2>Gwaraji Ward needs assessment</h2>
<p>Through Murya, YAPD4Africa completed a self-funded needs assessment across Gwaraji Ward, Igabi LGA, Kaduna State. Despite severe security challenges, our field teams conducted offline surveys in remote areas with limited connectivity, engaging traditional rulers, youth leaders and rural women.</p>
<p>The findings exposed dilapidated primary schools, broken primary health centres, neglected roads and non-functional water, sanitation and hygiene (WASH) facilities. They also revealed a deep gender imbalance: only 5% of women actively participate in local governance and community development decisions.</p>`,
    impact: "Enabling better alignment of government projects with essential citizen needs.",
    tags: ["Civic Tech", "Service Delivery", "Open Government"],
    image: { src: murya, alt: "Murya civic tech initiative field survey" },
    stats: [
      { value: "60,000+", label: "indirect beneficiaries (2024-2025)" },
      { value: "5%", label: "of women take part in local decisions: the gap we work to close" },
    ],
  },
  {
    slug: "kuria",
    title: "Kuri'a",
    category: "homegrown",
    summary:
      "Our election reforms initiative, combining digital and physical engagement to promote electoral accountability, transparency and inclusiveness in Nigeria.",
    content: `<p>Kuri'a is a citizen-led initiative that combines digital and physical engagement to promote electoral accountability, transparency and inclusiveness in Nigeria, through mobile and web platforms, community outreach and physical events.</p>
<h2>Voter Education 101</h2>
<p>Kuri'a published <strong>Voter Education 101: The Ultimate Youth Survival Guide</strong>, an essential framework for the 2027 elections and everyday civic action, fully aligned with the Electoral Act 2026.</p>
<h2>Policy advocacy</h2>
<p>Through Kuri'a, YAPD4Africa commended the National Assembly for withdrawing the compulsory voting bill, arguing that democracy must be anchored on freedom of choice, and urged lawmakers to address the root causes of voter apathy, including insecurity and limited access to polling units.</p>
<h2>Looking ahead</h2>
<p>Ahead of the 2027 General Elections, Kuri'a will launch its AI Monitor Version 1.0, designed to institutionalize grassroots voter education, protect electoral integrity and give rural communities a secure, tech-driven channel to monitor democratic processes in real time.</p>`,
    impact: "Empowering citizens to participate actively in the electoral process and demand good governance.",
    tags: ["Elections", "Voter Education", "Accountability", "Nigeria"],
    image: { src: kuria, alt: "Kuri'a election observers at a polling unit" },
  },
  {
    slug: "rescue-a-girl-initiative",
    title: "Rescue A Girl Initiative",
    category: "homegrown",
    summary:
      "A social enterprise providing eco-friendly reusable sanitary products to hard-to-reach marginalized girls and women.",
    content:
      "<p>Rescue A Girl is a social enterprise empowering hard-to-reach marginalized grassroots girls and women through the provision of eco-friendly reusable sanitary products.</p>",
    impact: "Protecting the environment while addressing women's health needs.",
    tags: ["Menstrual Health", "Girls and Women", "Environment"],
    image: { src: rescueAGirl, alt: "Rescue A Girl Initiative session with schoolgirls" },
  },
  {
    slug: "water-for-local-communities",
    title: "Water for Local Communities (WLC Project)",
    category: "past",
    period: "2024",
    summary:
      "Reconstruction of a solar-powered borehole in Joga Sabon Gari, restoring daily access to clean water for over 7,000 residents.",
    content: `<p>The Water for Local Communities project, sponsored by the Advocacy for Human Value Foundation in Joga Sabon Gari, delivered life-changing results through our Community Action-Led Initiative (CAL) approach.</p>
<p>By reconstructing the solar-powered borehole, we restored daily access to safe, clean water for over 7,000 residents, including women and school-aged children who previously trekked long distances.</p>
<h2>Results</h2>
<ul>
<li>A documented 60% reduction in water-borne diseases within the community.</li>
<li>A 15-member Community Development Builders Committee established to maintain the facility.</li>
<li>A 90% community participation rate, ensuring deep local ownership.</li>
<li>A noticeable increase in school attendance among girls and enhanced economic productivity for women.</li>
</ul>
<p>This intervention is a high-impact, green-energy model that provides a permanent solution to water scarcity while fostering grassroots accountability and resilience.</p>`,
    impact: "Over 7,000 residents with daily access to clean water and a 60% drop in water-borne diseases.",
    tags: ["WASH", "Clean Water", "Green Energy", "Kaduna State"],
    image: { src: water, alt: "Community members in front of the reconstructed borehole in Joga Sabon Gari" },
    stats: [
      { value: "7,000+", label: "residents with clean water" },
      { value: "60%", label: "fewer water-borne diseases" },
      { value: "90%", label: "community participation" },
      { value: "15", label: "committee members maintaining the borehole" },
    ],
    supporters: ["Advocacy for Human Value Foundation"],
  },
  {
    slug: "who-is-almajiri",
    title: "Who Is Almajiri Project",
    category: "past",
    summary:
      "Advocacy for the rights of Almajiri and other street children in northern Nigeria, contributing to the creation of a national commission in 2023.",
    content:
      "<p>The Who Is Almajiri Project was among the active projects in northern Nigeria that advocated for the rights of street children over the past five years.</p><p>The project produced a policy recommendation on how to reduce the high school dropout rate through a sustainable reform for both Almajiri and other street children.</p>",
    impact:
      "After sustained advocacy at the national level, the bill to establish a national commission for Almajiri and out-of-school children was signed by former President Muhammadu Buhari in 2023.",
    tags: ["Child Rights", "Education", "Policy Advocacy", "Northern Nigeria"],
    image: { src: almajiri, alt: "Who Is Almajiri project with street children in northern Nigeria" },
  },
  {
    slug: "rescue-mission-against-covid-19",
    title: "Rescue Mission against COVID-19",
    category: "past",
    period: "2020",
    summary:
      "A two-month emergency response in 2020 that directly supported 500 beneficiaries and mobilized over 1,000 young people online.",
    content:
      "<p>This project was a short-term activity running for two months, from March to May 2020. Through the project, YAPD4Africa directly impacted 500 beneficiaries, while our social media channels mobilized over 1,000 young people to raise awareness on preventing COVID-19 and to help raise resources for the project.</p>",
    impact:
      "The project distributed relief materials to the most vulnerable groups, especially orphanages, and provided homemade face masks and sanitizers to supplement scarce and overpriced supplies.",
    tags: ["Health", "Emergency Response", "Community Support", "COVID-19 Relief"],
    image: { src: covid, alt: "Volunteers distributing COVID-19 relief materials" },
    stats: [
      { value: "500", label: "direct beneficiaries" },
      { value: "1,000+", label: "young people mobilized online" },
    ],
  },
  {
    slug: "we-need-peace",
    title: "We Need Peace Project",
    category: "past",
    period: "2018-2019",
    summary:
      "A seven-month peace-building campaign engaging community leaders, religious scholars, security agents and political parties ahead of the elections.",
    content:
      "<p>We implemented our <em>We Need Peace</em> project from 8 September 2018 to 31 March 2019. Over seven months, we advocated and engaged with community leaders, religious scholars, security agents and political parties on how they could contribute to promoting peace.</p><p>In the end, the elections were conducted peacefully, freely and fairly.</p>",
    impact:
      "The project contributed to peaceful, free and fair elections through community engagement and advocacy.",
    tags: ["Peace Building", "Community Engagement", "Advocacy", "Elections"],
    image: { src: weNeedPeace, alt: "We Need Peace project engagement session" },
  },
];

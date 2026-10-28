import type { Report } from "@/lib/types";
import annual2025 from "@/assets/images/reports/annual-report-2025.jpg";
import strategy from "@/assets/images/reports/strategy-plan-2024-2028.jpg";
import fiveYears from "@/assets/images/reports/5-years-report.jpg";
import lawReport from "@/assets/images/reports/local-accountability-watch-report-2025.jpg";
import toolkit from "@/assets/images/reports/citizen-toolkit-for-accountability.jpg";
import voterEducation from "@/assets/images/reports/voter-education-101-kuria.jpg";
import gwaraji from "@/assets/images/reports/gwaraji-ward.jpg";
import joga from "@/assets/images/reports/joga-village.jpg";

export const reports: Report[] = [
  {
    title: "2025 Annual Report: Strengthening Local Governance, Driving Civic Action and Fostering Continental Solidarity",
    type: "annual",
    date: "2025-12-31",
    description:
      "Our year in numbers and stories: the LAW Project, the NaijaAdvocate Fellowship, the Murya needs assessment, international recognition and our roadmap for 2026.",
    fileUrl: "/reports/yapd4africa-annual-report-2025.pdf",
    fileSize: "5 MB",
    cover: { src: annual2025, alt: "Cover of the YAPD4Africa 2025 Annual Report" },
  },
  {
    title: "Closing the Gap: 4-Year Strategic Plan 2024-2028",
    type: "annual",
    date: "2024-01-01",
    description:
      "How we will harness meaningful partnerships to drive transformative social change for inclusive development in marginalized communities across Africa.",
    fileUrl: "/reports/yapd4africa-strategy-plan-2024-2028.pdf",
    fileSize: "4 MB",
    cover: { src: strategy, alt: "Cover of the YAPD4Africa 2024-2028 Strategic Plan" },
  },
  {
    title: "5 Years Social Impact Report: Building Strong People and Sustainable Communities for All",
    type: "annual",
    date: "2022-12-31",
    description:
      "A look back at five years of YAPD4Africa programs, partnerships and impact across grassroots communities.",
    fileUrl: "/reports/yapd4africa-5-years-social-impact-report.pdf",
    fileSize: "5 MB",
    cover: { src: fiveYears, alt: "Cover of the YAPD4Africa 5 Years Social Impact Report" },
  },
  {
    title: "Local Accountability Watch Report",
    type: "project",
    date: "2025-11-28",
    description:
      "The full story of the LAW Project in Jigawa State: the Local Accountability Fellowship, the LAW Drivers' community actions and stakeholder engagement.",
    fileUrl: "/reports/yapd4africa-local-accountability-watch-report-2025.pdf",
    fileSize: "5 MB",
    cover: { src: lawReport, alt: "Cover of the Local Accountability Watch Report, November 2025" },
    project: "local-accountability-watch",
  },
  {
    title: "Gwaraji Ward Needs Assessment Report: Education, Health, WASH Facilities and Road",
    type: "project",
    date: "2024-01-31",
    description:
      "A Murya needs assessment documenting the state of education, health, water, sanitation and road infrastructure in Gwaraji ward, Kaduna State.",
    fileUrl: "/reports/gwaraji-ward-needs-assessment-report.pdf",
    fileSize: "1 MB",
    cover: { src: gwaraji, alt: "Cover of the Gwaraji Ward Needs Assessment Report" },
    project: "murya",
  },
  {
    title: "First Community Intervention Report on Joga Village",
    type: "project",
    date: "2023-12-02",
    description:
      "Findings from a three-day CAL intervention in Joga, Gwaraji ward (Igabi LGA, Kaduna State), covering education, health and water challenges.",
    fileUrl: "/reports/joga-village-community-intervention-report.pdf",
    fileSize: "200 KB",
    cover: { src: joga, alt: "First page of the Joga Village community intervention report" },
    project: "community-action-led-initiative",
  },
  {
    title: "Citizen Toolkit for Accountability",
    type: "research",
    date: "2025-06-01",
    description:
      "A practical guide for citizens to navigate local governance, demand better service delivery and hold officials accountable.",
    fileUrl: "/reports/yapd4africa-citizen-toolkit-for-accountability.pdf",
    fileSize: "3 MB",
    cover: { src: toolkit, alt: "Cover of the Citizen Toolkit for Accountability" },
    project: "local-accountability-watch",
  },
  {
    title: "Voter Education 101: The Ultimate Youth Survival Guide",
    type: "research",
    date: "2026-01-01",
    description:
      "An essential framework for the 2027 elections and everyday civic action, fully aligned with the Electoral Act 2026.",
    fileUrl: "/reports/yapd4africa-voter-education-101-kuria.pdf",
    fileSize: "700 KB",
    cover: { src: voterEducation, alt: "Cover of Voter Education 101 by Kuri'a Nigeria" },
    project: "kuria",
  },
];

import type { Person } from "@/lib/types";
import idris from "@/assets/images/staff/idris-bilyaminu.jpg";
import saadatu from "@/assets/images/staff/saadatu-idris.png";
import yahya from "@/assets/images/staff/yahya-abubakar.jpg";
import fatimaMuftau from "@/assets/images/staff/fatima-muftau.png";
import hassan from "@/assets/images/staff/baqau-hassan.jpg";
import ibrahim from "@/assets/images/staff/ibrahim-mohammed.jpg";
import fatimaHabib from "@/assets/images/trustees/fatima-mohammed-habib.jpg";
import zigwai from "@/assets/images/trustees/tagwai-zigwai.jpg";
import aisha from "@/assets/images/trustees/aisha-dabo.jpg";
import abbas from "@/assets/images/trustees/abbas-inuwa.jpg";
import zainab from "@/assets/images/trustees/zainab-suleiman-ajuma.jpg";
import ayomide from "@/assets/images/trustees/ayomide-ladipo-yetunde.jpg";
import promise from "@/assets/images/trustees/mbah-aaron-promise.jpg";
import okafor from "@/assets/images/trustees/valentine-okafor.jpg";

const person = (
  name: string,
  role: string,
  group: Person["group"],
  src: Person["image"]["src"],
  bio?: string,
): Person => ({ name, role, group, bio, image: { src, alt: `${name}, ${role} at YAPD4Africa` } });

export const people: Person[] = [
  person(
    "Idris Bilyaminu Ndasadu'Lau",
    "Founder & Chief Executive",
    "staff",
    idris,
    "Leading YAPD4Africa's vision and strategic direction with extensive experience in youth development and community engagement.",
  ),
  person(
    "Sa'adatu Idris Ndasadu'Lau",
    "Head of Programs",
    "staff",
    saadatu,
    "Overseeing program development and implementation with a focus on sustainable community impact.",
  ),
  person(
    "Yahya Abubakar",
    "Programs Manager (Youth Engagement)",
    "staff",
    yahya,
    "Specializing in youth mobilization and leadership development across African communities.",
  ),
  person(
    "Fatima Muftau",
    "Assistant Monitoring and Evaluation Manager",
    "staff",
    fatimaMuftau,
    "Ensuring program effectiveness and impact through rigorous monitoring and evaluation.",
  ),
  person(
    "Baqau Hassan Omotayo",
    "Creative Design Manager",
    "staff",
    hassan,
    "Leading our visual communication and creative strategy to amplify our impact.",
  ),
  person(
    "Ibrahim Mohammed Bakodo",
    "Community Engagement Manager",
    "staff",
    ibrahim,
    "Building bridges, fostering connections, and empowering communities through inclusive engagement strategies.",
  ),
  person("Fatima Mohammed Habib", "Board Chair", "trustee", fatimaHabib),
  person("Idris Bilyaminu Ndasadu'Lau", "Board Secretary", "trustee", idris),
  person("Tagwai Zigwai", "Board Secretary II", "trustee", zigwai),
  person("Aisha Dabo", "Board Member", "trustee", aisha),
  person("Abbas Inuwa", "Board Member", "trustee", abbas),
  person("Zainab Suleiman Ajuma", "Board Member", "trustee", zainab),
  person("Ayomide Ladipo Yetunde", "Board Member", "trustee", ayomide),
  person("Mbah Aaron Promise", "Board Member", "trustee", promise),
  person("Valentine Okafor", "Board Member", "trustee", okafor),
];

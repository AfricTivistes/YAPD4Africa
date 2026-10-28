import type { Partner } from "@/lib/types";

const logos = import.meta.glob<{ default: ImageMetadata }>("@/assets/images/partners/*", {
  eager: true,
});

const partner = (name: string, file: string, url?: string): Partner => {
  const logo = logos[`/src/assets/images/partners/${file}`];
  if (!logo) throw new Error(`Missing partner logo: ${file}`);
  return { name, url, logo: { src: logo.default, alt: `${name} logo` } };
};

export const partners: Partner[] = [
  partner("European Union", "european-union.png", "https://european-union.europa.eu"),
  partner("European Partnership for Democracy", "european-partnership-for-democracy.png", "https://epd.eu"),
  partner("ALDA - European Association for Local Democracy", "alda.png", "https://www.alda-europe.eu"),
  partner("WYDE Civic Engagement", "wyde-civic-engagement.png"),
  partner("UNFPA", "unfpa.png", "https://www.unfpa.org"),
  partner("UNODC", "unodc.jpg", "https://www.unodc.org"),
  partner("Society for Family Health", "society-for-family-health.png", "https://sfhnigeria.org"),
  partner("A360", "a360.png"),
  partner("ShareYourself", "shareyourself.png"),
  partner("Tostan", "tostan.jpg", "https://tostan.org"),
  partner("Connected Development (CODE)", "code.png", "https://connecteddevelopment.org"),
  partner("AfricTivistes", "africtivistes.png", "https://africtivistes.com"),
  partner("Organización Para Chicas", "organizacion-para-chicas.jpg"),
  partner("Aspilos Foundation", "aspilos-foundation.jpg"),
  partner("Advocacy for Human Value Foundation", "advocacy-for-human-value-foundation.jpg"),
  partner("Yorghas Foundation", "yorghas-foundation.jpg"),
  partner("Non Stop Charity", "non-stop-charity.jpg"),
  partner("Nigeria Youth Futures Fund", "nigeria-youth-futures-fund.png"),
  partner("Digital Democracy Initiative", "digital-democracy-initiative.png"),
  partner("International Observatory on Participatory Democracy (OIDP)", "oidp.jpg"),
  partner("CivicRise", "civicrise.png"),
  partner("Wits Enterprise", "wits-enterprise.jpg"),
  // TODO: add the circular green/navy logo (src/assets/images/partners/partner-unidentified.jpg) once its name is known.
];

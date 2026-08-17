export const SITE_NAME = "Stays in Europe";
// Fall back to the production domain, NOT localhost: if NEXT_PUBLIC_SITE_URL
// is ever missing on the host (e.g. not set on Vercel), the sitemap, robots,
// canonicals, hreflang and OG tags must still emit real staysineurope.com
// URLs rather than http://localhost:3000.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://staysineurope.com";
export const STAY22_AID = process.env.NEXT_PUBLIC_STAY22_AID ?? "";
// Stay22 "Let Me Allez" campaign id: auto-monetizes outbound booking links.
export const STAY22_LMA_ID =
  process.env.NEXT_PUBLIC_STAY22_LMA_ID ?? "6a8357a926a3329c29e2ca6a";
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";
// Google Analytics 4 measurement id: Stays in Europe's own GA4 property.
// Override per environment with NEXT_PUBLIC_GA_ID; empty string disables the tag.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-EWQB210HL7";
// Microsoft Clarity project id: Stays in Europe's own Clarity project.
// Override per environment with NEXT_PUBLIC_CLARITY_ID; empty string disables it.
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "y3ynkrspoh";

export const SITE_DESCRIPTION =
  "Where to stay in Europe's best cities: the right neighborhood for your trip and the best real hotel in each, with maps and honest picks.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

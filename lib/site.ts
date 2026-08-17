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
  process.env.NEXT_PUBLIC_STAY22_LMA_ID ?? "6a48d53e72afe45e1b3300b0";
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";
// Google Analytics 4 measurement id. Empty string disables the tag.
// Blanked for the new site: set NEXT_PUBLIC_GA_ID once a dedicated GA property
// exists, so we never send hits to Stays in Europe's property.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
// Microsoft Clarity project id. Empty string disables the tag.
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";

export const SITE_DESCRIPTION =
  "Where to stay in Europe's best cities: the right neighborhood for your trip and the best real hotel in each, with maps and honest picks.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

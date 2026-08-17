import type { MetadataRoute } from "next";
import { cityBundles, countries, publishedLocales } from "@/data";
import { absoluteUrl } from "@/lib/site";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";

// One entry per published locale per page, with hreflang alternates linking
// siblings. `locales` defaults to all locales; pass a subset for pages that
// only exist in some languages so we never list 404 URLs.
function localized(
  path: string,
  priority: number,
  now: Date,
  locales: readonly Locale[] = LOCALES
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = absoluteUrl(localePath(l, path));
  if (locales.includes("en")) {
    languages["x-default"] = absoluteUrl(localePath("en", path));
  }
  return locales.map((l) => ({
    url: absoluteUrl(localePath(l, path)),
    lastModified: now,
    priority: l === "en" ? priority : Math.max(0.1, priority - 0.1),
    alternates: { languages },
  }));
}

// Stays in Europe: one rich "where to stay" page per city, plus destination
// hubs. No combinatorial month/duration/budget sub-pages (see CLAUDE.md).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    ...localized("/", 1, now),
    ...localized("/destinations", 0.8, now),
    { url: absoluteUrl("/about"), lastModified: now, priority: 0.3 },
  ];

  for (const g of countries("en")) {
    entries.push(...localized(`/destinations/${g.slug}`, 0.6, now));
  }

  for (const { city } of cityBundles("en")) {
    entries.push(
      ...localized(`/${city.slug}`, 0.9, now, publishedLocales(city.slug))
    );
  }

  return entries;
}

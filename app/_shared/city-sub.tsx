import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityData, getNeighborhood, publishedLocales } from "@/data";
import { getHotels } from "@/data/hotels";
import type { CityData, Month } from "@/data/types";
import { cityVars } from "@/lib/style";
import { MONTHS, WHEN_TO_GO_SLUG, monthByNum, parseSub } from "@/lib/months";
import {
  STR,
  fmt,
  hreflangs,
  localePath,
  monthName,
  monthShort,
  type Locale,
  type UIStrings,
} from "@/lib/i18n";
import { articleSchema, breadcrumbSchema, faqSchema, type Faq } from "@/lib/seo";
import { BoardingPass } from "@/components/BoardingPass";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DayTimeline } from "@/components/DayTimeline";
import { FaqSection } from "@/components/FaqSection";
import { HotelsRail } from "@/components/HotelsRail";
import { JsonLd } from "@/components/JsonLd";
import { MonthGrid } from "@/components/MonthGrid";
import { Stamp } from "@/components/Stamp";
import { Stay22Map } from "@/components/Stay22Map";
import { TripToolbar } from "@/components/TripToolbar";

// Empty seed: pages render on first request (ISR, dynamicParams=true) and get
// cached for `revalidate` seconds, instead of every city/duration/month combo
// being rebuilt eagerly on every deploy.
export function citySubStaticParams() {
  return [];
}

type Params = Promise<{ city: string; sub: string }>;

export function makeCitySubMetadata(locale: Locale) {
  return async function generateMetadata({
    params,
  }: {
    params: Params;
  }): Promise<Metadata> {
    const { city: citySlug, sub } = await params;
    const data = getCityData(citySlug, locale);
    const route = parseSub(sub);
    if (!data || !route) return {};
    const { city } = data;
    const t = STR[locale];
    const path = `/${city.slug}/${sub}`;
    // when-to-go is an EN-first prototype: only expose it (canonical, no
    // hreflang siblings) while the other locales still ship 12 month pages.
    if (route.type === "when") {
      if (locale !== "en") return {};
      return {
        title: `Best time to visit ${city.name}: month-by-month weather & when to go`,
        description: `When to visit ${city.name}: a month-by-month breakdown of weather, crowds, prices and events, with the best and worst months to go.`,
        alternates: { canonical: localePath(locale, path) },
      };
    }
    const alternates = {
      canonical: localePath(locale, path),
      languages: hreflangs(path, publishedLocales(city.slug)),
    };
    if (route.type === "days") {
      return {
        title: fmt(t.iti.metaTitle, { city: city.name, days: route.days }),
        description: fmt(t.iti.metaDesc, {
          city: city.name,
          days: route.days,
        }),
        alternates,
      };
    }
    const month = monthName(locale, route.month);
    return {
      title: fmt(t.mon.metaTitle, { city: city.name, month }),
      description: fmt(t.mon.metaDesc, { city: city.name, month }),
      alternates,
    };
  };
}

export function makeCitySubPage(locale: Locale) {
  return async function SubPage({ params }: { params: Params }) {
    const { city: citySlug, sub } = await params;
    const data = getCityData(citySlug, locale);
    const route = parseSub(sub);
    if (!data || !route) notFound();
    if (route.type === "when") {
      // EN-first prototype: consolidated when-to-go page ships in English only.
      if (locale !== "en") notFound();
      return <WhenToGoPage data={data} locale={locale} />;
    }
    if (route.type === "days") {
      if (!data.city.durations.includes(route.days)) notFound();
      return <ItineraryPage data={data} days={route.days} locale={locale} />;
    }
    return <MonthPage data={data} month={route.month} locale={locale} />;
  };
}

/* ---------------- Itinerary template ---------------- */

function ItineraryPage({
  data,
  days,
  locale,
}: {
  data: CityData;
  days: number;
  locale: Locale;
}) {
  const { city, pois, itineraries } = data;
  const t = STR[locale];
  const lp = (p: string) => localePath(locale, p);
  const itinerary = itineraries.find((i) => i.days === days);
  if (!itinerary) notFound();
  const stay = getNeighborhood(city.slug, itinerary.stayNeighborhoodSlug, locale);
  const otherDurations = city.durations.filter((d) => d !== days);
  const path = `/${city.slug}/${days}-days`;

  const bestMonths = city.bestMonths
    .slice(0, 3)
    .map((m) => monthName(locale, m))
    .join(", ");

  const faqs: Faq[] = [
    {
      q: fmt(t.iti.faqEnoughQ, { days, city: city.name }),
      a: itinerary.summary.split(". ").slice(0, 3).join(". ") + ".",
    },
    {
      q: fmt(t.iti.faqStayQ, { days, city: city.name }),
      a: stay
        ? fmt(t.iti.faqStayA, { hood: stay.name, vibe: stay.vibe })
        : fmt(t.iti.faqStayFallback, { city: city.name }),
    },
    {
      q: fmt(t.iti.faqBestTimeQ, { city: city.name }),
      a: fmt(t.iti.faqBestTimeA, { months: bestMonths }),
    },
  ];

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({
            title: fmt(t.iti.metaTitle, { city: city.name, days }),
            description: itinerary.summary.slice(0, 160),
            path: lp(path),
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: city.name, path: lp(`/${city.slug}`) },
            { name: `${days} ${t.iti.daysUnit}`, path: lp(path) },
          ]),
        ]}
      />

      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          <Breadcrumbs
            locale={locale}
            items={[
              { name: city.name, path: `/${city.slug}` },
              { name: `${days} ${t.iti.daysUnit}`, path },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Stamp color={city.accent.from}>{t.stamp.dayByDay}</Stamp>
            <Stamp color={city.accent.to}>{city.country}</Stamp>
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="highlight-city">{city.name}</span>{" "}
            {t.iti.h1Connector}{" "}
            <span style={{ color: "var(--city)" }}>
              {days} {t.iti.daysUnit}
            </span>
          </h1>
        </div>
      </section>

      <TripToolbar
        items={[
          { href: "#hotels", label: t.toolbar.hotels },
          ...itinerary.dayPlans.map((d) => ({
            href: `#day-${d.dayNumber}`,
            label: fmt(t.toolbar.day, { n: d.dayNumber }),
          })),
          { href: "#stay", label: t.toolbar.whereToSleep },
          { href: "#faq", label: t.toolbar.faq },
        ]}
        cta={{ href: "#hotels", label: t.common.findHotels }}
      />

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-12">
        <BoardingPass
          city={city}
          kicker={fmt(t.bp.itinerary, { days })}
          answer={itinerary.summary}
          fields={[
            {
              label: t.bp.duration,
              value: fmt(t.bp.daysValue, { days }),
            },
            { label: t.bp.base, value: stay?.name ?? "Center" },
            {
              label: t.bp.midBudget,
              value: `${city.budgetPerDay.mid * days} EUR`,
            },
            {
              label: t.bp.bestMonths,
              value: city.bestMonths
                .slice(0, 3)
                .map((m) => monthShort(locale, m))
                .join(" · "),
            },
          ]}
        />

        <HotelsRail
          city={city}
          hotels={[...getHotels(city.slug, locale)].sort(
            (a, b) =>
              (b.neighborhoodSlug === itinerary.stayNeighborhoodSlug ? 1 : 0) -
              (a.neighborhoodSlug === itinerary.stayNeighborhoodSlug ? 1 : 0)
          )}
          columns={2}
          locale={locale}
          title={fmt(t.iti.sleepTitle, { days })}
          intro={
            stay ? fmt(t.iti.sleepIntro, { hood: stay.name }) : undefined
          }
        />

        <DayTimeline dayPlans={itinerary.dayPlans} pois={pois} locale={locale} />

        <section id="stay" className="scroll-mt-28 space-y-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {t.iti.whereToSleepTitle}
          </h2>
          {stay ? (
            <p className="leading-relaxed text-ink/85">
              {fmt(t.iti.whereToSleepBody, {
                days,
                hood: stay.name,
                vibe: stay.vibe,
              })}{" "}
              <Link
                href={lp(`/${city.slug}/where-to-stay`)}
                className="underline underline-offset-2"
              >
                {t.iti.fullGuideLink}
              </Link>
            </p>
          ) : null}
          <Stay22Map
            lat={stay?.lat ?? city.lat}
            lng={stay?.lng ?? city.lng}
            title={fmt(t.stay22.hotelsIn, { name: stay?.name ?? city.name })}
            accent={city.accent.from}
            locale={locale}
          />
        </section>

        {otherDurations.length ? (
          <section className="grid gap-4 sm:grid-cols-2">
            {otherDurations.map((d) => (
              <Link
                key={d}
                href={lp(`/${city.slug}/${d}-days`)}
                className="rounded-2xl border-2 border-ink bg-paper p-5 transition-all hover:-translate-y-0.5 hover:hard-shadow"
              >
                <p className="label-mono text-ink/50">
                  {d < days ? t.iti.shortTime : t.iti.gotLonger}
                </p>
                <p className="font-display mt-1 text-xl font-semibold">
                  {city.name} {t.iti.h1Connector} {d} {t.iti.daysUnit} →
                </p>
              </Link>
            ))}
          </section>
        ) : null}

        <FaqSection faqs={faqs} locale={locale} />
      </div>
    </div>
  );
}

/* ---------------- Month template ---------------- */

function packingList(
  t: UIStrings,
  highC: number,
  lowC: number,
  rainyDays: number
): string[] {
  const items: string[] = [t.mon.packShoes];
  if (highC >= 28) items.push(t.mon.packSun);
  if (highC >= 20 && highC < 28) items.push(t.mon.packLayers);
  if (lowC < 10) items.push(t.mon.packJacket);
  if (lowC < 3) items.push(t.mon.packGloves);
  if (rainyDays >= 9) items.push(t.mon.packUmbrella);
  else if (rainyDays >= 6) items.push(t.mon.packRainLayer);
  return items;
}

function MonthPage({
  data,
  month,
  locale,
}: {
  data: CityData;
  month: Month;
  locale: Locale;
}) {
  const { city, pois } = data;
  const t = STR[locale];
  const lp = (p: string) => localePath(locale, p);
  const m = monthByNum(month);
  if (!m) notFound();
  const mName = monthName(locale, month);
  const climate = city.climate[month];
  const note = city.monthlyNotes[month];
  const isBest = city.bestMonths.includes(month);
  const isAvoid = city.avoidMonths?.includes(month) ?? false;
  const path = `/${city.slug}/${m.slug}`;

  const verdict = fmt(
    isBest
      ? t.mon.verdictBest
      : isAvoid
        ? t.mon.verdictAvoid
        : t.mon.verdictShoulder,
    { month: mName, city: city.name }
  );
  const answer = fmt(t.mon.answer, {
    verdict,
    high: climate.highC,
    low: climate.lowC,
    rain: climate.rainyDays,
    note,
  });

  const coldOrWet = climate.highC < 15 || climate.rainyDays >= 9;
  const picks = pois
    .filter((p) =>
      coldOrWet
        ? p.kind === "museum" || p.kind === "food" || p.kind === "experience"
        : p.kind === "viewpoint" || p.kind === "park" || p.kind === "sight"
    )
    .slice(0, 4);

  const faqs: Faq[] = [
    { q: fmt(t.mon.faqGoodQ, { month: mName, city: city.name }), a: answer },
    {
      q: fmt(t.mon.faqWarmQ, { city: city.name, month: mName }),
      a: fmt(t.mon.faqWarmA, {
        month: mName,
        city: city.name,
        high: climate.highC,
        low: climate.lowC,
      }),
    },
    {
      q: fmt(t.mon.faqRainQ, { city: city.name, month: mName }),
      a: fmt(t.mon.faqRainA, {
        rain: climate.rainyDays,
        month: mName,
        detail: climate.rainyDays >= 9 ? t.mon.rainMuch : t.mon.rainLittle,
      }),
    },
  ];

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({
            title: fmt(t.mon.metaTitle, { city: city.name, month: mName }),
            description: answer.slice(0, 160),
            path: lp(path),
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: city.name, path: lp(`/${city.slug}`) },
            { name: mName, path: lp(path) },
          ]),
        ]}
      />

      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          <Breadcrumbs
            locale={locale}
            items={[
              { name: city.name, path: `/${city.slug}` },
              { name: mName, path },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {isBest ? (
              <Stamp color="#0e9b76">{t.stamp.greatPick}</Stamp>
            ) : isAvoid ? (
              <Stamp color="#ff5a5f">{t.stamp.thinkTwice}</Stamp>
            ) : (
              <Stamp color={city.accent.from}>{t.stamp.shoulder}</Stamp>
            )}
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="highlight-city">{city.name}</span>{" "}
            {t.mon.connector}{" "}
            <span style={{ color: "var(--city)" }}>{mName}</span>
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-12">
        <BoardingPass
          city={city}
          kicker={fmt(t.bp.forecast, { month: mName })}
          answer={answer}
          fields={[
            { label: t.bp.dayHigh, value: `${climate.highC}°C` },
            { label: t.bp.nightLow, value: `${climate.lowC}°C` },
            { label: t.bp.rainyDays, value: `≈ ${climate.rainyDays}` },
            {
              label: t.bp.verdict,
              value: isBest ? t.bp.go : isAvoid ? t.bp.avoid : t.bp.fair,
            },
          ]}
        />

        <HotelsRail
          city={city}
          hotels={getHotels(city.slug, locale)}
          columns={2}
          locale={locale}
          title={fmt(t.mon.hotelsTitle, { city: city.name, month: mName })}
          intro={fmt(isBest ? t.mon.hotelsIntroHigh : t.mon.hotelsIntroLow, {
            month: mName,
          })}
        />

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            {fmt(t.mon.packTitle, { city: city.name, month: mName })}
          </h2>
          <ul className="space-y-2">
            {packingList(t, climate.highC, climate.lowC, climate.rainyDays).map(
              (item) => (
                <li
                  key={item}
                  className="rounded-xl border-2 border-ink/15 bg-paper px-4 py-3 leading-relaxed"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            {fmt(t.mon.worksTitle, { month: mName })}
          </h2>
          <p className="mb-5 leading-relaxed text-ink/80">
            {fmt(coldOrWet ? t.mon.worksCold : t.mon.worksWarm, {
              rain: climate.rainyDays,
              high: climate.highC,
              month: mName,
            })}
          </p>
          <ul className="space-y-4">
            {picks.map((p) => (
              <li key={p.slug} className="rounded-2xl bg-paper p-5 hard-shadow">
                <p className="font-semibold">{p.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">
                  <span
                    className="label-mono mr-2"
                    style={{ color: "var(--city)" }}
                  >
                    {t.common.tip}
                  </span>
                  {p.tip}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-ink/80">
            {t.mon.planFull}{" "}
            <Link
              href={lp(`/${city.slug}/${city.idealDays}-days`)}
              className="underline underline-offset-2"
            >
              {fmt(t.mon.planFullLink, {
                days: city.idealDays,
                city: city.name,
              })}
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            {fmt(t.mon.mapTitle, { city: city.name, month: mName })}
          </h2>
          <Stay22Map
            lat={city.lat}
            lng={city.lng}
            title={fmt(t.stay22.hotelsIn, { name: city.name })}
            accent={city.accent.from}
            locale={locale}
          />
        </section>

        <section>
          <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight">
            {t.mon.otherMonth}
          </h2>
          <MonthGrid city={city} current={month} locale={locale} />
        </section>

        <FaqSection faqs={faqs} locale={locale} />
      </div>
    </div>
  );
}

/* ---------------- When-to-go template (consolidated, EN-first) ----------------

   One dense page that takes over the discovery role of the 12 thin month
   pages: a full-year table, season narratives and best-time-for answers, all
   derived from the same City.climate / monthlyNotes data. Written as
   self-contained, quotable paragraphs (GEO) so answer engines can cite it.
   Ships in English only for now; the 12 month pages stay live and are linked
   from the table. */

const WHEN_SEASONS: { label: string; months: Month[] }[] = [
  { label: "Spring", months: [3, 4, 5] },
  { label: "Summer", months: [6, 7, 8] },
  { label: "Autumn", months: [9, 10, 11] },
  { label: "Winter", months: [12, 1, 2] },
];

function joinEn(parts: string[]): string {
  if (parts.length <= 1) return parts.join("");
  return parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
}

function WhenToGoPage({ data, locale }: { data: CityData; locale: Locale }) {
  const { city } = data;
  const t = STR[locale];
  const lp = (p: string) => localePath(locale, p);
  const path = `/${city.slug}/${WHEN_TO_GO_SLUG}`;

  const months = MONTHS.map((m) => m.num);
  const nameList = (ms: Month[]) =>
    joinEn(ms.map((m) => monthName(locale, m)));
  const best = city.bestMonths;
  const avoid = city.avoidMonths ?? [];
  const entries = months.map((m) => ({ m, ...city.climate[m] }));
  const warmest = entries.reduce((a, b) => (b.highC > a.highC ? b : a));
  const wettest = entries.reduce((a, b) => (b.rainyDays > a.rainyDays ? b : a));
  const driest = entries.reduce((a, b) => (b.rainyDays < a.rainyDays ? b : a));
  const bestHigh = city.climate[best[0]]?.highC ?? warmest.highC;
  const july = city.climate[7];
  const jan = city.climate[1];
  const lowSeason = months.filter(
    (m) => !best.includes(m) && ![6, 7, 8, 12].includes(m)
  );
  const cheapest = (avoid.length ? avoid : lowSeason).slice(0, 3);

  const answer =
    `The best time to visit ${city.name} is ${nameList(best)}, when days are warm at around ${bestHigh}°C, ` +
    `crowds stay manageable and rainfall is low. Summer, from June to August, is the hottest and busiest, ` +
    `peaking near ${july.highC}°C in July. Winter is the quietest and cheapest stretch but also the wettest, ` +
    `with up to ${wettest.rainyDays} rainy days in ${monthName(locale, wettest.m)}. ` +
    `${avoid.length ? `The month${avoid.length > 1 ? "s" : ""} most travellers skip ${avoid.length > 1 ? "are" : "is"} ${nameList(avoid)}. ` : ""}` +
    `For the best balance of weather, price and short queues, target the shoulder months of spring and autumn.`;

  const verdictOf = (m: Month) =>
    best.includes(m)
      ? { label: "Great", color: "#0e9b76" }
      : avoid.includes(m)
        ? { label: "Skip", color: "#ff5a5f" }
        : { label: "Shoulder", color: city.accent.from };

  const seasonLines = WHEN_SEASONS.map((s) => {
    const highs = s.months.map((m) => city.climate[m].highC);
    const rain = Math.round(
      s.months.reduce((sum, m) => sum + city.climate[m].rainyDays, 0) /
        s.months.length
    );
    const minHigh = Math.min(...highs);
    const maxHigh = Math.max(...highs);
    const first = monthName(locale, s.months[0]);
    const last = monthName(locale, s.months[s.months.length - 1]);
    const anyBest = s.months.some((m) => best.includes(m));
    const anyAvoid = s.months.every((m) => avoid.includes(m));
    const tail = anyBest
      ? "This is one of the best times to go."
      : anyAvoid
        ? "It is the season most visitors skip."
        : "A reliable shoulder-season option.";
    return {
      label: s.label,
      text: `${s.label} (${first} to ${last}) in ${city.name} sees highs from ${minHigh}°C to ${maxHigh}°C and about ${rain} rainy days a month. ${tail}`,
    };
  });

  const bestFor: { k: string; v: string }[] = [
    { k: "Best weather", v: nameList(best) },
    { k: "Fewest crowds & lowest prices", v: nameList(cheapest) },
    {
      k: "Warmest month",
      v: `${monthName(locale, warmest.m)} (≈ ${warmest.highC}°C)`,
    },
    {
      k: "Wettest month",
      v: `${monthName(locale, wettest.m)} (≈ ${wettest.rainyDays} rainy days)`,
    },
    {
      k: "Driest month",
      v: `${monthName(locale, driest.m)} (≈ ${driest.rainyDays} rainy days)`,
    },
  ];

  const faqs: Faq[] = [
    {
      q: `What is the best time to visit ${city.name}?`,
      a: `${answer.split(". ").slice(0, 2).join(". ")}.`,
    },
    {
      q: `Is ${city.name} worth visiting in winter?`,
      a: `Yes. Winter highs sit around ${jan.highC}°C with about ${jan.rainyDays} rainy days in January, so pack a rain layer, but you get the lowest prices and the thinnest crowds of the year.`,
    },
    {
      q: `When is the cheapest time to visit ${city.name}?`,
      a: `Prices and crowds are lowest in ${nameList(cheapest)}, outside the summer peak and the festive season.`,
    },
    {
      q: `What is the rainiest month in ${city.name}?`,
      a: `${monthName(locale, wettest.m)} is the wettest month in ${city.name}, averaging about ${wettest.rainyDays} rainy days, while ${monthName(locale, driest.m)} is the driest at roughly ${driest.rainyDays}.`,
    },
  ];

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({
            title: `Best time to visit ${city.name}: month by month`,
            description: answer.slice(0, 160),
            path: lp(path),
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: city.name, path: lp(`/${city.slug}`) },
            { name: "When to go", path: lp(path) },
          ]),
        ]}
      />

      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          <Breadcrumbs
            locale={locale}
            items={[
              { name: city.name, path: `/${city.slug}` },
              { name: "When to go", path },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Stamp color="#0e9b76">Best months: {nameList(best)}</Stamp>
            <Stamp color={city.accent.to}>{city.country}</Stamp>
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Best time to visit <span className="highlight-city">{city.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
            A month-by-month guide to weather, crowds, prices and events, so you
            can pick the right dates in one read.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-12">
        <BoardingPass
          city={city}
          kicker="When to go"
          answer={answer}
          fields={[
            { label: "Best months", value: best.map((m) => monthShort(locale, m)).join(" · ") },
            {
              label: "Avoid",
              value: avoid.length
                ? avoid.map((m) => monthShort(locale, m)).join(" · ")
                : "None",
            },
            { label: "Warmest", value: `${monthShort(locale, warmest.m)} ${warmest.highC}°C` },
            { label: "Wettest", value: `${monthShort(locale, wettest.m)} ${wettest.rainyDays}d` },
          ]}
        />

        <HotelsRail
          city={city}
          hotels={getHotels(city.slug, locale)}
          columns={2}
          locale={locale}
          title={`Where to stay in ${city.name}`}
          intro={`Four picks that work in any season, from budget to splurge.`}
        />

        <section className="scroll-mt-28 space-y-5">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {city.name} weather by month
          </h2>
          <div className="overflow-x-auto rounded-2xl border-2 border-ink">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-ink bg-ink/[0.04] text-left">
                  <th className="px-4 py-3 font-semibold">Month</th>
                  <th className="px-4 py-3 font-semibold">Day / night</th>
                  <th className="px-4 py-3 font-semibold">Rainy days</th>
                  <th className="px-4 py-3 font-semibold">Verdict</th>
                  <th className="px-4 py-3 font-semibold">In short</th>
                </tr>
              </thead>
              <tbody>
                {MONTHS.map((mo) => {
                  const m = mo.num;
                  const c = city.climate[m];
                  const v = verdictOf(m);
                  return (
                    <tr key={m} className="border-b border-ink/10 align-top">
                      <td className="px-4 py-3 font-semibold">
                        <Link
                          href={lp(`/${city.slug}/${mo.slug}`)}
                          className="underline-offset-2 hover:underline"
                        >
                          {monthName(locale, m)}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        {c.highC}°C / {c.lowC}°C
                      </td>
                      <td className="px-4 py-3">≈ {c.rainyDays}</td>
                      <td className="px-4 py-3">
                        <span
                          className="label-mono inline-block rounded-full px-2 py-0.5 text-xs text-white"
                          style={{ backgroundColor: v.color }}
                        >
                          {v.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ink/80">
                        {city.monthlyNotes[m]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink/50">
            Tap a month for the full forecast, packing list and what to do.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {city.name} season by season
          </h2>
          <div className="space-y-4">
            {seasonLines.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border-2 border-ink/15 bg-paper p-5"
              >
                <p className="label-mono mb-1" style={{ color: "var(--city)" }}>
                  {s.label}
                </p>
                <p className="leading-relaxed text-ink/85">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Best time to visit {city.name} for…
          </h2>
          <ul className="divide-y divide-ink/10 rounded-2xl border-2 border-ink bg-paper">
            {bestFor.map((row) => (
              <li
                key={row.k}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-semibold">{row.k}</span>
                <span className="text-ink/80">{row.v}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            Hotels in {city.name}
          </h2>
          <Stay22Map
            lat={city.lat}
            lng={city.lng}
            title={fmt(t.stay22.hotelsIn, { name: city.name })}
            accent={city.accent.from}
            locale={locale}
          />
        </section>

        <p className="text-ink/80">
          Got your dates? Build the trip with the{" "}
          <Link
            href={lp(`/${city.slug}/${city.idealDays}-days`)}
            className="underline underline-offset-2"
          >
            {city.idealDays}-day {city.name} itinerary
          </Link>
          .
        </p>

        <FaqSection faqs={faqs} locale={locale} />
      </div>
    </div>
  );
}

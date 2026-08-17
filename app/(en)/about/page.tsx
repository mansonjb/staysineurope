import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { Stamp } from "@/components/Stamp";

export const metadata: Metadata = {
  title: "About Stays in Europe: how these guides are built",
  description:
    "The methodology behind Stays in Europe: how we compare neighborhoods, pick the one real hotel worth booking in each, and how the site makes money.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <Stamp color="#0e9b76">Methodology</Stamp>
      <h1 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        How these guides are built
      </h1>
      <div className="prose-guide mt-8">
        <h2>One decision per page</h2>
        <p>
          Stays in Europe answers one question per city: which neighborhood to
          sleep in, and the real hotel worth booking in each. If a sentence
          does not help you decide, it gets cut. You will not find
          &quot;hidden gems&quot; here, and no intro paragraphs about cities
          being a blend of old and new.
        </p>
        <h2>How we compare neighborhoods</h2>
        <p>
          Each neighborhood is scored on what it is genuinely best for
          (first visit, nightlife, family, budget, romance, local life), and we
          state the cons as plainly as the pros. Noise at 2am is mentioned. So
          are cruise crowds and stag parties. Distance to the main sights on
          foot, safety, and what a decent room actually costs there all factor
          in.
        </p>
        <h2>How we pick the hotel</h2>
        <p>
          Each neighborhood gets one real hotel we would book ourselves, not a
          list of ten to sift through. The pick is chosen for location first:
          it has to sit inside the area we are recommending, not just near it.
          Prices shown are indicative starting rates; check the live map on
          each city page for your actual dates.
        </p>
        <h2>A small, growing set of cities</h2>
        <p>
          We cover a deliberately small number of European cities at a time,
          and add new ones carefully rather than rushing to cover everywhere
          at once. A city only ships once its page has real, specific value:
          neighborhoods that genuinely differ, and hotels we can stand behind.
        </p>
        <h2>How the site makes money</h2>
        <p>
          Hotel booking links go through Stay22, an affiliate partner. If you
          book through them, we earn a commission at no extra cost to you.
          Recommendations are never reordered for commission: the same
          neighborhood advice would stand if the links paid nothing.
        </p>
        <h2>Freshness</h2>
        <p>
          Pages are reviewed periodically, prices are indicative and rounded,
          and hotel picks are checked to make sure they are still open and
          still worth booking. Found something outdated?{" "}
          <Link href="/destinations">Tell us via the city page</Link> and we
          will fix it.
        </p>
      </div>
    </div>
  );
}

// Japanese (ja) UI strings. Starts as English placeholder copy, translated in
// place. Must match the shape of en.ts exactly.
import type enShape from "./en";

const ja: typeof enShape = {
  locale: "ja",
  months: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  monthsShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  common: {
    day: "Day",
    days: "days",
    from: "from",
    perNight: "/night",
    checkPrices: "Check prices",
    findHotels: "Find hotels",
    free: "Free",
    tip: "Tip",
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    comingSoon: "(coming soon)",
    home: "Home",
    faqTitle: "Quick questions, straight answers",
  },
  header: { destinations: "Destinations", guides: "Guides", method: "Method" },
  footer: {
    tagline:
      "The right neighborhood makes or breaks a city trip. We compare the areas of Europe's best cities and name the hotel worth booking in each.",
    cities: "Cities",
    site: "Site",
    allDestinations: "All destinations",
    travelGuides: "Travel guides",
    aboutMethod: "About and methodology",
    privacy: "Privacy policy",
    disclosure:
      "Stays in Europe earns commissions from booking links (Stay22 and ticket partners). This never changes the price you pay and never changes our recommendations.",
  },
  stay22: {
    loading: "Loading hotel map…",
    mapNote: "Map shows live hotel prices.",
    openSearch: "Open the full hotel search",
    supportNote: ". Booking through it supports the site at no extra cost.",
    hotelsIn: "Hotels in {name}",
  },
  hotels: {
    defaultTitle: "Where we would sleep in {city}",
    defaultIntro:
      "Four picks that cover the realistic range, from splurge to budget. Prices are low-season starting points; check live rates for your dates.",
    seeAll: "See all {city} hotels",
    photosNote:
      "Real hotel photos · prices are indicative from-rates, not live quotes · booking links support the site at no extra cost",
  },
  cityCard: { days: "Days", best: "Best", budget: "Budget" },
  bestFor: {
    "first-time": "First visit",
    nightlife: "Nightlife",
    family: "Family",
    budget: "Budget",
    romantic: "Romantic",
    local: "Local life",
  },
  toolbar: {
    hotels: "Hotels",
    ourPicks: "Our picks",
    howManyDays: "How many days",
    whereToStay: "Where to stay",
    whenToGo: "When to go",
    hotelMap: "Hotel map",
    faq: "FAQ",
    compare: "Compare",
    whereToSleep: "Where to sleep",
    day: "Day {n}",
  },
  bp: {
    pass: "City break pass",
    idealStay: "Ideal stay",
    bestMonths: "Best months",
    midBudget: "Mid budget",
    airport: "Airport",
    itinerary: "{days}-day itinerary",
    duration: "Duration",
    base: "Base",
    forecast: "{month} forecast",
    dayHigh: "Day high",
    nightLow: "Night low",
    rainyDays: "Rainy days",
    verdict: "Verdict",
    go: "Go",
    avoid: "Avoid",
    fair: "Fair",
    roomKey: "Room key",
    firstVisit: "First visit",
    budgetPick: "Budget pick",
    nightlife: "Nightlife",
    midHotel: "Mid hotel",
    budgetPass: "Budget pass",
    dailyTarget: "Daily target",
    sleepIn: "Sleep in",
    freeSights: "Free sights",
    daysValue: "{days} days",
    perDay: "{price} EUR/day",
  },
  stamp: {
    daysIdeal: "{days} days ideal",
    dayByDay: "Day-by-day plan",
    greatPick: "Great pick",
    thinkTwice: "Think twice",
    shoulder: "Shoulder season",
    areasCompared: "{n} areas compared",
    perDay: "~{price} EUR / day",
  },
  hub: {
    metaTitle: "{city} city break: how many days, where to stay, when to go",
    metaDesc:
      "{city} in {days} days: day-by-day itineraries, the right neighborhood for your trip, month-by-month advice and honest budgets.",
    answer: "{city} works best as a {days}-day city break. {intro}",
    howManyTitle: "How many days in {city}?",
    howManyIntro:
      "Pick the itinerary that matches your trip. Each one is a full day-by-day plan, not a list of 30 things to squeeze in.",
    seeItinerary: "See the itinerary →",
    wtsTitle: "Where to stay in {city}",
    walkable:
      "{city} has a walkable center, so the neighborhood you pick sets the tone of the whole trip.",
    spread:
      "{city} is spread out, so picking the right base saves you hours of transit.",
    fullComparison: "Full comparison",
    monthsTitle: "{city}, month by month",
    monthsIntro:
      "Colored months are the sweet spot. Struck-through months come with a warning. Each page covers weather, crowds, prices and what to pack.",
    mapTitle: "Hotel prices right now",
    historyTitle: "A little history",
    knownForTitle: "{city} is known for",
    faqAroundQ: "Is {city} easy to get around?",
    faqAroundAWalk:
      "Yes. {city} has a walkable center, so most of a short trip is done on foot. {airport}",
    faqAroundASpread:
      "{city} is spread out, so plan on public transport between areas. {airport}",
    faqAirportQ: "How do I get from the airport to the center of {city}?",
    faqAirportA: "{airport} It is the cheapest and usually the fastest option.",
    faqKnownQ: "What is {city} known for?",
    faqKnownA: "{city} is best known for {list}. {history}",
    tightBudget: "Tight budget?",
    budgetCard: "{city} on a budget: same trip, around {price} EUR a day",
    readBudget: "Read the budget guide →",
    pairsWell: "Pairs well with",
    faqDaysQ: "How many days do you need in {city}?",
    faqDaysA: "{days} days is the sweet spot for {city}. {rest}",
    faqWhenQ: "When is the best time to visit {city}?",
    faqWhenA: "The best months are {months}. {avoid}",
    faqAvoid: "Think twice about {months}: {note}",
    faqExpQ: "Is {city} expensive?",
    faqExpA:
      "{city} sits {level} the European average. Plan roughly {low} EUR per day on a tight budget, {mid} EUR for a comfortable mid-range trip, and {high} EUR and up if you want top hotels and restaurants.",
    levelBelow: "below",
    levelAround: "around",
    levelAbove: "above",
    faqFirstQ: "Where should first-timers stay in {city}?",
    faqFirstA: "{hood} is the safest first-visit base. {vibe}",
    faqFirstFallback:
      "See the full neighborhood comparison on our where-to-stay guide.",
  },
  iti: {
    metaTitle: "{city} in {days} days: the itinerary that fits",
    metaDesc:
      "A realistic day-by-day plan for {days} days in {city}: what to see each morning, afternoon and evening, where to sleep, and the tips that save you queues.",
    h1Connector: "in",
    daysUnit: "days",
    sleepTitle: "Sleep well for these {days} days",
    sleepIntro:
      "Picks sorted with our recommended base, {hood}, first. Book early: the good-value rooms go weeks ahead.",
    whereToSleepTitle: "Where to sleep for this itinerary",
    whereToSleepBody: "For {days} days, base yourself in {hood}. {vibe}",
    fullGuideLink: "Compare all neighborhoods in the full where-to-stay guide.",
    shortTime: "Short on time?",
    gotLonger: "Got longer?",
    faqEnoughQ: "Is {days} days enough for {city}?",
    faqStayQ: "Where should I stay for {days} days in {city}?",
    faqStayA: "Base yourself in {hood} for this itinerary. {vibe}",
    faqStayFallback:
      "Stay central: see our where-to-stay guide for {city}.",
    faqBestTimeQ: "When is the best time for this {city} itinerary?",
    faqBestTimeA:
      "The plan works year round, but {months} give you the best weather-to-crowds ratio.",
  },
  mon: {
    metaTitle: "{city} in {month}: weather, crowds and is it worth it",
    metaDesc:
      "{city} in {month}: real temperatures, rain days, crowd levels, what to pack and whether it is the right month for your city break.",
    connector: "in",
    verdictBest: "{month} is one of the best months to visit {city}.",
    verdictAvoid:
      "{month} is the month we would avoid in {city} if you have flexible dates.",
    verdictShoulder:
      "{month} is a decent shoulder option for {city}: fewer crowds, some trade-offs.",
    answer:
      "{verdict} Expect daytime highs around {high}°C, nights near {low}°C and roughly {rain} rainy days across the month. {note}",
    packTitle: "What to pack for {city} in {month}",
    packShoes: "Comfortable walking shoes: you will do 15k+ steps a day",
    packSun:
      "Sun protection and a refillable water bottle: afternoons get hot",
    packLayers: "Light layers: warm afternoons, cooler evenings",
    packJacket: "A real jacket and a warm layer for evenings",
    packGloves: "Gloves and a hat: mornings sit near freezing",
    packUmbrella:
      "A compact umbrella or rain shell: rain is a real possibility",
    packRainLayer: "A packable rain layer, just in case",
    worksTitle: "What works well in {month}",
    worksCold:
      "With {rain} rainy days and highs of {high}°C, build your {month} days around indoor anchors and treat sunny windows as a bonus.",
    worksWarm:
      "With highs around {high}°C, {month} is outdoor weather: prioritize viewpoints, parks and long walks.",
    planFull: "Ready to plan the full trip? Start from the",
    planFullLink: "{days}-day {city} itinerary",
    hotelsTitle: "Where to sleep in {city} in {month}",
    hotelsIntroHigh:
      "{month} is high demand: book 4 to 6 weeks out to keep these prices realistic.",
    hotelsIntroLow:
      "{month} is quieter, which makes it the right month to afford the splurge picks.",
    mapTitle: "Hotels in {city} for {month}",
    otherMonth: "Or pick another month",
    faqGoodQ: "Is {month} a good time to visit {city}?",
    faqWarmQ: "How warm is {city} in {month}?",
    faqWarmA:
      "Typical {month} days in {city} reach about {high}°C, dropping to around {low}°C at night. Layers work best.",
    faqRainQ: "Does it rain in {city} in {month}?",
    faqRainA: "Count on roughly {rain} days with rain in {month}. {detail}",
    rainMuch:
      "Plan one indoor block per day and keep museum tickets as your fallback.",
    rainLittle: "Rain rarely lasts all day, so plans hold up well.",
  },
  wts: {
    metaTitle: "Where to stay in {city}: the right neighborhood, area by area",
    metaDesc:
      "Which {city} neighborhood fits your trip, and the real hotel worth booking in each. Straight pros and cons, a decision board and live maps per area.",
    h1: "Where to stay in",
    shortlistTitle: "Straight to the answer",
    shortlistIntro:
      "Short on time? Four {city} hotels we would actually book, splurge to budget, each sitting in one of the areas broken down below.",
    boardTitle: "The decision board",
    boardNeighborhood: "Neighborhood",
    boardBookIf: "Book if you want",
    boardWatchOut: "Watch out",
    boardHotels: "Hotels",
    bookFor: "Book it for",
    knowBefore: "Know before",
    pickedNext: "Picked your area?",
    pickedLink: "Browse more European cities",
    answerFirst: "First time in {city}? Base yourself in {hood}: {pro}.",
    answerFallback: "Stay near the center of {city} and you can barely go wrong.",
    answerBudget:
      "Watching the spend? {hood} trades a little buzz for more room per euro.",
    answerWalkable:
      "The center is small enough to walk, so every area below puts the main sights within reach; what really changes is the mood of the street you come home to at night.",
    answerSpread:
      "Distances count here, so pick the area that matches how you actually plan to spend your days.",
    faqBestQ: "Which is the best area to stay in {city}?",
    faqNightQ: "Where should I stay in {city} for nightlife?",
    faqNightA: "{hood} is the area to book for going out. {vibe} One caveat: {con}",
    faqCheapQ: "Where is the cheapest good area to stay in {city}?",
    faqCheapA: "{hood} gives you the best location for the price. {vibe}",
    faqCentralQ: "Is it better to stay in the center of {city}?",
    faqCentralAWalk:
      "For most trips, yes. {city} has a compact, walkable center, so staying inside it puts the main sights a short walk from your door and saves you any transit. The areas below are all central or a few minutes out, so choose on atmosphere and price, not distance.",
    faqCentralASpread:
      "{city} is spread out, so 'central' matters less than picking the area that fits your plans. Staying near the sights and neighborhoods you actually care about saves more time than aiming for the exact middle.",
    faqFamilyQ: "Where should families stay in {city}?",
    faqFamilyA: "{hood} is the easiest base for families: {vibe}",
  },
  bud: {
    metaTitle: "{city} on a budget: the same trip for {price} EUR a day",
    metaDesc:
      "How to do a {city} city break on about {price} EUR per day: the free sights that are actually good, where to sleep cheap, and where locals eat.",
    h1Suffix: "on a budget",
    answer:
      "A {city} city break on about {price} EUR per person per day is realistic. The formula: sleep in {hood}, walk instead of riding ({walk}), build days around free anchors like {anchors}, and eat where the locals do. Getting in from the airport is cheap too: {airport}.",
    walkCompact: "the center is compact enough",
    walkZones: "pick one zone per day",
    hotelsTitle: "Sleep cheap, sleep well",
    hotelsIntro:
      "The picks under {price} EUR that do not feel like a compromise.",
    freeTitle: "The free anchors",
    freeIntro:
      "These cost nothing and carry a full day each. Build around them and the paid tickets become optional extras instead of a budget drain.",
    eatTitle: "Eat well, pay local prices",
    sleepTitle: "Sleep cheap in {hood}",
    orderNote: "Now put it in order:",
    orderLink: "the {days}-day {city} itinerary",
    orderSuffix: "works on this budget with the swaps above.",
    faqCostQ: "How much does a budget trip to {city} cost?",
    faqFreeQ: "What can you do for free in {city}?",
    faqFreeA:
      "The strongest free sights in {city}: {list}. Several paid sights also have free or reduced windows; check the tips on each itinerary page.",
    faqCheapAreaQ: "What is the cheapest area to stay in {city}?",
  },
  home: {
    metaTitle: "Stays in Europe: where to stay in Europe's best cities",
    metaDesc:
      "Which neighborhood to book in Europe's best cities, and the real hotel worth booking in each. Straight pros and cons, live maps and honest picks, area by area.",
    stamp: "Where to stay, done right",
    heroParts: [
      { pre: "The right ", word: "city", post: "." },
      { pre: " The right ", word: "neighborhood", post: "." },
      { pre: " The right ", word: "hotel", post: "." },
    ],
    heroSub:
      "For every city we cover, one page answers the question that quietly decides your trip: which neighborhood to sleep in, and the best real hotel in each. Honest pros and cons, live maps, no filler.",
    pickCity: "Pick a city",
    howManyBtn: "How many days do I need?",
    departures: "Departures · Europe first",
    daysIdealShort: "{days} days ideal",
    best: "best",
    boarding: "boarding →",
    whereNext: "Where next?",
    allDest: "All destinations",
    searchPlaceholder: "Search a city, e.g. Bruges",
    searchNoResult: "No city yet for that search. New ones are added carefully over time.",
    browseAll: "Browse all",
    knownForLead: "Known for",
    faqTitle: "Where-to-stay questions, answered",
    faqs: [
      {
        q: "Why does the neighborhood matter so much on a city trip?",
        a: "On a two-to-four-day trip you barely leave the area around your hotel, so the neighborhood you pick becomes the trip. The right one puts the sights, the good food and the evening you want on your doorstep; the wrong one adds a commute to everything.",
      },
      {
        q: "How do you decide the best area to stay in a city?",
        a: "We weigh what actually changes your days: how close the main sights are on foot, the character of the streets at night, safety, noise, and what a decent room really costs there. Each city page lays the top areas side by side so you can match one to your trip.",
      },
      {
        q: "Are the hotel picks sponsored?",
        a: "No. Each city gets four real hotels we would book ourselves, from splurge to budget, chosen for location first. We earn a commission if you book through the links, but that never decides which hotels make the list.",
      },
      {
        q: "How many hotels do you list per city?",
        a: "Four: one splurge, two mid-range and one budget, each anchored in a different neighborhood so the pick doubles as an area recommendation. Fewer, better picks beat a wall of a hundred listings you have to sift yourself.",
      },
      {
        q: "Do the maps show real hotel prices?",
        a: "Yes. The map on each city pulls live hotel rates for your dates, so you compare what you would actually pay, not a stale from-price. Booking through it supports the site at no extra cost to you.",
      },
    ],
    methodKicker: "Our method",
    methodTitle:
      'No "hidden gems". No 100-listing dumps. One clear pick per area.',
    methodBody:
      "Every city is built the same way: the neighborhoods compared on what actually matters, the best area named for each kind of trip, and one real hotel worth booking in each. Every line has to pass one test: can you act on it? If not, it is cut.",
    methodLink: "How we choose",
  },
  dest: {
    metaTitle: "Where to stay in Europe: cities and neighborhoods, compared",
    metaDesc:
      "Every city we cover, with the best neighborhood to stay in and a real hotel worth booking in each. A small, growing set. Europe first.",
    kicker: "Departures board",
    h1: "Where to stay in Europe",
    intro:
      "A short, deliberately small list of European cities, with more added carefully over time. Each one gets the same treatment: the neighborhoods compared side by side, the best area named for your kind of trip, and a real hotel worth booking in each.",
    cityBreaksIn: "Where to stay in {country}",
    countryMetaTitle: "Where to stay in {country}: best cities and areas",
    countryMetaDesc:
      "Every {country} city we cover on Stays in Europe: the best neighborhood to stay in and a hotel worth booking in each.",
  },

};

export default ja;

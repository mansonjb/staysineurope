// Japanese (ja) UI strings. Starts as English placeholder copy, translated in
// place. Must match the shape of en.ts exactly.
import type enShape from "./en";

const ja: typeof enShape = {
  locale: "ja",
  months: [
    "1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月",
  ],
  monthsShort: [
    "1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月",
  ],
  common: {
    day: "日目",
    days: "日",
    from: "から",
    perNight: "/泊",
    checkPrices: "料金を確認",
    findHotels: "ホテルを探す",
    free: "無料",
    tip: "ヒント",
    morning: "午前",
    afternoon: "午後",
    evening: "夜",
    comingSoon: "(近日公開)",
    home: "ホーム",
    faqTitle: "よくある質問",
  },
  header: { destinations: "旅行先", guides: "ガイド", method: "私たちの手法" },
  footer: {
    tagline:
      "エリア選びが街歩き旅行の成否を分けます。ヨーロッパの人気都市のエリアを比較し、それぞれで予約する価値のあるホテルをご紹介します。",
    cities: "都市",
    site: "サイト",
    allDestinations: "すべての旅行先",
    travelGuides: "旅行ガイド",
    aboutMethod: "私たちについて・手法",
    privacy: "プライバシーポリシー",
    disclosure:
      "Stays in Europeは予約リンク(Stay22およびチケットパートナー)から手数料を得ています。これによってお客様の支払い料金が変わることはなく、おすすめ内容にも一切影響しません。",
  },
  stay22: {
    loading: "ホテルマップを読み込み中…",
    mapNote: "マップにはリアルタイムのホテル料金が表示されます。",
    openSearch: "ホテル検索をすべて見る",
    supportNote: "。このリンクから予約すると、追加料金なしでサイトの運営を支援できます。",
    hotelsIn: "{name}のホテル",
  },
  hotels: {
    defaultTitle: "{city}でおすすめの宿泊先",
    defaultIntro:
      "贅沢な宿から格安の宿まで、現実的な価格帯をカバーする4つの厳選ホテルです。料金はオフシーズンの目安価格ですので、実際の日程で最新料金をご確認ください。",
    seeAll: "{city}のホテルをすべて見る",
    photosNote:
      "実際のホテル写真を掲載・料金は目安の最低価格であり最新の見積もりではありません・予約リンクは追加料金なしでサイト運営を支援します",
  },
  cityCard: { days: "日数", best: "おすすめ", budget: "予算" },
  bestFor: {
    "first-time": "初めての訪問",
    nightlife: "ナイトライフ",
    family: "ファミリー",
    budget: "予算重視",
    romantic: "ロマンチック",
    local: "地元の暮らし",
  },
  toolbar: {
    hotels: "ホテル",
    ourPicks: "おすすめ",
    howManyDays: "滞在日数",
    whereToStay: "宿泊エリア",
    whenToGo: "ベストシーズン",
    hotelMap: "ホテルマップ",
    faq: "よくある質問",
    compare: "比較",
    whereToSleep: "宿泊エリア",
    day: "{n}日目",
  },
  bp: {
    pass: "都市旅行パス",
    idealStay: "理想の滞在日数",
    bestMonths: "ベストシーズン",
    midBudget: "中予算",
    airport: "空港",
    itinerary: "{days}日間の旅程",
    duration: "期間",
    base: "拠点",
    forecast: "{month}の天気予報",
    dayHigh: "日中の最高気温",
    nightLow: "夜間の最低気温",
    rainyDays: "雨の日数",
    verdict: "結論",
    go: "おすすめ",
    avoid: "避けるべき",
    fair: "まあまあ",
    roomKey: "ルームキー",
    firstVisit: "初めての訪問",
    budgetPick: "予算重視の選択",
    nightlife: "ナイトライフ",
    midHotel: "中価格帯ホテル",
    budgetPass: "予算プラン",
    dailyTarget: "1日あたりの目安",
    sleepIn: "宿泊エリア",
    freeSights: "無料の見どころ",
    daysValue: "{days}日間",
    perDay: "1日{price}ユーロ",
  },
  stamp: {
    daysIdeal: "理想は{days}日間",
    dayByDay: "日程プラン",
    greatPick: "おすすめ",
    thinkTwice: "要注意",
    shoulder: "閑散期直前",
    areasCompared: "{n}エリアを比較",
    perDay: "1日あたり約{price}ユーロ",
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
    metaTitle: "{city}のおすすめ宿泊エリア:エリア別に徹底比較",
    metaDesc:
      "{city}のどのエリアが旅の目的に合うか、そして各エリアで実際に予約する価値のあるホテルをご紹介します。率直なメリット・デメリット、比較表、エリアごとのライブマップ付きです。",
    h1: "宿泊エリアガイド:",
    shortlistTitle: "結論から先に",
    shortlistIntro:
      "時間がない方へ。贅沢な宿から格安の宿まで、実際に予約したい{city}のホテルを4軒厳選しました。それぞれ下記で紹介するエリアのいずれかに位置しています。",
    boardTitle: "エリア比較表",
    boardNeighborhood: "エリア",
    boardBookIf: "こんな方におすすめ",
    boardWatchOut: "注意点",
    boardHotels: "ホテル",
    bookFor: "おすすめポイント",
    knowBefore: "事前に知っておくこと",
    pickedNext: "エリアは決まりましたか?",
    pickedLink: "他のヨーロッパの都市も見る",
    answerFirst: "{city}が初めてなら、{hood}を拠点にしましょう。{pro}。",
    answerFallback: "{city}の中心部に泊まれば、まず間違いありません。",
    answerBudget:
      "予算重視なら、{hood}は多少の賑やかさを手放す代わりに、同じ予算でより広い部屋に泊まれます。",
    answerWalkable:
      "中心部はコンパクトで徒歩圏内なので、以下のどのエリアからも主要な見どころに簡単に行けます。本当に変わるのは、夜に帰る通りの雰囲気だけです。",
    answerSpread:
      "この街では移動距離が重要なので、実際の過ごし方に合ったエリアを選びましょう。",
    faqBestQ: "{city}で宿泊するのに最適なエリアはどこですか?",
    faqNightQ: "{city}でナイトライフを楽しむならどこに泊まるべきですか?",
    faqNightA: "夜遊びをするなら{hood}を予約しましょう。{vibe}ただし一つ注意点があります。{con}",
    faqCheapQ: "{city}で費用対効果の良い格安エリアはどこですか?",
    faqCheapA: "{hood}は価格に対して最高の立地です。{vibe}",
    faqCentralQ: "{city}の中心部に泊まる方が良いですか?",
    faqCentralAWalk:
      "ほとんどの旅行ではその通りです。{city}の中心部はコンパクトで徒歩移動が可能なので、中心部に泊まれば主要な見どころまで徒歩ですぐ行け、移動の手間も省けます。以下で紹介するエリアはすべて中心部か、そこから数分の場所にあるため、距離ではなく雰囲気や価格で選んでください。",
    faqCentralASpread:
      "{city}は広範囲に広がっているため、「中心部」であることよりも、旅の計画に合ったエリアを選ぶ方が重要です。正確な中心地を目指すよりも、実際に訪れたい見どころやエリアの近くに泊まる方が時間の節約になります。",
    faqFamilyQ: "{city}でファミリーが泊まるべきエリアはどこですか?",
    faqFamilyA: "{hood}はファミリーにとって最も泊まりやすい拠点です。{vibe}",
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
    metaTitle: "Stays in Europe:ヨーロッパの人気都市のおすすめ宿泊エリア",
    metaDesc:
      "ヨーロッパの人気都市でどのエリアに泊まるべきか、そして各エリアで実際に予約する価値のあるホテルをご紹介します。率直なメリット・デメリット、ライブマップ、正直な厳選情報をエリアごとにお届けします。",
    stamp: "正しい宿泊エリア選び",
    heroParts: [
      { pre: "正しい", word: "都市", post: "。" },
      { pre: "正しい", word: "エリア", post: "。" },
      { pre: "正しい", word: "ホテル", post: "。" },
    ],
    heroSub:
      "掲載しているすべての都市について、旅の成否を静かに左右する問いに1つのページで答えます。どのエリアに泊まるべきか、そして各エリアで実際におすすめのホテルはどこか。率直なメリット・デメリット、ライブマップ、無駄のない情報をお届けします。",
    pickCity: "都市を選ぶ",
    howManyBtn: "何日必要?",
    departures: "出発案内 ・ ヨーロッパ優先",
    daysIdealShort: "理想は{days}日間",
    best: "おすすめ",
    boarding: "搭乗案内 →",
    whereNext: "次はどこへ?",
    allDest: "すべての旅行先",
    searchPlaceholder: "都市を検索(例:ブルージュ)",
    searchNoResult: "該当する都市はまだありません。新しい都市は慎重に追加されていきます。",
    browseAll: "すべて見る",
    knownForLead: "有名なもの",
    faqTitle: "宿泊エリアに関するよくある質問",
    faqs: [
      {
        q: "なぜ都市旅行ではエリア選びがそれほど重要なのですか?",
        a: "2~4日程度の旅行では、ホテル周辺のエリアからほとんど出ません。つまり選んだエリアがそのまま旅の内容になるのです。適切なエリアを選べば、見どころも美味しい食事も理想の夜も玄関先にありますが、間違ったエリアを選ぶとすべてに移動時間がかかってしまいます。",
      },
      {
        q: "どのようにして街で最適な宿泊エリアを決めているのですか?",
        a: "実際に旅の内容を左右する要素を重視しています。主要な見どころまで徒歩でどれくらいか、夜の通りの雰囲気、治安、騒音、そして良質な部屋が実際いくらするか。各都市のページでは主要エリアを並べて比較しているので、ご自身の旅に合ったエリアを見つけられます。",
      },
      {
        q: "掲載しているホテルはスポンサーによるものですか?",
        a: "いいえ。各都市につき、私たち自身が実際に予約したいと思う4軒のホテルを、贅沢な宿から格安の宿まで、まず立地を基準に選んでいます。リンク経由で予約いただくと手数料が発生しますが、それが掲載ホテルの選定に影響することは一切ありません。",
      },
      {
        q: "都市ごとに何軒のホテルを掲載していますか?",
        a: "4軒です。贅沢な宿1軒、中価格帯2軒、格安の宿1軒で、それぞれ異なるエリアに位置しているため、ホテルの選択がそのままエリアのおすすめにもなります。100件のリストから自分で選ぶより、厳選された少数のホテルの方が役立ちます。",
      },
      {
        q: "マップには実際のホテル料金が表示されますか?",
        a: "はい。各都市のマップは指定した日程のリアルタイムのホテル料金を取得するため、古い目安価格ではなく実際に支払う金額を比較できます。このリンクから予約すると、追加料金なしでサイトの運営を支援できます。",
      },
    ],
    methodKicker: "私たちの手法",
    methodTitle:
      "「穴場」もなし。100件の羅列もなし。各エリアに明確な1つの選択肢だけ。",
    methodBody:
      "すべての都市ページは同じ方法で作られています。本当に重要な点でエリアを比較し、旅のタイプごとに最適なエリアを明示し、それぞれに実際に予約する価値のあるホテルを1軒ずつ紹介します。すべての情報は「実際に行動に移せるか」というテストをクリアしなければなりません。クリアできない情報は削除されます。",
    methodLink: "選定方法について",
  },
  dest: {
    metaTitle: "ヨーロッパのおすすめ宿泊エリア:都市とエリアを徹底比較",
    metaDesc:
      "掲載しているすべての都市について、最適な宿泊エリアと、それぞれで実際に予約する価値のあるホテルをご紹介します。厳選された都市を少しずつ拡大中です。ヨーロッパを中心に展開しています。",
    kicker: "出発案内板",
    h1: "ヨーロッパのおすすめ宿泊エリア",
    intro:
      "あえて厳選した少数のヨーロッパの都市リストで、新しい都市は時間をかけて慎重に追加していきます。すべての都市を同じ方法で紹介しています。エリアを並べて比較し、旅のタイプに最適なエリアを明示し、それぞれに実際に予約する価値のあるホテルをご紹介します。",
    cityBreaksIn: "{country}のおすすめ宿泊エリア",
    countryMetaTitle: "{country}のおすすめ宿泊エリア:人気都市とエリア",
    countryMetaDesc:
      "Stays in Europeで掲載している{country}のすべての都市について、最適な宿泊エリアと、それぞれで実際に予約する価値のあるホテルをご紹介します。",
  },

};

export default ja;

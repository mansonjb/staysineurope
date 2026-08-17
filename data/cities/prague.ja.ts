import type { CityData } from "../types";

const prague: CityData = {
  city: {
    slug: "prague",
    name: "プラハ",
    country: "チェコ",
    countrySlug: "czech-republic",
    lat: 50.0755,
    lng: 14.4378,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "PRG",
    airportToCenter:
      "Bus 119 to Nadrazi Veleslavin, then metro line A to the center, about 45 min total for around 2 EUR. The AE express bus runs direct to the main train station if you prefer one vehicle.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Cold, with highs around 2C and frequent grey skies, but the Christmas market on Old Town Square runs until January 6. After that, hotel rates drop to their lowest of the year and the main sights are nearly queue-free.",
      2: "Still freezing at night and the city stays quiet, so this is the cheapest full month to visit. Pub interiors and museums do the heavy lifting; pack for lows below zero.",
      3: "Days climb toward 9C and the Easter markets open on Old Town Square in the second half of the month. Crowds are still moderate and prices sit below the spring peak.",
      4: "Spring proper: around 14C, blossoms in Petrin and Letna parks, and the first river-boat and beer garden openings. Weekends get busy around Easter, so book the castle circuit ahead.",
      5: "One of the best months, with highs near 19C and the Prague Spring music festival running from mid-May into early June. Book accommodation early; May weekends sell out and prices reach shoulder-season highs.",
      6: "Warm at around 22C with long daylight and beer gardens at Letna and Riegrovy Sady in full swing. Crowds build through the month but stay short of the July crush.",
      7: "Peak season: 25C days, packed Charles Bridge by 9am, and the highest room rates of the summer. If you must come now, do the big sights before 8am and save afternoons for parks and the river.",
      8: "Same heat and same crowds as July, with occasional thunderstorms. Naplavka riverbank and island swimming spots absorb the heat well, but expect queues at the castle all day.",
      9: "Highs around 20C, thinning crowds after the first week, and the Dvorak Prague festival for classical music fans. Prices ease off; this is the smart alternative to summer.",
      10: "Crisp 13C days and serious autumn color in Petrin, Letna and Vysehrad. Tourist numbers drop noticeably after mid-month and hotel rates follow.",
      11: "Grey and cold with highs around 7C, the quietest stretch of the year until the Christmas markets open on Old Town Square in late November. Late November is a sweet spot: market atmosphere without December density.",
      12: "The Christmas markets on Old Town Square and Wenceslas Square run from late November through January 6 and draw heavy crowds, especially weekends. Expect lows below freezing, mulled wine everywhere, and December hotel prices well above the winter norm.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 11 },
      2: { highC: 4, lowC: -2, rainyDays: 9 },
      3: { highC: 9, lowC: 1, rainyDays: 10 },
      4: { highC: 14, lowC: 4, rainyDays: 9 },
      5: { highC: 19, lowC: 8, rainyDays: 11 },
      6: { highC: 22, lowC: 11, rainyDays: 12 },
      7: { highC: 25, lowC: 13, rainyDays: 11 },
      8: { highC: 25, lowC: 13, rainyDays: 10 },
      9: { highC: 20, lowC: 9, rainyDays: 8 },
      10: { highC: 13, lowC: 5, rainyDays: 9 },
      11: { highC: 7, lowC: 1, rainyDays: 10 },
      12: { highC: 3, lowC: -2, rainyDays: 11 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "ヴルタヴァ川のどちら岸に泊まるかで、旅の質は今も大きく変わる。",
    heroIntro:
      "プラハの中心部は徒歩30分で回れる広さに、城と中世の橋、そして当時のまま残る旧市街がぎゅっと収まっている。それでいて宿泊費はヨーロッパの古都の中でも今なお最安クラスだ。川のどちら岸を選ぶか、その奥のどのエリアを選ぶかで旅の中身は大きく変わる。絵葉書のような路地と人混みか、城側の静けさか、それともトラムで少し行った先の安いローカルな拠点か。このガイドでは予約する価値のある5つのエリアを比較し、団体観光客の波に飲まれるのではなく、その波を読んで主要な見どころを回れるようにする。",
    accent: { from: "#8B7CF6", to: "#E85D75", ink: "#3B2E7E" },
    neighborhoodSlugs: [
      "stare-mesto",
      "mala-strana",
      "vinohrady",
      "zizkov",
      "karlin",
    ],
    nearbyCitySlugs: ["vienna", "budapest"],
  },

  neighborhoods: [
    {
      slug: "stare-mesto",
      citySlug: "prague",
      name: "Stare Mesto (Old Town)",
      lat: 50.0875,
      lng: 14.421,
      bestFor: ["first-time", "romantic"],
      vibe: "石畳と尖塔、中庭で行き止まりになる路地が旧市街広場を囲む中世の中心部を埋め尽くし、昼間は国内で最も人が密集する一角になる。午後10時を過ぎるとツアー団体は一気に引き、通りは本当に静かになる。短い旅程で、初めてのプラハに求めるものすべてを徒歩10分圏内で済ませたいなら、観光客向けの値段込みでここを選ぶといい。",
      pros: [
        "カレル橋、旧市街広場、ユダヤ人街(ヨゼフォフ)まですべて徒歩圏内",
        "市内で最も選択肢の多いホテル・アパートメントの数",
        "2日間の滞在なら公共交通機関は一切不要",
      ],
      cons: [
        "広場周辺のレストランは地元価格ではなく観光客向けの値段",
        "週末の夜は路上の騒音とバチェラーパーティー集団が目立つ",
        "同水準の部屋でもヴィノフラディより20〜30パーセント割高",
      ],
    },
    {
      slug: "mala-strana",
      citySlug: "prague",
      name: "Mala Strana",
      lat: 50.0878,
      lng: 14.4046,
      bestFor: ["romantic", "first-time", "family"],
      vibe: "赤い屋根、大使館の庭園、バロック様式の路地がヴルタヴァ川西岸、城のふもとのこの地区を埋めている。日帰り観光客が夕方に橋を渡って戻っていくと、街は一気に静まり返る。ここに泊まるということは城側で目覚めるということで、主要な見どころを回るタイミングにおいて本当の意味で有利になる。旧市街のレストランへの近さより、早朝の誰もいないカレル橋と落ち着いた夜を優先するならここを選ぶといい。",
      pros: [
        "プラハ城、ペトシーンの丘、レノン・ウォールがすべて目と鼻の先",
        "夜になると本当に落ち着いた雰囲気に包まれる",
        "朝食前のカレル橋なら人混みはまったくない",
      ],
      cons: [
        "東岸に比べてスーパーや手頃な飲食店の選択肢が少ない",
        "急な石畳の坂道はスーツケースやベビーカーには厳しい",
      ],
    },
    {
      slug: "vinohrady",
      citySlug: "prague",
      name: "Vinohrady",
      lat: 50.0755,
      lng: 14.4443,
      bestFor: ["local", "budget", "family", "romantic"],
      vibe: "アール・ヌーヴォー様式の集合住宅が、緑豊かな広場が並ぶ住宅街の碁盤の目を縁取り、プラハで最もカフェが集中するエリアでもある。住む場所を選べる地元の人々が実際に腰を落ち着ける街で、レストランの充実ぶりがそれを物語る。旧市街の見どころまで地下鉄10分の距離にありながら、旧市街価格で泊まりたくないならここを選ぶといい。",
      pros: [
        "市内随一の食とスペシャルティコーヒーが地元価格で楽しめる",
        "リエグロヴィ・サディのビアガーデンと2つの大きな公園",
        "中心部よりも明らかに安い宿泊費",
      ],
      cons: [
        "主要な見どころへは、短時間とはいえ必ず移動が必要",
        "玄関を出てすぐ楽しめる夜遊びを求めるなら夜は静かすぎる",
      ],
    },
    {
      slug: "zizkov",
      citySlug: "prague",
      name: "Zizkov",
      lat: 50.0833,
      lng: 14.4515,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "ヨーロッパのどこよりも人口当たりのパブ密度が高いことで知られる、少し荒削りな地区。隣のヴィノフラディより雑然としていて、宇宙時代を思わせるテレビ塔が街を見下ろす。一角ごとに高級化が進みつつも、安いビールと庶民的なバーが今も主役だ。洗練さよりも中心部に近い最安値の拠点を優先し、見どころまでの道のりが少し長くても構わないならここを選ぶといい。",
      pros: [
        "中心部近辺で最も安い部屋代とビール代",
        "観光客価格がほぼ乗らない本物のパブ文化",
        "ヴィトコフの丘からは旧市街を一望する無料の絶景",
      ],
      cons: [
        "一部の区画は荒れた印象でグラフィティが目立つ",
        "主要な見どころまで徒歩かトラムで20〜30分",
        "週末の夜はメインストリートでバーの騒音が響く",
      ],
    },
    {
      slug: "karlin",
      citySlug: "prague",
      name: "Karlin",
      lat: 50.0925,
      lng: 14.4505,
      bestFor: ["local", "family", "budget"],
      vibe: "2002年の洪水後に再建されたこの平坦な川沿いの地区は、今やプラハで最も洗練されたモダンなエリアとなり、広々とした大通りと改装された19世紀の建物が並ぶ。ブランチやクラフトビールのシーンは観光客ではなく住民に向けたもので、旧市街までは地下鉄でわずか2駅。中世建築に包まれることより、平坦でベビーカーにも優しい通りとモダンな雰囲気を重視するならここを選ぶといい。",
      pros: [
        "平坦でベビーカーにも優しい通りと川沿いの散策路",
        "手頃な価格で楽しめる質の高いモダンチェコ料理店",
        "地下鉄B線で中心部まで一直線",
      ],
      cons: [
        "地区内に主要な見どころは一つもない",
        "夜遊びは控えめで、プラハ基準ではバーの閉店が早い",
      ],
    },
  ],

  pois: [
    {
      slug: "charles-bridge",
      citySlug: "prague",
      name: "Charles Bridge",
      lat: 50.0865,
      lng: 14.4114,
      kind: "sight",
      needsBooking: false,
      tip: "Walk it before 8am or after 10pm; between 10am and 6pm it is shoulder to shoulder. Ignore the caricature artists mid-bridge and skip the currency exchange booths at either end, which offer some of the worst rates in the city.",
    },
    {
      slug: "prague-castle",
      citySlug: "prague",
      name: "Prague Castle",
      lat: 50.09,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Buy the basic circuit ticket online and enter when gates open at 9am; tour groups flood in from 10am. The courtyards and lane views are free, so if you only want the panorama, walk through without a ticket and spend the money on the Lobkowicz Palace terrace cafe instead.",
    },
    {
      slug: "st-vitus-cathedral",
      citySlug: "prague",
      name: "St. Vitus Cathedral",
      lat: 50.0909,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Entry is included in the castle circuit ticket; the free standing area just inside the door shows you almost nothing, so pay for the full nave. Go straight to the Mucha stained-glass window in the third chapel on the left before the aisle fills up.",
    },
    {
      slug: "old-town-square",
      citySlug: "prague",
      name: "Old Town Square & Astronomical Clock",
      lat: 50.0875,
      lng: 14.4213,
      kind: "sight",
      needsBooking: false,
      tip: "The clock show lasts 45 seconds and underwhelms from the packed street; watch it once at an off-hour like 9am, then pay to climb the Old Town Hall tower instead, which has the best view of the square. Never eat or exchange money on the square itself.",
    },
    {
      slug: "josefov",
      citySlug: "prague",
      name: "Jewish Quarter (Josefov)",
      lat: 50.09,
      lng: 14.418,
      kind: "museum",
      needsBooking: true,
      tip: "One Jewish Museum ticket covers the synagogues and the Old Jewish Cemetery; buy it online and start at the Pinkas Synagogue right at 9am opening, since the cemetery path behind it bottlenecks by mid-morning. Everything closes Saturdays, so plan around Shabbat.",
    },
    {
      slug: "petrin-hill",
      citySlug: "prague",
      name: "Petrin Hill & Lookout Tower",
      lat: 50.0833,
      lng: 14.395,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The funicular from Ujezd uses a standard public transport ticket, but the queue often exceeds the 25-minute walk up through the orchards, so check it before committing. The tower's 299 steps beat the castle towers for skyline photos because Prague Castle itself is in your frame.",
    },
    {
      slug: "letna-park",
      citySlug: "prague",
      name: "Letna Park Beer Garden",
      lat: 50.0955,
      lng: 14.416,
      kind: "park",
      needsBooking: false,
      tip: "Come an hour before sunset, grab a beer from the kiosk for about 60 CZK, and take a bench along the southern edge for the classic view over the Vltava bridges. It is cash-friendly and open roughly April to October; in winter the viewpoint still works, the beer stand does not.",
    },
    {
      slug: "vysehrad",
      citySlug: "prague",
      name: "Vysehrad Fortress",
      lat: 50.0645,
      lng: 14.418,
      kind: "sight",
      needsBooking: false,
      tip: "The grounds, ramparts and cemetery where Dvorak and Mucha are buried are all free; only the small casemates tour costs money. Take metro line C to Vysehrad, walk the ramparts counterclockwise for river views, and exit downhill through the cubist houses to Naplavka.",
    },
    {
      slug: "wenceslas-square",
      citySlug: "prague",
      name: "Wenceslas Square",
      lat: 50.081,
      lng: 14.428,
      kind: "sight",
      needsBooking: false,
      tip: "Treat it as a 20-minute walk-through for the 1989 history and the National Museum facade, not a destination. This is prime ground for the two classic scams: never use the street exchange offices here and never hail a taxi from the square; order a Bolt or Uber instead.",
    },
    {
      slug: "klementinum",
      citySlug: "prague",
      name: "Klementinum Baroque Library",
      lat: 50.0863,
      lng: 14.4165,
      kind: "museum",
      needsBooking: true,
      tip: "Entry is by guided tour only, roughly every 30 minutes, and slots sell out on busy days, so book online for a morning tour. You view the baroque library hall from the doorway and cannot enter the room itself; the real payoff is the Astronomical Tower gallery at the end.",
    },
    {
      slug: "lennon-wall",
      citySlug: "prague",
      name: "Lennon Wall",
      lat: 50.0863,
      lng: 14.4069,
      kind: "sight",
      needsBooking: false,
      tip: "It is a five-minute stop, constantly repainted, so do not detour for it alone; fold it into a Mala Strana walk between Charles Bridge and Kampa Island. Before 9am you can photograph it without a single person in frame.",
    },
    {
      slug: "lokal-dlouha",
      citySlug: "prague",
      name: "Lokal Dlouha",
      lat: 50.0899,
      lng: 14.4257,
      kind: "food",
      needsBooking: false,
      tip: "This is the benchmark for tank-fresh Pilsner Urquell and honest Czech classics like svickova at fair prices. It takes reservations and fills by 7pm; walk-ins do best at the bar or before 6pm, and note your beer tally is marked on a paper slip you pay at the end.",
    },
    {
      slug: "strahov-library",
      citySlug: "prague",
      name: "Strahov Monastery Library",
      lat: 50.0862,
      lng: 14.3893,
      kind: "museum",
      needsBooking: true,
      tip: "Like the Klementinum, you view the Theological and Philosophical halls from the doorways, so budget 30-40 minutes and buy the photo permit if you want pictures. Pair it with the free terrace below the monastery, one of the best castle-and-city viewpoints in Prague, then walk downhill to the castle.",
    },
    {
      slug: "naplavka",
      citySlug: "prague",
      name: "Naplavka Riverbank",
      lat: 50.071,
      lng: 14.414,
      kind: "experience",
      needsBooking: false,
      tip: "Saturday morning hosts the city's best farmers market from 8am to 2pm; on summer evenings the embankment turns into an open-air bar scene with converted boat pubs. Arrive before 6pm on warm Fridays or you will hunt for a spot on the wall.",
    },
  ],

  itineraries: [
    {
      citySlug: "prague",
      days: 2,
      summary:
        "Two days is enough for Prague's headline sights if you stay central and start early, but you will leave the local side of the city untouched. The center is compact: Charles Bridge, Old Town Square and the castle district sit within a 25-minute walk of each other, so a tight plan covers all three plus the Jewish Quarter without transit. Base yourself in Stare Mesto so both mornings start on foot. The structure that works is one day per riverbank: day one for the old town core and Josefov, day two for the castle hill, Strahov and Mala Strana. Book the castle circuit and Jewish Museum tickets online before you arrive, because queues are the only real threat to a 48-hour visit. What you sacrifice is Vysehrad, the Vinohrady cafe scene and any slow evening at a beer garden, which is exactly what a third day buys you. Prices are low by Western European standards, so eat well; just stay off the main squares.",
      stayNeighborhoodSlug: "stare-mesto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Old town core and the Jewish Quarter",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Start on Old Town Square around 8:30am while it is still quiet, catch the 9am Astronomical Clock show, then climb the Old Town Hall tower for the rooftop view before the first tour groups land.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Walk five minutes north into Josefov and work through the Jewish Museum circuit starting at the Pinkas Synagogue, then the Old Jewish Cemetery and the Spanish Synagogue. Buy the combined ticket online the night before.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Lunch at Lokal Dlouha on svickova or fried cheese with a tank-poured Pilsner Urquell. Arrive before the 1pm rush or expect a short wait.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Take a booked afternoon tour of the Klementinum to see the baroque library hall and climb the Astronomical Tower for a view over the old town rooftops.",
              durationMin: 60,
            },
            {
              text: "Wander the lanes between the Klementinum and the Powder Tower: Celetna, the Ungelt courtyard and the arcades around the Estates Theatre. No tickets, no plan, this is the best free hour in the old town.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Cross Wenceslas Square at dusk for the National Museum facade and the 1989 memorial, treating it as a walk-through rather than a stop. Order a Bolt if you need a ride later; never hail a taxi here.",
              durationMin: 30,
            },
            {
              poiSlug: "charles-bridge",
              text: "End on Charles Bridge after 9pm when the crowds thin and the castle is floodlit. This is the photo you came for, and at this hour you can actually stand still to take it.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castle hill and Mala Strana",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Be at Prague Castle's gates for 9am opening with a pre-booked circuit ticket and do Golden Lane and the Old Royal Palace before the 10am group surge.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Inside the complex, give St. Vitus Cathedral a full visit with the paid nave entry and find the Mucha stained-glass window in the third chapel on the left.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Walk 15 minutes uphill to the Strahov Monastery Library for the two baroque halls, then take in the free terrace view below the monastery, which frames the castle and the whole east bank.",
              durationMin: 75,
            },
            {
              poiSlug: "petrin-hill",
              text: "Descend through the Petrin orchards and, if legs allow, climb the lookout tower's 299 steps for the one skyline view that includes the castle itself.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Walk down through Mala Strana past the Lennon Wall and across Kampa Island as the day-trippers clear out. The quarter is at its best in this hour.",
              durationMin: 45,
            },
            {
              text: "Dinner in Mala Strana at a traditional cellar restaurant off Nerudova street, away from the bridge-adjacent tourist menus. Mains with beer should run 300-450 CZK per person, not double that.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 3,
      summary:
        "Three days is the right amount of time for Prague: enough for every major sight at a humane pace, plus one evening that belongs to the city rather than the checklist. Two days forces you to sprint the castle and old town back to back; the third day adds Vysehrad, the Letna beer garden and time to sit in a pub without watching the clock. Stay in Mala Strana, on the castle side of the river. It costs slightly more than the eastern districts, but you wake up next to the sights everyone else commutes to, and the quarter goes calm and beautiful after 6pm. The shape of the plan: day one for the old town and Josefov, day two for the castle, Strahov and Petrin, day three for Vysehrad, the riverbank and Letna. Book three things online before arrival: the castle circuit, the Jewish Museum ticket and a Klementinum tour slot. Everything else in Prague rewards showing up early rather than paying extra.",
      stayNeighborhoodSlug: "mala-strana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Old town and the Jewish Quarter",
          morning: [
            {
              poiSlug: "charles-bridge",
              text: "From your Mala Strana base, cross Charles Bridge before 8am while it is nearly empty; this is the single best timing hack in Prague and it costs nothing.",
              durationMin: 30,
            },
            {
              poiSlug: "old-town-square",
              text: "Continue to Old Town Square for the Astronomical Clock and the Old Town Hall tower climb, done before 10am to beat the tide.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Spend the late morning in Josefov on the Jewish Museum circuit: Pinkas Synagogue first, then the Old Jewish Cemetery before the path clogs, finishing at the Spanish Synagogue.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Lunch at Lokal Dlouha for the definitive tank Pilsner and a plate of svickova. Keep your paper beer tally, you settle it at the end.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Take your pre-booked Klementinum tour for the baroque library and the Astronomical Tower view, then browse the lanes toward the Ungelt courtyard.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Walk the length of Wenceslas Square for the National Museum and the Velvet Revolution memorial. Skip the exchange offices and street taxis without exception.",
              durationMin: 30,
            },
            {
              text: "Recross the river for dinner in Mala Strana; the streets behind Kampa Island hold quiet restaurants where a full Czech dinner with beer stays under 500 CZK.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castle, Strahov and Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Walk uphill from Mala Strana and enter Prague Castle at 9am sharp with your online circuit ticket, covering Golden Lane and the Old Royal Palace ahead of the groups.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Do St. Vitus Cathedral with the full paid entry and head straight for the Mucha window before the nave fills.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Lunch at a monastery brewery near Strahov, then visit the Strahov Library's Theological and Philosophical halls and take the free terrace viewpoint below.",
              durationMin: 120,
            },
            {
              poiSlug: "petrin-hill",
              text: "Walk the ridge to Petrin Hill through the orchards and climb the lookout tower if the funicular queue below looks long; the tower view beats every castle tower because the castle is in it.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Descend to the Lennon Wall and Kampa Island for the golden-hour walk when Mala Strana empties out.",
              durationMin: 45,
            },
            {
              text: "Have dinner at a Mala Strana pub with a garden, then walk to the riverbank across from the National Theatre for the floodlit castle reflected in the Vltava.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, the river and Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Take metro line C to Vysehrad and walk the fortress ramparts counterclockwise for the river views, then visit the cemetery where Dvorak and Mucha are buried. The grounds are free.",
              durationMin: 120,
            },
            {
              text: "Exit Vysehrad downhill past the cubist houses on Rasinovo nabrezi, a five-minute architecture detour almost nobody makes.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Follow the river north along Naplavka; on Saturdays the farmers market runs until 2pm, on other days the boat cafes work for a slow lunch on the water.",
              durationMin: 105,
            },
            {
              text: "Tram or walk to the old town side and pick one museum you skipped: the Museum of Decorative Arts or the Alfons Mucha Museum both fit in 90 minutes.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Climb to the Letna Park beer garden an hour before sunset, buy a 60 CZK beer at the kiosk and take a bench over the bridges. This is the best cheap evening in Prague.",
              durationMin: 120,
            },
            {
              text: "Finish with dinner in nearby Holesovice or back across the bridge in the old town, depending on how long the sunset holds you.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 4,
      summary:
        "Four days is more than enough for Prague's sights, and that is the point: the fourth day converts a monument sprint into an actual trip. Days one to three cover the old town, Josefov, the castle district and Vysehrad at a relaxed pace; day four is yours for either a local day in the neighborhoods or a day trip to Kutna Hora's bone chapel and cathedral, an hour away by train. With this much time, skip the center and stay in Vinohrady. It is 10 minutes from Old Town Square by metro, 20 to 30 percent cheaper for equivalent rooms, and its cafes and beer gardens are the reason the fourth day exists. The one-riverbank-per-day logic still applies: keep the castle, Strahov and Petrin together, keep the old town and Josefov together, and do not zigzag across the Vltava. Pre-book the castle circuit, the Jewish Museum and the Klementinum. If you were choosing between three and four days, the fourth is the one you will remember.",
      stayNeighborhoodSlug: "vinohrady",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Old town and the Jewish Quarter",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Metro from Vinohrady to Mustek and be on Old Town Square by 8:30am for the Astronomical Clock and the Old Town Hall tower before the groups arrive.",
              durationMin: 90,
            },
            {
              poiSlug: "josefov",
              text: "Do the Jewish Museum circuit in Josefov starting at Pinkas Synagogue at opening, then the Old Jewish Cemetery and the Spanish Synagogue with your pre-booked ticket.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Lunch at Lokal Dlouha: tank Pilsner Urquell and Czech classics at honest prices, five minutes from Josefov.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Take a booked Klementinum tour for the baroque library hall and the Astronomical Tower panorama over the old town.",
              durationMin: 60,
            },
            {
              text: "Spend the rest of the afternoon in the lanes: Ungelt courtyard, Celetna street and the Powder Tower, all free and best without a route.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "charles-bridge",
              text: "Walk onto Charles Bridge after 9pm for the floodlit castle view with the daytime crowds gone.",
              durationMin: 45,
            },
            {
              text: "Ride the metro back to Vinohrady and have a nightcap at a wine bar around Namesti Miru; the district pours Moravian wines you will not find in the center.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castle, Strahov and Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Tram 22 from Vinohrady runs straight to the castle district; enter Prague Castle at 9am with your online ticket and clear Golden Lane and the Old Royal Palace early.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visit St. Vitus Cathedral on the full nave ticket and seek out the Mucha stained-glass window before the aisles fill.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Walk up to the Strahov Monastery Library for the two baroque halls, then linger on the free terrace below for the definitive castle-and-city view.",
              durationMin: 90,
            },
            {
              poiSlug: "petrin-hill",
              text: "Cross the orchards to Petrin Hill and climb the lookout tower, or ride the funicular down to Ujezd if the day has been long.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Walk Mala Strana at dusk via the Lennon Wall and Kampa Island, the quarter's best hour.",
              durationMin: 45,
            },
            {
              text: "Stay for dinner in a Mala Strana cellar restaurant, then walk one last loop past the floodlit St. Nicholas Church before the tram home.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, the river and Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Metro to Vysehrad and walk the free fortress ramparts for the best river panorama in the city, plus the cemetery holding Dvorak and Mucha.",
              durationMin: 120,
            },
            {
              text: "Descend past the cubist houses to the riverbank; the detour adds ten minutes and a piece of architecture unique to Prague.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Follow Naplavka north along the water; Saturday brings the farmers market until 2pm, other days the moored boat cafes handle a long lunch.",
              durationMin: 105,
            },
            {
              poiSlug: "wenceslas-square",
              text: "Cut inland through the New Town to Wenceslas Square for the National Museum facade and the 1989 memorial, a 30-minute walk-through, then browse the passages of Lucerna with its upside-down horse statue.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "End the day at the Letna Park beer garden above the river: 60 CZK beers, plane trees and the sunset view over every bridge at once.",
              durationMin: 120,
            },
            {
              text: "Dinner in Holesovice below the park or back in Vinohrady, both a short tram ride away.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Local Vinohrady day or Kutna Hora day trip",
          morning: [
            {
              text: "Option A: sleep in, then do a Vinohrady cafe crawl around Namesti Miru and Jiriho z Podebrad square, where the farmers market runs most weekday mornings. Option B: take the direct train from the main station to Kutna Hora, about an hour, for the Sedlec Ossuary bone chapel; buy the combined ossuary and cathedral ticket at the info center to skip the on-site line.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A continues with Riegrovy Sady park and a slow lunch at a Vinohrady bistro, then a browse of the district's Art Nouveau facades along Manesova street. Option B: walk from Sedlec into Kutna Hora's old town for St. Barbara's Cathedral and the medieval silver-mining lanes before the late-afternoon train back.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Either way, end at the Riegrovy Sady beer garden in Vinohrady, the local counterpart to Letna with a lawn that faces the castle silhouette at sunset.",
              durationMin: 120,
            },
            {
              text: "Last dinner at a modern Czech restaurant in Vinohrady or Karlin; both districts do refined takes on duck and dumplings at half the old town price.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default prague;

import type { CityData } from "../types";

const vienna: CityData = {
  city: {
    slug: "vienna",
    name: "ウィーン",
    country: "オーストリア",
    countrySlug: "austria",
    lat: 48.2082,
    lng: 16.3738,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "VIE",
    airportToCenter:
      "The S7 S-Bahn runs from the airport to Wien Mitte in about 25 minutes for 4.30 EUR, which is the cheapest sensible option. The City Airport Train (CAT) covers the same route non-stop in 16 minutes but costs around 14.90 EUR one way, so most visitors take the S7.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Cold and grey with highs around 3C and the Christmas markets already gone, so this is the quietest and cheapest month. It is also the heart of ball season: dozens of formal balls run through January, and hotel demand spikes only on those specific nights.",
      2: "Still near freezing but the Vienna ball season peaks, culminating in the Opera Ball at the State Opera in late February, the most famous night of the social calendar. Away from the balls the city is calm and rooms stay cheap; pack for lows below zero.",
      3: "Highs climb toward 11C and the palace gardens begin to reopen for the season. Crowds are still light and prices sit below the spring peak, making this a smart shoulder-season window before Easter demand arrives.",
      4: "Spring proper, around 15C, with the Schonbrunn gardens and the Prater in bloom and Easter markets on Freyung and at Schonbrunn. Weekends get busy around Easter, so book the palace timed tickets ahead.",
      5: "One of the best months at roughly 20C, and the Wiener Festwochen arts festival opens in mid-May and runs into June with theatre, music and installations across the city. Book accommodation early; May weekends reach shoulder-season highs.",
      6: "Warm at around 24C with long daylight, the tail of the Wiener Festwochen, and open-air concerts including the free Summer Night Concert by the Vienna Philharmonic in the Schonbrunn gardens. Beer gardens and the Danube island fill up; crowds build but stay short of high summer.",
      7: "Peak summer heat near 26C, the busiest tourist month, and the Vienna State Opera closes for its summer break, so check the summer programme if opera is your reason to visit. The Rathausplatz Film Festival sets up in front of the city hall with free film screenings and food stalls all month.",
      8: "Same heat and crowds as July, with occasional afternoon thunderstorms and many locals away on holiday. The Rathausplatz Film Festival continues; the Danube island and the Alte Donau bathing areas are the best places to beat the heat.",
      9: "Highs around 21C, thinning crowds after the first week, and the start of the cultural season as the opera and concert halls reopen. Prices ease off and the weather stays reliable, making this the smart alternative to summer.",
      10: "Crisp 14C days and strong autumn color in the Prater and the palace parks. Tourist numbers drop noticeably after mid-month and hotel rates follow; National Day on October 26 brings free museum entry and military displays on Heldenplatz.",
      11: "Grey and cold with highs around 7C, the quietest stretch of the year until the Christmas markets open in the second half of the month. Late November is a sweet spot: the Rathausplatz market atmosphere without December weekend density.",
      12: "The Christmas markets run from mid-November to December 26, the biggest at Rathausplatz with hundreds of stalls, plus Belvedere, Schonbrunn, Spittelberg and Am Hof. Expect lows below freezing, mulled Punsch everywhere, heavy weekend crowds, and December hotel prices well above the winter norm.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 8 },
      2: { highC: 5, lowC: -1, rainyDays: 7 },
      3: { highC: 11, lowC: 2, rainyDays: 8 },
      4: { highC: 15, lowC: 6, rainyDays: 8 },
      5: { highC: 20, lowC: 10, rainyDays: 9 },
      6: { highC: 24, lowC: 14, rainyDays: 10 },
      7: { highC: 26, lowC: 16, rainyDays: 9 },
      8: { highC: 26, lowC: 15, rainyDays: 9 },
      9: { highC: 21, lowC: 11, rainyDays: 6 },
      10: { highC: 14, lowC: 7, rainyDays: 7 },
      11: { highC: 7, lowC: 3, rainyDays: 8 },
      12: { highC: 4, lowC: -1, rainyDays: 8 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "五つの地区、一つの環状道路。どこに泊まるかで、旅の「帝都らしさ」が決まる。",
    heroIntro:
      "ウィーンきっての名所は、リング(環状道路)の内側にぎゅっと集まっている。とはいえ、その周囲の地区はまるで違う速度で動いていて、静まり返った帝都の優雅さもあれば、宮殿が寝静まった後も開いているデザインショップやワインバーもある。どこに泊まるかで、旅がフォーマルで中心寄りになるか、トラムで少し足を延ばしたローカルで安上がりなものになるかが決まる。本ガイドでは、大聖堂の目の前からドナウ運河の向こうの落ち着いた通りまで、宿泊先として検討する価値のある五つの地区すべてを紹介する。",
    accent: { from: "#A83E5B", to: "#D9A441", ink: "#5E2438" },
    neighborhoodSlugs: [
      "innere-stadt",
      "leopoldstadt",
      "neubau",
      "mariahilf",
      "landstrasse",
    ],
    nearbyCitySlugs: ["prague", "budapest"],
  },

  neighborhoods: [
    {
      slug: "innere-stadt",
      citySlug: "vienna",
      name: "Innere Stadt (Old Town)",
      lat: 48.2085,
      lng: 16.3721,
      bestFor: ["first-time", "romantic"],
      vibe: "リング内側、シュテファン大聖堂とホーフブルク宮殿を取り囲む第1区は、帝都の中核。壮大な大通り、アーケード付きの中庭、そして誰もがウィーンと聞いて思い浮かべるカフェハウスが揃う。初めての訪問で見たいものはすべて徒歩15分圏内に収まり、夕方に店が閉まれば人混みもすぐに引いていく。値段より利便性を重視し、帝都の旅を丸ごと徒歩でまわりたいならここに泊まるといい。",
      pros: [
        "大聖堂、ホーフブルク宮殿、国立オペラ座、主要美術館すべて徒歩圏内",
        "あらゆるトラムと地下鉄路線が集まり、日帰り旅行にも便利",
        "2日間の滞在なら公共交通機関は一切不要",
      ],
      cons: [
        "ホテルも夕食も市内で最も値段が高い地区",
        "大聖堂やグラーベン周辺のレストランは眺めで勝負していて、味は二の次",
        "夕食が終わるとナイトライフは一気に静かになる",
      ],
    },
    {
      slug: "leopoldstadt",
      citySlug: "vienna",
      name: "Leopoldstadt",
      lat: 48.2167,
      lng: 16.3925,
      bestFor: ["local", "family", "budget"],
      vibe: "ドナウ運河を渡った第2区は、広大な緑地プラーター公園と、古きユダヤ系ウィーンの面影、トルコ・バルカン系の食料品店、そして急成長中のクリエイティブ層が入り混じるエリア。カルメリターマルクトを中心に、観光客向けに演出されていない、正真正銘ローカルな飲食シーンが広がる。宮殿から地下鉄一駅、中心部よりずっと安い料金で、公園と本物の生活感のある街を味わいたいならここに泊まるといい。",
      pros: [
        "プラーター公園、大観覧車リーゼンラート、長く続く運河沿いの遊歩道は家族連れにぴったり",
        "カルメリターマルクトとフォルケルトマルクトでは手頃な価格の地元料理が味わえる",
        "U1・U2線が速く、中心部までわずか一駅",
      ],
      cons: [
        "プラーター以外に大きな見どころがない地区",
        "駅周辺の通りは何の変哲もなく、未完成な印象を受けることもある",
        "夜は住宅街らしく静かで、遊びに出かけたい人には物足りない",
      ],
    },
    {
      slug: "neubau",
      citySlug: "vienna",
      name: "Neubau",
      lat: 48.2011,
      lng: 16.3489,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "ムゼウムスクヴァルティア(博物館地区)の裏手に広がる第7区は、ウィーンのデザイン好きが実際に暮らす街。シュピッテルベルクの石畳が続くビーダーマイヤー様式の小道にはワイン酒場やブティックが並び、ノイバウガッセにはコンセプトストア、自家焙煎のコーヒー店、小さなバーが軒を連ねる。主要美術館まで徒歩圏内でありながら、地元の人が実際に夜を過ごす街の空気が漂う。絵葉書のような景色の中で眠るのではなく、大きな見どころの近くにいたいならここに泊まるといい。",
      pros: [
        "ムゼウムスクヴァルティアと美術史美術館まで徒歩すぐ",
        "街で一番のインディペンデントショップ、自家焙煎コーヒー店、小皿料理のレストランが揃う",
        "気取らず賑やかなバー、ワイン酒場が夜を彩る",
      ],
      cons: [
        "第1区の見どころへは、徒歩か短いトラム移動が必要",
        "人気の一角は週末の夜になると騒がしくなる",
        "大型ホテルは少なく、アパートメントやブティック宿が中心",
      ],
    },
    {
      slug: "mariahilf",
      citySlug: "vienna",
      name: "Mariahilf",
      lat: 48.1969,
      lng: 16.3489,
      bestFor: ["budget", "local", "first-time"],
      vibe: "第6区は、市内で一番賑わうショッピングストリート、マリアヒルファー通り沿いに広がり、その下端には広大なナッシュマルクトが構える。実用性と個性のバランスが取れたエリアで、通りの上部には安心して泊まれる中価格帯ホテルが並び、市場の周りには屋台や土曜のフリーマーケットが立つ。手堅いコストパフォーマンスと、徒歩15分または地下鉄二駅で中心部へまっすぐ行けるアクセスが欲しいならここに泊まるといい。",
      pros: [
        "ナッシュマルクトの屋台と土曜のフリーマーケットがすぐそば",
        "信頼できる中価格帯からお手頃価格まで、宿の選択肢が最も豊富",
        "U3線で直通、中心部までは歩行者専用道でもアクセス可能",
      ],
      cons: [
        "メインのショッピングストリートは混雑時になると人であふれ、風情に欠ける",
        "坂の上のノイバウに比べると個性は薄い",
        "ナッシュマルクトのレストランは、屋台街というイメージより値が張る",
      ],
    },
    {
      slug: "landstrasse",
      citySlug: "vienna",
      name: "Landstrasse",
      lat: 48.1969,
      lng: 16.3947,
      bestFor: ["first-time", "family", "budget"],
      vibe: "リングの南東に位置する第3区は、ベルヴェデーレ宮殿とその整形庭園を取り囲み、フンダートヴァッサーハウスやロホウスマルクトが静かな住宅地の表情を添える。ヴィーン・ミッテ駅もこの地区にあり、空港列車で市内のどこよりも早く到着できる。ベルヴェデーレ宮殿とリングを徒歩圏内に置きながら、第1区より安い料金で泊まりたいならここがいい。",
      pros: [
        "ベルヴェデーレ宮殿とその庭園、クリムトの『接吻』まで数分",
        "ヴィーン・ミッテ駅から市内最速の空港アクセス",
        "中心部より静かで安いのに、そこまで歩いて行ける",
      ],
      cons: [
        "地区が広く、見どころからかなり歩くホテルもある",
        "ノイバウやレオポルトシュタットに比べると際立ったレストランは少ない",
        "夜を過ごす中心となる賑やかな一角がない",
      ],
    },
  ],

  pois: [
    {
      slug: "schonbrunn-palace",
      citySlug: "vienna",
      name: "Schonbrunn Palace",
      lat: 48.1849,
      lng: 16.3122,
      kind: "sight",
      needsBooking: true,
      tip: "Buy a timed-entry ticket online, since the palace admits by slot and same-day slots sell out by midday in season. Take the earliest slot around 8:30am or the last two hours of the day to dodge the tour-group peak; the vast gardens, the Gloriette hill and the maze are free, so save the paid interior for the Grand Tour and spend the rest outdoors.",
    },
    {
      slug: "hofburg",
      citySlug: "vienna",
      name: "Hofburg Palace",
      lat: 48.2065,
      lng: 16.3657,
      kind: "sight",
      needsBooking: true,
      tip: "The single Sisi Ticket covers the Imperial Apartments, the Sisi Museum and the Silver Collection here plus the Schonbrunn Grand Tour, so buy it once if you plan both palaces and skip two separate queues. Enter the Imperial Apartments right at 9am opening; the audioguide is included, and the courtyards, Heldenplatz and the arcades are free to walk through any time.",
    },
    {
      slug: "stephansdom",
      citySlug: "vienna",
      name: "St. Stephen's Cathedral (Stephansdom)",
      lat: 48.2085,
      lng: 16.3731,
      kind: "sight",
      needsBooking: false,
      tip: "The rear standing area is free, but the nave, the catacombs tour and the two towers each cost separately, so decide before you go in. The south tower's 343 steps give the better climb and skyline; the north tower has a lift to the Pummerin bell and shorter queues, and the tiled roof pattern is best photographed from the Stephansplatz corner opposite.",
    },
    {
      slug: "belvedere",
      citySlug: "vienna",
      name: "Belvedere Palace (Klimt's The Kiss)",
      lat: 48.1915,
      lng: 16.3809,
      kind: "museum",
      needsBooking: true,
      tip: "Book an Upper Belvedere timed ticket and go at 9am opening, because the room holding Klimt's The Kiss is the single most crowded spot in Vienna by late morning. See the Kiss first before doubling back through the rest of the collection, and skip the Lower Belvedere unless a special exhibition draws you; the formal gardens between the two palaces are free.",
    },
    {
      slug: "kunsthistorisches-museum",
      citySlug: "vienna",
      name: "Kunsthistorisches Museum",
      lat: 48.2039,
      lng: 16.3616,
      kind: "museum",
      needsBooking: true,
      tip: "The Bruegel room, the largest collection of his paintings anywhere, is the reason to come, so head upstairs to the picture gallery first before the tour groups arrive. Pause for coffee and cake under the domed cafe on the first floor, one of the grandest museum cafes in Europe; the ticket also covers the Imperial Treasury in the Hofburg on separate days if you buy the combined pass.",
    },
    {
      slug: "state-opera",
      citySlug: "vienna",
      name: "Vienna State Opera",
      lat: 48.2033,
      lng: 16.3691,
      kind: "experience",
      needsBooking: true,
      tip: "Standing-room tickets cost 13 to 18 EUR and go on sale about 80 minutes before curtain from the Operngasse side door, so join the queue at least an hour ahead for a good rail spot. Tie your scarf to the rail to hold your place, then step out; if you would rather sit, book seated tickets online weeks ahead, and note the opera closes for July and August.",
    },
    {
      slug: "naschmarkt",
      citySlug: "vienna",
      name: "Naschmarkt",
      lat: 48.1985,
      lng: 16.3639,
      kind: "food",
      needsBooking: false,
      tip: "Come before noon to browse the grocers, cheese counters and Middle Eastern stalls before the sit-down restaurants take over and the prices climb. The Saturday flea market at the Kettenbruckengasse end runs from around 6:30am to mid-afternoon and is the real draw; the market is closed Sundays, so plan your visit for a weekday morning or a Saturday.",
    },
    {
      slug: "prater-riesenrad",
      citySlug: "vienna",
      name: "Prater & Riesenrad",
      lat: 48.2166,
      lng: 16.3958,
      kind: "park",
      needsBooking: false,
      tip: "The park itself and its long chestnut avenue are free and open at all hours; only the Riesenrad ferris wheel and the fairground rides cost money. Ride the Riesenrad near sunset for the best light and shortest wait, or skip it and walk the Hauptallee instead, then eat at a garden restaurant like Schweizerhaus for Stelze and a half-litre of beer.",
    },
    {
      slug: "cafe-central",
      citySlug: "vienna",
      name: "Cafe Central",
      lat: 48.2103,
      lng: 16.3656,
      kind: "food",
      needsBooking: false,
      tip: "The vaulted hall is spectacular but the queue outside the door often runs 30 minutes at peak; arrive at 8am opening or after 3pm to walk straight in. Coffee-house etiquette means one Melange buys you the table for hours with no rush, so order a coffee and a slice of Sachertorte and linger; for the same ritual without the line, try Cafe Sperl or Cafe Landtmann nearby.",
    },
    {
      slug: "albertina",
      citySlug: "vienna",
      name: "Albertina",
      lat: 48.2043,
      lng: 16.3682,
      kind: "museum",
      needsBooking: true,
      tip: "Book online to skip the ticket line, then start with the permanent Monet-to-Picasso collection upstairs before the temporary blockbuster show pulls the crowds. The Habsburg state rooms on the way in are included and often overlooked; the terrace over the Opera and Albertinaplatz is free to step onto and gives a rare elevated view of the ring.",
    },
    {
      slug: "hundertwasserhaus",
      citySlug: "vienna",
      name: "Hundertwasserhaus",
      lat: 48.2071,
      lng: 16.3941,
      kind: "sight",
      needsBooking: false,
      tip: "It is a residential building, so you view the wavy facade and planted roofs only from the street, which takes ten minutes. Photograph it from the corner of Kegelgasse and Lowengasse for the full frame, then cross to the free Hundertwasser Village shopping arcade opposite; combine it with the nearby Kunst Haus Wien museum if you want the paid indoor version.",
    },
    {
      slug: "museumsquartier",
      citySlug: "vienna",
      name: "MuseumsQuartier",
      lat: 48.2035,
      lng: 16.3585,
      kind: "experience",
      needsBooking: false,
      tip: "The courtyard with its coloured Enzi loungers is free and open around the clock, a prime spot for a drink between museum visits; the Leopold Museum here holds the world's largest Egon Schiele collection and needs a separate ticket. Buy the combined MQ ticket only if you plan to hit both the Leopold and the mumok modern-art museum on the same day.",
    },
    {
      slug: "karlskirche",
      citySlug: "vienna",
      name: "Karlskirche",
      lat: 48.1985,
      lng: 16.3719,
      kind: "sight",
      needsBooking: false,
      tip: "The paid ticket includes a panoramic lift that rises inside the dome to within touching distance of the ceiling frescoes, which is the reason to pay entry rather than just admire the baroque facade from the reflecting pool outside. Go on a weekday morning when the lift has no queue; concerts of Vivaldi's Four Seasons run most evenings, but the daytime dome visit is the better value.",
    },
    {
      slug: "spanish-riding-school",
      citySlug: "vienna",
      name: "Spanish Riding School",
      lat: 48.2075,
      lng: 16.3665,
      kind: "experience",
      needsBooking: true,
      tip: "Full performances of the Lipizzaner stallions sell out weeks ahead and cost from around 25 EUR, but the morning training sessions are far cheaper at about 15 EUR and let you watch the same horses rehearse under the same baroque hall. Book the morning training online, arrive when doors open, and note there is no training on Mondays or during the summer stable holidays.",
    },
  ],

  itineraries: [
    {
      citySlug: "vienna",
      days: 2,
      summary:
        "Two days is enough for Vienna's imperial headline sights if you stay central and start early, but you will leave the museum quarter and the local districts barely touched. The center is compact inside the Ringstrasse: St. Stephen's Cathedral, the Hofburg and the State Opera sit within a fifteen-minute walk, and the trams close the loop. Base yourself in the Innere Stadt so both mornings start on foot. The structure that works is one imperial-city day and one palace day: day one for the cathedral, the Hofburg and a coffee house, day two out to Schonbrunn in the morning and the Belvedere for Klimt's Kiss in the afternoon. Book Schonbrunn and Belvedere timed tickets and the Hofburg Sisi Ticket online before you arrive, because queues and sold-out slots are the only real threat to a 48-hour visit. What you sacrifice is the Kunsthistorisches Museum, the MuseumsQuartier and any slow evening in Neubau, which is exactly what a third day buys. Eat off the cathedral square, not on it.",
      stayNeighborhoodSlug: "innere-stadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Imperial center and the Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Start at St. Stephen's Cathedral around 8:30am while the square is still quiet, walk the free rear nave, then climb the south tower's 343 steps for the tiled-roof skyline before the first tour groups land.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Walk ten minutes to the Hofburg and enter the Imperial Apartments and Sisi Museum at 9am opening with your pre-booked Sisi Ticket. The included audioguide carries you through the Habsburg court in about ninety minutes.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Lunch and coffee at Cafe Central a few minutes north; arrive after the noon rush, take a small plate and a Melange, and use the coffee-house rule that one coffee holds the table for as long as you like.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Cross back past the Hofburg to the Albertina for the Monet-to-Picasso collection and the Habsburg state rooms, then step onto the free terrace over the Opera for an elevated view of the ring.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Queue at the Operngasse side door of the State Opera about an hour before curtain for a 13 to 18 EUR standing-room ticket. Tie your scarf to the rail to hold the spot, then catch an act of whatever is on that night.",
              durationMin: 120,
            },
            {
              text: "Dinner at a traditional Beisl in the first district off the main squares, somewhere like Gmoakeller or Zum Schwarzen Kameel's bar, for Wiener Schnitzel and a glass of Gruner Veltliner without the Stephansplatz markup.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn and the Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Take the U4 metro to Schonbrunn and use your 8:30am timed slot for the Grand Tour of the palace interior before the coach groups arrive. Afterwards walk up to the free Gloriette hill for the classic view back over the palace.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Metro and tram across to the Upper Belvedere for your early-afternoon timed ticket and go straight to Klimt's The Kiss before the room fills, then work back through the rest of the collection.",
              durationMin: 120,
            },
            {
              text: "Walk down through the free formal gardens between the Upper and Lower Belvedere, the best no-ticket view in this part of the city, and out toward the ring for the walk back to your hotel.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Stop at Karlskirche on the way in and pay for the dome lift that rises to the ceiling frescoes; a weekday early evening usually has no queue for the panoramic platform.",
              durationMin: 60,
            },
            {
              text: "End with dinner near the Naschmarkt end of the sixth district, then a last floodlit loop past the Opera and the Hofburg gates, which are at their best empty after dark.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 3,
      summary:
        "Three days is the right amount of time for Vienna: enough for the palaces, the cathedral and the great museums at a humane pace, plus one evening that belongs to the city rather than the checklist. Two days forces you to sprint Schonbrunn and the Belvedere back to back; the third day adds the Kunsthistorisches Museum, the MuseumsQuartier and time to sit in a coffee house without watching the clock. Stay in Neubau, behind the museum quarter. It costs less than the first district, and its roasters, wine taverns and independent shops are where the city actually spends its evenings, a short walk from every major sight. The shape of the plan: day one for the inner-city ring and the Hofburg, day two for Schonbrunn and the Belvedere, day three for the museum quarter and a slow local afternoon. Book three things online before arrival: the Schonbrunn timed slot, the Belvedere timed slot and the Hofburg Sisi Ticket. Everything else in Vienna rewards showing up early rather than paying extra.",
      stayNeighborhoodSlug: "neubau",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Inner city ring and the Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "From Neubau walk or take the U3 to Stephansplatz and reach St. Stephen's Cathedral before 9am; do the free nave and the south tower climb while the square is still empty.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Walk the Graben and Kohlmarkt to the Hofburg and enter the Imperial Apartments and Sisi Museum at opening with your Sisi Ticket, the included audioguide pacing the Habsburg rooms.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Coffee-house lunch at Cafe Central just north of the Hofburg; go after the noon queue thins, order a Melange and Sachertorte, and settle in without any pressure to leave.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Take the pre-booked Albertina next for the Monet-to-Picasso rooms and the state apartments, finishing on the free terrace above the Opera and Albertinaplatz.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Queue at the Operngasse door of the State Opera an hour before curtain for a standing-room ticket, tie your scarf to the rail, and take in an act; the whole ritual runs well under 20 EUR.",
              durationMin: 120,
            },
            {
              text: "Walk back into Neubau for dinner among the Spittelberg lanes, where Biedermeier wine taverns and small-plate bistros serve better and cheaper than anything on Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn and the Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Ride the U4 to Schonbrunn for an 8:30am slot on the Grand Tour before the coaches arrive, then climb to the free Gloriette for the postcard view down over the palace and gardens.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Cross the city to the Upper Belvedere for an early-afternoon timed ticket and head straight to Klimt's The Kiss before the crowd builds, then take the rest of the Austrian collection at leisure.",
              durationMin: 120,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Walk fifteen minutes east to the Hundertwasserhaus for the wavy facade and roof gardens, best framed from the Kegelgasse corner, then look into the free Hundertwasser Village arcade opposite.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Head to Karlskirche and take the dome lift to the frescoes; a weekday early evening usually means no queue for the panoramic platform inside the cupola.",
              durationMin: 60,
            },
            {
              text: "Dinner around the Naschmarkt or lower Mariahilf, then a nightcap back in Neubau; the district's small bars stay lively later than the quiet first-district streets.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museum quarter and a local afternoon",
          morning: [
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Be at the Kunsthistorisches Museum for opening and go straight upstairs to the Bruegel room, the largest anywhere, before the groups arrive, then pause for coffee under the grand domed cafe on the first floor.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Cross to the MuseumsQuartier courtyard for a drink on the coloured Enzi loungers, then pick one museum inside: the Leopold for the world's largest Schiele collection, or mumok for modern art.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Walk down to the Naschmarkt for a late graze through the grocers and food stalls; a weekday afternoon is calmer than the Saturday flea-market crush, though the sit-down places are pricier than they look.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Spend the golden hour on Neubaugasse and the Spittelberg lanes, browsing roasters and design shops as the district wakes up for the evening.",
              durationMin: 60,
            },
            {
              text: "Last dinner at a Neubau Beisl or natural-wine bar, the modern Viennese counterpoint to the imperial cafes, with schnitzel or seasonal small plates and a bottle of Austrian white.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 4,
      summary:
        "Four days is more than enough for Vienna's sights, and that is the point: the fourth day converts a monument sprint into an actual trip. Days one to three cover the inner-city ring, the Hofburg, Schonbrunn, the Belvedere and the great museums at a relaxed pace; day four is a slow one across the Danube Canal in Leopoldstadt, built around the Prater, the local markets and the long coffee-house ritual the imperial pace never allows. With this much time, stay in Leopoldstadt: it is one metro stop from the old town, cheaper for equivalent rooms, and its Karmelitermarkt cafes and the green Prater are the reason the fourth day exists. The imperial-day logic still holds: keep Schonbrunn and the Belvedere on their own day, keep the museum quarter together, and do not zigzag across the ring. Pre-book the Schonbrunn slot, the Belvedere slot and the Hofburg Sisi Ticket, and add a Spanish Riding School morning training session if you want the Lipizzaners cheaply. If you were choosing between three and four days, the fourth is the one you will remember.",
      stayNeighborhoodSlug: "leopoldstadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Inner city ring and the Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Take the U1 one stop from Leopoldstadt to Stephansplatz and reach St. Stephen's Cathedral by 8:30am; do the free nave and the south tower climb before the square fills.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Walk the Graben to the Hofburg and enter the Imperial Apartments and Sisi Museum at opening with your Sisi Ticket, letting the included audioguide set the pace through the Habsburg rooms.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Coffee-house lunch at Cafe Central; arrive after the noon queue, order a Melange, and use the one-coffee-holds-the-table rule to slow the day down.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Visit the Albertina for the Monet-to-Picasso collection and the state rooms, finishing on the free terrace over the Opera for the elevated ring view.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Queue at the Operngasse door of the State Opera an hour before curtain for a standing-room ticket under 20 EUR, hold your rail spot with a scarf, and watch an act.",
              durationMin: 120,
            },
            {
              text: "Ride the U1 back over the canal for dinner at a Leopoldstadt Beisl near Karmelitermarkt, where local kitchens serve schnitzel and Austrian wine at neighbourhood prices.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn and the Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Ride out to Schonbrunn on the U4 for an 8:30am Grand Tour slot ahead of the coaches, then walk up to the free Gloriette hill for the classic view down over the palace and its parterre.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Cross to the Upper Belvedere for an early-afternoon timed ticket and go straight to Klimt's The Kiss before the room clogs, then take the rest of the Austrian collection slowly.",
              durationMin: 120,
            },
            {
              text: "Walk the free formal gardens down to the Lower Belvedere and out toward the ring, the best no-ticket vista in this quarter, with the city skyline framed behind the parterre.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Stop at Karlskirche for the dome lift to the frescoes; a weekday evening usually has no queue for the panoramic platform inside the cupola.",
              durationMin: 60,
            },
            {
              text: "Dinner around the Naschmarkt or Mariahilf, then a slow walk back over the canal to Leopoldstadt as the ring lights come up.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museum quarter and imperial extras",
          morning: [
            {
              poiSlug: "spanish-riding-school",
              text: "Book a morning training session at the Spanish Riding School, about 15 EUR against 25-plus for a full show, and watch the Lipizzaner stallions rehearse under the baroque hall; there is no training on Mondays.",
              durationMin: 90,
            },
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Walk to the Kunsthistorisches Museum and go upstairs to the Bruegel room first, then break for coffee and cake under the domed first-floor cafe.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Cross to the MuseumsQuartier for a drink on the Enzi loungers, then pick one interior: the Leopold Museum for the largest Schiele collection or mumok for modern art.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Wind down at the Naschmarkt with a late graze through the food stalls; a weekday afternoon is the calm window between the lunch rush and closing.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Golden hour on Neubaugasse and through the Spittelberg lanes, browsing roasters and design shops before dinner.",
              durationMin: 60,
            },
            {
              text: "Dinner at a Neubau natural-wine bar or Beisl for the modern Viennese side of the city, then the short U-Bahn hop back to Leopoldstadt.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Prater, Leopoldstadt and the coffee-house day",
          morning: [
            {
              text: "Start slow at Karmelitermarkt in Leopoldstadt, where the stalls and local cafes run a relaxed morning, especially the Saturday market; take breakfast at a market cafe rather than a first-district tourist one.",
              durationMin: 90,
            },
            {
              poiSlug: "prater-riesenrad",
              text: "Walk into the Prater and down the long chestnut Hauptallee, both free and open at all hours, then ride the Riesenrad ferris wheel for the view over the city and the Danube.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lunch at a Prater garden restaurant like Schweizerhaus for Stelze and a half-litre of beer under the trees, the classic Viennese warm-weather meal.",
              durationMin: 105,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Cross south to the Hundertwasserhaus for the wavy facade and roof gardens, framed from the Kegelgasse corner, and a look into the free Hundertwasser Village arcade opposite.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Return to a grand coffee house for the last long sit of the trip: Cafe Landtmann or Cafe Sperl for a Melange and a slice of torte, no rush, the way the ritual is meant to work.",
              durationMin: 90,
            },
            {
              text: "Last dinner back in Leopoldstadt near the canal, then a final walk along the water with the illuminated first-district skyline across it.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default vienna;

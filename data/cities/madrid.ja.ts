import type { CityData } from "../types";

const madrid: CityData = {
  city: {
    slug: "madrid",
    name: "マドリード",
    country: "スペイン",
    countrySlug: "spain",
    lat: 40.4168,
    lng: -3.7038,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "MAD",
    airportToCenter:
      "Metro line 8 from Barajas runs to Nuevos Ministerios in about 30 min, but note the 3 EUR airport supplement on top of the fare, so budget roughly 4.50 to 5 EUR. Alternatives: the 24-hour Airport Express bus to Atocha for about 5 EUR, or the Cercanias C1 commuter train from T4 to central stations.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Cold and dry with highs around 10C and frosty mornings, and the city is quiet after the January 6 Three Kings parade, the biggest kids' event of the Spanish Christmas. Hotel rates sit at their yearly low, and the free evening museum windows at the Prado and Reina Sofia are blissfully uncrowded.",
      2: "Still cold near 12C but often bright and sunny, with the fewest tourists of the year and the cheapest beds. A good month for the art triangle: use the free last-two-hours slots at the Prado and Reina Sofia without the spring queues.",
      3: "Highs climb toward 16C and terraces reopen on sunny afternoons, though evenings stay chilly. If Semana Santa falls in late March, expect solemn Holy Week processions and a jump in domestic visitors and hotel prices the week before Easter.",
      4: "One of the best months at 18C, green and mild, with Retiro in bloom and comfortable all-day walking. Easter often lands here, so Semana Santa processions and higher prices can hit whichever week Holy Week falls in; book around it or into it deliberately.",
      5: "Prime Madrid: warm at 23C, long light, and the San Isidro festival in mid-May fills the city with concerts, verbenas and locals in traditional dress around La Latina and Las Vistillas. Crowds and prices are up, so book the Prado and Royal Palace ahead.",
      6: "Warm to hot at 29C with long evenings and the terrace season in full swing, before the real furnace arrives. Crowds are heavy at the big museums, so take the free evening slots or the 9am opening, and keep afternoons for shade.",
      7: "Hot and dry, regularly over 34C, and early July brings Orgullo, the huge Madrid Gay Pride around Chueca that is one of Europe's biggest, packing the center for a week. Sightsee before noon, hide from the 3-7pm heat, and dine late like everyone else.",
      8: "The emptiest and hottest month: highs push 35C and many local bars and family restaurants shut for the holidays as Madrilenos leave for the coast. The Veranos de la Villa culture program keeps some open-air concerts and cinema going, but this is the month to skip unless cheap beds outweigh the heat.",
      9: "Heat eases through the month from around 30C to pleasant, the city refills as locals return, and terraces stay busy into the night. Crowds relax after the first week, making mid-to-late September arguably the finest window of the year.",
      10: "Warm days near 22C, golden light in Retiro, and the first light rains returning late in the month. Crowds thin noticeably and hotel value improves, a strong shoulder-season pick for walking the whole center comfortably.",
      11: "Cool at 15C with more grey and wet days, but bright spells between fronts and the quietest big sights of the autumn. Low-season pricing returns and you can often book the Royal Palace or a Bernabeu tour just days ahead.",
      12: "Cold near 10C but festive, with lights strung across Gran Via and the center, and Puerta del Sol the epicenter of New Year's Eve when crowds eat twelve grapes on the twelve chimes. Quiet until the Christmas-to-New-Year stretch, when rates climb and the free museum evenings draw local crowds.",
    },
    climate: {
      1: { highC: 10, lowC: 3, rainyDays: 5 },
      2: { highC: 12, lowC: 3, rainyDays: 4 },
      3: { highC: 16, lowC: 5, rainyDays: 4 },
      4: { highC: 18, lowC: 7, rainyDays: 7 },
      5: { highC: 23, lowC: 11, rainyDays: 6 },
      6: { highC: 29, lowC: 16, rainyDays: 3 },
      7: { highC: 34, lowC: 19, rainyDays: 1 },
      8: { highC: 34, lowC: 19, rainyDays: 1 },
      9: { highC: 28, lowC: 15, rainyDays: 3 },
      10: { highC: 22, lowC: 10, rainyDays: 6 },
      11: { highC: 15, lowC: 6, rainyDays: 6 },
      12: { highC: 10, lowC: 3, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 135, high: 270 },
    tagline: "遅い夜と壮大な美術館の上に築かれた首都。5つのバリオがそれぞれ異なる方向へ引っ張り合い、どこを選ぶかで滞在全体の色が決まる。",
    heroIntro:
      "マドリードには、世界屈指のアート・トライアングル、優雅なハプスブルク様式の旧市街、そして夜10時前にはまず始まらないタパス文化が詰まっている。この街では距離そのものより、どのバリオを選ぶかのほうがずっと重要だ。このガイドでは、絵葉書そのままの中心地セントロから、タパス横丁のラ・ラティーナまで、泊まる価値のある5つの地区を比較し、それぞれでその宿泊料金に見合う一軒のホテルを紹介する。",
    accent: { from: "#C42E3A", to: "#E8A33D", ink: "#6E1F28" },
    neighborhoodSlugs: ["centro", "la-latina", "malasana", "chueca", "salamanca"],
    nearbyCitySlugs: ["seville", "barcelona"],
  },

  neighborhoods: [
    {
      slug: "centro",
      citySlug: "madrid",
      name: "Centro (Sol and Habsburg core)",
      lat: 40.4155,
      lng: -3.7074,
      bestFor: ["first-time", "family"],
      vibe: "プエルタ・デル・ソル、マヨール広場、王宮を囲むこの一角には、マドリードの主要な見どころがすべて徒歩10分圏内に収まっており、数ブロック北にはグラン・ビアの店やシアターが並ぶ。ここは日中はもちろん夜遅くまで、街で最も騒がしく混み合うエリアで、主要な広場の周りには団体バス、土産物の屋台、観光客向けの定食(メヌ・デル・ディア)店が軒を連ねる。滞在が短く、住所そのものより1時間1時間が惜しいなら、そして移動時間ゼロと引き換えに静けさを差し出せるなら、ここを選びたい。マドリードの玄関口であって、落ち着いた一角ではない。",
      pros: [
        "マヨール広場、王宮、プエルタ・デル・ソル、グラン・ビアがすべて徒歩10分圏内",
        "ソル駅のセルカニアスと地下鉄のハブの真上にあり、市内で最も交通の便がいい拠点",
        "昼も夜も、タパス・バーや屋台には事欠かない",
      ],
      cons: [
        "マドリードで最も観光客が密集するエリアで、ソルとグラン・ビアではスリの被害も多い",
        "路上の騒音は深夜過ぎまで続き、眠りが浅い人には向かない",
        "主要な広場に面したレストランは、料理ではなく立地に対して値段を取っている",
      ],
    },
    {
      slug: "la-latina",
      citySlug: "madrid",
      name: "La Latina",
      lat: 40.4109,
      lng: -3.7108,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "マヨール広場の南、マドリード最古の路地は、隙間なく並ぶカバ・バハのタパス・バーと、日曜に広がるエル・ラストロ市場の間を縫うように延びている。地元の人々はここを観光客向けではない本物のタパス巡りの場と見ており、市場の屋台が片付いた後もベルモットと小皿料理の儀式は長く続く。美術館の眺めよりも本格的なバー巡りを重視し、マヨール広場や王宮へはエレベーターより自分の足で歩いていきたいなら、ここを選びたい。週末は、中心部で最も賑やかで地元らしい夜になる。",
      pros: [
        "カバ・バハとカバ・アルタには、マドリードで最も密集した最高のタパス・バー街がある",
        "マヨール広場と王宮まで平坦な道を徒歩10分",
        "日曜の朝はエル・ラストロ市場、その後は本格的なベルモット・タイムが待っている",
      ],
      cons: [
        "木曜から日曜の夜は、バー街周辺が本当に騒がしくなる",
        "古い建物が多いため、部屋は狭く、階段は急で、エレベーターがないこともしばしば",
        "日曜は市場の人混みで、午後遅くまで路地が混雑する",
      ],
    },
    {
      slug: "malasana",
      citySlug: "madrid",
      name: "Malasana",
      lat: 40.4258,
      lng: -3.7038,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "グラン・ビアの北側、1980年代のムービダ(文化運動)を生んだこの一帯は、今ではヴィンテージ古着店、小規模焙煎のコーヒー店、インディー系バーがドス・デ・マヨ広場の周りにひしめいている。若々しく多少荒削りな雰囲気で、中心部のどこよりも夜更けまで賑わい、夜を埋めるのは観光名所ではなくキッチンやカクテルバーだ。行動範囲内で最もお得な宿を求め、週末は窓から漏れ聞こえる音楽を受け入れられるなら、ここを選びたい。絵葉書どおりのマドリードが恋しくなったら、歴史地区までは徒歩10分。",
      pros: [
        "市内で最も充実した独立系バー、カフェ、ヴィンテージショップの一帯",
        "グラン・ビアと歴史地区まで徒歩10分",
        "同程度の中心立地でありながら、ソルやサラマンカより宿泊料金が安い",
      ],
      cons: [
        "週末の夜は広場周辺が賑やかになり、午前3時を過ぎても静まらない",
        "地区内には定番の観光名所がほとんどない",
        "パーティー好きの客が集まるため、深夜には荒っぽくなる通りもある",
      ],
    },
    {
      slug: "chueca",
      citySlug: "madrid",
      name: "Chueca",
      lat: 40.4224,
      lng: -3.6968,
      bestFor: ["nightlife", "local", "romantic"],
      vibe: "グラン・ビアのすぐ北東、マドリードのLGBTQ+地区は、デザイン系ブティック、ワインバー、プラサ・デ・チュエカ周辺にあふれるレストランのテーブルで成り立っており、7月上旬の巨大なプライドイベント「オルグージョ」の中心地にもなる。とがった雰囲気というより洗練されて社交的で、荒っぽいバー巡りというよりは、美味しい夕食と遅い時間のカクテルに近い。ティッセン美術館とグラン・ビアまで徒歩15分、そして深夜2時に帰宅しても居心地よく感じられる場所を求めるなら、ここを選びたい。プライド週間以外は、混沌に陥ることなく賑やかな夜を過ごせる。",
      pros: [
        "優れたレストラン、カクテルバー、デザイン系ブティックが密集する一帯",
        "グラン・ビア、ティッセン美術館、レティーロ公園まで徒歩15分",
        "居心地よく社交的なナイトライフで、7月のプライド週間には最高潮に達する",
      ],
      cons: [
        "プラサ・デ・チュエカは週末とプライド週間中、本当に騒がしくなる",
        "ホテルもレストランも、中心部の中で特に値段が高い部類に入る",
        "地区内の通りに大きな観光名所はほとんどない",
      ],
    },
    {
      slug: "salamanca",
      citySlug: "madrid",
      name: "Salamanca",
      lat: 40.4302,
      lng: -3.6795,
      bestFor: ["romantic", "family"],
      vibe: "レティーロ公園の北東に広がるサラマンカは、石畳の趣きの代わりに落ち着いた大通り、セラーノ通り沿いの高級ショッピング、そして目に見えて静かな夜の眠りを提供する。ここはマドリードのおしゃれ地区で、タパス・バーや通りの騒音の代わりに、洗練されたレストランとドアマンがある。旧市街まで千鳥足で帰れる距離よりも、広さ、安全さ、洗練さを重視するなら選びたい。レティーロ公園やプラド美術館へは今も徒歩圏内か地下鉄一駅で行ける。ここでの夜遊びとは、バー巡りではなく、上質な夕食を意味する。",
      pros: [
        "広く落ち着いた優雅な通りが続き、セラーノ通り沿いには高級ショップが並ぶ",
        "レティーロ公園とプラド美術館まで徒歩圏内で、地下鉄の便も良い",
        "旧市街のような騒々しさとは無縁の、安定して質の高い高級ダイニング",
      ],
      cons: [
        "ホテルも店もレストランも、市内で最も高い部類の値段",
        "日が沈むと、賑やかというよりは住宅地らしく格式ばった雰囲気になる",
        "ハプスブルク様式の旧市街までは徒歩20分か地下鉄一駅",
      ],
    },
  ],

  pois: [
    {
      slug: "prado-museum",
      citySlug: "madrid",
      name: "Prado Museum",
      lat: 40.4138,
      lng: -3.6921,
      kind: "museum",
      needsBooking: true,
      tip: "Entry is free in the last two hours (Monday to Saturday 18:00-20:00, Sunday 17:00-19:00), but queues form well before, so arrive 30 to 45 minutes early. If you go paid, book a timed slot online, head straight to Velazquez's Las Meninas and the Goya black paintings first, and reckon on two to three hours minimum for the highlights.",
    },
    {
      slug: "reina-sofia",
      citySlug: "madrid",
      name: "Reina Sofia Museum",
      lat: 40.4079,
      lng: -3.6946,
      kind: "museum",
      needsBooking: true,
      tip: "Guernica is the reason to come, and it lives in Room 205. Entry is free on weekday evenings (Monday and Wednesday to Saturday 19:00-21:00) and Sunday afternoon from 12:30, but it is closed Tuesdays entirely; book online to skip the line, go to Picasso's canvas first, then work outward to Dali and Miro.",
    },
    {
      slug: "thyssen-bornemisza",
      citySlug: "madrid",
      name: "Thyssen-Bornemisza Museum",
      lat: 40.4160,
      lng: -3.6948,
      kind: "museum",
      needsBooking: true,
      tip: "The third point of the art triangle fills the gaps the Prado and Reina Sofia leave: Impressionists, Old Masters and 20th-century works in one walkable collection. It is free on Monday afternoons (12:00-16:00) for the permanent collection; book online otherwise, start on the top floor and descend chronologically to save your legs.",
    },
    {
      slug: "royal-palace",
      citySlug: "madrid",
      name: "Royal Palace (Palacio Real)",
      lat: 40.4179,
      lng: -3.7143,
      kind: "sight",
      needsBooking: true,
      tip: "Book online to skip the long ticket line, and check the site first because the palace closes to visitors at short notice for state ceremonies. Aim for the 10am opening, do the state rooms and the Royal Armoury, then cross to the free Almudena Cathedral and the Sabatini Gardens next door.",
    },
    {
      slug: "retiro-park",
      citySlug: "madrid",
      name: "Retiro Park and Crystal Palace",
      lat: 40.4152,
      lng: -3.6844,
      kind: "park",
      needsBooking: false,
      tip: "Free and open from dawn; enter at the Puerta de Alcala end and walk to the boating lake, where rowboats cost about 6 EUR for 45 minutes with the shortest queues before noon. The Palacio de Cristal, a glass pavilion staging free contemporary-art installations, sits deeper in the park and is the one thing not to miss.",
    },
    {
      slug: "plaza-mayor",
      citySlug: "madrid",
      name: "Plaza Mayor",
      lat: 40.4155,
      lng: -3.7074,
      kind: "sight",
      needsBooking: false,
      tip: "The grand 17th-century arcaded square is free and best early morning or after dinner when the daytime crush thins. Do not sit at the terrace cafes on the square itself, where the markup is brutal; instead grab the local street snack, a bocadillo de calamares, from a bar on nearby Calle Botoneras.",
    },
    {
      slug: "puerta-del-sol",
      citySlug: "madrid",
      name: "Puerta del Sol",
      lat: 40.4169,
      lng: -3.7033,
      kind: "sight",
      needsBooking: false,
      tip: "The literal center of Spain, marked by Kilometre Zero in the pavement, and the square where crowds eat twelve grapes on the twelve New Year's Eve chimes. It is a transit and orientation hub more than a lingering spot, so pass through, find the bear-and-strawberry-tree statue, and keep your bag zipped in the crowds.",
    },
    {
      slug: "gran-via",
      citySlug: "madrid",
      name: "Gran Via",
      lat: 40.4200,
      lng: -3.7025,
      kind: "sight",
      needsBooking: false,
      tip: "Madrid's early-20th-century grand boulevard is best walked at dusk when the shopfronts and the Metropolis building's dome light up. It is a prime pickpocket strip, so keep bags zipped and phones away from the edge of the pavement; for the classic rooftop view, the Circulo de Bellas Artes terrace nearby charges about 5 EUR.",
    },
    {
      slug: "mercado-de-san-miguel",
      citySlug: "madrid",
      name: "Mercado de San Miguel",
      lat: 40.4153,
      lng: -3.7090,
      kind: "food",
      needsBooking: false,
      tip: "The restored iron-and-glass market beside Plaza Mayor is a gourmet tapas hall, more polished and pricier than local bars, so treat it as a grazing stop rather than a full meal. Go around noon or mid-afternoon to avoid the 8pm crush, buy two or three tapas from different stalls, and eat standing, as there is little seating.",
    },
    {
      slug: "temple-of-debod",
      citySlug: "madrid",
      name: "Temple of Debod",
      lat: 40.4240,
      lng: -3.7176,
      kind: "viewpoint",
      needsBooking: false,
      tip: "This genuine ancient Egyptian temple, gifted to Spain and reassembled in a park, is Madrid's free classic sunset spot, with the stone reflected in its pool and the sky over the Casa de Campo behind. Come 30 minutes before sundown for a good position at the railing; it gets busy, and the interior has limited free timed entry (closed Mondays).",
    },
    {
      slug: "el-rastro",
      citySlug: "madrid",
      name: "El Rastro flea market",
      lat: 40.4085,
      lng: -3.7075,
      kind: "experience",
      needsBooking: false,
      tip: "Madrid's huge open-air flea market runs Sunday mornings only, roughly 9am to 3pm, spilling down Calle Ribera de Curtidores and the La Latina lanes. Come before 11am to beat the crush, keep valuables in a front pocket because it is prime pickpocket territory, and finish with a vermouth in a Cava Baja bar as the locals do.",
    },
    {
      slug: "plaza-de-cibeles",
      citySlug: "madrid",
      name: "Plaza de Cibeles",
      lat: 40.4192,
      lng: -3.6931,
      kind: "sight",
      needsBooking: false,
      tip: "The fountain-and-palace junction is a free landmark, and Real Madrid fans gather at the Cibeles fountain to celebrate titles. Climb the Palacio de Cibeles for its rooftop mirador (about 3 EUR) for a wide view down the Paseo del Prado; it sits on the walk between the Prado and Gran Via, so slot it in between.",
    },
    {
      slug: "cava-baja-tapas",
      citySlug: "madrid",
      name: "Cava Baja tapas crawl (La Latina)",
      lat: 40.4113,
      lng: -3.7098,
      kind: "food",
      needsBooking: false,
      tip: "Cava Baja is the single best tapas street in Madrid, a run of old taverns where you order one or two plates and a drink at each, then move on. Start around 9pm when kitchens hit their stride, stand at the bar rather than take a table, and try the classics: gambas al ajillo, croquetas and a caña of beer.",
    },
    {
      slug: "santiago-bernabeu",
      citySlug: "madrid",
      name: "Santiago Bernabeu stadium tour",
      lat: 40.4531,
      lng: -3.6883,
      kind: "experience",
      needsBooking: true,
      tip: "The Real Madrid stadium tour and museum is a self-guided visit taking pitchside seats, the dressing rooms and the trophy room; book online for a timed slot, as walk-up tickets sell out on match weekends. It is closed to tours on matchdays and often the day before, so check the fixture calendar before you go; the metro drops you at Santiago Bernabeu on line 10.",
    },
  ],

  itineraries: [
    {
      citySlug: "madrid",
      days: 2,
      summary:
        "Two days covers Madrid's essentials, but it is a rush and you will feel the compression, because the city really wants three. In 48 hours you can do the art triangle on day one (the Prado, then the Reina Sofia for Guernica, with Retiro between them) and the Habsburg old town on day two (the Royal Palace, Plaza Mayor, Sol, and San Miguel), ending each night on tapas in La Latina. What breaks a short trip is timing: use the Prado's free last two hours or book a slot, and reserve the Royal Palace online so a queue does not eat your morning. Base yourself in Centro so both days start on foot and dinner is always steps away. What you sacrifice at this pace is the Thyssen, a full barrio day, Salamanca, the Bernabeu, and any day trip, so this suits a weekend break or a first taste. If you can add a third day, take it: three days is where Madrid stops feeling like a sprint.",
      stayNeighborhoodSlug: "centro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The art triangle: Prado, Retiro, Reina Sofia",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Start at the Prado for the 10am opening on a booked timed slot, going straight to Velazquez's Las Meninas and the Goya black paintings before the galleries fill. Two to three hours covers the headline masterpieces without a forced march.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              text: "Lunch on the Paseo del Prado side or up toward Anton Martin, then keep the meal light because dinner runs late in Madrid. A menu del dia at a neighborhood bar is the value option.",
              durationMin: 75,
            },
            {
              poiSlug: "retiro-park",
              text: "Walk into Retiro Park behind the Prado for the afternoon, taking a rowboat on the lake and threading back to the Palacio de Cristal glass pavilion. It is the green breather between two big museums.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Take the Reina Sofia in its free weekday-evening window (19:00-21:00, closed Tuesdays), heading straight to Room 205 for Picasso's Guernica before circling out to Dali and Miro. Arrive a little early, as the free slot draws a queue.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Walk to La Latina for a Cava Baja tapas crawl from around 9pm, ordering a plate and a drink at each bar and moving on. Gambas al ajillo, croquetas and a cana, standing at the counter like the locals.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Habsburg Madrid: Royal Palace, Plaza Mayor, Sol, San Miguel",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Be at the Royal Palace for the 10am opening on a pre-booked ticket, checking the night before that it is not closed for a state event. Do the state rooms and the Royal Armoury, then step out to the free Almudena Cathedral and Sabatini Gardens next door.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Graze lunch at Mercado de San Miguel beside Plaza Mayor, buying two or three tapas from different stalls and eating standing. It is pricier than a local bar, so treat it as a tasting rather than a full sit-down meal.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-mayor",
              text: "Cross into Plaza Mayor to take in the arcaded 17th-century square, then thread the old lanes to Puerta del Sol and the Kilometre Zero marker at the center of Spain. Keep your bag zipped through the crowds here.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Walk up to the Temple of Debod 30 minutes before sunset for Madrid's free classic viewpoint, the ancient Egyptian stone mirrored in its pool against the sky over Casa de Campo. Get a spot at the railing early, as it gets busy.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Drop down to Gran Via as the boulevard lights up, walking its early-20th-century facades toward the Metropolis dome. Dinner in the center or back in La Latina, keeping phones and bags secure on this pickpocket-prone strip.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 3,
      summary:
        "Yes, three days is the right length for Madrid, and it is what we recommend for a first visit. Three days lets you split the trip cleanly: the art triangle gets a full day (the Prado, Reina Sofia for Guernica, and the Thyssen to fill the gaps), the Habsburg old core gets its own day (the Royal Palace, Plaza Mayor, Sol, San Miguel, and Temple of Debod at sunset), and a lively barrio gets the third (La Latina, El Rastro if it is Sunday, and Malasana). You eat well across three neighborhoods, fit both the free museum evenings and proper late tapas nights, and still move at a pace that lets you sit in a plaza. What still gets cut is Salamanca, the Bernabeu, and a Toledo or Segovia day trip, which is exactly what a fourth day adds. Stay in Malasana for its independent bars, coffee and value while staying ten minutes from the center. Use the Prado's free last two hours or book a slot, and reserve the Royal Palace online before you go.",
      stayNeighborhoodSlug: "malasana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The art triangle: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Open the trip at the Prado's 10am slot, booked ahead, and make straight for Las Meninas and Goya's black paintings before the crowds build. Give it two and a half to three hours for the masterpieces; less and you are jogging past them.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Lunch on the Paseo del Prado, then take the Thyssen-Bornemisza across the boulevard, free on Monday afternoons for the permanent collection. Start on the top floor with the Old Masters and descend chronologically to the Impressionists and 20th century.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Walk into Retiro behind the museums for late-afternoon air, taking a rowboat on the lake and looping to the Palacio de Cristal. It resets your legs between the day's two art blocks.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Take the Reina Sofia in its free evening window (19:00-21:00, closed Tuesdays), going first to Room 205 for Guernica before Dali and Miro. Arrive early, as the free slot draws a line at the door.",
              durationMin: 90,
            },
            {
              text: "Dinner near Anton Martin or back up toward Malasana, easing into the late Madrid rhythm with tapas rather than a heavy sit-down meal. Kitchens are only warming up at 9pm here.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Habsburg Madrid: Royal Palace, Plaza Mayor, Sol, sunset at Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Be at the Royal Palace for 10am on a pre-booked ticket, having checked it is not shut for a state ceremony. Do the state rooms and the Royal Armoury, then cross to the free Almudena Cathedral and the Sabatini Gardens.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Graze an early lunch at Mercado de San Miguel by Plaza Mayor, buying a few tapas from different stalls and eating standing. Keep it light, as this is a tasting stop, not the main meal of the day.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Take in Plaza Mayor's arcaded square, then walk the old lanes to Puerta del Sol and the Kilometre Zero marker at the geographic center of Spain. Keep your bag zipped through the Sol crowds.",
              durationMin: 75,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Stroll down to Plaza de Cibeles for the fountain and palace, and pay the few euros to ride up the Palacio de Cibeles mirador for a wide view along the Paseo del Prado. It bridges the old core and the boulevards.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Walk to the Temple of Debod for sunset, arriving 30 minutes early for a railing spot as the ancient Egyptian stone catches the last light over Casa de Campo. This is the free classic Madrid sundown.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Come back through a lit-up Gran Via, walking the grand facades toward the Metropolis dome, then dinner in the center. Keep phones and bags secure on this pickpocket-heavy stretch.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "The barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "If it is Sunday, dive into El Rastro before 11am while it is walkable, working down Ribera de Curtidores through the La Latina lanes with valuables in a front pocket. Any other day, spend the morning wandering La Latina's medieval streets and squares instead.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cava-baja-tapas",
              text: "Settle into La Latina for a long lunch, doing a Cava Baja and Cava Alta crawl with a vermouth as the market winds down, in the Sunday tradition. One or two plates a bar, standing at the counter, then move on.",
              durationMin: 120,
            },
            {
              text: "Walk north into Malasana for the afternoon, browsing the vintage shops and third-wave coffee around Plaza del Dos de Mayo. This is where the 1980s Movida began and where the city still feels youngest.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Aperitivo and dinner in Malasana or neighboring Chueca, hopping between small kitchens and cocktail bars as the neighborhoods fill up. Book anywhere with a name, as the good tables go by 9:30 on weekends.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 4,
      summary:
        "Four days is the sweet spot for a first visit to Madrid, turning a three-day sprint into a proper holiday with room to breathe. Days one to three cover the essentials: the art triangle (Prado, Reina Sofia for Guernica, Thyssen), the Habsburg old core (Royal Palace, Plaza Mayor, Sol, Temple of Debod), and a barrio day through La Latina, El Rastro and Malasana. Day four is the release valve, and you have real choices: elegant Salamanca and Serrano shopping paired with a Bernabeu stadium tour, or a full day trip to Toledo, 33 minutes by high-speed train, or to Segovia for its Roman aqueduct and fairytale Alcazar, about 30 minutes by train. This length suits travelers who hate the forced march, couples, and anyone whose flights bookend the trip awkwardly. Base in La Latina for four days: you have accepted a slower pace, and its tapas lanes and Sunday market make coming home each night the best part. Book the Prado, the Royal Palace, and the Bernabeu ahead.",
      stayNeighborhoodSlug: "la-latina",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The art triangle: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Start at the Prado's 10am opening on a booked slot, going straight to Las Meninas and Goya's black paintings ahead of the crowds. Give the masterpieces two and a half hours at least.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "After lunch on the Paseo del Prado, take the Thyssen-Bornemisza across the boulevard, free on Monday afternoons. Work top-down from the Old Masters through to the Impressionists and 20th century.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Walk into Retiro behind the museums for the late afternoon, rowing on the lake and looping past the Palacio de Cristal. The park is the green pause between the day's two galleries.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Take the Reina Sofia in its free evening window (closed Tuesdays), heading first to Room 205 for Guernica before the rest. Arrive a little early to beat the free-slot queue.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Ease home to La Latina for a Cava Baja tapas crawl from 9pm, one or two plates and a drink per bar. Standing at the counter, this is the everyday Madrid dinner.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Habsburg Madrid: Royal Palace, Plaza Mayor, Sol, sunset at Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Be at the Royal Palace for 10am on a pre-booked ticket, checked the night before against state-event closures. Do the state rooms and Armoury, then the free Almudena Cathedral and Sabatini Gardens.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Graze a light lunch at Mercado de San Miguel by Plaza Mayor, a few tapas from different stalls, eaten standing. Keep it a tasting rather than the full meal.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Take in Plaza Mayor, then walk to Puerta del Sol and the Kilometre Zero marker, the literal center of Spain. Bag zipped through the Sol crowds.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Walk to Plaza de Cibeles for the fountain and palace, riding up the Cibeles mirador for the Paseo del Prado view. It links the old core to the grand boulevards.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Reach the Temple of Debod 30 minutes before sundown for the free classic Madrid sunset, the Egyptian stone mirrored in its pool. Claim a railing spot early.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Return along a floodlit Gran Via toward the Metropolis dome, then dinner in the center. Phones and bags secure on this pickpocket strip.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "The barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "On a Sunday, hit El Rastro before 11am while it is still walkable, down Ribera de Curtidores and the La Latina lanes with valuables in a front pocket. Otherwise wander La Latina's medieval squares.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Long La Latina lunch with a vermouth as the market winds down, then browse Malasana's vintage shops and coffee spots around Plaza del Dos de Mayo. This is the slow, food-and-neighborhood afternoon the shorter trips cannot spare.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Aperitivo and dinner across Malasana and Chueca, moving between small kitchens and cocktail bars as they fill. Book ahead for anywhere named, the good tables go by 9:30 on weekends.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Salamanca and the Bernabeu, or a Toledo or Segovia day trip",
          morning: [
            {
              text: "Option A stays in the city: browse the elegant Salamanca grid and the designer strip along Calle Serrano, with a coffee stop in its smart cafes. Option B leaves it: take the 33-minute high-speed train to Toledo, or the roughly 30-minute train to Segovia, going early to beat the day-trip crowds.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "santiago-bernabeu",
              text: "If you stayed in town, take the Santiago Bernabeu stadium tour, booked online for a timed slot and checked against the fixture list, as tours are closed on matchdays. The metro drops you at Santiago Bernabeu on line 10.",
              durationMin: 120,
            },
            {
              text: "On the day-trip option, spend the afternoon in Toledo's hilltop old town of cathedral, synagogues and El Greco, or Segovia's Roman aqueduct and fairytale Alcazar, before the late-afternoon train back. Both are easy round trips that still leave a final Madrid evening.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Back in La Latina for a farewell dinner, spending up a little on your last night at a Cava Baja tavern you scouted earlier. Croquetas, jamon and a final cana to close the trip.",
              durationMin: 120,
            },
            {
              text: "End with a nightcap on a quiet La Latina lane, a short walk from your bed, with no journey home to plan. That ease is the whole point of basing here for four days.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default madrid;

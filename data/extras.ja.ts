import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasEn: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt: "Yellow tram climbing a Lisbon street past a mustard townhouse",
    history:
      "Lisbon is one of the oldest cities in Western Europe, a Phoenician and Roman port long before it became Portugal's capital in 1256. The great earthquake of 1 November 1755, followed by a tsunami and fires, flattened the lower town and killed tens of thousands, which is why the grid-planned Baixa you walk today looks so different from the tangled Alfama that survived. From here Vasco da Gama sailed to India in 1498, and the tax on that spice trade paid for the Manueline stonework you see at Belem. The 1974 Carnation Revolution, a near-bloodless military coup, ended four decades of dictatorship and is still marked every 25 April.",
    knownFor: [
      "Yellow tram 28",
      "Pastel de nata",
      "Fado music",
      "Miradouro viewpoints",
      "Azulejo tiles",
      "Belem Tower",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt:
      "カレル橋とヴルタヴァ川の上にそびえるプラハ城と聖ヴィート大聖堂",
    history:
      "プラハはヴルタヴァ川の浅瀬と880年頃に築かれた丘の上の城を中心に発展し、14世紀までには神聖ローマ皇帝カール4世の本拠地となった。カール4世はカレル橋、新市街、そして中欧最古の大学を建設した。1618年のプラハ窓外投擲事件では、プロテスタント貴族が皇帝の役人を城の窓から放り出し、これが三十年戦争の引き金の一つとなった。この地域では珍しく、歴史地区は第二次世界大戦をほぼ無傷で乗り越えたため、ゴシックとバロックが織りなす街並みがこれほど完全な形で残っている。1989年のビロード革命は暴力を伴わずに共産主義支配を終わらせ、プラハはそれ以来チェコの首都であり続けている。",
    knownFor: [
      "カレル橋",
      "プラハ城",
      "天文時計",
      "安価なビール",
      "バロック様式の街並み",
      "クリスマスマーケット",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "Plaza de Espana in Seville at golden hour with its canal and towers",
    history:
      "Seville was Roman Hispalis and then, for over five centuries, the Moorish city of Ishbiliya, which is why the cathedral's bell tower, La Giralda, began life as a minaret and the Alcazar is still a working Mudejar palace. After 1492 the city held the crown's monopoly on trade with the Americas, and the gold and silver that flowed up the Guadalquivir made it one of the richest places in Europe. That wealth built the vast Gothic cathedral, where Christopher Columbus is entombed. The fairy-tale Plaza de Espana is far newer, built for the 1929 Ibero-American Exposition.",
    knownFor: [
      "Real Alcazar",
      "Flamenco",
      "Plaza de Espana",
      "Orange trees",
      "Semana Santa",
      "Tapas culture",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "ドウロ川に架かるドン・ルイス1世橋とその背後に広がるポルトのリベイラ地区の屋根並み",
    history:
      "ポルトはローマ時代の港ポルトゥス・カレに由来する国名「ポルトガル」の語源となった街であり、勤勉さと独立心の強さでも知られている。この街はドウロ川で財を成した。上流の谷から流れ下るワイン樽はヴィラ・ノヴァ・デ・ガイアの貯蔵庫で熟成され、17世紀以降イギリス商人がその交易をポートワインへと発展させた。1886年に開通した二層構造のドン・ルイス1世橋は、ギュスターヴ・エッフェルの弟子によって建設された。地元の人々は今でも「トリペイロス(モツ食い)」と呼ばれるが、これは1415年にエンリケ航海王子の艦隊へ最良の肉を差し出し、モツだけを自分たちの取り分としたという逸話に由来する。",
    knownFor: [
      "ポートワインの貯蔵庫",
      "ドン・ルイス1世橋",
      "リベイラ河岸地区",
      "リヴラリア・レロ書店",
      "アズレージョ装飾の駅",
      "フランセジーニャ",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "Szechenyi Chain Bridge over the Danube with the Hungarian Parliament behind",
    history:
      "Budapest was two rivals until 1873: hilly, royal Buda on the west bank and flat, commercial Pest on the east, joined when the Chain Bridge finally made crossing the Danube easy. The Romans ran a garrison town called Aquincum here, and their taste for the thermal springs never left, which is why the city still has grand public baths fed by hot water underground. The years around 1896, the millennium of Hungarian settlement, gave the city its Parliament, its continental Europe's first metro line and much of its grand Andrassy Avenue. The 1956 uprising against Soviet rule was crushed but never forgotten.",
    knownFor: [
      "Thermal baths",
      "Parliament building",
      "Chain Bridge",
      "Ruin bars",
      "Danube views",
      "Buda Castle",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "青空の下、水面に映るウィーンのベルヴェデーレ宮殿",
    history:
      "ウィーンは600年以上にわたりハプスブルク家の首都であり、1918年に崩壊するまで神聖ローマ帝国、その後はオーストリア=ハンガリー帝国の本拠地だった。人口200万人に満たない街にヨーロッパ大陸規模の宮殿群があるのはそのためだ。1857年に中世の城壁が取り払われると、皇帝フランツ・ヨーゼフはその跡地にリングシュトラーセを整備した。これは美術館やオペラ座、議事堂が並ぶ壮大な環状大通りで、今も街を一周できる。1900年前後、この街は近代世界の坩堝だった。フロイトが精神分析を生み出し、クリムトとシーレが伝統を打ち破り、マーラーがオペラ座を指揮した。ウィーンは1955年以降、小さな永世中立国オーストリアの首都であり続け、ユネスコが保護する今日のカフェ文化も現役で息づいている。",
    knownFor: [
      "シェーンブルン宮殿",
      "カフェ文化",
      "クリムトの『接吻』",
      "歴代の宮殿群",
      "ザッハトルテ",
      "オペラと舞踏会",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "雪をかぶったシエラネバダ山脈を背景に、グラナダの町の上にそびえるアルハンブラ宮殿",
    history:
      "グラナダは西ヨーロッパ最後のイスラム王国であり、スペインの他地域が陥落した後も250年間持ちこたえたナスル朝の首都だった。その支配者たちは町を見下ろす丘の上に、西洋に現存する最も優れたイスラム宮殿群、アルハンブラ宮殿を築いた。1492年1月2日、カトリック両王イサベルとフェルナンドがこの町を陥落させ、スペインにおける約800年に及ぶイスラム支配に終止符を打った。同じ年、グラナダでイサベルはクリストファー・コロンブスへの資金援助に同意している。アルハンブラ宮殿は半ば忘れ去られていたが、作家ワシントン・アーヴィングがここに滞在し、1832年に『アルハンブラ物語』を出版すると、これがロマン主義ブームを巻き起こし宮殿を救った。グラナダは今、イスラムとスペインの歴史が層をなして共存する大学都市となっている。",
    knownFor: [
      "アルハンブラ宮殿",
      "無料タパス",
      "アルバイシンからの眺め",
      "イスラムの文化遺産",
      "シエラネバダ山脈",
      "サクロモンテのフラメンコ",
    ],
  },
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "The Colosseum in Rome against a bright blue sky",
    history:
      "Rome was, by its own legend, founded by Romulus in 753 BC, and it grew into the capital of an empire that ran from Britain to the Sahara. The ruins you walk between, the Colosseum, the Forum, the Pantheon, are the leftovers of a city that held a million people while medieval London held twenty thousand. When the empire fell, the popes made Rome the capital of the Catholic world, and Renaissance and Baroque money rebuilt it around the ancient bones, which is why Bernini fountains sit on Roman foundations. It only became the capital of a united Italy in 1871, the last piece of the country to join. Everything since, from the traffic to the aperitivo, layers onto three thousand years that never got cleared away.",
    knownFor: [
      "The Colosseum",
      "Vatican and Sistine Chapel",
      "Trevi Fountain",
      "Roman ruins",
      "Pasta and gelato",
      "Baroque fountains",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "青空の下、ダムラック沿いに並ぶアムステルダムの運河沿いの家並みと観光船",
    history:
      "アムステルダムは13世紀、アムステル川をせき止めた漁村から発展した街で、その名もこのダム(堰)に由来する。黄金時代は17世紀、オランダの船団が世界貿易を牛耳り、それに資金を出した商人たちが環状運河(グラハテンゴルデル)を掘り、今も見られる細長い切妻屋根の家々を建てた。これらの家が細いのは、間口の広さに応じて税金が課されたためだ。その富がレンブラントを支え、また1637年に投機家たちを破滅させたチューリップ・バブルも生んだ。この街は常に避難場所であり続けてきた。ユグノー、ユダヤ人を受け入れ、後には寛容の象徴となった。アンネ・フランクは1942年から一家が密告される1944年までここに身を潜め、プリンセンフラハト沿いの隠れ家は今や街で最も訪問者の多い記念館となっている。",
    knownFor: [
      "環状運河地帯",
      "ゴッホ美術館",
      "アンネ・フランクの家",
      "自転車",
      "国立美術館(ライクスミュージアム)",
      "ブラウンカフェ",
    ],
  },
  florence: {
    citySlug: "florence",
    image: hero(981682),
    imageAlt:
      "Brunelleschi's dome rising over the terracotta rooftops of Florence",
    history:
      "Florence is where the Renaissance began. In the 15th century the Medici, a family of bankers who effectively ran the city, poured their fortune into artists and architects, and the result is a small town holding more famous art per square meter than almost anywhere on earth. Brunelleschi raised the largest masonry dome in the world over the cathedral in 1436, still the skyline today, without any full scaffolding. The gold florin minted here was medieval Europe's most trusted coin, which is how a Tuscan town of merchants ended up funding Michelangelo, Botticelli and Leonardo. Galileo taught here, Machiavelli wrote here, and for six years after 1865 Florence was even the capital of a newly united Italy.",
    knownFor: [
      "The Duomo",
      "Renaissance art",
      "Uffizi Gallery",
      "Michelangelo's David",
      "Ponte Vecchio",
      "Tuscan food",
    ],
  },
  bruges: {
    citySlug: "bruges",
    image: hero(5612504),
    imageAlt:
      "青空の下、ブルージュの運河沿いに並ぶ階段状破風のレンガ造りの家々",
    history:
      "ブルージュは中世ヨーロッパで最も裕福な都市の一つであり、イングランド産の羊毛が大陸で最高級の織物へと生まれ変わるフランドル地方の交易拠点だった。この街は世界初とも言われる株式取引所を運営しており、商人たちが宿泊したヴァン・デル・ブールセ家の名がその由来で、「証券取引所(bourse)」という言葉もここから生まれた。しかし街を潤していた海への水路「ズウィン」が1500年頃に土砂で塞がれると、商人たちはアントワープへ移り、ブルージュは4世紀にわたり眠りについた。皮肉にも、それこそがこの街を今日まで残した理由だ。取り壊して建て直す資金がなかったため、中世の街並みがそのまま保たれたのだ。1892年に発表された陰鬱な小説『死都ブルージュ』が再びこの街を有名にし、それ以来観光客が訪れ続けている。",
    knownFor: [
      "中世の運河",
      "鐘楼(ベルフォート)",
      "ベルギーチョコレート",
      "フランドル絵画",
      "トラピストビール",
      "石畳の広場",
    ],
  },
  barcelona: {
    citySlug: "barcelona",
    image: hero(21357884),
    imageAlt:
      "グエル公園から望む、バルセロナと海の上にそびえるサグラダ・ファミリア",
    history:
      "バルセロナはローマ時代の町バルシーノとして始まり、中世にはアラゴン連合王国の海洋都市として栄えた。そのため今もゴシック地区には港からわずか一区画の場所に中世の宮殿が残っている。現代の街並みは1860年、旧市街の城壁が取り払われ、技師イルデフォンス・セルダーが今も歩くことのできる角を切り落とした格子状の街区「エイシャンプレ地区」を設計したことで生まれた。1900年前後には産業で得た富がモデルニスモ建築ブームを支え、アントニ・ガウディはその富をサグラダ・ファミリア、グエル公園、カサ・バトリョへと注ぎ込んだ。大聖堂は1882年に着工され、今なお建設が続いている。1992年のオリンピックによって街はビーチへと開かれ、それ以来バルセロナはヨーロッパで最も訪問者の多い都市の一つであり続けている。独自の言語を持ち、強い独立運動を抱える、カタルーニャ気質の強い街だ。",
    knownFor: [
      "サグラダ・ファミリア",
      "ガウディ建築",
      "グエル公園",
      "ランブラス通り",
      "タパスとベルムット",
      "市街のビーチ",
    ],
  },
  berlin: {
    citySlug: "berlin",
    image: hero(37468367),
    imageAlt: "The Brandenburg Gate in Berlin under a blue sky",
    history:
      "Berlin was the capital of Prussia and then, from 1871, of a unified Germany. The 1920s Weimar years made it a byword for cabaret, cinema and modern art, until the Nazis took power here in 1933 and ran the war from the city. What the bombing left, the Cold War split: from 1961 the Berlin Wall cut the city in two for 28 years, until it fell on 9 November 1989 and Germany reunified with Berlin as its capital in 1990. The scars are now the sights, from the surviving stretches of Wall to the Cold War checkpoints and the memorials. Cheap rents in the emptied east then turned the reunited city into Europe's techno and creative capital, which is the Berlin most people come for today.",
    knownFor: [
      "Brandenburg Gate",
      "The Berlin Wall",
      "Cold War history",
      "Techno nightlife",
      "Museum Island",
      "Street art",
    ],
  },
  madrid: {
    citySlug: "madrid",
    image: hero(32314658),
    imageAlt: "The Metropolis building on Gran Via in Madrid at golden hour",
    history:
      "Madrid became the capital of Spain almost by decree: in 1561 King Philip II moved his court to what was then a modest town, chosen partly because it sat in the dead center of the peninsula. The tight lanes of the old center around Plaza Mayor are still called the Madrid de los Austrias after those Habsburg kings, while the later Bourbons added the Royal Palace and the boulevards. On 2 May 1808 the city rose against Napoleon's troops, a slaughter Goya painted and the country still marks as a holiday. Madrid has no single wonder like the Alhambra or the Sagrada Familia; its draw is the density of life and one of the greatest concentrations of painting on earth, the Prado, the Reina Sofia and the Thyssen within a ten-minute walk.",
    knownFor: [
      "The Prado",
      "Retiro Park",
      "Tapas and terraces",
      "Royal Palace",
      "Guernica",
      "Late nights",
    ],
  },
  krakow: {
    citySlug: "krakow",
    image: hero(37459506),
    imageAlt:
      "The Cloth Hall and St Mary's Basilica on Krakow's Main Market Square",
    history:
      "Krakow was the royal capital of Poland for more than five centuries, until the court moved to Warsaw in 1596, and its kings were crowned and buried up on Wawel Hill. The Jagiellonian University, founded in 1364, is one of the oldest in Europe and taught a young Copernicus. Unlike Warsaw, the old town came through the Second World War almost undamaged, which is why the medieval Main Square, the largest in Europe, is still intact and UNESCO-listed. The darker history is close by: the Nazis ran occupied Poland from Krakow, emptied the Jewish quarter of Kazimierz into the Podgorze ghetto, and built Auschwitz-Birkenau an hour to the west. Cheap, walkable and full of students, Krakow is now one of the most popular short breaks in Europe.",
    knownFor: [
      "Main Market Square",
      "Wawel Castle",
      "Kazimierz",
      "Cheap pierogi",
      "Christmas market",
      "Auschwitz day trip",
    ],
  },
  copenhagen: {
    citySlug: "copenhagen",
    image: hero(20228124),
    imageAlt:
      "コペンハーゲンのニューハウンに並ぶカラフルな港沿いの家々と木造船",
    history:
      "コペンハーゲンは漁村から発展し、バルト海への入り口を支配する要塞化された交易都市となった。その名も「商人の港」を意味している。旧市街の大半は1600年代初頭、ローゼンボー城と円塔(ルンデトーン)を建てたクリスチャン4世によって形作られた。絵はがきでおなじみの運河ニューハウンも、船員や酒場のための現役の港としてその直後に掘られたものだ。1807年のナポレオン戦争中、イギリス艦隊がこの街の大部分を砲撃し焼き払った。19世紀にはハンス・クリスチャン・アンデルセンがここで数々のおとぎ話を書き、1913年にはブロンズ像「人魚姫」が設置された。デンマークは世界最古の王室を持つ国であり、現代のコペンハーゲンはその長く安定した歴史を、デザイン、自転車文化、そして新北欧料理で世界に知られる評判へと昇華させている。",
    knownFor: [
      "ニューハウン港",
      "チボリ公園",
      "至る所にある自転車",
      "ヒュッゲとデザイン",
      "新北欧料理",
      "人魚姫像",
    ],
  },
  athens: {
    citySlug: "athens",
    image: hero(33201846),
    imageAlt: "The Acropolis of Athens on its rock under a clear blue sky",
    history:
      "Athens is where a lot of the Western world was invented. In the 5th century BC it was the richest and most powerful of the Greek city-states, and under Pericles it built the Parthenon and the rest of the Acropolis at the same time that Socrates, and then Plato and Aristotle, were arguing philosophy in its streets and inventing democracy. Rome, then Byzantium, then the Ottomans each took the city, and the Parthenon served as a church and a mosque before a Venetian shell hit the gunpowder the Ottomans stored inside it in 1687 and blew the roof off. When Greece won independence, Athens became the capital of the new kingdom in 1834, then a small town of a few thousand people, and grew into the sprawling modern city that now wraps around those ancient rocks.",
    knownFor: [
      "The Acropolis",
      "The Parthenon",
      "Ancient ruins",
      "Rooftop views",
      "Souvlaki and mezze",
      "Birthplace of democracy",
    ],
  },
  edinburgh: {
    citySlug: "edinburgh",
    image: hero(28851815),
    imageAlt:
      "The Edinburgh Old Town skyline with the Scott Monument and Balmoral clock tower",
    history:
      "Edinburgh has been the capital of Scotland for six centuries, and the castle on its plug of volcanic rock has been fortified for far longer than that. The medieval Old Town grew as a dense spine of tall tenements running down the ridge of the Royal Mile from the castle to the royal palace of Holyroodhouse. In the 1700s, during the Scottish Enlightenment that produced David Hume and Adam Smith, the city built the elegant Georgian grid of the New Town across the valley, and earned the nickname the Athens of the North. The first Edinburgh Festival Fringe ran in 1947 and is now the largest arts festival on earth, taking over the whole city every August. The cafes where J.K. Rowling wrote Harry Potter are still doing a brisk trade.",
    knownFor: [
      "Edinburgh Castle",
      "The Royal Mile",
      "Arthur's Seat",
      "The Fringe festival",
      "Scotch whisky",
      "Harry Potter",
    ],
  },
  paris: {
    citySlug: "paris",
    image: hero(36771040),
    imageAlt: "The Eiffel Tower rising over Paris framed by trees",
    history:
      "Paris began as a settlement of the Parisii tribe on an island in the Seine, grew into the Roman town of Lutetia, and has been the capital of France for most of a thousand years. Notre-Dame was begun in 1163, and the medieval Latin Quarter grew around one of Europe's first universities. The Revolution of 1789 started here with the storming of the Bastille, and in the 1850s and 60s Baron Haussmann tore through the crowded old city to lay the wide boulevards and uniform limestone facades that define it today. The Eiffel Tower went up as a temporary exhibit for the 1889 World's Fair and was never taken down. Paris was the art capital of the 20th century, was liberated in 1944, and reopened a restored Notre-Dame in December 2024, five years after the fire.",
    knownFor: [
      "Eiffel Tower",
      "The Louvre",
      "Notre-Dame",
      "Cafe terraces",
      "Haussmann boulevards",
      "Art and fashion",
    ],
  },
  venice: {
    citySlug: "venice",
    image: hero(34775901),
    imageAlt:
      "The Grand Canal in Venice lined with palazzi and gondolas seen from the Rialto",
    history:
      "Venice was founded by mainland refugees who fled onto the marshy islands of the lagoon in the 5th and 6th centuries, and it grew into a republic that ran Mediterranean trade for a thousand years. At its height the Most Serene Republic, led by an elected Doge from the Palazzo Ducale, was one of the richest states in Europe; Marco Polo set off from here for China. All of it was built on millions of wooden piles driven into the mud, which is why the palazzi seem to rise straight out of the water. The Republic finally fell to Napoleon in 1797. Today Venice spreads across 118 islands with no cars at all, and struggles with sinking foundations, the acqua alta floods and mass tourism, which is why it now charges day-trippers an access fee on busy days.",
    knownFor: [
      "The Grand Canal",
      "St Mark's Square",
      "Gondolas",
      "Rialto Bridge",
      "Carnevale masks",
      "Murano glass",
    ],
  },
  dublin: {
    citySlug: "dublin",
    image: hero(13157974),
    imageAlt:
      "リフィー川に架かるダブリンのハーフペニー橋と、その背後に見える税関の緑のドーム",
    history:
      "ダブリンは841年頃、リフィー川沿いのヴァイキングの交易・奴隷貿易港として始まり、その名はアイルランド語で「黒い淀み」を意味するダブ・リン、すなわち長船が停泊した淀みに由来する。1170年のノルマン人の到来後、この街はアイルランドにおけるイングランド支配の中心地となり、1700年代にはダブリンが大英帝国第二の都市として栄え、ジョージ王朝様式の広い通りとレンガ造りの広場が整備された。1916年のイースター蜂起はオコンネル通りの中央郵便局から始まり、1922年のアイルランド独立へとつながる戦いの引き金となった。この街は文学の重みを桁違いに背負っており、ノーベル賞受賞者を4人輩出し、ジェイムズ・ジョイスの『ユリシーズ』の舞台でもある。そして今や、はるかに豊かになったアイルランドの若々しくテクノロジー主導の首都となっている。",
    knownFor: [
      "ギネス・ストアハウス",
      "ケルズの書",
      "ジョージアン様式のドア",
      "テンプルバーのパブ",
      "トリニティ・カレッジ",
      "伝統音楽",
    ],
  },
  stockholm: {
    citySlug: "stockholm",
    image: hero(30158443),
    imageAlt:
      "Stockholm's Riddarholmen waterfront and church spire seen across the water under a blue sky",
    history:
      "Stockholm was founded around 1252 on the small island now called Gamla Stan, where Lake Malaren empties into the Baltic Sea, and it grew rich controlling the iron and copper trade out of Sweden. It became the permanent capital in the 15th century and the seat of the Swedish kings, whose Royal Palace still stands over the old town. The city spread across its fourteen islands as Sweden rose to great-power status in the 1600s, the era of the warship Vasa, which capsized in the harbour on its maiden voyage in 1628 and was raised, almost intact, in 1961. Spared the destruction of both world wars by Swedish neutrality, Stockholm kept its historic core and made the 20th century a byword for design, and it still hosts the Nobel Prize ceremony and banquet every December.",
    knownFor: [
      "Gamla Stan old town",
      "The Vasa ship",
      "ABBA Museum",
      "The archipelago",
      "Fika culture",
      "The Nobel Prize",
    ],
  },
  nice: {
    citySlug: "nice",
    image: hero(26928991),
    imageAlt:
      "The red rooftops of Old Nice with the baroque clock tower and the hills of the Riviera behind",
    history:
      "Nice spent most of its history looking to Italy rather than France: it belonged for centuries to the House of Savoy and only became French in 1860, after a plebiscite, which is why the old town feels Ligurian and the local dialect and food are closer to Genoa than to Paris. The city grew rich in the 1800s when British and Russian aristocrats came to spend the winter on the coast, and it was their money that paid for the seafront walk that still carries their name, the Promenade des Anglais. Matisse and Chagall both settled here for the light and left museums up in the leafy hills of Cimiez, on the site of the Roman town of Cemenelum. Today Nice is the unofficial capital of the Riviera and the gateway to Monaco, Cannes and the perched villages along the Cote d'Azur.",
    knownFor: [
      "Promenade des Anglais",
      "Vieux Nice",
      "Cours Saleya market",
      "Pebble beaches",
      "Socca",
      "Riviera day trips",
    ],
  },
  dubrovnik: {
    citySlug: "dubrovnik",
    image: hero(16884684),
    imageAlt:
      "ドゥブロヴニク旧市街のテラコッタ色の屋根並みと、その背後にそびえる大聖堂のドームとスルジ山",
    history:
      "ドゥブロヴニクは何世紀にもわたり、ラグーサ共和国として存在した。小さいながらも抜け目のない海洋都市国家で、その時々で最も強い帝国に貢物を納めることで独立を保ちながら、ヴェネツィアに匹敵する商船隊を運航していた。高さ最大25メートル、全周約2キロメートルに及ぶ石造りの城壁は一度も突破されたことがなく、その内側にある大理石敷きの目抜き通りストラドゥンやバロック様式の教会群は、1667年の壊滅的な地震の後に大部分が再建されたものだ。1808年にナポレオンが共和国を廃止すると、この街は後にユーゴスラビアへ、そして独立クロアチアへと組み込まれた。1991年から1992年にかけてのクロアチア独立戦争における包囲戦で旧市街は砲撃による損傷を受けたが、丹念に修復され、テレビドラマ『ゲーム・オブ・スローンズ』の「キングズ・ランディング」として登場したことで新たな知名度を得た。",
    knownFor: [
      "旧市街の城壁",
      "テラコッタ色の屋根並み",
      "ストラドゥン通り",
      "『ゲーム・オブ・スローンズ』の撮影地",
      "ロクルム島",
      "アドリア海のビーチ",
    ],
  },
  reykjavik: {
    citySlug: "reykjavik",
    image: hero(20165201),
    imageAlt:
      "Reykjavik's skyline across the water with Hallgrimskirkja's tower and snow-capped mountains behind",
    history:
      "Reykjavik was, by the old sagas, the site of Iceland's first Norse settlement around 874, when Ingolfur Arnarson is said to have thrown his high-seat pillars overboard and built where they washed ashore; the name means smoky bay, after the steam rising from its hot springs. It stayed a tiny village for most of a thousand years and only grew into a real town in the 1700s, becoming the capital of a self-governing Iceland in 1918 and of a fully independent republic in 1944, when the country cut its last ties to Denmark. The city had its Cold War moment in 1986, when Reagan and Gorbachev met at Hofdi house and came close to agreeing to scrap their nuclear arsenals. Heated and powered almost entirely by geothermal and hydro energy, it is the world's northernmost capital and the base camp for Iceland's waterfalls, geysers and Northern Lights.",
    knownFor: [
      "Hallgrimskirkja",
      "Northern Lights",
      "Golden Circle",
      "Blue Lagoon",
      "Geothermal pools",
      "Whale watching",
    ],
  },
  munich: {
    citySlug: "munich",
    image: hero(13762982),
    imageAlt:
      "The twin onion domes of the Frauenkirche and the tower of the New Town Hall over the old town of Munich",
    history:
      "Munich grew up in 1158 around a settlement of monks, which is where its name, from Munichen, and the little monk on its coat of arms both come from. It became the seat of the Wittelsbach dynasty, who ruled Bavaria for more than 700 years and filled the city with palaces like the Residenz and Nymphenburg while making it a capital of art and music. It was also where the Nazi movement was born in the 1920s and where the 1938 Munich Agreement was signed, though the White Rose students who resisted from the university are remembered across the city. Rebuilt carefully after wartime bombing, Munich reinvented itself as prosperous, green and famously fond of tradition, known now for BMW, FC Bayern, the beer halls and Oktoberfest, first held in 1810 to celebrate a royal wedding.",
    knownFor: [
      "Marienplatz",
      "Oktoberfest",
      "Beer gardens",
      "The English Garden",
      "Neuschwanstein day trip",
      "BMW and FC Bayern",
    ],
  },
  tallinn: {
    citySlug: "tallinn",
    image: hero(35838020),
    imageAlt:
      "The red rooftops and church spires of Tallinn's medieval old town with the modern skyline behind at sunset",
    history:
      "Tallinn grew as a Hanseatic trading port on the Baltic, and by the 14th and 15th centuries its merchants had raised the walls, guild halls and churches of the old town that still stand almost intact, making it one of the best-preserved medieval cities in Europe. The name is often traced to Taani linn, the Danish town, after the Danes who seized the hill fort in 1219; the upper town of Toompea held the rulers while the German-speaking merchants ran the lower town below. Estonia was absorbed by the Russian empire and then, after a short first independence, by the Soviet Union until 1991, when the peaceful Singing Revolution restored the country. Since then Tallinn has become the showcase of e-Estonia, a place that helped create Skype and runs its government online, all wrapped around a fairy-tale medieval core.",
    knownFor: [
      "Medieval old town",
      "Toompea viewpoints",
      "Alexander Nevsky Cathedral",
      "Telliskivi and Kalamaja",
      "e-Estonia",
      "Christmas market",
    ],
  },
  oslo: {
    citySlug: "oslo",
    image: hero(18170373),
    imageAlt:
      "青空の下、港へとなだらかに下るオスロ・オペラハウスの白い大理石の屋根",
    history:
      "オスロは1040年頃に建設され、1300年頃にはホーコン5世によってノルウェーの首都とされた。しかし1624年の壊滅的な火災の後、デンマーク王クリスチャン4世がアーケシュフース要塞のそばに街を再建し、「クリスチャニア」と改名した。この名前は1925年に再びオスロと改称されるまで使われ続けた。ノルウェーは何世紀にもわたりデンマークに支配され、その後スウェーデンと結びついたが、1905年にようやく完全な独立を果たし、その子孫が今なお統治する王を迎え入れた。1960年代後半に発見された北海油田は、この控えめな北欧の首都を世界屈指の裕福な都市へと変え、その富が水辺のオペラハウスやフィヨルド沿いに並ぶ新しい美術館群を支えている。毎年12月にノーベル平和賞の授賞式が行われるオスロは、地元の人々がそのまま街からスキーや帆走に出かけられる森とフィヨルドに、コンパクトな中心部を抱いている。",
    knownFor: [
      "オペラハウス",
      "『叫び』",
      "ヴィーゲラン公園",
      "オスロフィヨルド",
      "ノーベル平和賞",
      "ホルメンコーレン",
    ],
  },
  helsinki: {
    citySlug: "helsinki",
    image: hero(12319482),
    imageAlt:
      "Helsinki Cathedral rising over the South Harbour and market square seen from the sea",
    history:
      "Helsinki was founded in 1550 by King Gustav Vasa of Sweden as a trading post to rival Tallinn across the gulf, but it stayed a small town for centuries. Everything changed in 1809, when Sweden lost Finland to Russia: the tsar made Helsinki the capital of the new Grand Duchy in 1812 and had the architect Carl Ludwig Engel lay out the neoclassical Senate Square and its white cathedral to look like a smaller St Petersburg. Finland finally won its independence in 1917, and the 20th century turned Helsinki into a showcase of Finnish design and modern architecture, from Alvar Aalto to Marimekko. It hosted the 1952 Olympics and the 1975 Helsinki Accords, and it remains a compact, sea-fringed capital where the sauna is a way of life.",
    knownFor: [
      "Helsinki Cathedral",
      "Senate Square",
      "Suomenlinna fortress",
      "The Design District",
      "Sauna culture",
      "The Market Square",
    ],
  },
  naples: {
    citySlug: "naples",
    image: hero(31668031),
    imageAlt:
      "The domes and rooftops of Naples with the Bay of Naples and Mount Vesuvius behind at dusk",
    history:
      "Naples was founded by Greek settlers around 600 BC as Neapolis, the new city, and it kept its Greek grid, still traceable in the dead-straight line of Spaccanapoli, through Roman, Byzantine, Norman and Spanish rule. For centuries it was the capital of its own kingdom, the largest city in Italy and one of the biggest in Europe, a Bourbon royal seat whose opera house, the San Carlo of 1737, is the oldest still working in the world. All of it sits under Vesuvius, the volcano that buried Pompeii and Herculaneum in AD 79 and still looms, dormant but alive, over the bay. Poor, dense and fiercely proud, Naples gave the world pizza, born here in the 1700s and fixed as the Margherita in 1889, and a devotion to Diego Maradona that borders on the religious.",
    knownFor: [
      "Pizza margherita",
      "Mount Vesuvius",
      "Pompeii day trip",
      "Spaccanapoli",
      "Maradona",
      "The Veiled Christ",
    ],
  },
  split: {
    citySlug: "split",
    image: hero(6701514),
    imageAlt:
      "The Split waterfront and old town with the cathedral bell tower and the Mosor mountains behind, seen from the sea",
    history:
      "Split grew, uniquely, inside a Roman palace: the emperor Diocletian, the only Roman ruler to give up the throne voluntarily, built a vast fortified retirement palace here around AD 305, and when nearby Salona fell to invaders the refugees simply moved into its walls and never left. Seventeen centuries later people still live and trade inside the palace, its cathedral is Diocletian's own mausoleum, and its cellars survive almost intact. The city passed through Byzantine, Venetian, Habsburg and briefly Napoleonic hands, spent the 20th century in Yugoslavia, and became Croatian in 1991. Today Split is Dalmatia's boisterous capital, a port and the gateway to the islands, as known for its fervent Hajduk football and its picigin beach game as for its Roman stones.",
    knownFor: [
      "Diocletian's Palace",
      "The Riva",
      "St Domnius bell tower",
      "Marjan hill",
      "Dalmatian islands",
      "Game of Thrones sites",
    ],
  },
  riga: {
    citySlug: "riga",
    image: hero(33830451),
    imageAlt:
      "ダウガヴァ川とヴァンス橋を背景にした、リガ旧市街の屋根並みと大聖堂の尖塔",
    history:
      "リガは1201年、ドイツ人司教アルベルトによって、バルト地域を武力で改宗させる拠点として創設された。そして、ドイツ語を話す商人とリヴォニア騎士団によって何世紀にもわたり運営されたハンザ同盟のもとで、東バルト海最大かつ最も豊かな都市へと成長した。ポーランド、スウェーデン、そしてロシアの支配を経て、1900年前後の産業ブームによりロシア帝国第三の都市となり、新しい市街地はヨーロッパで最も豪華なアール・ヌーヴォー建築で埋め尽くされた。ラトビアは1918年に独立を果たしたが、1940年にソビエト連邦に併合され、1991年、平和的な「歌う革命」とバルト三国を結ぶ人間の鎖「バルトの道」を通じて再び独立を勝ち取った。今日のリガはバルト三国の首都の中で最大の都市であり、ユーゲントシュティール建築の並木道に囲まれたユネスコ世界遺産の旧市街を擁している。",
    knownFor: [
      "旧市街の尖塔群",
      "アール・ヌーヴォー建築",
      "中央市場",
      "黒頭組合の家",
      "バルト海の琥珀",
      "歌と踊りの祭典",
    ],
  },
  brussels: {
    citySlug: "brussels",
    image: hero(655295),
    imageAlt:
      "The gilded Baroque guildhall facades of the Grand-Place in Brussels under a cloudy sky",
    history:
      "Brussels began as a fortified settlement on an island in the marshy river Senne around 979 and grew into the seat of the Dukes of Brabant and a favourite residence of the dukes of Burgundy and the Habsburgs. Its guilds built the Grand-Place, and when French troops bombarded and flattened it in 1695 the guilds rebuilt their houses grander than before, in the gilded Baroque you still see today. Belgium was created in 1830 with Brussels as its capital, and the wealth of an industrial boom and a colonial empire paid for the grand boulevards, the Art Nouveau of Victor Horta and the vast Palais de Justice. Officially bilingual in French and Dutch, Brussels became the de facto capital of the European Union after 1958, which is why a comfortable Belgian city now helps run a continent.",
    knownFor: [
      "The Grand-Place",
      "Belgian beer",
      "Chocolate",
      "Frites",
      "Comic-strip murals",
      "Art Nouveau",
    ],
  },
  vilnius: {
    citySlug: "vilnius",
    image: hero(28975990),
    imageAlt:
      "The baroque churches and red rooftops of Vilnius old town seen from above",
    history:
      "Vilnius was, by legend, founded when Grand Duke Gediminas dreamed of an iron wolf howling on the hill and built his castle there in the 1320s, and it grew into the capital of the Grand Duchy of Lithuania, once the largest state in Europe, reaching from the Baltic almost to the Black Sea. Its university, founded in 1579, and its dense baroque churches made it a great centre of learning, and by the 19th century it was one of the most important Jewish cities in the world, the Jerusalem of the North, until the community was destroyed in the Holocaust. Passed between Poland, Nazi occupation and the Soviet Union, Lithuania was the first republic to declare independence from the USSR, in 1990, and Soviet tanks killed unarmed crowds at the TV tower in January 1991 before it broke free. Today Vilnius is a cheap, green, easygoing capital wrapped around the largest baroque old town in Europe.",
    knownFor: [
      "Baroque old town",
      "The Uzupis republic",
      "Gediminas Tower",
      "The Gates of Dawn",
      "Cepelinai",
      "Trakai Castle",
    ],
  },
  bratislava: {
    citySlug: "bratislava",
    image: hero(10137866),
    imageAlt:
      "Bratislava's white four-towered castle on the hill above the Danube",
    history:
      "Bratislava has been Slovak, Hungarian, Austrian and Czechoslovak within living memory, and was known for centuries by its German and Hungarian names, Pressburg and Pozsony. For nearly three centuries, while the Ottomans held Buda, it was the capital of Royal Hungary and the coronation city where 11 Hungarian kings and queens, Maria Theresa among them, were crowned in St Martin's Cathedral. The Habsburgs, Napoleon and the Cold War all left marks: Devin Castle above the town guarded the western edge of the communist bloc, its border a killing zone until 1989. Bratislava became the capital of an independent Slovakia only in 1993, after Czechoslovakia split peacefully, and it is now a small, cheap, fast-changing EU capital an hour downriver from Vienna.",
    knownFor: [
      "Bratislava Castle",
      "The baroque old town",
      "St Martin's coronations",
      "The UFO bridge",
      "The Cumil statue",
      "Cheap Slovak beer",
    ],
  },
  ljubljana: {
    citySlug: "ljubljana",
    image: hero(25053927),
    imageAlt:
      "The pink Franciscan church and Plecnik's Triple Bridge over the Ljubljanica river in Ljubljana",
    history:
      "Ljubljana began as the Roman colony of Emona, laid out around AD 14 where the road from Italy crossed the Ljubljanica, and fragments of its walls still surface in the city. It spent six centuries under the Habsburgs as Laibach, capital of the province of Carniola, and hosted the Congress of Laibach in 1821. An earthquake flattened much of it in 1895, and the rebuilding gave the centre its Vienna Secession facades; then, between the wars, the architect Joze Plecnik redrew the city almost single-handedly, adding the Triple Bridge, the riverside market colonnade and the National Library, work now UNESCO-listed. Slovenia broke from Yugoslavia in 1991 after a ten-day war, the shortest of those conflicts, and Ljubljana has since turned its car-free centre and its riverbanks into one of the greenest capitals in Europe.",
    knownFor: [
      "The Triple Bridge",
      "Ljubljana Castle",
      "Plecnik architecture",
      "The dragon symbol",
      "Riverside cafes",
      "Lake Bled day trip",
    ],
  },
  zurich: {
    citySlug: "zurich",
    image: hero(35975317),
    imageAlt:
      "The twin towers of the Grossmunster over the Limmat river and Zurich's old town",
    history:
      "Zurich began as the Roman customs post of Turicum on the Limmat, grew rich in the Middle Ages on silk and trade, and in 1519 became the cradle of the Swiss Reformation when Huldrych Zwingli started preaching at the Grossmunster and had the churches stripped bare. It joined the Swiss Confederation in 1351 and turned its Protestant thrift into a genius for banking, which is why a mid-sized city runs a chunk of the world's money from the Bahnhofstrasse and Paradeplatz. In 1916 the Cabaret Voltaire in the old town gave birth to Dada, the anti-art movement, while Lenin plotted revolution a few streets away. Today Zurich tops the world's quality-of-life and cost-of-living rankings at the same time: spotless, lake-clean and beautiful, and eye-wateringly expensive.",
    knownFor: [
      "Lake Zurich",
      "The Grossmunster",
      "The Bahnhofstrasse",
      "Swiss banking",
      "Chagall windows",
      "Very high prices",
    ],
  },
  warsaw: {
    citySlug: "warsaw",
    image: hero(32555031),
    imageAlt:
      "The colourful rebuilt townhouses and church spires of Warsaw's old town",
    history:
      "Warsaw became the capital of Poland around 1596 when the king moved his court from Krakow, and it grew into the elegant seat of a vast Polish-Lithuanian commonwealth. The 20th century nearly erased it: under Nazi occupation the city saw the 1943 Ghetto Uprising and then the 1944 Warsaw Uprising, after which the Germans systematically demolished what was left, and around 85 percent of the city lay in rubble by 1945. What stands today is an act of defiance, the Old Town rebuilt brick by brick from old paintings and drawings in the 1950s and now UNESCO-listed for exactly that. The Soviets later planted the Palace of Culture in the centre; since 1989 glass towers have risen around it, and Warsaw has become the fast, green and cheap-and-cheerful capital of an EU Poland.",
    knownFor: [
      "The rebuilt Old Town",
      "Warsaw Rising Museum",
      "Palace of Culture",
      "Chopin concerts",
      "The Mermaid",
      "Milk bars",
    ],
  },
  bucharest: {
    citySlug: "bucharest",
    image: hero(37944880),
    imageAlt:
      "The ornate Belle Epoque dome of the CEC Palace on Calea Victoriei in Bucharest",
    history:
      "Bucharest first appears in records in 1459, tied by legend to Vlad the Impaler, the prince who inspired Dracula, and it grew into the capital of Wallachia and then, in 1862, of a united Romania. Around 1900 French-trained architects covered it in Belle Epoque boulevards and palaces, earning it the nickname Little Paris of the East, complete with its own Arc de Triomphe. That elegance was gutted twice: by a huge earthquake in 1977, and then by the dictator Nicolae Ceausescu, who in the 1980s bulldozed a fifth of the old centre to raise his monstrous Palace of the Parliament and the Stalinist boulevards around it. Ceausescu was overthrown and executed in the December 1989 revolution, which boiled over in what is now Revolution Square, and Bucharest is today the fast, cheap and contradictory capital of an EU Romania.",
    knownFor: [
      "Palace of the Parliament",
      "Belle Epoque boulevards",
      "Lipscani old town",
      "The Athenaeum",
      "Very cheap prices",
      "The Dracula legend",
    ],
  },
  valencia: {
    citySlug: "valencia",
    image: hero(33560408),
    imageAlt:
      "The City of Arts and Sciences reflected in its pool at sunset in Valencia",
    history:
      "Valencia was founded by the Romans as Valentia in 138 BC, a colony for retired soldiers on the river Turia. Under Moorish rule it became Balansiya, a prosperous city of gardens and irrigation channels, until James I of Aragon took it in 1238 and folded it into the Christian kingdoms. Its 15th-century golden age was built on the silk trade, which paid for the Gothic Lonja where the merchants met. The Great Flood of the Turia in October 1957 drowned much of the city and led the authorities to divert the river around it entirely, turning the old bed into the 9km Turia Gardens; four decades later, Santiago Calatrava filled the far end of that riverbed with the futuristic City of Arts and Sciences, begun in the late 1990s.",
    knownFor: [
      "Paella",
      "City of Arts and Sciences",
      "Las Fallas",
      "Turia Gardens",
      "Central Market",
      "Horchata",
    ],
  },
  valletta: {
    citySlug: "valletta",
    image: hero(17404652),
    imageAlt:
      "The honey-coloured dome of the Carmelite basilica rising over Valletta's limestone townhouses",
    history:
      "Valletta was founded in 1566 by Grand Master Jean de Valette and the Knights of St John, the year after their outnumbered forces repelled the Ottoman fleet in the Great Siege of 1565. The engineer Francesco Laparelli laid it out as a planned Renaissance fortress city on a regular grid across the whole peninsula, filled with the Knights' national auberges and the great church of St John's. Napoleon seized the island in 1798 on his way to Egypt, but British rule followed from 1800 and lasted until independence in 1964. Heavily bombed in the Second World War, Malta was awarded the George Cross for its endurance in 1942, and Valletta has been a UNESCO World Heritage Site since 1980 and a European Capital of Culture in 2018.",
    knownFor: [
      "St John's Co-Cathedral",
      "Grand Harbour",
      "Knights of St John",
      "Honey limestone",
      "Pastizzi",
      "Mdina day trips",
    ],
  },
  gdansk: {
    citySlug: "gdansk",
    image: hero(5273641),
    imageAlt:
      "Historic gabled tenements and a moored galleon on the Motlawa riverfront in Gdansk",
    history:
      "Gdansk grew rich as a Hanseatic grain-and-amber port, Poland's gateway to the Baltic and for centuries a wealthy, semi-independent city that jealously guarded its own privileges, and between the wars it became the Free City of Danzig, neither fully German nor Polish. World War II began here on 1 September 1939, when the German battleship Schleswig-Holstein opened fire on the Polish garrison at Westerplatte and the fighting spread across the peninsula. By 1945 the city was over 90 percent destroyed, and the tall gabled merchant houses of the Long Market and Mariacka you see today were painstakingly rebuilt from old drawings and photographs. In 1980 the strikes at the Lenin Shipyard, led by an electrician named Lech Walesa, launched the Solidarity trade union, the movement that would help bring down communism across the Eastern bloc.",
    knownFor: [
      "Long Market",
      "Baltic amber",
      "St Mary's Church",
      "Solidarity",
      "The Crane",
      "Sopot beach",
    ],
  },
  bologna: {
    citySlug: "bologna",
    image: hero(38478884),
    imageAlt:
      "Bologna's sea of terracotta rooftops and medieval towers seen from above, with the hills beyond",
    history:
      "Bologna began as Etruscan Felsina and then Roman Bononia, a road town on the Via Aemilia, and grew into one of the wealthiest and most independent communes of medieval Italy. In 1088 it founded the oldest university in the Western world, drawing law students from across Europe and giving the city its enduring student character. Rival families raised dozens of tall defensive towers, of which the leaning Asinelli and Garisenda still stand, and the city lined its streets with the porticoes, now nearly 40km of them, that shelter walkers to this day. Long a papal city and later, after unification, a stronghold of the Italian left, Bologna kept its red-brick medieval core largely intact through the centuries and the wars.",
    knownFor: [
      "Tagliatelle al ragu",
      "The Two Towers",
      "Porticoes",
      "Oldest university",
      "Mortadella",
      "Piazza Maggiore",
    ],
  },
  sofia: {
    citySlug: "sofia",
    image: hero(28702047),
    imageAlt:
      "Gold and green copper domes of Alexander Nevsky Cathedral against a blue sky in Sofia",
    history:
      "Sofia sits on one of Europe's oldest inhabited sites, the Thracian and then Roman city of Serdica, whose streets and basilicas now surface between metro stations in the modern centre. Emperor Constantine the Great was fond of the place and is said to have called it 'my Rome', and the little red-brick St George Rotunda from the 4th century still stands in a courtyard behind the presidency. Five centuries of Ottoman rule left a mosque, mineral baths and market lanes, and when Sofia became the capital of newly liberated Bulgaria in 1879 it rebuilt itself with yellow-brick boulevards and the vast gold-domed Alexander Nevsky Cathedral. The Soviet decades added severe white monuments and wide squares, so a short walk today crosses Roman, Ottoman, Habsburg-style and socialist layers, all under the ski slopes of Mount Vitosha.",
    knownFor: [
      "Alexander Nevsky Cathedral",
      "Roman Serdica ruins",
      "Mount Vitosha",
      "Free mineral springs",
      "Yellow brick roads",
      "Cheapest EU capital",
    ],
  },
  belgrade: {
    citySlug: "belgrade",
    image: hero(17853057),
    imageAlt:
      "Belgrade Fortress and the Victor Monument above the Sava, with a floating splav at the quay",
    history:
      "Belgrade began as Roman Singidunum, a legionary camp guarding the meeting of the Sava and the Danube, and its position on that frontier has been its fortune and its curse ever since. For centuries it was the contested border between the Ottoman and Habsburg empires, besieged, razed and rebuilt dozens of times, which is why so little of the old city survives around the fortress that caused all the fighting. In the 20th century it served as capital of royal Yugoslavia, then of Tito's socialist federation and the Non-Aligned Movement he co-founded, and it was bombed in both world wars and again by NATO in 1999, whose ruined ministry buildings still stand on Kneza Milosa street. Today it is a fast-changing, sociable capital that wears all of those layers openly, from Ottoman relics to Yugoslav concrete to the new towers rising on the Sava.",
    knownFor: [
      "Kalemegdan Fortress",
      "Splavovi nightlife",
      "Temple of Saint Sava",
      "Kafanas and rakija",
      "Sava-Danube confluence",
      "Cheap nights out",
    ],
  },
  luxembourg: {
    citySlug: "luxembourg",
    image: hero(27659285),
    imageAlt:
      "The Grund valley in Luxembourg City with the Alzette river, Neumunster Abbey and the casemate cliffs seen from the Corniche",
    history:
      "Luxembourg City began in 963, when Count Siegfried acquired the rocky Bock promontory above the Alzette and built a castle whose name, Lucilinburhuc, gave the country its own. Its natural cliffs and river gorges made it one of the strongest fortresses in Europe, fought over and rebuilt in turn by Burgundians, Spanish, French, Austrians and Prussians, which earned it the nickname the Gibraltar of the North. The 1867 Treaty of London settled the endless tug of war by making Luxembourg permanently neutral and ordering most of the fortress dismantled, though miles of casemate tunnels bored into the rock survived. The old quarters and those fortifications were inscribed on the UNESCO World Heritage list in 1994, and today the Grand Duchy is a founding member of the European Union, with major EU institutions on the modern Kirchberg plateau just across the valley.",
    knownFor: [
      "Bock Casemates",
      "Chemin de la Corniche",
      "The Grund valley",
      "Golden Lady memorial",
      "Adolphe Bridge",
      "Free public transport",
    ],
  },
  malaga: {
    citySlug: "malaga",
    image: hero(37373117),
    imageAlt:
      "Malaga at dusk with the Alcazaba fortress and the cathedral, mountains beyond",
    history:
      "Malaga is one of the oldest cities in the world, founded by Phoenician traders as Malaka around 770 BC and later a busy Roman port that shipped garum and wine across the empire. From the 8th century it spent nearly 800 years under Moorish rule, which raised the walled Alcazaba and the Gibralfaro castle above the harbour, until the Catholic Monarchs took the city after a long siege in 1487. It is best known worldwide as the birthplace of Pablo Picasso, born on Plaza de la Merced in 1881. For most of the 20th century it was a working port and the gateway to the Costa del Sol resorts, before reinventing itself in the 2010s as an art-and-culture city with the Picasso Museum, the Pompidou and the Carmen Thyssen.",
    knownFor: [
      "Alcazaba and Gibralfaro",
      "Picasso",
      "Costa del Sol beaches",
      "Tapas and sweet wine",
      "Semana Santa",
      "Espetos",
    ],
  },
  milan: {
    citySlug: "milan",
    image: hero(36464757),
    imageAlt:
      "Milan's cityscape seen from the Gothic marble spires of the Duomo rooftop",
    history:
      "Milan began as a Celtic settlement and became the Roman city of Mediolanum, so central to the late empire that it served for a time as a capital of the Western Roman Empire, and it was here in 313 that the Edict of Milan granted Christians freedom of worship. In the Middle Ages it grew into a powerful duchy under the Visconti and then the Sforza, who raised the great brick castle and drew Leonardo da Vinci into their service. Later centuries passed it between Spanish and Austrian rule before it became a driving force in Italy's 19th-century unification and, in the 20th, in the country's industrial boom. Heavily bombed in the Second World War and rebuilt around a modern skyline, it stands today as Italy's financial, fashion and design capital.",
    knownFor: [
      "The Duomo",
      "The Last Supper",
      "Fashion and design",
      "Aperitivo",
      "Navigli canals",
      "La Scala opera",
    ],
  },
  lyon: {
    citySlug: "lyon",
    image: hero(5773238),
    imageAlt:
      "The Basilica of Notre-Dame de Fourviere above the ochre houses of old Lyon in evening light",
    history:
      "Lyon began as Roman Lugdunum, founded in 43 BC on the Fourviere hill and made the capital of the Three Gauls, the administrative heart of Roman Gaul. In the Renaissance it grew rich as a banking and printing centre at the crossroads of European trade fairs, and from the 18th century it became the world capital of silk weaving, worked by the canuts of the Croix-Rousse whose revolts marked the 1830s. It was here that the Lumiere brothers shot the first films and gave birth to cinema in 1895, and during the Second World War the city was a stronghold of the French Resistance. Today Lyon is France's gastronomic capital and a UNESCO World Heritage city, its Renaissance old town and traboules preserved intact.",
    knownFor: [
      "Bouchon bistros",
      "Vieux Lyon traboules",
      "Fourviere basilica",
      "Fete des Lumieres",
      "Two rivers",
      "Silk and the canuts",
    ],
  },
  salzburg: {
    citySlug: "salzburg",
    image: hero(37861319),
    imageAlt:
      "Hohensalzburg Fortress above Salzburg's baroque old town and church domes",
    history:
      "Salzburg began as the Roman town of Juvavum and took its later name from the salt hauled down the Salzach river, as Salz means salt and the trade made the city rich. For centuries it was ruled as an independent state by powerful prince-archbishops, who grew wealthy on that salt, rebuilt the town in Italian Baroque with its cathedral and squares, and held the hilltop Hohensalzburg fortress through every siege. Wolfgang Amadeus Mozart was born here in 1756, and the city has traded on his name ever since. Salzburg lost its church rulers and was joined to Austria in 1816, the Salzburg Festival was founded in 1920, and the baroque old town was made a UNESCO World Heritage Site in 1996.",
    knownFor: [
      "Hohensalzburg Fortress",
      "Mozart",
      "Baroque old town",
      "Sound of Music",
      "Salzburg Festival",
      "Advent markets",
    ],
  },
  hamburg: {
    citySlug: "hamburg",
    image: hero(19736459),
    imageAlt:
      "The Elbphilharmonie concert hall and the HafenCity waterfront seen across the Elbe in Hamburg",
    history:
      "Hamburg grew from a ninth-century fort on the marshy ground between the Elbe and the Alster into the richest port in northern Germany, and it still calls itself a Free and Hanseatic City after centuries of running its own trade and its own affairs. A charter tradition dating back to 1189 gave its merchants customs privileges on the Elbe, and the city marks that grant every May with the Hafengeburtstag, the harbour birthday. Fire destroyed much of the centre in 1842 and Allied bombing flattened far more in 1943, which is why so much of what you walk through is late nineteenth century red brick or postwar rebuild rather than medieval. The warehouse district of the Speicherstadt, built on oak piles from 1883, and the neighbouring Kontorhaus office quarter with the sharp-prowed Chilehaus were listed together by UNESCO in 2015, and the Elbphilharmonie opened on top of an old cocoa warehouse in January 2017 after a decade of delays and cost overruns.",
    knownFor: [
      "Elbphilharmonie",
      "Speicherstadt warehouses",
      "Europe's third-largest port",
      "Reeperbahn nightlife",
      "Sunday Fischmarkt",
      "Alster lakes",
    ],
  },
  bilbao: {
    citySlug: "bilbao",
    image: hero(38001762),
    imageAlt:
      "The Guggenheim Museum's titanium curves on the Nervion river in Bilbao, the Iberdrola Tower behind",
    history:
      "Bilbao grew rich in the 19th century on the iron ore of its Biscay hills, becoming one of Spain's great shipbuilding and steel powerhouses, its river packed with foundries, cranes and blast furnaces. When heavy industry collapsed in the 1980s the city was left grey, polluted and jobless, its port in ruins and the Nervion an open sewer. The 1997 opening of Frank Gehry's Guggenheim sparked what planners now call the Bilbao effect, a wholesale regeneration that cleaned the river, tore out the old docks and added Norman Foster's sleek metro and a Santiago Calatrava airport, turning a rust-belt city into a design pilgrimage. Today it is the proud Basque capital of the province of Biscay, defined as much by its cooking and its Athletic Bilbao football club as by the museum that saved it.",
    knownFor: [
      "Guggenheim Museum",
      "Pintxos",
      "Casco Viejo",
      "Basque cuisine",
      "Nervion riverfront",
      "Athletic Bilbao",
    ],
  },
  bergen: {
    citySlug: "bergen",
    image: hero(29755390),
    imageAlt:
      "The colourful Hanseatic wooden houses of Bryggen wharf in Bergen, boats and the green Floyen mountain behind",
    history:
      "Bergen was founded around 1070 by King Olav Kyrre and served as Norway's capital and biggest town for much of the Middle Ages. From the 14th century it was a key trading post of the German Hanseatic League, whose merchants ran the Bryggen wharf and grew rich on the stockfish shipped down from the north. Fire repeatedly gutted the tightly packed wooden town, so Bryggen was rebuilt time and again on its old lines and finally UNESCO-listed in 1979. A rainy fishing and shipping port and the birthplace of composer Edvard Grieg, Bergen is today the cruise-and-fjord gateway of western Norway.",
    knownFor: [
      "Bryggen wharf",
      "The fjords",
      "Floibanen funicular",
      "Fish Market",
      "Rain",
      "Edvard Grieg",
    ],
  },
  zagreb: {
    citySlug: "zagreb",
    image: hero(14133543),
    imageAlt:
      "St Mark's Church in Zagreb's Upper Town, its tiled roof showing the coats of arms of Croatia and the city",
    history:
      "Zagreb began as two rival hilltop settlements, the bishop's town of Kaptol and the free royal town of Gradec, separated by a stream that the locals nicknamed the Bloody Bridge after the fights that crossed it. The two were only merged into a single city in 1850, which is why the compact Upper Town still reads as two distinct quarters today. An earthquake in 1880 wrecked much of the centre and triggered the great rebuilding that produced the Lower Town's museums, parks and Austro-Hungarian facades, laid out in the U-shaped chain of squares known as Lenuci's Green Horseshoe. Capital of independent Croatia since 1991, the city was shaken again in March 2020 by a 5.5-magnitude quake that toppled one of the cathedral's spires, and restoration scaffolding has been part of the skyline ever since.",
    knownFor: [
      "St Mark's tiled roof",
      "Museum of Broken Relationships",
      "Dolac market",
      "Advent Christmas market",
      "Blue trams",
      "Gric cannon at noon",
    ],
  },
  antwerp: {
    citySlug: "antwerp",
    image: hero(34855097),
    imageAlt:
      "The single Gothic tower of Antwerp's Cathedral of Our Lady rising above the Scheldt waterfront",
    history:
      "Antwerp grew rich because ships could sail deep inland up the Scheldt, and by the middle of the 16th century it was the busiest port and money market in Europe, printing books, cutting diamonds and paying for the paintings of Peter Paul Rubens. That golden century ended in 1585, when Spanish troops took the city and the Dutch republic closed the mouth of the river, cutting the port off from the sea for more than two hundred years and sending its merchants north to Amsterdam. Napoleon reopened the story in 1803 by ordering the first stone docks north of the old centre, the basins you now walk around at Het Eilandje, because he wanted a naval base facing England. The river trade came back in the 19th century along with the diamond trade around Centraal station, and Antwerp today runs the second largest port in Europe while its fashion academy keeps the city's name on shop fronts far from Belgium.",
    knownFor: [
      "Peter Paul Rubens",
      "The diamond district",
      "Antwerpen-Centraal station",
      "The Antwerp Six",
      "Scheldt river port",
      "Bolleke De Koninck",
    ],
  },
  rotterdam: {
    citySlug: "rotterdam",
    image: hero(6776009),
    imageAlt:
      "The white pylon of the Erasmus Bridge and the Wilhelminapier towers above a Port of Rotterdam patrol boat on the Nieuwe Maas",
    history:
      "Rotterdam is the one big Dutch city with almost no old town, and the reason is a single afternoon: on 14 May 1940 German bombers burned out roughly two and a half square kilometres of the medieval centre in about fifteen minutes, and the fire finished what the bombs started. Rather than copy what was lost, the city used the empty ground as a building site for ideas, opening the Lijnbaan in 1953 as one of Europe's first purpose-built pedestrian shopping streets and then letting architects test the Cube Houses, the Markthal and a full skyline of towers on the same few hundred hectares. The port paid for all of it and kept growing west toward the sea, through Europoort and the reclaimed Maasvlakte, which is why Rotterdam still handles more cargo than any other port in Europe. One older corner survived intact: Delfshaven, the narrow harbour where the Pilgrims boarded the Speedwell in 1620 on their way to England and then America, and where the pre-war brick warehouses still lean over the water.",
    knownFor: [
      "Erasmus Bridge",
      "The Markthal",
      "Cube Houses",
      "Europe's largest port",
      "Post-war architecture",
      "Pilgrim Fathers at Delfshaven",
    ],
  },
};

export default extrasEn;

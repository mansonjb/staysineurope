import type en from "./en";

const it: typeof en = {
  locale: "it",
  months: [
    "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
  ],
  monthsShort: [
    "Gen", "Feb", "Mar", "Apr", "Mag", "Giu",
    "Lug", "Ago", "Set", "Ott", "Nov", "Dic",
  ],
  common: {
    day: "Giorno",
    days: "giorni",
    from: "da",
    perNight: "/notte",
    checkPrices: "Vedi i prezzi",
    findHotels: "Trova hotel",
    free: "Gratis",
    tip: "Consiglio",
    morning: "Mattina",
    afternoon: "Pomeriggio",
    evening: "Sera",
    comingSoon: "(in arrivo)",
    home: "Home",
    faqTitle: "Domande rapide, risposte dirette",
  },
  header: { destinations: "Destinazioni", guides: "Guide", method: "Metodo" },
  footer: {
    tagline:
      "Il quartiere giusto decide la riuscita di un city break. Confrontiamo le zone delle città migliori d'Europa e indichiamo l'hotel che vale la pena prenotare in ciascuna.",
    cities: "Città",
    site: "Sito",
    allDestinations: "Tutte le destinazioni",
    travelGuides: "Guide di viaggio",
    aboutMethod: "Chi siamo e metodologia",
    privacy: "Informativa sulla privacy",
    disclosure:
      "Stays in Europe riceve commissioni dai link di prenotazione (Stay22 e partner di biglietteria). Questo non cambia mai il prezzo che paghi né le nostre raccomandazioni.",
  },
  stay22: {
    loading: "Caricamento della mappa degli hotel…",
    mapNote: "La mappa mostra i prezzi degli hotel in tempo reale.",
    openSearch: "Apri la ricerca hotel completa",
    supportNote: ". Prenotare da qui sostiene il sito senza costi extra.",
    hotelsIn: "Hotel a {name}",
  },
  hotels: {
    defaultTitle: "Dove dormiremmo a {city}",
    defaultIntro:
      "Quattro indirizzi che coprono la gamma realistica, dallo sfizio al budget. I prezzi sono basi di bassa stagione; controlla le tariffe in tempo reale per le tue date.",
    seeAll: "Vedi tutti gli hotel di {city}",
    photosNote:
      "Foto reali degli hotel · prezzi indicativi a partire da, non tariffe in tempo reale · i link di prenotazione sostengono il sito senza costi extra",
  },
  cityCard: { days: "Giorni", best: "Top", budget: "Budget" },
  bestFor: {
    "first-time": "Prima visita",
    nightlife: "Vita notturna",
    family: "Famiglia",
    budget: "Budget",
    romantic: "Romantico",
    local: "Vita locale",
  },
  toolbar: {
    hotels: "Hotel",
    ourPicks: "I nostri indirizzi",
    howManyDays: "Quanti giorni",
    whereToStay: "Dove dormire",
    whenToGo: "Quando andare",
    hotelMap: "Mappa hotel",
    faq: "FAQ",
    compare: "Confronta",
    whereToSleep: "Dove dormire",
    day: "Giorno {n}",
  },
  bp: {
    pass: "Pass city break",
    idealStay: "Durata ideale",
    bestMonths: "Mesi migliori",
    midBudget: "Budget medio",
    airport: "Aeroporto",
    itinerary: "Itinerario di {days} giorni",
    duration: "Durata",
    base: "Base",
    forecast: "Previsioni di {month}",
    dayHigh: "Max diurna",
    nightLow: "Min notturna",
    rainyDays: "Giorni di pioggia",
    verdict: "Verdetto",
    go: "Vai",
    avoid: "Evita",
    fair: "Discreto",
    roomKey: "Chiave della camera",
    firstVisit: "Prima visita",
    budgetPick: "Scelta budget",
    nightlife: "Vita notturna",
    midHotel: "Hotel medio",
    budgetPass: "Pass budget",
    dailyTarget: "Obiettivo al giorno",
    sleepIn: "Dormire a",
    freeSights: "Attrazioni gratis",
    daysValue: "{days} giorni",
    perDay: "{price} EUR/giorno",
  },
  stamp: {
    daysIdeal: "{days} giorni, l'ideale",
    dayByDay: "Piano giorno per giorno",
    greatPick: "Ottima scelta",
    thinkTwice: "Pensaci due volte",
    shoulder: "Mezza stagione",
    areasCompared: "{n} zone a confronto",
    perDay: "~{price} EUR / giorno",
  },
  hub: {
    metaTitle: "City break a {city}: quanti giorni, dove dormire, quando andare",
    metaDesc:
      "{city} in {days} giorni: itinerari giorno per giorno, il quartiere giusto per il tuo viaggio, consigli mese per mese e budget onesti.",
    answer: "{city} dà il meglio come city break di {days} giorni. {intro}",
    howManyTitle: "Quanti giorni a {city}?",
    howManyIntro:
      "Scegli l'itinerario che corrisponde al tuo viaggio. Ognuno è un piano completo giorno per giorno, non una lista di 30 cose da incastrare.",
    seeItinerary: "Vedi l'itinerario →",
    wtsTitle: "Dove dormire a {city}",
    walkable:
      "Il centro di {city} si gira a piedi, quindi il quartiere che scegli dà il tono a tutto il viaggio.",
    spread:
      "{city} è una città estesa, quindi scegliere la base giusta ti fa risparmiare ore di trasporti.",
    fullComparison: "Confronto completo",
    monthsTitle: "{city}, mese per mese",
    monthsIntro:
      "I mesi colorati sono il periodo ideale. I mesi barrati arrivano con un avvertimento. Ogni pagina copre meteo, folla, prezzi e cosa mettere in valigia.",
    mapTitle: "I prezzi degli hotel in questo momento",
    historyTitle: "Un po' di storia",
    knownForTitle: "{city} è famosa per",
    faqAroundQ: "È facile muoversi a {city}?",
    faqAroundAWalk:
      "Sì. {city} ha un centro che si gira a piedi, quindi la maggior parte di un viaggio breve si fa a piedi. {airport}",
    faqAroundASpread:
      "{city} è una città estesa, quindi metti in conto i mezzi pubblici tra le zone. {airport}",
    faqAirportQ: "Come arrivo dall'aeroporto al centro di {city}?",
    faqAirportA: "{airport} È l'opzione più economica e di solito la più veloce.",
    faqKnownQ: "Per cosa è famosa {city}?",
    faqKnownA: "{city} è famosa soprattutto per {list}. {history}",
    tightBudget: "Budget ridotto?",
    budgetCard: "{city} low cost: lo stesso viaggio con circa {price} EUR al giorno",
    readBudget: "Leggi la guida budget →",
    pairsWell: "Si abbina bene con",
    faqDaysQ: "Quanti giorni servono a {city}?",
    faqDaysA: "{days} giorni è la durata ideale per {city}. {rest}",
    faqWhenQ: "Qual è il periodo migliore per visitare {city}?",
    faqWhenA: "I mesi migliori sono {months}. {avoid}",
    faqAvoid: "Pensaci due volte per {months}: {note}",
    faqExpQ: "{city} è una città cara?",
    faqExpA:
      "{city} si colloca {level} della media europea. Calcola circa {low} EUR al giorno con un budget stretto, {mid} EUR per un viaggio comodo di fascia media, e {high} EUR o più se vuoi i migliori hotel e ristoranti.",
    levelBelow: "al di sotto",
    levelAround: "al livello",
    levelAbove: "al di sopra",
    faqFirstQ: "Dove dormire a {city} alla prima visita?",
    faqFirstA: "{hood} è la base più sicura per una prima visita. {vibe}",
    faqFirstFallback:
      "Vedi il confronto completo dei quartieri nella nostra guida su dove dormire.",
  },
  iti: {
    metaTitle: "{city} in {days} giorni: l'itinerario giorno per giorno",
    metaDesc:
      "Un piano realistico giorno per giorno per {days} giorni a {city}: cosa vedere ogni mattina, pomeriggio e sera, dove dormire, e i consigli che ti risparmiano le code.",
    h1Connector: "in",
    daysUnit: "giorni",
    sleepTitle: "Dormire bene per questi {days} giorni",
    sleepIntro:
      "Indirizzi ordinati con la nostra base consigliata, {hood}, per prima. Prenota presto: le camere con il miglior rapporto qualità-prezzo spariscono settimane prima.",
    whereToSleepTitle: "Dove dormire per questo itinerario",
    whereToSleepBody: "Per {days} giorni, sistemati a {hood}. {vibe}",
    fullGuideLink: "Confronta tutti i quartieri nella guida completa su dove dormire.",
    shortTime: "Poco tempo?",
    gotLonger: "Hai più tempo?",
    faqEnoughQ: "{days} giorni bastano per {city}?",
    faqStayQ: "Dove conviene dormire per {days} giorni a {city}?",
    faqStayA: "Sistemati a {hood} per questo itinerario. {vibe}",
    faqStayFallback:
      "Resta in centro: vedi la nostra guida su dove dormire a {city}.",
    faqBestTimeQ: "Qual è il periodo migliore per questo itinerario a {city}?",
    faqBestTimeA:
      "Il piano funziona tutto l'anno, ma {months} offrono il miglior rapporto tra meteo e folla.",
  },
  mon: {
    metaTitle: "{city} in {month}: meteo, folla e se ne vale la pena",
    metaDesc:
      "{city} in {month}: temperature reali, giorni di pioggia, livello di folla, cosa mettere in valigia e se è il mese giusto per il tuo city break.",
    connector: "in",
    verdictBest: "{month} è uno dei mesi migliori per visitare {city}.",
    verdictAvoid:
      "{month} è il mese che eviteremmo a {city} se hai date flessibili.",
    verdictShoulder:
      "{month} è una discreta opzione di mezza stagione per {city}: meno folla, qualche compromesso.",
    answer:
      "{verdict} Aspettati massime diurne intorno ai {high}°C, notti vicine ai {low}°C e circa {rain} giorni di pioggia nel mese. {note}",
    packTitle: "Cosa mettere in valigia per {city} in {month}",
    packShoes: "Scarpe comode: farai più di 15.000 passi al giorno",
    packSun:
      "Protezione solare e una borraccia riutilizzabile: i pomeriggi si scaldano",
    packLayers: "Strati leggeri: pomeriggi caldi, serate più fresche",
    packJacket: "Una giacca vera e uno strato caldo per la sera",
    packGloves: "Guanti e berretto: le mattine sfiorano lo zero",
    packUmbrella:
      "Un ombrello compatto o una giacca antipioggia: la pioggia è una possibilità concreta",
    packRainLayer: "Uno strato antipioggia ripiegabile, per sicurezza",
    worksTitle: "Cosa funziona bene in {month}",
    worksCold:
      "Con {rain} giorni di pioggia e massime di {high}°C, costruisci le tue giornate di {month} intorno ad ancore al chiuso e considera le finestre di sole un bonus.",
    worksWarm:
      "Con massime intorno ai {high}°C, {month} è un mese da vivere all'aperto: dai priorità a punti panoramici, parchi e lunghe camminate.",
    planFull: "Pronto a pianificare tutto il viaggio? Inizia con",
    planFullLink: "l'itinerario di {city} in {days} giorni",
    hotelsTitle: "Dove dormire a {city} in {month}",
    hotelsIntroHigh:
      "{month} è molto richiesto: prenota da 4 a 6 settimane prima per mantenere realistici questi prezzi.",
    hotelsIntroLow:
      "{month} è più tranquillo, il che lo rende il mese giusto per concedersi gli indirizzi da sfizio.",
    mapTitle: "Hotel a {city} per {month}",
    otherMonth: "Oppure scegli un altro mese",
    faqGoodQ: "{month} è un buon periodo per visitare {city}?",
    faqWarmQ: "Che temperature ci sono a {city} in {month}?",
    faqWarmA:
      "Le giornate tipiche di {month} a {city} arrivano a circa {high}°C, scendendo verso i {low}°C di notte. Vestirsi a strati è la soluzione migliore.",
    faqRainQ: "Piove a {city} in {month}?",
    faqRainA: "Conta circa {rain} giorni con pioggia in {month}. {detail}",
    rainMuch:
      "Prevedi un blocco al chiuso al giorno e tieni i biglietti dei musei come piano B.",
    rainLittle: "La pioggia raramente dura tutto il giorno, quindi i piani reggono bene.",
  },
  wts: {
    metaTitle: "Dove dormire a {city}: il quartiere giusto, zona per zona",
    metaDesc:
      "Quale quartiere di {city} si adatta al tuo viaggio, e l'hotel vero che vale la pena prenotare in ciascuno. Pro e contro onesti, una tabella delle decisioni e mappe in tempo reale per zona.",
    h1: "Dove dormire a",
    shortlistTitle: "Dritti alla risposta",
    shortlistIntro:
      "Poco tempo? Quattro hotel di {city} che prenoteremmo davvero, dallo sfizio al budget, ognuno in una delle zone analizzate qui sotto.",
    boardTitle: "La tabella delle decisioni",
    boardNeighborhood: "Quartiere",
    boardBookIf: "Prenota se cerchi",
    boardWatchOut: "Attenzione a",
    boardHotels: "Hotel",
    bookFor: "Prenotalo per",
    knowBefore: "Da sapere prima",
    pickedNext: "Quartiere scelto?",
    pickedLink: "Scopri altre città europee",
    answerFirst: "Prima volta a {city}? Dormi a {hood}: {pro}.",
    answerFallback: "Resta vicino al centro di {city} e difficilmente sbagli.",
    answerBudget:
      "Budget limitato? {hood} scambia un po' di vivacità con più spazio per lo stesso prezzo.",
    answerWalkable:
      "Il centro si gira a piedi, quindi ogni zona qui sotto ti tiene a portata delle attrazioni principali; quello che cambia davvero è l'atmosfera della strada in cui torni la sera.",
    answerSpread:
      "Qui le distanze contano, quindi abbina la zona al programma che hai davvero.",
    faqBestQ: "Qual è la zona migliore dove dormire a {city}?",
    faqNightQ: "Dove dormire a {city} per la vita notturna?",
    faqNightA: "{hood} è la zona da prenotare per uscire la sera. {vibe} Un avviso onesto: {con}",
    faqCheapQ: "Qual è la zona economica migliore dove dormire a {city}?",
    faqCheapA: "{hood} offre il miglior rapporto tra posizione e prezzo. {vibe}",
    faqCentralQ: "È meglio alloggiare nel centro di {city}?",
    faqCentralAWalk:
      "Per la maggior parte dei viaggi, sì. {city} ha un centro compatto e pedonale: alloggiarci mette le attrazioni principali a pochi minuti a piedi e ti evita spostamenti. Le zone qui sotto sono tutte centrali o a pochi minuti; scegli in base all'atmosfera e al prezzo, non alla distanza.",
    faqCentralASpread:
      "{city} è estesa, quindi «centrale» conta meno che scegliere la zona adatta ai tuoi programmi. Alloggiare vicino ai luoghi e ai quartieri che ti interessano davvero fa risparmiare più tempo che puntare al centro esatto.",
    faqFamilyQ: "Dove alloggiare in famiglia a {city}?",
    faqFamilyA: "{hood} è la base più comoda per le famiglie: {vibe}",
  },
  bud: {
    metaTitle: "{city} low cost: lo stesso viaggio con {price} EUR al giorno",
    metaDesc:
      "Come fare un city break a {city} con circa {price} EUR al giorno: le attrazioni gratuite che valgono davvero, dove dormire spendendo poco e dove mangiano i locali.",
    h1Suffix: "low cost",
    answer:
      "Un city break a {city} con circa {price} EUR a persona al giorno è realistico. La formula: dormi a {hood}, cammina invece di prendere i mezzi ({walk}), costruisci le giornate intorno ad ancore gratuite come {anchors}, e mangia dove mangiano i locali. Anche arrivare dall'aeroporto costa poco: {airport}.",
    walkCompact: "il centro è abbastanza compatto",
    walkZones: "scegli una zona al giorno",
    hotelsTitle: "Dormire spendendo poco, dormire bene",
    hotelsIntro:
      "Gli indirizzi sotto i {price} EUR che non sembrano un compromesso.",
    freeTitle: "Le ancore gratuite",
    freeIntro:
      "Non costano nulla e riempiono una giornata intera ciascuna. Costruisci intorno a loro e i biglietti a pagamento diventano extra opzionali invece di un salasso.",
    eatTitle: "Mangiare bene, pagare prezzi locali",
    sleepTitle: "Dormire spendendo poco a {hood}",
    orderNote: "Ora metti tutto in ordine:",
    orderLink: "l'itinerario di {city} in {days} giorni",
    orderSuffix: "funziona con questo budget grazie agli scambi qui sopra.",
    faqCostQ: "Quanto costa un viaggio low cost a {city}?",
    faqFreeQ: "Cosa si può fare gratis a {city}?",
    faqFreeA:
      "Le migliori attrazioni gratuite di {city}: {list}. Diverse attrazioni a pagamento hanno anche fasce orarie gratuite o ridotte; guarda i consigli su ogni pagina di itinerario.",
    faqCheapAreaQ: "Qual è la zona più economica dove dormire a {city}?",
  },
  home: {
    metaTitle: "Stays in Europe: dove dormire nelle migliori città d'Europa",
    metaDesc:
      "Quale quartiere prenotare nelle migliori città d'Europa, e l'hotel vero che vale la pena scegliere in ciascuna. Pro e contro onesti, mappe in tempo reale e indirizzi verificati, zona per zona.",
    stamp: "Dove dormire, fatto bene",
    heroParts: [
      { pre: "La ", word: "città", post: " giusta." },
      { pre: " Il ", word: "quartiere", post: " giusto." },
      { pre: " L'", word: "hotel", post: " giusto." },
    ],
    heroSub:
      "Per ogni città che trattiamo, una pagina risponde alla domanda che decide silenziosamente il tuo viaggio: in quale quartiere dormire, e il miglior hotel vero in ciascuno. Pro e contro onesti, mappe in tempo reale, senza fronzoli.",
    pickCity: "Scegli una città",
    howManyBtn: "Quanti giorni mi servono?",
    departures: "Partenze · prima l'Europa",
    daysIdealShort: "{days} giorni, l'ideale",
    best: "top",
    boarding: "imbarco →",
    whereNext: "Dove andiamo?",
    allDest: "Tutte le destinazioni",
    searchPlaceholder: "Cerca una città, es. Bruges",
    searchNoResult: "Ancora nessuna città per questa ricerca. Ne aggiungiamo di nuove con cura nel tempo.",
    browseAll: "Sfoglia tutte",
    knownForLead: "Famosa per",
    faqTitle: "Le domande su dove dormire, con risposta",
    faqs: [
      {
        q: "Perché il quartiere conta così tanto in un city break?",
        a: "In un viaggio di due o quattro giorni si esce a malapena dalla zona intorno all'hotel, quindi il quartiere che scegli diventa il viaggio stesso. Quello giusto ti mette le attrazioni, il buon cibo e la serata che cerchi a portata di mano; quello sbagliato trasforma tutto in uno spostamento.",
      },
      {
        q: "Come decidete qual è la zona migliore dove dormire in una città?",
        a: "Pesiamo ciò che cambia davvero le tue giornate: quanto sono vicine a piedi le attrazioni principali, il carattere delle strade di sera, la sicurezza, il rumore e quanto costa davvero una camera decente lì. Ogni pagina città mette le migliori zone a confronto una accanto all'altra, così puoi trovare quella giusta per il tuo viaggio.",
      },
      {
        q: "Gli hotel selezionati sono sponsorizzati?",
        a: "No. Ogni città riceve quattro hotel veri che prenoteremmo noi stessi, dallo sfizio al budget, scelti prima di tutto per la posizione. Riceviamo una commissione se prenoti tramite i nostri link, ma questo non decide mai quali hotel entrano nella lista.",
      },
      {
        q: "Quanti hotel elencate per città?",
        a: "Quattro: uno sfizio, due fascia media e uno budget, ognuno ancorato a un quartiere diverso, così la scelta funziona anche da consiglio di zona. Meno indirizzi ma scelti meglio valgono più di un muro di cento annunci da filtrare da solo.",
      },
      {
        q: "Le mappe mostrano i prezzi reali degli hotel?",
        a: "Sì. La mappa di ogni città recupera le tariffe hotel in tempo reale per le tue date, così confronti quello che pagheresti davvero, non un prezzo di partenza superato. Prenotare da lì sostiene il sito senza costi extra per te.",
      },
    ],
    methodKicker: "Il nostro metodo",
    methodTitle:
      "Niente \"gemme nascoste\". Niente liste da 100 indirizzi. Una scelta chiara per zona.",
    methodBody:
      "Ogni città è costruita allo stesso modo: i quartieri confrontati su ciò che conta davvero, la zona migliore indicata per ogni tipo di viaggio, e un hotel vero che vale la pena prenotare in ciascuna. Ogni riga deve superare un test: puoi agire di conseguenza? Se no, si taglia.",
    methodLink: "Come scegliamo",
  },
  dest: {
    metaTitle: "Dove dormire in Europa: città e quartieri a confronto",
    metaDesc:
      "Tutte le città che trattiamo, con il quartiere migliore dove dormire e un hotel vero che vale la pena prenotare in ciascuna. Una selezione piccola, in crescita. Prima l'Europa.",
    kicker: "Tabellone delle partenze",
    h1: "Dove dormire in Europa",
    intro:
      "Una lista breve e volutamente ridotta di città europee, che si allarga con cura nel tempo. Ogni città riceve lo stesso trattamento: i quartieri confrontati fianco a fianco, la zona migliore indicata per il tuo tipo di viaggio, e un hotel vero che vale la pena prenotare in ciascuna.",
    cityBreaksIn: "Dove dormire in {country}",
    countryMetaTitle: "Dove dormire in {country}: le città e le zone migliori",
    countryMetaDesc:
      "Tutte le città di {country} che trattiamo su Stays in Europe: il quartiere migliore dove dormire e un hotel che vale la pena prenotare in ciascuna.",
  },
};

export default it;

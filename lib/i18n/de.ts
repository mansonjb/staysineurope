import type en from "./en";

const de: typeof en = {
  locale: "de",
  months: [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ],
  monthsShort: [
    "Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
    "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
  ],
  common: {
    day: "Tag",
    days: "Tage",
    from: "ab",
    perNight: "/Nacht",
    checkPrices: "Preise prüfen",
    findHotels: "Hotels finden",
    free: "Gratis",
    tip: "Tipp",
    morning: "Vormittag",
    afternoon: "Nachmittag",
    evening: "Abend",
    comingSoon: "(bald verfügbar)",
    home: "Start",
    faqTitle: "Kurze Fragen, klare Antworten",
  },
  header: { destinations: "Reiseziele", guides: "Guides", method: "Methode" },
  footer: {
    tagline:
      "Das richtige Viertel entscheidet über einen Citytrip. Wir vergleichen die Viertel der besten Städte Europas und nennen das Hotel, das sich in jedem lohnt.",
    cities: "Städte",
    site: "Seite",
    allDestinations: "Alle Reiseziele",
    travelGuides: "Reiseguides",
    aboutMethod: "Über uns und Methodik",
    privacy: "Datenschutzerklärung",
    disclosure:
      "Stays in Europe erhält Provisionen über Buchungslinks (Stay22 und Ticketpartner). Das ändert nie den Preis, den Sie zahlen, und nie unsere Empfehlungen.",
  },
  stay22: {
    loading: "Hotelkarte wird geladen…",
    mapNote: "Die Karte zeigt aktuelle Hotelpreise.",
    openSearch: "Die vollständige Hotelsuche öffnen",
    supportNote: ". Eine Buchung darüber unterstützt die Seite ohne Mehrkosten.",
    hotelsIn: "Hotels in {name}",
  },
  hotels: {
    defaultTitle: "Wo wir in {city} übernachten würden",
    defaultIntro:
      "Vier Empfehlungen, die die realistische Bandbreite abdecken, vom Luxus bis zum kleinen Budget. Die Preise sind Startwerte der Nebensaison; prüfen Sie die aktuellen Raten für Ihre Reisedaten.",
    seeAll: "Alle Hotels in {city} ansehen",
    photosNote:
      "Echte Hotelfotos · Preise sind Richtwerte ab, keine Live-Tarife · Buchungslinks unterstützen die Seite ohne Mehrkosten",
  },
  cityCard: { days: "Tage", best: "Top", budget: "Budget" },
  bestFor: {
    "first-time": "Erster Besuch",
    nightlife: "Nachtleben",
    family: "Familie",
    budget: "Budget",
    romantic: "Romantisch",
    local: "Lokales Leben",
  },
  toolbar: {
    hotels: "Hotels",
    ourPicks: "Unsere Tipps",
    howManyDays: "Wie viele Tage",
    whereToStay: "Wo übernachten",
    whenToGo: "Beste Reisezeit",
    hotelMap: "Hotelkarte",
    faq: "FAQ",
    compare: "Vergleichen",
    whereToSleep: "Wo übernachten",
    day: "Tag {n}",
  },
  bp: {
    pass: "Citytrip-Pass",
    idealStay: "Ideale Dauer",
    bestMonths: "Beste Monate",
    midBudget: "Mittleres Budget",
    airport: "Flughafen",
    itinerary: "{days}-Tage-Plan",
    duration: "Dauer",
    base: "Basis",
    forecast: "Prognose {month}",
    dayHigh: "Tageshoch",
    nightLow: "Nachttief",
    rainyDays: "Regentage",
    verdict: "Fazit",
    go: "Los",
    avoid: "Meiden",
    fair: "Okay",
    roomKey: "Zimmerschlüssel",
    firstVisit: "Erster Besuch",
    budgetPick: "Budget-Tipp",
    nightlife: "Nachtleben",
    midHotel: "Mittelklassehotel",
    budgetPass: "Budget-Pass",
    dailyTarget: "Tagesziel",
    sleepIn: "Übernachten in",
    freeSights: "Gratis-Highlights",
    daysValue: "{days} Tage",
    perDay: "{price} EUR/Tag",
  },
  stamp: {
    daysIdeal: "{days} Tage ideal",
    dayByDay: "Tag-für-Tag-Plan",
    greatPick: "Starke Wahl",
    thinkTwice: "Zweimal überlegen",
    shoulder: "Nebensaison",
    areasCompared: "{n} Viertel im Vergleich",
    perDay: "~{price} EUR / Tag",
  },
  hub: {
    metaTitle: "Citytrip {city}: wie viele Tage, wo übernachten, wann reisen",
    metaDesc:
      "{city} in {days} Tagen: Tag-für-Tag-Pläne, das richtige Viertel für Ihre Reise, Tipps für jeden Monat und ehrliche Budgets.",
    answer: "{city} funktioniert am besten als Citytrip von {days} Tagen. {intro}",
    howManyTitle: "Wie viele Tage für {city}?",
    howManyIntro:
      "Wählen Sie den Plan, der zu Ihrer Reise passt. Jeder ist ein vollständiger Tag-für-Tag-Plan, keine Liste mit 30 Punkten zum Abhaken.",
    seeItinerary: "Zum Plan →",
    wtsTitle: "Wo übernachten in {city}",
    walkable:
      "{city} hat ein fußläufiges Zentrum: Das Viertel, das Sie wählen, prägt die ganze Reise.",
    spread:
      "{city} ist weitläufig: Die richtige Basis spart Ihnen Stunden im Nahverkehr.",
    fullComparison: "Kompletter Vergleich",
    monthsTitle: "{city}, Monat für Monat",
    monthsIntro:
      "Farbige Monate sind die beste Zeit. Durchgestrichene Monate kommen mit einer Warnung. Jede Seite behandelt Wetter, Andrang, Preise und Packliste.",
    mapTitle: "Hotelpreise gerade jetzt",
    historyTitle: "Ein wenig Geschichte",
    knownForTitle: "{city} ist bekannt für",
    faqAroundQ: "Kommt man in {city} leicht herum?",
    faqAroundAWalk:
      "Ja. {city} hat ein fußläufiges Zentrum, sodass Sie den Großteil einer kurzen Reise zu Fuß erledigen. {airport}",
    faqAroundASpread:
      "{city} ist weitläufig, planen Sie also öffentliche Verkehrsmittel zwischen den Vierteln ein. {airport}",
    faqAirportQ: "Wie komme ich vom Flughafen ins Zentrum von {city}?",
    faqAirportA: "{airport} Das ist die günstigste und meist auch die schnellste Option.",
    faqKnownQ: "Wofür ist {city} bekannt?",
    faqKnownA: "{city} ist vor allem bekannt für {list}. {history}",
    tightBudget: "Knappes Budget?",
    budgetCard: "{city} günstig: dieselbe Reise für rund {price} EUR pro Tag",
    readBudget: "Zum Budget-Guide →",
    pairsWell: "Passt gut zu",
    faqDaysQ: "Wie viele Tage braucht man für {city}?",
    faqDaysA: "{days} Tage sind die ideale Dauer für {city}. {rest}",
    faqWhenQ: "Wann ist die beste Reisezeit für {city}?",
    faqWhenA: "Die besten Monate sind {months}. {avoid}",
    faqAvoid: "Überlegen Sie zweimal bei {months}: {note}",
    faqExpQ: "Ist {city} teuer?",
    faqExpA:
      "{city} liegt {level} des europäischen Durchschnitts. Rechnen Sie mit rund {low} EUR pro Tag bei knappem Budget, {mid} EUR für eine komfortable Reise der Mittelklasse und {high} EUR und mehr, wenn Sie Top-Hotels und Restaurants wollen.",
    levelBelow: "unterhalb",
    levelAround: "auf Höhe",
    levelAbove: "oberhalb",
    faqFirstQ: "Wo sollte man beim ersten Besuch in {city} übernachten?",
    faqFirstA: "{hood} ist die sicherste Basis für den ersten Besuch. {vibe}",
    faqFirstFallback:
      "Den vollständigen Viertel-Vergleich finden Sie in unserem Übernachtungs-Guide.",
  },
  iti: {
    metaTitle: "{city} in {days} Tagen: der Tag-für-Tag-Plan",
    metaDesc:
      "Ein realistischer Tag-für-Tag-Plan für {days} Tage in {city}: was Sie an jedem Vormittag, Nachmittag und Abend sehen, wo Sie übernachten und die Tipps, die Ihnen Warteschlangen ersparen.",
    h1Connector: "in",
    daysUnit: "Tagen",
    sleepTitle: "Gut schlafen in diesen {days} Tagen",
    sleepIntro:
      "Empfehlungen sortiert mit unserer empfohlenen Basis, {hood}, zuerst. Buchen Sie früh: Die Zimmer mit gutem Preis-Leistungs-Verhältnis sind Wochen im Voraus weg.",
    whereToSleepTitle: "Wo übernachten für diesen Plan",
    whereToSleepBody: "Für {days} Tage wählen Sie {hood} als Basis. {vibe}",
    fullGuideLink: "Vergleichen Sie alle Viertel im vollständigen Übernachtungs-Guide.",
    shortTime: "Wenig Zeit?",
    gotLonger: "Mehr Zeit?",
    faqEnoughQ: "Reichen {days} Tage für {city}?",
    faqStayQ: "Wo übernachte ich für {days} Tage in {city}?",
    faqStayA: "Wählen Sie {hood} als Basis für diesen Plan. {vibe}",
    faqStayFallback:
      "Bleiben Sie zentral: Alle Details in unserem Übernachtungs-Guide für {city}.",
    faqBestTimeQ: "Wann ist die beste Zeit für diesen {city}-Plan?",
    faqBestTimeA:
      "Der Plan funktioniert das ganze Jahr, aber {months} bieten das beste Verhältnis von Wetter zu Andrang.",
  },
  mon: {
    metaTitle: "{city} im {month}: Wetter, Andrang und lohnt es sich",
    metaDesc:
      "{city} im {month}: echte Temperaturen, Regentage, Andrang, Packliste und ob es der richtige Monat für Ihren Citytrip ist.",
    connector: "im",
    verdictBest: "{month} ist einer der besten Monate für einen Besuch in {city}.",
    verdictAvoid:
      "{month} ist der Monat, den wir in {city} meiden würden, wenn Ihre Daten flexibel sind.",
    verdictShoulder:
      "{month} ist eine solide Nebensaison-Option für {city}: weniger Andrang, ein paar Kompromisse.",
    answer:
      "{verdict} Rechnen Sie tagsüber mit Höchstwerten um {high}°C, nachts um {low}°C und etwa {rain} Regentagen im Monat. {note}",
    packTitle: "Packliste für {city} im {month}",
    packShoes: "Bequeme Schuhe: Sie werden über 15.000 Schritte pro Tag gehen",
    packSun:
      "Sonnenschutz und eine auffüllbare Wasserflasche: Die Nachmittage werden heiß",
    packLayers: "Leichte Schichten: warme Nachmittage, kühlere Abende",
    packJacket: "Eine richtige Jacke und eine warme Schicht für den Abend",
    packGloves: "Handschuhe und Mütze: Die Morgen liegen nahe am Gefrierpunkt",
    packUmbrella:
      "Ein kompakter Schirm oder eine Regenjacke: Regen ist eine reale Möglichkeit",
    packRainLayer: "Eine packbare Regenschicht, für alle Fälle",
    worksTitle: "Was im {month} gut funktioniert",
    worksCold:
      "Mit {rain} Regentagen und Höchstwerten von {high}°C bauen Sie Ihre {month}-Tage am besten um Indoor-Anker und nehmen sonnige Fenster als Bonus mit.",
    worksWarm:
      "Mit Höchstwerten um {high}°C ist {month} Wetter für draußen: Priorisieren Sie Aussichtspunkte, Parks und lange Spaziergänge.",
    planFull: "Bereit, die ganze Reise zu planen? Starten Sie mit dem",
    planFullLink: "{days}-Tage-Plan für {city}",
    hotelsTitle: "Wo übernachten in {city} im {month}",
    hotelsIntroHigh:
      "{month} ist stark nachgefragt: Buchen Sie 4 bis 6 Wochen im Voraus, damit diese Preise realistisch bleiben.",
    hotelsIntroLow:
      "{month} ist ruhiger, also der richtige Monat, um sich die Luxus-Tipps zu leisten.",
    mapTitle: "Hotels in {city} für {month}",
    otherMonth: "Oder einen anderen Monat wählen",
    faqGoodQ: "Ist {month} eine gute Zeit für {city}?",
    faqWarmQ: "Wie warm ist es in {city} im {month}?",
    faqWarmA:
      "Typische {month}-Tage in {city} erreichen etwa {high}°C und fallen nachts auf rund {low}°C. Der Zwiebellook funktioniert am besten.",
    faqRainQ: "Regnet es in {city} im {month}?",
    faqRainA: "Rechnen Sie mit etwa {rain} Regentagen im {month}. {detail}",
    rainMuch:
      "Planen Sie einen Indoor-Block pro Tag und halten Sie Museumstickets als Plan B bereit.",
    rainLittle: "Regen hält selten den ganzen Tag an, die Pläne halten also gut.",
  },
  wts: {
    metaTitle: "Wo übernachten in {city}: das richtige Viertel, Viertel für Viertel",
    metaDesc:
      "Welches Viertel in {city} zu Ihrer Reise passt, und das echte Hotel, das sich in jedem lohnt. Klare Vor- und Nachteile, eine Entscheidungstafel und aktuelle Karten pro Viertel.",
    h1: "Wo übernachten in",
    shortlistTitle: "Direkt zur Antwort",
    shortlistIntro:
      "Wenig Zeit? Vier Hotels in {city}, die wir tatsächlich buchen würden, vom Luxus bis zum Budget, jedes in einem der unten verglichenen Viertel.",
    boardTitle: "Die Entscheidungstafel",
    boardNeighborhood: "Viertel",
    boardBookIf: "Buchen Sie für",
    boardWatchOut: "Aufpassen",
    boardHotels: "Hotels",
    bookFor: "Buchen Sie es für",
    knowBefore: "Vorher wissen",
    pickedNext: "Viertel gewählt?",
    pickedLink: "Weitere europäische Städte entdecken",
    answerFirst: "Zum ersten Mal in {city}? Übernachten Sie in {hood}: {pro}.",
    answerFallback: "Bleiben Sie in der Nähe des Zentrums von {city}, damit können Sie kaum etwas falsch machen.",
    answerBudget:
      "Achten Sie aufs Budget? {hood} tauscht etwas Trubel gegen mehr Raum pro Euro.",
    answerWalkable:
      "Das Zentrum ist klein genug, um es zu Fuß zu erkunden, also liegen die Hauptsehenswürdigkeiten von jedem Viertel unten aus in Reichweite; was sich wirklich ändert, ist die Stimmung der Straße, in die Sie abends zurückkehren.",
    answerSpread:
      "Hier zählen die Entfernungen, wählen Sie also das Viertel, das zu Ihrem tatsächlichen Tagesplan passt.",
    faqBestQ: "Welches ist das beste Viertel für eine Übernachtung in {city}?",
    faqNightQ: "Wo sollte ich in {city} fürs Nachtleben übernachten?",
    faqNightA: "{hood} ist das Viertel fürs Ausgehen. {vibe} Ein Wermutstropfen: {con}",
    faqCheapQ: "Welches ist das günstigste gute Viertel für eine Übernachtung in {city}?",
    faqCheapA: "{hood} bietet die beste Lage für den Preis. {vibe}",
    faqCentralQ: "Wohnt man besser im Zentrum von {city}?",
    faqCentralAWalk:
      "Für die meisten Reisen ja. {city} hat ein kompaktes, fußläufiges Zentrum: Wer hier wohnt, hat die wichtigsten Sehenswürdigkeiten in wenigen Gehminuten und spart sich jede Anfahrt. Die Viertel unten liegen alle zentral oder ein paar Minuten entfernt; entscheide nach Atmosphäre und Preis, nicht nach Entfernung.",
    faqCentralASpread:
      "{city} ist weitläufig, deshalb zählt «zentral» weniger als das Viertel, das zu deinem Programm passt. Nahe an den Orten und Vierteln zu wohnen, die dich wirklich interessieren, spart mehr Zeit als die exakte Mitte.",
    faqFamilyQ: "Wo wohnt man mit Familie in {city}?",
    faqFamilyA: "{hood} ist die einfachste Basis für Familien: {vibe}",
  },
  bud: {
    metaTitle: "{city} günstig: dieselbe Reise für {price} EUR am Tag",
    metaDesc:
      "So gelingt ein Citytrip nach {city} für rund {price} EUR pro Tag: die Gratis-Highlights, die sich wirklich lohnen, wo Sie günstig übernachten und wo die Einheimischen essen.",
    h1Suffix: "mit kleinem Budget",
    answer:
      "Ein Citytrip nach {city} für rund {price} EUR pro Person und Tag ist realistisch. Die Formel: in {hood} übernachten, laufen statt fahren ({walk}), die Tage um Gratis-Anker wie {anchors} bauen und dort essen, wo die Einheimischen essen. Auch der Weg vom Flughafen ist günstig: {airport}.",
    walkCompact: "das Zentrum ist kompakt genug",
    walkZones: "wählen Sie eine Zone pro Tag",
    hotelsTitle: "Günstig schlafen, gut schlafen",
    hotelsIntro:
      "Die Empfehlungen unter {price} EUR, die sich nicht nach Kompromiss anfühlen.",
    freeTitle: "Die Gratis-Anker",
    freeIntro:
      "Sie kosten nichts und tragen je einen ganzen Tag. Bauen Sie darum herum, und bezahlte Tickets werden zu optionalen Extras statt zum Budgetfresser.",
    eatTitle: "Gut essen zu lokalen Preisen",
    sleepTitle: "Günstig übernachten in {hood}",
    orderNote: "Jetzt in die richtige Reihenfolge bringen:",
    orderLink: "der {days}-Tage-Plan für {city}",
    orderSuffix: "funktioniert mit diesem Budget dank der Tauschtipps oben.",
    faqCostQ: "Was kostet eine günstige Reise nach {city}?",
    faqFreeQ: "Was kann man in {city} gratis machen?",
    faqFreeA:
      "Die stärksten Gratis-Highlights in {city}: {list}. Mehrere kostenpflichtige Sehenswürdigkeiten haben auch freie oder ermäßigte Zeitfenster; die Tipps stehen auf jeder Plan-Seite.",
    faqCheapAreaQ: "Welches ist das günstigste Viertel für eine Übernachtung in {city}?",
  },
  home: {
    metaTitle: "Stays in Europe: wo übernachten in Europas besten Städten",
    metaDesc:
      "Welches Viertel Sie in Europas besten Städten buchen sollten, und das echte Hotel, das sich in jedem lohnt. Klare Vor- und Nachteile, aktuelle Karten und ehrliche Empfehlungen, Viertel für Viertel.",
    stamp: "Citytrips, richtig geplant",
    heroParts: [
      { pre: "Die richtige ", word: "Dauer", post: "." },
      { pre: " Das richtige ", word: "Viertel", post: "." },
      { pre: " Der richtige ", word: "Monat", post: "." },
    ],
    heroSub:
      "Jeder Guide hier beantwortet die drei Fragen, die einen Citytrip wirklich entscheiden: wie lange bleiben, wo übernachten und wann reisen. Tag für Tag, mit Öffnungszeiten, Warteschlangen-Tricks und ehrlichen Budgets.",
    pickCity: "Stadt wählen",
    howManyBtn: "Wie viele Tage brauche ich?",
    departures: "Abflüge · Stand Juli 2026",
    daysIdealShort: "{days} Tage ideal",
    best: "top",
    boarding: "Boarding →",
    whereNext: "Wohin als Nächstes?",
    allDest: "Alle Reiseziele",
    searchPlaceholder: "Stadt suchen, z. B. Lissabon",
    searchNoResult: "Für diese Suche gibt es noch keine Stadt. Jeden Monat kommen neue dazu.",
    browseAll: "Alle durchsuchen",
    knownForLead: "Bekannt für",
    faqTitle: "Fragen zum Citytrip, beantwortet",
    faqs: [
      {
        q: "Was genau ist ein Citytrip?",
        a: "Ein Citytrip ist eine kurze Reise, meist 2 bis 4 Tage, die sich um eine Stadt statt um eine Region oder einen Strand dreht. Es geht um Tiefe statt Distanz: Sie wählen einen Ort, lernen seine Viertel kennen und kommen erholt statt erschöpft zurück.",
      },
      {
        q: "Wie viele Tage braucht man für einen Citytrip?",
        a: "Die meisten europäischen Städte funktionieren in 2 bis 3 Tagen. Kompakte Städte wie Sevilla oder Brügge sind ein bequemes Wochenende; Hauptstädte wie Prag oder Budapest lohnen 3 Tage, und nur die größten wie Rom oder Paris rechtfertigen 4 oder mehr. Jede Städteseite hier nennt die ehrliche ideale Zahl.",
      },
      {
        q: "Wann ist die günstigste Zeit für einen Citytrip in Europa?",
        a: "Januar bis März, außerhalb der Weihnachtsmärkte und Schulferien, ist fast überall das günstigste Zeitfenster. Der November ist der ideale Moment für milde Städte im Süden zu Nebensaison-Preisen. Unsere Seiten Monat für Monat zeigen das Preisniveau jeder Stadt, das ganze Jahr über.",
      },
      {
        q: "Welche europäische Stadt eignet sich am besten für den ersten Citytrip?",
        a: "Wählen Sie für die erste Reise eine kompakte, fußläufige Stadt, in der die Sehenswürdigkeiten nah beieinander liegen: Lissabon, Prag und Sevilla passen alle. Sie verbringen weniger Zeit im Nahverkehr und mehr Zeit damit, den Ort wirklich zu sehen, und genau darum geht es bei einer kurzen Reise.",
      },
      {
        q: "Muss ich Attraktionen im Voraus buchen?",
        a: "Für die wichtigsten Sehenswürdigkeiten ja. Orte wie der Alcázar in Sevilla oder das Parlament in Budapest sind in der Hochsaison für ihre Zeitfenster Tage im Voraus ausgebucht. Jeder Plan hier zeigt genau an, welche Sehenswürdigkeiten eine Buchung brauchen und wie weit im Voraus.",
      },
    ],
    methodKicker: "Unsere Methode",
    methodTitle:
      "Keine „Geheimtipps“. Keine Listen mit 40 Punkten. Eine Entscheidung pro Seite.",
    methodBody:
      "Jede Stadt ist als strukturierte Daten aufgebaut: wie viele Tage sie wirklich braucht, welche Viertel zu welcher Reise passen, wie sich jeder Monat anfühlt, was die Dinge kosten. Jeder Tipp muss einen Test bestehen: Können Sie danach handeln? Wenn nicht, fliegt er raus.",
    methodLink: "Die vollständige Methodik lesen",
  },
  dest: {
    metaTitle: "Wo übernachten in Europa: Städte und Viertel im Vergleich",
    metaDesc:
      "Jede Stadt, die wir abdecken, mit dem besten Viertel für eine Übernachtung und einem echten Hotel, das sich in jedem lohnt. Eine kleine, wachsende Auswahl. Zuerst Europa.",
    kicker: "Abflugtafel",
    h1: "Wo übernachten in Europa",
    intro:
      "Eine kurze, bewusst kleine Liste europäischer Städte, die im Lauf der Zeit sorgfältig erweitert wird. Jede erhält dieselbe Behandlung: die Viertel im direkten Vergleich, das beste Gebiet für Ihre Art von Reise benannt, und ein echtes Hotel, das sich in jedem lohnt.",
    cityBreaksIn: "Wo übernachten in {country}",
    countryMetaTitle: "Wo übernachten in {country}: beste Städte und Viertel",
    countryMetaDesc:
      "Jede Stadt in {country}, die wir auf Stays in Europe abdecken: das beste Viertel für eine Übernachtung und ein Hotel, das sich in jedem lohnt.",
  },
};

export default de;

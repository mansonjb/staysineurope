import type en from "./en";

const es: typeof en = {
  locale: "es",
  months: [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ],
  monthsShort: [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ],
  common: {
    day: "Día",
    days: "días",
    from: "desde",
    perNight: "/noche",
    checkPrices: "Ver precios",
    findHotels: "Buscar hoteles",
    free: "Gratis",
    tip: "Consejo",
    morning: "Mañana",
    afternoon: "Tarde",
    evening: "Noche",
    comingSoon: "(próximamente)",
    home: "Inicio",
    faqTitle: "Preguntas rápidas, respuestas directas",
  },
  header: { destinations: "Destinos", guides: "Guías", method: "Método" },
  footer: {
    tagline:
      "El barrio adecuado puede hacer o deshacer una escapada urbana. Comparamos las zonas de las mejores ciudades de Europa y señalamos el hotel que merece la pena reservar en cada una.",
    cities: "Ciudades",
    site: "Sitio",
    allDestinations: "Todos los destinos",
    travelGuides: "Guías de viaje",
    aboutMethod: "Acerca de y metodología",
    privacy: "Política de privacidad",
    disclosure:
      "Stays in Europe gana comisiones con los enlaces de reserva (Stay22 y socios de entradas). Esto nunca cambia el precio que pagas ni nuestras recomendaciones.",
  },
  stay22: {
    loading: "Cargando el mapa de hoteles…",
    mapNote: "El mapa muestra los precios de hoteles en directo.",
    openSearch: "Abrir la búsqueda completa de hoteles",
    supportNote:
      ". Reservar a través de él apoya al sitio sin coste adicional para ti.",
    hotelsIn: "Hoteles en {name}",
  },
  hotels: {
    defaultTitle: "Dónde dormiríamos en {city}",
    defaultIntro:
      "Cuatro opciones que cubren el rango realista, desde el capricho hasta el bajo presupuesto. Los precios son puntos de partida de temporada baja; consulta las tarifas en directo para tus fechas.",
    seeAll: "Ver todos los hoteles de {city}",
    photosNote:
      "Fotos reales de los hoteles · precios indicativos desde, no tarifas en tiempo real · los enlaces de reserva apoyan al sitio sin coste adicional",
  },
  cityCard: { days: "Días", best: "Mejor", budget: "Presupuesto" },
  bestFor: {
    "first-time": "Primera visita",
    nightlife: "Vida nocturna",
    family: "Familia",
    budget: "Bajo presupuesto",
    romantic: "Romántico",
    local: "Vida local",
  },
  toolbar: {
    hotels: "Hoteles",
    ourPicks: "Nuestras opciones",
    howManyDays: "Cuántos días",
    whereToStay: "Dónde alojarse",
    whenToGo: "Cuándo ir",
    hotelMap: "Mapa de hoteles",
    faq: "FAQ",
    compare: "Comparar",
    whereToSleep: "Dónde dormir",
    day: "Día {n}",
  },
  bp: {
    pass: "Pase de escapada urbana",
    idealStay: "Estancia ideal",
    bestMonths: "Mejores meses",
    midBudget: "Presupuesto medio",
    airport: "Aeropuerto",
    itinerary: "Itinerario de {days} días",
    duration: "Duración",
    base: "Base",
    forecast: "Previsión de {month}",
    dayHigh: "Máx. día",
    nightLow: "Mín. noche",
    rainyDays: "Días de lluvia",
    verdict: "Veredicto",
    go: "Adelante",
    avoid: "Evítalo",
    fair: "Aceptable",
    roomKey: "Llave de habitación",
    firstVisit: "Primera visita",
    budgetPick: "Opción económica",
    nightlife: "Vida nocturna",
    midHotel: "Hotel medio",
    budgetPass: "Pase económico",
    dailyTarget: "Objetivo diario",
    sleepIn: "Dormir en",
    freeSights: "Lugares gratis",
    daysValue: "{days} días",
    perDay: "{price} EUR/día",
  },
  stamp: {
    daysIdeal: "{days} días, lo ideal",
    dayByDay: "Plan día a día",
    greatPick: "Gran elección",
    thinkTwice: "Piénsalo dos veces",
    shoulder: "Temporada media",
    areasCompared: "{n} zonas comparadas",
    perDay: "~{price} EUR / día",
  },
  hub: {
    metaTitle: "Escapada a {city}: cuántos días, dónde alojarse, cuándo ir",
    metaDesc:
      "{city} en {days} días: itinerarios día a día, el barrio adecuado para tu viaje, consejos mes a mes y presupuestos honestos.",
    answer: "{city} funciona mejor como una escapada de {days} días. {intro}",
    howManyTitle: "¿Cuántos días en {city}?",
    howManyIntro:
      "Elige el itinerario que encaje con tu viaje. Cada uno es un plan completo día a día, no una lista de 30 cosas que meter con calzador.",
    seeItinerary: "Ver el itinerario →",
    wtsTitle: "Dónde alojarse en {city}",
    walkable:
      "{city} tiene un centro que se recorre a pie, así que el barrio que elijas marca el tono de todo el viaje.",
    spread:
      "{city} está dispersa, así que elegir la base adecuada te ahorra horas de transporte.",
    fullComparison: "Comparativa completa",
    monthsTitle: "{city}, mes a mes",
    monthsIntro:
      "Los meses en color son el momento ideal. Los meses tachados vienen con una advertencia. Cada página cubre el clima, la afluencia, los precios y qué llevar.",
    mapTitle: "Precios de hoteles ahora mismo",
    historyTitle: "Un poco de historia",
    knownForTitle: "{city} es conocida por",
    faqAroundQ: "¿Es fácil moverse por {city}?",
    faqAroundAWalk:
      "Sí. {city} tiene un centro que se recorre a pie, así que la mayor parte de un viaje corto se hace caminando. {airport}",
    faqAroundASpread:
      "{city} está dispersa, así que cuenta con el transporte público entre zonas. {airport}",
    faqAirportQ: "¿Cómo voy del aeropuerto al centro de {city}?",
    faqAirportA: "{airport} Es la opción más barata y normalmente la más rápida.",
    faqKnownQ: "¿Por qué es conocida {city}?",
    faqKnownA: "{city} es conocida sobre todo por {list}. {history}",
    tightBudget: "¿Presupuesto ajustado?",
    budgetCard: "{city} con bajo presupuesto: el mismo viaje, unos {price} EUR al día",
    readBudget: "Leer la guía de presupuesto →",
    pairsWell: "Combina bien con",
    faqDaysQ: "¿Cuántos días hacen falta en {city}?",
    faqDaysA: "{days} días es la duración ideal para {city}. {rest}",
    faqWhenQ: "¿Cuál es la mejor época para visitar {city}?",
    faqWhenA: "Los mejores meses son {months}. {avoid}",
    faqAvoid: "Piénsatelo dos veces con {months}: {note}",
    faqExpQ: "¿Es cara {city}?",
    faqExpA:
      "{city} se sitúa {level} de la media europea. Calcula aproximadamente {low} EUR al día con un presupuesto ajustado, {mid} EUR para un viaje cómodo de gama media, y {high} EUR o más si quieres los mejores hoteles y restaurantes.",
    levelBelow: "por debajo",
    levelAround: "en torno a la media",
    levelAbove: "por encima",
    faqFirstQ: "¿Dónde deben alojarse los que visitan {city} por primera vez?",
    faqFirstA: "{hood} es la base más segura para una primera visita. {vibe}",
    faqFirstFallback:
      "Consulta la comparativa completa de barrios en nuestra guía de dónde alojarse.",
  },
  iti: {
    metaTitle: "{city} en {days} días: el itinerario que encaja",
    metaDesc:
      "Un plan realista día a día para {days} días en {city}: qué ver cada mañana, tarde y noche, dónde dormir y los consejos que te ahorran colas.",
    h1Connector: "en",
    daysUnit: "días",
    sleepTitle: "Dormir bien durante estos {days} días",
    sleepIntro:
      "Opciones ordenadas con nuestra base recomendada, {hood}, en primer lugar. Reserva pronto: las habitaciones con buena relación calidad-precio se van con semanas de antelación.",
    whereToSleepTitle: "Dónde dormir para este itinerario",
    whereToSleepBody: "Para {days} días, instálate en {hood}. {vibe}",
    fullGuideLink: "Compara todos los barrios en la guía completa de dónde alojarse.",
    shortTime: "¿Poco tiempo?",
    gotLonger: "¿Tienes más tiempo?",
    faqEnoughQ: "¿Son suficientes {days} días para {city}?",
    faqStayQ: "¿Dónde debería alojarme para {days} días en {city}?",
    faqStayA: "Instálate en {hood} para este itinerario. {vibe}",
    faqStayFallback:
      "Alójate en el centro: consulta nuestra guía de dónde alojarse para {city}.",
    faqBestTimeQ: "¿Cuál es la mejor época para este itinerario de {city}?",
    faqBestTimeA:
      "El plan funciona todo el año, pero {months} te dan la mejor relación entre clima y afluencia.",
  },
  mon: {
    metaTitle: "{city} en {month}: clima, afluencia y si merece la pena",
    metaDesc:
      "{city} en {month}: temperaturas reales, días de lluvia, niveles de afluencia, qué llevar y si es el mes adecuado para tu escapada urbana.",
    connector: "en",
    verdictBest: "{month} es uno de los mejores meses para visitar {city}.",
    verdictAvoid:
      "{month} es el mes que evitaríamos en {city} si tienes fechas flexibles.",
    verdictShoulder:
      "{month} es una opción decente de temporada media para {city}: menos gente, algunas concesiones.",
    answer:
      "{verdict} Espera máximas diurnas en torno a {high}°C, noches cerca de {low}°C y aproximadamente {rain} días de lluvia a lo largo del mes. {note}",
    packTitle: "Qué llevar a {city} en {month}",
    packShoes: "Zapatos cómodos para caminar: harás más de 15 000 pasos al día",
    packSun:
      "Protección solar y una botella de agua rellenable: las tardes se calientan",
    packLayers: "Capas ligeras: tardes cálidas, noches más frescas",
    packJacket: "Una chaqueta de verdad y una capa de abrigo para las noches",
    packGloves: "Guantes y gorro: las mañanas rozan la temperatura de congelación",
    packUmbrella:
      "Un paraguas compacto o un chubasquero: la lluvia es una posibilidad real",
    packRainLayer: "Una capa impermeable plegable, por si acaso",
    worksTitle: "Qué funciona bien en {month}",
    worksCold:
      "Con {rain} días de lluvia y máximas de {high}°C, organiza tus días de {month} en torno a lugares cubiertos y trata los ratos de sol como un extra.",
    worksWarm:
      "Con máximas en torno a {high}°C, {month} es tiempo de aire libre: prioriza miradores, parques y largos paseos.",
    planFull: "¿Listo para planear todo el viaje? Empieza por el",
    planFullLink: "itinerario de {city} en {days} días",
    hotelsTitle: "Dónde dormir en {city} en {month}",
    hotelsIntroHigh:
      "{month} tiene mucha demanda: reserva con 4 a 6 semanas de antelación para mantener estos precios realistas.",
    hotelsIntroLow:
      "{month} es más tranquilo, lo que lo convierte en el mes ideal para permitirte las opciones de capricho.",
    mapTitle: "Hoteles en {city} para {month}",
    otherMonth: "O elige otro mes",
    faqGoodQ: "¿Es {month} una buena época para visitar {city}?",
    faqWarmQ: "¿Qué temperatura hace en {city} en {month}?",
    faqWarmA:
      "Los días típicos de {month} en {city} alcanzan unos {high}°C y bajan hasta cerca de {low}°C por la noche. Lo mejor es ir por capas.",
    faqRainQ: "¿Llueve en {city} en {month}?",
    faqRainA: "Cuenta con aproximadamente {rain} días con lluvia en {month}. {detail}",
    rainMuch:
      "Planifica un bloque cubierto al día y guarda las entradas de museo como plan B.",
    rainLittle: "La lluvia rara vez dura todo el día, así que los planes se mantienen bien.",
  },
  wts: {
    metaTitle: "Dónde alojarse en {city}: el barrio adecuado, zona a zona",
    metaDesc:
      "Qué barrio de {city} encaja con tu viaje, y el hotel real que merece la pena reservar en cada uno. Pros y contras sin rodeos, un panel de decisión y mapas en directo por zona.",
    h1: "Dónde alojarse en",
    shortlistTitle: "Directos a la respuesta",
    shortlistIntro:
      "¿Poco tiempo? Cuatro hoteles de {city} que reservaríamos de verdad, desde el capricho hasta el bajo presupuesto, cada uno en una de las zonas que desglosamos más abajo.",
    boardTitle: "El panel de decisión",
    boardNeighborhood: "Barrio",
    boardBookIf: "Reserva si quieres",
    boardWatchOut: "Ojo con",
    boardHotels: "Hoteles",
    bookFor: "Resérvalo por",
    knowBefore: "Que sepas antes",
    pickedNext: "¿Ya has elegido zona?",
    pickedLink: "Explora más ciudades europeas",
    answerFirst: "¿Primera vez en {city}? Alójate en {hood}: {pro}.",
    answerFallback: "Alójate cerca del centro de {city} y difícilmente te equivocarás.",
    answerBudget:
      "¿Cuidando el presupuesto? {hood} cambia algo de ambiente por más espacio por euro.",
    answerWalkable:
      "El centro es lo bastante pequeño para recorrerlo a pie, así que cada zona de abajo deja los principales lugares a tu alcance; lo que de verdad cambia es el ambiente de la calle a la que vuelves por la noche.",
    answerSpread:
      "Aquí las distancias importan, así que elige la zona que encaje con cómo piensas pasar realmente tus días.",
    faqBestQ: "¿Cuál es la mejor zona donde alojarse en {city}?",
    faqNightQ: "¿Dónde debería alojarme en {city} para la vida nocturna?",
    faqNightA: "{hood} es la zona que reservar para salir de fiesta. {vibe} Un aviso: {con}",
    faqCheapQ: "¿Cuál es la zona buena y más barata donde alojarse en {city}?",
    faqCheapA: "{hood} te da la mejor ubicación por el precio. {vibe}",
    faqCentralQ: "¿Es mejor alojarse en el centro de {city}?",
    faqCentralAWalk:
      "Para la mayoría de los viajes, sí. {city} tiene un centro compacto y peatonal: alojarse en él deja los principales lugares a pocos minutos a pie y te ahorra desplazamientos. Los barrios de abajo son todos céntricos o están a pocos minutos; elige por el ambiente y el precio, no por la distancia.",
    faqCentralASpread:
      "{city} es extensa, así que «céntrico» importa menos que elegir el barrio que encaja con tus planes. Alojarte cerca de los lugares y barrios que de verdad te interesan ahorra más tiempo que apuntar al centro exacto.",
    faqFamilyQ: "¿Dónde alojarse en familia en {city}?",
    faqFamilyA: "{hood} es la base más fácil para familias: {vibe}",
  },
  bud: {
    metaTitle: "{city} con bajo presupuesto: el mismo viaje por {price} EUR al día",
    metaDesc:
      "Cómo hacer una escapada a {city} por unos {price} EUR al día: los lugares gratis que de verdad valen la pena, dónde dormir barato y dónde comen los locales.",
    h1Suffix: "con bajo presupuesto",
    answer:
      "Una escapada a {city} por unos {price} EUR por persona y día es realista. La fórmula: dormir en {hood}, caminar en vez de coger transporte ({walk}), organizar los días en torno a puntos de referencia gratuitos como {anchors}, y comer donde comen los locales. Llegar desde el aeropuerto también sale barato: {airport}.",
    walkCompact: "el centro es lo bastante compacto",
    walkZones: "elige una zona por día",
    hotelsTitle: "Dormir barato, dormir bien",
    hotelsIntro:
      "Las opciones por debajo de {price} EUR que no parecen un compromiso.",
    freeTitle: "Los imprescindibles gratis",
    freeIntro:
      "No cuestan nada y cada uno da para un día entero. Organiza en torno a ellos y las entradas de pago pasan a ser extras opcionales en vez de un agujero en el presupuesto.",
    eatTitle: "Comer bien, pagar precios locales",
    sleepTitle: "Dormir barato en {hood}",
    orderNote: "Ahora ponlo en orden:",
    orderLink: "el itinerario de {city} en {days} días",
    orderSuffix: "funciona con este presupuesto gracias a los cambios de arriba.",
    faqCostQ: "¿Cuánto cuesta un viaje con bajo presupuesto a {city}?",
    faqFreeQ: "¿Qué se puede hacer gratis en {city}?",
    faqFreeA:
      "Los mejores lugares gratis de {city}: {list}. Varios lugares de pago también tienen franjas gratuitas o reducidas; consulta los consejos en cada página de itinerario.",
    faqCheapAreaQ: "¿Cuál es la zona más barata donde alojarse en {city}?",
  },
  home: {
    metaTitle: "Stays in Europe: dónde alojarte en las mejores ciudades de Europa",
    metaDesc:
      "Qué barrio reservar en las mejores ciudades de Europa, y el hotel real que merece la pena en cada uno. Pros y contras sin rodeos, mapas en directo y recomendaciones honestas, zona a zona.",
    stamp: "Dónde alojarte, bien hecho",
    heroParts: [
      { pre: "La ", word: "ciudad", post: " correcta." },
      { pre: " El ", word: "barrio", post: " correcto." },
      { pre: " El ", word: "hotel", post: " correcto." },
    ],
    heroSub:
      "Para cada ciudad que cubrimos, una página responde a la pregunta que decide en silencio tu viaje: en qué barrio dormir, y el mejor hotel real en cada uno. Pros y contras honestos, mapas en directo, sin relleno.",
    pickCity: "Elige una ciudad",
    howManyBtn: "¿Cuántos días necesito?",
    departures: "Salidas · Europa primero",
    daysIdealShort: "{days} días, lo ideal",
    best: "mejor",
    boarding: "embarque →",
    whereNext: "¿A dónde ahora?",
    allDest: "Todos los destinos",
    searchPlaceholder: "Busca una ciudad, p. ej. Brujas",
    searchNoResult: "Todavía no hay ninguna ciudad para esa búsqueda. Añadimos nuevas con cuidado con el tiempo.",
    browseAll: "Ver todo",
    knownForLead: "Conocida por",
    faqTitle: "Preguntas sobre dónde alojarte, respondidas",
    faqs: [
      {
        q: "¿Por qué importa tanto el barrio en una escapada urbana?",
        a: "En un viaje de dos a cuatro días apenas sales de la zona alrededor de tu hotel, así que el barrio que elijas se convierte en el viaje. El acertado pone los lugares de interés, la buena comida y la noche que buscas a la puerta de casa; el equivocado convierte todo en un trayecto.",
      },
      {
        q: "¿Cómo decidís cuál es la mejor zona donde alojarse en una ciudad?",
        a: "Sopesamos lo que de verdad cambia tus días: a qué distancia a pie están los principales lugares de interés, el carácter de las calles de noche, la seguridad, el ruido y lo que cuesta realmente una habitación decente allí. Cada página de ciudad pone las mejores zonas una junto a otra para que encuentres la que encaja con tu viaje.",
      },
      {
        q: "¿Los hoteles seleccionados están patrocinados?",
        a: "No. Cada ciudad recibe cuatro hoteles reales que reservaríamos nosotros mismos, desde el capricho hasta el bajo presupuesto, elegidos primero por la ubicación. Ganamos una comisión si reservas a través de nuestros enlaces, pero eso nunca decide qué hoteles entran en la lista.",
      },
      {
        q: "¿Cuántos hoteles enumeráis por ciudad?",
        a: "Cuatro: uno de capricho, dos de gama media y uno económico, cada uno anclado en un barrio distinto, para que la elección sirva también de recomendación de zona. Menos opciones pero mejor elegidas superan a un muro de cien anuncios que tendrías que filtrar tú mismo.",
      },
      {
        q: "¿Los mapas muestran los precios reales de los hoteles?",
        a: "Sí. El mapa de cada ciudad obtiene las tarifas de hoteles en directo para tus fechas, así comparas lo que pagarías de verdad, no un precio de partida desactualizado. Reservar a través de él apoya al sitio sin coste adicional para ti.",
      },
    ],
    methodKicker: "Nuestro método",
    methodTitle:
      'Nada de "joyas ocultas". Nada de listas de 100 hoteles. Una elección clara por zona.',
    methodBody:
      "Cada ciudad se construye de la misma manera: los barrios comparados en lo que realmente importa, la mejor zona indicada para cada tipo de viaje, y un hotel real que merece la pena reservar en cada una. Cada línea tiene que superar una prueba: ¿puedes actuar según ella? Si no, se elimina.",
    methodLink: "Cómo elegimos",
  },
  dest: {
    metaTitle: "Dónde alojarse en Europa: ciudades y barrios comparados",
    metaDesc:
      "Todas las ciudades que cubrimos, con el mejor barrio donde alojarse y un hotel real que merece la pena reservar en cada una. Un conjunto pequeño que crece con cuidado. Europa primero.",
    kicker: "Panel de salidas",
    h1: "Dónde alojarse en Europa",
    intro:
      "Una lista corta y deliberadamente pequeña de ciudades europeas, a la que añadimos más con cuidado y con el tiempo. Cada una recibe el mismo tratamiento: los barrios comparados uno junto a otro, la mejor zona señalada según tu tipo de viaje, y un hotel real que merece la pena reservar en cada una.",
    cityBreaksIn: "Dónde alojarse en {country}",
    countryMetaTitle: "Dónde alojarse en {country}: mejores ciudades y zonas",
    countryMetaDesc:
      "Cada ciudad de {country} que cubrimos en Stays in Europe: el mejor barrio donde alojarse y un hotel que merece la pena reservar en cada una.",
  },
};

export default es;

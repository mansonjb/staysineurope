import type en from "./en";

const pt: typeof en = {
  locale: "pt",
  months: [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ],
  monthsShort: [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez",
  ],
  common: {
    day: "Dia",
    days: "dias",
    from: "desde",
    perNight: "/noite",
    checkPrices: "Ver preços",
    findHotels: "Encontrar hotéis",
    free: "Grátis",
    tip: "Dica",
    morning: "Manhã",
    afternoon: "Tarde",
    evening: "Noite",
    comingSoon: "(brevemente)",
    home: "Início",
    faqTitle: "Perguntas rápidas, respostas diretas",
  },
  header: { destinations: "Destinos", guides: "Guias", method: "Método" },
  footer: {
    tagline:
      "O bairro certo faz ou desfaz uma viagem a uma cidade. Comparamos as zonas das melhores cidades da Europa e indicamos o hotel que vale a pena reservar em cada uma.",
    cities: "Cidades",
    site: "Site",
    allDestinations: "Todos os destinos",
    travelGuides: "Guias de viagem",
    aboutMethod: "Sobre nós e metodologia",
    privacy: "Política de privacidade",
    disclosure:
      "A Stays in Europe recebe comissões pelos links de reserva (Stay22 e parceiros de bilhetes). Isto nunca altera o preço que paga nem as nossas recomendações.",
  },
  stay22: {
    loading: "A carregar o mapa de hotéis…",
    mapNote: "O mapa mostra preços de hotéis em tempo real.",
    openSearch: "Abrir a pesquisa completa de hotéis",
    supportNote: ". Reservar através dele apoia o site sem custo extra.",
    hotelsIn: "Hotéis em {name}",
  },
  hotels: {
    defaultTitle: "Onde dormiríamos em {city}",
    defaultIntro:
      "Quatro escolhas que cobrem a gama realista, do luxo ao económico. Os preços são valores de partida em época baixa; confirme as tarifas em tempo real para as suas datas.",
    seeAll: "Ver todos os hotéis de {city}",
    photosNote:
      "Fotos reais dos hotéis · preços indicativos a partir de, não valores em tempo real · os links de reserva apoiam o site sem custo extra",
  },
  cityCard: { days: "Dias", best: "Melhor", budget: "Orçamento" },
  bestFor: {
    "first-time": "Primeira visita",
    nightlife: "Vida noturna",
    family: "Família",
    budget: "Económico",
    romantic: "Romântico",
    local: "Vida local",
  },
  toolbar: {
    hotels: "Hotéis",
    ourPicks: "As nossas escolhas",
    howManyDays: "Quantos dias",
    whereToStay: "Onde ficar",
    whenToGo: "Quando ir",
    hotelMap: "Mapa de hotéis",
    faq: "FAQ",
    compare: "Comparar",
    whereToSleep: "Onde dormir",
    day: "Dia {n}",
  },
  bp: {
    pass: "Passe city break",
    idealStay: "Estadia ideal",
    bestMonths: "Melhores meses",
    midBudget: "Orçamento médio",
    airport: "Aeroporto",
    itinerary: "Roteiro de {days} dias",
    duration: "Duração",
    base: "Base",
    forecast: "Previsão para {month}",
    dayHigh: "Máx. de dia",
    nightLow: "Mín. de noite",
    rainyDays: "Dias de chuva",
    verdict: "Veredicto",
    go: "Vá",
    avoid: "Evite",
    fair: "Razoável",
    roomKey: "Chave do quarto",
    firstVisit: "Primeira visita",
    budgetPick: "Escolha económica",
    nightlife: "Vida noturna",
    midHotel: "Hotel médio",
    budgetPass: "Passe económico",
    dailyTarget: "Meta diária",
    sleepIn: "Dormir em",
    freeSights: "Atrações grátis",
    daysValue: "{days} dias",
    perDay: "{price} EUR/dia",
  },
  stamp: {
    daysIdeal: "{days} dias, o ideal",
    dayByDay: "Plano dia a dia",
    greatPick: "Excelente escolha",
    thinkTwice: "Pense duas vezes",
    shoulder: "Época intermédia",
    areasCompared: "{n} bairros comparados",
    perDay: "~{price} EUR / dia",
  },
  hub: {
    metaTitle: "City break em {city}: quantos dias, onde ficar, quando ir",
    metaDesc:
      "{city} em {days} dias: roteiros dia a dia, o bairro certo para a sua viagem, conselhos mês a mês e orçamentos honestos.",
    answer: "{city} funciona melhor como city break de {days} dias. {intro}",
    howManyTitle: "Quantos dias em {city}?",
    howManyIntro:
      "Escolha o roteiro que corresponde à sua viagem. Cada um é um plano completo dia a dia, não uma lista de 30 coisas para encaixar.",
    seeItinerary: "Ver o roteiro →",
    wtsTitle: "Onde ficar em {city}",
    walkable:
      "O centro de {city} percorre-se a pé, por isso o bairro que escolher define o tom de toda a viagem.",
    spread:
      "{city} é uma cidade espalhada, por isso escolher a base certa poupa-lhe horas de transportes.",
    fullComparison: "Comparação completa",
    monthsTitle: "{city}, mês a mês",
    monthsIntro:
      "Os meses a cores são a altura ideal. Os meses rasurados vêm com um aviso. Cada página cobre meteorologia, multidões, preços e o que levar na mala.",
    mapTitle: "Preços de hotéis neste momento",
    historyTitle: "Um pouco de história",
    knownForTitle: "{city} é conhecida por",
    faqAroundQ: "É fácil deslocar-se em {city}?",
    faqAroundAWalk:
      "Sim. {city} tem um centro que se percorre a pé, por isso a maior parte de uma viagem curta faz-se a pé. {airport}",
    faqAroundASpread:
      "{city} é uma cidade espalhada, por isso conte com transportes públicos entre as zonas. {airport}",
    faqAirportQ: "Como vou do aeroporto ao centro de {city}?",
    faqAirportA: "{airport} É a opção mais barata e, normalmente, a mais rápida.",
    faqKnownQ: "Pelo que é conhecida {city}?",
    faqKnownA: "{city} é sobretudo conhecida por {list}. {history}",
    tightBudget: "Orçamento apertado?",
    budgetCard: "{city} com pouco dinheiro: a mesma viagem por cerca de {price} EUR por dia",
    readBudget: "Ler o guia de orçamento →",
    pairsWell: "Combina bem com",
    faqDaysQ: "Quantos dias são precisos em {city}?",
    faqDaysA: "{days} dias é a duração ideal para {city}. {rest}",
    faqWhenQ: "Qual é a melhor altura para visitar {city}?",
    faqWhenA: "Os melhores meses são {months}. {avoid}",
    faqAvoid: "Pense duas vezes antes de escolher {months}: {note}",
    faqExpQ: "É caro visitar {city}?",
    faqExpA:
      "{city} situa-se {level} da média europeia. Conte com cerca de {low} EUR por dia num orçamento apertado, {mid} EUR para uma viagem confortável de gama média, e {high} EUR ou mais se quiser os melhores hotéis e restaurantes.",
    levelBelow: "abaixo",
    levelAround: "ao nível",
    levelAbove: "acima",
    faqFirstQ: "Onde ficar em {city} numa primeira visita?",
    faqFirstA: "{hood} é a base mais segura para uma primeira visita. {vibe}",
    faqFirstFallback:
      "Veja a comparação completa de bairros no nosso guia sobre onde ficar.",
  },
  iti: {
    metaTitle: "{city} em {days} dias: roteiro dia a dia",
    metaDesc:
      "Um plano realista dia a dia para {days} dias em {city}: o que ver em cada manhã, tarde e noite, onde dormir, e as dicas que lhe poupam filas.",
    h1Connector: "em",
    daysUnit: "dias",
    sleepTitle: "Dormir bem durante estes {days} dias",
    sleepIntro:
      "Escolhas ordenadas com a nossa base recomendada, {hood}, em primeiro lugar. Reserve cedo: os quartos com boa relação qualidade-preço esgotam semanas antes.",
    whereToSleepTitle: "Onde dormir para este roteiro",
    whereToSleepBody: "Para {days} dias, instale-se em {hood}. {vibe}",
    fullGuideLink: "Compare todos os bairros no guia completo sobre onde ficar.",
    shortTime: "Pouco tempo?",
    gotLonger: "Tem mais tempo?",
    faqEnoughQ: "{days} dias chegam para {city}?",
    faqStayQ: "Onde devo ficar durante {days} dias em {city}?",
    faqStayA: "Instale-se em {hood} para este roteiro. {vibe}",
    faqStayFallback:
      "Fique no centro: veja o nosso guia sobre onde ficar em {city}.",
    faqBestTimeQ: "Qual é a melhor altura para este roteiro de {city}?",
    faqBestTimeA:
      "O plano funciona o ano inteiro, mas {months} oferecem a melhor relação entre meteorologia e multidões.",
  },
  mon: {
    metaTitle: "{city} em {month}: meteorologia, multidões e se vale a pena",
    metaDesc:
      "{city} em {month}: temperaturas reais, dias de chuva, nível de multidões, o que levar na mala e se é o mês certo para o seu city break.",
    connector: "em",
    verdictBest: "{month} é um dos melhores meses para visitar {city}.",
    verdictAvoid:
      "{month} é o mês que evitaríamos em {city} se tiver datas flexíveis.",
    verdictShoulder:
      "{month} é uma opção intermédia razoável para {city}: menos gente, alguns compromissos.",
    answer:
      "{verdict} Conte com máximas diurnas à volta de {high}°C, noites perto de {low}°C e cerca de {rain} dias de chuva ao longo do mês. {note}",
    packTitle: "O que levar na mala para {city} em {month}",
    packShoes: "Sapatos confortáveis para caminhar: vai fazer mais de 15 mil passos por dia",
    packSun:
      "Proteção solar e uma garrafa de água reutilizável: as tardes aquecem",
    packLayers: "Camadas leves: tardes quentes, noites mais frescas",
    packJacket: "Um casaco a sério e uma camada quente para a noite",
    packGloves: "Luvas e gorro: as manhãs andam perto do zero",
    packUmbrella:
      "Um guarda-chuva compacto ou um casaco impermeável: a chuva é uma possibilidade real",
    packRainLayer: "Uma camada impermeável dobrável, por precaução",
    worksTitle: "O que funciona bem em {month}",
    worksCold:
      "Com {rain} dias de chuva e máximas de {high}°C, construa os seus dias de {month} à volta de âncoras interiores e trate as abertas de sol como um bónus.",
    worksWarm:
      "Com máximas à volta de {high}°C, {month} é tempo de estar ao ar livre: dê prioridade a miradouros, parques e longas caminhadas.",
    planFull: "Pronto para planear a viagem completa? Comece pelo",
    planFullLink: "roteiro de {city} em {days} dias",
    hotelsTitle: "Onde dormir em {city} em {month}",
    hotelsIntroHigh:
      "{month} tem muita procura: reserve com 4 a 6 semanas de antecedência para manter estes preços realistas.",
    hotelsIntroLow:
      "{month} é mais calmo, o que o torna o mês certo para se permitir as escolhas de luxo.",
    mapTitle: "Hotéis em {city} para {month}",
    otherMonth: "Ou escolha outro mês",
    faqGoodQ: "{month} é uma boa altura para visitar {city}?",
    faqWarmQ: "Que temperatura faz em {city} em {month}?",
    faqWarmA:
      "Os dias típicos de {month} em {city} chegam a cerca de {high}°C, descendo para perto de {low}°C à noite. Vestir por camadas resulta melhor.",
    faqRainQ: "Chove em {city} em {month}?",
    faqRainA: "Conte com cerca de {rain} dias de chuva em {month}. {detail}",
    rainMuch:
      "Planeie um bloco interior por dia e guarde os bilhetes de museu como plano B.",
    rainLittle: "A chuva raramente dura o dia inteiro, por isso os planos aguentam-se bem.",
  },
  wts: {
    metaTitle: "Onde ficar em {city}: o bairro certo, zona a zona",
    metaDesc:
      "Que bairro de {city} combina com a sua viagem, e o hotel a sério que vale a pena reservar em cada um. Prós e contras diretos, um quadro de decisão e mapas em tempo real por zona.",
    h1: "Onde ficar em",
    shortlistTitle: "Diretos à resposta",
    shortlistIntro:
      "Pouco tempo? Quatro hotéis em {city} que reservaríamos mesmo, do luxo ao económico, cada um numa das zonas comparadas abaixo.",
    boardTitle: "O quadro de decisão",
    boardNeighborhood: "Bairro",
    boardBookIf: "Reserve se procura",
    boardWatchOut: "Atenção a",
    boardHotels: "Hotéis",
    bookFor: "Reserve-o para",
    knowBefore: "Saiba antes",
    pickedNext: "Já escolheu o seu bairro?",
    pickedLink: "Ver mais cidades europeias",
    answerFirst: "Primeira vez em {city}? Fique em {hood}: {pro}.",
    answerFallback: "Fique perto do centro de {city} e dificilmente erra.",
    answerBudget:
      "De olho no orçamento? {hood} troca um pouco de animação por mais espaço por cada euro.",
    answerWalkable:
      "O centro é suficientemente pequeno para se percorrer a pé, por isso qualquer uma das zonas abaixo deixa as principais atrações ao alcance; o que muda de verdade é o ambiente da rua a que regressa à noite.",
    answerSpread:
      "Aqui as distâncias contam, por isso escolha a zona que combina com o que realmente vai fazer nos seus dias.",
    faqBestQ: "Qual é o melhor bairro para ficar em {city}?",
    faqNightQ: "Onde ficar em {city} para a vida noturna?",
    faqNightA: "{hood} é o bairro a reservar para sair à noite. {vibe} Um aviso: {con}",
    faqCheapQ: "Qual é a zona boa e barata para ficar em {city}?",
    faqCheapA: "{hood} dá-lhe a melhor localização pelo preço. {vibe}",
    faqCentralQ: "É melhor ficar no centro de {city}?",
    faqCentralAWalk:
      "Na maioria das viagens, sim. {city} tem um centro compacto e pedonal: ficar aqui deixa os principais pontos a poucos minutos a pé e poupa deslocações. Os bairros abaixo são todos centrais ou a poucos minutos; escolha pela atmosfera e pelo preço, não pela distância.",
    faqCentralASpread:
      "{city} é espalhada, por isso «central» importa menos do que escolher o bairro que combina com o seu programa. Ficar perto dos pontos e bairros que realmente lhe interessam poupa mais tempo do que mirar o centro exato.",
    faqFamilyQ: "Onde ficar em família em {city}?",
    faqFamilyA: "{hood} é a base mais fácil para famílias: {vibe}",
  },
  bud: {
    metaTitle: "{city} com pouco dinheiro: a mesma viagem por {price} EUR por dia",
    metaDesc:
      "Como fazer um city break em {city} por cerca de {price} EUR por dia: as atrações grátis que valem mesmo a pena, onde dormir barato e onde comem os locais.",
    h1Suffix: "com pouco dinheiro",
    answer:
      "Um city break em {city} por cerca de {price} EUR por pessoa e por dia é realista. A fórmula: dormir em {hood}, andar a pé em vez de apanhar transportes ({walk}), construir os dias à volta de âncoras grátis como {anchors}, e comer onde comem os locais. Chegar do aeroporto também sai barato: {airport}.",
    walkCompact: "o centro é suficientemente compacto",
    walkZones: "escolha uma zona por dia",
    hotelsTitle: "Dormir barato, dormir bem",
    hotelsIntro:
      "As escolhas abaixo de {price} EUR que não sabem a compromisso.",
    freeTitle: "As âncoras grátis",
    freeIntro:
      "Não custam nada e preenchem um dia inteiro cada uma. Construa à volta delas e os bilhetes pagos tornam-se extras opcionais em vez de um sorvedouro no orçamento.",
    eatTitle: "Comer bem, pagar preços locais",
    sleepTitle: "Dormir barato em {hood}",
    orderNote: "Agora ponha tudo por ordem:",
    orderLink: "o roteiro de {city} em {days} dias",
    orderSuffix: "funciona com este orçamento com as trocas acima.",
    faqCostQ: "Quanto custa uma viagem económica a {city}?",
    faqFreeQ: "O que se pode fazer grátis em {city}?",
    faqFreeA:
      "As melhores atrações grátis de {city}: {list}. Várias atrações pagas também têm horários grátis ou reduzidos; veja as dicas em cada página de roteiro.",
    faqCheapAreaQ: "Qual é o bairro mais barato para ficar em {city}?",
  },
  home: {
    metaTitle: "Stays in Europe: onde ficar nas melhores cidades da Europa",
    metaDesc:
      "Que bairro reservar nas melhores cidades da Europa, e o hotel a sério que vale a pena reservar em cada uma. Prós e contras diretos, mapas em tempo real e escolhas honestas, zona a zona.",
    stamp: "City breaks bem planeados",
    heroParts: [
      { pre: "Os ", word: "dias", post: " certos." },
      { pre: " O ", word: "bairro", post: " certo." },
      { pre: " O ", word: "mês", post: " certo." },
    ],
    heroSub:
      "Cada guia responde às três perguntas que realmente decidem um city break: quanto tempo ficar, onde dormir e quando ir. Dia a dia, com horários, truques anti-filas e orçamentos honestos.",
    pickCity: "Escolher uma cidade",
    howManyBtn: "De quantos dias preciso?",
    departures: "Partidas · atualizado em julho de 2026",
    daysIdealShort: "{days} dias, o ideal",
    best: "melhor",
    boarding: "embarque →",
    whereNext: "Para onde a seguir?",
    allDest: "Todos os destinos",
    searchPlaceholder: "Procure uma cidade, ex. Lisboa",
    searchNoResult: "Ainda não há nenhuma cidade para essa pesquisa. São adicionadas mais todos os meses.",
    browseAll: "Ver todas",
    knownForLead: "Conhecida por",
    faqTitle: "Perguntas sobre city breaks, respondidas",
    faqs: [
      {
        q: "O que é exatamente um city break?",
        a: "Um city break é uma viagem curta, geralmente de 2 a 4 dias, construída à volta de uma cidade em vez de uma região ou de uma praia. O objetivo é a profundidade em vez da distância: escolhe um lugar, conhece os seus bairros e volta descansado em vez de esgotado.",
      },
      {
        q: "De quantos dias precisa um city break?",
        a: "A maioria das cidades europeias resolve-se em 2 a 3 dias. Cidades compactas como Sevilha ou Bruges dão um fim de semana confortável; capitais como Praga ou Budapeste compensam 3 dias, e só as maiores, como Roma ou Paris, justificam 4 ou mais. Cada página de cidade aqui indica o número ideal honesto.",
      },
      {
        q: "Qual é a altura mais barata para um city break na Europa?",
        a: "De janeiro a março, fora dos mercados de Natal e das férias escolares, é a janela mais barata em quase todo o lado. Novembro é o momento ideal para as cidades amenas do sul, a preços de época baixa. As nossas páginas mês a mês mostram o nível de preços de cada cidade, o ano inteiro.",
      },
      {
        q: "Qual é a melhor cidade europeia para um primeiro city break?",
        a: "Para uma primeira viagem, escolha uma cidade compacta que se percorra a pé, onde as atrações fiquem juntas: Lisboa, Praga e Sevilha servem todas. Passa menos tempo em transportes e mais tempo a ver de facto o lugar, que é para isso que serve uma viagem curta.",
      },
      {
        q: "Preciso de reservar as atrações com antecedência?",
        a: "Para as atrações principais, sim. Lugares como o Alcázar de Sevilha ou o Parlamento de Budapeste esgotam os horários marcados dias antes na época alta. Cada roteiro aqui assinala exatamente que atrações precisam de reserva e com quanta antecedência.",
      },
    ],
    methodKicker: "O nosso método",
    methodTitle:
      "Sem «joias escondidas». Sem listas de 40 itens. Uma decisão por página.",
    methodBody:
      "Cada cidade é construída como dados estruturados: quantos dias precisa realmente, que bairros servem que viagem, como é cada mês, quanto custam as coisas. Cada dica tem de passar um teste: consegue agir com base nela? Se não, é cortada.",
    methodLink: "Ler a metodologia completa",
  },
  dest: {
    metaTitle: "Onde ficar na Europa: cidades e bairros comparados",
    metaDesc:
      "Todas as cidades que cobrimos, com o melhor bairro para ficar e um hotel a sério que vale a pena reservar em cada uma. Uma lista pequena, a crescer aos poucos. Primeiro a Europa.",
    kicker: "Painel de partidas",
    h1: "Onde ficar na Europa",
    intro:
      "Uma lista curta e deliberadamente pequena de cidades europeias, com mais a serem acrescentadas com cuidado ao longo do tempo. Cada uma recebe o mesmo tratamento: os bairros comparados lado a lado, a melhor zona indicada para o seu tipo de viagem, e um hotel a sério que vale a pena reservar em cada um.",
    cityBreaksIn: "Onde ficar em {country}",
    countryMetaTitle: "Onde ficar em {country}: melhores cidades e zonas",
    countryMetaDesc:
      "Todas as cidades de {country} que cobrimos na Stays in Europe: o melhor bairro para ficar e um hotel que vale a pena reservar em cada uma.",
  },
};

export default pt;

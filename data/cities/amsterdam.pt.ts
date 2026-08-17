import type { CityData } from "../types";

const amsterdamPt: CityData = {
  city: {
    slug: "amsterdam",
    name: "Amesterdão",
    country: "Países Baixos",
    countrySlug: "netherlands",
    lat: 52.3676,
    lng: 4.9041,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "AMS",
    airportToCenter:
      "Comboio direto de Schiphol para Amsterdam Centraal, cerca de 17 minutos por cerca de 5 EUR, com partidas de poucos em poucos minutos desde o início da manhã até tarde da noite. Compre um bilhete nas máquinas amarelas ou passe um cartão contactless nas cancelas; deixe os táxis, que custam 40 a 50 EUR pela mesma viagem.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "O mês mais frio e cinzento, com máximas perto dos 6 C, dias curtos e chuva frequente, por isso planeie dias com muito museu. A afluência é reduzida e os preços de hotel atingem o mínimo anual assim que passa o Ano Novo, mas o percurso de barco iluminado do Amsterdam Light Festival decorre até meados de janeiro e é a única razão para enfrentar a escuridão.",
      2: "Ainda frio e chuvoso, à volta dos 7 C, e o mês completo mais tranquilo em pontos de interesse e preços. Reserve a Casa de Anne Frank e o Museu Van Gogh e vai percorrê-los com espaço para respirar; leve um bom impermeável em vez de guarda-chuva, que o vento dos canais destrói.",
      3: "As máximas sobem para perto dos 10 C e começa a época das tulipas: os jardins de Keukenhof abrem na segunda metade do mês e vão até meados de maio. A afluência ainda é moderada, mas os primeiros fins de semana de Keukenhof e dos campos de bolbos enchem depressa, por isso reserve o transporte da excursão de um dia com antecedência.",
      4: "Primavera a sério, à volta dos 13 C, com Keukenhof em plena floração e os campos de bolbos a sul de Haarlem em cor. O Dia do Rei, a 27 de abril, transforma a cidade inteira numa festa de rua laranja e numa armada de canais; é espetacular mas tem de reservar alojamento com meses de antecedência e contar que tudo o resto esteja cheio.",
      5: "Um dos melhores meses, com máximas perto dos 17 C, serões longos e luminosos e Keukenhof aberto até meio do mês. A afluência aumenta de forma constante e os preços de hotel atingem máximos de época intermédia, por isso feche os quartos cedo e comece as visitas à Casa de Anne Frank e aos museus à hora de abertura.",
      6: "Quente, à volta dos 20 C, com o dia mais longo do ano e as esplanadas a todo o gás. Os números de turistas são altos mas ainda não no pico de agosto; os serões junto aos canais são a recompensa, e os festivais ao ar livre começam a encher o calendário do teatro ao ar livre do Vondelpark.",
      7: "Época alta: dias de 22 C, museus apinhados e os preços de quarto mais altos do verão. Reserve todos os pontos de interesse com hora marcada semanas antes, ande de elétrico em vez de disputar táxis, e guarde o anel de canais para o início da manhã ou depois das 20h, quando as multidões rareiam.",
      8: "O mesmo calor e as mesmas multidões de julho, mais a Pride: o famoso Desfile dos Canais de barcos decorados navega o Prinsengracht no primeiro sábado, atraindo enormes multidões à água. Reserve com muita antecedência para esse fim de semana e conte que os hotéis centrais esgotem por completo.",
      9: "Máximas à volta dos 19 C, afluência a diminuir claramente depois da primeira semana, e o clima mais ameno da época intermédia. Esta é a alternativa inteligente ao verão: os preços aliviam, as esplanadas ainda funcionam nos dias quentes, e os grandes museus estão mais calmos.",
      10: "Mais fresco, à volta dos 14 C, com verdadeira cor de outono no Vondelpark e mais chuva de regresso. Os números de turistas caem e os preços de hotel acompanham; um mês com boa relação qualidade-preço se aceitar que o tempo ao ar livre depende do clima e que os museus carregam a viagem.",
      11: "Cinzento, chuvoso e frio, com máximas perto dos 9 C, o período mais tranquilo antes das festas. Os preços estão baixos e as filas curtas; as celebrações da chegada do Sinterklaas a meio do mês e as primeiras luzes de Natal acrescentam alguma atmosfera a dias de outra forma escuros.",
      12: "Frio, à volta dos 6 C, com dias curtos e chuviscos frequentes, mas o Amsterdam Light Festival lança o seu percurso de arte iluminada nos canais no final de novembro e prolonga-se até janeiro. Os mercados de Natal e as pontes iluminadas levantam o ânimo; reserve a Casa de Anne Frank e os museus cedo, pois a semana das festas vê um pico de visitantes.",
    },
    climate: {
      1: { highC: 6, lowC: 1, rainyDays: 12 },
      2: { highC: 7, lowC: 1, rainyDays: 10 },
      3: { highC: 10, lowC: 3, rainyDays: 11 },
      4: { highC: 13, lowC: 5, rainyDays: 10 },
      5: { highC: 17, lowC: 8, rainyDays: 10 },
      6: { highC: 20, lowC: 11, rainyDays: 11 },
      7: { highC: 22, lowC: 13, rainyDays: 11 },
      8: { highC: 22, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 11, rainyDays: 11 },
      10: { highC: 14, lowC: 8, rainyDays: 12 },
      11: { highC: 9, lowC: 5, rainyDays: 13 },
      12: { highC: 6, lowC: 2, rainyDays: 13 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 160, high: 320 },
    tagline: "Cinco anéis muito diferentes à volta de um único cinturão de canais, e a sua morada decide que Amesterdão vai ter.",
    heroIntro:
      "O centro de Amesterdão cabe numa caminhada de meia hora, mas a metade onde dorme continua a decidir toda a visita: vistas de canal de postal e preços de turista, ou um bairro mais sossegado com uma viagem de elétrico à mistura. Este guia pesa cinco bases muito diferentes, do núcleo histórico apinhado ao oeste arborizado, e aponta onde cada tipo de viajante dorme melhor. Leia os bairros abaixo antes de reservar, porque numa cidade tão compacta a morada pesa mais do que o roteiro.",
    accent: { from: "#2F6E8F", to: "#C46A3A", ink: "#1E3E52" },
    neighborhoodSlugs: ["centrum", "jordaan", "de-pijp", "oud-west", "oost"],
    nearbyCitySlugs: ["bruges"],
  },

  neighborhoods: [
    {
      slug: "centrum",
      citySlug: "amsterdam",
      name: "Centrum (Centro Antigo)",
      lat: 52.3731,
      lng: 4.8922,
      bestFor: ["first-time", "nightlife"],
      vibe: "A Praça Dam e as ruas de canal mais antigas ficam no meio deste bairro, cheio de visitantes desde o pequeno-almoço e barulhento à noite perto do Bairro da Luz Vermelha. Nada aqui fica a mais de dez minutos a pé, e é essa a troca toda: abdica da tranquilidade e paga o prémio de localização em troca de nunca precisar de elétrico. Reserve aqui se for uma viagem curta e cada minuto poupado importar mais do que uma boa noite de sono.",
      pros: [
        "Todos os pontos de interesse principais, da Praça Dam às Nove Ruas, fazem-se a pé",
        "A maior escolha de hotéis da cidade, mais todas as linhas de elétrico a passar por aqui",
        "Uma visita de dois dias não precisa de transporte público nenhum",
      ],
      cons: [
        "Os restaurantes das ruas principais cobram preços de turista por comida mediana",
        "Despedidas de solteiro e barulho noturno concentram-se à volta do Bairro da Luz Vermelha",
        "Os quartos custam claramente mais do que o mesmo padrão em De Pijp ou Oud-West",
      ],
    },
    {
      slug: "jordaan",
      citySlug: "amsterdam",
      name: "Jordaan",
      lat: 52.3745,
      lng: 4.8799,
      bestFor: ["romantic", "first-time", "local"],
      vibe: "Canais estreitos, fachadas de empena e jardins de pátio escondidos fazem deste o bairro onde se tiram todos os postais de Amesterdão, mas as ruas à escala humana mantêm-se mais calmas do que o Centro Antigo assim que os visitantes de um dia seguem caminho. Lojas independentes e brown cafes onde os locais ainda bebem dão-lhe um ar habitado que o centro perdeu em grande parte. Reserve aqui se a Casa de Anne Frank e os canais ocidentais importarem mais do que poupar uns minutos em cada caminhada, e não se importar de pagar pela vista.",
      pros: [
        "As melhores vistas de canal da cidade, com a Casa de Anne Frank a um curto passeio",
        "Uma excelente oferta de brown cafes, pequenas galerias e um mercado de sábado",
        "Residencial e sossegado à noite, mas ainda perto de tudo",
      ],
      cons: [
        "Os quartos custam mais do que nos bairros a sul ou a oeste",
        "Os hotéis em casas de canal são muitas vezes estreitos, com escadas íngremes e sem elevador",
        "Poucos supermercados grandes e pouca oferta de comida económica por perto",
      ],
    },
    {
      slug: "de-pijp",
      citySlug: "amsterdam",
      name: "De Pijp",
      lat: 52.3547,
      lng: 4.8925,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "A sul do centro, esta malha apertada cresceu à volta do mercado diário Albert Cuyp e continua a funcionar ao ritmo do apetite dos jovens amesterdameses que aqui realmente vivem. Os restaurantes e bares ficam mais baratos do que no centro sem abdicar da qualidade, e o Bairro dos Museus fica a apenas dez minutos a pé ou uma paragem de elétrico. Reserve aqui se comer e beber bem importar tanto como os pontos de interesse, e não se importar de trocar as vistas de canal por melhor relação qualidade-preço.",
      pros: [
        "A cena gastronómica e de bares mais densa e com melhor relação qualidade-preço da cidade",
        "O mercado Albert Cuyp e o Sarphatipark mesmo à porta",
        "A uma curta caminhada do Rijksmuseum e do Bairro dos Museus",
      ],
      cons: [
        "Sem monumentos do anel de canais dentro do próprio bairro",
        "As ruas do mercado e dos bares ficam barulhentas e cheias nas horas de ponta",
        "A popularidade fez subir os preços de quarto, que já não são a pechincha de antes",
      ],
    },
    {
      slug: "oud-west",
      citySlug: "amsterdam",
      name: "Oud-West",
      lat: 52.3639,
      lng: 4.8686,
      bestFor: ["local", "family", "budget"],
      vibe: "A oeste do Vondelpark, ruas arborizadas e o animado mercado gastronómico Foodhallen dão o tom aqui, num bairro onde famílias e profissionais realmente vivem em vez de apenas passar. Isso dá-lhe um ar assente, pouco turístico, e preços bem abaixo do anel de canais, com os elétricos a cobrir os dez minutos até ao centro. Reserve aqui se quiser o parque e uma boa refeição à porta e não precisar de estar dentro do postal.",
      pros: [
        "O Vondelpark e o Foodhallen ficam ambos a poucos minutos a pé",
        "Ruas mais calmas, próprias para famílias, a preços mais baixos",
        "Elétricos diretos até ao centro e ao Bairro dos Museus",
      ],
      cons: [
        "Todos os grandes pontos de interesse exigem uma deslocação curta, mesmo que rápida",
        "Sem canais nem arquitetura emblemática dentro do bairro",
        "A vida noturna é mais tranquila aqui do que em De Pijp ou no centro",
      ],
    },
    {
      slug: "oost",
      citySlug: "amsterdam",
      name: "Oost (Este)",
      lat: 52.3603,
      lng: 4.9268,
      bestFor: ["local", "budget", "family"],
      vibe: "A leste do centro, à volta do Oosterpark, prédios do século XIX renovados encontram uma das cenas gastronómicas multiculturais mais fortes da cidade, num bairro ainda em ascensão. É a aposta de valor desta lista: ruas arborizadas e sossegadas, restaurantes de bairro a sério e quartos com preços bem abaixo do centro, com o metro e os elétricos a cobrir os dez a quinze minutos até à cidade. Reserve aqui se o orçamento importar mais do que a proximidade e uma cena gastronómica autêntica valer mais do que uma vista de canal.",
      pros: [
        "Os quartos mais baratos de qualquer bairro perto do centro",
        "Uma cena gastronómica genuinamente diversa, com pouco acréscimo turístico",
        "O Oosterpark, o jardim zoológico Artis e o Tropenmuseum todos perto",
      ],
      cons: [
        "O mais afastado destes bairros dos pontos de interesse do anel de canais",
        "Suficientemente espalhado para depender de elétrico ou metro em vez de andar a pé",
        "Menos atrações emblemáticas dentro do próprio bairro",
      ],
    },
  ],

  pois: [
    {
      slug: "rijksmuseum",
      citySlug: "amsterdam",
      name: "Rijksmuseum",
      lat: 52.36,
      lng: 4.8852,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve uma hora marcada de entrada online e escolha a mais cedo, às 9h, quando a Galeria de Honra com o Vermeer e a enorme Ronda da Noite de Rembrandt ainda está sem multidões. O jardim e a passagem sob o edifício são gratuitos para atravessar, e a fila do café do museu é pior por volta das 13h, por isso coma cedo ou tarde.",
    },
    {
      slug: "van-gogh-museum",
      citySlug: "amsterdam",
      name: "Museu Van Gogh",
      lat: 52.3584,
      lng: 4.8811,
      kind: "museum",
      needsBooking: true,
      tip: "A entrada é só por hora marcada e não há bilheteira para quem chega sem reserva, por isso reserve online antes de chegar e escolha um horário logo à abertura das 9h ou depois das 15h para escapar à azáfama do meio-dia. Fica a dois minutos do Rijksmuseum, por isso junte os dois numa manhã no Bairro dos Museus em vez de os dividir por dias.",
    },
    {
      slug: "anne-frank-house",
      citySlug: "amsterdam",
      name: "Casa de Anne Frank",
      lat: 52.3752,
      lng: 4.884,
      kind: "museum",
      needsBooking: true,
      tip: "Este é o que se planeia à volta da viagem toda: todos os bilhetes são vendidos só online, libertados exatamente com seis semanas de antecedência a uma hora certa, e os horários esgotam em minutos. Não há fila para quem chega sem reserva, por isso ponha um lembrete no calendário para o dia da libertação e compre no instante em que ficarem disponíveis. Lá dentro, o percurso com hora marcada pelo anexo secreto leva cerca de uma hora.",
    },
    {
      slug: "canal-cruise",
      citySlug: "amsterdam",
      name: "Passeio de Barco nos Canais",
      lat: 52.3644,
      lng: 4.8916,
      kind: "experience",
      needsBooking: false,
      tip: "Evite os barcos gigantes com teto de vidro junto a Centraal e escolha um pequeno barco elétrico aberto nos cais do Rijksmuseum ou da Casa de Anne Frank para uma hora mais tranquila na água. Vá ao pôr do sol para a melhor luz nas casas de empena, e reserve uma partida específica online no verão, quando os pequenos operadores populares enchem.",
    },
    {
      slug: "vondelpark",
      citySlug: "amsterdam",
      name: "Vondelpark",
      lat: 52.3579,
      lng: 4.8686,
      kind: "park",
      needsBooking: false,
      tip: "O pulmão verde central da cidade, gratuito e aberto a todas as horas, melhor entrado pelo lado do Bairro dos Museus e percorrido para oeste com um café. Nos fins de semana de verão o teatro ao ar livre perto do centro oferece concertos e espetáculos gratuitos; consulte o programa, porque é o melhor serão gratuito de Amesterdao quando o tempo aguenta.",
    },
    {
      slug: "jordaan-canals",
      citySlug: "amsterdam",
      name: "Passeio pelos Canais de Jordaan",
      lat: 52.374,
      lng: 4.881,
      kind: "sight",
      needsBooking: false,
      tip: "Percorra a pé o Prinsengracht, o Bloemgracht e o pequeno Egelantiersgracht sem rota fixa; este é o trecho mais bonito e menos comercial do anel de canais. Venha antes das 10h ou depois das 19h para fotos sem multidões, e desvie-se para o pátio gratuito do Karthuizerhof, um jardim de casa de caridade tranquilo por que a maioria dos visitantes passa a direito.",
    },
    {
      slug: "albert-cuyp-market",
      citySlug: "amsterdam",
      name: "Mercado Albert Cuyp",
      lat: 52.3556,
      lng: 4.8916,
      kind: "food",
      needsBooking: false,
      tip: "O maior mercado de rua diário dos Países Baixos, aberto de segunda a sábado sensivelmente das 9h às 17h e fechado ao domingo, por isso planeie em conta disso. Venha por um stroopwafel prensado na hora e amostras de queijo holandês em vez de souvenirs, e vá antes do meio-dia ao sábado, o horário mais movimentado, se quiser espaço para andar.",
    },
    {
      slug: "begijnhof",
      citySlug: "amsterdam",
      name: "Begijnhof",
      lat: 52.3691,
      lng: 4.8899,
      kind: "sight",
      needsBooking: false,
      tip: "Um pátio medieval silencioso de casas de caridade escondido atrás de uma porta sem sinalização junto à praça Spui, de entrada gratuita e um dos sítios mais antigos da cidade. Mantenha a voz baixa, pois ainda vive aqui gente, e procure a casa de madeira preta no número 34, a mais antiga casa de madeira ainda de pé em Amesterdao. Aberto só em horário diurno.",
    },
    {
      slug: "dam-square",
      citySlug: "amsterdam",
      name: "Praça Dam & Palácio Real",
      lat: 52.3731,
      lng: 4.8926,
      kind: "sight",
      needsBooking: false,
      tip: "Trate a praça em si como uma passagem de 15 minutos pelo Monumento Nacional e pela fachada do palácio, em vez de um destino. O interior do Palácio Real só vale o bilhete se o Rei não o estiver a usar, por isso verifique o site quanto a encerramentos antes de pagar; caso contrário fotografe a frente e siga para as Nove Ruas ali perto.",
    },
    {
      slug: "bloemenmarkt",
      citySlug: "amsterdam",
      name: "Mercado Flutuante de Flores Bloemenmarkt",
      lat: 52.3667,
      lng: 4.8918,
      kind: "sight",
      needsBooking: false,
      tip: "O mercado flutuante de flores no Singel é uma paragem de cinco minutos, por isso encaixe-o num passeio entre a Praça Dam e o Rijksmuseum em vez de fazer uma viagem à parte. Os bolbos de tulipa vendidos aqui são certificados para exportação se quiser levar alguns para casa; verifique primeiro as regras de importação do seu próprio país, pois muitos exigem a etiqueta fitossanitária que as bancas fornecem.",
    },
    {
      slug: "nine-streets",
      citySlug: "amsterdam",
      name: "As Nove Ruas (De 9 Straatjes)",
      lat: 52.369,
      lng: 4.8859,
      kind: "sight",
      needsBooking: false,
      tip: "Nove pequenas ruas transversais que ligam os canais principais entre a Jordaan e a Dam, repletas de boutiques independentes, lojas vintage e pequenos cafés. Esta é a melhor zona para ver montras sem pressa e um almoço numa casa de canal; venha num dia de semana para evitar a azáfama de compras do fim de semana, e note que a maioria das lojas independentes abre tarde, à volta das 11h.",
    },
    {
      slug: "foodhallen",
      citySlug: "amsterdam",
      name: "Foodhallen",
      lat: 52.3665,
      lng: 4.8697,
      kind: "food",
      needsBooking: false,
      tip: "Um mercado gastronómico interior numa antiga cocheira de elétricos em Oud-West, com uma vintena de bancas sob um mesmo teto, ideal num dia de chuva ou para um grupo que não chega a acordo. Enche e fica barulhento a partir das 19h aos fins de semana, por isso chegue pelas 18h para uma mesa, e pague com cartão, pois a maioria das bancas não aceita dinheiro.",
    },
    {
      slug: "adam-lookout",
      citySlug: "amsterdam",
      name: "A'DAM Lookout",
      lat: 52.3841,
      lng: 4.9008,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Um miradouro na cobertura do outro lado do rio IJ com o baloiço mais alto da Europa, alcançado por um ferry gratuito que sai mesmo atrás da estação de Centraal de poucos em poucos minutos e leva cerca de três minutos. Reserve o horário do baloiço online para saltar a espera, vá perto do pôr do sol para a melhor luz sobre a cidade, e lembre-se de que o ferry funciona toda a noite se ficar para uma bebida lá em cima.",
    },
    {
      slug: "heineken-experience",
      citySlug: "amsterdam",
      name: "Heineken Experience",
      lat: 52.3577,
      lng: 4.8916,
      kind: "experience",
      needsBooking: true,
      tip: "Uma visita de marca autoguiada na antiga fábrica de cerveja junto a De Pijp, melhor reservada online por um desconto face ao preço à porta e uma hora de entrada fixa que salta a fila. Escolha o horário mais cedo para evitar as vagas de escolas e grupos de despedidas de solteiro da tarde, e saiba que é mais marketing do que fábrica em funcionamento, por isso encare-a como uma hora de diversão em vez de uma visita séria à cerveja.",
    },
  ],

  itineraries: [
    {
      citySlug: "amsterdam",
      days: 2,
      summary:
        "Dois dias chegam para os pontos de interesse principais de Amesterdao se reservar com antecedência e ficar no centro, mas só vai aflorar os bairros que fazem a cidade valer o regresso. O centro é compacto: o anel de canais, o Bairro dos Museus e a Jordaan ficam a 25 minutos a pé uns dos outros, por isso um plano apertado cobre o Rijksmuseum, o Museu Van Gogh e a Casa de Anne Frank mais um passeio nos canais sem grandes transportes. Instale-se no Centrum para que as duas manhãs comecem a pé. A estrutura que funciona é um tema por dia: o Bairro dos Museus e o Vondelpark no primeiro dia, o anel de canais, a Jordaan e a Casa de Anne Frank no segundo. Reserve três coisas antes de chegar, porque os bilhetes são a única ameaça real a uma visita de 48 horas: a Casa de Anne Frank no momento em que os horários abrem seis semanas antes, e horas marcadas para o Museu Van Gogh e o Rijksmuseum. O que sacrifica é De Pijp, os mercados e qualquer serão lento junto aos canais, que é exatamente o que um terceiro dia compra.",
      stayNeighborhoodSlug: "centrum",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Bairro dos Museus e Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Comece no Rijksmuseum numa hora marcada das 9h e vá direto à Galeria de Honra para ver a Ronda da Noite e os Vermeer antes de as salas encherem. Dê-lhe duas horas e não tente ver tudo.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Caminhe dois minutos pelo Museumplein até ao Museu Van Gogh à sua hora marcada. A coleção segue por ordem cronológica, por isso percorra os pisos por ordem para ver o estilo dele mudar.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almoce no Museumplein ou perto, depois passeie pelo jardim de esculturas gratuito atrás do Rijksmuseum e pelas letras I amsterdam para a foto clássica.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Entre no Vondelpark pelo lado do Bairro dos Museus e percorra-o de ponta a ponta com um café, parando no lago e no teatro ao ar livre. É gratuito e a melhor forma de recompor depois de dois museus.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Faça um pequeno passeio de barco elétrico aberto nos canais ao pôr do sol a partir do cais do Rijksmuseum, evitando os grandes barcos com teto de vidro junto a Centraal. Uma hora na água enquadra-lhe todo o anel de canais.",
              durationMin: 75,
            },
            {
              text: "Jantar no centro fora das ruas turísticas principais; recue um quarteirão em relação à Praça Dam ou ao Leidseplein e tanto os preços como a qualidade melhoram bastante.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Anel de canais, a Jordaan e Anne Frank",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Chegue à sua hora reservada na Casa de Anne Frank; não há opção para quem chega sem reserva, por isso este bilhete teve de ser comprado no dia em que abriu, seis semanas antes. O percurso com hora marcada pelo anexo secreto leva cerca de uma hora e cala mais fundo no início do dia.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Saia diretamente para a Jordaan e percorra o Prinsengracht, o Bloemgracht e o Egelantiersgracht sem rota fixa, desviando-se para o pátio gratuito da casa de caridade Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Passe para as Nove Ruas para um almoço numa casa de canal e um passeio sem pressa pelas lojas independentes entre os canais principais. A maioria abre por volta das 11h, por isso o início da tarde é o ponto certo.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Passe pela porta sem sinalização junto ao Spui para o pátio silencioso do Begijnhof, depois procure a casa de madeira preta no número 34, a mais antiga da cidade. Mantenha a voz baixa; ainda vive aqui gente.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Atravesse a Praça Dam pela fachada do Palácio Real e pelo Monumento Nacional, tratando-a como uma passagem de 15 minutos em vez de uma paragem, depois faça um circuito pelas bancas de flores do Bloemenmarkt no Singel.",
              durationMin: 45,
            },
            {
              text: "Termine com uma bebida num brown cafe na Jordaan, do género com areia no chão e locais ao balcão, para o serão mais de Amesterdao que o centro oferece.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 3,
      summary:
        "Três dias são a quantidade certa de tempo para Amesterdao: chega para os três grandes museus e o anel de canais a um ritmo humano, mais um dia que pertence aos bairros em vez da lista de tarefas. Dois dias obrigam-no a correr o Bairro dos Museus e os canais um a seguir ao outro; o terceiro dia acrescenta De Pijp, o Mercado Albert Cuyp e uma vista de cobertura sobre o IJ, com tempo para se sentar num café sem olhar para o relógio. Fique na Jordaan, o quarteirão central mais bonito e calmo, para que a Casa de Anne Frank e os canais ocidentais fiquem à sua porta e os serões se mantenham tranquilos. A forma do plano: o Bairro dos Museus e o Vondelpark no primeiro dia, o anel de canais e a Jordaan no segundo, De Pijp e a margem norte no terceiro. Reserve três coisas online antes de chegar: a Casa de Anne Frank no instante em que os horários abrem seis semanas antes, e horas marcadas para o Museu Van Gogh e o Rijksmuseum. Todo o resto recompensa quem aparece cedo e anda de elétrico em vez de táxis.",
      stayNeighborhoodSlug: "jordaan",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Bairro dos Museus e Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Da sua base na Jordaan, apanhe o elétrico até ao Rijksmuseum para uma hora das 9h e vá direto à Galeria de Honra e à Ronda da Noite antes de as multidões aumentarem.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Atravesse o Museumplein até ao Museu Van Gogh à sua hora marcada e siga os pisos por ordem cronológica para ver a obra transformar-se.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almoce perto do Museumplein, depois percorra o jardim de esculturas gratuito atrás do Rijksmuseum e fotografe as letras I amsterdam.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Percorra o Vondelpark de ponta a ponta a partir do lado do Bairro dos Museus, parando no teatro ao ar livre, que oferece espetáculos gratuitos nos fins de semana de verão. Esta é a melhor tarde gratuita da cidade.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Faça um pequeno passeio de barco elétrico aberto ao pôr do sol pela melhor luz nas casas de empena, reservando uma partida com antecedência no verão, quando os bons operadores esgotam.",
              durationMin: 75,
            },
            {
              text: "Jantar de volta à Jordaan num pequeno restaurante junto ao canal, depois um copo antes de dormir num brown cafe onde os locais bebem.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Anel de canais e a Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Caminhe até à sua hora reservada na Casa de Anne Frank; não há fila para quem chega sem reserva, por isso este teve de ser comprado no dia em que os bilhetes abriram, seis semanas antes. O percurso com hora marcada pelo anexo leva cerca de uma hora.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Explore o seu próprio bairro a pé: o Prinsengracht, o Bloemgracht e o Egelantiersgracht, mais o pátio tranquilo do Karthuizerhof que a maioria dos visitantes não vê.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Passe para as Nove Ruas para almoçar numa casa de canal e ver as lojas independentes. Os dias de semana são bem mais calmos do que a azáfama de compras do fim de semana.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Passe pela porta sem sinalização junto ao Spui para o pátio do Begijnhof e encontre a casa de madeira preta no número 34, a mais antiga de Amesterdao.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Atravesse a Praça Dam pelo Palácio Real e pelo Monumento Nacional, depois percorra o Singel pelas bancas flutuantes de flores do Bloemenmarkt enquanto fecham.",
              durationMin: 60,
            },
            {
              text: "Jantar no centro a um quarteirão das ruas principais, depois um passeio lento de volta à Jordaan ao longo do Prinsengracht iluminado, o anel de canais no seu melhor depois de escurecer.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, mercados e a margem norte",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Apanhe o elétrico até De Pijp para o Mercado Albert Cuyp antes do meio-dia, quando está mais animado mas ainda transitável. Coma um stroopwafel prensado na hora e pasture pelas bancas de queijo e comida em vez das de souvenirs.",
              durationMin: 90,
            },
            {
              text: "Deambule para sul pelo pequeno Sarphatipark e pelas ruas secundárias de De Pijp cheias de cafés, o bairro onde os jovens de Amesterdao realmente comem e bebem.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "heineken-experience",
              text: "Faça a Heineken Experience ali perto numa hora reservada se quiser a visita de marca, tratando-a como uma hora divertida em vez de uma visita séria à fábrica; caso contrário passe o tempo em mais cafés de De Pijp.",
              durationMin: 105,
            },
            {
              text: "Apanhe o elétrico até Centraal e o ferry gratuito de três minutos por trás da estação através do IJ até Amsterdam Noord.",
              durationMin: 30,
            },
          ],
          evening: [
            {
              poiSlug: "adam-lookout",
              text: "Suba de elevador ao A'DAM Lookout para a vista de cobertura sobre a cidade perto do pôr do sol, e faça o baloiço na cobertura se tiver cabeça para alturas. Reserve o horário do baloiço com antecedência para saltar a espera.",
              durationMin: 90,
            },
            {
              text: "Jante na frente ribeirinha de Noord a olhar para o horizonte da cidade, depois apanhe o ferry de volta; funciona toda a noite, por isso não há pressa.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 4,
      summary:
        "Quatro dias são mais do que suficientes para os pontos de interesse de Amesterdao, e é esse o ponto: o quarto dia transforma uma corrida de museus numa viagem a sério. Os dias um a três cobrem o Bairro dos Museus, o anel de canais, a Jordaan e De Pijp a um ritmo descontraído; o quarto dia é seu, ou para um dia local lento nos bairros a leste, ou para uma excursão de um dia aos moinhos de Zaanse Schans ou a Haarlem, ambos a menos de 30 minutos de comboio. Com tanto tempo, evite o centro movimentado e fique em De Pijp, a dez minutos do Bairro dos Museus, mais barato do que o anel de canais, e lar da melhor comida e vida noturna da cidade pela relação qualidade-preço. A lógica de um tema por dia continua a aplicar-se: mantenha os dois grandes museus e o Vondelpark juntos, mantenha os canais e a Jordaan juntos, e não faça ziguezagues pela cidade. Reserve previamente a Casa de Anne Frank no dia em que os horários abrem seis semanas antes, mais horas marcadas para o Museu Van Gogh e o Rijksmuseum. Se estivesse a escolher entre três e quatro dias, o quarto é o que vai recordar.",
      stayNeighborhoodSlug: "de-pijp",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Bairro dos Museus e Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Suba a pé de De Pijp até ao Rijksmuseum à sua hora das 9h e vá direto à Galeria de Honra pela Ronda da Noite e pelos Vermeer antes de as salas encherem.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Atravesse o Museumplein até ao Museu Van Gogh à sua hora marcada, seguindo os pisos por ordem para traçar como a sua pintura mudou.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almoce no Museumplein, depois o jardim de esculturas gratuito atrás do Rijksmuseum e as letras I amsterdam para a foto.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Percorra o Vondelpark de ponta a ponta, parando no teatro ao ar livre para um espetáculo de verão gratuito se o programa coincidir.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Faça um pequeno passeio de barco aberto nos canais ao pôr do sol a partir do cais do Rijksmuseum pela melhor luz na água, reservando com antecedência em época alta.",
              durationMin: 75,
            },
            {
              text: "Jantar de volta a De Pijp, onde as ruas de restaurantes e bares à volta do Albert Cuyp oferecem a melhor relação qualidade-preço da cidade, depois uma bebida num café local.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Anel de canais e a Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Apanhe o elétrico até à sua hora reservada na Casa de Anne Frank; não há fila para quem chega sem reserva, por isso este bilhete teve de ser comprado no dia em que abriu, seis semanas antes. O percurso pelo anexo secreto leva cerca de uma hora.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Percorra os canais da Jordaan, o Prinsengracht, o Bloemgracht e o Egelantiersgracht, com um desvio para o pátio tranquilo da casa de caridade Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Almoce e veja montras nas Nove Ruas entre os canais principais; escolha um dia de semana para saltar as multidões de compras do fim de semana.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Encontre o pátio escondido do Begijnhof junto ao Spui e a casa de madeira preta no número 34, depois faça um circuito pelo mercado de flores Bloemenmarkt no Singel.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Atravesse a Praça Dam ao anoitecer pelo Palácio Real e pelo Monumento Nacional, uma passagem de 15 minutos em vez de uma paragem.",
              durationMin: 30,
            },
            {
              text: "Jantar no centro a um quarteirão das ruas turísticas, depois um passeio de volta ao longo do Prinsengracht iluminado.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, mercados e a margem norte",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Comece à sua própria porta no Mercado Albert Cuyp antes do meio-dia, apanhando um stroopwafel fresco e pasturando pelas bancas de comida. Lembre-se de que fecha aos domingos.",
              durationMin: 90,
            },
            {
              poiSlug: "heineken-experience",
              text: "Faça a Heineken Experience ali perto numa hora reservada cedo se a visita de marca lhe apetecer, tratando-a como uma hora leve, depois deambule pelo Sarphatipark e pelas ruas secundárias de De Pijp.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Apanhe o elétrico até Centraal e o ferry gratuito de três minutos através do IJ até Amsterdam Noord, o bairro mais transformado da cidade.",
              durationMin: 45,
            },
            {
              poiSlug: "adam-lookout",
              text: "Suba ao A'DAM Lookout pelo panorama de cobertura e, se se atrever, o baloiço na cobertura. Reserve o horário do baloiço com antecedência para evitar a fila.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Jante cedo na frente ribeirinha de Noord a olhar para o horizonte da cidade, depois volte de ferry através do IJ, que funciona toda a noite.",
              durationMin: 105,
            },
            {
              text: "Termine com um copo antes de dormir em De Pijp; os bares aqui abrem até mais tarde e são mais baratos do que qualquer coisa no centro.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Dia local em Oost ou excursão a Zaanse Schans e Haarlem",
          morning: [
            {
              text: "Opção A: apanhe o elétrico para leste até Oost para uma manhã local lenta à volta do Oosterpark, do Tropenmuseum sobre culturas do mundo, e dos cafés multiculturais do Dappermarkt. Opção B: apanhe o comboio direto de Centraal para Zaandijk Zaanse Schans, cerca de 17 minutos, pelos moinhos em funcionamento, as casas de madeira e as oficinas de queijo e tamancos ao longo do rio.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "A Opção A continua em Oost com almoço num bistro de bairro e um passeio pelos terrenos do jardim zoológico Artis ou ao longo das ilhas do porto a leste. Opção B: salte de comboio para Haarlem, a 15 minutos de Zaandijk ou de Amesterdao, pela compacta cidade velha, o Grote Markt e o Museu Frans Hals antes do comboio de regresso.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "De qualquer forma, termine de volta a De Pijp nas esplanadas e bares à volta do Albert Cuyp e do Sarphatipark, a verdadeira cena de serão do bairro.",
              durationMin: 120,
            },
            {
              text: "Último jantar num restaurante de De Pijp; a zona faz comida inventiva a preços justos, uma refeição final adequada depois das ementas turísticas do centro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default amsterdamPt;

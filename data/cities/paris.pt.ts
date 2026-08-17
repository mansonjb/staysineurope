import type { CityData } from "../types";

const parisPt: CityData = {
  city: {
    slug: "paris",
    name: "Paris",
    country: "Franca",
    countrySlug: "france",
    lat: 48.8566,
    lng: 2.3522,
    tier: 1,
    idealDays: 4,
    durations: [2, 3, 4],
    airportCode: "CDG",
    airportToCenter:
      "A partir de Charles de Gaulle, o comboio RER B chega a Gare du Nord e a Chatelet em cerca de 30-35 min por 11,80 EUR, com passagens de 10 em 10 ou 15 em 15 min. O Roissybus ate a Opera custa cerca de 13 EUR mas arrasta-se no transito, e um taxi tem tarifa fixa de 56 EUR para a Margem Direita e 65 EUR para a Esquerda. A partir de Orly, apanhe a shuttle Orlyval ate Antony e depois o RER B, ou o eletrico T7, ou o Orlybus direto ate Denfert-Rochereau.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [],
    monthlyNotes: {
      1: "Frio e cinzento, com 7-8C, dias curtos e humidos e as multidoes mais raras do ano depois de passar a azafama do Ano Novo. Os saldos de inverno (les soldes) comecam no inicio de janeiro e os precos dos hoteis estao no minimo, por isso e um mes forte para uma viagem barata aos museus sem filas.",
      2: "Ainda frio, com 8C, e muitas vezes encoberto, embora surjam dias limpos e luminosos e as filas no Louvre e no Orsay se mantenham curtas. Os precos continuam baixos fora da semana de ferias escolares, o que faz deste um bom mes em conta se se agasalhar para o frio.",
      3: "As maximas sobem para 12-13C e a cidade comeca a ficar verde, com as esplanadas a reabrir nas primeiras tardes amenas. As multidoes ainda sao poucas e os precos de hotel razoaveis antes da vaga da primavera, uma altura discretamente excelente para visitar.",
      4: "Um dos melhores meses, com 15-16C, flores nas arvores e dias longos e luminosos, embora os aguaceiros de abril sejam frequentes, por isso leve uma camada extra. As multidoes e os precos aumentam ao longo do mes, e a Pascoa pode encher o centro, por isso reserve museus e hoteis com antecedencia.",
      5: "Quente e animado, com 19-20C e a epoca das esplanadas em pleno, mas varios feriados (1 de maio, 8 de maio, Ascensao) fecham muitas lojas e museus, por isso confirme as datas. O tenis de Roland Garros comeca no final do mes, e este e o pico da qualidade do tempo em Paris, com multidoes a crescer.",
      6: "Longos entardeceres dourados, com 23C, a melhor luz do ano e as esplanadas cheias ate tarde. A Fete de la Musique, a 21 de junho, enche todas as ruas com concertos gratuitos, e Roland Garros acaba no inicio de junho, por isso espere uma cidade agitada, festiva e completamente lotada.",
      7: "Quente, com 25C, e movimentada com os turistas de verao, enquanto os parisienses comecam a partir. O Dia da Bastilha, a 14 de julho, traz um desfile militar pelos Campos Eliseos e fogo de artificio na Torre Eiffel, e a Paris Plages transforma as margens do Sena numa praia temporaria com areia e espreguicadeiras durante o verao.",
      8: "Vagas de calor ate 25-26C e o mes mais vazio de locais, ja que muitos restaurantes e pequenas lojas fecham duas ou tres semanas enquanto os donos tiram as tradicionais ferias de agosto. Os grandes monumentos ficam abertos e cheios de visitantes, a Paris Plages continua, e a cidade parece estranhamente sossegada nos seus bairros residenciais.",
      9: "Sem duvida o melhor mes: dias quentes a abrandar dos 21C, multidoes a rarear depois da primeira semana, e lojas e restaurantes a reabrir renovados das ferias de verao. A Semana da Moda e os eventos de design animam o final do mes, e a relacao qualidade-preco dos hoteis melhora com o abrandamento do pico.",
      10: "Ameno e muitas vezes luminoso, com 16C, cor de outono nos parques e o regresso dos primeiros periodos de chuva a serio. A Nuit Blanche, no inicio de outubro, mantem museus e instalacoes de arte abertos toda a noite e de graca, e as multidoes de epoca baixa tornam as filas dos museus geriveis.",
      11: "Fresco, humido e cinzento, com 11C, e a fechar-se o periodo de luz mais curto, mas com as menores multidoes do outono e boas ofertas de hotel. As luzes de Natal acendem-se nos Campos Eliseos e as montras dos grandes armazens montam-se no final de novembro, animando um mes escuro.",
      12: "Frio, com 8C, muitas vezes chuvoso e escuro, mas o centro brilha com luzes de Natal, montras iluminadas e mercados. Os precos disparam no periodo do Natal ao Ano Novo, quando os Campos Eliseos e a zona de Notre-Dame atraem grandes multidoes festivas, embora o inicio de dezembro se mantenha calmo e acessivel.",
    },
    climate: {
      1: { highC: 7, lowC: 3, rainyDays: 10 },
      2: { highC: 8, lowC: 3, rainyDays: 9 },
      3: { highC: 12, lowC: 5, rainyDays: 10 },
      4: { highC: 16, lowC: 7, rainyDays: 9 },
      5: { highC: 20, lowC: 11, rainyDays: 10 },
      6: { highC: 23, lowC: 14, rainyDays: 8 },
      7: { highC: 25, lowC: 16, rainyDays: 7 },
      8: { highC: 25, lowC: 16, rainyDays: 7 },
      9: { highC: 21, lowC: 13, rainyDays: 8 },
      10: { highC: 16, lowC: 10, rainyDays: 9 },
      11: { highC: 11, lowC: 6, rainyDays: 10 },
      12: { highC: 8, lowC: 4, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 170, high: 340 },
    tagline: "Paris e demasiado grande para se atravessar a pe, por isso e o arrondissement que reserva que decide quanto tempo do dia vai para o metro.",
    heroIntro:
      "Paris espalha os seus monumentos por uma dezena de arrondissements que nenhum visitante percorre de ponta a ponta a pe, e e exatamente por isso que o bairro onde dorme molda a viagem mais do que qualquer itinerario. Este guia compara as cinco zonas que vale a pena reservar, das vielas na moda de Le Marais aos bares a beira do canal a nordeste, e indica o hotel que justifica o preco em cada uma.",
    accent: { from: "#2B3A6B", to: "#D9B96A", ink: "#18213F" },
    neighborhoodSlugs: [
      "le-marais",
      "saint-germain",
      "montmartre",
      "latin-quarter",
      "canal-saint-martin",
    ],
    nearbyCitySlugs: ["amsterdam"],
  },

  neighborhoods: [
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      bestFor: ["first-time", "nightlife", "romantic"],
      vibe: "Vielas medievais e grandes hotels particuliers enchem o 3.o e o 4.o arrondissements, tornando-os no canto mais na moda do centro de Paris, tudo boutiques, galerias e uma cena de bares que continua bem depois de as lojas fecharem. A imponente Place des Vosges ancora o bairro, e Notre-Dame, o Louvre e as ilhas ficam todos a pe, sem precisar de metro. Reserve aqui se quiser uma base elegante e central, com sitio para onde ir depois do jantar.",
      pros: [
        "Notre-Dame, as ilhas, o Louvre e o Pompidou ficam todos a pe",
        "A melhor concentracao de boutiques e galerias do centro de Paris",
        "Bares e cozinhas ate tarde mantem o bairro acordado muito depois do jantar, sem precisar de metro",
      ],
      cons: [
        "Os precos dos hoteis e as contas dos restaurantes sao mais altos aqui do que em quase qualquer outro sitio",
        "As noites de fim de semana tornam as vielas estreitas barulhentas e genuinamente cheias",
        "O domingo traz a sua propria confusao, ja que muitas lojas aqui ficam abertas quando o resto de Paris fecha",
      ],
    },
    {
      slug: "saint-germain",
      citySlug: "paris",
      name: "Saint-Germain-des-Pres",
      lat: 48.8539,
      lng: 2.3336,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "O velho bairro literario da Margem Esquerda ainda vive da fama do Cafe de Flore e do Les Deux Magots, mas o verdadeiro atrativo e como se sente central e sem pressa, com galerias elegantes, o Jardim do Luxemburgo na sua orla e o Museu d'Orsay a curta caminhada do outro lado do rio. E polido em vez de genuino, o tipo de zona que serve para uma primeira visita ou uma viagem construida a volta de manhas lentas. Reserve aqui para uma base elegante e sem stress, que ainda assim deixa o Sena e o Bairro Latino ao alcance a pe.",
      pros: [
        "Curta caminhada ate ao Orsay, a travessia do rio para o Louvre e ao Jardim do Luxemburgo",
        "Calmo, central e facil de se orientar, uma escolha tolerante para uma primeira estadia",
        "Duas linhas de metro e acesso RER chegam a ambos os aeroportos e a Versalhes sem complicacoes de transbordo",
      ],
      cons: [
        "Tanto os quartos de hotel como um cafe nos cafes famosos custam um extra",
        "A vida noturna e mais sossegada do que a do Marais ou a do bairro do canal depois do jantar",
        "Parece polido e virado para visitantes, em vez de genuinamente vivido",
      ],
    },
    {
      slug: "montmartre",
      citySlug: "paris",
      name: "Montmartre",
      lat: 48.8867,
      lng: 2.3431,
      bestFor: ["romantic", "budget", "local"],
      vibe: "A colina acima do 18.o arrondissement mantem um ambiente aldeao que o resto do centro de Paris perdeu ha muito, com as suas escadarias de calcada e pequenas pracas a subir em direcao as cupulas brancas do Sacre-Coeur. Afaste-se uma rua ou duas das multidoes a volta da basilica e da Place du Tertre e encontra wine bars e um ritmo genuinamente local. Dorme-se mais barato do que no centro, mas cada viagem ate ao Louvre ou ao Sena significa uma viagem de metro, nao um passeio.",
      pros: [
        "O panorama gratuito das escadas do Sacre-Coeur supera qualquer miradouro pago da cidade",
        "Os quartos aqui custam claramente menos do que na Margem Direita central",
        "Vielas sossegadas e bares locais surgem assim que se afasta dos grupos de excursao",
      ],
      cons: [
        "Todos os grandes monumentos la em baixo ficam a uma viagem de metro, nao a pe",
        "Escadas e ladeiras ingremes por todo o lado tornam dificil o transporte de malas e carrinhos de bebe",
        "As escadas da basilica e a Place du Tertre sao territorio conhecido de carteiristas e vendedores insistentes",
      ],
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Bairro Latino",
      lat: 48.8489,
      lng: 2.3469,
      bestFor: ["budget", "first-time", "family"],
      vibe: "As ruas construidas a volta da Sorbonne, no 5.o arrondissement, mantem-se animadas com livrarias, cozinhas baratas e energia estudantil entre o Pantheon e o rio. Fica suficientemente perto para se ir a pe ate Notre-Dame, as ilhas e ao Jardim do Luxemburgo, com camas que geralmente custam menos do que na Saint-Germain, mais polida, ali ao lado. Animado de dia, torna-se um pouco tosco nos cantos mais turisticos assim que chega a multidao da noite.",
      pros: [
        "Notre-Dame, a Sainte-Chapelle e as ilhas ficam todas a pe do outro lado do rio",
        "Quartos e refeicoes saem mais baratos aqui do que na vizinha Saint-Germain",
        "As ligacoes de RER e metro daqui chegam diretamente a Versalhes e a ambos os aeroportos",
      ],
      cons: [
        "A Rue de la Huchette e as ruas a sua volta estao cheias de restaurantes armadilha para turistas",
        "A zona a volta da Sorbonne e da beira-rio fica cheia e barulhenta",
        "Os edificios antigos significam que alguns quartos sao pequenos, com soalhos e escadas a ranger",
      ],
    },
    {
      slug: "canal-saint-martin",
      citySlug: "paris",
      name: "Canal Saint-Martin",
      lat: 48.8709,
      lng: 2.3665,
      bestFor: ["local", "nightlife", "budget"],
      vibe: "Este trecho do 10.o e do 11.o arrondissements estende-se ao longo de um canal ladeado de arvores, onde os locais fazem piqueniques nas margens e torrefacoes de cafe independentes, wine bars naturais e lojas vintage enchem as ruas laterais. Nao tem nenhum dos monumentos de postal, mas tem toda a vida de bairro, a coisa mais proxima em Paris de uma noite passada entre residentes em vez de visitantes. Conte com uma viagem de metro para chegar a Torre Eiffel ou ao Louvre, ja que nenhum monumento de destaque fica ao alcance a pe.",
      pros: [
        "A vida noturna mais genuinamente local da cidade, com wine bars naturais e piqueniques a beira do canal",
        "Comer e beber custa menos aqui do que em qualquer sitio perto do centro turistico",
        "As ligacoes de metro ate ao Marais e ao resto da Margem Direita sao rapidas e diretas",
      ],
      cons: [
        "Uma viagem de metro separa este bairro da Torre Eiffel, do Louvre e das ilhas",
        "Quase nenhum monumento de destaque fica ao alcance a pe",
        "Algumas ruas perto do canal parecem duvidosas depois de escurecer",
      ],
    },
  ],

  pois: [
    {
      slug: "eiffel-tower",
      citySlug: "paris",
      name: "Torre Eiffel",
      lat: 48.8584,
      lng: 2.2945,
      kind: "sight",
      needsBooking: true,
      tip: "Reserve online, com semanas de antecedencia, um bilhete de elevador com hora marcada para o topo; o site oficial liberta lugares cerca de 60 dias antes e esgotam depressa; subir a pe ate ao segundo andar pelas escadas e mais barato e quase nunca tem fila. Venha para o primeiro horario da manha ou depois de escurecer, quando a torre cintila durante cinco minutos a cada hora certa. Mantenha os sacos bem fechados: a base e o Trocadero do outro lado do rio sao terreno de eleicao de carteiristas.",
    },
    {
      slug: "louvre",
      citySlug: "paris",
      name: "Museu do Louvre",
      lat: 48.8606,
      lng: 2.3376,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve uma entrada com hora marcada online, e obrigatoria mesmo com o Paris Museum Pass, e escolha o primeiro horario das 9h para chegar a Mona Lisa antes de se formar o muro de telemoveis. O Louvre fecha as tercas-feiras e abre ate tarde (por volta das 21h) as quartas e sextas, quando o serao e bem mais calmo. Entre pelo Carrousel du Louvre ou pela Porte des Lions para saltar a fila da piramide.",
    },
    {
      slug: "notre-dame",
      citySlug: "paris",
      name: "Catedral de Notre-Dame",
      lat: 48.853,
      lng: 2.3499,
      kind: "sight",
      needsBooking: false,
      tip: "Reaberta em dezembro de 2024 depois do incendio, e o interior restaurado e deslumbrante. A entrada e gratuita, mas e comum uma fila de uma hora, por isso reserve um horario marcado gratuito na app ou no site oficial ate dois dias antes para entrar diretamente. Va cedo ou ao fim do dia para a visita mais tranquila, e reserve a subida a torre em separado se quiser a vista do telhado ao nivel das gargulas.",
    },
    {
      slug: "musee-orsay",
      citySlug: "paris",
      name: "Museu d'Orsay",
      lat: 48.86,
      lng: 2.3266,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve online um horario marcado para a grande colecao impressionista do mundo, instalada numa antiga estacao de comboios. Fecha as segundas e abre ate tarde, por volta das 21h45, as quintas, a altura mais calma e cheia de atmosfera para visitar. Suba primeiro diretamente as salas de Monet, Renoir e Van Gogh no quinto piso e depois desca, e apanhe a vista atraves do gigantesco mostrador do relogio da estacao.",
    },
    {
      slug: "montmartre-sacre-coeur",
      citySlug: "paris",
      name: "Montmartre e o Sacre-Coeur",
      lat: 48.8867,
      lng: 2.3431,
      kind: "viewpoint",
      needsBooking: false,
      tip: "A basilica e gratuita e as escadas no alto da colina dao o melhor panorama gratuito de Paris, melhor ao por do sol ou de manha cedo, antes de chegarem os grupos de excursao e os vendedores agressivos de pulseiras da amizade. Salte a confusao da Place du Tertre e passeie pelas vielas sossegadas por tras, a volta da Rue de l'Abreuvoir e da vinha. Suba de funicular (um bilhete de metro) se a escadaria parecer intimidante, e cuidado com os bolsos nas escadas cheias.",
    },
    {
      slug: "arc-de-triomphe",
      citySlug: "paris",
      name: "Arco do Triunfo e Campos Eliseos",
      lat: 48.8738,
      lng: 2.295,
      kind: "viewpoint",
      needsBooking: true,
      tip: "O terraco no topo da uma vista soberba a direito pelos Campos Eliseos e pela estrela de doze avenidas, e precisa de um bilhete com hora marcada online para subir os 284 degraus. Chegue pela passagem pedonal subterranea a partir da esquina dos Campos Eliseos, nunca atravessando a rotunda de transito. Va ao fim da tarde para a luz dourada pela avenida, e desca a pe os Campos em direcao a Concorde em vez de os subir.",
    },
    {
      slug: "sainte-chapelle",
      citySlug: "paris",
      name: "Sainte-Chapelle",
      lat: 48.8554,
      lng: 2.345,
      kind: "sight",
      needsBooking: true,
      tip: "Esta capela real do seculo XIII guarda quinze paredes altissimas de vitrais, melhor vistas numa manha luminosa, quando a luz atravessa a jorros. Reserve um bilhete com hora marcada online e compre o bilhete combinado com a Conciergerie ao lado para ver as duas na mesma visita. Fica dentro de um tribunal em funcionamento, por isso ha um controlo de seguranca tipo aeroporto a entrada; venha as 9h da abertura para vencer a fila e os grupos de autocarro.",
    },
    {
      slug: "versailles",
      citySlug: "paris",
      name: "Palacio de Versalhes",
      lat: 48.8049,
      lng: 2.1204,
      kind: "sight",
      needsBooking: true,
      tip: "Reserve meio dia a um dia inteiro: apanhe o RER C ate Versailles Chateau Rive Gauche (cerca de 45 min, ida por cerca de 3,65 EUR) e evite as tercas, quando muitos museus de Paris fecham e Versalhes fica a abarrotar. Reserve online o bilhete Passport com horario marcado para o palacio e chegue a abertura das 9h; a Galeria dos Espelhos e mais calma logo ao inicio. Os vastos jardins sao gratuitos exceto nos dias de espetaculo das fontes musicais, por isso deixe tempo para caminhar ou alugar uma bicicleta ou um carrinho.",
    },
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      kind: "experience",
      needsBooking: false,
      tip: "Percorra as vielas em busca de boutiques, galerias e da arcada da Place des Vosges, a mais antiga praca planeada de Paris e gratuita para passear. Venha ao domingo, quando grande parte do bairro fica aberta ao contrario do resto da cidade, e faca fila para um falafel na Rue des Rosiers ao almoco. Espreite os patios gratuitos do Hotel de Sully e do Museu Carnavalet (colecao permanente gratuita sobre a historia da cidade) pelo caminho.",
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Bairro Latino",
      lat: 48.8489,
      lng: 2.3469,
      kind: "experience",
      needsBooking: false,
      tip: "Explore as ruas a volta do Pantheon e da Sorbonne pelas livrarias, a loja Shakespeare and Company junto ao rio e a arena romana em ruinas das Arenes de Lutece, escondida junto a Rue Monge (gratuita). Salte a turistica Rue de la Huchette para jantar e coma uma rua atras. O mercado matinal na Rue Mouffetard e o destaque local, melhor antes do meio-dia.",
    },
    {
      slug: "seine-cruise",
      citySlug: "paris",
      name: "Cruzeiro no rio Sena",
      lat: 48.8606,
      lng: 2.2977,
      kind: "experience",
      needsBooking: false,
      tip: "Um deslize de barco de uma hora por Notre-Dame, o Louvre e a Torre Eiffel e a forma mais facil de ligar os monumentos e descansar os pes, e e magico depois de escurecer, quando tudo esta iluminado. Salte os caros cruzeiros com jantar e apanhe uma partida normal dos Bateaux-Mouches ou dos Vedettes du Pont-Neuf por cerca de 15 EUR. Embarque ao anoitecer para a transicao do por do sol para as luzes, e sente-se no conves superior aberto.",
    },
    {
      slug: "luxembourg-gardens",
      citySlug: "paris",
      name: "Jardim do Luxemburgo",
      lat: 48.8462,
      lng: 2.3372,
      kind: "park",
      needsBooking: false,
      tip: "O parque mais elegante da Margem Esquerda e gratuito e feito para um piquenique ou uma pausa entre museus, com cadeiras verdes de metal para arrastar ate a fonte central, onde as criancas navegam barquinhos. E a pausa perfeita entre Saint-Germain, o Orsay e o Bairro Latino, todos a curta caminhada. Venha a meio da manha num dia de sol e agarre uma cadeira cedo, enchem depressa a hora do almoco.",
    },
    {
      slug: "musee-rodin",
      citySlug: "paris",
      name: "Museu Rodin",
      lat: 48.8553,
      lng: 2.3158,
      kind: "museum",
      needsBooking: false,
      tip: "A mansao do escultor e o jardim de rosas guardam O Pensador e As Portas do Inferno num dos cenarios de museu mais bonitos da cidade, perto dos Invalides. Um bilhete so para o jardim e uma forma barata de ver os grandes bronzes ao ar livre se tiver pouco tempo ou orcamento. Fecha as segundas; venha numa tarde amena e combine-o com os Invalides ali perto e o tumulo de Napoleao.",
    },
    {
      slug: "pere-lachaise",
      citySlug: "paris",
      name: "Cemiterio do Pere-Lachaise",
      lat: 48.8619,
      lng: 2.3934,
      kind: "sight",
      needsBooking: false,
      tip: "O cemiterio mais famoso da cidade e um labirinto gratuito e acidentado de avenidas de calcada e tumulos imponentes, lugar de repouso de Jim Morrison, Oscar Wilde, Chopin e Edith Piaf. Apanhe um mapa gratuito a entrada ou descarregue-o, porque as campas sao genuinamente dificeis de encontrar entre 70 000 talhoes. Entre pela Porte des Amandiers ou pelo metro Pere Lachaise, use calcado a serio para a calcada e reserve pelo menos 90 minutos.",
    },
  ],

  itineraries: [
    {
      citySlug: "paris",
      days: 2,
      summary:
        "Dois dias em Paris sao uma corrida aos imperdiveis, e vai sentir a pressa, porque a cidade pede mesmo tres ou quatro. Em 48 horas da para fazer a Torre Eiffel, os Campos Eliseos e o Arco do Triunfo, e um cruzeiro no Sena no primeiro dia, e depois o Louvre, as ilhas, Notre-Dame, a Sainte-Chapelle e o Bairro Latino no segundo. O que tem mesmo de cortar: Montmartre, Versalhes, o Orsay e qualquer demora lenta num parque ou numa esplanada. Isto serve para uma escapadela de fim de semana ou uma primeira prova antes de combinar Paris com Amesterdao. O inegociavel e reservar antecipadamente o horario do topo da Torre Eiffel e uma entrada com hora marcada no Louvre antes de embarcar, mais uma reserva gratuita de Notre-Dame, ou perde horas que nao pode dispensar em filas. Instale-se em Le Marais para que ambos os dias comecem centrais e a pe, com jantar e bares a poucos passos da cama. Se aparecer um terceiro dia, acrescente Montmartre e o Orsay e abrande bem o ritmo.",
      stayNeighborhoodSlug: "le-marais",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Torre Eiffel, Campos Eliseos e o Sena",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Comece na Torre Eiffel para o seu horario do topo reservado de manha, antes de as filas e as multidoes crescerem na base. Passe depois ao terraco do Trocadero para a foto classica de frente da torre inteira, mantendo o saco fechado neste ponto de carteiristas.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Caminhe para leste ate ao Museu Rodin, perto dos Invalides, onde o jardim de rosas guarda O Pensador e As Portas do Inferno num dos cenarios mais bonitos da cidade. Um bilhete so para o jardim e uma forma rapida e barata de ver os grandes bronzes se o tempo apertar.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Apanhe o metro ate ao Arco do Triunfo e suba os 284 degraus ate ao terraco para a vista pela estrela de doze avenidas, chegando pela passagem subterranea, nunca atravessando o transito. Depois desca a pe os Campos Eliseos em direcao a Concorde e as Tulherias.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Embarque num cruzeiro no Sena ao anoitecer perto da Torre Eiffel ou da Pont Neuf para o deslize do por do sol as luzes por Notre-Dame e o Louvre. Sente-se no conves superior aberto e faca uma partida normal de uma hora em vez de um barco de jantar caro.",
              durationMin: 75,
            },
            {
              text: "Regresse a Le Marais para jantar nas vielas a volta da Place des Vosges, reservando mesa em qualquer sitio com nome. Termine com uma bebida num dos bares tardios do bairro, a curta caminhada do hotel.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, as ilhas e o Bairro Latino",
          morning: [
            {
              poiSlug: "louvre",
              text: "Esteja no Louvre para o seu horario reservado das 9h e va direto a Mona Lisa antes de se formar o muro de telemoveis, depois de uma volta pela pintura italiana, a Venus de Milo e as joias da coroa francesa. Entre pelo Carrousel ou pela Porte des Lions para saltar a fila da piramide.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Atravesse para a Ile de la Cite para o seu horario marcado na Sainte-Chapelle, guardando as quinze paredes de vitrais para a luz luminosa da tarde. Use o bilhete combinado para ver a Conciergerie ao lado, e conte com um controlo de seguranca a entrada do tribunal.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Caminhe ate Notre-Dame, reaberta em dezembro de 2024 com o interior restaurado, usando o seu horario marcado gratuito para saltar a longa fila de acesso. Depois contorne o exterior e os arcobotantes a partir do jardim ribeirinho por tras.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Atravesse o rio para o Bairro Latino, passeando pelas livrarias e pela Shakespeare and Company antes do jantar. Coma uma rua atras da turistica Rue de la Huchette e termine com uma bebida a volta do Pantheon.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 3,
      summary:
        "Tres dias sao uma duracao confortavel para uma primeira visita e perto do ponto certo para Paris. Dao-lhe a Torre Eiffel, os Campos Eliseos, o Arco do Triunfo e um cruzeiro no Sena no primeiro dia, o Louvre com as ilhas, Notre-Dame e a Sainte-Chapelle no segundo, e um terceiro dia de Montmartre com o Orsay e o Marais que equilibra uma aldeia no alto da colina com a grande colecao impressionista. Come em tres bairros diferentes, encaixa uma pausa num parque e os museus que interessam, e ainda anda a um ritmo que deixa sentar-se numa esplanada em vez de passar por ela a correr. O que continua a cortar-se e o passeio a Versalhes, que e exatamente o que acrescenta um quarto dia. Serve para quem visita pela primeira vez, casais, e qualquer pessoa a caminho de Amesterdao a seguir. Fique em Saint-Germain: fica a pe do Orsay, do Louvre do outro lado do rio e do Jardim do Luxemburgo, e os seus cafes fazem uma base elegante para os seroes. Reserve o topo da Eiffel, os horarios do Louvre e do Orsay, e uma reserva gratuita de Notre-Dame antes de embarcar.",
      stayNeighborhoodSlug: "saint-germain",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Torre Eiffel, Campos Eliseos e o Sena",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Comece na Torre Eiffel para o seu horario do topo reservado a frente das multidoes, e passe depois ao Trocadero para a vista completa de frente. Mantenha o saco fechado: a base e o terraco sao terreno de eleicao de carteiristas.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Caminhe ate ao Museu Rodin, perto dos Invalides, para O Pensador e As Portas do Inferno entre as rosas. Combine-o com um olhar a dourada cupula dos Invalides sobre o tumulo de Napoleao ao lado.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Metro ate ao Arco do Triunfo e suba ao terraco para a vista pela estrela de avenidas, usando a passagem subterranea para chegar la. Desca a pe os Campos Eliseos em direcao a Concorde e ate aos jardins das Tulherias.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Faca um cruzeiro no Sena ao anoitecer para o deslize iluminado por entre os monumentos, embarcando perto da Pont Neuf ou da Torre Eiffel. Escolha um barco normal de uma hora e sente-se em cima para o por do sol.",
              durationMin: 75,
            },
            {
              text: "Regresse a Saint-Germain para jantar entre as galerias e os cafes, reservando com antecedencia. Um copo de despedida numa esquina classica como o Cafe de Flore ou num bar mais sossegado da Margem Esquerda fecha a noite.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, as ilhas e a Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Esteja no Louvre para o seu horario das 9h, indo direto a Mona Lisa antes da confusao, depois a Venus de Milo e as galerias italianas. Entre pelo Carrousel para saltar a fila da piramide, e marque uma hora firme de saida ou o museu engole o dia inteiro.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Atravesse para a Ile de la Cite para o seu horario na Sainte-Chapelle, marcado para a luz luminosa da tarde atraves das quinze paredes de vitrais. Use o bilhete combinado para a Conciergerie ao lado, outrora uma prisao revolucionaria.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Caminhe ate Notre-Dame com o seu horario marcado gratuito para ver o interior restaurado apos a reabertura de 2024 sem a longa fila. Contemple o exterior e os arcobotantes a partir do jardim por tras, e depois passeie ate a mais sossegada Ile Saint-Louis para um gelado.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Deixe-se levar ate ao Bairro Latino para o serao, folheando a Shakespeare and Company e as ruas das livrarias a volta da Sorbonne. Coma bem uma rua a fora da faixa turistica e termine com uma bebida perto do Pantheon.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, o Orsay e o Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Suba de metro ate Montmartre cedo e chegue as escadas do Sacre-Coeur para o panorama gratuito antes de chegarem os grupos de excursao e os vendedores. Passeie pelas vielas sossegadas por tras da basilica, a volta da vinha e da Rue de l'Abreuvoir, e salte a confusao da Place du Tertre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Apanhe o metro ate ao Museu d'Orsay para o seu horario marcado, indo direto as salas de Monet, Renoir e Van Gogh no quinto piso antes de descer. Apanhe a vista da cidade atraves do gigantesco mostrador do relogio da estacao.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Atravesse o rio para Le Marais para o serao, passeando pelas boutiques e pela arcada da Place des Vosges a medida que os bares enchem. Faca fila para um falafel na Rue des Rosiers ou reserve um bistro, e depois entregue-se a cena noturna do bairro.",
              durationMin: 180,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 4,
      summary:
        "Quatro dias sao o ponto certo para uma primeira visita a Paris, transformando uma corrida turistica numas ferias a serio. Os dias um a tres cobrem o essencial sem pressa: a Torre Eiffel, os Campos Eliseos e um cruzeiro no Sena; o Louvre, as ilhas, Notre-Dame e a Sainte-Chapelle; depois Montmartre, o Museu d'Orsay e o Marais. O quarto dia e a valvula de escape, um passeio a Versalhes ao palacio e aos seus vastos jardins, alcancado em 45 minutos de RER C e melhor comecado a abertura das 9h em qualquer dia menos terca. Esta duracao serve para viajantes que odeiam a marcha forcada, casais, e qualquer pessoa cujos voos emoldurem a viagem de forma desajeitada. Para quatro dias recomendamos instalar-se no Bairro Latino: e central e a pe das ilhas e do Orsay, oferece camas com melhor relacao qualidade-preco do que a Saint-Germain ao lado, e fica na linha RER C direta a Versalhes. Para la de quatro dias, acrescente uma manha de Museu Rodin e Invalides ou siga para Amesterdao de comboio rapido em cerca de tres horas e meia. Reserve a Eiffel, o Louvre, o Orsay e o Passport de Versalhes com boa antecedencia.",
      stayNeighborhoodSlug: "latin-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Torre Eiffel, Campos Eliseos e o Sena",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Comece na Torre Eiffel para o seu horario do topo reservado antes das filas, e passe depois ao Trocadero para a foto de frente. Mantenha os sacos fechados neste ponto de carteiristas.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Caminhe ate ao Museu Rodin para O Pensador entre as rosas, e espreite a cupula dos Invalides ali perto. Um bilhete de jardim e uma opcao rapida se quiser continuar em movimento.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Metro ate ao Arco do Triunfo e suba ao terraco para a vista pelas avenidas, alcancado pela passagem subterranea. Desca a pe os Campos Eliseos ate a Concorde e atraves das Tulherias.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Faca um cruzeiro no Sena ao anoitecer para os monumentos iluminados, embarcando perto da Pont Neuf ou da Torre Eiffel e sentando-se no conves aberto. Mantenha-se num barco normal de uma hora em vez de um cruzeiro com jantar.",
              durationMin: 75,
            },
            {
              text: "Jantar de volta ao Bairro Latino, assentando no bairro a que chama casa. Coma uma rua a fora da faixa turistica e termine com uma bebida a volta do Pantheon.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, as ilhas e a Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Esteja no Louvre para o seu horario das 9h e chegue a Mona Lisa antes da confusao, depois a Venus de Milo e as salas italianas. Entre pelo Carrousel e marque uma hora de saida para o museu nao comer o dia inteiro.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Atravesse para a Ile de la Cite para o seu horario na Sainte-Chapelle na luz luminosa da tarde, quando os vitrais brilham. Use o bilhete combinado para a Conciergerie ao lado.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Caminhe ate Notre-Dame com o seu horario marcado gratuito para ver o interior restaurado sem a fila, e depois admire os arcobotantes a partir do jardim por tras. Passeie ate a Ile Saint-Louis para um gelado da Berthillon.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Passeie pelos caes da Margem Esquerda a medida que a luz se vai e os bouquinistes arrumam, e depois coma no Bairro Latino perto da sua base. Reserve em qualquer sitio bem avaliado, e salte as armadilhas de menu de neon junto ao rio.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, o Orsay e o Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Suba a Montmartre cedo para o panorama gratuito do Sacre-Coeur antes dos vendedores e dos grupos, e depois passeie pelas vielas sossegadas por tras, a volta da vinha. Suba de funicular com um bilhete de metro se as escadas parecerem ingremes, e cuidado com os bolsos nas escadas cheias.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Metro ate ao Museu d'Orsay para o seu horario marcado, indo direto aos impressionistas do quinto piso antes de descer. Nao perca a vista atraves do gigantesco relogio da estacao.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Atravesse para Le Marais para o serao, folheando as boutiques e a arcada da Place des Vosges a medida que os bares enchem. Falafel na Rue des Rosiers ou um bistro reservado, e depois uma bebida na cena tardia do bairro.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Passeio a Versalhes",
          morning: [
            {
              poiSlug: "versailles",
              text: "Apanhe o RER C ate Versailles Chateau Rive Gauche, cerca de 45 minutos, procurando chegar a abertura do palacio as 9h e evitando as tercas. Use o seu bilhete Passport reservado com horario marcado para o palacio e comece pela Galeria dos Espelhos enquanto esta mais calma, depois os Aposentos de Estado.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "versailles",
              text: "Passe a tarde nos vastos jardins, gratuitos exceto nos dias das fontes musicais, caminhando ou alugando uma bicicleta ou um carrinho de golfe ate ao Grande Canal, aos palacios do Trianon e ao aldeamento rustico de Maria Antonieta. Leve piquenique ou almoce perto da propriedade, ja que os cafes do palacio sao caros e cheios.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Apanhe o RER C de volta a Paris central ao inicio da noite, cansado mas com os grandes monumentos feitos. Reserve um jantar de despedida no Bairro Latino ou em Saint-Germain, gastando um pouco mais na sua ultima refeicao em Paris.",
              durationMin: 150,
            },
            {
              text: "Termine com um passeio lento ao longo do Sena para ver Notre-Dame e as pontes iluminadas, a curta caminhada da sua base. Sem viagem de regresso a casa para planear, que e o objetivo de ficar central durante quatro dias.",
              durationMin: 60,
            },
          ],
        },
      ],
    },
  ],
};

export default parisPt;

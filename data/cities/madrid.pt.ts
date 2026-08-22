import type { CityData } from "../types";

const madridPt: CityData = {
  city: {
    slug: "madrid",
    name: "Madrid",
    country: "Espanha",
    countrySlug: "spain",
    lat: 40.4168,
    lng: -3.7038,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "MAD",
    airportToCenter:
      "A linha 8 do metro, a partir de Barajas, vai até Nuevos Ministerios em cerca de 30 min, mas atenção ao suplemento de aeroporto de 3 EUR que acresce ao bilhete, por isso conte com uns 4,50 a 5 EUR. Alternativas: o autocarro Airport Express de 24 horas até Atocha por cerca de 5 EUR, ou o comboio suburbano Cercanias C1 da T4 até às estações centrais.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Frio e seco, com máximas à volta de 10C e manhãs de geada, e a cidade fica calma depois da cavalgada dos Reis Magos a 6 de janeiro, o maior evento infantil do Natal espanhol. As tarifas dos hotéis estão no mínimo do ano, e as janelas noturnas de entrada gratuita no Prado e no Reina Sofia estão maravilhosamente vazias.",
      2: "Ainda frio, perto dos 12C, mas muitas vezes luminoso e soalheiro, com o menor número de turistas do ano e as camas mais baratas. Um bom mês para o triângulo da arte: aproveite as duas últimas horas gratuitas no Museu do Prado e no Reina Sofia sem as filas da primavera.",
      3: "As máximas sobem para os 16C e as esplanadas reabrem nas tardes de sol, embora as noites continuem frias. Se a Semana Santa calhar no fim de março, conte com procissões solenes e um salto de visitantes nacionais e de preços de hotel na semana antes da Páscoa.",
      4: "Um dos melhores meses, a 18C, verde e ameno, com o Retiro em flor e caminhadas confortáveis o dia todo. A Páscoa cai muitas vezes por aqui, por isso as procissões da Semana Santa e os preços mais altos podem atingir a semana em que calhar a Páscoa; reserve à volta dela ou dentro dela de propósito.",
      5: "Madrid no seu auge: quente a 23C, luz longa, e a festa de San Isidro, a meio de maio, enche a cidade de concertos, verbenas e locais em trajes tradicionais à volta de La Latina e Las Vistillas. As multidões e os preços sobem, por isso reserve o Museu do Prado e o Palacio Real com antecedência.",
      6: "Quente a muito quente, a 29C, com noites longas e a época das esplanadas em pleno, antes de chegar a verdadeira fornalha. As multidões são grandes nos grandes museus, por isso aproveite as horas gratuitas da noite ou a abertura às 9h, e guarde as tardes para a sombra.",
      7: "Quente e seco, com frequência acima dos 34C, e o início de julho traz o Orgullo, o enorme Orgulho Gay de Madrid à volta de Chueca, um dos maiores da Europa, que enche o centro durante uma semana. Faça turismo antes do meio-dia, esconda-se do calor das 15h às 19h e jante tarde como toda a gente.",
      8: "O mês mais vazio e mais quente: as máximas chegam aos 35C e muitos bares e restaurantes de família fecham para férias enquanto os madrilenos partem para a costa. O programa cultural Veranos de la Villa mantém alguns concertos e cinema ao ar livre, mas é o mês a evitar, a não ser que as camas baratas compensem o calor.",
      9: "O calor vai aliviando ao longo do mês, dos cerca de 30C para temperaturas agradáveis, a cidade volta a encher à medida que os locais regressam, e as esplanadas mantêm-se animadas até de noite. As multidões acalmam depois da primeira semana, o que faz de meados a fins de setembro talvez a melhor janela do ano.",
      10: "Dias amenos, perto dos 22C, luz dourada no Retiro, e as primeiras chuvas fracas a regressar no fim do mês. As multidões diminuem visivelmente e a relação qualidade-preço dos hotéis melhora, uma forte escolha de meia-estação para percorrer todo o centro com conforto.",
      11: "Fresco a 15C, com mais dias cinzentos e de chuva, mas abertas de sol entre as frentes e os grandes pontos turísticos mais calmos do outono. Os preços de época baixa regressam e muitas vezes consegue reservar o Palacio Real ou uma visita ao Bernabeu com poucos dias de antecedência.",
      12: "Frio, perto dos 10C, mas festivo, com luzes penduradas pela Gran Via e pelo centro, e a Puerta del Sol como epicentro da passagem de ano, quando as multidões comem doze uvas às doze badaladas. Calmo até ao período do Natal ao Ano Novo, quando as tarifas sobem e as noites de museu gratuito atraem multidões locais.",
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
    tagline: "Uma capital construída sobre noites compridas e grandes museus, onde cinco barrios puxam em cinco direções diferentes e escolher um molda toda a estadia.",
    heroIntro:
      "Madrid reúne um triângulo de arte de nível mundial, um elegante núcleo dos Habsburgo e uma cultura de tapas que mal arranca antes das 22h, numa cidade onde a distância importa menos do que o barrio escolhido. Este guia compara os cinco bairros que vale a pena reservar, do Centro de postal às vielas de tapas de La Latina, e indica o hotel que justifica o preço em cada um.",
    accent: { from: "#C42E3A", to: "#E8A33D", ink: "#6E1F28" },
    neighborhoodSlugs: ["centro", "la-latina", "malasana", "chueca", "salamanca"],
    nearbyCitySlugs: ["seville", "barcelona"],
  },

  neighborhoods: [
    {
      slug: "centro",
      citySlug: "madrid",
      name: "Centro (Sol e núcleo dos Habsburgo)",
      lat: 40.4155,
      lng: -3.7074,
      bestFor: ["first-time", "family"],
      vibe: "Todos os grandes monumentos de Madrid ficam a dez minutos a pé deste quilómetro quadrado à volta da Puerta del Sol, da Plaza Mayor e do Palacio Real, com as lojas e os teatros da Gran Via a uns quarteirões a norte. É a zona mais ruidosa e mais movimentada da cidade de dia e bem entrada a noite: grupos de autocarro, bancas de recordações e restaurantes de menu do dia para turistas à volta das praças principais. Reserve aqui se a viagem é curta e cada hora conta mais do que a morada, e não se importa de trocar sossego por zero tempo de transporte. Esta é a porta de entrada de Madrid, não o seu canto calmo.",
      pros: [
        "Plaza Mayor, Palacio Real, Puerta del Sol e Gran Via todos dentro de dez minutos a pé",
        "A base mais bem ligada da cidade, mesmo por cima do nó de Cercanias e metro de Sol",
        "Nunca falta um bar de tapas ou uma banca de mercado, de dia ou de noite",
      ],
      cons: [
        "As multidões turísticas mais densas de Madrid, e os carteiristas trabalham Sol e a Gran Via a sério",
        "O barulho da rua dura até depois da meia-noite, má escolha para quem tem sono leve",
        "Os restaurantes de fachada para as praças principais cobram pela morada, não pela comida",
      ],
    },
    {
      slug: "la-latina",
      citySlug: "madrid",
      name: "La Latina",
      lat: 40.4109,
      lng: -3.7108,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "A sul da Plaza Mayor, as ruas mais antigas de Madrid serpenteiam entre os bares de tapas lado a lado da Cava Baja e a extensão dominical do mercado de El Rastro. Os locais tratam isto como o verdadeiro roteiro de tapas, não a versão turística, e o ritual de vermute e petiscos prolonga-se muito depois de as bancas do mercado fecharem. Reserve aqui se um bom roteiro de bares importa mais do que uma vista de museu, e preferir caminhar até à Plaza Mayor e ao palácio a apanhar transporte até lá. Os fins de semana trazem algumas das noites mais ruidosas e mais locais do centro.",
      pros: [
        "A Cava Baja e a Cava Alta reúnem o roteiro de bares de tapas mais denso e melhor de Madrid",
        "Uma caminhada plana de dez minutos até à Plaza Mayor e ao Palacio Real",
        "As manhãs de domingo trazem o El Rastro e, a seguir, uma verdadeira sessão de vermute",
      ],
      cons: [
        "As noites de quinta a domingo ficam genuinamente ruidosas à volta das ruas dos bares",
        "Os edifícios antigos significam quartos pequenos, escadas apertadas e elevadores que muitas vezes não existem",
        "As multidões do mercado de domingo entopem as ruas até bem entrada a tarde",
      ],
    },
    {
      slug: "malasana",
      citySlug: "madrid",
      name: "Malasana",
      lat: 40.4258,
      lng: -3.7038,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "A norte da Gran Via, as ruas que viram nascer a Movida dos anos 1980 vivem agora de lojas vintage, café de produção artesanal e bares indie à volta da Plaza del Dos de Mayo. É jovem e desalinhado nas margens, acordado até mais tarde do que quase qualquer outro ponto do centro, com cozinhas e bares de cocktails em vez de monumentos a preencher os seus seróes. Reserve aqui para as camas com melhor relação qualidade-preço a uma curta caminhada da ação, e aceite a banda sonora do fim de semana a subir pela janela. O centro histórico fica a dez minutos a pé sempre que quiser a versão de postal de Madrid.",
      pros: [
        "O melhor conjunto de bares independentes, cafés e lojas vintage da cidade",
        "Dez minutos a pé até à Gran Via e ao centro histórico",
        "Quartos mais baratos do que Sol e Salamanca para um nível de centralidade semelhante",
      ],
      cons: [
        "As noites de fim de semana à volta das praças ficam ruidosas e continuam assim depois das 3h",
        "Poucos monumentos convencionais ficam dentro do próprio bairro",
        "A multidão de festa que atrai pode tornar algumas ruas agitadas noite dentro",
      ],
    },
    {
      slug: "chueca",
      citySlug: "madrid",
      name: "Chueca",
      lat: 40.4224,
      lng: -3.6968,
      bestFor: ["nightlife", "local", "romantic"],
      vibe: "Mesmo a nordeste da Gran Via, o bairro LGBTQ+ de Madrid vive de boutiques de design, wine bars e mesas de restaurante que se espalham à volta da Plaza de Chueca, e transforma-se no epicentro do enorme Orgullo do início de julho. Passa uma imagem polida e social em vez de irreverente, mais perto de um bom jantar e de um cocktail tardio do que de um roteiro de bares agitado. Reserve aqui para chegar a pé ao Thyssen e à Gran Via em quinze minutos e ainda se sentir bem-vindo a caminho de casa às 2h. Fora da semana do Orgullo, os seróes aqui são animados sem cair no caos.",
      pros: [
        "Um conjunto compacto de excelentes restaurantes, bares de cocktails e boutiques de design",
        "Quinze minutos a pé até à Gran Via, ao Thyssen e ao Retiro",
        "Vida noturna acolhedora e sociável que atinge o auge durante a semana do Orgullo em julho",
      ],
      cons: [
        "A Plaza de Chueca fica genuinamente ruidosa aos fins de semana e durante toda a semana do Orgullo",
        "Os hotéis e restaurantes aqui estão entre os mais caros do centro",
        "Poucos monumentos de grande nome ficam dentro das ruas do próprio bairro",
      ],
    },
    {
      slug: "salamanca",
      citySlug: "madrid",
      name: "Salamanca",
      lat: 40.4302,
      lng: -3.6795,
      bestFor: ["romantic", "family"],
      vibe: "A nordeste do Retiro, a ampla malha de Salamanca troca o charme de calçada por boulevards calmos, compras de gama alta ao longo da Calle Serrano e uma noite de sono visivelmente mais sossegada. É o bairro mais arranjado de Madrid: restaurantes elegantes e porteiros em vez de bares de tapas e barulho de rua. Reserve aqui se espaço, segurança e polimento importam mais do que a distância a pé até à cidade velha, já que o Retiro e o Prado ficam ainda a uma curta caminhada ou uma paragem de metro. Vida noturna aqui significa um bom jantar, não um roteiro de bares.",
      pros: [
        "Ruas largas, calmas e elegantes, com compras de gama alta ao longo da Serrano",
        "Uma curta caminhada até ao Retiro e ao Museu do Prado, apoiada por boas ligações de metro",
        "Restauração de gama alta consistentemente boa, sem a agitação da cidade velha",
      ],
      cons: [
        "Hotéis, lojas e restaurantes aqui têm os preços mais altos da cidade",
        "Sente-se residencial e formal em vez de animado depois de o sol se pôr",
        "A vinte minutos a pé ou um salto de metro do núcleo antigo dos Habsburgo",
      ],
    },
  ],

  pois: [
    {
      slug: "prado-museum",
      citySlug: "madrid",
      name: "Museu do Prado",
      lat: 40.4138,
      lng: -3.6921,
      kind: "museum",
      needsBooking: true,
      tip: "A entrada é gratuita nas últimas duas horas (de segunda a sábado das 18:00 às 20:00, domingo das 17:00 às 19:00), mas as filas formam-se bem antes, por isso chegue 30 a 45 minutos mais cedo. Se for pago, reserve uma hora marcada online, vá primeiro diretamente às Meninas de Velazquez e às pinturas negras de Goya, e conte com duas a três horas no mínimo para os destaques.",
    },
    {
      slug: "reina-sofia",
      citySlug: "madrid",
      name: "Museu Reina Sofia",
      lat: 40.4079,
      lng: -3.6946,
      kind: "museum",
      needsBooking: true,
      tip: "A Guernica é a razão para vir, e está na Sala 205. A entrada é gratuita nas noites dos dias úteis (segunda e de quarta a sábado das 19:00 às 21:00) e domingo à tarde a partir das 12:30, mas fecha totalmente às terças; reserve online para saltar a fila, vá primeiro à tela de Picasso e depois avance para Dali e Miro.",
    },
    {
      slug: "thyssen-bornemisza",
      citySlug: "madrid",
      name: "Museu Thyssen-Bornemisza",
      lat: 40.4160,
      lng: -3.6948,
      kind: "museum",
      needsBooking: true,
      tip: "O terceiro ponto do triângulo da arte preenche as lacunas que o Prado e o Reina Sofia deixam: impressionistas, mestres antigos e obras do século XX numa só coleção percorrível a pé. É gratuito às tardes de segunda-feira (12:00-16:00) para a coleção permanente; caso contrário reserve online, comece no piso de cima e desça cronologicamente para poupar as pernas.",
    },
    {
      slug: "royal-palace",
      citySlug: "madrid",
      name: "Palacio Real",
      lat: 40.4179,
      lng: -3.7143,
      kind: "sight",
      needsBooking: true,
      tip: "Reserve online para saltar a longa fila de bilhetes, e consulte primeiro o site porque o palácio encerra a visitantes de surpresa para cerimónias de Estado. Vise a abertura às 10h, faça os salões de Estado e a Real Armaria, e depois atravesse para a Catedral da Almudena, gratuita, e para os Jardins Sabatini ao lado.",
    },
    {
      slug: "retiro-park",
      citySlug: "madrid",
      name: "Parque do Retiro e Palacio de Cristal",
      lat: 40.4152,
      lng: -3.6844,
      kind: "park",
      needsBooking: false,
      tip: "Gratuito e aberto desde o amanhecer; entre pelo lado da Puerta de Alcala e caminhe até ao lago dos barcos, onde alugar um barco a remos custa cerca de 6 EUR por 45 minutos, com as filas mais curtas antes do meio-dia. O Palacio de Cristal, um pavilhão de vidro que acolhe instalações de arte contemporânea gratuitas, fica mais fundo no parque e é a única coisa a não perder.",
    },
    {
      slug: "plaza-mayor",
      citySlug: "madrid",
      name: "Plaza Mayor",
      lat: 40.4155,
      lng: -3.7074,
      kind: "sight",
      needsBooking: false,
      tip: "A imponente praça arcada do século XVII é gratuita e melhor de manhã cedo ou depois do jantar, quando o aperto do dia diminui. Não se sente nos cafés de esplanada da própria praça, onde o acréscimo é brutal; em vez disso, apanhe o petisco de rua local, um bocadillo de calamares, num bar na vizinha Calle Botoneras.",
    },
    {
      slug: "puerta-del-sol",
      citySlug: "madrid",
      name: "Puerta del Sol",
      lat: 40.4169,
      lng: -3.7033,
      kind: "sight",
      needsBooking: false,
      tip: "O centro literal de Espanha, marcado pelo Quilómetro Zero no pavimento, e a praça onde as multidões comem doze uvas às doze badaladas da passagem de ano. É um interface de transportes e de orientação mais do que um sítio para ficar, por isso passe por lá, encontre a estátua do urso e do medronheiro, e mantenha a mala fechada no meio da multidão.",
    },
    {
      slug: "gran-via",
      citySlug: "madrid",
      name: "Gran Via",
      lat: 40.4200,
      lng: -3.7025,
      kind: "sight",
      needsBooking: false,
      tip: "A grande avenida de Madrid do início do século XX é melhor percorrida ao anoitecer, quando as fachadas das lojas e a cúpula do edifício Metropolis se iluminam. É uma faixa de eleição para carteiristas, por isso mantenha as malas fechadas e os telemóveis longe da beira do passeio; para a clássica vista de terraço, o terraço do Circulo de Bellas Artes ali perto cobra cerca de 5 EUR.",
    },
    {
      slug: "mercado-de-san-miguel",
      citySlug: "madrid",
      name: "Mercado de San Miguel",
      lat: 40.4153,
      lng: -3.7090,
      kind: "food",
      needsBooking: false,
      tip: "O mercado restaurado de ferro e vidro ao lado da Plaza Mayor é uma sala de tapas gourmet, mais polida e mais cara do que os bares locais, por isso encare-o como uma paragem para petiscar em vez de uma refeição completa. Vá por volta do meio-dia ou a meio da tarde para evitar o aperto das 20h, compre duas ou três tapas de bancas diferentes, e coma de pé, porque há poucos lugares sentados.",
    },
    {
      slug: "temple-of-debod",
      citySlug: "madrid",
      name: "Templo de Debod",
      lat: 40.4240,
      lng: -3.7176,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Este genuíno templo egípcio antigo, oferecido a Espanha e remontado num parque, é o clássico local gratuito de pôr do sol de Madrid, com a pedra refletida no seu espelho de água e o céu sobre a Casa de Campo por trás. Venha 30 minutos antes do pôr do sol para uma boa posição junto à grade; fica cheio, e o interior tem entrada gratuita com hora marcada e limitada (encerrado às segundas).",
    },
    {
      slug: "el-rastro",
      citySlug: "madrid",
      name: "Feira da ladra de El Rastro",
      lat: 40.4085,
      lng: -3.7075,
      kind: "experience",
      needsBooking: false,
      tip: "A enorme feira da ladra ao ar livre de Madrid funciona só nas manhãs de domingo, mais ou menos das 9h às 15h, espalhando-se pela Calle Ribera de Curtidores e pelas vielas de La Latina. Venha antes das 11h para fugir ao aperto, guarde os objetos de valor num bolso da frente porque é território de eleição para carteiristas, e termine com um vermute num bar da Cava Baja como fazem os locais.",
    },
    {
      slug: "plaza-de-cibeles",
      citySlug: "madrid",
      name: "Plaza de Cibeles",
      lat: 40.4192,
      lng: -3.6931,
      kind: "sight",
      needsBooking: false,
      tip: "O cruzamento de fonte e palácio é um marco gratuito, e os adeptos do Real Madrid juntam-se na fonte de Cibeles para celebrar títulos. Suba ao Palacio de Cibeles até ao seu miradouro no topo (cerca de 3 EUR) para uma vista ampla ao longo do Paseo del Prado; fica no caminho entre o Prado e a Gran Via, por isso encaixe-o pelo meio.",
    },
    {
      slug: "cava-baja-tapas",
      citySlug: "madrid",
      name: "Roteiro de tapas na Cava Baja (La Latina)",
      lat: 40.4113,
      lng: -3.7098,
      kind: "food",
      needsBooking: false,
      tip: "A Cava Baja é, isolada, a melhor rua de tapas de Madrid, uma sucessão de tascas antigas onde se pede um ou dois pratos e uma bebida em cada uma e se avança. Comece por volta das 21h, quando as cozinhas atingem o ritmo, fique de pé ao balcão em vez de ocupar uma mesa, e prove os clássicos: gambas al ajillo, croquetas e uma caña de cerveja.",
    },
    {
      slug: "santiago-bernabeu",
      citySlug: "madrid",
      name: "Visita ao estadio Santiago Bernabeu",
      lat: 40.4531,
      lng: -3.6883,
      kind: "experience",
      needsBooking: true,
      tip: "A visita e o museu do estádio do Real Madrid são uma visita autoguiada que inclui os lugares junto ao relvado, os balneários e a sala de troféus; reserve online uma hora marcada, porque os bilhetes à porta esgotam nos fins de semana de jogo. Está fechado a visitas nos dias de jogo e muitas vezes na véspera, por isso consulte o calendário de jogos antes de ir; o metro deixa-o em Santiago Bernabeu na linha 10.",
    },
  ],

  itineraries: [
    {
      citySlug: "madrid",
      days: 2,
      summary:
        "Dois dias cobrem os essenciais de Madrid, mas é uma correria e vai sentir a compressão, porque a cidade quer mesmo três. Em 48 horas dá para fazer o triângulo da arte no primeiro dia (o Prado, depois o Reina Sofia para a Guernica, com o Retiro pelo meio) e a cidade velha dos Habsburgo no segundo (o Palacio Real, a Plaza Mayor, Sol e San Miguel), acabando cada noite com tapas em La Latina. O que estraga uma viagem curta é o timing: aproveite as duas últimas horas gratuitas do Prado ou reserve uma hora, e marque o Palacio Real online para que uma fila não lhe coma a manhã. Fique-se pelo Centro para que ambos os dias comecem a pé e o jantar esteja sempre a dois passos. O que sacrifica a este ritmo é o Thyssen, um dia inteiro de barrio, Salamanca, o Bernabeu e qualquer excursão de um dia, por isso isto serve para um fim de semana ou uma primeira prova. Se puder acrescentar um terceiro dia, faça-o: três dias é onde Madrid deixa de parecer um sprint.",
      stayNeighborhoodSlug: "centro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "O triângulo da arte: Prado, Retiro, Reina Sofia",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Comece no Prado para a abertura das 10h com hora marcada, indo diretamente às Meninas de Velazquez e às pinturas negras de Goya antes de as galerias encherem. Duas a três horas cobrem as obras-primas de destaque sem uma marcha forçada.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              text: "Almoce do lado do Paseo del Prado ou para os lados de Anton Martin, e mantenha a refeição leve porque o jantar é tarde em Madrid. Um menu del dia num bar de bairro é a opção com melhor relação qualidade-preço.",
              durationMin: 75,
            },
            {
              poiSlug: "retiro-park",
              text: "Entre no Parque do Retiro por trás do Prado para a tarde, andando de barco a remos no lago e serpenteando de volta ao pavilhão de vidro do Palacio de Cristal. É a pausa verde entre dois grandes museus.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Faça o Reina Sofia na sua janela gratuita das noites de dia útil (19:00-21:00, encerrado às terças), indo diretamente à Sala 205 pela Guernica de Picasso antes de dar a volta até Dali e Miro. Chegue um pouco mais cedo, pois a janela gratuita atrai fila.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Vá a pé até La Latina para um roteiro de tapas na Cava Baja a partir das 21h, pedindo um prato e uma bebida em cada bar e avançando. Gambas al ajillo, croquetas e uma caña, de pé ao balcão como os locais.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Madrid dos Habsburgo: Palacio Real, Plaza Mayor, Sol, San Miguel",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Esteja no Palacio Real para a abertura das 10h com bilhete reservado, verificando na véspera que não está encerrado para um evento de Estado. Faça os salões de Estado e a Real Armaria, depois saia para a Catedral da Almudena, gratuita, e para os Jardins Sabatini ao lado.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Petisque o almoço no Mercado de San Miguel ao lado da Plaza Mayor, comprando duas ou três tapas de bancas diferentes e comendo de pé. É mais caro do que um bar local, por isso encare-o como uma prova e não como uma refeição sentada completa.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-mayor",
              text: "Passe à Plaza Mayor para apreciar a praça arcada do século XVII, e depois enfie pelas vielas antigas até à Puerta del Sol e ao marco do Quilómetro Zero no centro de Espanha. Mantenha a mala fechada no meio das multidões aqui.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Suba ao Templo de Debod 30 minutos antes do pôr do sol para o clássico miradouro gratuito de Madrid, a pedra egípcia antiga espelhada no seu tanque contra o céu sobre a Casa de Campo. Arranje um lugar junto à grade cedo, pois fica cheio.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Desça até à Gran Via à medida que a avenida se ilumina, percorrendo as suas fachadas do início do século XX na direção da cúpula do Metropolis. Jantar no centro ou de volta a La Latina, mantendo telemóveis e malas seguros nesta faixa propensa a carteiristas.",
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
        "Sim, três dias é a duração certa para Madrid, e é o que recomendamos para uma primeira visita. Três dias permitem dividir a viagem com clareza: o triângulo da arte fica com um dia inteiro (o Prado, o Reina Sofia pela Guernica, e o Thyssen para preencher as lacunas), o núcleo antigo dos Habsburgo fica com o seu próprio dia (o Palacio Real, a Plaza Mayor, Sol, San Miguel, e o Templo de Debod ao pôr do sol), e um barrio animado fica com o terceiro (La Latina, El Rastro se for domingo, e Malasana). Come-se bem em três bairros, encaixam-se tanto as noites gratuitas de museu como as verdadeiras noites de tapas tardias, e ainda se anda a um ritmo que deixa sentar numa praça. O que continua a ficar de fora é Salamanca, o Bernabeu, e uma excursão de um dia a Toledo ou Segovia, que é exatamente o que um quarto dia acrescenta. Fique em Malasana pelos seus bares independentes, café e bom preço, mantendo-se a dez minutos do centro. Aproveite as duas últimas horas gratuitas do Prado ou reserve uma hora, e marque o Palacio Real online antes de ir.",
      stayNeighborhoodSlug: "malasana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "O triângulo da arte: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Abra a viagem na hora das 10h do Prado, reservada com antecedência, e vá a direito às Meninas e às pinturas negras de Goya antes de as multidões crescerem. Reserve duas horas e meia a três horas para as obras-primas; menos e passa a correr por elas.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Almoce no Paseo del Prado, e depois faça o Thyssen-Bornemisza do outro lado da avenida, gratuito às tardes de segunda para a coleção permanente. Comece no piso de cima com os mestres antigos e desça cronologicamente até aos impressionistas e ao século XX.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entre no Retiro por trás dos museus para apanhar ar ao fim da tarde, andando de barco a remos no lago e dando uma volta até ao Palacio de Cristal. Restabelece as pernas entre os dois blocos de arte do dia.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Faça o Reina Sofia na sua janela gratuita da noite (19:00-21:00, encerrado às terças), indo primeiro à Sala 205 pela Guernica antes de Dali e Miro. Chegue cedo, pois a janela gratuita gera fila à porta.",
              durationMin: 90,
            },
            {
              text: "Jantar perto de Anton Martin ou de volta para os lados de Malasana, entrando no ritmo tardio de Madrid com tapas em vez de uma refeição sentada pesada. As cozinhas ainda só estão a aquecer às 21h por aqui.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Madrid dos Habsburgo: Palacio Real, Plaza Mayor, Sol, pôr do sol em Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Esteja no Palacio Real às 10h com bilhete reservado, tendo confirmado que não está fechado para uma cerimónia de Estado. Faça os salões de Estado e a Real Armaria, depois atravesse para a Catedral da Almudena, gratuita, e para os Jardins Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Petisque um almoço cedo no Mercado de San Miguel junto à Plaza Mayor, comprando algumas tapas de bancas diferentes e comendo de pé. Mantenha leve, pois esta é uma paragem de prova e não a refeição principal do dia.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Aprecie a praça arcada da Plaza Mayor, e depois percorra as vielas antigas até à Puerta del Sol e ao marco do Quilómetro Zero no centro geográfico de Espanha. Mantenha a mala fechada no meio das multidões de Sol.",
              durationMin: 75,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Passeie até à Plaza de Cibeles pela fonte e pelo palácio, e pague os poucos euros para subir ao miradouro do Palacio de Cibeles para uma vista ampla ao longo do Paseo del Prado. Faz a ponte entre o núcleo antigo e as avenidas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Vá a pé ao Templo de Debod para o pôr do sol, chegando 30 minutos mais cedo para um lugar junto à grade enquanto a pedra egípcia antiga apanha a última luz sobre a Casa de Campo. Este é o clássico pôr do sol gratuito de Madrid.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Volte por uma Gran Via iluminada, percorrendo as grandes fachadas na direção da cúpula do Metropolis, e depois jantar no centro. Mantenha telemóveis e malas seguros neste troço cheio de carteiristas.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Os barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Se for domingo, mergulhe em El Rastro antes das 11h enquanto ainda dá para andar, descendo a Ribera de Curtidores pelas vielas de La Latina com os objetos de valor num bolso da frente. Em qualquer outro dia, passe a manhã a vaguear pelas ruas e praças medievais de La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cava-baja-tapas",
              text: "Instale-se em La Latina para um longo almoço, fazendo um roteiro pela Cava Baja e pela Cava Alta com um vermute enquanto o mercado abranda, na tradição de domingo. Um ou dois pratos por bar, de pé ao balcão, e depois avance.",
              durationMin: 120,
            },
            {
              text: "Caminhe para norte até Malasana para a tarde, a passear pelas lojas vintage e o café de terceira vaga à volta da Plaza del Dos de Mayo. Foi aqui que começou a Movida dos anos 1980 e onde a cidade ainda se sente mais jovem.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Aperitivo e jantar em Malasana ou na vizinha Chueca, saltando entre pequenas cozinhas e bares de cocktails à medida que os bairros enchem. Reserve em qualquer sítio com nome, pois as boas mesas vão-se por volta das 21h30 aos fins de semana.",
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
        "Quatro dias é o ponto ideal para uma primeira visita a Madrid, transformando um sprint de três dias em férias a sério com espaço para respirar. Os dias um a três cobrem os essenciais: o triângulo da arte (Prado, Reina Sofia pela Guernica, Thyssen), o núcleo antigo dos Habsburgo (Palacio Real, Plaza Mayor, Sol, Templo de Debod), e um dia de barrio por La Latina, El Rastro e Malasana. O quarto dia é a válvula de escape, e tem escolhas a sério: a elegante Salamanca e as compras na Serrano combinadas com uma visita ao estadio Bernabeu, ou uma excursão de um dia inteiro a Toledo, a 33 minutos de comboio de alta velocidade, ou a Segovia pelo seu aqueduto romano e pelo Alcazar de conto de fadas, a cerca de 30 minutos de comboio. Esta duração serve viajantes que detestam a marcha forçada, casais, e quem tem os voos a emoldurar a viagem de forma incómoda. Fique em La Latina por quatro dias: aceitou um ritmo mais lento, e as suas vielas de tapas e o mercado de domingo fazem do voltar para casa cada noite a melhor parte. Reserve o Prado, o Palacio Real e o Bernabeu com antecedência.",
      stayNeighborhoodSlug: "la-latina",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "O triângulo da arte: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Comece na abertura das 10h do Prado com hora marcada, indo a direito às Meninas e às pinturas negras de Goya antes das multidões. Dê às obras-primas duas horas e meia no mínimo.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Depois do almoço no Paseo del Prado, faça o Thyssen-Bornemisza do outro lado da avenida, gratuito às tardes de segunda. Percorra de cima para baixo, dos mestres antigos até aos impressionistas e ao século XX.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entre no Retiro por trás dos museus para o fim da tarde, remando no lago e dando uma volta pelo Palacio de Cristal. O parque é a pausa verde entre as duas galerias do dia.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Faça o Reina Sofia na sua janela gratuita da noite (encerrado às terças), indo primeiro à Sala 205 pela Guernica antes do resto. Chegue um pouco mais cedo para fugir à fila da janela gratuita.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Recolha-se a La Latina para um roteiro de tapas na Cava Baja a partir das 21h, um ou dois pratos e uma bebida por bar. De pé ao balcão, este é o jantar do dia a dia em Madrid.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Madrid dos Habsburgo: Palacio Real, Plaza Mayor, Sol, pôr do sol em Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Esteja no Palacio Real às 10h com bilhete reservado, verificado na véspera contra encerramentos por eventos de Estado. Faça os salões de Estado e a Armaria, depois a Catedral da Almudena, gratuita, e os Jardins Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Petisque um almoço leve no Mercado de San Miguel junto à Plaza Mayor, algumas tapas de bancas diferentes, comidas de pé. Mantenha-o como uma prova e não como a refeição completa.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Aprecie a Plaza Mayor, e depois caminhe até à Puerta del Sol e ao marco do Quilómetro Zero, o centro literal de Espanha. Mala fechada no meio das multidões de Sol.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Vá a pé à Plaza de Cibeles pela fonte e pelo palácio, subindo ao miradouro de Cibeles pela vista do Paseo del Prado. Liga o núcleo antigo às grandes avenidas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Chegue ao Templo de Debod 30 minutos antes do pôr do sol para o clássico pôr do sol gratuito de Madrid, a pedra egípcia espelhada no seu tanque. Reclame um lugar junto à grade cedo.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Regresse por uma Gran Via iluminada na direção da cúpula do Metropolis, e depois jantar no centro. Telemóveis e malas seguros nesta faixa de carteiristas.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Os barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Num domingo, vá a El Rastro antes das 11h enquanto ainda dá para andar, pela Ribera de Curtidores e pelas vielas de La Latina com os objetos de valor num bolso da frente. Caso contrário, vagueie pelas praças medievais de La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Longo almoço em La Latina com um vermute enquanto o mercado abranda, e depois passeie pelas lojas vintage e os cafés de Malasana à volta da Plaza del Dos de Mayo. Esta é a tarde lenta, de comida e de bairro, que as viagens mais curtas não têm como poupar.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Aperitivo e jantar entre Malasana e Chueca, movendo-se entre pequenas cozinhas e bares de cocktails à medida que enchem. Reserve com antecedência em qualquer sítio com nome, as boas mesas vão-se por volta das 21h30 aos fins de semana.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Salamanca e o Bernabeu, ou uma excursão de um dia a Toledo ou Segovia",
          morning: [
            {
              text: "A opção A fica na cidade: passeie pela malha elegante de Salamanca e pela faixa de lojas de grife ao longo da Calle Serrano, com uma paragem para café nos seus cafés chiques. A opção B sai dela: apanhe o comboio de alta velocidade de 33 minutos até Toledo, ou o comboio de cerca de 30 minutos até Segovia, indo cedo para fugir às multidões das excursões de um dia.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "santiago-bernabeu",
              text: "Se ficou na cidade, faça a visita ao estadio Santiago Bernabeu, reservada online com hora marcada e verificada contra o calendário de jogos, pois as visitas estão fechadas nos dias de jogo. O metro deixa-o em Santiago Bernabeu na linha 10.",
              durationMin: 120,
            },
            {
              text: "Na opção de excursão, passe a tarde na cidade velha no alto de Toledo, de catedral, sinagogas e El Greco, ou no aqueduto romano e no Alcazar de conto de fadas de Segovia, antes do comboio de regresso ao fim da tarde. Ambas são idas e voltas fáceis que ainda deixam uma última noite em Madrid.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "De volta a La Latina para um jantar de despedida, gastando um pouco mais na última noite numa tasca da Cava Baja que reconheceu antes. Croquetas, jamon e uma última caña para fechar a viagem.",
              durationMin: 120,
            },
            {
              text: "Termine com uma última bebida numa viela tranquila de La Latina, a um curto passeio da cama, sem viagem para casa a planear. Essa facilidade é a razão inteira para se instalar aqui por quatro dias.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default madridPt;

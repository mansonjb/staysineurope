import type { CityData } from "../types";

const lisbonEs: CityData = {
  city: {
    slug: "lisbon",
    name: "Lisboa",
    country: "Portugal",
    countrySlug: "portugal",
    lat: 38.7223,
    lng: -9.1393,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "LIS",
    airportToCenter: "Línea roja del metro desde el aeropuerto, unos 25 min hasta el centro con un transbordo, 1,85 EUR",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Cuente con 14-15C de día, frentes lluviosos frecuentes procedentes del Atlántico y las calles más tranquilas del año. Las tarifas hoteleras tocan fondo: es el mes ideal para un viaje barato entre miradores y museos.",
      2: "Todavía fresco y lluvioso, pero los claros son frecuentes y las terrazas de café se llenan en cuanto sale el sol. El carnaval anima brevemente la ciudad, por lo demás la afluencia y los precios se mantienen bajos.",
      3: "Las máximas suben hacia los 18C y la lluvia se calma a lo largo del mes. La afluencia sigue siendo moderada hasta finales de marzo, cuando las vacaciones de primavera empiezan a subir los precios de los hoteles el fin de semana.",
      4: "Uno de los mejores meses: 19-21C, jacarandás a punto de florecer, colas razonables en el castillo y Belém. La Semana Santa es la excepción: reserve ese hueco pronto y espere precios de vacaciones.",
      5: "Calor fiable en torno a los 22C, poca lluvia y noches largas, ideal para la temporada de azoteas y quioscos. La afluencia crece, pero las entradas con hora reservada siguen resolviendo la mayoría de las colas.",
      6: "Las Festas de Lisboa ocupan la ciudad todo el mes, con su punto álgido en la noche de Santo Antonio, del 12 al 13 de junio, cuando Alfama se convierte en una fiesta callejera gigante en torno a las sardinas asadas. Reserve con varias semanas de antelación y espere precios de hotel próximos al pico.",
      7: "Calor, 27-28C, y mucha gente, con los cruceristas provocando picos de mediodía en torno a la Baixa y Belém. Haga las visitas antes de las 11h, luego siga a los lisboetas hacia el río o los trenes de playa que salen de Cais do Sodre.",
      8: "Pico de calor cerca de los 29C, pico de afluencia, pico de precios, y muchos restaurantes familiares cierran por vacaciones. Si agosto es su única opción, reserve aire acondicionado y el primer turno de entrada en todas partes.",
      9: "El tiempo del verano sin el agobio de agosto: 26-27C a principios de mes, mar todavía caliente, noches hechas para los miradores. Los precios bajan del pico tras la primera semana.",
      10: "Días cálidos en torno a los 22-23C, con las primeras lluvias de verdad de vuelta a finales de mes. La afluencia baja notablemente tras mediados de octubre y es el momento ideal para las gangas hoteleras de temporada media.",
      11: "Más fresco, 17-18C, con episodios de lluvia regulares, pero la luz entre chubascos es magnífica para las fotos. Se instalan los precios de temporada baja y se entra en las casas de fado sin reserva.",
      12: "Suave para ser invierno, 15C, pero húmedo, con las iluminaciones de la Rua Augusta y un gran concierto gratuito de Nochevieja en la Praca do Comercio. Tranquilo, salvo la semana entre Navidad y Año Nuevo, cuando las tarifas se disparan.",
    },
    climate: {
      1: { highC: 15, lowC: 8, rainyDays: 10 },
      2: { highC: 16, lowC: 9, rainyDays: 9 },
      3: { highC: 18, lowC: 10, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 8 },
      5: { highC: 22, lowC: 13, rainyDays: 5 },
      6: { highC: 26, lowC: 16, rainyDays: 2 },
      7: { highC: 28, lowC: 17, rainyDays: 1 },
      8: { highC: 29, lowC: 18, rainyDays: 1 },
      9: { highC: 27, lowC: 17, rainyDays: 3 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 11, rainyDays: 9 },
      12: { highC: 15, lowC: 9, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Siete colinas y un río, y que las subas o las esquives depende de dónde duermas.",
    heroIntro:
      "Lisboa se divide claramente entre la cuadrícula plana del centro, conectada por tranvía, y los barrios de cuesta empinada que la flanquean, así que el barrio que reserves decide cuánto de cada día se va en caminar y cuánto en subir cuestas. Esta guía compara las cinco zonas que merece la pena para alojarse, desde las escaleras de azulejos de Alfama hasta la calma junto al río de Belém, y señala el hotel que justifica su precio en cada una.",
    accent: { from: "#FFB45E", to: "#FF6B5B", ink: "#8A2D1F" },
    neighborhoodSlugs: [
      "alfama",
      "baixa-chiado",
      "principe-real",
      "bairro-alto",
      "belem",
    ],
    nearbyCitySlugs: ["porto", "seville"],
  },

  neighborhoods: [
    {
      slug: "alfama",
      citySlug: "lisbon",
      name: "Alfama",
      lat: 38.7118,
      lng: -9.1287,
      bestFor: ["romantic", "local", "first-time"],
      vibe: "Empinadas escaleras de piedra serpentean entre ropa tendida y fachadas de azulejos, subiendo desde la orilla del río hasta las murallas del castillo. El fado se escapa de pequeñas tascas al caer la noche, y en cuanto se van los grupos turísticos las callejuelas se sumen en un silencio que recuerda más a un pueblo de pescadores que a una capital. Alójate aquí para tener el castillo, la catedral y los mejores miradores a un paseo empinado, y acepta que cada salida a comprar algo implica subir una cuesta.",
      pros: [
        "Castillo, catedral y los mejores miradores de la ciudad, todo a pie",
        "Casas de fado y tascas familiares sustituyen la zona turística al caer la noche",
        "Las calles tienen un ambiente auténtico y fotogénico antes de que lleguen los excursionistas",
      ],
      cons: [
        "Las cuestas empedradas complican el equipaje con ruedas y dificultan la movilidad reducida",
        "Sin estación de metro en el propio barrio; tranvías, autobuses o escaleras son la única forma de subir",
        "Los callejones principales se saturan de grupos turísticos a media jornada",
      ],
    },
    {
      slug: "baixa-chiado",
      citySlug: "lisbon",
      name: "Baixa-Chiado",
      lat: 38.7104,
      lng: -9.139,
      bestFor: ["first-time", "family", "budget"],
      vibe: "Reconstruido sobre una cuadrícula estricta tras el terremoto de 1755, este es el único tramo realmente plano del centro de Lisboa, que va desde la Praca do Comercio hasta los escaparates y cafés del Chiado. Aquí confluyen tres líneas de metro, las rutas de tranvía y la terminal de ferris, así que nada en la ciudad queda a más de un transbordo. Alójate aquí si el viaje es corto o el itinerario va apretado, ya que todos los barrios de cuesta de esta lista empiezan su paseo desde esta misma puerta.",
      pros: [
        "El único terreno llano del centro de Lisboa, el más fácil para las piernas y el equipaje",
        "Aquí convergen todas las líneas de metro y rutas de tranvía, además de la terminal de ferris",
        "La mayor oferta de hoteles y restaurantes de la ciudad, para todos los presupuestos",
      ],
      cons: [
        "Los restaurantes de las calles principales cocinan para el volumen de gente más que para el sabor",
        "La Rua Augusta y las manzanas de alrededor se mantienen ruidosas y abarrotadas todo el día",
      ],
    },
    {
      slug: "principe-real",
      citySlug: "lisbon",
      name: "Principe Real",
      lat: 38.7168,
      lng: -9.1489,
      bestFor: ["romantic", "local", "nightlife"],
      vibe: "Una plaza ajardinada a la sombra de un cedro gigante ancla este barrio elegante por encima del Bairro Alto, rodeado de palacetes del siglo XIX hoy ocupados por concept stores y bares de vino natural. Un mercado ecológico se instala en la plaza los fines de semana, y la escena gastronómica de aquí supera, sin hacer ruido, a la de casi todo el centro. Alójate aquí si la buena comida y una noche tranquila importan más que estar a cinco minutos de un monumento, y cuenta con una cuesta a pie o un taxi corto la mayoría de las noches.",
      pros: [
        "Algunos de los mejores restaurantes y bares de vino de la ciudad, con una fracción de la afluencia del centro",
        "Se mantiene tranquilo de noche pese a estar a diez minutos de la zona de bares del Bairro Alto",
        "Auténtico ambiente de barrio, con una plaza ajardinada y cafés de quiosco que de verdad usan los vecinos",
      ],
      cons: [
        "Cuesta arriba desde casi cualquier dirección; cuenta con un taxi algunas noches",
        "Las habitaciones son de tipo boutique y caras, con poca oferta para presupuestos ajustados",
        "Sin estación de metro en el barrio; la más cercana, Rato, sigue quedando a pie de distancia",
      ],
    },
    {
      slug: "bairro-alto",
      citySlug: "lisbon",
      name: "Bairro Alto",
      lat: 38.713,
      lng: -9.144,
      bestFor: ["nightlife", "budget"],
      vibe: "De día esta cuadrícula de calles estrechas está casi vacía; de noche se convierte en el bar crawl al aire libre de Lisboa, con la gente bebiendo sobre los adoquines mucho después de las 2 de la madrugada. Los bares son diminutos, la cerveza es barata, y no hay ninguna pretensión sobre para qué sirve el barrio. Alójate aquí solo si piensas formar parte del ruido en vez de dormir a pesar de él, ya que las calles que se vacían a las 10 de la mañana están abarrotadas doce horas después.",
      pros: [
        "Decenas de bares a cinco minutos a trompicones, el ocio nocturno más denso de la ciudad",
        "Ubicación central entre el Chiado y Principe Real, útil en cuanto se pone el sol",
        "Sobreviven entre los bares un puñado de pensiones de verdad baratas",
      ],
      cons: [
        "El ruido de la calle los fines de semana se alarga más allá de las 2 de la madrugada, y los tapones solo lo alivian a medias",
        "Las calles tienen mal aspecto y peor olor la mayoría de las mañanas, la resaca de la noche anterior",
        "Llegar a la Baixa a pie exige una bajada empinada, o esperar el funicular de la Gloria",
      ],
    },
    {
      slug: "belem",
      citySlug: "lisbon",
      name: "Belem",
      lat: 38.697,
      lng: -9.206,
      bestFor: ["family", "local"],
      vibe: "A seis kilómetros al oeste siguiendo el Tajo, aquí es donde Portugal colocó sus monumentos de la era de los Descubrimientos: el monasterio, la torre y una hilera de museos modernos a lo largo de calles anchas, planas y arboladas. Los excursionistas la llenan hasta eso de las 18h, y luego se vacía en algo más parecido a un suburbio junto al río que a una capital. Alójate aquí para llegar al monasterio y a la torre antes que los autocares y pagar sensiblemente menos por la habitación, y acepta un trayecto en tranvía cada vez que quieras el casco antiguo después de anochecer.",
      pros: [
        "El paseo más llano y fácil de la ciudad, con un auténtico camino junto al río",
        "Monasterio, torre y museos a un corto paseo, tranquilos antes de que lleguen los autocares",
        "Noches más apacibles y tarifas de hotel más bajas que en cualquier parte del centro histórico",
      ],
      cons: [
        "El tranvía 15 hasta el centro tarda de 20 a 30 minutos y va abarrotado en horas punta",
        "Los restaurantes y el ocio nocturno escasean rápido en cuanto se van los excursionistas",
      ],
    },
  ],

  pois: [
    {
      slug: "praca-do-comercio",
      citySlug: "lisbon",
      name: "Praca do Comercio",
      lat: 38.7077,
      lng: -9.1366,
      kind: "sight",
      needsBooking: false,
      tip: "Ven antes de las 9h para fotografiar la plaza vacía con el arco de la Rua Augusta, y luego evita los cafés carísimos de la propia plaza. Las escaleras junto al río, en Cais das Colunas, en el lado sur, son el asiento gratis de primera fila para la puesta de sol.",
    },
    {
      slug: "castelo-sao-jorge",
      citySlug: "lisbon",
      name: "Castelo de Sao Jorge",
      lat: 38.7139,
      lng: -9.1335,
      kind: "sight",
      needsBooking: true,
      tip: "Compra la entrada con hora reservada por internet (unos 15 EUR) y coge el primer turno de las 9h: la cola de la taquilla alcanza los 45 minutos a media mañana en temporada. Toma el autobús 737 desde la Praca da Figueira hasta la puerta en lugar de subir andando, y reserva las piernas para las murallas.",
    },
    {
      slug: "miradouro-senhora-do-monte",
      citySlug: "lisbon",
      name: "Miradouro da Senhora do Monte",
      lat: 38.719,
      lng: -9.1325,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Es el mirador más alto y más amplio del casco antiguo, y es gratis, pero el murete se llena 45 minutos antes de la puesta de sol, así que llega pronto para hacerte un hueco. No hay café aquí arriba, compra algo de beber en una tienda de la calle principal de Graca de camino.",
    },
    {
      slug: "tram-28",
      citySlug: "lisbon",
      name: "Tram 28",
      lat: 38.7169,
      lng: -9.136,
      kind: "experience",
      needsBooking: false,
      tip: "Súbete en la terminal de Martim Moniz antes de las 8:30h para conseguir asiento de ventanilla: a las 10h se viaja de pie y es un punto caliente de carteristas. El billete a bordo cuesta 3,10 EUR, así que compra mejor un abono de 24h Carris/metro por unos 6,80 EUR y podrás bajarte en cualquier colina.",
    },
    {
      slug: "time-out-market",
      citySlug: "lisbon",
      name: "Time Out Market",
      lat: 38.707,
      lng: -9.146,
      kind: "food",
      needsBooking: false,
      tip: "Las mesas comunes son un campo de batalla entre las 12:30 y las 14:00, así que come a las 11:45 o después de las 14:30 y manda a una persona a guardar los sitios mientras los demás piden. La nave del mercado de productos frescos del Mercado da Ribeira, justo al lado, es una parada de café más barata y tranquila.",
    },
    {
      slug: "jeronimos-monastery",
      citySlug: "lisbon",
      name: "Monasterio de los Jerónimos",
      lat: 38.6979,
      lng: -9.2068,
      kind: "sight",
      needsBooking: true,
      tip: "La nave de la iglesia es de entrada libre, solo el claustro exige entrada (unos 12 EUR): reserva por internet el primer turno de las 9:30 y haz el claustro antes de que lleguen los grupos en autocar hacia las 10:30. Cierra los lunes, el error de planificación clásico de la excursión.",
    },
    {
      slug: "belem-tower",
      citySlug: "lisbon",
      name: "Torre de Belém",
      lat: 38.6916,
      lng: -9.216,
      kind: "sight",
      needsBooking: true,
      tip: "El interior se reduce a una única escalera de caracol estrecha, recorrida en ambos sentidos: la entrada se hace a cuentagotas y la cola avanza penosamente, incluso con entrada reservada. El consejo honesto: fotografíala desde el paseo marítimo y entra solo si has reservado el primerísimo turno. Cierra los lunes.",
    },
    {
      slug: "pasteis-de-belem",
      citySlug: "lisbon",
      name: "Pasteis de Belem",
      lat: 38.6975,
      lng: -9.2033,
      kind: "food",
      needsBooking: false,
      tip: "Ignora la cola de para llevar que serpentea calle abajo y entra directamente a los salones: tienen unas 400 plazas y rotan rápido. Pide en la mesa, añade la canela y el azúcar de los espolvoreadores del mostrador, y cuenta con pagar unos 1,40 EUR por pastel.",
    },
    {
      slug: "lx-factory",
      citySlug: "lisbon",
      name: "LX Factory",
      lat: 38.7034,
      lng: -9.1786,
      kind: "experience",
      needsBooking: false,
      tip: "Ven a última hora de la tarde y quédate a cenar: la mayoría de las tiendas abren hasta las 19-20h y los restaurantes toman el relevo. Los domingos, el mercadillo LX Market arranca a las 10h, y la librería Ler Devagar con su bicicleta voladora es la parada que no debes saltarte.",
    },
    {
      slug: "maat",
      citySlug: "lisbon",
      name: "MAAT",
      lat: 38.6957,
      lng: -9.1937,
      kind: "museum",
      needsBooking: false,
      tip: "Puedes caminar gratis sobre el tejado curvo del museo a cualquier hora, y la vista del río desde ahí arriba supera a varios miradores de pago. Las galerías cierran los martes, y la entrada combinada que incluye la antigua central eléctrica es la mejor relación calidad-precio si entras.",
    },
    {
      slug: "alfama-walk",
      citySlug: "lisbon",
      name: "Alfama a pie",
      lat: 38.7118,
      lng: -9.1287,
      kind: "experience",
      needsBooking: false,
      tip: "Recórrela en bajada: parte del castillo o del mirador de Portas do Sol y deja que las escaleras te arrastren hacia el río, hacerla cuesta arriba bajo el sol de la tarde es el error clásico. Los martes y sábados por la mañana, desvíate al mercadillo de la Feira da Ladra detrás del Panteón.",
    },
    {
      slug: "miradouro-santa-catarina",
      citySlug: "lisbon",
      name: "Miradouro de Santa Catarina",
      lat: 38.7089,
      lng: -9.147,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Es el mirador de la puesta de sol frente al puente, con una multitud joven, local y armada de cervezas de supermercado. El quiosco vende bebidas pero cierra antes de lo que esperas, así que llega para la hora dorada, compra primero y luego siéntate en las escaleras de la terraza.",
    },
    {
      slug: "gulbenkian-museum",
      citySlug: "lisbon",
      name: "Museo Calouste Gulbenkian",
      lat: 38.7371,
      lng: -9.1545,
      kind: "museum",
      needsBooking: true,
      tip: "La entrada es gratuita todos los domingos a partir de las 14h, e incluso entonces rara vez se siente lleno. Cierra los martes, y el jardín que lo rodea, con sus estanques y paseos de hormigón, es gratis a diario, un verdadero rincón para la pausa del almuerzo de los habituales de la cafetería del museo.",
    },
  ],

  itineraries: [
    {
      citySlug: "lisbon",
      days: 2,
      summary:
        "Dos días bastan para el corazón histórico de Lisboa, pero habrá que sacrificar Belém, y es un sacrificio de verdad. En 48 horas puedes coger el tranvía 28 antes de la multitud, subir al castillo y cruzar Alfama, disfrutar de dos de los mejores miradores, recorrer los puestos del Time Out Market y rematar las dos noches fuera, una con fado y otra en el Bairro Alto. Lo que no cabrá: el Monasterio de los Jerónimos, la Torre de Belém, el Gulbenkian y cualquier excursión, así que acepta el compromiso antes de reservar. Esta duración conviene a una escapada de fin de semana, a una escala de camino al Algarve o a las Azores, o a los viajeros que combinan Lisboa y Oporto en un mismo viaje. Instálate en Baixa-Chiado: es plano, todos los tranvías y líneas de metro convergen ahí, y las dos jornadas empiezan a menos de diez minutos de tu puerta. Si aterrizas con media jornada de más, pásala en Belém en vez de añadir más paseos por el centro.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colina del castillo, Alfama y fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Sal de la terminal de Martim Moniz y coge el tranvía 28 a través de Graca antes de las 8:30h, cuando todavía se encuentra asiento de ventanilla. Bájate cerca de la cima de la colina del castillo en lugar de hacer toda la línea.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Recorre las murallas del Castelo de Sao Jorge con una entrada de las 9h reservada por adelantado, antes de que crezca la cola de la taquilla. Las terrazas ofrecen una panorámica completa de la ciudad y el río, una orientación útil para el resto del viaje.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Baja Alfama a pie desde las puertas del castillo, paseando por Portas do Sol y las escaleras que descienden hacia la catedral. Párate a comer con calma en una tasca de camino: pescado a la brasa y media botella de vinho verde es la jugada.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Vuelve a subir a pie o en autobús hasta el Miradouro da Senhora do Monte, el mirador más alto del casco antiguo. La luz de última hora de la tarde es aquí el mejor espectáculo gratuito de Lisboa.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reserva mesa en una casa de fado al bajar de nuevo a Alfama, hacia las 20h: las pequeñas salas familiares valen más que las grandes máquinas de cena-espectáculo. Espera un menú único con actuación, y un silencio total durante los cantos.",
              durationMin: 150,
            },
            {
              text: "Termina con una ginjinha, el licor local de guindas, en un bar de bolsillo cerca del Rossio de vuelta hacia la Baixa. Un chupito en una copita de chocolate cuesta menos de 2 EUR.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado y noches del Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Recorre la Praca do Comercio y las escaleras del río en Cais das Colunas antes de las 9h, cuando la plaza aún está vacía. Sube después por la Rua Augusta peatonal y pasa bajo el arco para entrar en el entramado de la Baixa.",
              durationMin: 60,
            },
            {
              text: "Pasea cuesta arriba por el Chiado: los cafés históricos en torno a la Rua Garrett, la librería Bertrand, las ruinas del convento del Carmo si quieres una visita compacta. Es la mejor hora de escaparate de Lisboa.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Come en el Time Out Market en Cais do Sodre, llegando antes de las 11:45 o después de las 14:30 para encontrar sitio de verdad. Reparte los pedidos entre varios puestos para probar tres cocinas en una sola comida.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Sube al Miradouro de Santa Catarina e instálate frente al puente 25 de Abril. Compra algo de beber en el quiosco pronto, cierra antes del pico de la multitud.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cena en el Chiado o en el límite del Bairro Alto, reservando en cualquier sitio con nombre. Las raciones son abundantes: compartir dos platos entre tres es de lo más normal.",
              durationMin: 100,
            },
            {
              text: "Acaba en el entramado de bares del Bairro Alto, donde todo el mundo bebe de pie sobre los adoquines a partir de las 23h aproximadamente. Ve de bar en bar en vez de instalarte, la gracia es la calle misma.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 3,
      summary:
        "Sí, tres días es la duración adecuada para Lisboa, y es la que recomendamos para una primera visita. Te da dos jornadas completas en el centro histórico, con el castillo, Alfama, el tranvía 28, los miradores, la Baixa y el Chiado, más una jornada entera para Belém, que merece algo mejor que la media tarde a la carrera que la mayoría de los visitantes le concede. En tres días cenas bien dos noches sin repetir barrios, encajas una velada de fado y una noche en el Bairro Alto, y llegas de todos modos hasta el Monasterio de los Jerónimos, la Torre de Belém y los pasteis de nata degustados en su origen. Lo que aún se queda fuera: el Museo Calouste Gulbenkian, Principe Real y cualquier excursión a Sintra, que exigen todos un cuarto día. Esta duración conviene a los primerizos, a las parejas y a cualquiera que arme una ruta portuguesa con Oporto a continuación. Alójate en Baixa-Chiado por las conexiones de transporte: el tranvía a Belém sale a pie de tu puerta y las dos jornadas de centro empiezan andando.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colina del castillo, Alfama y fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Sal de la terminal de Martim Moniz y coge el tranvía 28 a través de Graca antes de las 8:30h, cuando todavía se encuentra asiento de ventanilla. Bájate cerca de la cima de la colina del castillo en lugar de hacer toda la línea.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Recorre las murallas del Castelo de Sao Jorge con una entrada de las 9h reservada por adelantado, antes de que crezca la cola. Las terrazas ofrecen una panorámica completa de la ciudad y el río, una orientación útil para el resto del viaje.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Baja Alfama a pie desde las puertas del castillo, paseando por Portas do Sol y las escaleras que descienden hacia la catedral. Párate a comer con calma en una tasca de camino.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Vuelve a subir a pie o en autobús hasta el Miradouro da Senhora do Monte, el mirador más alto del casco antiguo, para la luz de última hora de la tarde. Lleva tus bebidas, no hay quiosco en la cima.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reserva mesa en una casa de fado de Alfama hacia las 20h, prefiriendo una pequeña sala familiar a las grandes salas de cena-espectáculo. El silencio total durante los cantos es la norma de la casa, en todas partes.",
              durationMin: 150,
            },
            {
              text: "Termina con una ginjinha, el licor de guindas, en un bar de pie cerca del Rossio de camino a casa. Menos de 2 EUR, bebida en la acera como todo el mundo.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado y noches del Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Recorre la Praca do Comercio y la orilla del río en Cais das Colunas antes de las 9h, luego sube por la Rua Augusta y pasa bajo el arco para entrar en el entramado de la Baixa. La plaza es mucho más fotogénica mientras aún está vacía.",
              durationMin: 60,
            },
            {
              text: "Pasea cuesta arriba por el Chiado: los cafés en torno a la Rua Garrett, la librería Bertrand, y las ruinas del convento del Carmo si quieres una visita compacta antes de comer.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Come en el Time Out Market en Cais do Sodre, llegando antes de las 11:45 o después de las 14:30 para encontrar sitio. Reparte los pedidos entre varios puestos para probar varias cocinas a la vez.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Sube al Miradouro de Santa Catarina y toma sitio frente al puente 25 de Abril para la hora dorada. Compra en el quiosco pronto, cierra antes del pico de la multitud.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cena en el Chiado o en el límite del Bairro Alto, con reserva en cualquier sitio bien valorado. Las raciones portuguesas son abundantes, pide menos de lo que crees.",
              durationMin: 100,
            },
            {
              text: "Acaba en el Bairro Alto, donde la multitud de los bares se desborda sobre los adoquines a partir de las 23h aproximadamente. Sigue moviéndote de un bar a otro, la calle es la verdadera sala.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monumentos de Belém y orilla del río",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Coge el tranvía 15 o un taxi de 15 minutos desde el centro y llega al Monasterio de los Jerónimos para el primer turno del claustro a las 9:30, reservado por internet. Visita después la nave gratuita de la iglesia: la piedra manuelina del interior es el gran momento del día.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Camina dos minutos hasta Pasteis de Belem y ve derecho a los salones con servicio de mesa en lugar de a la cola de para llevar. Dos pasteis tibios con canela y un café es el pedido que se impone.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Recorre los jardines junto al río, pasa el Monumento a los Descubrimientos y llega a la Torre de Belém. Fotografíala desde la orilla, y haz cola para el interior solo si has reservado el primer turno.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Continúa hacia el este a lo largo del Tajo hasta el MAAT y cruza su tejado curvo, gratuito y abierto incluso cuando las galerías no lo están. Entra si la exposición del momento te atrae, sigue tu camino sin remordimientos si no.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Sigue hasta LX Factory bajo el puente, en Alcantara, llegando a última hora de la tarde cuando las tiendas todavía están abiertas. Curiosea en Ler Devagar, luego quédate a cenar en uno de los restaurantes de la antigua imprenta.",
              durationMin: 150,
            },
            {
              text: "Vuelve al centro en taxi o en tranvía 15, unos 15 minutos. Si te queda energía, una última copa en una azotea de Cais do Sodre cierra el viaje como es debido.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 4,
      summary:
        "Cuatro días es más que suficiente para Lisboa, y es el cuarto día el que convierte un esprint turístico en unas verdaderas vacaciones. Los días uno y dos cubren el corazón histórico: castillo, Alfama, tranvía 28, Baixa, Chiado, los miradores y las dos noches de referencia. El día tres es Belém, hecho como es debido, desde el primer turno de entrada al monasterio hasta la cena en LX Factory. El día cuatro es la válvula de escape: la colección privada de talla mundial del Gulbenkian, los jardines y bares de vino de Principe Real, y una última velada sin reloj, o cambia la jornada entera por una excursión a Sintra si los palacios te tientan más que los museos. Esta duración conviene a los viajeros que detestan las prisas, a los repetidores y a todos aquellos cuyos vuelos encajan mal el viaje. Para cuatro días recomendamos alojarse en Principe Real en vez de en el centro: ya has aceptado un ritmo más lento, y sus restaurantes, sus plazas con jardín y su clientela local hacen del regreso cada noche el mejor momento del día. Más allá de cuatro días, añade Sintra y una tarde de playa en Cascais en vez de más ciudad.",
      stayNeighborhoodSlug: "principe-real",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colina del castillo, Alfama y fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Sal de la terminal de Martim Moniz y coge el tranvía 28 a través de Graca antes de las 8:30h para un asiento de ventanilla. Bájate cerca de la colina del castillo en lugar de hacer toda la línea.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Recorre las murallas del Castelo de Sao Jorge con una entrada de las 9h reservada por adelantado, antes de que se formen las colas. Desde el primer día, las terrazas te dibujan el plano de toda la ciudad.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Baja Alfama a pie desde las puertas del castillo, por Portas do Sol y las escaleras que se lanzan hacia el río, con una larga comida de tasca de camino.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Vuelve a subir al Miradouro da Senhora do Monte para la luz de última hora de la tarde sobre el casco antiguo. Es gratis, y es el mirador más alto del centro de Lisboa.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reserva una pequeña casa de fado en Alfama hacia las 20h e instálate para el menú único y los cantos. El silencio durante los temas se da por sentado, los aplausos después son obligatorios.",
              durationMin: 150,
            },
            {
              text: "Remata la velada con una ginjinha cerca del Rossio antes de subir a Principe Real. Un taxi hasta el hotel cuesta unos pocos euros y te ahorra la cuesta.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado y noches del Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Recorre la Praca do Comercio y las escaleras del río en Cais das Colunas antes de las 9h, luego coge la Rua Augusta y pasa bajo el arco hacia la Baixa. La mañana temprano es el único momento en que la plaza es tuya.",
              durationMin: 60,
            },
            {
              text: "Sube paseando por el Chiado: los cafés de la Rua Garrett, la librería Bertrand y el convento del Carmo a cielo abierto si quieres una visita rápida.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Comida en el Time Out Market en Cais do Sodre, ajustada a las 11:45 o después de las 14:30 para evitar la caza de sitios. Pide en varios puestos y comparte.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Sube al Miradouro de Santa Catarina para la hora dorada frente al puente. El quiosco primero, las escaleras después: el mostrador cierra pronto.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cena en el Chiado o en la parte alta del Bairro Alto con reserva, luego únete a la multitud de la calle en el entramado de bares del Bairro Alto a partir de las 23h. Tu cama en Principe Real está a diez minutos andando cuesta arriba.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monumentos de Belém y orilla del río",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Llega al Monasterio de los Jerónimos para el primer turno del claustro a las 9:30, reservado por internet, luego visita la nave gratuita de la iglesia. El tranvía 15 o un taxi desde el centro tardan de 15 a 25 minutos.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Camina hasta Pasteis de Belem e instálate dentro en lugar de unirte a la cola de para llevar. Pasteis tibios, canela por encima, asunto resuelto.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Sigue los jardines junto al río, pasa el Monumento a los Descubrimientos y llega a la Torre de Belém. La vista exterior es la verdadera recompensa: evita la lenta cola del interior, salvo que hayas reservado el primer turno.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Bordea el río hacia el este hasta el MAAT y cruza su pasarela de tejado gratuita para la mejor panorámica del río en Belém. Entra en las galerías solo si la exposición del momento te interesa.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Termina la jornada en LX Factory, en Alcantara, curioseando en las tiendas antes del cierre y quedándote a cenar en la hilera de antiguas fábricas. La librería Ler Devagar justifica por sí sola la parada.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Gulbenkian, Principe Real, Lisboa a cámara lenta",
          morning: [
            {
              poiSlug: "gulbenkian-museum",
              text: "Pasa la mañana en el Museo Calouste Gulbenkian, una colección privada compacta que va de las piezas egipcias a las joyas de Lalique. Si es domingo, la entrada es gratuita a partir de las 14h: invierte entonces el orden de la jornada y ven después de comer.",
              durationMin: 120,
            },
            {
              text: "Antes de irte, recorre los estanques y los paseos de hormigón del jardín del Gulbenkian: son gratis y de verdad apacibles. El metro desde Sao Sebastiao te devuelve hacia Rato en diez minutos.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              text: "Dedica la tarde al propio Principe Real: la plaza bajo el cedro gigante, las concept stores de los antiguos palacetes y un café largo en el quiosco. Los sábados, un mercado ecológico llena la plaza.",
              durationMin: 120,
            },
            {
              text: "Alternativa para esta jornada entera: coge el tren del Rossio hacia Sintra, unos 40 minutos y 2,40 EUR por trayecto, para el Palacio de Pena y la Quinta da Regaleira. Si eliges Sintra, reserva las entradas de los palacios por internet y sal antes de las 8:30h para adelantarte a los autocares de turistas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Reserva una cena de despedida en Principe Real, donde los bares de vinos naturales y las cocinas portuguesas modernas son lo mejor que hace la ciudad ahora mismo. Es la comida en la que gastar el presupuesto.",
              durationMin: 120,
            },
            {
              text: "Toma una última copa en el quiosco de un mirador o en una tranquila terraza de jardín cercana. Duermes en el barrio, así que no hay ningún trayecto de vuelta del que preocuparse.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default lisbonEs;

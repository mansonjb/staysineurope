import type { CityData } from "../types";

const copenhagenFr: CityData = {
  city: {
    slug: "copenhagen",
    name: "Copenhague",
    country: "Danemark",
    countrySlug: "denmark",
    lat: 55.6761,
    lng: 12.5683,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "CPH",
    airportToCenter:
      "La ligne de métro M2 relie l'aéroport de Copenhague (CPH) directement au centre et atteint Kongens Nytorv, près de Nyhavn, en environ 15 minutes pour environ 4,50 EUR (36 DKK), à quelques minutes d'intervalle et toute la nuit. Un train régional couvre le même trajet jusqu'à la gare centrale en environ 13 minutes si votre hôtel se trouve de ce côté ; les deux battent un taxi qui coûte 40 EUR ou plus.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 8],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Le mois le plus sombre et le plus froid, avec des maximales autour de 2C, la lumière du jour disparue dès le milieu d'après-midi et les jardins de Tivoli fermés après leur bouquet final du Nouvel An dans les tout premiers jours du mois. Les tarifs touchent leur plancher annuel et les sites sont vides : misez sur les musées à l'abri, les cafés aux bougies et le hygge danois autour duquel les habitants organisent toute la saison.",
      2: "Encore froid et gris, autour de 3C, le mois complet le plus calme de l'année pour l'affluence comme pour les prix. Emportez de vraies couches et un manteau coupe-vent pour le port, ne réservez rien longtemps à l'avance et prenez ce séjour comme un voyage musées-et-cafés plutôt qu'en plein air.",
      3: "Les maximales approchent les 5C et la lumière du jour revient vite, même s'il reste frais et souvent humide. L'affluence est faible et les tarifs bas ; le vrai repère arrive en fin de mois, quand les jardins de Tivoli rouvrent pour leur saison de printemps vers le début avril et que l'ambiance remonte.",
      4: "Le printemps s'installe autour de 10C, avec les jardins de Tivoli à nouveau ouverts et les premières terrasses au soleil. Pâques amène un court congé local pendant lequel certaines boutiques ferment, mais l'affluence reste modérée et les prix sous ceux de l'été, ce qui en fait une bonne fenêtre d'aile de saison.",
      5: "L'un des meilleurs mois, avec des maximales proches de 15C, de longues soirées lumineuses et tout ouvert. L'affluence monte sans avoir atteint son pic, la vie du port reprend et la ville est à son plus optimiste ; réservez les restaurants populaires à l'avance et attendez-vous à voir les tarifs grimper vers le niveau estival.",
      6: "Chaud, autour de 19C, avec les journées les plus longues de l'année, où il ne fait presque jamais nuit. Distortion, l'énorme fête de rue, envahit différents quartiers pendant cinq jours début juin, attirant de grandes foules et des nuits bruyantes ; vérifiez les dates, car cela fait ou défait votre séjour selon ce que vous cherchez.",
      7: "La pleine saison, autour de 21C, bondée et chère, avec le festival de jazz de Copenhague qui remplit places, cours et clubs pendant dix jours début juillet. Les bains du port sont ouverts, Tivoli tourne tard et les hôtels affichent complet : réservez chambres et billets de festival bien à l'avance.",
      8: "Encore chaud, autour de 21C, et animé, la dernière portion de plein été avant la rentrée des classes. La baignade dans le port, les soirées tardives à Tivoli et les repas en plein air sont tous à leur meilleur ; les tarifs restent élevés en début de mois et se détendent à sa fin.",
      9: "Maximales autour de 17C, l'affluence qui s'amincit après la première semaine et le plus doux des mois d'aile de saison. C'est le choix discret et malin : les terrasses fonctionnent encore par temps chaud, Tivoli reste ouvert, les musées sont calmes et les prix redescendent du pic estival.",
      10: "Plus frais, autour de 12C, avec plus de pluie et de vraies couleurs d'automne dans les parcs. Les jardins de Tivoli proposent une saison d'Halloween très prisée, avec des décors de citrouilles tout au long du mois, une bonne raison de venir ; sinon l'affluence chute et les tarifs suivent.",
      11: "Gris, humide et froid, avec des maximales proches de 7C et des journées courtes, la dernière portion calme avant les fêtes. Les jardins de Tivoli rouvrent dans un décor de Noël vers la mi-mois, avec lumières, échoppes et gløgg, et les marchés de Noël de la ville débutent, illuminant des après-midi autrement sombres.",
      12: "Froid, autour de 4C, avec les journées les plus courtes de l'année, mais le mois le plus atmosphérique à l'intérieur. La saison de Noël de Tivoli, les marchés de Nyhavn et de Højbro Plads, le vin chaud et le hygge partout portent l'ambiance ; réservez votre hébergement tôt pour la semaine autour de Noël et du Nouvel An, qui se remplit.",
    },
    climate: {
      1: { highC: 2, lowC: -2, rainyDays: 11 },
      2: { highC: 3, lowC: -2, rainyDays: 9 },
      3: { highC: 5, lowC: 0, rainyDays: 9 },
      4: { highC: 10, lowC: 3, rainyDays: 8 },
      5: { highC: 15, lowC: 8, rainyDays: 8 },
      6: { highC: 19, lowC: 11, rainyDays: 8 },
      7: { highC: 21, lowC: 13, rainyDays: 9 },
      8: { highC: 21, lowC: 13, rainyDays: 10 },
      9: { highC: 17, lowC: 10, rainyDays: 9 },
      10: { highC: 12, lowC: 6, rainyDays: 11 },
      11: { highC: 7, lowC: 3, rainyDays: 12 },
      12: { highC: 4, lowC: 0, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 90, mid: 180, high: 350 },
    tagline: "Cinq quartiers aux ambiances radicalement différentes, à un coup de pédale les uns des autres : bien choisir le sien change tout le séjour.",
    heroIntro:
      "Copenhague se découpe en quartiers minuscules qui ne se ressemblent presque pas, si bien que l'endroit où vous dormez décide si le séjour tourne autour des places royales, du calme des canaux ou des cuisines qui ferment tard. La vieille ville met tous les grands sites à portée de pied, mais le fait payer cher ; Vesterbro et Nørrebro troquent les vues carte postale contre la cuisine que mangent vraiment les habitants, et Christianshavn flotte, plus calme, quelque part entre les deux. Ce guide passe en revue les cinq pour que le lit que vous réservez corresponde à la ville que vous voulez vraiment.",
    accent: { from: "#3B5BA5", to: "#E86A6A", ink: "#1E2E52" },
    neighborhoodSlugs: [
      "indre-by",
      "nyhavn",
      "vesterbro",
      "norrebro",
      "christianshavn",
    ],
    nearbyCitySlugs: ["berlin"],
  },

  neighborhoods: [
    {
      slug: "indre-by",
      citySlug: "copenhagen",
      name: "Indre By (vieille ville)",
      lat: 55.6794,
      lng: 12.5776,
      bestFor: ["first-time", "romantic"],
      vibe: "Ce cœur médiéval se love entre Strøget, les palais et les canaux, avec presque tous les grands sites à moins de dix minutes à pied. Dense et élégant le jour, plus calme une fois les boutiques fermées, il met la Tour ronde, Rosenborg et Nyhavn à portée de pied. Réservez ici si le séjour est court et que vous préférez payer pour la commodité plutôt que pour une chambre plus grande.",
      pros: [
        "La Tour ronde, Rosenborg, Strøget et Nyhavn, tout à pied",
        "La meilleure marchabilité de la ville, sans avoir besoin de tram, et d'excellentes liaisons de métro",
        "Une visite de deux jours se fait entièrement à pied",
      ],
      cons: [
        "Les tarifs de chambre parmi les plus élevés de la ville",
        "Les rues principales pratiquent une majoration touristique sur la nourriture et les boissons",
        "Moins de restaurants de quartier qu'à Nørrebro ou Vesterbro",
      ],
    },
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Nyhavn",
      lat: 55.6797,
      lng: 12.5913,
      bestFor: ["first-time", "romantic"],
      vibe: "C'est la vue que chaque visiteur imagine avant même d'atterrir : un court canal du XVIIe siècle bordé de pignons peints, de bateaux en bois amarrés et de terrasses de bars qui se serrent en rangs l'été. Dormir aussi près met le port et le quartier royal à votre porte, même si le bord de l'eau lui-même devient bruyant et cher dès que le soleil sort. Réservez ici si la vue sur le canal compte plus qu'une nuit tranquille, et que manger une rue plus loin ne vous dérange pas.",
      pros: [
        "Un hébergement en plein sur le canal le plus photographié de la ville",
        "Le quartier royal, Amalienborg et les embarcadères des bateaux à quelques pas",
        "Bien desservi par le métro et les bus fluviaux",
      ],
      cons: [
        "Les restaurants au bord de l'eau font payer cher la vue",
        "Les soirs d'été apportent bruit et foule juste devant la porte",
        "Les chambres bon marché sont rares aussi près du canal",
      ],
    },
    {
      slug: "vesterbro",
      citySlug: "copenhagen",
      name: "Vesterbro",
      lat: 55.6683,
      lng: 12.5449,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Ancien quartier chaud et des abattoirs, ce secteur à l'ouest de la gare centrale est devenu la poche la plus pointue de la ville pour manger et sortir. Les anciennes halles de Kødbyen abritent désormais des bars à vin nature et des boulangeries où les jeunes habitants, pas les groupes de touristes, passent vraiment leurs soirées. Réservez ici pour de vrais prix copenhaguois et des soirées plus animées, avec Tivoli et le centre encore à une courte marche.",
      pros: [
        "La meilleure scène gastronomique et nocturne pour le prix",
        "Les bars de Kødbyen et la gare centrale tout proches",
        "Tivoli et le centre-ville à une marche facile",
      ],
      cons: [
        "Quelques rues restent un peu rugueuses tard le soir",
        "Aucun canal ni site emblématique dans le quartier lui-même",
        "Les blocs de vie nocturne restent bruyants une fois la nuit tombée",
      ],
    },
    {
      slug: "norrebro",
      citySlug: "copenhagen",
      name: "Nørrebro",
      lat: 55.6949,
      lng: 12.5533,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Au nord des lacs, c'est le quartier le plus jeune et le plus mélangé de la ville, ancré autour du parc composite de Superkilen et des cafés qui bordent Jægersborggade. La scène gastronomique de quartier tourne ici autour des boulangeries et des grillades du Moyen-Orient plutôt que des menus touristiques, à des prix que le centre a laissés derrière lui. Réservez ici si vous préférez manger comme un habitant et que quinze minutes de marche ou un court trajet de bus jusqu'à la vieille ville ne vous dérangent pas.",
      pros: [
        "Les chambres les moins chères parmi les quartiers relativement centraux",
        "Une solide scène gastronomique indépendante, avec peu de majoration touristique",
        "Superkilen, le cimetière d'Assistens et Jægersborggade tout proches",
      ],
      cons: [
        "Le plus éloigné des cinq quartiers des sites du port",
        "Assez étendu pour dépendre du vélo ou du bus",
        "Une couverture de métro inégale, même si les bus passent souvent",
      ],
    },
    {
      slug: "christianshavn",
      citySlug: "copenhagen",
      name: "Christianshavn",
      lat: 55.6725,
      lng: 12.5935,
      bestFor: ["local", "romantic", "family"],
      vibe: "Tracée par Christian IV, cette île sillonnée de canaux mêle péniches et quais pavés, avec la ville libre de Christiania juste à sa lisière. Elle troque l'agitation de la vieille ville contre quelque chose de plus résidentiel, tout en restant à une seule station de métro ou une marche le long du port du centre. Réservez ici si vous voulez des vues sur l'eau et des nuits calmes sans renoncer à une traversée facile vers tout le reste.",
      pros: [
        "Des canaux et des péniches à l'écart des foules",
        "Une station de métro ou une marche du centre, avec Christiania juste à côté",
        "De vrais cafés locaux et le front de port à pied",
      ],
      cons: [
        "Moins d'hôtels, donc moins de choix et de disponibilités",
        "Une vie nocturne plus calme qu'à Vesterbro ou Nørrebro",
        "La plupart des sites centraux impliquent de traverser le port",
      ],
    },
  ],

  pois: [
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Le port de Nyhavn",
      lat: 55.6797,
      lng: 12.5911,
      kind: "sight",
      needsBooking: false,
      tip: "C'est la photo pour laquelle tout le monde vient, prise au mieux depuis le petit pont au bout du port à la lumière du matin, avant que les terrasses ne se remplissent. Asseyez-vous ici pour un verre si vous voulez la vue, mais mangez une rue en retrait, sur Store Strandstræde ou dans la vieille ville, où la même assiette coûte bien moins que le supplément du quai.",
    },
    {
      slug: "tivoli-gardens",
      citySlug: "copenhagen",
      name: "Les jardins de Tivoli",
      lat: 55.6736,
      lng: 12.5681,
      kind: "experience",
      needsBooking: true,
      tip: "Consultez le calendrier avant de tout organiser autour, car Tivoli est saisonnier : ouvert environ d'avril à fin septembre, puis pour Halloween en octobre et de nouveau de la mi-novembre au Nouvel An pour Noël, et fermé entre les deux. Réservez l'entrée en ligne pour une petite économie, allez-y dans les dernières heures avant la fermeture, quand les jardins s'illuminent, et n'achetez un bracelet manèges que si vous comptez réellement en faire.",
    },
    {
      slug: "little-mermaid",
      citySlug: "copenhagen",
      name: "La Petite Sirène",
      lat: 55.6929,
      lng: 12.5993,
      kind: "sight",
      needsBooking: false,
      tip: "La statue est petite et toujours entourée de groupes de touristes : prenez-la comme un arrêt de cinq minutes glissé dans une balade au bord du port plutôt qu'une destination en soi. Venez tôt le matin pour une photo dégagée, et combinez-la avec la forteresse en étoile toute proche de Kastellet et la descente jusqu'à Amalienborg, qui est la vraie récompense d'une montée jusqu'ici.",
    },
    {
      slug: "rosenborg-castle",
      citySlug: "copenhagen",
      name: "Le château de Rosenborg",
      lat: 55.6857,
      lng: 12.5773,
      kind: "sight",
      needsBooking: true,
      tip: "Réservez un créneau horaire en ligne l'été, car l'intérieur du château est petit et la file pour les joyaux de la couronne au sous-sol s'allonge dès la mi-journée. Allez-y dès l'ouverture, descendez d'abord à la salle du trésor tant qu'elle est calme, puis ressortez dans les jardins gratuits de Kongens Have, le plus ancien parc royal de la ville et un bel endroit pour un pique-nique.",
    },
    {
      slug: "christiansborg-palace",
      citySlug: "copenhagen",
      name: "Le palais et la tour de Christiansborg",
      lat: 55.6759,
      lng: 12.5794,
      kind: "sight",
      needsBooking: false,
      tip: "La tour du palais est la plus haute de la ville et, contrairement à presque tout ici, entièrement gratuite à gravir par ascenseur, avec la meilleure vue en toiture sur la vieille ville. Montez d'abord, puis décidez si vous payez pour les salles de réception royales et les ruines sous le bâtiment ; la tour à elle seule justifie l'arrêt, même si vous sautez le reste.",
    },
    {
      slug: "round-tower",
      citySlug: "copenhagen",
      name: "La Tour ronde (Rundetaarn)",
      lat: 55.6813,
      lng: 12.5757,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Le point de vue central le moins cher de Copenhague, atteint non par des escaliers mais par une large rampe pavée en spirale qu'un cheval pourrait gravir, se terminant sur une plateforme en toiture ouverte au-dessus de la vieille ville. Achetez le billet peu coûteux à la porte, allez-y en fin d'après-midi pour la lumière chaude, et cherchez la petite salle de bibliothèque et l'observatoire à mi-parcours, tous deux inclus.",
    },
    {
      slug: "christiania",
      citySlug: "copenhagen",
      name: "La ville libre de Christiania",
      lat: 55.6761,
      lng: 12.5989,
      kind: "experience",
      needsBooking: false,
      tip: "L'enclave hippie autogérée mérite une flânerie pour ses fresques, ses ateliers, ses sentiers au bord du lac et ses cafés alternatifs, mais respectez la seule règle stricte : aucune photo sur Pusher Street, où les panneaux sont clairs. Rangez votre téléphone là-bas, explorez les ruelles arrière plus vertes et les abords du Green Light District de jour, et prenez-la comme une communauté vivante plutôt qu'une attraction touristique.",
    },
    {
      slug: "nationalmuseet",
      citySlug: "copenhagen",
      name: "Nationalmuseet (Musée national)",
      lat: 55.674,
      lng: 12.5751,
      kind: "museum",
      needsBooking: false,
      tip: "Le principal musée d'histoire du Danemark est gratuit et le meilleur plan de jour de pluie de la ville, imbattable sur les trouvailles de l'âge viking comme le Chariot solaire et un corps de tourbière préservé. Comptez quatre-vingt-dix minutes, filez d'abord vers les salles de la préhistoire tant que vous êtes frais, et utilisez la section enfants si vous en avez avec vous.",
    },
    {
      slug: "torvehallerne",
      citySlug: "copenhagen",
      name: "Le marché couvert de Torvehallerne",
      lat: 55.6835,
      lng: 12.5691,
      kind: "food",
      needsBooking: false,
      tip: "Deux halles de marché en verre d'une soixantaine d'étals près de Nørreport, idéales pour un déjeuner de smørrebrød (tartine ouverte), des pâtisseries fraîches et un café sans le surcoût touristique de Nyhavn. Venez en semaine vers 11h avant la ruée du déjeuner, goûtez le smørrebrød classique au hareng mariné ou au rôti de bœuf à un comptoir, et notez qu'il ferme plus tôt le dimanche.",
    },
    {
      slug: "amalienborg",
      citySlug: "copenhagen",
      name: "Le palais d'Amalienborg",
      lat: 55.6841,
      lng: 12.5934,
      kind: "sight",
      needsBooking: false,
      tip: "La demeure de la famille royale, ce sont quatre palais autour d'une place octogonale, et l'attrait gratuit est la relève de la garde à midi chaque jour, la plus imposante quand la reine est en résidence et que son drapeau flotte. Placez-vous près du corps de garde quelques minutes avant midi, puis alignez la perspective jusqu'à l'église de marbre d'un côté et l'Opéra de l'autre côté du port.",
    },
    {
      slug: "stroget",
      citySlug: "copenhagen",
      name: "Strøget",
      lat: 55.6786,
      lng: 12.5748,
      kind: "sight",
      needsBooking: false,
      tip: "L'une des plus longues rues piétonnes d'Europe, courant sur environ un kilomètre de la place de l'Hôtel de Ville à Kongens Nytorv, utile surtout comme colonne vertébrale reliant la moitié des sites de la vieille ville. Prenez-la comme un itinéraire plutôt qu'une séance de shopping, glissez-vous dans les rues et places plus calmes comme Gråbrødretorv pour de meilleurs cafés, et parcourez-la tôt pour devancer la foule.",
    },
    {
      slug: "reffen",
      citySlug: "copenhagen",
      name: "La street food de Reffen",
      lat: 55.6949,
      lng: 12.6017,
      kind: "food",
      needsBooking: false,
      tip: "Un vaste marché de street food en plein air de cuisines en conteneurs maritimes sur le front d'eau de Refshaleøen, mieux atteint par le bus fluvial 991/992, qui est une mini-croisière en soi. Il fonctionne de façon saisonnière du printemps à l'automne et ferme l'hiver : vérifiez qu'il est ouvert, allez-y au coucher du soleil au-dessus de l'eau, et payez par carte, la plupart des étals étant sans espèces.",
    },
    {
      slug: "canal-tour",
      citySlug: "copenhagen",
      name: "La croisière sur les canaux",
      lat: 55.6797,
      lng: 12.5905,
      kind: "experience",
      needsBooking: false,
      tip: "Un bateau d'une heure boucle le port et les canaux devant l'Opéra, la Petite Sirène, la bibliothèque du Diamant noir et Christianshavn, et c'est la façon la plus rapide de saisir comment la ville s'inscrit sur l'eau. Embarquez aux embarcadères de Nyhavn ou de Ved Stranden, préférez un bateau ouvert à un bateau à toit de verre, et allez-y en fin d'après-midi pour la meilleure lumière sur les façades.",
    },
    {
      slug: "superkilen",
      citySlug: "copenhagen",
      name: "Le parc Superkilen",
      lat: 55.6994,
      lng: 12.5423,
      kind: "park",
      needsBooking: false,
      tip: "Un parc public saisissant à Nørrebro, composé d'objets rassemblés dans des dizaines de pays, d'une fontaine marocaine à des cerisiers japonais, agencés en trois zones à code couleur. Il est gratuit et ouvert à toute heure ; la Place noire ondulée en noir et blanc est la photo, et il se marie naturellement avec un arrêt boulangerie et une flânerie dans la proche Jægersborggade.",
    },
  ],

  itineraries: [
    {
      citySlug: "copenhagen",
      days: 2,
      summary:
        "Deux jours suffisent pour les sites phares de Copenhague si vous restez central et vous déplacez à pied ou à vélo, mais vous effleurerez les quartiers qui donnent son caractère à la ville. La vieille ville est compacte : Nyhavn, le quartier royal, la Tour ronde, Rosenborg et Tivoli sont à moins de 25 minutes de marche les uns des autres, si bien qu'un programme serré les couvre sans grand transport. Installez-vous à Indre By pour que les deux matinées démarrent à pied. La structure qui marche est un thème par jour : le cœur royal et le port le premier jour, les palais, la Tour ronde et Tivoli le deuxième, avec une croisière sur les canaux pour relier le front d'eau. Réservez peu à l'avance, hormis un créneau à Rosenborg l'été et une entrée à Tivoli s'il tombe en saison d'ouverture, puisque les jardins sont fermés par tranches de l'année. Ce que vous cédez, c'est Christiania, la scène gastronomique de Vesterbro et tout après-midi tranquille au bord de l'eau, ce qu'un troisième jour rachète justement.",
      stayNeighborhoodSlug: "indre-by",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Le port et le quartier royal",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Commencez à Nyhavn avant que les terrasses ne se remplissent, en photographiant les maisons peintes depuis le pont au bout du port à la lumière du matin. Parcourez le quai une fois, puis avancez plutôt que de payer le supplément vue pour le petit-déjeuner ici.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Montez jusqu'à Amalienborg pour les palais royaux autour de la place octogonale, en calant votre passage sur la relève de la garde de midi et en alignant la perspective vers l'église de marbre et l'Opéra.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Continuez le long du sentier du port à travers la forteresse en étoile de Kastellet jusqu'à la Petite Sirène, un rapide arrêt photo plutôt qu'une destination, puis revenez vers le centre.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Embarquez sur un bateau ouvert à l'embarcadère de Nyhavn pour la boucle d'une heure dans le port devant l'Opéra, le Diamant noir et Christianshavn, la façon la plus rapide de lire comment la ville s'inscrit sur l'eau.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Dîner dans la vieille ville, une rue en retrait de Nyhavn, autour de Gråbrødretorv ou dans les ruelles latérales de Strøget, où les prix comme la qualité s'améliorent par rapport au quai.",
              durationMin: 105,
            },
            {
              text: "Terminez par une balade retour au bord de l'eau, les canaux à leur plus calme une fois les bateaux du jour arrêtés.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Les palais, la Tour ronde et Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Ouvrez la journée au château de Rosenborg sur un créneau matinal, en descendant droit vers les joyaux de la couronne dans la salle du trésor avant que la file ne se forme, puis ressortez dans les jardins gratuits de Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Marchez jusqu'aux halles de Torvehallerne près de Nørreport pour un déjeuner de smørrebrød et une pâtisserie, en picorant aux étals plutôt qu'en vous attablant pour un vrai repas.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Gravissez la Tour ronde par sa rampe pavée en spirale pour la vue en toiture bon marché et centrale sur la vieille ville, en vous arrêtant à la salle de bibliothèque et à l'observatoire en montant.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Descendez jusqu'à Christiansborg et prenez l'ascenseur gratuit de sa tour, la plus haute de la ville, pour le meilleur panorama en toiture de la journée, puis observez la place du palais en contrebas.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "S'il tombe en saison d'ouverture, passez la soirée aux jardins de Tivoli, en arrivant dans les dernières heures avant la fermeture, quand tout le parc s'illumine. Vérifiez d'abord le calendrier, puisqu'il ferme par tranches de l'année.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 3,
      summary:
        "Trois jours, c'est la bonne durée pour Copenhague : assez pour le cœur royal et le port à un rythme tranquille, plus une journée qui appartient à Christiania, à la scène gastronomique et à l'eau plutôt qu'à la liste à cocher. Deux jours obligent à enchaîner les palais et la vieille ville au pas de course ; le troisième ajoute la ville libre de Christiania, les canaux de Christianshavn et une vraie soirée street food, avec le temps de se baigner dans le port par temps chaud. Logez à Vesterbro, à quelques minutes de la gare centrale et de Tivoli, moins cher que la vieille ville et cœur de la meilleure scène gastronomique et nocturne de la ville à prix juste. La forme du programme : le quartier royal et le port le premier jour, les palais, la Tour ronde et Tivoli le deuxième, Christiania et Christianshavn le troisième. Réservez peu à l'avance, hormis un créneau à Rosenborg l'été et une entrée à Tivoli quand les jardins sont ouverts. Tout le reste récompense la location d'un vélo ou le métro, et un départ matinal.",
      stayNeighborhoodSlug: "vesterbro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Le port et le quartier royal",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Roulez depuis Vesterbro et commencez à Nyhavn tôt, avant que les terrasses ne se remplissent, pour la photo des maisons peintes depuis le pont au bout du port.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Marchez jusqu'à Amalienborg pour les quatre palais royaux et la relève de la garde de midi, en alignant la perspective jusqu'à l'église de marbre et de l'autre côté du port vers l'Opéra.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Suivez le sentier du port à travers la forteresse de Kastellet jusqu'à la Petite Sirène pour une photo rapide, puis revenez vers le centre.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Prenez un bateau ouvert depuis l'embarcadère de Nyhavn pour la boucle d'une heure dans le port et voir l'Opéra, le Diamant noir et Christianshavn depuis l'eau dans la lumière de l'après-midi.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Rentrez à Vesterbro pour dîner dans les blocs des abattoirs de Kødbyen, le meilleur quartier gastronomique à prix juste de la ville, puis un bar à vin nature ensuite.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Les palais, la Tour ronde et Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Commencez à Rosenborg sur un créneau matinal, droit vers les joyaux de la couronne avant que la file de la salle du trésor ne se forme, puis ressortez dans les jardins gratuits de Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Déjeunez aux halles de Torvehallerne près de Nørreport, en picorant smørrebrød et pâtisseries aux étals.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Gravissez la rampe en spirale de la Tour ronde pour la vue en toiture bon marché sur la vieille ville, en vous arrêtant à la salle de bibliothèque en montant.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Prenez l'ascenseur gratuit de la tour de Christiansborg, la plus haute de la ville, pour le plus large panorama en toiture, puis flânez sur la place du palais et jusqu'au Diamant noir de la Bibliothèque nationale au bord de l'eau en contrebas.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Passez la soirée aux jardins de Tivoli s'ils sont ouverts, en arrivant dans les dernières heures avant la fermeture, quand le parc s'illumine. Vérifiez d'abord le calendrier saisonnier, puisqu'il ferme par parties de l'année.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn et la street food",
          morning: [
            {
              poiSlug: "christiania",
              text: "Traversez le port jusqu'à la ville libre de Christiania et flânez parmi ses fresques, ses ateliers et ses sentiers au bord du lac, en gardant votre téléphone rangé sur Pusher Street, où les photos sont interdites. Prenez-la comme une communauté vivante plutôt qu'un site.",
              durationMin: 90,
            },
            {
              text: "Entrez dans Christianshavn même le long de ses canaux et de ses péniches, et gravissez l'escalier extérieur en spirale de Vor Frelsers Kirke pour la vue si vous avez le cœur bien accroché.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Repassez de l'autre côté jusqu'au Musée national, gratuit, et filez droit vers les salles de l'âge viking avec le Chariot solaire et le corps de tourbière, la plus forte partie de la collection.",
              durationMin: 90,
            },
            {
              text: "Par temps chaud, troquez le musée contre le bain de port d'Islands Brygge de l'autre côté de l'eau, un lieu de baignade gratuit en plein air au milieu de la ville.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Prenez le bus fluvial 991, lui-même une mini-croisière, jusqu'au marché de street food de Reffen sur Refshaleøen pour le coucher du soleil au-dessus de l'eau et un dîner des cuisines en conteneurs. Vérifiez qu'il est ouvert, puisqu'il fonctionne de façon saisonnière, et payez par carte.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 4,
      summary:
        "Quatre jours, c'est plus qu'assez pour les sites de Copenhague, et c'est justement l'intérêt : le quatrième jour transforme une course aux palais en vrai voyage. Les jours un à trois couvrent le cœur royal, le port, Christiania et la scène gastronomique à un rythme détendu ; le quatrième est à vous, soit pour une journée locale tranquille à travers Nørrebro et Vesterbro, soit pour une excursion en train jusqu'au musée d'art moderne Louisiana sur la côte, ou de l'autre côté du pont jusqu'à Malmö en Suède, tous deux à moins de 40 minutes. Avec autant de temps, sautez la vieille ville et logez à Nørrebro, le meilleur quartier gastronomique de la ville, moins cher que le centre et plein de boulangeries, de bars et du parc Superkilen. La logique d'un thème par jour tient encore : gardez ensemble le quartier royal et le port, gardez ensemble Christiania et Christianshavn, et ne zigzaguez pas. Réservez peu à l'avance, hormis un créneau à Rosenborg l'été et une entrée à Tivoli quand les jardins sont ouverts. Si vous hésitiez entre trois et quatre jours, le quatrième est celui dont vous vous souviendrez.",
      stayNeighborhoodSlug: "norrebro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Le port et le quartier royal",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Descendez à vélo depuis Nørrebro et commencez à Nyhavn tôt pour la photo des maisons peintes depuis le pont au bout du port, avant que les terrasses ne se remplissent.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Marchez jusqu'à Amalienborg pour les palais royaux et la relève de la garde de midi, avec la perspective jusqu'à l'église de marbre et l'Opéra de l'autre côté de l'eau.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Prenez le sentier du port à travers la forteresse de Kastellet jusqu'à la Petite Sirène pour une photo rapide, puis revenez vers le centre.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Embarquez sur un bateau ouvert à l'embarcadère de Nyhavn pour la boucle d'une heure dans le port devant l'Opéra, le Diamant noir et Christianshavn.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Dîner de retour à Nørrebro le long de Jægersborggade ou de Sankt Hans Torv, où les restaurants et boulangeries de quartier sont moins chers et plus inventifs que le centre.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Les palais, la Tour ronde et Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Ouvrez à Rosenborg sur un créneau matinal, d'abord vers les joyaux de la couronne, puis ressortez dans les jardins gratuits de Kongens Have à côté de votre propre quartier.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Déjeunez aux halles de Torvehallerne près de Nørreport, en picorant smørrebrød et pâtisseries aux étals.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Gravissez la rampe en spirale de la Tour ronde pour la vue en toiture bon marché et centrale, en vous arrêtant à la salle de bibliothèque.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Prenez l'ascenseur gratuit de la tour de Christiansborg pour le plus haut panorama en toiture de la ville, puis parcourez la place du palais et la colonne vertébrale de Strøget de retour vers Kongens Nytorv.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Passez la soirée aux jardins de Tivoli s'ils sont ouverts, en arrivant tard, quand le parc s'illumine. Vérifiez d'abord le calendrier saisonnier, puisqu'il ferme par parties de l'année.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn et la street food",
          morning: [
            {
              poiSlug: "christiania",
              text: "Traversez jusqu'à la ville libre de Christiania et flânez parmi ses fresques, ses ateliers et ses sentiers au bord du lac, en gardant votre téléphone rangé sur Pusher Street, où les photos sont interdites.",
              durationMin: 90,
            },
            {
              text: "Parcourez les canaux et les péniches de Christianshavn, et gravissez l'escalier extérieur en spirale de Vor Frelsers Kirke pour la vue si vous l'osez.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Repassez de l'autre côté jusqu'au Musée national, gratuit, et filez vers les salles de l'âge viking avec le Chariot solaire et le corps de tourbière, la plus forte partie de la collection.",
              durationMin: 90,
            },
            {
              text: "Par un après-midi chaud, troquez le musée contre une baignade au bain de port d'Islands Brygge, un bassin gratuit en plein air taillé dans le port au milieu de la ville.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Prenez le bus fluvial 991 jusqu'au marché de street food de Reffen sur Refshaleøen pour un dîner au coucher du soleil des cuisines en conteneurs. Vérifiez qu'il est ouvert, puisqu'il fonctionne de façon saisonnière, et payez par carte.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Journée locale à Nørrebro ou excursion à Louisiana et Malmö",
          morning: [
            {
              poiSlug: "superkilen",
              text: "Option A : commencez au pas de votre porte, au parc Superkilen, puis descendez Jægersborggade pour les boulangeries et le café, jusque dans le verdoyant cimetière d'Assistens où repose Hans Christian Andersen. Option B : prenez le train côtier environ 35 minutes au nord jusqu'à Humlebæk pour le musée d'art moderne Louisiana, dont le parc de sculptures descend jusqu'à la mer, ou traversez le pont de l'Øresund en train en environ 35 minutes jusqu'à Malmö en Suède.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "L'option A se poursuit à Nørrebro et Vesterbro avec un déjeuner dans un restaurant de quartier et une flânerie dans les blocs de Kødbyen et le long des lacs entre les deux quartiers. Option B : consacrez l'après-midi aux galeries et au littoral de Louisiana, ou explorez la vieille ville de Malmö et la Turning Torso avant le court trajet de retour en train.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Dans les deux cas, terminez de retour à Nørrebro dans les bars et sur les terrasses autour de Sankt Hans Torv et de Jægersborggade, la vraie scène du soir du quartier.",
              durationMin: 120,
            },
            {
              text: "Dernier dîner dans un restaurant de Nørrebro ; le quartier fait une cuisine créative à prix juste, une belle façon de clore après les menus à vue sur le port du centre.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default copenhagenFr;

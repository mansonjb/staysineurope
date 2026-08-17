import type { CityData } from "../types";

const pragueFr: CityData = {
  city: {
    slug: "prague",
    name: "Prague",
    country: "République tchèque",
    countrySlug: "czech-republic",
    lat: 50.0755,
    lng: 14.4378,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "PRG",
    airportToCenter:
      "Bus 119 jusqu'à Nadrazi Veleslavin, puis métro ligne A vers le centre, environ 45 min au total pour à peu près 2 EUR. Le bus express AE va directement à la gare centrale si vous préférez un seul véhicule.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Froid, avec des maximales autour de 2C et un ciel souvent gris, mais le marché de Noël de la place de la Vieille Ville dure jusqu'au 6 janvier. Ensuite, les tarifs hôteliers tombent à leur plus bas niveau de l'année et les grands sites se visitent presque sans file.",
      2: "Il gèle encore la nuit et la ville reste calme : c'est le mois complet le moins cher pour visiter. Les intérieurs de pubs et les musées font le gros du travail ; prévoyez des minimales sous zéro.",
      3: "Les journées grimpent vers 9C et les marchés de Pâques ouvrent sur la place de la Vieille Ville dans la seconde moitié du mois. La foule reste modérée et les prix se situent sous le pic printanier.",
      4: "Le vrai printemps : autour de 14C, les arbres en fleurs dans les parcs de Petrin et Letna, et les premières ouvertures des bateaux sur la rivière et des biergartens. Les week-ends se chargent autour de Pâques, alors réservez le circuit du château à l'avance.",
      5: "Un des meilleurs mois, avec des maximales proches de 19C et le festival de musique du Printemps de Prague de la mi-mai à début juin. Réservez votre hébergement tôt ; les week-ends de mai affichent complet et les prix atteignent les sommets de moyenne saison.",
      6: "Doux, autour de 22C, avec de longues journées et les biergartens de Letna et Riegrovy Sady en pleine activité. La foule monte au fil du mois mais reste en dessous de la cohue de juillet.",
      7: "Haute saison : des journées à 25C, un Pont Charles bondé dès 9h et les tarifs de chambre les plus élevés de l'été. Si vous devez venir maintenant, faites les grands sites avant 8h et gardez les après-midis pour les parcs et la rivière.",
      8: "Même chaleur et même foule qu'en juillet, avec des orages occasionnels. Les quais de Naplavka et les zones de baignade des îles absorbent bien la chaleur, mais attendez-vous à des files au château toute la journée.",
      9: "Des maximales autour de 20C, une foule qui s'éclaircit après la première semaine, et le festival Dvorak Prague pour les amateurs de classique. Les prix se détendent ; c'est l'alternative maligne à l'été.",
      10: "Des journées vives à 13C et de vraies couleurs d'automne à Petrin, Letna et Vysehrad. Le nombre de touristes chute nettement après la mi-mois et les tarifs hôteliers suivent.",
      11: "Gris et froid avec des maximales autour de 7C, la période la plus calme de l'année jusqu'à l'ouverture des marchés de Noël sur la place de la Vieille Ville fin novembre. La fin novembre est le bon créneau : l'ambiance des marchés sans la densité de décembre.",
      12: "Les marchés de Noël de la place de la Vieille Ville et de la place Venceslas tournent de fin novembre au 6 janvier et attirent une foule dense, surtout le week-end. Attendez-vous à des minimales sous zéro, du vin chaud partout et des prix d'hôtel de décembre bien au-dessus de la norme hivernale.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 11 },
      2: { highC: 4, lowC: -2, rainyDays: 9 },
      3: { highC: 9, lowC: 1, rainyDays: 10 },
      4: { highC: 14, lowC: 4, rainyDays: 9 },
      5: { highC: 19, lowC: 8, rainyDays: 11 },
      6: { highC: 22, lowC: 11, rainyDays: 12 },
      7: { highC: 25, lowC: 13, rainyDays: 11 },
      8: { highC: 25, lowC: 13, rainyDays: 10 },
      9: { highC: 20, lowC: 9, rainyDays: 8 },
      10: { highC: 13, lowC: 5, rainyDays: 9 },
      11: { highC: 7, lowC: 1, rainyDays: 10 },
      12: { highC: 3, lowC: -2, rainyDays: 11 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "La rive de la Vltava où vous dormez façonne encore tout le voyage.",
    heroIntro:
      "Prague loge un château, un pont médiéval et une vieille ville intacte dans un centre que l'on traverse à pied en une demi-heure, et reste l'une des capitales classiques les moins chères d'Europe pour dormir. Le choix de la rive, puis du quartier derrière, façonne toujours le séjour : ruelles de carte postale et foule, calme côté château, ou base locale moins chère à quelques stations de tram. Ce guide passe en revue cinq quartiers qui valent la réservation, pour caler les grands sites autour des vagues de groupes plutôt que contre elles.",
    accent: { from: "#8B7CF6", to: "#E85D75", ink: "#3B2E7E" },
    neighborhoodSlugs: [
      "stare-mesto",
      "mala-strana",
      "vinohrady",
      "zizkov",
      "karlin",
    ],
    nearbyCitySlugs: ["vienna", "budapest"],
  },

  neighborhoods: [
    {
      slug: "stare-mesto",
      citySlug: "prague",
      name: "Stare Mesto (Old Town)",
      lat: 50.0875,
      lng: 14.421,
      bestFor: ["first-time", "romantic"],
      vibe: "Pavés, flèches et ruelles qui finissent en cours intérieures remplissent le cœur médiéval autour de la place de la Vieille Ville, le kilomètre carré le plus fréquenté du pays en journée. Après 22h, les groupes de touristes se dispersent vite et les rues retrouvent un vrai calme. Réservez ici pour un court séjour, si vous voulez tout ce qu'un premier voyage à Prague demande à dix minutes à pied, prix touristiques compris.",
      pros: [
        "Le Pont Charles, la place de la Vieille Ville et Josefov à quelques minutes à pied",
        "Le plus grand choix d'hôtels et d'appartements de la ville",
        "Aucun transport en commun nécessaire pour une visite de deux jours",
      ],
      cons: [
        "Les restaurants de la place principale sont calibrés pour les touristes, pas pour les habitants",
        "Les nuits de week-end apportent bruit de rue et groupes d'enterrements de vie de garçon",
        "Les chambres coûtent 20 à 30 pour cent de plus qu'un standard équivalent à Vinohrady",
      ],
    },
    {
      slug: "mala-strana",
      citySlug: "prague",
      name: "Mala Strana",
      lat: 50.0878,
      lng: 14.4046,
      bestFor: ["romantic", "first-time", "family"],
      vibe: "Toits rouges, jardins d'ambassades et ruelles baroques remplissent ce quartier au pied du château, sur la rive ouest de la Vltava, qui se vide complètement une fois les excursionnistes repartis de l'autre côté du fleuve en fin d'après-midi. Dormir ici, c'est se réveiller côté château, un vrai avantage de timing pour les grands sites. Réservez ici si un Pont Charles vide au petit matin et des soirées calmes comptent plus que la proximité des restaurants de la vieille ville.",
      pros: [
        "Le Château de Prague, la colline de Petrin et le mur Lennon au pas de votre porte",
        "Des soirées calmes et vraiment atmosphériques",
        "Le Pont Charles avant le petit-déjeuner, sans la moindre foule",
      ],
      cons: [
        "Moins de supermarchés et d'adresses bon marché que sur la rive est",
        "Les rues pavées en pente sont éprouvantes avec des valises ou une poussette",
      ],
    },
    {
      slug: "vinohrady",
      citySlug: "prague",
      name: "Vinohrady",
      lat: 50.0755,
      lng: 14.4443,
      bestFor: ["local", "budget", "family", "romantic"],
      vibe: "Des immeubles Art nouveau bordent ici un quadrillage résidentiel de places arborées, avec la meilleure concentration de cafés de tout Prague. C'est le quartier où s'installent les Pragois qui ont le choix, et la scène des restaurants s'en ressent. Réservez ici pour avoir les sites de la vieille ville à 10 minutes de métro, sans payer les prix de la vieille ville pour dormir.",
      pros: [
        "La meilleure cuisine et le meilleur café de spécialité de la ville, à prix locaux",
        "Le biergarten de Riegrovy Sady et deux grands parcs",
        "Un hébergement nettement moins cher que le centre",
      ],
      cons: [
        "Chaque grand site demande un trajet, même court",
        "Calme le soir si vous cherchez une vie nocturne au pied de l'immeuble",
      ],
    },
    {
      slug: "zizkov",
      citySlug: "prague",
      name: "Zizkov",
      lat: 50.0833,
      lng: 14.4515,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "Plus de pubs par habitant que partout ailleurs en Europe font la réputation de ce quartier au caractère brut, plus rugueux que Vinohrady voisin et surveillé par la tour de télévision futuriste. Bière pas chère et bars de quartier dominent encore, même si l'embourgeoisement gagne pâté par pâté. Réservez ici si la base la moins chère près du centre compte plus que le raffinement, et qu'une marche un peu plus longue jusqu'aux sites ne vous dérange pas.",
      pros: [
        "Les prix de chambre et de bière les plus bas près du centre",
        "Une vraie culture de pub, presque sans surcote touristique",
        "La colline de Vitkov offre une immense vue gratuite sur la vieille ville",
      ],
      cons: [
        "Certains pâtés de maisons semblent négligés et couverts de graffitis",
        "20 à 30 minutes à pied ou en tram jusqu'aux grands sites",
        "Bruit des bars le week-end sur les rues principales",
      ],
    },
    {
      slug: "karlin",
      citySlug: "prague",
      name: "Karlin",
      lat: 50.0925,
      lng: 14.4505,
      bestFor: ["local", "family", "budget"],
      vibe: "Reconstruit après la crue de 2002, ce quartier plat en bord de rivière est aujourd'hui le secteur moderne le plus soigné de Prague, avec de larges boulevards et des immeubles du XIXe siècle rénovés. La scène brunch et bière artisanale vise clairement les habitants plutôt que les visiteurs, et la vieille ville n'est qu'à deux stations de métro. Réservez ici si des rues plates et adaptées aux poussettes, et une ambiance moderne, comptent plus que d'être immergé dans l'architecture médiévale.",
      pros: [
        "Rues plates adaptées aux poussettes et chemins en bord de rivière",
        "D'excellents restaurants tchèques modernes à prix honnêtes",
        "Une liaison rapide vers le centre par la ligne B du métro",
      ],
      cons: [
        "Aucun grand site dans le quartier lui-même",
        "Vie nocturne discrète, les bars ferment tôt pour les standards de Prague",
      ],
    },
  ],

  pois: [
    {
      slug: "charles-bridge",
      citySlug: "prague",
      name: "Pont Charles",
      lat: 50.0865,
      lng: 14.4114,
      kind: "sight",
      needsBooking: false,
      tip: "Traversez-le avant 8h ou après 22h ; entre 10h et 18h, on avance épaule contre épaule. Ignorez les caricaturistes au milieu du pont et évitez les bureaux de change aux deux extrémités, qui pratiquent parmi les pires taux de la ville.",
    },
    {
      slug: "prague-castle",
      citySlug: "prague",
      name: "Château de Prague",
      lat: 50.09,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Achetez le billet du circuit de base en ligne et entrez à l'ouverture des portes à 9h ; les groupes déferlent à partir de 10h. Les cours et les vues sur les ruelles sont gratuites : si vous ne voulez que le panorama, traversez sans billet et dépensez plutôt l'argent au café en terrasse du palais Lobkowicz.",
    },
    {
      slug: "st-vitus-cathedral",
      citySlug: "prague",
      name: "Cathédrale Saint-Guy",
      lat: 50.0909,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "L'entrée est incluse dans le billet du circuit du château ; la zone gratuite juste après la porte ne montre presque rien, alors payez pour la nef complète. Allez droit au vitrail de Mucha, dans la troisième chapelle à gauche, avant que l'allée ne se remplisse.",
    },
    {
      slug: "old-town-square",
      citySlug: "prague",
      name: "Place de la Vieille Ville et horloge astronomique",
      lat: 50.0875,
      lng: 14.4213,
      kind: "sight",
      needsBooking: false,
      tip: "Le spectacle de l'horloge dure 45 secondes et déçoit depuis la rue bondée ; regardez-le une fois à une heure creuse comme 9h, puis payez plutôt la montée de la tour de l'hôtel de ville, qui offre la meilleure vue sur la place. Ne mangez jamais et ne changez jamais d'argent sur la place elle-même.",
    },
    {
      slug: "josefov",
      citySlug: "prague",
      name: "Quartier juif (Josefov)",
      lat: 50.09,
      lng: 14.418,
      kind: "museum",
      needsBooking: true,
      tip: "Un seul billet du Musée juif couvre les synagogues et le vieux cimetière juif ; achetez-le en ligne et commencez par la synagogue Pinkas dès l'ouverture à 9h, car le chemin du cimetière derrière elle sature en milieu de matinée. Tout ferme le samedi, alors planifiez autour du shabbat.",
    },
    {
      slug: "petrin-hill",
      citySlug: "prague",
      name: "Colline de Petrin et tour panoramique",
      lat: 50.0833,
      lng: 14.395,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Le funiculaire depuis Ujezd fonctionne avec un ticket de transport public classique, mais la file dépasse souvent les 25 minutes de montée à pied à travers les vergers, alors vérifiez avant de vous engager. Les 299 marches de la tour battent les tours du château pour les photos de skyline, car le Château de Prague lui-même entre dans le cadre.",
    },
    {
      slug: "letna-park",
      citySlug: "prague",
      name: "Biergarten du parc Letna",
      lat: 50.0955,
      lng: 14.416,
      kind: "park",
      needsBooking: false,
      tip: "Venez une heure avant le coucher du soleil, prenez une bière au kiosque pour environ 60 CZK et installez-vous sur un banc le long du bord sud pour la vue classique sur les ponts de la Vltava. Le paiement en espèces passe bien et le lieu est ouvert environ d'avril à octobre ; en hiver, le point de vue fonctionne toujours, le stand de bière non.",
    },
    {
      slug: "vysehrad",
      citySlug: "prague",
      name: "Forteresse de Vysehrad",
      lat: 50.0645,
      lng: 14.418,
      kind: "sight",
      needsBooking: false,
      tip: "Le site, les remparts et le cimetière où reposent Dvorak et Mucha sont entièrement gratuits ; seule la petite visite des casemates est payante. Prenez la ligne C du métro jusqu'à Vysehrad, parcourez les remparts dans le sens inverse des aiguilles d'une montre pour les vues sur la rivière, puis descendez par les maisons cubistes vers Naplavka.",
    },
    {
      slug: "wenceslas-square",
      citySlug: "prague",
      name: "Place Venceslas",
      lat: 50.081,
      lng: 14.428,
      kind: "sight",
      needsBooking: false,
      tip: "Traitez-la comme une traversée de 20 minutes pour l'histoire de 1989 et la façade du Musée national, pas comme une destination. C'est le terrain de prédilection des deux arnaques classiques : n'utilisez jamais les bureaux de change de rue ici et ne hélez jamais de taxi sur la place ; commandez plutôt un Bolt ou un Uber.",
    },
    {
      slug: "klementinum",
      citySlug: "prague",
      name: "Bibliothèque baroque du Klementinum",
      lat: 50.0863,
      lng: 14.4165,
      kind: "museum",
      needsBooking: true,
      tip: "L'entrée se fait uniquement en visite guidée, environ toutes les 30 minutes, et les créneaux partent vite les jours chargés : réservez en ligne une visite du matin. On admire la salle de la bibliothèque baroque depuis le seuil, sans pouvoir entrer dans la pièce ; la vraie récompense est la galerie de la tour astronomique en fin de parcours.",
    },
    {
      slug: "lennon-wall",
      citySlug: "prague",
      name: "Mur Lennon",
      lat: 50.0863,
      lng: 14.4069,
      kind: "sight",
      needsBooking: false,
      tip: "C'est un arrêt de cinq minutes, repeint en permanence : ne faites pas de détour rien que pour lui, intégrez-le à une balade dans Mala Strana entre le Pont Charles et l'île de Kampa. Avant 9h, vous pouvez le photographier sans personne dans le cadre.",
    },
    {
      slug: "lokal-dlouha",
      citySlug: "prague",
      name: "Lokal Dlouha",
      lat: 50.0899,
      lng: 14.4257,
      kind: "food",
      needsBooking: false,
      tip: "C'est la référence pour la Pilsner Urquell fraîche des cuves et les classiques tchèques honnêtes comme la svickova à prix corrects. La maison prend les réservations et se remplit dès 19h ; sans réservation, tentez le bar ou venez avant 18h, et sachez que votre compte de bières est marqué sur un ticket papier que vous réglez à la fin.",
    },
    {
      slug: "strahov-library",
      citySlug: "prague",
      name: "Bibliothèque du monastère de Strahov",
      lat: 50.0862,
      lng: 14.3893,
      kind: "museum",
      needsBooking: true,
      tip: "Comme au Klementinum, on regarde les salles théologique et philosophique depuis les portes : comptez 30 à 40 minutes et prenez le permis photo si vous voulez des images. Combinez avec la terrasse gratuite en contrebas du monastère, l'un des meilleurs points de vue château et ville de Prague, puis descendez à pied vers le château.",
    },
    {
      slug: "naplavka",
      citySlug: "prague",
      name: "Quais de Naplavka",
      lat: 50.071,
      lng: 14.414,
      kind: "experience",
      needsBooking: false,
      tip: "Le samedi matin accueille le meilleur marché fermier de la ville de 8h à 14h ; les soirs d'été, le quai se transforme en scène de bars à ciel ouvert avec des péniches reconverties en pubs. Arrivez avant 18h les vendredis chauds, sinon vous chercherez une place sur le muret.",
    },
  ],

  itineraries: [
    {
      citySlug: "prague",
      days: 2,
      summary:
        "Deux jours suffisent pour les sites majeurs de Prague si vous logez au centre et démarrez tôt, mais vous ne toucherez pas au côté local de la ville. Le centre est compact : le Pont Charles, la place de la Vieille Ville et le quartier du château sont à 25 minutes à pied les uns des autres, donc un plan serré couvre les trois plus le quartier juif sans transport. Basez-vous à Stare Mesto pour que les deux matinées commencent à pied. La structure qui fonctionne : une rive par jour, jour un pour le cœur de la vieille ville et Josefov, jour deux pour la colline du château, Strahov et Mala Strana. Réservez en ligne le circuit du château et les billets du Musée juif avant d'arriver, car les files sont la seule vraie menace d'une visite de 48 heures. Ce que vous sacrifiez : Vysehrad, la scène des cafés de Vinohrady et toute soirée tranquille en biergarten, exactement ce qu'un troisième jour vous achète. Les prix sont bas au regard de l'Europe de l'Ouest, alors mangez bien ; restez simplement à l'écart des places principales.",
      stayNeighborhoodSlug: "stare-mesto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Cœur de la vieille ville et quartier juif",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Commencez sur la place de la Vieille Ville vers 8h30 quand elle est encore calme, assistez au spectacle de l'horloge astronomique de 9h, puis montez la tour de l'hôtel de ville pour la vue sur les toits avant l'arrivée des premiers groupes.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Marchez cinq minutes vers le nord jusqu'à Josefov et faites le circuit du Musée juif en commençant par la synagogue Pinkas, puis le vieux cimetière juif et la synagogue espagnole. Achetez le billet combiné en ligne la veille au soir.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Déjeunez chez Lokal Dlouha : svickova ou fromage pané avec une Pilsner Urquell tirée de la cuve. Arrivez avant le coup de feu de 13h ou prévoyez une courte attente.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Faites la visite réservée de l'après-midi au Klementinum pour voir la salle de la bibliothèque baroque et monter la tour astronomique, avec vue sur les toits de la vieille ville.",
              durationMin: 60,
            },
            {
              text: "Flânez dans les ruelles entre le Klementinum et la tour Poudrière : Celetna, la cour Ungelt et les arcades autour du théâtre des États. Pas de billets, pas de plan, c'est la meilleure heure gratuite de la vieille ville.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Traversez la place Venceslas à la tombée du jour pour la façade du Musée national et le mémorial de 1989, en simple passage plutôt qu'en arrêt. Commandez un Bolt si vous avez besoin d'un trajet plus tard ; ne hélez jamais de taxi ici.",
              durationMin: 30,
            },
            {
              poiSlug: "charles-bridge",
              text: "Terminez sur le Pont Charles après 21h, quand la foule se disperse et que le château est illuminé. C'est la photo pour laquelle vous êtes venu, et à cette heure vous pouvez vraiment vous arrêter pour la prendre.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colline du château et Mala Strana",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Soyez aux portes du Château de Prague pour l'ouverture de 9h avec un billet de circuit réservé en ligne et faites la Ruelle d'Or et l'ancien palais royal avant la vague de groupes de 10h.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Dans l'enceinte, offrez une vraie visite à la Cathédrale Saint-Guy avec l'entrée payante de la nef et trouvez le vitrail de Mucha dans la troisième chapelle à gauche.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Montez 15 minutes à pied jusqu'à la bibliothèque du monastère de Strahov pour les deux salles baroques, puis profitez de la vue gratuite depuis la terrasse en contrebas du monastère, qui cadre le château et toute la rive est.",
              durationMin: 75,
            },
            {
              poiSlug: "petrin-hill",
              text: "Descendez à travers les vergers de Petrin et, si les jambes suivent, grimpez les 299 marches de la tour panoramique pour la seule vue de skyline qui inclut le château lui-même.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Descendez à travers Mala Strana en passant par le mur Lennon et l'île de Kampa pendant que les excursionnistes s'en vont. Le quartier est à son meilleur à cette heure.",
              durationMin: 45,
            },
            {
              text: "Dîner à Mala Strana dans un restaurant de cave traditionnel à l'écart de la rue Nerudova, loin des menus touristiques proches du pont. Plats avec bière : comptez 300 à 450 CZK par personne, pas le double.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 3,
      summary:
        "Trois jours, c'est la bonne durée pour Prague : assez pour tous les grands sites à un rythme humain, plus une soirée qui appartient à la ville plutôt qu'à la checklist. Deux jours vous forcent à enchaîner château et vieille ville au sprint ; le troisième jour ajoute Vysehrad, le biergarten de Letna et le temps de s'asseoir dans un pub sans regarder l'heure. Logez à Mala Strana, côté château de la rivière. C'est un peu plus cher que les quartiers de l'est, mais vous vous réveillez à côté des sites vers lesquels tout le monde fait le trajet, et le quartier devient calme et superbe après 18h. Le plan en résumé : jour un pour la vieille ville et Josefov, jour deux pour le château, Strahov et Petrin, jour trois pour Vysehrad, les quais et Letna. Réservez trois choses en ligne avant d'arriver : le circuit du château, le billet du Musée juif et un créneau de visite au Klementinum. Tout le reste à Prague récompense l'arrivée matinale plutôt que le supplément payé.",
      stayNeighborhoodSlug: "mala-strana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Vieille ville et quartier juif",
          morning: [
            {
              poiSlug: "charles-bridge",
              text: "Depuis votre base de Mala Strana, traversez le Pont Charles avant 8h quand il est presque vide ; c'est la meilleure astuce de timing de Prague et elle ne coûte rien.",
              durationMin: 30,
            },
            {
              poiSlug: "old-town-square",
              text: "Continuez vers la place de la Vieille Ville pour l'horloge astronomique et la montée de la tour de l'hôtel de ville, à boucler avant 10h pour devancer la marée.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Passez la fin de matinée à Josefov sur le circuit du Musée juif : la synagogue Pinkas d'abord, puis le vieux cimetière juif avant que le chemin ne sature, pour finir à la synagogue espagnole.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Déjeunez chez Lokal Dlouha pour la Pilsner de cuve de référence et une assiette de svickova. Gardez votre ticket papier de bières, vous le réglez à la fin.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Faites votre visite réservée du Klementinum pour la bibliothèque baroque et la vue de la tour astronomique, puis flânez dans les ruelles vers la cour Ungelt.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Parcourez la place Venceslas sur toute sa longueur pour le Musée national et le mémorial de la révolution de Velours. Évitez les bureaux de change et les taxis de rue, sans exception.",
              durationMin: 30,
            },
            {
              text: "Retraversez la rivière pour dîner à Mala Strana ; les rues derrière l'île de Kampa cachent des restaurants tranquilles où un dîner tchèque complet avec bière reste sous les 500 CZK.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Château, Strahov et Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Montez à pied depuis Mala Strana et entrez au Château de Prague à 9h pile avec votre billet de circuit en ligne, en couvrant la Ruelle d'Or et l'ancien palais royal avant les groupes.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visitez la Cathédrale Saint-Guy avec l'entrée payante complète et allez droit au vitrail de Mucha avant que la nef ne se remplisse.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Déjeunez dans une brasserie de monastère près de Strahov, puis visitez les salles théologique et philosophique de la bibliothèque de Strahov et profitez du point de vue gratuit de la terrasse en contrebas.",
              durationMin: 120,
            },
            {
              poiSlug: "petrin-hill",
              text: "Suivez la crête jusqu'à la colline de Petrin à travers les vergers et grimpez la tour panoramique si la file du funiculaire en bas semble longue ; la vue de la tour bat toutes les tours du château, car le château est dedans.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Descendez vers le mur Lennon et l'île de Kampa pour la balade de l'heure dorée, quand Mala Strana se vide.",
              durationMin: 45,
            },
            {
              text: "Dînez dans un pub de Mala Strana avec jardin, puis marchez jusqu'au quai face au Théâtre national pour le château illuminé qui se reflète dans la Vltava.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, la rivière et Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Prenez la ligne C du métro jusqu'à Vysehrad et parcourez les remparts de la forteresse dans le sens inverse des aiguilles d'une montre pour les vues sur la rivière, puis visitez le cimetière où reposent Dvorak et Mucha. Le site est gratuit.",
              durationMin: 120,
            },
            {
              text: "Sortez de Vysehrad en descendant devant les maisons cubistes du quai Rasinovo nabrezi, un détour architectural de cinq minutes que presque personne ne fait.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Suivez la rivière vers le nord le long de Naplavka ; le samedi, le marché fermier tourne jusqu'à 14h, les autres jours les cafés flottants conviennent à un déjeuner lent sur l'eau.",
              durationMin: 105,
            },
            {
              text: "Tram ou marche vers la rive de la vieille ville et choisissez un musée que vous avez sauté : le musée des Arts décoratifs ou le musée Alfons Mucha tiennent tous deux en 90 minutes.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Montez au biergarten du parc Letna une heure avant le coucher du soleil, achetez une bière à 60 CZK au kiosque et prenez un banc au-dessus des ponts. C'est la meilleure soirée pas chère de Prague.",
              durationMin: 120,
            },
            {
              text: "Terminez par un dîner à Holesovice tout près, ou de retour de l'autre côté du pont dans la vieille ville, selon le temps que le coucher de soleil vous retient.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 4,
      summary:
        "Quatre jours, c'est plus qu'il n'en faut pour les sites de Prague, et c'est justement l'intérêt : le quatrième jour transforme un sprint de monuments en vrai voyage. Les jours un à trois couvrent la vieille ville, Josefov, le quartier du château et Vysehrad à un rythme détendu ; le jour quatre est à vous, soit pour une journée locale dans les quartiers, soit pour une excursion à Kutna Hora, sa chapelle d'ossements et sa cathédrale, à une heure de train. Avec autant de temps, évitez le centre et logez à Vinohrady. C'est à 10 minutes de la place de la Vieille Ville en métro, 20 à 30 pour cent moins cher à chambre équivalente, et ses cafés et biergartens sont la raison d'être du quatrième jour. La logique d'une rive par jour s'applique toujours : gardez ensemble le château, Strahov et Petrin, gardez ensemble la vieille ville et Josefov, et ne zigzaguez pas à travers la Vltava. Réservez à l'avance le circuit du château, le Musée juif et le Klementinum. Si vous hésitiez entre trois et quatre jours, le quatrième est celui dont vous vous souviendrez.",
      stayNeighborhoodSlug: "vinohrady",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Vieille ville et quartier juif",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Métro de Vinohrady à Mustek pour être sur la place de la Vieille Ville à 8h30, pour l'horloge astronomique et la tour de l'hôtel de ville avant l'arrivée des groupes.",
              durationMin: 90,
            },
            {
              poiSlug: "josefov",
              text: "Faites le circuit du Musée juif à Josefov en commençant par la synagogue Pinkas à l'ouverture, puis le vieux cimetière juif et la synagogue espagnole avec votre billet réservé.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Déjeunez chez Lokal Dlouha : Pilsner Urquell de cuve et classiques tchèques à prix honnêtes, à cinq minutes de Josefov.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Faites une visite réservée du Klementinum pour la salle de la bibliothèque baroque et le panorama de la tour astronomique sur la vieille ville.",
              durationMin: 60,
            },
            {
              text: "Passez le reste de l'après-midi dans les ruelles : cour Ungelt, rue Celetna et tour Poudrière, le tout gratuit et meilleur sans itinéraire.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "charles-bridge",
              text: "Avancez sur le Pont Charles après 21h pour la vue sur le château illuminé, une fois la foule de la journée partie.",
              durationMin: 45,
            },
            {
              text: "Reprenez le métro vers Vinohrady et prenez un dernier verre dans un bar à vin autour de Namesti Miru ; le quartier sert des vins de Moravie introuvables au centre.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Château, Strahov et Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Le tram 22 depuis Vinohrady file droit au quartier du château ; entrez au Château de Prague à 9h avec votre billet en ligne et bouclez la Ruelle d'Or et l'ancien palais royal tôt.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visitez la Cathédrale Saint-Guy avec le billet complet de la nef et cherchez le vitrail de Mucha avant que les allées ne se remplissent.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Montez à la bibliothèque du monastère de Strahov pour les deux salles baroques, puis attardez-vous sur la terrasse gratuite en contrebas pour la vue de référence sur le château et la ville.",
              durationMin: 90,
            },
            {
              poiSlug: "petrin-hill",
              text: "Traversez les vergers jusqu'à la colline de Petrin et grimpez la tour panoramique, ou redescendez en funiculaire vers Ujezd si la journée a été longue.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Parcourez Mala Strana à la tombée du jour via le mur Lennon et l'île de Kampa, la plus belle heure du quartier.",
              durationMin: 45,
            },
            {
              text: "Restez dîner dans un restaurant de cave de Mala Strana, puis faites une dernière boucle devant l'église Saint-Nicolas illuminée avant le tram du retour.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, la rivière et Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Métro jusqu'à Vysehrad et parcourez gratuitement les remparts de la forteresse pour le meilleur panorama sur la rivière de la ville, plus le cimetière qui abrite Dvorak et Mucha.",
              durationMin: 120,
            },
            {
              text: "Descendez devant les maisons cubistes vers le quai ; le détour ajoute dix minutes et une architecture unique à Prague.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Suivez Naplavka vers le nord le long de l'eau ; le samedi apporte le marché fermier jusqu'à 14h, les autres jours les cafés flottants amarrés assurent un long déjeuner.",
              durationMin: 105,
            },
            {
              poiSlug: "wenceslas-square",
              text: "Coupez à travers la Nouvelle Ville jusqu'à la place Venceslas pour la façade du Musée national et le mémorial de 1989, une traversée de 30 minutes, puis explorez les passages de Lucerna et sa statue de cheval à l'envers.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Terminez la journée au biergarten du parc Letna au-dessus de la rivière : bières à 60 CZK, platanes et la vue du coucher de soleil sur tous les ponts à la fois.",
              durationMin: 120,
            },
            {
              text: "Dînez à Holesovice au pied du parc ou de retour à Vinohrady, les deux à un court trajet de tram.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Journée locale à Vinohrady ou excursion à Kutna Hora",
          morning: [
            {
              text: "Option A : faites la grasse matinée, puis une tournée des cafés de Vinohrady autour de Namesti Miru et de la place Jiriho z Podebrad, où le marché fermier tourne presque tous les matins de semaine. Option B : prenez le train direct depuis la gare centrale vers Kutna Hora, environ une heure, pour l'ossuaire de Sedlec ; achetez le billet combiné ossuaire et cathédrale au centre d'information pour éviter la file sur place.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "L'option A continue avec le parc Riegrovy Sady et un déjeuner lent dans un bistrot de Vinohrady, puis un tour des façades Art nouveau du quartier le long de la rue Manesova. Option B : marchez de Sedlec vers la vieille ville de Kutna Hora pour la cathédrale Sainte-Barbe et les ruelles minières médiévales avant le train du retour en fin d'après-midi.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Dans les deux cas, terminez au biergarten de Riegrovy Sady à Vinohrady, le pendant local de Letna, avec une pelouse qui fait face à la silhouette du château au coucher du soleil.",
              durationMin: 120,
            },
            {
              text: "Dernier dîner dans un restaurant tchèque moderne de Vinohrady ou Karlin ; les deux quartiers revisitent le canard et les knedliky avec finesse, à moitié prix de la vieille ville.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default pragueFr;

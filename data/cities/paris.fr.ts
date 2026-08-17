import type { CityData } from "../types";

const parisFr: CityData = {
  city: {
    slug: "paris",
    name: "Paris",
    country: "France",
    countrySlug: "france",
    lat: 48.8566,
    lng: 2.3522,
    tier: 1,
    idealDays: 4,
    durations: [2, 3, 4],
    airportCode: "CDG",
    airportToCenter:
      "Depuis Charles-de-Gaulle, le RER B rejoint la gare du Nord et Châtelet en 30 à 35 min environ pour 11,80 EUR, avec un passage toutes les 10 à 15 min. Le Roissybus vers l'Opéra coûte environ 13 EUR mais avance au pas dans les embouteillages, et le taxi est à forfait : 56 EUR pour la rive droite, 65 EUR pour la rive gauche. Depuis Orly, prenez la navette Orlyval jusqu'à Antony puis le RER B, ou le tram T7, ou l'Orlybus direct jusqu'à Denfert-Rochereau.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [],
    monthlyNotes: {
      1: "Froid et gris, 7-8C, journées courtes et humides, et la plus faible affluence de l'année une fois passée la cohue du Nouvel An. Les soldes d'hiver commencent début janvier et les tarifs hôteliers touchent leur plancher : c'est un excellent mois pour un séjour musées pas cher et sans file.",
      2: "Encore froid, 8C, souvent couvert, même si de belles journées vives percent parfois et que les files au Louvre et à Orsay restent courtes. Les tarifs restent bas hors de la semaine de vacances scolaires, ce qui en fait un mois avantageux si vous vous couvrez bien.",
      3: "Les maximales grimpent vers 12-13C et la ville reverdit, les terrasses de café rouvrant dès les premiers après-midis doux. La fréquentation reste faible et les prix des hôtels raisonnables avant la ruée du printemps : une période discrètement idéale pour venir.",
      4: "L'un des meilleurs mois, 15-16C, arbres en fleurs et longues journées lumineuses, même si les averses d'avril sont fréquentes : prévoyez une couche de plus. La fréquentation et les prix montent au fil du mois, et Pâques peut remplir le centre : réservez musées et hôtels à l'avance.",
      5: "Doux et animé, 19-20C, avec la saison des terrasses battant son plein, mais plusieurs jours fériés (le 1er mai, le 8 mai, l'Ascension) ferment de nombreux commerces et musées : vérifiez les dates. Le tournoi de Roland-Garros débute en fin de mois, et c'est la plus belle météo parisienne, avec une affluence en hausse.",
      6: "Longues soirées dorées, 23C, la plus belle lumière de l'année, et des terrasses bondées jusque tard. La Fête de la Musique, le 21 juin, remplit chaque rue de concerts gratuits, et Roland-Garros s'achève début juin : attendez-vous à une ville animée, festive et complète.",
      7: "Chaud, 25C, et très fréquenté par les touristes estivaux tandis que les Parisiens commencent à partir. Le 14 juillet apporte le défilé militaire sur les Champs-Élysées et le feu d'artifice à la tour Eiffel, et Paris Plages transforme les berges de la Seine en plage éphémère, avec sable et transats tout l'été.",
      8: "Épisodes de chaleur jusqu'à 25-26C et mois où la ville se vide le plus de ses habitants, beaucoup de restaurants et petits commerces fermant deux ou trois semaines pour les vacances d'août traditionnelles. Les grands sites restent ouverts et pris d'assaut par les visiteurs, Paris Plages se poursuit, et la ville paraît étrangement calme dans ses quartiers résidentiels.",
      9: "Sans doute le plus beau mois : journées douces déclinant depuis 21C, affluence en baisse après la première semaine, commerces et restaurants rouvrant reposés de la pause estivale. La Fashion Week et les événements design animent la fin du mois, et les hôtels redeviennent avantageux à mesure que le pic retombe.",
      10: "Doux et souvent lumineux, 16C, avec les couleurs d'automne dans les parcs et le retour des premiers vrais épisodes pluvieux. La Nuit Blanche, début octobre, laisse musées et installations artistiques ouverts toute la nuit gratuitement, et l'affluence de demi-saison rend les files des musées supportables.",
      11: "Frais, humide et gris, 11C, avec des journées qui raccourcissent, mais la plus faible affluence de l'automne et de bonnes affaires hôtelières. Les illuminations de Noël s'allument sur les Champs-Élysées et les vitrines des grands magasins se dévoilent fin novembre, égayant un mois sombre.",
      12: "Froid, 8C, souvent pluvieux et sombre, mais le centre scintille d'illuminations de Noël, de vitrines éclairées et de marchés. Les tarifs bondissent sur la période de Noël au Nouvel An, quand les Champs-Élysées et le quartier de Notre-Dame attirent une grosse foule festive, même si début décembre reste calme et abordable.",
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
    tagline: "Paris est trop vaste pour se traverser à pied, l'arrondissement où vous dormez décide donc de la part de chaque journée qui part dans le métro.",
    heroIntro:
      "Paris déploie ses monuments sur une douzaine d'arrondissements qu'aucun visiteur ne parcourt d'un bout à l'autre, c'est exactement pour cela que le quartier où vous dormez façonne le séjour plus que n'importe quel itinéraire. Ce guide compare les cinq secteurs qui valent la réservation, des ruelles branchées du Marais aux bars au bord du canal du nord-est, et désigne l'hôtel qui mérite son tarif dans chacun.",
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
      vibe: "Un lacis de ruelles médiévales et de grands hôtels particuliers occupe les 3e et 4e arrondissements, le coin le plus branché du centre de Paris, entre boutiques, galeries et une scène de bars qui continue bien après la fermeture des commerces. La grande place des Vosges ancre le quartier, et Notre-Dame, le Louvre et les îles se rejoignent à pied plutôt qu'en métro. Réservez ici pour une base élégante et centrale, avec de quoi sortir après le dîner.",
      pros: [
        "Notre-Dame, les îles, le Louvre et le Centre Pompidou se rejoignent tous à pied",
        "La meilleure concentration de boutiques et de galeries du centre de Paris",
        "Bars et cuisines tardives gardent le quartier éveillé bien après le dîner, sans prendre le métro",
      ],
      cons: [
        "Les tarifs hôteliers et les additions au restaurant grimpent ici plus que presque partout ailleurs",
        "Le week-end en soirée, les ruelles étroites deviennent bruyantes et vraiment bondées",
        "Le dimanche apporte sa propre cohue, car de nombreuses boutiques y restent ouvertes quand le reste de Paris ferme",
      ],
    },
    {
      slug: "saint-germain",
      citySlug: "paris",
      name: "Saint-Germain-des-Prés",
      lat: 48.8539,
      lng: 2.3336,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Le vieux quartier littéraire de la rive gauche vit toujours de la renommée du Café de Flore et des Deux Magots, mais son vrai atout tient à son côté central et paisible, entre galeries chic, jardin du Luxembourg à sa lisière et musée d'Orsay à quelques pas de l'autre côté du fleuve. Il est plus soigné que brut, le genre de secteur qui convient à une première visite ou à un séjour bâti autour de matinées lentes. Réservez ici pour une base élégante et sans stress, qui laisse tout de même la Seine et le Quartier latin à portée de pied.",
      pros: [
        "Courte marche jusqu'à Orsay, la traversée du fleuve vers le Louvre et le jardin du Luxembourg",
        "Calme, central et facile à repérer, un choix indulgent pour un premier séjour",
        "Deux lignes de métro et un accès RER rejoignent les deux aéroports et Versailles sans casse-tête de correspondance",
      ],
      cons: [
        "Chambres d'hôtel et café dans les cafés célèbres coûtent tous deux un supplément",
        "La vie nocturne y est plus calme que dans le Marais ou le quartier du canal après le dîner",
        "Paraît soigné et tourné vers les visiteurs plutôt que vraiment vécu",
      ],
    },
    {
      slug: "montmartre",
      citySlug: "paris",
      name: "Montmartre",
      lat: 48.8867,
      lng: 2.3431,
      bestFor: ["romantic", "budget", "local"],
      vibe: "La colline au-dessus du 18e arrondissement garde un air de village que le reste du centre de Paris a perdu depuis longtemps, ses escaliers pavés et ses petites places grimpant vers les dômes blancs du Sacré-Cœur. Écartez-vous d'une rue ou deux de la foule autour de la basilique et de la place du Tertre, et vous trouvez des bars à vin et un rythme vraiment local. On y dort moins cher que dans le centre, mais chaque descente vers le Louvre ou la Seine impose un trajet de métro, pas une balade.",
      pros: [
        "Le panorama gratuit depuis les marches du Sacré-Cœur bat n'importe quel point de vue payant de la ville",
        "Les chambres coûtent sensiblement moins cher que sur la rive droite centrale",
        "Ruelles tranquilles et bars locaux apparaissent dès qu'on s'éloigne des groupes de touristes",
      ],
      cons: [
        "Chaque site majeur en contrebas impose un trajet de métro, pas une marche",
        "Pentes et escaliers raides partout compliquent la vie avec bagages ou poussette",
        "Les marches de la basilique et la place du Tertre sont un terrain connu pour les pickpockets et les rabatteurs",
      ],
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Le Quartier latin",
      lat: 48.8489,
      lng: 2.3469,
      bestFor: ["budget", "first-time", "family"],
      vibe: "Les rues bâties autour de la Sorbonne, dans le 5e arrondissement, restent animées de librairies, de petits restos pas chers et d'énergie étudiante entre le Panthéon et le fleuve. Le quartier est assez proche pour rejoindre à pied Notre-Dame, les îles et le jardin du Luxembourg, avec des lits qui coûtent généralement moins cher que dans le Saint-Germain plus soigné juste à côté. Animé le jour, il devient un peu rugueux dans ses coins les plus touristiques une fois la foule du soir arrivée.",
      pros: [
        "Notre-Dame, la Sainte-Chapelle et les îles se rejoignent tous à pied, de l'autre côté du fleuve",
        "Chambres et repas coûtent moins cher ici qu'à Saint-Germain, juste à côté",
        "Les liaisons RER et métro d'ici rejoignent directement Versailles et les deux aéroports",
      ],
      cons: [
        "La rue de la Huchette et les rues alentour s'alignent en pièges à touristes côté cuisine",
        "Le secteur autour de la Sorbonne et des quais devient bondé et bruyant",
        "Les vieux immeubles donnent des chambres parfois petites, aux planchers et escaliers grinçants",
      ],
    },
    {
      slug: "canal-saint-martin",
      citySlug: "paris",
      name: "Le canal Saint-Martin",
      lat: 48.8709,
      lng: 2.3665,
      bestFor: ["local", "nightlife", "budget"],
      vibe: "Cette portion des 10e et 11e arrondissements longe un canal bordé d'arbres où les habitants pique-niquent sur les berges, tandis que torréfacteurs indépendants, bars à vin naturel et friperies remplissent les rues adjacentes. Il n'a aucun des monuments de carte postale mais toute la vie de quartier, ce qui se rapproche le plus à Paris d'une soirée passée parmi les habitants plutôt que les visiteurs. Attendez-vous à un trajet de métro pour rejoindre la tour Eiffel ou le Louvre, car rien de vraiment marquant ne se trouve à portée de pied.",
      pros: [
        "La vie nocturne la plus authentiquement locale de la ville, entre bars à vin naturel et pique-niques au bord du canal",
        "Manger et boire coûtent moins cher ici que n'importe où près du centre touristique",
        "Les liaisons en métro vers le Marais et le reste de la rive droite sont rapides et directes",
      ],
      cons: [
        "Un trajet de métro sépare ce quartier de la tour Eiffel, du Louvre et des îles",
        "Presque aucun site marquant ne se trouve à portée de pied",
        "Certaines rues près du canal paraissent glauques après la tombée de la nuit",
      ],
    },
  ],

  pois: [
    {
      slug: "eiffel-tower",
      citySlug: "paris",
      name: "La tour Eiffel",
      lat: 48.8584,
      lng: 2.2945,
      kind: "sight",
      needsBooking: true,
      tip: "Réservez un billet horodaté d'ascenseur jusqu'au sommet en ligne, des semaines à l'avance : le site officiel ouvre les créneaux environ 60 jours avant et ils partent vite ; monter au deuxième étage par les escaliers coûte moins cher et fait rarement la file. Venez au premier créneau du matin ou à la nuit tombée, quand la tour scintille cinq minutes à chaque heure. Gardez vos sacs bien fermés : le pied de la tour et le Trocadéro, en face, sont des terrains de choix pour les pickpockets.",
    },
    {
      slug: "louvre",
      citySlug: "paris",
      name: "Le musée du Louvre",
      lat: 48.8606,
      lng: 2.3376,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez une entrée horodatée en ligne, obligatoire même avec un Paris Museum Pass, et choisissez le premier créneau de 9h pour atteindre la Joconde avant que le mur de téléphones ne se forme. Le Louvre est fermé le mardi et ouvert en nocturne (jusque vers 21h) le mercredi et le vendredi, quand la soirée est bien plus calme. Entrez par le Carrousel du Louvre ou la porte des Lions pour éviter la file de la pyramide.",
    },
    {
      slug: "notre-dame",
      citySlug: "paris",
      name: "La cathédrale Notre-Dame",
      lat: 48.853,
      lng: 2.3499,
      kind: "sight",
      needsBooking: false,
      tip: "Rouverte en décembre 2024 après l'incendie, et l'intérieur restauré est éblouissant. L'entrée est gratuite mais une file d'une heure sans réservation est fréquente : réservez un créneau horodaté gratuit sur l'application ou le site officiel jusqu'à deux jours à l'avance pour entrer directement. Venez tôt ou le soir pour la visite la plus calme, et réservez à part la montée aux tours si vous voulez la vue depuis les toits, au niveau des gargouilles.",
    },
    {
      slug: "musee-orsay",
      citySlug: "paris",
      name: "Le musée d'Orsay",
      lat: 48.86,
      lng: 2.3266,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez un créneau horodaté en ligne pour la grande collection impressionniste mondiale, installée dans une ancienne gare. Il est fermé le lundi et ouvert en nocturne jusque vers 21h45 le jeudi, le moment le plus calme et le plus atmosphérique pour la visite. Montez d'abord directement aux salles Monet, Renoir et Van Gogh du cinquième étage, puis redescendez, et profitez de la vue à travers la grande horloge de la gare.",
    },
    {
      slug: "montmartre-sacre-coeur",
      citySlug: "paris",
      name: "Montmartre et le Sacré-Cœur",
      lat: 48.8867,
      lng: 2.3431,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La basilique est gratuite et les marches du sommet offrent le plus beau panorama gratuit de Paris, idéal au coucher du soleil ou tôt le matin avant l'arrivée des groupes et des rabatteurs insistants aux bracelets d'amitié. Évitez la cohue de la place du Tertre et flânez dans les ruelles tranquilles derrière, autour de la rue de l'Abreuvoir et de la vigne. Prenez le funiculaire (un ticket de métro) pour monter si l'escalier vous rebute, et surveillez vos poches sur les marches bondées.",
    },
    {
      slug: "arc-de-triomphe",
      citySlug: "paris",
      name: "L'Arc de Triomphe et les Champs-Élysées",
      lat: 48.8738,
      lng: 2.295,
      kind: "viewpoint",
      needsBooking: true,
      tip: "La terrasse au sommet offre une vue superbe droit sur les Champs-Élysées et l'étoile aux douze avenues, et il faut un billet horodaté en ligne pour gravir les 284 marches. Rejoignez-la par le passage piéton souterrain depuis l'angle des Champs-Élysées, jamais en traversant le rond-point. Venez en fin d'après-midi pour la lumière dorée sur l'avenue, et descendez les Champs vers la Concorde plutôt que de les remonter.",
    },
    {
      slug: "sainte-chapelle",
      citySlug: "paris",
      name: "La Sainte-Chapelle",
      lat: 48.8554,
      lng: 2.345,
      kind: "sight",
      needsBooking: true,
      tip: "Cette chapelle royale du XIIIe siècle abrite quinze verrières vertigineuses, à voir de préférence par une matinée lumineuse quand la lumière s'y déverse. Réservez un billet horodaté en ligne, et prenez le billet combiné avec la Conciergerie voisine pour voir les deux en une visite. Elle se trouve dans un palais de justice en activité : il y a un contrôle de sécurité de type aéroport à l'entrée ; venez à l'ouverture de 9h pour devancer à la fois la file et les groupes en car.",
    },
    {
      slug: "versailles",
      citySlug: "paris",
      name: "Le château de Versailles",
      lat: 48.8049,
      lng: 2.1204,
      kind: "sight",
      needsBooking: true,
      tip: "Réservez une demi-journée à une journée entière : prenez le RER C jusqu'à Versailles Château Rive Gauche (environ 45 min, aller simple à peu près 3,65 EUR), et évitez le mardi, quand beaucoup de musées parisiens ferment et que Versailles est bondé. Réservez le billet Passeport avec un créneau horodaté pour le château en ligne et arrivez à l'ouverture de 9h ; la galerie des Glaces est la plus calme au tout début. Les vastes jardins sont gratuits sauf les jours de Grandes Eaux musicales : gardez du temps pour marcher ou louer un vélo ou une voiturette.",
    },
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      kind: "experience",
      needsBooking: false,
      tip: "Flânez dans les ruelles pour les boutiques, les galeries et la place des Vosges à arcades, la plus ancienne place ordonnancée de Paris, gratuite à parcourir. Venez un dimanche, quand une grande partie du quartier reste ouverte, contrairement au reste de la ville, et faites la file pour un falafel rue des Rosiers à midi. Faites un crochet par les cours gratuites de l'hôtel de Sully et du musée Carnavalet (collection permanente gratuite sur l'histoire de la ville) au passage.",
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Le Quartier latin",
      lat: 48.8489,
      lng: 2.3469,
      kind: "experience",
      needsBooking: false,
      tip: "Explorez les rues autour du Panthéon et de la Sorbonne pour les librairies, la boutique Shakespeare and Company au bord du fleuve, et les arènes romaines en ruine des Arènes de Lutèce, cachées près de la rue Monge (gratuit). Fuyez la touristique rue de la Huchette pour dîner et mangez une rue plus loin. Le marché matinal de la rue Mouffetard est le point fort local, à faire de préférence avant midi.",
    },
    {
      slug: "seine-cruise",
      citySlug: "paris",
      name: "Croisière sur la Seine",
      lat: 48.8606,
      lng: 2.2977,
      kind: "experience",
      needsBooking: false,
      tip: "Une heure de bateau glissant devant Notre-Dame, le Louvre et la tour Eiffel est le moyen le plus simple de relier les monuments et de reposer vos jambes, et c'est magique à la nuit tombée, quand tout est illuminé. Évitez les coûteuses croisières-dîners et prenez un départ classique des Bateaux-Mouches ou des Vedettes du Pont-Neuf pour environ 15 EUR. Embarquez au crépuscule pour la bascule du coucher de soleil aux lumières, et installez-vous sur le pont supérieur découvert.",
    },
    {
      slug: "luxembourg-gardens",
      citySlug: "paris",
      name: "Le jardin du Luxembourg",
      lat: 48.8462,
      lng: 2.3372,
      kind: "park",
      needsBooking: false,
      tip: "Le parc le plus élégant de la rive gauche est gratuit et fait pour un pique-nique ou une pause entre deux musées, avec ses chaises métalliques vertes à traîner jusqu'au bassin central où les enfants font naviguer des voiliers miniatures. C'est la halte parfaite entre Saint-Germain, Orsay et le Quartier latin, tous à quelques pas. Venez en milieu de matinée par une journée ensoleillée et attrapez une chaise tôt : elles partent vite à l'heure du déjeuner.",
    },
    {
      slug: "musee-rodin",
      citySlug: "paris",
      name: "Le musée Rodin",
      lat: 48.8553,
      lng: 2.3158,
      kind: "museum",
      needsBooking: false,
      tip: "L'hôtel particulier du sculpteur et sa roseraie abritent Le Penseur et La Porte de l'Enfer dans l'un des plus beaux écrins muséaux de la ville, près des Invalides. Un billet jardin seul est un moyen économique de voir les grands bronzes en plein air si vous manquez de temps ou de budget. Il est fermé le lundi ; venez par un bel après-midi et associez-le aux Invalides voisins et au tombeau de Napoléon.",
    },
    {
      slug: "pere-lachaise",
      citySlug: "paris",
      name: "Le cimetière du Père-Lachaise",
      lat: 48.8619,
      lng: 2.3934,
      kind: "sight",
      needsBooking: false,
      tip: "Le cimetière le plus célèbre de la ville est un dédale gratuit et vallonné d'allées pavées et de tombes monumentales, où reposent Jim Morrison, Oscar Wilde, Chopin et Édith Piaf. Prenez un plan gratuit à l'entrée ou téléchargez-en un, car les tombes sont vraiment difficiles à trouver parmi 70 000 sépultures. Entrez par la porte des Amandiers ou le métro Père-Lachaise, portez de vraies chaussures pour les pavés, et comptez au moins 90 minutes.",
    },
  ],

  itineraries: [
    {
      citySlug: "paris",
      days: 2,
      summary:
        "Deux jours à Paris, c'est un sprint entre les incontournables, et vous en sentirez le rythme, car la ville en réclame vraiment trois ou quatre. En 48 heures, vous pouvez faire la tour Eiffel, les Champs-Élysées et l'Arc de Triomphe, plus une croisière sur la Seine le premier jour, puis le Louvre, les îles, Notre-Dame, la Sainte-Chapelle et le Quartier latin le second. Ce qu'il faut couper : Montmartre, Versailles, Orsay et toute flânerie tranquille dans un parc ou en terrasse. Cela convient à un week-end ou à un premier aperçu avant de combiner Paris avec Amsterdam. Les points non négociables sont la réservation à l'avance du créneau du sommet de la tour Eiffel et d'une entrée horodatée au Louvre avant de partir, plus une réservation gratuite pour Notre-Dame, sans quoi vous perdrez dans les files des heures que vous n'avez pas. Installez-vous dans le Marais pour que les deux journées démarrent au centre et à pied, avec dîner et bars à deux pas du lit. Si un troisième jour se présente, ajoutez Montmartre et Orsay et ralentissez franchement le rythme.",
      stayNeighborhoodSlug: "le-marais",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La tour Eiffel, les Champs-Élysées et la Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Commencez par la tour Eiffel pour votre créneau du sommet réservé le matin, avant que les files et la foule ne s'accumulent au pied. Passez ensuite sur la terrasse du Trocadéro pour la photo classique de face de toute la tour, sac bien fermé dans ce haut lieu du pickpocket.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Marchez vers l'est jusqu'au musée Rodin, près des Invalides, où la roseraie abrite Le Penseur et La Porte de l'Enfer dans l'un des plus jolis écrins de la ville. Un billet jardin seul est un moyen rapide et économique de voir les grands bronzes si le temps presse.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Prenez le métro jusqu'à l'Arc de Triomphe et gravissez les 284 marches jusqu'à la terrasse pour la vue sur l'étoile aux douze avenues, en y accédant par le passage souterrain, jamais à travers la circulation. Descendez ensuite les Champs-Élysées vers la Concorde et les Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Embarquez pour une croisière sur la Seine au crépuscule près de la tour Eiffel ou du Pont-Neuf, pour le glissé du coucher de soleil aux lumières devant Notre-Dame et le Louvre. Installez-vous sur le pont supérieur découvert et prenez un départ classique d'une heure plutôt qu'un coûteux bateau-dîner.",
              durationMin: 75,
            },
            {
              text: "Rentrez dans le Marais pour dîner dans les ruelles autour de la place des Vosges, en réservant une table partout où l'adresse a un nom. Terminez par un verre dans l'un des bars tardifs du quartier, à quelques pas de votre hôtel.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Louvre, les îles et le Quartier latin",
          morning: [
            {
              poiSlug: "louvre",
              text: "Soyez au Louvre pour votre créneau réservé de 9h et filez droit sur la Joconde avant que le mur de téléphones ne se forme, puis faites le tour des peintures italiennes, de la Vénus de Milo et des joyaux de la Couronne. Entrez par le Carrousel ou la porte des Lions pour éviter la file de la pyramide.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Passez sur l'île de la Cité pour votre créneau horodaté à la Sainte-Chapelle, en gardant les quinze verrières pour la lumière vive de l'après-midi. Utilisez le billet combiné pour voir la Conciergerie voisine, et attendez-vous à un contrôle de sécurité à l'entrée du palais de justice.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Marchez jusqu'à Notre-Dame, rouverte en décembre 2024 avec son intérieur restauré, en utilisant votre créneau horodaté gratuit réservé pour éviter la longue file sans réservation. Faites ensuite le tour de l'extérieur et des arcs-boutants depuis le jardin en bord de fleuve, derrière l'édifice.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Traversez le fleuve vers le Quartier latin, en flânant dans les librairies et chez Shakespeare and Company avant le dîner. Mangez une rue plus loin que la touristique rue de la Huchette, et terminez par un verre autour du Panthéon.",
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
        "Trois jours, c'est une durée confortable pour une première visite et proche du point idéal pour Paris. Vous obtenez la tour Eiffel, les Champs-Élysées, l'Arc de Triomphe et une croisière sur la Seine le premier jour, le Louvre avec les îles, Notre-Dame et la Sainte-Chapelle le deuxième, puis une troisième journée Montmartre, Orsay et le Marais qui équilibre un village perché et la grande collection impressionniste. Vous mangez dans trois quartiers différents, casez à la fois une pause au parc et les musées qui comptent, et avancez encore à un rythme qui permet de s'asseoir en terrasse plutôt que de la dépasser au pas de course. Ce qui reste coupé, c'est l'excursion à Versailles, ce qu'ajoute précisément un quatrième jour. Cela convient aux primo-visiteurs, aux couples et à quiconque enchaîne ensuite sur Amsterdam. Logez à Saint-Germain : on rejoint à pied Orsay, le Louvre de l'autre côté du fleuve et le jardin du Luxembourg, et ses cafés en font une base élégante pour les soirées. Réservez à l'avance le sommet de la tour Eiffel, les créneaux du Louvre et d'Orsay, et une réservation gratuite pour Notre-Dame avant de partir.",
      stayNeighborhoodSlug: "saint-germain",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La tour Eiffel, les Champs-Élysées et la Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Commencez par la tour Eiffel pour votre créneau du sommet réservé, devant la foule, puis passez au Trocadéro pour la vue de face intégrale. Gardez votre sac fermé : le pied de la tour et la terrasse sont des terrains de choix pour les pickpockets.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Marchez jusqu'au musée Rodin, près des Invalides, pour Le Penseur et La Porte de l'Enfer au milieu des roses. Associez-le à un coup d'œil au dôme doré des Invalides, au-dessus du tombeau de Napoléon, juste à côté.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Métro jusqu'à l'Arc de Triomphe et montée à la terrasse pour la vue sur l'étoile des avenues, en empruntant le passage souterrain pour y accéder. Descendez les Champs-Élysées vers la Concorde et entrez dans le jardin des Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Prenez une croisière sur la Seine au crépuscule pour le glissé illuminé devant les monuments, en embarquant près du Pont-Neuf ou de la tour Eiffel. Choisissez un bateau classique d'une heure et installez-vous en haut pour le coucher de soleil.",
              durationMin: 75,
            },
            {
              text: "Rentrez à Saint-Germain pour dîner parmi les galeries et les cafés, en réservant à l'avance. Un dernier verre dans un lieu classique comme le Café de Flore ou un bar plus tranquille de la rive gauche clôt la soirée.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Louvre, les îles et la Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Soyez au Louvre pour votre créneau de 9h, en filant droit sur la Joconde avant la cohue, puis la Vénus de Milo et les galeries italiennes. Entrez par le Carrousel pour éviter la file de la pyramide, et fixez une heure de sortie ferme, sinon le musée avalera toute la journée.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Passez sur l'île de la Cité pour votre créneau à la Sainte-Chapelle, calé sur la lumière vive de l'après-midi à travers les quinze verrières. Utilisez le billet combiné pour la Conciergerie voisine, jadis prison de la Révolution.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Marchez jusqu'à Notre-Dame sur votre créneau réservé gratuit pour voir l'intérieur restauré après la réouverture de 2024 sans la longue file. Admirez l'extérieur et les arcs-boutants depuis le jardin à l'arrière, puis promenez-vous sur l'île Saint-Louis, plus tranquille, pour une glace.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Laissez-vous porter vers le Quartier latin pour la soirée, en furetant chez Shakespeare and Company et dans les rues de librairies autour de la Sorbonne. Mangez bien une rue à l'écart de l'axe touristique et terminez par un verre près du Panthéon.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, Orsay et le Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Montez tôt en métro jusqu'à Montmartre et grimpez aux marches du Sacré-Cœur pour le panorama gratuit avant l'arrivée des groupes et des rabatteurs. Flânez dans les ruelles tranquilles derrière la basilique, autour de la vigne et de la rue de l'Abreuvoir, et évitez la cohue de la place du Tertre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Prenez le métro jusqu'au musée d'Orsay pour votre créneau horodaté, en montant droit aux salles Monet, Renoir et Van Gogh du cinquième étage avant de redescendre. Profitez de la vue sur la ville à travers la grande horloge de la gare.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Traversez le fleuve vers le Marais pour la soirée, en flânant dans les boutiques et sur la place des Vosges à arcades tandis que les bars se remplissent. Faites la file pour un falafel rue des Rosiers ou réservez un bistrot, puis plongez dans la scène nocturne du quartier.",
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
        "Quatre jours, c'est le point idéal pour une première visite à Paris, ce qui transforme le sprint touristique en véritables vacances. Les jours un à trois couvrent l'essentiel sans se presser : la tour Eiffel, les Champs-Élysées et une croisière sur la Seine ; le Louvre, les îles, Notre-Dame et la Sainte-Chapelle ; puis Montmartre, le musée d'Orsay et le Marais. Le quatrième jour fait office de soupape : une excursion à Versailles, au château et à ses vastes jardins, accessible en 45 minutes par le RER C et à commencer de préférence à l'ouverture de 9h, tous les jours sauf le mardi. Cette durée convient aux voyageurs qui détestent la marche forcée, aux couples et à quiconque a des vols qui encadrent maladroitement le séjour. Pour quatre jours, nous conseillons de loger dans le Quartier latin : central et accessible à pied des îles et d'Orsay, il offre des lits plus avantageux qu'à Saint-Germain, juste à côté, et se trouve sur la ligne du RER C, direct vers Versailles. Au-delà de quatre jours, ajoutez une matinée musée Rodin et Invalides ou enchaînez sur Amsterdam en train rapide en environ trois heures et demie. Réservez la tour Eiffel, le Louvre, Orsay et le Passeport de Versailles bien à l'avance.",
      stayNeighborhoodSlug: "latin-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La tour Eiffel, les Champs-Élysées et la Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Commencez par la tour Eiffel pour votre créneau du sommet réservé avant les files, puis passez au Trocadéro pour la photo de face. Gardez les sacs fermés dans ce haut lieu du pickpocket.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Marchez jusqu'au musée Rodin pour Le Penseur au milieu des roses, et jetez un œil au dôme des Invalides à côté. Un billet jardin est une option rapide si vous voulez continuer à avancer.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Métro jusqu'à l'Arc de Triomphe et montée à la terrasse pour la vue sur les avenues, accessible par le passage souterrain. Descendez les Champs-Élysées jusqu'à la Concorde et traversez les Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Prenez une croisière sur la Seine au crépuscule pour les monuments illuminés, en embarquant près du Pont-Neuf ou de la tour Eiffel et en vous installant sur le pont découvert. Restez sur un bateau classique d'une heure plutôt qu'une croisière-dîner.",
              durationMin: 75,
            },
            {
              text: "Dîner de retour dans le Quartier latin, en prenant vos marques dans le quartier que vous appelez maison. Mangez une rue à l'écart de l'axe touristique et terminez par un verre autour du Panthéon.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Louvre, les îles et la Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Soyez au Louvre pour votre créneau de 9h et atteignez la Joconde avant la cohue, puis la Vénus de Milo et les salles italiennes. Entrez par le Carrousel et fixez une heure de sortie pour que le musée n'engloutisse pas toute la journée.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Passez sur l'île de la Cité pour votre créneau à la Sainte-Chapelle en pleine lumière de l'après-midi, quand les verrières s'embrasent. Utilisez le billet combiné pour la Conciergerie voisine.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Marchez jusqu'à Notre-Dame sur votre créneau réservé gratuit pour voir l'intérieur restauré sans la file, puis admirez les arcs-boutants depuis le jardin à l'arrière. Promenez-vous sur l'île Saint-Louis pour une glace Berthillon.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Flânez sur les quais de la rive gauche à la tombée du jour, quand les bouquinistes remballent, puis dînez dans le Quartier latin près de votre base. Réservez n'importe quelle bonne adresse, et fuyez les pièges à menus au néon le long du fleuve.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, Orsay et le Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Montez tôt à Montmartre pour le panorama gratuit du Sacré-Cœur avant les rabatteurs et les groupes, puis flânez dans les ruelles tranquilles derrière, autour de la vigne. Prenez le funiculaire avec un ticket de métro si les escaliers semblent raides, et surveillez vos poches sur les marches bondées.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Métro jusqu'au musée d'Orsay pour votre créneau horodaté, en montant droit aux impressionnistes du cinquième étage avant de redescendre. Ne manquez pas la vue à travers la grande horloge de la gare.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Passez dans le Marais pour la soirée, en furetant dans les boutiques et sur la place des Vosges à arcades tandis que les bars se remplissent. Un falafel rue des Rosiers ou un bistrot réservé, puis un verre dans la scène tardive du quartier.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Excursion à Versailles",
          morning: [
            {
              poiSlug: "versailles",
              text: "Prenez le RER C jusqu'à Versailles Château Rive Gauche, environ 45 minutes, en visant l'ouverture du château à 9h et en évitant le mardi. Utilisez votre billet Passeport réservé avec un créneau horodaté pour le château et commencez par la galerie des Glaces tant qu'elle est la plus calme, puis les Grands Appartements.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "versailles",
              text: "Passez l'après-midi dans les vastes jardins, gratuits sauf les jours de Grandes Eaux musicales, en marchant ou en louant un vélo ou une voiturette jusqu'au Grand Canal, aux Trianon et au hameau rustique de Marie-Antoinette. Prévoyez un pique-nique ou déjeunez près du domaine, car les cafés du château sont chers et bondés.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Reprenez le RER C vers le centre de Paris en début de soirée, fatigué mais quitte des grands incontournables. Réservez un dîner d'adieu dans le Quartier latin ou à Saint-Germain, en vous faisant plaisir pour votre dernier repas parisien.",
              durationMin: 150,
            },
            {
              text: "Terminez par une lente promenade le long de la Seine pour voir Notre-Dame et les ponts illuminés, à deux pas de votre base. Aucun trajet de retour à prévoir, ce qui est tout l'intérêt de loger au centre pour quatre jours.",
              durationMin: 60,
            },
          ],
        },
      ],
    },
  ],
};

export default parisFr;

import type { CityData } from "../types";

const amsterdamIt: CityData = {
  city: {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Paesi Bassi",
    countrySlug: "netherlands",
    lat: 52.3676,
    lng: 4.9041,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "AMS",
    airportToCenter:
      "Treno diretto da Schiphol ad Amsterdam Centraal, circa 17 minuti per circa 5 EUR, ogni pochi minuti dal primo mattino a tarda notte. Comprate un biglietto dalle macchinette gialle o passate una carta contactless ai tornelli; saltate i taxi, che costano dai 40 ai 50 EUR per lo stesso tragitto.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Il mese più freddo e grigio con massime intorno ai 6C, giornate corte e piogge frequenti, quindi pianificate giornate ricche di musei. La folla è scarsa e le tariffe alberghiere toccano il minimo annuale una volta passato il Capodanno, ma il percorso in barca illuminato dell'Amsterdam Light Festival prosegue fino a metà gennaio ed è l'unico motivo per affrontare il buio.",
      2: "Ancora freddo e umido intorno ai 7C, e il mese pieno più tranquillo per attrazioni e tariffe. Prenotate la Casa di Anna Frank e il Van Gogh Museum e li attraverserete con spazio per respirare; portate un vero impermeabile invece dell'ombrello, che il vento dei canali distrugge.",
      3: "Le massime salgono verso i 10C e comincia la stagione dei tulipani: i giardini di Keukenhof aprono nella seconda metà del mese e restano fino a metà maggio. La folla è ancora moderata, ma i primi weekend a Keukenhof e nei campi di bulbi si riempiono in fretta, quindi prenotate in anticipo i trasporti per la gita.",
      4: "Primavera vera intorno ai 13C, con Keukenhof in piena fioritura e i campi di bulbi a sud di Haarlem colorati. Il King's Day del 27 aprile trasforma tutta la città in una festa arancione di strada e in una flottiglia sui canali; è spettacolare ma dovete prenotare l'alloggio con mesi di anticipo e aspettarvi tutto il resto affollato.",
      5: "Uno dei mesi migliori, con massime vicine ai 17C, lunghe serate luminose e Keukenhof aperto fino a metà mese. La folla cresce costantemente e le tariffe alberghiere raggiungono i massimi di mezza stagione, quindi bloccate le camere presto e iniziate all'apertura le visite alla Casa di Anna Frank e ai musei.",
      6: "Caldo intorno ai 20C con le giornate più lunghe dell'anno e i dehors in pieno fermento. I numeri turistici sono alti ma non ancora al picco di agosto; le serate lungo i canali sono la ricompensa, e i festival all'aperto iniziano a riempire il calendario del teatro open-air del Vondelpark.",
      7: "Alta stagione: giornate di 22C, musei affollati e le tariffe più alte dell'estate. Prenotate con settimane di anticipo ogni attrazione a ingresso a orario, muovetevi in tram invece di contendervi i taxi, e riservate la cintura dei canali al primo mattino o dopo le 20, quando la folla si dirada.",
      8: "Lo stesso caldo e la stessa folla di luglio, più il Pride: la celebre Canal Parade di barche addobbate naviga il Prinsengracht il primo sabato, richiamando folle enormi sull'acqua. Prenotate con largo anticipo per quel weekend e aspettatevi che gli hotel centrali vadano tutto esaurito.",
      9: "Massime intorno ai 19C, folla in netto calo dopo la prima settimana e il clima più mite della mezza stagione. È l'alternativa intelligente all'estate: i prezzi si allentano, i dehors funzionano ancora nelle giornate calde e i grandi musei sono più tranquilli.",
      10: "Più fresco intorno ai 14C con veri colori d'autunno nel Vondelpark e più pioggia di ritorno. I numeri turistici calano e le tariffe alberghiere seguono; un mese di buon valore se accettate che il tempo all'aperto dipenda dal meteo e che i musei sostengano il viaggio.",
      11: "Grigio, umido e freddo con massime vicine ai 9C, il tratto più tranquillo prima delle feste. Le tariffe sono basse e le code corte; le celebrazioni per l'arrivo di Sinterklaas a metà mese e le prime luci natalizie aggiungono un po' di atmosfera a giornate altrimenti buie.",
      12: "Freddo intorno ai 6C con giornate corte e pioviggine frequente, ma l'Amsterdam Light Festival lancia il suo percorso di arte illuminata sui canali a fine novembre e prosegue fino a gennaio. I mercatini di Natale e i ponti illuminati risollevano l'umore; prenotate presto la Casa di Anna Frank e i musei, poiché la settimana delle feste vede un picco di visitatori.",
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
    tagline: "Cinque anelli molto diversi attorno a un'unica cintura di canali, e il vostro indirizzo decide quale Amsterdam vivrete.",
    heroIntro:
      "Il centro di Amsterdam si attraversa in mezz'ora a piedi, ma la metà in cui dormite decide comunque tutta la visita: vista da cartolina sui canali e prezzi da turisti, oppure un quartiere più tranquillo con un tragitto in tram in più. Questa guida mette a confronto cinque basi molto diverse, dal nucleo storico affollato al verde quartiere ovest, e indica dove ogni tipo di viaggiatore dorme davvero meglio. Leggete i quartieri qui sotto prima di prenotare, perché in una città così compatta l'indirizzo conta più dell'itinerario.",
    accent: { from: "#2F6E8F", to: "#C46A3A", ink: "#1E3E52" },
    neighborhoodSlugs: ["centrum", "jordaan", "de-pijp", "oud-west", "oost"],
    nearbyCitySlugs: ["bruges"],
  },

  neighborhoods: [
    {
      slug: "centrum",
      citySlug: "amsterdam",
      name: "Centrum (Città Vecchia)",
      lat: 52.3731,
      lng: 4.8922,
      bestFor: ["first-time", "nightlife"],
      vibe: "Dam Square e le strade più antiche dei canali occupano il cuore di questo quartiere, affollato di visitatori fin dalla colazione e rumoroso dopo il tramonto vicino al quartiere a luci rosse. Qui niente è a più di dieci minuti a piedi, ed è tutto lo scambio: rinunciate alla tranquillità e pagate il sovrapprezzo di posizione in cambio di non dover mai prendere un tram. Alloggiate qui se il viaggio è breve e ogni minuto risparmiato conta più di una buona notte di sonno.",
      pros: [
        "Ogni attrazione principale, da Dam Square alle Nove Vie, si raggiunge a piedi e non in tram",
        "La più ampia scelta di hotel della città, con tutte le linee di tram che passano di qui",
        "Una visita di due giorni non richiede alcun trasporto pubblico",
      ],
      cons: [
        "I ristoranti sulle vie principali fanno pagare prezzi da turisti per cibo nella media",
        "Addii al celibato e rumore notturno si concentrano attorno al quartiere a luci rosse",
        "Le camere costano decisamente di più rispetto allo stesso standard a De Pijp o Oud-West",
      ],
    },
    {
      slug: "jordaan",
      citySlug: "amsterdam",
      name: "Jordaan",
      lat: 52.3745,
      lng: 4.8799,
      bestFor: ["romantic", "first-time", "local"],
      vibe: "Canali stretti, facciate a timpano e giardini nascosti nei cortili fanno di questo il quartiere di ogni cartolina di Amsterdam, eppure le strade a misura d'uomo restano più tranquille della Città Vecchia una volta che i visitatori di giornata se ne sono andati. Negozi indipendenti e brown cafe dove la gente del posto beve ancora gli danno un'aria vissuta che il centro ha in gran parte perso. Alloggiate qui se la Casa di Anna Frank e i canali occidentali contano più di qualche minuto risparmiato a ogni passeggiata, e non vi dispiace pagare per la vista.",
      pros: [
        "Le migliori viste sui canali della città, con la Casa di Anna Frank a due passi",
        "Un'ottima sequenza di brown cafe, piccole gallerie e un mercato del sabato",
        "Residenziale e tranquillo dopo il tramonto, ma comunque vicino a tutto",
      ],
      cons: [
        "Le camere costano più che nei quartieri meridionali o occidentali",
        "Gli hotel nelle case sui canali sono spesso stretti, con scale ripide e niente ascensore",
        "Pochi grandi supermercati e poca ristorazione economica nelle vicinanze",
      ],
    },
    {
      slug: "de-pijp",
      citySlug: "amsterdam",
      name: "De Pijp",
      lat: 52.3547,
      lng: 4.8925,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "A sud del centro, questa griglia densa è cresciuta attorno al mercato quotidiano Albert Cuyp e va ancora avanti sull'appetito dei giovani amsterdammer che qui ci vivono davvero. Ristoranti e bar costano meno del centro senza rinunciare alla qualità, e il Quartiere dei Musei è a soli dieci minuti a piedi o una fermata di tram. Alloggiate qui se mangiare e bere bene conta quanto le attrazioni, e siete felici di scambiare la vista sui canali con un miglior rapporto qualità-prezzo.",
      pros: [
        "La scena gastronomica e dei bar più densa e conveniente della città",
        "Il mercato Albert Cuyp e il Sarphatipark proprio fuori dalla porta",
        "A due passi dal Rijksmuseum e dal Quartiere dei Musei",
      ],
      cons: [
        "Nessuna attrazione della cintura dei canali all'interno del quartiere stesso",
        "Le vie del mercato e dei bar diventano rumorose e affollate nelle ore di punta",
        "La popolarità ha fatto salire le tariffe delle camere rispetto ai vecchi prezzi d'occasione",
      ],
    },
    {
      slug: "oud-west",
      citySlug: "amsterdam",
      name: "Oud-West",
      lat: 52.3639,
      lng: 4.8686,
      bestFor: ["local", "family", "budget"],
      vibe: "A ovest del Vondelpark, strade alberate e il vivace mercato gastronomico Foodhallen danno il ritmo a questo quartiere, dove famiglie e professionisti ci vivono davvero invece di limitarsi a passarci. Questo gli dà un'aria stabile e poco turistica, con tariffe ben sotto quelle della cintura dei canali, mentre i tram coprono i dieci minuti fino al centro. Alloggiate qui se volete il parco e un buon pasto sull'uscio di casa e non avete bisogno di stare dentro la cartolina.",
      pros: [
        "Il Vondelpark e la Foodhallen sono entrambi a pochi minuti a piedi",
        "Strade più calme e a misura di famiglia, a prezzi più bassi",
        "Tram diretti verso il centro e il Quartiere dei Musei",
      ],
      cons: [
        "Ogni attrazione principale richiede un breve spostamento, anche se veloce",
        "Nessun canale o architettura simbolo all'interno del quartiere",
        "Vita notturna più tranquilla rispetto a De Pijp o al centro",
      ],
    },
    {
      slug: "oost",
      citySlug: "amsterdam",
      name: "Oost (Est)",
      lat: 52.3603,
      lng: 4.9268,
      bestFor: ["local", "budget", "family"],
      vibe: "A est del centro, attorno all'Oosterpark, isolati ottocenteschi ristrutturati incontrano una delle scene gastronomiche multiculturali più forti della città, in un quartiere ancora in ascesa. È la scelta di valore di questa lista: strade verdi e tranquille, veri ristoranti di quartiere e camere a prezzi ben sotto quelli del centro, con metro e tram che coprono i dieci-quindici minuti verso il centro città. Alloggiate qui se il budget conta più della vicinanza e una scena gastronomica autentica batte la vista sui canali.",
      pros: [
        "Le camere più economiche tra tutti i quartieri semi-centrali",
        "Una scena gastronomica davvero varia con poco sovrapprezzo turistico",
        "Oosterpark, lo zoo Artis e il Tropenmuseum tutti nelle vicinanze",
      ],
      cons: [
        "Il più lontano di questi quartieri dalle attrazioni della cintura dei canali",
        "Abbastanza esteso da farvi affidare al tram o alla metro più che ai piedi",
        "Meno attrazioni simbolo all'interno del quartiere stesso",
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
      tip: "Prenotate online un turno a orario e prendete il primo delle 9, quando la Galleria d'Onore con Vermeer e l'enorme Ronda di notte di Rembrandt è ancora poco affollata. Il giardino e il passaggio sotto l'edificio sono gratuiti da attraversare, e la coda del caffè del museo è peggiore intorno alle 13, quindi mangiate presto o tardi.",
    },
    {
      slug: "van-gogh-museum",
      citySlug: "amsterdam",
      name: "Van Gogh Museum",
      lat: 52.3584,
      lng: 4.8811,
      kind: "museum",
      needsBooking: true,
      tip: "L'ingresso è solo a turno a orario e non c'è biglietteria per chi si presenta, quindi prenotate online prima di arrivare e scegliete un turno proprio all'apertura delle 9 o dopo le 15 per schivare la calca di metà giornata. Sta a due minuti dal Rijksmuseum, quindi abbinate i due in un'unica mattinata al Quartiere dei Musei invece di dividerli in giorni diversi.",
    },
    {
      slug: "anne-frank-house",
      citySlug: "amsterdam",
      name: "Casa di Anna Frank",
      lat: 52.3752,
      lng: 4.884,
      kind: "museum",
      needsBooking: true,
      tip: "È questa quella attorno a cui pianificare l'intero viaggio: tutti i biglietti si vendono solo online, rilasciati esattamente sei settimane prima a un orario preciso, e i turni si esauriscono in pochi minuti. Non c'è alcuna fila per chi si presenta, quindi impostate un promemoria in calendario per il giorno del rilascio e comprate nell'istante in cui escono. Una volta dentro, il percorso a orario attraverso l'alloggio segreto dura circa un'ora.",
    },
    {
      slug: "canal-cruise",
      citySlug: "amsterdam",
      name: "Crociera sui canali",
      lat: 52.3644,
      lng: 4.8916,
      kind: "experience",
      needsBooking: false,
      tip: "Saltate le grandi barche col tetto di vetro vicino a Centraal e scegliete una piccola barca elettrica aperta dai pontili del Rijksmuseum o della Casa di Anna Frank per un'ora più tranquilla sull'acqua. Andateci verso il tramonto per la migliore luce sulle case a timpano, e prenotate online una partenza precisa in estate, quando i popolari operatori di piccole barche si riempiono.",
    },
    {
      slug: "vondelpark",
      citySlug: "amsterdam",
      name: "Vondelpark",
      lat: 52.3579,
      lng: 4.8686,
      kind: "park",
      needsBooking: false,
      tip: "Il polmone verde centrale della città, gratuito e aperto a tutte le ore, si gode al meglio entrando dal lato del Quartiere dei Musei e camminando verso ovest con un caffè. Nei weekend estivi il teatro all'aperto vicino al centro propone concerti e spettacoli gratuiti; controllate il programma, perché è la migliore serata gratuita di Amsterdam quando il tempo regge.",
    },
    {
      slug: "jordaan-canals",
      citySlug: "amsterdam",
      name: "Passeggiata sui canali del Jordaan",
      lat: 52.374,
      lng: 4.881,
      kind: "sight",
      needsBooking: false,
      tip: "Percorrete a piedi il Prinsengracht, il Bloemgracht e il piccolo Egelantiersgracht senza un percorso fisso; è il tratto più bello e meno commerciale della cintura dei canali. Venite prima delle 10 o dopo le 19 per foto senza folla, e deviate nel gratuito cortile Karthuizerhof, un tranquillo giardino di ospizio davanti a cui la maggior parte dei visitatori passa dritto.",
    },
    {
      slug: "albert-cuyp-market",
      citySlug: "amsterdam",
      name: "Mercato Albert Cuyp",
      lat: 52.3556,
      lng: 4.8916,
      kind: "food",
      needsBooking: false,
      tip: "Il più grande mercato di strada quotidiano dei Paesi Bassi, aperto dal lunedì al sabato all'incirca dalle 9 alle 17 e chiuso la domenica, quindi pianificate di conseguenza. Venite per uno stroopwafel pressato al momento e per gli assaggi di formaggio olandese più che per i souvenir, e andateci prima di mezzogiorno il sabato, il momento più affollato, se volete spazio per muovervi.",
    },
    {
      slug: "begijnhof",
      citySlug: "amsterdam",
      name: "Begijnhof",
      lat: 52.3691,
      lng: 4.8899,
      kind: "sight",
      needsBooking: false,
      tip: "Un cortile medievale silenzioso di ospizi nascosto dietro una porta senza insegna accanto alla piazza Spui, gratuito e uno dei luoghi più antichi della città. Tenete la voce bassa, poiché la gente ci abita ancora, e cercate la casa di legno nera al numero 34, la più antica casa in legno sopravvissuta di Amsterdam. Aperto solo in orario diurno.",
    },
    {
      slug: "dam-square",
      citySlug: "amsterdam",
      name: "Dam Square e Palazzo Reale",
      lat: 52.3731,
      lng: 4.8926,
      kind: "sight",
      needsBooking: false,
      tip: "Trattate la piazza stessa come un passaggio a piedi di 15 minuti per il Monumento Nazionale e la facciata del palazzo, più che come una meta. L'interno del Palazzo Reale vale il biglietto solo se il Re non lo sta usando, quindi controllate il sito per le chiusure prima di pagare; altrimenti fotografate la facciata e proseguite verso le vicine Nove Vie.",
    },
    {
      slug: "bloemenmarkt",
      citySlug: "amsterdam",
      name: "Mercato galleggiante dei fiori Bloemenmarkt",
      lat: 52.3667,
      lng: 4.8918,
      kind: "sight",
      needsBooking: false,
      tip: "Il mercato galleggiante dei fiori sul Singel è una sosta di cinque minuti, quindi inseritelo in una passeggiata tra Dam Square e il Rijksmuseum invece di farci un viaggio apposta. I bulbi di tulipano venduti qui sono certificati per l'esportazione se volete portarne alcuni a casa; controllate prima le regole d'importazione del vostro Paese, poiché molti richiedono l'etichetta fitosanitaria che le bancarelle forniscono.",
    },
    {
      slug: "nine-streets",
      citySlug: "amsterdam",
      name: "Le Nove Vie (De 9 Straatjes)",
      lat: 52.369,
      lng: 4.8859,
      kind: "sight",
      needsBooking: false,
      tip: "Nove brevi vie trasversali che collegano i canali principali tra il Jordaan e Dam, piene di boutique indipendenti, negozi vintage e piccoli caffè. È la zona migliore per un giro senza fretta e un pranzo in una casa sul canale; venite in un giorno feriale per evitare la calca dello shopping del weekend, e notate che la maggior parte dei negozi indipendenti apre tardi, verso le 11.",
    },
    {
      slug: "foodhallen",
      citySlug: "amsterdam",
      name: "Foodhallen",
      lat: 52.3665,
      lng: 4.8697,
      kind: "food",
      needsBooking: false,
      tip: "Un mercato gastronomico coperto in un deposito di tram riconvertito a Oud-West, con un paio di dozzine di bancarelle sotto un unico tetto, ideale in una giornata di pioggia o per un gruppo che non riesce a mettersi d'accordo. Si riempie e diventa rumoroso dalle 19 nei weekend, quindi arrivate entro le 18 per un tavolo, e pagate con carta, poiché la maggior parte delle bancarelle non accetta contanti.",
    },
    {
      slug: "adam-lookout",
      citySlug: "amsterdam",
      name: "A'DAM Lookout",
      lat: 52.3841,
      lng: 4.9008,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Un punto panoramico sul tetto oltre il fiume IJ con l'altalena più alta d'Europa, raggiunto da un traghetto gratuito che parte proprio dietro la stazione Centraal ogni pochi minuti e impiega circa tre minuti. Prenotate online il turno dell'altalena per saltare l'attesa, andateci verso il tramonto per la migliore luce sulla città, e ricordate che il traghetto va tutta la notte se vi fermate per un drink in cima.",
    },
    {
      slug: "heineken-experience",
      citySlug: "amsterdam",
      name: "Heineken Experience",
      lat: 52.3577,
      lng: 4.8916,
      kind: "experience",
      needsBooking: true,
      tip: "Un tour del marchio in autonomia nella vecchia fabbrica di birra vicino a De Pijp, meglio prenotarlo online per uno sconto sul prezzo al cancello e un orario d'ingresso fisso che salta la coda. Prendete il turno più mattutino per evitare le ondate pomeridiane di scolaresche e gruppi di addii al celibato, e sappiate che è più marketing che birrificio in funzione, quindi trattatelo come un'ora di svago più che come un serio tour della birra.",
    },
  ],

  itineraries: [
    {
      citySlug: "amsterdam",
      days: 2,
      summary:
        "Due giorni bastano per le attrazioni principali di Amsterdam se prenotate in anticipo e alloggiate centrali, ma sfiorerete soltanto i quartieri che rendono la città degna di un ritorno. Il centro è compatto: la cintura dei canali, il Quartiere dei Musei e il Jordaan stanno entro una passeggiata di 25 minuti l'uno dall'altro, quindi un piano serrato copre il Rijksmuseum, il Van Gogh Museum e la Casa di Anna Frank più una passeggiata sui canali senza molti trasporti. Basatevi nel Centrum così entrambe le mattine iniziano a piedi. La struttura che funziona è un tema al giorno: il Quartiere dei Musei e il Vondelpark il primo giorno, la cintura dei canali, il Jordaan e la Casa di Anna Frank il secondo. Prenotate tre cose prima di arrivare, perché i biglietti sono l'unica vera minaccia a una visita di 48 ore: la Casa di Anna Frank nell'istante in cui i suoi turni escono sei settimane prima, e i turni a orario per il Van Gogh Museum e il Rijksmuseum. Ciò che sacrificate è De Pijp, i mercati e ogni serata lenta lungo i canali, che è esattamente ciò che compra un terzo giorno.",
      stayNeighborhoodSlug: "centrum",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Quartiere dei Musei e Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Iniziate al Rijksmuseum con un turno prenotato delle 9 e andate dritti alla Galleria d'Onore per vedere la Ronda di notte e i Vermeer prima che le sale si riempiano. Dategli due ore e non provate a vedere tutto.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Camminate due minuti attraverso il Museumplein fino al Van Gogh Museum per il vostro turno a orario. La collezione segue un ordine cronologico, quindi seguite i piani in ordine per vedere il suo stile cambiare.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Pranzate sul Museumplein o nelle vicinanze, poi curiosate nel giardino di sculture gratuito dietro il Rijksmuseum e le lettere I amsterdam per la foto classica.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Entrate nel Vondelpark dal lato del Quartiere dei Musei e percorretelo per intero con un caffè, fermandovi allo stagno e al teatro all'aperto. È gratuito ed è il modo migliore per ricaricarsi dopo due musei.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Fate una crociera sui canali con una piccola barca elettrica aperta verso il tramonto dal pontile del Rijksmuseum, evitando le grandi barche col tetto di vetro vicino a Centraal. Un'ora sull'acqua vi inquadra l'intera cintura dei canali.",
              durationMin: 75,
            },
            {
              text: "Cena in centro fuori dalle vie turistiche principali; camminate un isolato indietro da Dam Square o dal Leidseplein e prezzi e qualità migliorano entrambi nettamente.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Cintura dei canali, il Jordaan e Anna Frank",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Presentatevi al vostro turno prenotato alla Casa di Anna Frank; non c'è opzione per chi si presenta, quindi questo biglietto andava comprato il giorno del rilascio, sei settimane prima. Il percorso a orario attraverso l'alloggio segreto dura circa un'ora e colpisce più forte presto nella giornata.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Uscite dritti nel Jordaan e percorrete il Prinsengracht, il Bloemgracht e l'Egelantiersgracht senza un percorso fisso, deviando nel gratuito cortile di ospizio Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Passate alle Nove Vie per un pranzo in una casa sul canale e un giro senza fretta dei negozi indipendenti tra i canali principali. La maggior parte apre verso le 11, quindi il primo pomeriggio è il momento perfetto.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Sgusciate attraverso la porta senza insegna accanto allo Spui nel silenzioso cortile Begijnhof, poi cercate la casa di legno nera al numero 34, la più antica della città. Tenete la voce bassa; la gente ci abita ancora.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Attraversate Dam Square per la facciata del Palazzo Reale e il Monumento Nazionale, trattandola come un passaggio di 15 minuti più che come una sosta, poi fate un giro davanti alle bancarelle di fiori del Bloemenmarkt sul Singel.",
              durationMin: 45,
            },
            {
              text: "Concludete con un drink in un brown cafe del Jordaan, di quelli con la sabbia sul pavimento e la gente del posto al bancone, per la serata più amsterdamese che il centro offre.",
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
        "Tre giorni sono la giusta quantità di tempo per Amsterdam: abbastanza per i tre grandi musei e la cintura dei canali a un ritmo umano, più un giorno che appartiene ai quartieri invece che alla lista di cose da spuntare. Due giorni vi costringono a correre il Quartiere dei Musei e i canali di seguito; il terzo giorno aggiunge De Pijp, il mercato Albert Cuyp e una vista dall'alto oltre l'IJ, con tempo per sedersi a un caffè senza guardare l'orologio. Alloggiate nel Jordaan, il quartiere centrale più bello e calmo, così la Casa di Anna Frank e i canali occidentali sono sull'uscio di casa e le serate restano tranquille. La forma del piano: il Quartiere dei Musei e il Vondelpark il primo giorno, la cintura dei canali e il Jordaan il secondo, De Pijp e la sponda nord il terzo. Prenotate tre cose online prima dell'arrivo: la Casa di Anna Frank nell'istante in cui i suoi turni escono sei settimane prima, e gli ingressi a orario per il Van Gogh Museum e il Rijksmuseum. Tutto il resto ripaga il presentarsi presto e il muoversi in tram invece che in taxi.",
      stayNeighborhoodSlug: "jordaan",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Quartiere dei Musei e Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Dalla vostra base nel Jordaan, scendete in tram fino al Rijksmuseum per un turno delle 9 e puntate dritti alla Galleria d'Onore e alla Ronda di notte prima che la folla cresca.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Attraversate il Museumplein fino al Van Gogh Museum per il vostro ingresso a orario e seguite i piani in ordine cronologico per vedere l'opera trasformarsi.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Pranzate vicino al Museumplein, poi percorrete il giardino di sculture gratuito dietro il Rijksmuseum e fotografate le lettere I amsterdam.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Percorrete il Vondelpark per intero dall'estremità del Quartiere dei Musei, fermandovi al teatro all'aperto, che propone spettacoli gratuiti nei weekend estivi. È il miglior pomeriggio gratuito della città.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Fate una crociera con una piccola barca elettrica aperta al tramonto per la migliore luce sulle case a timpano, prenotando una partenza in anticipo in estate quando i buoni operatori vanno esauriti.",
              durationMin: 75,
            },
            {
              text: "Cena di nuovo nel Jordaan in un piccolo ristorante lungo il canale, poi un ultimo drink in un brown cafe dove beve la gente del posto.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Cintura dei canali e il Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Camminate fino al vostro turno prenotato alla Casa di Anna Frank; non c'è fila per chi si presenta, quindi andava comprato il giorno del rilascio, sei settimane prima. Il percorso a orario attraverso l'alloggio dura circa un'ora.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Esplorate a piedi il vostro quartiere: il Prinsengracht, il Bloemgracht e l'Egelantiersgracht, più il tranquillo cortile Karthuizerhof che la maggior parte dei visitatori si perde.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Passate alle Nove Vie per un pranzo in una casa sul canale e un giro dei negozi indipendenti. I giorni feriali sono molto più calmi della calca dello shopping del weekend.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Infilatevi attraverso la porta senza insegna accanto allo Spui nel cortile Begijnhof e trovate la casa di legno nera al numero 34, la più antica di Amsterdam.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Passate per Dam Square per il Palazzo Reale e il Monumento Nazionale, poi percorrete il Singel davanti alle bancarelle galleggianti dei fiori del Bloemenmarkt mentre chiudono.",
              durationMin: 60,
            },
            {
              text: "Cena in centro a un isolato dalle vie principali, poi una camminata lenta di ritorno al Jordaan lungo il Prinsengracht illuminato dai lampioni, la cintura dei canali al suo meglio dopo il buio.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, mercati e la sponda nord",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Andate in tram a De Pijp per il mercato Albert Cuyp prima di mezzogiorno, quando è più vivace ma ancora percorribile. Prendete uno stroopwafel pressato al momento e pascolate tra le bancarelle di formaggio e cibo invece che tra i souvenir.",
              durationMin: 90,
            },
            {
              text: "Girate verso sud nel piccolo Sarphatipark e nelle vie laterali costellate di caffè di De Pijp, il quartiere dove i giovani di Amsterdam mangiano e bevono davvero.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "heineken-experience",
              text: "Fate la Heineken Experience vicina con un turno prenotato se volete il tour del marchio, trattandolo come un'ora di svago più che come una seria visita al birrificio; altrimenti spendete il tempo in altri caffè di De Pijp.",
              durationMin: 105,
            },
            {
              text: "Andate in tram a Centraal e prendete il traghetto gratuito di tre minuti da dietro la stazione attraverso l'IJ fino ad Amsterdam Noord.",
              durationMin: 30,
            },
          ],
          evening: [
            {
              poiSlug: "adam-lookout",
              text: "Salite con l'ascensore all'A'DAM Lookout per la vista dall'alto sulla città verso il tramonto, e prendete l'altalena giù dal tetto se avete testa per le altezze. Prenotate il turno dell'altalena in anticipo per saltare l'attesa.",
              durationMin: 90,
            },
            {
              text: "Cenate sul lungomare di Noord guardando lo skyline, poi prendete il traghetto di ritorno; va tutta la notte, quindi non c'è fretta.",
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
        "Quattro giorni sono più che sufficienti per le attrazioni di Amsterdam, ed è proprio questo il punto: il quarto giorno trasforma una corsa ai musei in un vero viaggio. Dal primo al terzo giorno coprite il Quartiere dei Musei, la cintura dei canali, il Jordaan e De Pijp a un ritmo rilassato; il quarto giorno è vostro, per una lenta giornata locale nei quartieri orientali o una gita di un giorno ai mulini di Zaanse Schans o a Haarlem, entrambe a meno di 30 minuti di treno. Con tutto questo tempo, saltate il centro affollato e alloggiate a De Pijp, a dieci minuti dal Quartiere dei Musei, più economico della cintura dei canali e sede del miglior cibo e della miglior vita notturna della città per rapporto qualità-prezzo. La logica di un tema al giorno vale ancora: tenete insieme i due grandi musei e il Vondelpark, tenete insieme i canali e il Jordaan, e non zigzagate per la città. Prenotate la Casa di Anna Frank il giorno in cui i suoi turni escono sei settimane prima, più gli ingressi a orario per il Van Gogh Museum e il Rijksmuseum. Se doveste scegliere tra tre e quattro giorni, il quarto è quello che ricorderete.",
      stayNeighborhoodSlug: "de-pijp",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Quartiere dei Musei e Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Salite a piedi da De Pijp fino al Rijksmuseum per il vostro turno delle 9 e andate dritti alla Galleria d'Onore per la Ronda di notte e i Vermeer prima che le sale si riempiano.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Attraversate il Museumplein fino al Van Gogh Museum per il vostro ingresso a orario, seguendo i piani in ordine per tracciare come cambiò la sua pittura.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Pranzate sul Museumplein, poi il giardino di sculture gratuito dietro il Rijksmuseum e le lettere I amsterdam per la foto.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Percorrete il Vondelpark da un capo all'altro, sostando al teatro all'aperto per uno spettacolo estivo gratuito se il programma coincide.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Fate una crociera sui canali con una piccola barca aperta al tramonto dal pontile del Rijksmuseum per la migliore luce sull'acqua, prenotando in anticipo in alta stagione.",
              durationMin: 75,
            },
            {
              text: "Cena di nuovo a De Pijp, dove le strade di ristoranti e bar attorno all'Albert Cuyp offrono il miglior rapporto qualità-prezzo della città, poi un drink in un caffè locale.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Cintura dei canali e il Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Andate in tram al vostro turno prenotato alla Casa di Anna Frank; non c'è fila per chi si presenta, quindi questo biglietto andava comprato il giorno del rilascio, sei settimane prima. Il percorso attraverso l'alloggio segreto dura circa un'ora.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Percorrete i canali del Jordaan, il Prinsengracht, il Bloemgracht e l'Egelantiersgracht, con una deviazione nel tranquillo cortile di ospizio Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Pranzate e curiosate nelle Nove Vie tra i canali principali; scegliete un giorno feriale per saltare la folla dello shopping del weekend.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Trovate il nascosto cortile Begijnhof accanto allo Spui e la casa di legno nera al numero 34, poi fate un giro davanti al mercato dei fiori Bloemenmarkt sul Singel.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Attraversate Dam Square all'imbrunire per il Palazzo Reale e il Monumento Nazionale, un passaggio di 15 minuti più che una sosta.",
              durationMin: 30,
            },
            {
              text: "Cena in centro a un isolato dalle vie turistiche, poi una camminata di ritorno lungo il Prinsengracht illuminato dai lampioni.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, mercati e la sponda nord",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Iniziate sull'uscio di casa al mercato Albert Cuyp prima di mezzogiorno, prendendo uno stroopwafel fresco e pascolando tra le bancarelle di cibo. Ricordate che chiude la domenica.",
              durationMin: 90,
            },
            {
              poiSlug: "heineken-experience",
              text: "Fate la vicina Heineken Experience con un turno mattutino prenotato se il tour del marchio vi attira, trattandolo come un'ora leggera, poi girate il Sarphatipark e le vie laterali di De Pijp.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Andate in tram a Centraal e prendete il traghetto gratuito di tre minuti attraverso l'IJ fino ad Amsterdam Noord, il quartiere più cambiato della città.",
              durationMin: 45,
            },
            {
              poiSlug: "adam-lookout",
              text: "Salite all'A'DAM Lookout per il panorama dall'alto e, se osate, l'altalena giù dal tetto. Prenotate il turno dell'altalena in anticipo per evitare la coda.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Fate una cena anticipata sul lungomare di Noord guardando lo skyline, poi il traghetto di ritorno attraverso l'IJ, che va per tutta la notte.",
              durationMin: 105,
            },
            {
              text: "Concludete con un ultimo drink a De Pijp; i bar qui restano aperti più tardi e costano meno di qualsiasi cosa in centro.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Giornata locale a Oost o gita a Zaanse Schans e Haarlem",
          morning: [
            {
              text: "Opzione A: tram a est verso Oost per una lenta mattina locale attorno all'Oosterpark, il Tropenmuseum sulle culture del mondo e i caffè multiculturali del Dappermarkt. Opzione B: prendete il treno diretto da Centraal a Zaandijk Zaanse Schans, circa 17 minuti, per i mulini a vento in funzione, le case di legno e i laboratori di formaggio e zoccoli lungo il fiume.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "L'Opzione A continua a Oost con pranzo in un bistrot di quartiere e una passeggiata nei giardini dello zoo Artis o lungo le isole del porto orientale. Opzione B: saltate sul treno proseguendo per Haarlem, 15 minuti da Zaandijk o Amsterdam, per il compatto centro storico, la Grote Markt e il Frans Hals Museum prima del treno di ritorno.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "In entrambi i casi, concludete di nuovo a De Pijp sui dehors e nei bar attorno all'Albert Cuyp e al Sarphatipark, la vera scena serale del quartiere.",
              durationMin: 120,
            },
            {
              text: "Ultima cena in un ristorante di De Pijp; la zona propone cibo creativo a prezzi equi, un pasto finale azzeccato dopo i menù per turisti del centro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default amsterdamIt;

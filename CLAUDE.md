# Instructions d'exécution — Stays in Europe

## Contexte
Guide affilié "où loger dans les meilleures villes d'Europe". Marque : Stays in
Europe, domaine staysineurope.com (via NEXT_PUBLIC_SITE_URL, jamais en dur).
Stack héritée de citytrip : Next.js 15 App Router, TS strict, Tailwind v4, MDX.
Hosting Vercel. Monétisation : Stay22 (hôtels) via <AffiliateLink>.

Origine : repackage discipliné de citytrip/perfectcitybreak. PCB a été rétrogradé
par Google (~19/07/2026) pour "scaled content" : ~5000 pages combinatoires
ville×mois×durée, fines. On garde la DATA (le gold), on jette le MODÈLE (le poison).

## LA RÈGLE QUI PRIME SUR TOUT (anti-rechute)
1. **UNE page riche par ville** : la page "où loger" (/[city]). C'est tout.
2. **ZÉRO sous-page combinatoire** : pas de pages mois (`/in-january`), pas
   d'itinéraires par durée (`/3-days`), pas de `/on-a-budget`. Ces routes ont
   été SUPPRIMÉES. Ne JAMAIS les recréer. Si une idée multiplie pages = villes ×
   types, elle est interdite.
3. **Peu de destinations** au lancement (~12), élargies lentement derrière un
   quality-gate. Une ville ne ship que si sa page a de la vraie valeur unique.
4. **Les langues, oui ; les pages fines, non.** Multiplier une page *excellente*
   par langue = localisation légitime. Multiplier des pages fines = poison.

Budget de pages cible au lancement : ~12 villes × 1 page × N langues + home +
hubs pays + quelques collections curées. Jamais des milliers.

## Modèle de page "où loger" (/[city])
Fusionne l'ancien hub + where-to-stay de citytrip en UNE page dense :
- Quick answer citable (quel quartier pour quel profil), autonome (GEO).
- Les quartiers (Neighborhood : vibe/pros/cons/bestFor) = le cœur, réécrits sous
  l'angle "choix du quartier" (PAS copiés verbatim de PCB : duplicate content).
- Le meilleur hôtel réel par quartier (Hotel : photo R2, Stay22).
- Carte Stay22, FAQ (prompts réels "best area to stay in X"), JSON-LD Article+FAQ.

## Data réutilisée depuis citytrip (/data)
- GARDER : City, Neighborhood, Hotel (+ photos R2 via image-loader + hotel-photos.json),
  Poi (optionnel "quoi autour"). Déjà en 6 langues.
- JETER : tout le combinatoire — Itinerary, climate/monthlyNotes/bestMonths
  (champs mois), les routes [sub] et on-a-budget.
- Photos hôtels : servies depuis Cloudflare R2 (CDN dans NEXT_PUBLIC_IMAGE_CDN,
  fallback en dur dans lib/image-loader.js). public/hotels gitignoré, jamais commité.

## i18n — extensible par design
- Piloté par `LOCALES` dans lib/i18n/index.ts (+ NON_DEFAULT_LOCALES, STR,
  LOCALE_LABELS, HTML_LANG). Ajouter une locale = créer lib/i18n/<loc>.ts +
  l'enregistrer + wrapper app/<loc>/ + fichiers data <slug>.<loc>.ts.
- Locales de départ : en (racine) /fr /pt /it /de /es (héritées).
- **Pari marchés porteurs (test)** : ajouter **ja** (japonais) en flagship, puis
  **ko** (coréen) et **zh-TW** (chinois traditionnel, Taïwan/HK — PAS zh-CN).
  Thèse : peu de contenu natif détaillé sur les quartiers/hôtels européens pour
  ces voyageurs gros budget → arbitrage + citabilité ChatGPT/Bing.
  CJK : prévoir police Noto Sans JP/KR/TC, noms de villes en katakana/hangul,
  qualité de trad décisive (LLM bien prompté + conventions natives).

## Règles héritées (conservées)
- Data programmatique uniquement dans /data, typée (data/types.ts).
- Tout texte en propres mots, chaque paragraphe autonome (GEO).
- Pas de tiret cadratin (—). Pas d'anglicismes dans les trads.
- Photos : libres (Pexels/Unsplash) ou vraies photos hôtels R2. JAMAIS de
  copyright, JAMAIS d'API Google Places.
- Tips POI : info actionnable, jamais de remplissage ("worth a visit").
- Liens affiliés uniquement via <AffiliateLink>, aid Stay22 en env var.
- Aucune URL/domaine en dur : NEXT_PUBLIC_SITE_URL (lib/site.ts).
- Embeds Stay22 lazy-loadés (IntersectionObserver) pour le LCP.
- Firewall Vercel : ajouter dès le déploiement la règle Bypass crawlers
  (bingbot|Googlebot|GPTBot|OAI-SearchBot|PerplexityBot|...) sinon 0 index Bing
  (voir mémoire ref_vercel_bingbot_challenge).

## Analytics
- GA_MEASUREMENT_ID et CLARITY_ID vidés par défaut (lib/site.ts) : NE PAS
  réutiliser les IDs de citytrip. Créer des propriétés dédiées, injecter via
  NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_CLARITY_ID.

## Commandes
- `npm run dev` : dev server (Turbopack)
- `npm run build` : build prod (vérifier avant tout push)
- `npm run lint` : ESLint

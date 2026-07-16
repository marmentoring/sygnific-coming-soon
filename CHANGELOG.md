# Sygnific Website — Change Log

> Documento di tracciamento delle modifiche approvate e implementate.  
> Aggiornato dopo ogni sessione di lavoro su ogni pagina.  
> Fonte di verità: `SYGNIFIC_CLAUDE_CODE_VERIFIED_SPEC.md`

---

## Stato avanzamento

| Pagina | Stato |
|--------|-------|
| Global / Shared | ✅ Completato |
| Home — `index.html` | ✅ Completato |
| About — `about.html` | ✅ Completato |
| Solutions — `solutions.html` | ✅ Completato |
| Industries — `industries.html` | ✅ Completato |
| Leadership — `leadership.html` | ✅ Completato |
| Insights — `insights.html` | ✅ Completato |
| Contact — `contact.html` | ✅ Completato |

---

## Global / Shared — tutti i file

**File modificati:** `index.html`, `about.html`, `solutions.html`, `industries.html`, `leadership.html`, `insights.html`, `contact.html`, `css/style.css`  
**File creati:** `sitemap.xml`, `robots.txt`

| # | File | Elemento | Prima | Dopo |
|---|------|----------|-------|------|
| G1 | tutti i 7 HTML | Footer tagline | "International Growth & Execution Partner" | "Executive Growth & Market Expansion Partner" |
| G2 | tutti i 7 HTML | Footer descrizione | assente | "Helping organisations expand internationally through executive leadership, strategic partnerships and commercial execution." |
| G3 | `index.html` | Terminologia geografica | "the Middle East, and EMEA" (con Oxford comma) | "the Middle East and EMEA" (senza Oxford comma) |
| G4 | `index.html` | Canonical tag | assente | `<link rel="canonical" href="https://sygnific.global/">` |
| G5 | `sitemap.xml` | File sitemap | non esisteva | Creato con tutte e 7 le URL pulite |
| G6 | `robots.txt` | File robots | non esisteva | Creato con `Allow: /` e puntamento sitemap |
| G7 | `css/style.css` | Classe `.footer-desc` | non esisteva | Aggiunta (font-size sm, colore ivory 45%, max-width 340px) |

**Bloccati (asset mancanti):**
- OG image per Home (`og-home.jpg`) — nessun asset disponibile
- Sostituzione immagini Unsplash — nessun asset disponibile

---

## Home — `index.html`

**File modificati:** `index.html`

### `<head>`

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-1 | Canonical tag | assente | `<link rel="canonical" href="https://sygnific.global/">` |

### Hero

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-2 | "APAC" colore e peso | bianco, weight 300 | **bronze/gold**, weight 600 (demi) |
| H-3 | "EMEA" colore e peso | bronze/gold italic | **bianco**, weight 600 (demi), non italic |
| H-4 | CTA primaria | "Begin a Partnership" | "Begin the Conversation" |

### Sezione Support (value proposition)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-5 | Testo apertura | "Markets don't grow themselves…" | "International growth is rarely limited by opportunity. It is limited by execution." |
| H-6 | Subparagrafo | assente | "Sygnific combines executive leadership, regional market expertise and commercial execution to help organisations enter new markets, build strategic partnerships and deliver sustainable commercial growth." |

### Value cards

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-7 | Card 4 — titolo | "Infrastructure & Data Centre Advisory" | "Infrastructure & Data Centre Expertise" |

### Sezione Who We Are — Approccio

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-8 | Fase 02 — titolo | "Execute Relentlessly" | "Execute with Discipline" |
| H-9 | Outcome fase 01 | assente | "Outcome — Clarity" (label gold, uppercase) |
| H-10 | Outcome fase 02 | assente | "Outcome — Commercial Momentum" |
| H-11 | Outcome fase 03 | assente | "Outcome — Measurable Growth" |
| H-12 | Frase conclusiva approccio | assente | "We remain involved beyond strategy, supporting execution, stakeholder alignment and measurable business outcomes." |

### Sezione What We Do (cap-cards)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-13 | Card 2 — titolo | "Market Entry & Regional Expansion" | "International Market Expansion" |
| H-14 | Ordine delle 6 cards | Advisory / Market Entry / Commercial / Infrastructure / Strategic / Interim | Advisory / Int'l Market Expansion / Commercial / Strategic / Interim / Infrastructure |
| H-15 | CTA su tutte le 6 cards | "Learn More" | "Explore the Solution" |

### Sezione Why Sygnific (compare table)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-16 | Frase intro compare | assente | "Most organisations evaluating international growth consider three options. Here is how the approaches differ." |
| H-17 | Titolo compare | "The Sygnific Difference" | "The Sygnific Advantage" |
| H-18 | Colonna Sygnific | stile standard | Visivamente dominante: bordo gold sinistro, sfondo tintato, testo più forte |

### Sezione Industries

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-19 | Heading sezione | "Expertise Where Complexity Creates Opportunity" | "Where Industry Expertise Becomes Commercial Advantage." |
| H-20 | CTA finale sezione | "Explore Our Solutions" → `solutions.html` | "Explore Our Industry Expertise" → `industries.html` |

### Sezione Leadership

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-21 | Heading sezione | "Executive Leadership Behind Every Engagement" | "Senior Leadership. Every Engagement." |
| H-22 | Riga evidenziata bio | assente | "20+ years of international executive leadership across APAC, the Middle East and EMEA." (gold, uppercase) |
| H-23 | Nota junior consultants | assente | "No layers of junior consultants." (aggiunto in fondo al paragrafo descrizione) |
| H-24 | CTA leadership | "Learn More About Our Leadership" | "Meet the Leadership Behind Sygnific" |

### Sezione Insights

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-25 | Heading sezione | "Ideas That Shape Better Decisions" | "Executive Perspectives for Better Decisions." |
| H-26 | Card 1 — categoria tag | "Infrastructure" | "Data Centres & Digital Infrastructure" |
| H-27 | Card 2 — categoria tag | "Executive Advisory" | "Executive Leadership" |
| H-28 | Card 3 — categoria tag | "Market Intelligence" | "Data Centres & Digital Infrastructure" |
| H-29 | Card 4 — categoria tag | "Leadership" | "Executive Leadership" |
| H-30 | Card 1 — trattamento visivo | stile standard | Featured: bordo gold, shadow gold, tag colore gold (classe `insight-card--featured`) |
| H-31 | CTA insights | "Visit the Insights Centre" | "Access the Insights Centre" |

### Sezione Contatto finale

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-32 | Heading sezione | "Every Successful Expansion Begins with a Conversation." | "Growth Starts with Clarity." |
| H-33 | Frase lead | assente | "Tell us where your organisation wants to grow and what is standing in the way of execution." |
| H-34 | CTA primaria | "Schedule a Meeting" | "Book a Strategy Conversation" |
| H-35 | CTA secondaria | "Send an Enquiry" → `contact.html` | "Explore How We Work" → `about.html` |

### Immagini (prevenzione CLS)

| # | Elemento | Modifica |
|---|----------|----------|
| H-36 | Immagine Dubai (geo strip) | Aggiunti `width="960" height="640"` |
| H-37 | Immagine Singapore (geo strip) | Aggiunti `width="960" height="640"` |
| H-38 | Foto Enrico Ferri | Aggiunti `width="480" height="560"` |

### Link esterni

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-39 | CTA "Schedule a Strategy Call" (sezione What We Do) | `contact.html` | `https://koalendar.com/u/enrico-ferri` (target blank) |
| H-40 | CTA "Book a Strategy Conversation" (sezione Contatto) | `contact.html` | `https://koalendar.com/u/enrico-ferri` (target blank) |
| H-41 | Link LinkedIn — sezione Leadership | assente | "Connect on LinkedIn" → `https://www.linkedin.com/in/enricoferrisygnificglobal/` (accanto al CTA leadership) |
| H-42 | Link LinkedIn — Footer | assente | "LinkedIn" → `https://www.linkedin.com/in/enricoferrisygnificglobal/` (sotto email contatto) |

### CSS aggiunto in `index.html` (page-specific)

| Classe | Scopo |
|--------|-------|
| `.hero-apac` | APAC in gold/demi nel titolo hero |
| `.hero-emea` | EMEA in ivory/demi nel titolo hero |
| `.approach-closing` | Frase conclusiva sezione approccio (italic, muted) |
| `.approach-outcome` | Label outcome gold sotto ogni fase |
| `.approach-outcome-label` | Porzione "Outcome —" in gold attenuato |
| `.contact-lead` | Frase lead sezione contatto (heading italic) |
| `.leader-highlight` | Riga "20+ years…" in gold uppercase |
| `.leader-linkedin` | Link LinkedIn nella sezione Leadership |
| `.compare-intro` | Testo introduttivo prima del compare table |
| `.compare-table thead th:last-child` | Colonna Sygnific dominante (header) |
| `.compare-table tbody td:last-child` | Colonna Sygnific dominante (righe) |
| `.insight-card--featured` | Card featured bordo gold + shadow |
| `.insight-card--featured .insight-tag` | Tag gold sulla card featured |
| `.insight-card--featured .insight-title` | Titolo più pesante sulla card featured |

### CSS aggiunto in `css/style.css` (globale)

| Classe | Scopo |
|--------|-------|
| `.footer-linkedin:hover` | Hover gold sul link LinkedIn footer |

### Sessione 2 — modifiche aggiuntive

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-S2-1 | Splash screen | assente | Splash screen su sfondo bianco con video logo `assets/0715 (1).mp4`, barra di caricamento navy 0→100% in 5s, animazione fly-to-header al termine |
| H-S2-2 | "Let's Explore What's Possible" | Blocco con lista 6 voci + 2 bottoni nella sezione contatto | Rimosso — rimangono solo i bottoni |
| H-S2-3 | Bottoni "Book a Strategy Conversation" / "Explore How We Work" | Presenti sotto la lista | Rimossi |
| H-S2-4 | `compare-intro` | Left-aligned, `color-text-light` | Centrato, `color-text`, `margin-inline: auto` |
| H-S2-5 | `approach-closing` | `color-text-light`, left-aligned | `color-text`, centrato, `margin-bottom: space-10` |
| H-S2-6 | "Every client engagement is built on four principles:" | `color-text-light` | `color-text` |
| H-S2-7 | "Discover How We Can Support Your Growth" | `color-text-light` | `color-text` |
| H-S2-8 | "Discover practical perspectives…" | `color-text-light` | `color-text` |
| H-S2-9 | "Markets evolve. Technology advances…" | `color-text-light`, em dash | `color-text`, em dash rimosso |
| H-S2-10 | Bio Enrico Ferri (3 paragrafi) | Colori misti (`color-text` / `color-text-light`), em dash nel 3° | Tutti `color-text`, em dash rimosso |
| H-S2-11 | "strategic initiatives—bringing…" | Em dash | Sostituito con virgola |
| H-S2-12 | "how to get there—and having…" | Em dash | Rimosso em dash |
| H-S2-13 | "decision-makers—not layers…" | Em dash | Sostituito con virgola |
| H-S2-14 | `commitment-item` cards (4 princìpi) | Sfondo trasparente, bordo `ivory-dark` invisibile, testo `color-text-muted` | Sfondo bianco, bordo gold in alto 2px, testo `color-text-light`; hover: inversione navy + testo bianco |
| H-S2-15 | "Here is how the approaches differ." | Sulla stessa riga di "…consider three options." | A capo separato con `<br>` |
| H-S2-16 | `approach-closing` margin-bottom | Assente | `var(--space-10)` aggiunto |
| H-S2-17 | Testo CTA contatto | "Whether you are exploring a new market…" (breve) | Testo esteso in due paragrafi, em dash rimosso |

### CSS modificato in `css/style.css` (globale — sessione 2)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| G-S2-1 | `.btn--secondary` | `background: transparent; color: gold; border: gold` | `background: navy; color: white; border: navy` |
| G-S2-2 | `.btn--secondary:hover` | `background: gold; color: navy` | `background: transparent; border: navy; color: navy` |

### Header CTA — tutte le pagine (sessione 2)

| # | Pagina | Prima | Dopo |
|---|--------|-------|------|
| G-S2-3 | `about.html` | `btn--primary btn--sm` | `btn--secondary btn--sm` |
| G-S2-4 | `leadership.html` | `btn--primary btn--sm` | `btn--secondary btn--sm` |
| G-S2-5 | `insights.html` | `btn--primary btn--sm` | `btn--secondary btn--sm` |
| G-S2-6 | `industries.html` | `btn--primary btn--sm` | `btn--secondary btn--sm` |
| G-S2-7 | `contact.html` | `btn--primary btn--sm` | `btn--secondary btn--sm` |
| G-S2-8 | `solutions.html` | `btn--primary btn--sm` | `btn--secondary btn--sm` |

---

*Ultimo aggiornamento: Home completata — tutte le modifiche approvate implementate.*  
*Prossima pagina: About — in attesa di approvazione.*

---

## About — `about.html`

**File modificati:** `about.html`

### Hero

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| A-1 | Sottotitolo hero | "Why we exist, what we believe, and how we work." (unico paragrafo) | Aggiunto intro sentence sopra: "Sygnific exists to transform international ambition into measurable commercial results through executive leadership and disciplined execution." (classe `about-hero-intro`); frase originale mantenuta come `about-hero-sub` |

### Sezione Vision

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| A-4 | Terminologia geografica | "APAC, the Middle East, and EMEA" (con Oxford comma) | "APAC, the Middle East and EMEA" (senza Oxford comma) |

### Sezione Mission

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| A-2 | Frase conclusiva | Solo la frase italic "Every engagement is designed…" | Aggiunta riga: "Strategy creates direction. Execution creates growth." (heading font, weight 300, navy) |

### Sezione What Makes Sygnific Different

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| A-3 | `progression-step--active` (colonna Sygnific) | Sfondo navy, bordo navy | Bordo gold 2px, box-shadow gold, `transform: translateY(-4px)` — visivamente dominante rispetto alle altre due colonne |

### Sezione Vision

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| T-2 | h2 Vision | "To become the trusted executive growth partner for organisations expanding across APAC, the Middle East and EMEA." | "To become the executive growth partner organisations trust when expansion cannot fail." |

### Sezione Purpose

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| R-2 | Paragrafo finale Purpose | "Sygnific was founded to help organisations navigate this complexity…" | "Sygnific was created to close the gap between international growth strategy and successful execution…" |
| R-3 | Paragrafo aggiunto | assente | "Organisations often know where they want to grow but lack the leadership, relationships and execution capability to make it happen." |

### Sezione Mission

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| R-4/R-5 | 6 mission items | Enter / Accelerate / Build / Strengthen / Navigate / Transform (6 items) | Clarify ambition / Align leadership / Build market access / Execute commercial priorities / Deliver measurable growth (5 items, verbi attivi) |

### Sezione Philosophy

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| R-6 | philosophy-quote | "Growth is not achieved through strategy alone. It is achieved when strategy, leadership, relationships, and execution work together." | "Growth is not created by strategy alone." |
| R-6 | Principi (aggiunto) | assente | 4-principi grid: Create clarity before complexity / Build trust before transactions / Execute with discipline / Measure success through outcomes |
| R-7 | Paragrafo duplicato | "That belief shapes everything we do…" | Rimosso (contenuto duplicato rispetto ad altre sezioni) |

### Sezione What Makes Sygnific Different

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| T-3 | h2 | "We focus on implementation." | "Growth is not created by strategy alone." |
| R-8 | Layout confronto | Progression Analysis → Recommendations → Implementation (3 step orizzontali) | 3 colonne: Traditional Consulting / Internal Team / The Sygnific Model (colonna active dominante in navy/gold) |
| R-10 | Corpo paragrafo | "We work alongside executive teams, becoming a trusted extension…" | "We become an extension of your leadership team, contributing where it creates the greatest commercial value." |

### Sezione Engagement Model

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| T-4 | h2 | "No standard packages. Every partnership is tailored." | "Every engagement begins with your business, not with a predefined methodology." |
| R-9 | 4-step aggiunto | assente | Grid Diagnose / Design / Execute / Adapt |

### Sezione Core Values

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| T-5 | h2 | "The principles that guide every engagement." | "The Principles Behind Every Partnership" |
| R-11 | Integrity — desc | "We act with honesty, transparency, and professionalism in every engagement." | "We say what we believe, even when it is not the easiest answer." |
| R-11 | Excellence — desc | "We pursue the highest standards in strategy, execution, and client service." | "We bring senior judgement, preparation and discipline to every engagement." |
| R-11 | Partnership — desc | "We build trusted, long-term relationships founded on shared success." | "We work alongside leadership teams, not at a distance." |
| R-11 | Courage (rimossa) → Accountability (aggiunta) | "We challenge assumptions, encourage better decisions…" | "We measure success by outcomes, not recommendations." |
| R-11 | Execution (rimossa) | "Ideas only create value when they are successfully implemented." | Rimossa — 4 valori totali per allineamento con documento cliente |
| R-11 | values-grid colonne | 5 colonne | 4 colonne |

### Sezione Commitment

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| R-12 | Frase conclusiva aggiunta | assente | "Sygnific will continue to connect strategic clarity, executive leadership and disciplined execution." |
| R-13 | Ultima frase aggiunta | assente | "We don't simply help businesses expand. We help them build enduring commercial success across borders." |

### Sezione Looking Ahead

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| T-6 | h2 | "The challenges facing organisations will continue to evolve." | "Tomorrow's business challenges won't look like today's." |

### CTA

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| T-7 | CTA heading | "Begin the Conversation" | "Build Your Next Phase of Growth." |
| R-14 | CTA primaria | "Begin a Partnership" → `contact.html` | "Begin the Conversation" → `https://koalendar.com/u/enrico-ferri` (target blank) |
| R-15 | CTA secondaria | "Explore Our Solutions" → `solutions.html` | "Meet the Leadership" → `leadership.html` |

### CSS aggiunto in `about.html` (page-specific)

| Classe | Scopo |
|--------|-------|
| `.about-hero-intro` | Intro sentence hero: ivory, max-width 560px, margin-bottom space-3 |
| `.progression-step--active` (aggiornato) | Bordo gold, shadow gold, elevazione -4px per dominanza visiva |
| `.philosophy-principles` | Grid 2×2 per i 4 principi, su sfondo navy |
| `.philosophy-principle` | Singolo principio con hover border-left gold |
| `.philosophy-principle-num` | Numero gold uppercase |
| `.philosophy-principle-text` | Testo heading font weight 300 ivory |
| `.about-compare` | Grid 3 colonne per confronto Traditional / Internal / Sygnific |
| `.about-compare-col` / `--active` | Colonne confronto, active = navy + bordo gold |
| `.about-compare-label` / `.about-compare-title` / `.about-compare-points` | Elementi interni colonne confronto |
| `.about-phases` | Grid 4 colonne Diagnose / Design / Execute / Adapt |
| `.about-phase` / `.about-phase-num` / `.about-phase-title` | Elementi fasi engagement model |

### Sessione 2 — modifiche aggiuntive

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| A-S2-1 | Hero subtitle "Why we exist…" | Presente | Rimosso — rimane solo l'intro sentence |
| A-S2-2 | Phase cards (Diagnose/Design/Execute/Adapt) | Solo numero ghost + titolo (card vuote) | Aggiunta `.about-phase-desc` con testo descrittivo per ogni fase; card con sfondo bianco, bordo gold top 2px, hover shadow |
| A-S2-3 | `about-phases` layout | `fade-in` sul parent, gap 0, bordo esterno | `fade-in-group` con stagger figli, gap space-6, no bordo esterno |
| A-S2-4 | Value cards hover | Sfondo ivory all'hover | Inversione navy: sfondo navy + testo bianco/ivory + icone bianche all'hover |
| A-S2-5 | "Our engagements may include" | Left-aligned (bug `max-width: 70ch` global p) | Centrato — aggiunto `max-width: none` all'inline style |
| A-S2-6 | "Every engagement is designed…" | `color-text-light`, italic | `color-text` |
| A-S2-7 | "Strategy creates direction. Execution creates growth." | `font-weight: 300`, `color-text-light` | `font-weight: 500`, `color-text` navy |
| A-S2-8 | "We become an extension…" | `color-text`, `margin-top: space-24` (troppo) | `margin-top: space-16` |
| A-S2-9 | Commitment — 3 paragrafi finali | Colori misti (`color-text` / `color-text-light`) | Tutti `color-text` |
| A-S2-10 | CTA sub text | Testo breve originale | Sostituito con 2 paragrafi estesi, em dash rimosso |
| A-S2-11 | "The engagement model remains flexible…" | `color-text-light`, italic | `color-text` |
| A-S2-12 | Animazioni fade-in-group figli | Non funzionavano (transition sovrascritta da CSS page-specific) | Corretti: `opacity/transform` aggiunti alle transition di `.mission-item`, `.about-phase`, `.model-item`, `.value-card-about` |
| A-S2-13 | Em dash in fase Execute | "activates the strategy — building…" | Sostituito con virgola |
| A-S2-14 | `.about-cta-sub` | `color-text-light` | `color-text` |
| A-S2-15 | Mission items | Ridotti a 5 (griglia sbilanciata) | Ripristinati a 6 con sesto item "Strengthen the foundations…" |

---

*Ultimo aggiornamento: About + Home sessione 2 completate.*  
*Prossima pagina: Solutions — in attesa di approvazione.*

---

## Solutions — `solutions.html`

**File modificati:** `solutions.html`

### Sessione 1 — IMPLEMENT items

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| S-1 | Hero h1 | "Executive Capability That Delivers Measurable Growth." | "Executive Capability. Commercial Execution. Measurable Growth." (3 righe separate) |
| S-2 | Intro h2 | "Solutions built around your objectives." | "Your objectives define the engagement." |
| S-3 | Frase aggiunta intro | assente | "Unlike traditional consulting firms, we remain involved beyond strategy." |
| S-4 | Label "How Sygnific Helps" | assente su tutte le 6 | Aggiunta prima del `sol-desc` su tutte e 6 le soluzioni |
| S-5 | Sol 2 — Who it is for | assente | "International businesses, private equity portfolio companies, technology firms, manufacturers." |
| S-6 | Sol 2 — CTA | assente | "Discuss Your Market Expansion Objectives" → `contact.html` |
| S-7 | Sol 3 — subtitle | "Accelerating commercial growth." | "Turn strategic ambition into sustainable commercial momentum." |
| S-8 | Sol 3 — engagement list | 6 voci generiche | Commercial strategy / Sales leadership / Pipeline development / Strategic partnerships / Channel strategy / Key-account development |
| S-9 | Sol 3 — Outcomes | assente | Stronger commercial performance / Higher-quality partnerships / Sustainable pipeline / Measurable revenue impact |
| S-10 | Sol 4 — desc | Nessun riferimento al modello | Aggiunto "not as an agent or traditional distributor" (con virgole, no em dash) |
| S-11 | Sol 5 — CTA | assente | "Discuss an Interim Leadership Requirement" → `contact.html` |
| S-12 | Sol 6 — CTA | assente | "Discuss Infrastructure & Data Centre Growth" → `contact.html` |
| S-13 | Engagement models h2 | "Every engagement is designed around your business objectives." | "Every engagement is tailored. Every recommendation must lead toward execution." |
| S-14 | CTA sub — em dash | "ambitions—not predefined consulting packages" | "ambitions, not predefined consulting packages" |

### Sessione 2 — REVIEW items + richieste utente

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| S-S2-1 | Hero h1 layout | "Executive Capability. Commercial Execution." su una riga | Tre righe separate: "Executive Capability." / "Commercial Execution." / "Measurable Growth." |
| S-S2-2 | Hero subtitle | "What Sygnific can do for your organisation." | "Solutions designed around the strategic priorities, commercial realities and growth ambitions of your organisation." |
| S-S2-3 | Intro — frase aggiunta | assente | "We do not begin with a standard package. We begin by understanding the business outcome you need to achieve." |
| S-S2-4 | Tutte le 6 soluzioni — Business Challenge | assente | Aggiunta label + paragrafo breve prima di "How Sygnific Helps" per ogni soluzione |
| S-S2-5 | Sol 1 — subtitle | "Strategic guidance for leadership teams." | "Strategic guidance for leaders making high-impact growth, investment and transformation decisions." |
| S-S2-6 | Sol 1 — engagement list | Growth strategy / Executive mentoring / Commercial reviews / Board advisory / Business transformation / Leadership workshops | Growth strategy / Leadership alignment / Commercial reviews / Board-level decision support / Organisational transformation |
| S-S2-7 | Sol 1 — Outcomes | assente | Faster strategic decisions / Clearer priorities / Stronger leadership alignment / Improved commercial performance |
| S-S2-8 | Sol 1 — Who it is for | assente | "Boards, CEOs and senior executives navigating high-stakes growth, transformation or investment decisions." |
| S-S2-9 | Sol 1 — CTA | assente | "Discuss an Executive Advisory Engagement" → `contact.html` |
| S-S2-10 | Sol 2 — subtitle | "Enter new markets with confidence." | "Expand into new markets with greater confidence and lower execution risk." |
| S-S2-11 | Sol 2 — engagement list | Market assessments / Entry strategy / Go-to-market planning / Regional representation / Partner identification / Business launch support | Market assessment / Entry strategy / Partner identification / Regional operating model / Stakeholder engagement / Launch support |
| S-S2-12 | Sol 2 — Outcomes | assente | Faster market access / Lower expansion risk / Stronger local relationships / Sustainable regional presence |
| S-S2-13 | Sol 3 — Who it is for | assente | "Commercial leaders, business development teams and organisations building scalable revenue models." |
| S-S2-14 | Sol 3 — frase chiusura | assente | "Commercial growth is built through trust, execution and long-term partnerships." (italic, nel pannello) |
| S-S2-15 | Sol 3 — CTA | assente | "Accelerate Commercial Growth" → `contact.html` |
| S-S2-16 | Sol 4 — subtitle | "Your executive presence in the region." | "Build meaningful regional presence without immediately creating permanent infrastructure." |
| S-S2-17 | Sol 4 — engagement list | Regional representation / Executive meetings / Customer development / Partner management / Opportunity qualification / Local market presence | Executive representation / Stakeholder engagement / Partner development / Market intelligence / Regional business development |
| S-S2-18 | Sol 4 — Outcomes | assente | Lower expansion costs / Stronger market credibility / Trusted regional relationships / Sustainable growth |
| S-S2-19 | Sol 4 — Who it is for | assente | "International organisations seeking market presence without establishing permanent regional infrastructure." |
| S-S2-20 | Sol 4 — CTA | assente | "Explore Strategic Representation" → `contact.html` |
| S-S2-21 | Sol 5 — "When it is most useful" | assente | Lista: Market entry / Transformation / Leadership gap / Rapid growth / Restructuring / Critical commercial programme |
| S-S2-22 | Sol 5 — Typical roles | Interim Managing Director / Commercial Director / Regional Director / Business Development Director / Growth Advisor | Interim Managing Director / Regional Director / Commercial Director / Market Entry Lead / Transformation Lead |
| S-S2-23 | Sol 5 — Outcomes | assente | Immediate senior capability / Faster decisions / Continuity / Accountable execution / Knowledge transfer |
| S-S2-24 | Sol 5 — Who it is for | assente | "Organisations experiencing leadership transitions, rapid growth, market entry or commercial transformation." |
| S-S2-25 | Sol 6 — desc | Generico sui settori | Aggiunto esplicitamente: technology providers, manufacturers, investors, developers, operators; focus su specification strategy, market positioning, stakeholder access, route-to-market, commercial partnerships |
| S-S2-26 | Sol 6 — engagement list | Data centre strategy / Market positioning / Specification development / Consultant engagement / Commercial growth / Regional expansion | Data centre market strategy / Specification influence / Partner strategy / Regional representation / Commercial development |
| S-S2-27 | Sol 6 — Outcomes | assente | Stronger market positioning / Access to decision-makers / Better specification opportunities / Faster commercial traction |
| S-S2-28 | Sol 6 — Who it is for | assente | "Technology providers, manufacturers, investors, developers, operators and infrastructure organisations." |
| S-S2-29 | CTA finale — audience strip | assente | Pill tag centrate: Boards / CEOs / Managing Directors / Business Owners / Regional Leadership Teams |
| S-S2-30 | CTA finale — CTA secondaria | "Schedule a Strategy Call" | "Begin a Confidential Conversation" |
| S-S2-31 | `.sol-text-link` | `border-bottom: 1px solid` (riga visibile sotto link) | `border-bottom` rimosso |

### CSS aggiunto in `solutions.html` (page-specific)

| Classe | Scopo |
|--------|-------|
| `.sol-text-link` | CTA link gold con freccia inline nei pannelli soluzioni |
| `.sol-who-label` | Label "Who it is for" — uppercase, muted |
| `.sol-who-text` | Testo audience per soluzione |
| `.sol-audience-tags` | Flex row pill tag per audience nella sezione CTA finale |
| `.sol-audience-tag` | Singola pill tag: bordo `ivory-dark`, testo `text-light` |

### Bloccati (asset mancanti)

- Immagini sostitutive per sol 3 e sol 4 — nessun asset disponibile

---

*Ultimo aggiornamento: Solutions completata — tutte le modifiche IMPLEMENT e REVIEW implementate.*  
*Prossima pagina: Industries — in attesa di approvazione.*

---

## Industries — `industries.html`

**File modificati:** `industries.html`

### Sessione 1 — IMPLEMENT items

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| I-1 | Hero h1 | "Industry Knowledge. / Executive Perspective. / Commercial Results." (3 righe) | "Where Industry Expertise / Becomes Commercial Advantage." (2 righe, struttura `hero-ln` preservata) |
| I-2 | Intro h2 | "Understanding the forces that shape your industry." | "Every industry has different rules. Growth requires understanding them." |
| I-3 | Intro body — frase finale | assente | "Sygnific helps clients navigate all five." |
| I-4 | Card 1 back — body | Testo generico su AI/cloud/edge | Aggiunto: AI demand, power capacity, investment cycles, technology suppliers |
| I-5 | Card 4 back — body | "multiple stakeholders, extended procurement cycles" | Aggiunto: project ecosystems, government stakeholders, contractors, consultants, investors |
| I-6 | Geo region taglines | assenti | Singapore: Gateway to Asia-Pacific / Gulf: Executive access across the Middle East / EMEA: Cross-border commercial perspective |
| I-7 | Geographic heading | "Supporting growth ambitions across three global regions." | "Supporting growth ambitions across APAC, the Middle East and EMEA." |
| I-8 | CTA secondaria | "Schedule a Strategy Call" | "Discuss Your Growth Objectives" |

### Sessione 1 — em dash rimossi

Tutti gli em dash presenti in prosa sostituiti con virgola o due punti secondo contesto. Rimasti intatti: `— Sygnific` nel `<title>` (brand), `FZ-LLC — UAE` / `Pte Ltd — Singapore` in aria-label e alt text (nomi legali), commenti CSS decorativi.

### Sessione 2 — REVIEW items approvati

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| I-9 | Hero subtitle | "Sector expertise that creates real competitive advantage." | "Executive leadership and commercial execution for organisations operating in complex, rapidly evolving industries." |
| I-10 | Intro body | Testo generico | Riscritto ~100 parole: technology / regulation / capital access / decision-makers / execution |
| I-11 | Cinque forze visive | assenti | Riga: Technology → Regulation → Capital → Decision-makers → Execution (`.ind-forces`) |
| I-12 | Struttura card back | Solo body text + Typical clients (solo card 1) | 3 sezioni uniformi su tutte e 5: Commercial Reality / Typical Clients / How We Create Value |
| I-13 | Card 2 — Typical Clients | assente | Specifiers / Consultants / Developers / Regional partners / Manufacturers |
| I-14 | Card 3 — Typical Clients | assente | Manufacturers / Industrial technology companies / Engineering groups / Export-led businesses |
| I-15 | Card 4 — Typical Clients | assente | Project developers / Government stakeholders / Contractors / Consultants / Investors |
| I-16 | Card 5 — Typical Clients | assente | Building automation specialists / Sustainable technology providers / Smart building solution providers |
| I-17 | Card 5 — How We Create Value | "Sygnific supports organisations delivering innovative solutions…" | "Connecting innovative technologies with the decision-makers shaping tomorrow's projects…" |
| I-18 | "Close" su tutte le 5 card | "Close" | "Back" |
| I-19 | Altezza card | Desktop 580px / 768px 420px / 480px 380px | Desktop 580px / 1024px 560px / 768px 460px / 480px 440px |
| I-20 | Credibility strip | assente | Nuova sezione `.ind-credibility` (4 colonne qualitative: Executive Leadership / Three Regions / Sector Depth / Commercial Execution) — senza numeri inventati (BLOCKED: numeri esatti da confermare con cliente) |
| I-21 | Testo chiusura Industries | assente | "Every engagement is tailored to the commercial realities of the industry while maintaining the same commitment to clarity, leadership and execution." |
| I-22 | CTA primaria | "Begin a Partnership" | "Explore Opportunities Within Your Industry" |
| I-23 | "technical excellence" nel blockquote beyond | `<em>` — gold, non grassetto | `<strong>` — gold, weight 600 |
| I-24 | How We Create Value — h2 | **Vedere nota conflitto sotto** | — |

### CSS aggiunto in `industries.html` (page-specific)

| Classe | Scopo |
|--------|-------|
| `.ind-geo-tagline` | Tagline per regione geografica: gold, weight 500 |
| `.ind-beyond-quote strong` | "technical excellence" in grassetto gold |
| `.ind-forces` | Flex row cinque forze operative |
| `.ind-force-item` | Singola forza: bordered, uppercase, navy |
| `.ind-force-sep` | Separatore freccia tra forze |
| `.ind-back-sections` | Wrapper flex colonna per 3 sezioni card back |
| `.ind-back-section-label` | Label sezione (Commercial Reality / Typical Clients / How We Create Value) |
| `.ind-credibility` | Sezione credibility strip — sfondo navy |
| `.ind-cred-grid` | Grid 4 colonne credibility |
| `.ind-cred-item` | Singolo item credibility |
| `.ind-cred-eyebrow` | Eyebrow label credibility |
| `.ind-cred-headline` | Titolo italic heading font |
| `.ind-cred-desc` | Testo descrittivo muted |
| `.ind-beyond-body` | Paragrafo chiusura sezione Beyond |

---

### ⚠️ CONFLITTO DA SEGNALARE AL CLIENTE

**Voce:** `[IMPLEMENT - CLIENT PREFERRED/EXACT]` — Chiusura Industries  
**Richiesta cliente:** cambiare l'heading "How We Create Value" da *"Across every industry, the same commitment to measurable growth."* a *"Different industries. One standard of executive commitment."*

**Problema:** la sezione Sector Cards (subito sopra) ha già l'heading:  
*"Five industries. One standard of executive commitment."*

Le due frasi sono quasi identiche nella seconda metà. Avere *"One standard of executive commitment"* ripetuto a distanza ravvicinata indebolisce entrambe le sezioni.

**Heading attuale mantenuto:** *"Across every industry, the same commitment to measurable growth."* (testo originale, non crea duplicazione)

**Opzioni per il cliente:**
1. Approvare il testo originale per "How We Create Value" e lasciare il testo cliente solo nella sezione Cards
2. Cambiare l'heading Cards in qualcosa di diverso e usare *"Different industries. One standard of executive commitment."* su How We Create Value
3. Indicare quale delle due sezioni deve avere *"One standard of executive commitment"* e cosa mettere nell'altra

---

*Ultimo aggiornamento: Industries completata — modifiche IMPLEMENT e REVIEW implementate. Un conflitto testuale segnalato al cliente.*  
*Prossima pagina: Leadership — in attesa di approvazione.*

---

## Leadership — `leadership.html`

**File modificati:** `leadership.html`

### Sessione 1 — IMPLEMENT items (da `SYGNIFIC_CLAUDE_CODE_VERIFIED_SPEC.md` sezione 5)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| L-1 | Hero h1 | Testo precedente | "Senior Leadership. / Every Engagement." (2 `hero-ln` separati) |
| L-2 | Hero subtitle | Testo generico | "Founder-led executive advisory, regional growth and commercial execution across APAC, the Middle East and EMEA." |
| L-3 | Intro paragrafo 1 | Testo generico | "Clients work directly with senior leadership, without layers of junior consultants." + spiegazione modello |
| L-4 | Intro paragrafo 2 | assente | Secondo paragrafo sui benefici del modello founder-led |
| L-5 | `.ldr-involvement` grid | assente | Nuova griglia 4 colonne dopo i paragrafi intro: Direct Access / Strategy Through Execution / Regional Relationships / Accountability |
| L-6 | Bio — 4 paragrafi | Paragrafi generici | Ristrutturati 4 paragrafi per tema: risultati/responsabilità |
| L-7 | `.ldr-founder-personal-quote` | assente | Blockquote con bordo gold sinistro: "Growth is not created by strategy alone. It is created when leaders take responsibility for execution." |
| L-8 | Timeline | 4 items | 5 items con label spec |
| L-9 | Network h2 | Testo precedente | "A trusted network built around each engagement." |
| L-10 | Values h2 | Testo precedente | "The principles behind every decision." |
| L-11 | Values grid | 5 cards | 4 cards: Clarity / Integrity / Accountability / Commercial Value — con nuove icone SVG |
| L-12 | Promise h2 | Testo precedente | "What clients can expect." |
| L-13 | Promise body | Lista `<ul>` standard | Body + ".ldr-promise-pillars" grid 3×2 con 6 pillar numerati (01–06) |
| L-14 | CTA heading | Testo precedente | "Leadership That Stays Accountable." |
| L-15 | CTA sub | Testo precedente | "The same senior leadership that shapes the strategy remains involved through execution." |
| L-16 | Header CTA | `contact.html` generico | `contact.html#contact-form` |

### Sessione 1 — REVIEW items (tutti approvati, nessuna modifica animazioni)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| L-R1 | Foto founder | Colori originali | `filter: grayscale(48%) brightness(1.08)` → `.is-visible`: `grayscale(0%)` (transizione al scroll) |
| L-R2 | "Enrico Ferri — Founder…" attr | Left-aligned | Centrato: `.ldr-closing-attr { text-align:center; display:block; width:100%; max-width:none; }` |
| L-R3 | Promise body — frase added | assente | "No layers of junior consultants." nel paragrafo body |

### Sessione 2 — Promise pillars redesign + animazione

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| L-S2-1 | Lista promise | `<ul>` con 6 `<li>` testuali | `.ldr-promise-pillars` grid 3×2: ogni pillar con numero gold (01–06), titolo demi ivory, sfondo navy con bordo gold sinistro |
| L-S2-2 | Animazione promise pillars | Globale `translateY` (fade-in-group) | Override CSS specifico: slide da sinistra (`translateX(-18px)` → 0) + reveal bordo gold; stagger 80ms per pillar (0–400ms) |

### CSS aggiunto in `leadership.html` (page-specific)

| Classe | Scopo |
|--------|-------|
| `.ldr-involvement` | Grid 4 colonne (→2 a 1024px, →1 a 768px) |
| `.ldr-involvement-item` | Singolo item: bordo gold top, padding, hover scale |
| `.ldr-involvement-label` | Label gold uppercase |
| `.ldr-involvement-text` | Testo descrittivo muted |
| `.ldr-founder-personal-quote` | Blockquote bordo gold sinistro 2px, sfondo gold 4% |
| `.ldr-values-grid` | Grid aggiornato 4 colonne (era 5) → 2 a 1024px |
| `.ldr-closing-attr` | `text-align:center; display:block; width:100%; max-width:none` |
| `.ldr-promise-pillars` | Grid 3×2 per i 6 pillar promise |
| `.ldr-promise-pillar` | Singolo pillar: sfondo navy-dark, bordo gold sinistro, padding |
| `.ldr-promise-pillar-num` | Numero gold weight 300 (01–06) |
| `.ldr-promise-pillar-label` | Titolo pillar ivory demi |
| `.ldr-promise-pillars.fade-in-group > .ldr-promise-pillar` | Override animazione: translateX invece di translateY, border-left reveal |

---

## CTA link sitewide — sessione (tutti i file)

Aggiornamento sistematico di tutti i bottoni CTA su tutte le pagine:

| Tipo bottone | Destinazione | File aggiornati |
|-------------|-------------|-----------------|
| Gold (primario) — prenotazione | `https://koalendar.com/u/enrico-ferri` (target blank) | `index.html`, `about.html`, `solutions.html`, `industries.html`, `leadership.html` |
| Blue (secondario) — contatto | `contact.html#contact-form` | `index.html`, `about.html`, `solutions.html`, `industries.html`, `leadership.html`, `insights.html` |
| Header CTA (tutti) | `contact.html#contact-form` | `about.html`, `solutions.html`, `industries.html`, `leadership.html`, `insights.html` |

---

## Home — `index.html` — sessione 3

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| H-S3-1 | Splash screen | Singolo video `#splash-video` | Due video affiancati `#splash-video-1` (assets/0715%20(1).mp4) e `#splash-video-2` (assets/0715%20(5).mp4) |
| H-S3-2 | Splash layout | Centrato singolo | `#splash-center` colonna con `#splash-logos` flex row + `#splash-progress-wrap` stretch |
| H-S3-3 | Splash dismiss | Fly verso logo singolo | Fly indipendente: video-1 → logo sinistro, video-2 → logo destro |
| H-S3-4 | Splash timing | 2s delay | Partenza simultanea (0s delay) |
| H-S3-5 | Video-2 playback | 1× | `playbackRate = 0.75` (25% più lento) |

---

## Industries — `industries.html` — sessione 3

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| I-S3-1 | Hero h1 span structure | 2 `hero-ln` (ogni 2 parole a capo) | 3 `hero-ln`: "Where Industry" / "Expertise Becomes" / "*Commercial Advantage.*" (controllo esatto line break) |

---

*Ultimo aggiornamento: Leadership completata, CTA sitewide aggiornate, splash dual-video, industries hero fix.*  
*Prossima pagina: Insights — da implementare.*

---

## Insights — `insights.html` — Sessione 1

**File modificati:** `insights.html`

### Hero

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-1 | Hero h1 | Testo precedente | "Executive Perspectives / for *Better Decisions.*" (2 `hero-ln`, em gold italic) |
| INS-2 | Divisore hero | assente | `ins-hero-divider` (linea gold 48×2px, centrata sotto h1) |
| INS-3 | Hero subtitle | Testo generico | "Original thinking on international growth, commercial leadership, digital infrastructure and the realities of execution." |
| INS-4 | Padding hero | `var(--space-20)` | `var(--space-24)` |

### Intro

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-5 | Lead paragrafo | Testo generico | "We write for executives who need better decisions, not simply more information." |
| INS-6 | Stats strip | 4 stat (6 domains / 14+ markets / 20 years / 100%) | Rimossa — sezione eliminata dall'HTML |

### Featured Topics

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-7 | Card 01 — titolo | "International Market Expansion" | "International Growth" |

### Latest Articles — grid completo

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-8 | Featured card | 1 card placeholder con `href="#"` | Featured "The Infrastructure Constraint" con `href="#ins-book-title"` (anchor al libro) + CTA "Discover the Publication" + autore |
| INS-9 | Griglia articoli | 3 card con titoli placeholder e link errati | 10 article card collegate ai rispettivi articoli LinkedIn di Enrico Ferri |
| INS-10 | Articolo 1 | "From Strategy to Execution" → URL errato | "The Next Data Centre Boom Won't Be Won on Speed Alone" → URL corretto |
| INS-11 | Articolo 2 | "The Future of Data Centre Growth" → URL errato | "From Campus to Ceiling: What Hyperscale Growth Is Actually Asking" → URL corretto |
| INS-12 | Articolo 3 | "Executive Perspective" → URL errato | "AI Is Pushing Data Centres Beyond Design Limits" → URL corretto |
| INS-13 | Articolo 4 | assente | "Liquid Cooling Solves One Problem. It Creates Another." → URL LinkedIn |
| INS-14 | Articolo 5 | assente | "AI Didn't Just Increase Density. It Turned Structure Into Infrastructure." → URL LinkedIn |
| INS-15 | Articolo 6 | assente | "Data Centres Don't Fail at Capacity. They Fail at Decision Timing." → URL LinkedIn |
| INS-16 | Articolo 7 | assente | "AI Data Centres: Not Design Problems. Sequencing Problems." → URL LinkedIn |
| INS-17 | Articolo 8 | assente | "The Next Constraint After AI Isn't Compute. It's Permission." → URL LinkedIn |
| INS-18 | Articolo 9 | assente | "AI Infrastructure Has Entered Its First Political Phase." → URL LinkedIn |
| INS-19 | Articolo 10 | assente | "The AI Industry Is Quietly Becoming an Energy Industry." → URL LinkedIn |
| INS-20 | Featured card — CTA | "Read on LinkedIn" con LinkedIn icon | "Discover the Publication" → anchor `#ins-book-title` (no LinkedIn) |
| INS-21 | Card padding | `padding: space-8 space-10 space-8 0` (testo a filo bordo sx) / even card `padding-right: 0` (testo a filo bordo dx) | `padding: var(--space-8)` su tutti i lati — testo non tocca più i margini |
| INS-22 | Featured card padding | `padding-right: 0` aggiuntivo | Rimosso — stessa spaziatura uniforme |

### Executive Publications

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-23 | Heading sezione | Testo precedente | "Sygnific Executive Intelligence" |
| INS-24 | Publications | 9 tipi (Research Reports, Digital Publications inclusi) | 7 tipi: Executive Articles / Industry Analysis / White Papers / Executive Briefings / Market Outlooks / Strategy Guides / Books |
| INS-25 | "Executive Briefing Papers" | desc originale | → "Executive Briefings" — "Practical 5-10 page papers for CEOs and boards." |
| INS-26 | Testo chiusura | Testo precedente | "Each publication is designed to help leaders move from information to informed action." |

### Featured Publication (libro)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-27 | Immagine copertina | Placeholder/grafica CSS | Foto reale `assets/images/book-infrastructure-constraint.jpg` |
| INS-28 | Sottotitolo libro | Testo diverso | "How Artificial Intelligence, Energy, and Physical Reality Are Reshaping the Future of Data Centres" |
| INS-29 | Autore | assente | "Enrico Ferri, Founder & Managing Director" (gold, uppercase) |
| INS-30 | Animazione floating | `@keyframes book-float` attiva | Rimossa — libro statico |

### Subscribe

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-31 | Newsletter form | Placeholder non funzionante | Connessa a Web3Forms (`access_key: 29145dfd-...`) con subject "New Subscriber — Sygnific Executive Intelligence" |
| INS-32 | Campi form | Solo email | Nome + Organizzazione + Email |
| INS-33 | Nota subscribe | Testo generico | "Delivered only when there is something worth saying." |

### Why We Share

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-34 | Paragrafo chiusura | Testo generico | "Our publications reflect the same executive thinking we bring to every client engagement." |
| INS-35 | Frase conclusiva | assente | "Clarity. Execution. Growth." (demi, navy) |

### CTA

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-36 | CTA heading | Testo precedente | "Where Will Your Next Decision Take You?" |
| INS-37 | CTA primaria | Testo/link precedente | "Book a Strategy Conversation" → `contact.html#contact-form` |
| INS-38 | CTA secondaria | Testo/link precedente | "Explore Our Solutions" → `solutions.html` |

### Topic card — immagine mancante

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| INS-39 | Card 04 "Commercial Strategy" | `photo-1529158062015` (URL rotto) | `photo-1454165804606` (URL funzionante) |

---

*Ultimo aggiornamento: Insights completata — tutte le modifiche implementate. Deployed in produzione.*  
*Prossima pagina: Contact — in attesa.*

---

## Contact — `contact.html`

**File modificati:** `contact.html`

### Hero

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-1 | Hero subtitle | "Every Successful Partnership Begins with Understanding." | "Every engagement begins with understanding your organisation, objectives and the commercial realities shaping your next decision." |
| CNT-2 | "Strategic Conversation" — colore | bianco | **gold** (`var(--color-gold)`) |
| CNT-3 | Hero padding-bottom | `var(--space-20)` | `var(--space-24)` (~20% in più) |
| CNT-4 | Divider gold | assente | Linea orizzontale gold 48px centrata sotto il subtitle |

### Who We Work With

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-5 | Tag — ordine | Business Owners primo | Boards of Directors / CEOs / MDs / Regional Teams / Business Owners… |
| CNT-6 | Tag aggiunto | assente | "High-growth International Businesses" |

### Why Clients Engage Us (checklist)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-7 | Item 1 | "Expanding into APAC, the Middle East, or EMEA" | "Expanding into APAC, the Middle East or EMEA" (virgola rimossa) |
| CNT-8 | Item 2 | "Reviewing international growth strategy" | "Refining international growth strategy" |
| CNT-9 | Item 4 | "Developing strategic partnerships" | "Developing high-value strategic partnerships" |
| CNT-10 | Item 5 | "Strengthening executive leadership" | "Strengthening executive leadership teams" |
| CNT-11 | Item 6 | "Accelerating business development" | "Accelerating commercial growth" |
| CNT-12 | Item 7 | "Entering the data centre market" | "Entering or expanding within the data centre sector" |
| CNT-13 | Item 8 | "Navigating organisational transformation" | "Leading organisational transformation" |

### Engagement Process

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-14 | Grid layout | `repeat(3, 1fr)` | `repeat(4, 1fr)` desktop / `repeat(2, 1fr)` tablet / `1fr` mobile |
| CNT-15 | Step 1 — titolo | "Initial Discovery" | "Executive Discovery Session" |
| CNT-16 | Step 1 — label | "Step 1 · Discovery Call · 30 to 60 minutes" | "Step 1 · Typically 30–60 minutes" |
| CNT-17 | Step 1 — testo | Generico | "A confidential executive discussion focused on understanding your business, strategic objectives, growth ambitions and the challenges standing in the way of execution." |
| CNT-18 | Step 2 — titolo | "Strategic Assessment" | "Strategic Evaluation" |
| CNT-19 | Step 2 — testo | Generico | "We assess where Sygnific can create measurable value, determine the most appropriate engagement model and evaluate whether a partnership is likely to deliver meaningful commercial impact." |
| CNT-20 | Step 2 — riga roadmap | assente | "Where appropriate, we develop a high-level roadmap outlining priorities, milestones and the recommended path forward." |
| CNT-21 | Step 3 — titolo | "Partnership Proposal" | "Tailored Partnership Proposal" |
| CNT-22 | Step 3 — apertura | "If there is a strong strategic fit, we will prepare a tailored proposal describing:" | "If we believe we can create significant value together, we prepare a bespoke engagement proposal." |
| CNT-23 | Step 3 — lista | Objectives & Scope of engagement / Deliverables & Timeline / Commercial model / Expected outcomes | Objectives & Scope / Key Deliverables / Timeline & Milestones / Commercial Structure / Expected Outcomes |
| CNT-24 | Step 3 — nota | "Every proposal is customised. We do not offer generic consulting packages." | "Every engagement is tailored. We do not offer standard consulting packages or one-size-fits-all solutions." |
| CNT-25 | Step 4 | non esisteva | Aggiunto: "Execution & Ongoing Partnership" — "Once engaged, we work alongside your leadership team to execute the agreed strategy, monitor progress and adapt as priorities evolve." |
| CNT-26 | Nota confidenzialità sotto steps | assente | "Every initial conversation is confidential, exploratory and without obligation." |

### Form

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-27 | Intro sopra il form | assente | "Every engagement begins with a confidential executive conversation. We work with business owners, boards and leadership teams to solve strategic growth challenges across APAC, the Middle East and EMEA." (bordato gold sx) |
| CNT-28 | Label campo company | "Organisation" | "Company / Organisation" (field `name="company"` invariato) |
| CNT-29 | Dropdown — opzioni | 8 voci generiche | International Market Expansion / Commercial Growth / Executive Advisory / Strategic Representation / Interim Executive Leadership / Data Centre & Infrastructure Strategy / Organisational Transformation / Speaking Engagement / Other |
| CNT-30 | Microcopy sotto submit | assente | "Confidential. No obligation. Executive response within one business day." (centrato sotto il tasto con flex column) |
| CNT-31 | Success message — tempi | "within two business days" | "within one business day" |

### Info panel laterale

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-32 | Label sede | "Headquarters" | "Registered Office" |
| CNT-33 | Ordine indirizzo | MBAM0485, Compass Building | Compass Building / MBAM0485 (ordine spec) |
| CNT-34 | Label Singapore | "Future Regional Presence" | "APAC Office (Planned)" |
| CNT-35 | Testo Singapore | "Sygnific Pte. Ltd. (planned) / Singapore / Supporting organisations across Asia-Pacific." | "Singapore — Supporting clients across Asia-Pacific." |
| CNT-36 | Label email executive | "Executive Enquiries" | "Executive Office" |
| CNT-37 | Connect — "Schedule a Strategy Call" | Testo e aria-label "strategy" | "Schedule a Discovery Call" / aria-label aggiornato |
| CNT-38 | Connect — "Connect via LinkedIn" | Testo e URL `/company/sygnific` | "Connect on LinkedIn" → `linkedin.com/in/enricoferrisygnificglobal/` |
| CNT-39 | Connect — "Subscribe to Executive Insights" | Testo | "Subscribe to Executive Intelligence" |
| CNT-40 | Connect — "Submit an Enquiry" | Presente | Rimosso (duplicato del form) |
| CNT-41 | Mappe mobile | `gap: 1px` | `gap: var(--space-4)`, `background: transparent` |

### FAQ

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-42 | FAQ 05 | non esisteva | "Do you only provide advice, or do you help execute?" — risposta: supporto oltre la strategia |
| CNT-43 | FAQ 06 | non esisteva | "Do you work with companies of all sizes?" — risposta: range da owner-led a grandi corporation |

### Closing CTA

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| CNT-44 | Testo chiusura | "If you believe Sygnific may be the right strategic partner…" | "Tell us what your organisation is trying to achieve. If we are not the right partner, we will tell you." |
| CNT-45 | CTA primaria | "Begin a Partnership" | "Request an Executive Discussion" → `#contact-form` |
| CNT-46 | CTA secondaria | "Schedule a Confidential Strategy Call" → `#contact-form` | "Connect on LinkedIn" → `linkedin.com/in/enricoferrisygnificglobal/` (target blank) |

### Bloccati / da confermare

- Risposta FAQ 05 e FAQ 06 — testo derivato, **conferma cliente richiesta**

---

## Stato avanzamento — aggiornato

| Pagina | Stato |
|--------|-------|
| Contact — `contact.html` | ✅ Completato |
| Footer sitewide | ✅ Completato |
| Hero gold sitewide | ✅ Completato |
| `terms.html` | ✅ Creato |
| `privacy.html` | ✅ Creato |

---

*Ultimo aggiornamento: Contact completata — tutte le modifiche IMPLEMENT e REVIEW implementate.*

---

## Sessione finale — modifiche sitewide e nuove pagine

### Footer — link sitewide

**File modificati:** tutti i file HTML (index, about, solutions, industries, leadership, insights, contact, terms, privacy)

| # | Elemento | Prima | Dopo |
|---|----------|-------|------|
| FTR-1 | Link "Leadership" nel footer Company | assente su tutte le pagine | Aggiunto `<li><a href="leadership.html">Leadership</a></li>` tra Industries e Insights su tutti i file |
| FTR-2 | Link "Insights" nel footer Company di `insights.html` | assente | Aggiunto |
| FTR-3 | Link "Contact" nel footer Company | assente su tutte le pagine | Aggiunto `<li><a href="contact.html">Contact</a></li>` dopo Insights su tutti i file |
| FTR-4 | Footer credit | "Designed by Mayordigital" | "Designed by Mayordigital — Strategic Partner" su tutte le 9 pagine |

**Footer Company nav finale (identico su tutte le pagine):**

| Ordine | Link |
|--------|------|
| 1 | About |
| 2 | Solutions |
| 3 | Industries |
| 4 | Leadership |
| 5 | Insights |
| 6 | Contact |

---

### Hero — testo dorato (italic, weight 300)

**Obiettivo:** allineamento visivo con `insights.html` dove "Better Decisions." usa `<em>` weight 300 gold — stesso trattamento applicato alle altre pagine.

| # | File | Elemento | Prima | Dopo |
|---|------|----------|-------|------|
| HRO-1 | `contact.html` | "Strategic Conversation" | `<strong style="font-weight:600;color:gold">` (bold) | `<em style="font-weight:300;color:gold;font-style:italic">` (light italic) |
| HRO-2 | `solutions.html` | "Measurable Growth." | `<em class="text-italic">` (no colore) | `<em class="text-italic" style="color:var(--color-gold)">` |
| HRO-3 | `about.html` | "Beyond Borders." | `<em class="text-italic">` (no colore) | `<em class="text-italic" style="color:var(--color-gold)">` |

---

### Hero — em dash decorative rimosse

| # | File | Elemento rimosso |
|---|------|-----------------|
| EMD-1 | `insights.html` | `<div class="ins-hero-divider">` — linea gold orizzontale 48×2px sotto h1 |
| EMD-2 | `contact.html` | `<div style="width:48px;height:1px;background:var(--color-gold)...">` — linea gold sotto subtitle |

---

### Nuove pagine legali

#### `terms.html` — Terms of Use

**File creato:** `terms.html`

| # | Elemento | Dettaglio |
|---|----------|-----------|
| TRM-1 | Struttura | Pagina standalone con header/footer identici al sito |
| TRM-2 | Hero | Sfondo navy, eyebrow "Legal", h1 "Terms of Use", data "Last updated: 16 July 2026" |
| TRM-3 | Layout | Grid 2 colonne: sidebar TOC sticky + articolo principale |
| TRM-4 | TOC | 25 anchor link alle sezioni, hover gold con bordo sinistro |
| TRM-5 | Contenuto | 25 articoli completi dal template cliente |
| TRM-6 | Articoli principali | Introduction / No Professional Engagement / No Reliance / No Guarantee / Permitted Use / Prohibited Use / IP / Trademarks / Confidentiality / Liability / Indemnity / Governing Law (UAE, RAK) |
| TRM-7 | Stile | Tabella dati con header navy, righe alternate, block quote gold per indirizzi |
| TRM-8 | `robots` | `noindex, follow` (pagina legale, non indicizzata) |
| TRM-9 | Responsive | Sidebar collassa sopra il contenuto a 900px |

#### `privacy.html` — Privacy Policy

**File creato:** `privacy.html`

| # | Elemento | Dettaglio |
|---|----------|-----------|
| PRV-1 | Struttura | Identica a `terms.html` |
| PRV-2 | Hero | "Privacy Policy", data "Last updated: 16 July 2026" |
| PRV-3 | Contenuto | 16 articoli generati sulla base dei servizi reali del sito |
| PRV-4 | Articolo 2 | Tabella dati raccolti: Identity / Professional / Contact / Enquiry content / Scheduling / Technical |
| PRV-5 | Articolo 5 | Legal basis: Contractual necessity / Legitimate interests / Legal obligation / Consent |
| PRV-6 | Articolo 6 | Retention: 24 mesi per enquiry non convertite / 7 anni per engagement / 90 giorni per log tecnici |
| PRV-7 | Articolo 8 | Tabella provider terzi: Web3Forms / Koalendar / Vercel / LinkedIn — scopo e dati per ciascuno |
| PRV-8 | Articolo 9 | International transfers: UAE non riconosciuto come adequate dal GDPR — deroghe applicate |
| PRV-9 | Articolo 10 | Cookies: no marketing/analytics cookie diretti; Koalendar widget può impostare cookie propri |
| PRV-10 | Articolo 12 | Diritti GDPR: accesso / rettifica / cancellazione / portabilità / obiezione / revoca consenso |
| PRV-11 | Giurisdizione | UAE, Ras Al Khaimah — allineata a Terms of Use |
| PRV-12 | `robots` | `noindex, follow` |

---

### `vercel.json` — rewrite rules aggiornate

| # | Route aggiunta | Destinazione |
|---|---------------|-------------|
| VRL-1 | `/privacy` | `privacy.html` |
| VRL-2 | `/terms` | `terms.html` |

*Nota: le route erano già presenti nel `vercel.json` originale — nessuna modifica necessaria.*

---

*Ultimo aggiornamento: 16 luglio 2026 — Sessione finale completata. Tutte le modifiche implementate e deployate in produzione.*

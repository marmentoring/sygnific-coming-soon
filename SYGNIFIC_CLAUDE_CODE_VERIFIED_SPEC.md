# SYGNIFIC - CLAUDE CODE VERIFIED IMPLEMENTATION SPEC

**Purpose:** apply the approved website changes with the lowest practical regression risk.

**Project:** Sygnific website  
**Target files:** `index.html`, `about.html`, `solutions.html`, `industries.html`, `leadership.html`, `insights.html`, `contact.html`, `css/style.css`, `css/variables.css`, `js/main.js`  
**Priority:** preserve all existing functions, responsive behaviour, interactions, links, accessibility and visual identity unless this specification explicitly requires a change.

> This document is the implementation source of truth.  
> Do not use the original 479-page client review while coding unless an instruction here is genuinely ambiguous.

---

## NON-NEGOTIABLE SAFETY RULES

1. **Do not perform a one-shot rewrite of the entire site.**
2. Work on **one page at a time**, in the order defined below.
3. Before changing code, inspect the complete project structure and identify shared components, repeated header/footer markup, page-specific CSS and JavaScript dependencies.
4. Start only from a clean Git state. Create a branch such as:
   `git checkout -b sygnific-client-revisions`
5. Create a baseline commit before any edit.
6. Never delete or rename an existing:
   - `id`
   - CSS class
   - form field `name`
   - JavaScript selector
   - function
   - event listener
   - `aria-*` attribute
   - anchor target
   unless the change is required and all dependent references are updated.
7. Preserve:
   - sticky header behaviour;
   - mobile navigation and Escape-key closing;
   - active navigation state;
   - fade-in and IntersectionObserver animations;
   - flip cards and interactive elements;
   - smooth scrolling;
   - form validation and submission logic;
   - keyboard accessibility;
   - responsive breakpoints;
   - SEO metadata already present, except where this spec requests an update.
8. Do not invent:
   - metrics;
   - client names;
   - results;
   - office details;
   - email addresses;
   - URLs;
   - biographies;
   - response times;
   - proof points.
   Use an explicit `TODO:` comment and list the missing item in the final report.
9. Do not replace working assets with placeholders.
10. Do not add external libraries, frameworks or build tooling unless strictly necessary and explicitly justified.
11. Avoid broad search-and-replace across the repository. Make scoped edits and inspect the diff after every page.
12. Preserve British English and the exact approved copy in this document.
13. Where this spec says “add”, integrate the content into the current design system rather than creating an unrelated new visual style.
14. Where two instructions conflict, apply this priority:
    1. functional preservation;
    2. exact approved copy;
    3. accessibility;
    4. responsive design;
    5. visual consistency;
    6. optional enhancement.
15. Do not mark an item complete unless it is visibly implemented and verified.

---

## REQUIRED WORKFLOW

### Phase 0 - Audit only

Do not edit files yet.

Produce a compact audit containing:

- project tree;
- shared versus page-specific code;
- current header/footer duplication;
- all existing JS-powered behaviours;
- forms and their submission mechanism;
- external links and assets;
- each requested item classified as:
  - already implemented;
  - text-only change;
  - HTML structure change;
  - CSS change;
  - JavaScript change;
  - blocked by missing information.

Then create a baseline checklist.

### Phase 1 - Implement one page at a time

Required order:

1. Global/shared code
2. Home
3. About
4. Solutions
5. Industries
6. Leadership
7. Insights
8. Contact
9. Final cross-site validation

For each page:

1. Read the entire HTML file and all relevant shared CSS/JS.
2. Apply only that page's approved items plus necessary shared changes.
3. Inspect `git diff --check`.
4. Inspect the full diff for accidental deletions.
5. Verify all old interactive selectors still resolve.
6. Run the site locally.
7. Test desktop, tablet and mobile widths.
8. Record completed, blocked and intentionally unchanged items.
9. Commit the page separately.

Suggested commit pattern:

- `feat(global): apply approved shared Sygnific revisions`
- `feat(home): apply approved client revisions`
- `feat(about): apply approved client revisions`
- and so on.

### Phase 2 - Regression checks

At minimum verify:

- every page loads without console errors;
- no missing CSS, JS, fonts or images;
- no broken internal navigation;
- header scroll behaviour works;
- mobile menu opens, closes and restores body scrolling;
- Escape closes the mobile menu;
- active navigation state remains correct;
- fade-in animations still trigger;
- flip cards and other interactions still work;
- form labels, validation, dropdown and submission state work;
- keyboard focus remains visible;
- no horizontal overflow at 320, 375, 768, 1024 and 1440 px;
- no content is hidden behind the fixed header;
- no duplicate IDs;
- no empty links or `href="#"` unless intentionally used and handled;
- all external links use the intended target behaviour;
- all requested copy uses British English;
- all geographic references use `APAC, the Middle East and EMEA`.

### Phase 3 - Final report

Return:

1. files changed;
2. commits created;
3. checklist of implemented items;
4. blocked items and exactly what input is missing;
5. functions and interactions regression-tested;
6. known limitations;
7. commands used for validation;
8. confirmation that no existing feature was intentionally removed.

---

## DEFINITION OF DONE

An item is complete only when:

- the approved content is present in the correct page;
- the design remains consistent with the existing Sygnific system;
- responsive behaviour has been checked;
- accessibility has not regressed;
- dependent CSS/JS selectors remain valid;
- the page has no new console error;
- the Git diff contains no unrelated change.

---



## STATUS RULES FOR CLAUDE CODE

Claude Code may automatically implement only items labelled:

- **[IMPLEMENT - CLIENT PREFERRED/EXACT]**
- **[IMPLEMENT - CLEAR CLIENT DOCUMENT]**
- **[TECHNICAL SAFETY]**

Claude Code must stop and report, without implementing, items labelled:

- **[REVIEW - CLIENT SUGGESTION]**
- **[REVIEW - PARTIAL SUPPORT]**
- **[REVIEW - NOT TRACEABLE]**
- **[BLOCKED - CLIENT INPUT]**

The page references are derived from rendered page breaks inside the Word file. They may differ from the page count shown by Word/PDF, but they identify the relevant source location consistently within the extracted document.

## IMPLEMENTATION CHECKLIST



# 0. MODIFICHE GLOBALI - TUTTO IL SITO

*Riferimento indicativo nel documento cliente: pagine 41-49, 149-175,
253-304, 406-433.*

- [ ] **[TECHNICAL SAFETY]** Usare in modo uniforme il font ITC Avant Garde Gothic Std nei pesi Source: client document rendered page 101.
Extra Light 200, Book 400 e Demi 600.

- [ ] **[TECHNICAL SAFETY]** Mantenere la palette navy, ivory e bronze/gold già impostata; evitare Source: client document rendered page 264.
nuovi colori.

- [ ] **[REVIEW - PARTIAL SUPPORT]** Usare sempre la grafia britannica: organisation, personalised, centre, Source: client document rendered page 400.
programme, prioritise.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Uniformare la terminologia geografica a: APAC, the Middle East and Source: client document rendered page 18.
EMEA.

- [ ] **[REVIEW - NOT TRACEABLE]** Ridurre i testi descrittivi ripetitivi; ogni sezione deve indicare Source: client document rendered page 356.
problema, approccio, risultato e CTA.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Sostituire CTA generiche come Learn More con CTA executive: Explore Source: client document rendered page 147.
the Solution, Discuss Your Objectives, Begin the Conversation.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Usare al massimo due CTA per sezione finale: una primaria e una Source: client document rendered page 147.
secondaria con funzione diversa.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Inserire in più pagine il concetto: strategy + leadership + Source: client document rendered page 126.
execution + measurable growth.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Ribadire che Sygnific resta coinvolta oltre la strategia e supporta Source: client document rendered page 126.
l'esecuzione.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Evidenziare il modello founder-led: senior leadership directly Source: client document rendered page 126.
involved in every engagement.

- [ ] **[TECHNICAL SAFETY]** Non utilizzare dichiarazioni generiche prive di prova; inserire Source: client document rendered page 175.
metriche verificabili, risultati anonimizzati o proof points quando
disponibili.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Eliminare dal footer la dicitura Designed by Mayordigital. Source: client document rendered page 39.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Nel footer sostituire il payoff generico con: Executive Growth & Source: client document rendered page 35-36.
Market Expansion Partner.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Descrizione footer: Helping organisations expand internationally Source: client document rendered page 38.
through executive leadership, strategic partnerships and commercial
execution.

- [ ] **[REVIEW - NOT TRACEABLE]** Registrazione sede: usare Registered Office, non Headquarters, quando Source: client document rendered page 402.
si indica la sede legale di Ras Al Khaimah.

- [ ] **[TECHNICAL SAFETY]** Controllare che tutti i link header/footer puntino alle pagine Source: client document rendered page 381.
definitive e non ai file .html locali.

- [ ] **[TECHNICAL SAFETY]** Aggiungere stato active coerente alla voce di navigazione della pagina Source: client document rendered page 4-5.
corrente.

- [ ] **[TECHNICAL SAFETY]** Tutte le immagini stock devono comunicare decision-making, leadership, Source: client document rendered page 102.
infrastrutture o mercati reali; evitare handshake generici.

- [ ] **[TECHNICAL SAFETY]** Ottimizzare alt text, title, meta description, Open Graph image e Source: client document rendered page 56.
canonical URL di ogni pagina.

- [ ] **[TECHNICAL SAFETY]** Verificare contrasto, focus state, navigazione da tastiera, form Source: client document rendered page 207.
labels e aria attributes.

## Firma verbale del brand

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Frasi diverse e non coordinate nelle chiusure</th>
<th><strong>MODIFICA FINALE</strong><br />
Usare come linea ricorrente: Strategy creates direction. Execution
creates growth.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Posizionamento da consulenza tradizionale</th>
<th><strong>MODIFICA FINALE</strong><br />
We don't sell consulting packages. We build executive partnerships.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# 1. HOME PAGE - index.html

*Riferimento indicativo nel documento cliente: pagine 1-57, 141-219.*

## Hero

- [ ] **[REVIEW - CLIENT SUGGESTION]** Nel titolo “Driving Growth Across APAC, EMEA & Beyond”, rendere APAC Source: client document rendered page 138.
bronze/gold e bold; rendere EMEA bianco e bold.

- [ ] **[REVIEW - NOT TRACEABLE]** Mantenere il resto del titolo in Extra Light. Source: client document rendered page 382.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Pulsante Begin a Partnership</th>
<th><strong>MODIFICA FINALE</strong><br />
CTA primaria: Begin the Conversation</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere una seconda CTA discreta: Explore Our Solutions. Source: client document rendered page 147.

- [ ] **[TECHNICAL SAFETY]** Controllare che il video/visual hero non riduca la leggibilità del Source: client document rendered page 218.
titolo su mobile.

## Blocco iniziale / Value proposition

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Testo introduttivo descrittivo</th>
<th><strong>MODIFICA FINALE</strong><br />
International growth is rarely limited by opportunity. It is limited by
execution.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Subito sotto, spiegare in un paragrafo breve che Sygnific combina Source: client document rendered page 126.
executive leadership, regional market expertise e commercial execution.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Mantenere quattro pilastri: Executive Leadership; Regional Market Source: client document rendered page 126.
Expansion; Commercial Execution; Infrastructure & Data Centre Expertise.

- [ ] **[REVIEW - NOT TRACEABLE]** Per ogni pilastro aggiungere una sola frase orientata al risultato, Source: client document rendered page 113.
non una descrizione generica.

## Approccio / metodo

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Think Strategically / Execute Relentlessly / Build Sustainable
Growth</th>
<th><strong>MODIFICA FINALE</strong><br />
Think Strategically / Execute with Discipline / Build Sustainable
Growth</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Associare a ciascuna fase un outcome concreto: clarity, commercial Source: client document rendered page 370.
momentum, measurable growth.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Inserire una frase conclusiva: We remain involved beyond strategy - Source: client document rendered page 221-222.
supporting execution, stakeholder alignment and measurable business
outcomes.

## Solutions overview

- [ ] **[REVIEW - PARTIAL SUPPORT]** Mantenere le sei soluzioni, ma uniformare ogni card con: business Source: client document rendered page 283.
challenge, how Sygnific helps, typical outcome.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA card: sostituire Learn More con Explore the Solution. Source: client document rendered page 147.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Ordinare le soluzioni: Executive Advisory; International Market Source: client document rendered page 126.
Expansion; Commercial Growth & Business Development; Strategic
Representation; Interim Executive Leadership; Infrastructure & Data
Centre Advisory.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Nella card Interim Executive Leadership usare sempre questa Source: client document rendered page 21.
denominazione, non Interim Executive.

## Sygnific Difference

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Titolo generico The Sygnific Difference</th>
<th><strong>MODIFICA FINALE</strong><br />
The Sygnific Advantage</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Strutturare i sei punti come differenze verificabili: executive-level Source: client document rendered page 26.
experience; strategy backed by execution; regional expertise; flexible
engagement model; long-term partnership; measurable outcomes.

- [ ] **[REVIEW - PARTIAL SUPPORT]** Aggiungere confronto sintetico fra Traditional Consulting, Internal Source: client document rendered page 160.
Regional Team e Sygnific.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Rendere visivamente dominante la colonna Sygnific. Source: client document rendered page 126.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Inserire una frase sopra il confronto: Most organisations evaluating Source: client document rendered page 175-176.
international growth consider three options. Here is how the approaches
differ.

## Industries preview

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Expertise Where Complexity Creates Opportunity</th>
<th><strong>MODIFICA FINALE</strong><br />
Where Industry Expertise Becomes Commercial Advantage.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - NOT TRACEABLE]** Aggiungere introduzione di 2-3 righe sul motivo per cui l'esperienza Source: client document rendered page 44.
settoriale riduce rischio e accelera l'esecuzione.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Mostrare cinque settori principali e un sesto blocco Emerging Growth Source: client document rendered page 138.
Sectors.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA: Explore Our Industry Expertise. Source: client document rendered page 276.

## Leadership preview

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Executive Leadership Behind Every Engagement</th>
<th><strong>MODIFICA FINALE</strong><br />
Senior Leadership. Every Engagement.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Inserire 20+ years of international executive leadership e le regioni Source: client document rendered page 126.
APAC / Middle East / EMEA.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Specificare: No layers of junior consultants. Source: client document rendered page 164.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA: Meet Enrico Ferri oppure Meet the Leadership Behind Sygnific, Source: client document rendered page 126.
coerente con la pagina Leadership.

## Insights preview

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Ideas That Shape Better Decisions</th>
<th><strong>MODIFICA FINALE</strong><br />
Executive Perspectives for Better Decisions.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Mettere The Infrastructure Constraint come contenuto Source: client document rendered page 18.
principale/featured.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Usare le categorie: Market Expansion; Executive Leadership; Data Source: client document rendered page 126.
Centres & Digital Infrastructure; Commercial Strategy; Infrastructure &
Built Environment; Future Trends.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA: Access the Insights Centre. Source: client document rendered page 37.

## CTA finale Home

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Every Successful Expansion Begins with a Conversation.</th>
<th><strong>MODIFICA FINALE</strong><br />
Growth starts with clarity.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Testo: Tell us where your organisation wants to grow and what is Source: client document rendered page 31.
standing in the way of execution.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA primaria: Book a Strategy Conversation. Source: client document rendered page 139.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA secondaria: Explore How We Work. Source: client document rendered page 147.

# 2. ABOUT PAGE - about.html

*Riferimento indicativo nel documento cliente: pagine 254-304, 333-385.*

## Hero e introduzione

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Building Growth Beyond Borders.</th>
<th><strong>MODIFICA FINALE</strong><br />
Growth Beyond Borders.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Aggiungere una frase introduttiva che spieghi perché Sygnific esiste: Source: client document rendered page 126.
trasformare l'ambizione internazionale in risultati commerciali
attraverso leadership ed esecuzione.

- [ ] **[REVIEW - NOT TRACEABLE]** Rendere la pagina proprietaria del tema “chi siamo e perché Source: client document rendered page 242.
esistiamo”; evitare di ripetere l'elenco completo delle soluzioni.

## Purpose

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Why Sygnific Exists</th>
<th><strong>MODIFICA FINALE</strong><br />
Why Sygnific Exists</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Testo finale suggerito: Sygnific was created to close the gap between Source: client document rendered page 105.
international growth strategy and successful execution.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere il punto di vista founder-led: organisations often know Source: client document rendered page 162-163.
where they want to grow but lack the leadership, relationships and
execution capability to make it happen.

## Vision

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
To become the trusted executive growth partner for organisations
expanding across APAC, the Middle East, and EMEA.</th>
<th><strong>MODIFICA FINALE</strong><br />
To become the executive growth partner organisations trust when
expansion cannot fail.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Rimuovere la virgola prima di and nelle liste geografiche. Source: client document rendered page 31.

## Mission

- [ ] **[REVIEW - NOT TRACEABLE]** Riorganizzare i punti in sequenza: clarify ambition; align leadership; Source: client document rendered page 325.
build market access; execute commercial priorities; deliver measurable
growth.

- [ ] **[REVIEW - NOT TRACEABLE]** Trasformare i verbi in forma attiva e parallela. Source: client document rendered page 247.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Chiudere la sezione con: Strategy creates direction. Execution creates Source: client document rendered page 10.
growth.

## Philosophy

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
We focus on implementation.</th>
<th><strong>MODIFICA FINALE</strong><br />
Growth is not created by strategy alone.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - NOT TRACEABLE]** Usare i quattro principi: Create clarity before complexity; Build Source: client document rendered page 229.
trust before transactions; Execute with discipline; Measure success
through outcomes.

- [ ] **[REVIEW - NOT TRACEABLE]** Eliminare spiegazioni duplicate già presenti nelle sezioni Source: client document rendered page 72.
method/values.

## What makes us different / engagement model

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
No standard packages. Every partnership is tailored.</th>
<th><strong>MODIFICA FINALE</strong><br />
Every engagement begins with your business - not with a predefined
methodology.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Mostrare tre colonne: Traditional Consulting; Internal Team; The Source: client document rendered page 170.
Sygnific Model.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Rendere The Sygnific Model visivamente dominante. Source: client document rendered page 126.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Sintesi Sygnific: Diagnose / Design / Execute / Adapt. Source: client document rendered page 138.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere: We become an extension of your leadership team, Source: client document rendered page 126.
contributing where it creates the greatest commercial value.

## Core values

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Our Core Values</th>
<th><strong>MODIFICA FINALE</strong><br />
The Principles Behind Every Partnership</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Integrity - We say what we believe, even when it is not the easiest Source: client document rendered page 173.
answer.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Accountability - We measure success by outcomes, not recommendations. Source: client document rendered page 246.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Partnership - We work alongside leadership teams, not at a distance. Source: client document rendered page 126.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Excellence - We bring senior judgement, preparation and discipline to Source: client document rendered page 31.
every engagement.

## Commitment / Looking ahead

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
The challenges facing organisations will continue to evolve.</th>
<th><strong>MODIFICA FINALE</strong><br />
Tomorrow's business challenges won't look like today's.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - NOT TRACEABLE]** Spiegare in massimo due paragrafi che technology, infrastructure, Source: client document rendered page 158.
geopolitics and market dynamics continueranno a cambiare.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Chiusura: Sygnific will continue to connect strategic clarity, Source: client document rendered page 105.
executive leadership and disciplined execution.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Ultima frase prima della CTA: We don't simply help businesses expand. Source: client document rendered page 293.
We help them build enduring commercial success across borders.

## CTA About

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Begin the Conversation</th>
<th><strong>MODIFICA FINALE</strong><br />
Build Your Next Phase of Growth.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA primaria: Begin the Conversation. Source: client document rendered page 147.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA secondaria: Meet the Leadership. Source: client document rendered page 147.

# 3. SOLUTIONS PAGE - solutions.html

*Riferimento indicativo nel documento cliente: pagine 50-140, 177-208.*

## Hero

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Executive Capability That Delivers Measurable Growth.</th>
<th><strong>MODIFICA FINALE</strong><br />
Executive Capability. Commercial Execution. Measurable Growth.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Sottotitolo breve: Solutions designed around the strategic priorities, Source: client document rendered page 37.
commercial realities and growth ambitions of your organisation.

## Introduzione

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Solutions built around your objectives.</th>
<th><strong>MODIFICA FINALE</strong><br />
Your objectives define the engagement.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - PARTIAL SUPPORT]** Aggiungere: We do not begin with a standard package. We begin by Source: client document rendered page 9-10.
understanding the business outcome you need to achieve.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Inserire una riga distintiva: Unlike traditional consulting firms, we Source: client document rendered page 60.
remain involved beyond strategy.

## Struttura obbligatoria di ogni soluzione

- [ ] **[REVIEW - PARTIAL SUPPORT]** Business Challenge - il problema che il cliente sta affrontando. Source: client document rendered page 14.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** How Sygnific Helps - approccio e differenziatore. Source: client document rendered page 126.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Typical Engagements - esempi concreti. Source: client document rendered page 52.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Typical Outcomes - risultati attesi. Source: client document rendered page 52.

- [ ] **[REVIEW - NOT TRACEABLE]** Who It Is For - tipologie di organizzazioni/clienti. Source: client document rendered page 385.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA specifica collegata alla soluzione. Source: client document rendered page 147.

## Executive Advisory

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Titolo: Executive Advisory. Source: client document rendered page 14.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Lead: Strategic guidance for leaders making high-impact growth, Source: client document rendered page 51.
investment and transformation decisions.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Typical engagements: growth strategy; leadership alignment; commercial Source: client document rendered page 126.
reviews; board-level decision support; organisational transformation.

- [ ] **[REVIEW - PARTIAL SUPPORT]** Outcomes: faster strategic decisions; clearer priorities; stronger Source: client document rendered page 238.
leadership alignment; improved commercial performance.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA: Discuss an Executive Advisory Engagement. Source: client document rendered page 14.

## International Market Expansion

- [ ] **[REVIEW - CLIENT SUGGESTION]** Lead: Expand into new markets with greater confidence and lower Source: client document rendered page 31.
execution risk.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Typical engagements: market assessment; entry strategy; partner Source: client document rendered page 126.
identification; regional operating model; stakeholder engagement; launch
support.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Outcomes: faster market access; lower expansion risk; stronger local Source: client document rendered page 57.
relationships; sustainable regional presence.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Who it is for: international businesses, private equity portfolio Source: client document rendered page 28.
companies, technology firms, manufacturers.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA: Discuss Your Market Expansion Objectives. Source: client document rendered page 48.

## Commercial Growth & Business Development

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Lead: Turn strategic ambition into sustainable commercial momentum. Source: client document rendered page 324.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Typical engagements: commercial strategy; sales leadership; pipeline Source: client document rendered page 370.
development; strategic partnerships; channel strategy; key-account
development.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Outcomes: stronger commercial performance; higher-quality Source: client document rendered page 370.
partnerships; sustainable pipeline; measurable revenue impact.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Chiusura: Commercial growth is built through trust, execution and Source: client document rendered page 31.
long-term partnerships.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA: Accelerate Commercial Growth. Source: client document rendered page 126.

## Strategic Representation

- [ ] **[REVIEW - PARTIAL SUPPORT]** Lead: Build meaningful regional presence without immediately creating Source: client document rendered page 73-74.
permanent infrastructure.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Spiegare che Sygnific opera come executive extension of the client's Source: client document rendered page 126.
leadership team, non come agente o distributore tradizionale.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Typical engagements: executive representation; stakeholder engagement; Source: client document rendered page 217.
partner development; market intelligence; regional business development.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Outcomes: lower expansion costs; stronger market credibility; trusted Source: client document rendered page 57.
regional relationships; sustainable growth.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA: Explore Strategic Representation. Source: client document rendered page 276.

## Interim Executive Leadership

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere quando è utile: market entry, transformation, leadership Source: client document rendered page 126.
gap, rapid growth, restructuring, critical commercial programme.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Typical roles: Interim Managing Director; Regional Director; Source: client document rendered page 165.
Commercial Director; Market Entry Lead; Transformation Lead.

- [ ] **[REVIEW - NOT TRACEABLE]** Outcomes: immediate senior capability; faster decisions; continuity; Source: client document rendered page 86.
accountable execution; knowledge transfer.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA: Discuss an Interim Leadership Requirement. Source: client document rendered page 126.

## Infrastructure & Data Centre Advisory

- [ ] **[REVIEW - PARTIAL SUPPORT]** Rendere espliciti i destinatari: technology providers, manufacturers, Source: client document rendered page 69.
investors, developers, operators and infrastructure organisations.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Dare maggiore rilevanza a specification strategy, market positioning, Source: client document rendered page 90.
stakeholder access, route-to-market and commercial partnerships.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Typical engagements: data centre market strategy; specification Source: client document rendered page 310.
influence; partner strategy; regional representation; commercial
development.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Outcomes: stronger market positioning; access to decision-makers; Source: client document rendered page 105.
better specification opportunities; faster commercial traction.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA: Discuss Infrastructure & Data Centre Growth. Source: client document rendered page 18.

## Chiusura Solutions

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Every engagement is designed around your business objectives.</th>
<th><strong>MODIFICA FINALE</strong><br />
Every engagement is tailored. Every recommendation must lead toward
execution.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere una strip con audience: Boards; CEOs; Managing Directors; Source: client document rendered page 53.
Business Owners; Regional Leadership Teams.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** CTA finale: Let's Build Your Growth Strategy. Source: client document rendered page 116-117.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA secondaria: Begin a Confidential Conversation. Source: client document rendered page 147.

# 4. INDUSTRIES PAGE - industries.html

*Riferimento indicativo nel documento cliente: pagine 305-335, 314-333.*

## Hero

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Industry Knowledge. Executive Perspective. Commercial Results.</th>
<th><strong>MODIFICA FINALE</strong><br />
Where Industry Expertise Becomes Commercial Advantage.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Sottotitolo: Executive leadership and commercial execution for Source: client document rendered page 31.
organisations operating in complex, rapidly evolving industries.

## Introduzione

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Understanding the forces that shape your industry.</th>
<th><strong>MODIFICA FINALE</strong><br />
Every industry has different rules. Growth requires understanding
them.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - NOT TRACEABLE]** Spiegare in massimo 100 parole che tecnologia, regolamentazione, Source: client document rendered page 275.
procurement, stakeholder e cicli di investimento cambiano per settore.

- [ ] **[REVIEW - NOT TRACEABLE]** Aggiungere il modello a cinque forze operative: Technology; Source: client document rendered page 267.
Regulation; Capital; Decision-makers; Execution.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Chiusura intro: Sygnific helps clients navigate all five. Source: client document rendered page 126.

## Cards settoriali

- [ ] **[REVIEW - CLIENT SUGGESTION]** Mantenere cinque card con struttura uniforme: Industry / Commercial Source: client document rendered page 165.
Reality / Typical Clients / How We Create Value.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Data Centres & Digital Infrastructure: evidenziare AI demand, power Source: client document rendered page 18.
constraints, investment cycles, operators, developers and technology
suppliers.

- [ ] **[REVIEW - PARTIAL SUPPORT]** Building Technologies: sostituire descrizioni generiche con accesso a Source: client document rendered page 16.
specifiers, consultants, developers and regional partners.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Engineering & Manufacturing: includere manufacturers, industrial Source: client document rendered page 106.
technology companies, engineering groups and export-led businesses.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Infrastructure & Construction: includere project ecosystems, Source: client document rendered page 18.
government stakeholders, contractors, consultants and investors.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Smart Buildings & Sustainable Development: usare il concetto Source: client document rendered page 181.
connecting innovative technologies with the decision-makers shaping
tomorrow's projects.

- [ ] **[REVIEW - NOT TRACEABLE]** Cambiare eventuale chiusura card “Close” in Back oppure Return. Source: client document rendered page 284.

- [ ] **[REVIEW - NOT TRACEABLE]** Uniformare l'altezza e il volume di testo delle cinque card. Source: client document rendered page 198.

## Proof e geografia

- [ ] **[REVIEW - CLIENT SUGGESTION]** Inserire una credibility strip con metriche verificabili: years of Source: client document rendered page 223.
experience, countries/regions, executive roles, sectors supported.

- [ ] **[REVIEW - NOT TRACEABLE]** Se non sono disponibili numeri verificabili, usare proof qualitativa Source: client document rendered page 174.
senza percentuali.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Ribadire copertura: APAC; the Middle East; EMEA. Source: client document rendered page 223.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Per ogni regione aggiungere un messaggio di una riga: Singapore - Source: client document rendered page 16.
Gateway to Asia-Pacific; Gulf - Executive access across the Middle East;
EMEA - Cross-border commercial perspective.

## Chiusura Industries

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Across every industry, the same commitment to measurable growth.</th>
<th><strong>MODIFICA FINALE</strong><br />
Different industries. One standard of executive commitment.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Inserire: Every engagement is tailored to the commercial realities of Source: client document rendered page 105.
the industry while maintaining the same commitment to clarity,
leadership and execution.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA primaria: Explore Opportunities Within Your Industry. Source: client document rendered page 147.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** CTA secondaria: Discuss Your Growth Objectives. Source: client document rendered page 13.

# 5. LEADERSHIP PAGE - leadership.html

*Riferimento indicativo nel documento cliente: pagine 220-227, 334-385.*

## Hero

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Executive Leadership Behind Every Engagement</th>
<th><strong>MODIFICA FINALE</strong><br />
Senior Leadership. Every Engagement.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Sottotitolo: Founder-led executive advisory, regional growth and Source: client document rendered page 31.
commercial execution across APAC, the Middle East and EMEA.

## Introduzione

- [ ] **[REVIEW - CLIENT SUGGESTION]** Inserire in apertura: Clients work directly with senior leadership - Source: client document rendered page 126.
without layers of junior consultants.

- [ ] **[REVIEW - NOT TRACEABLE]** Spiegare perché il modello founder-led migliora velocità decisionale, Source: client document rendered page 190.
responsabilità e continuità.

## Founder section - Enrico Ferri

- [ ] **[REVIEW - NOT TRACEABLE]** Aumentare leggermente esposizione/luminosità della foto del founder. Source: client document rendered page 222.

- [ ] **[REVIEW - NOT TRACEABLE]** Evitare biografia puramente cronologica; organizzare il testo per Source: client document rendered page 202.
risultati e responsabilità executive.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Struttura: International Executive Leadership; Commercial Growth; Source: client document rendered page 126.
Regional Expansion; Infrastructure & Data Centres; Board & Stakeholder
Engagement.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Inserire proof points verificabili: 20+ years; regions/countries Source: client document rendered page 190.
managed; executive roles; sectors; strategic partnerships.

- [ ] **[TECHNICAL SAFETY]** Non inserire numeri non confermati. Source: client document rendered page 404.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Titolo ruolo: Founder & Managing Director. Source: client document rendered page 189.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere una citazione personale sulla filosofia: Growth is not Source: client document rendered page 138.
created by strategy alone. It is created when leaders take
responsibility for execution.

## Why direct senior involvement matters

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** No layers of junior consultants. Source: client document rendered page 164.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Direct access to experienced executive judgement. Source: client document rendered page 105.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Strategy supported through execution. Source: client document rendered page 139.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Regional relationships built over two decades. Source: client document rendered page 165.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Accountability for commercial outcomes. Source: client document rendered page 246.

## Network / future leadership

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
A growing network of experienced professionals.</th>
<th><strong>MODIFICA FINALE</strong><br />
A trusted network built around each engagement.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - NOT TRACEABLE]** Specificare che specialisti e senior professionals vengono coinvolti Source: client document rendered page 81.
solo quando aggiungono valore rilevante.

- [ ] **[REVIEW - NOT TRACEABLE]** Evitare che il testo faccia sembrare il team ancora incompleto. Source: client document rendered page 270.

## Principles and expectations

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
What guides every decision we make.</th>
<th><strong>MODIFICA FINALE</strong><br />
The principles behind every decision.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Usare quattro principi: Clarity; Integrity; Accountability; Commercial Source: client document rendered page 165.
Value.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
What you can expect when you work with us.</th>
<th><strong>MODIFICA FINALE</strong><br />
What clients can expect.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - NOT TRACEABLE]** Elenco: direct senior involvement; honest advice; clear priorities; Source: client document rendered page 140.
disciplined execution; transparent communication; measurable progress.

## Chiusura Leadership

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Meet the Leadership Behind Sygnific</th>
<th><strong>MODIFICA FINALE</strong><br />
Leadership That Stays Accountable.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Testo finale: The same senior leadership that shapes the strategy Source: client document rendered page 126.
remains involved through execution.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA primaria: Begin a Conversation. Source: client document rendered page 147.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA secondaria: Explore the Sygnific Approach. Source: client document rendered page 126.

# 6. INSIGHTS PAGE - insights.html

*Riferimento indicativo nel documento cliente: pagine 228-237, 386-433.*

## Hero

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Knowledge That Drives Better Decisions</th>
<th><strong>MODIFICA FINALE</strong><br />
Executive Perspectives for Better Decisions.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Sottotitolo: Original thinking on international growth, commercial Source: client document rendered page 370.
leadership, digital infrastructure and the realities of execution.

- [ ] **[REVIEW - PARTIAL SUPPORT]** Aumentare leggermente l'altezza del hero e inserire un sottile divider Source: client document rendered page 411.
gold sotto il titolo.

## Introduzione

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Practical perspectives for executive decision-makers.</th>
<th><strong>MODIFICA FINALE</strong><br />
We write for executives who need better decisions - not simply more
information.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - NOT TRACEABLE]** Spiegare in un paragrafo che i contenuti nascono dall'esperienza Source: client document rendered page 83.
executive e dai mercati, non da commentary generico.

## Topic architecture

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Usare sei topic: International Growth; Executive Leadership; Data Source: client document rendered page 126.
Centres & Digital Infrastructure; Commercial Strategy; Infrastructure &
Built Environment; Future Trends.

- [ ] **[REVIEW - NOT TRACEABLE]** Rimuovere percentuali decorative o statistiche non necessarie. Source: client document rendered page 190.

- [ ] **[REVIEW - NOT TRACEABLE]** Evitare filtri complessi se non esiste ancora un archivio ampio. Source: client document rendered page 385.

## Recent perspectives

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Rendere The Infrastructure Constraint il contenuto featured Source: client document rendered page 18.
principale, più grande delle altre card.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Titolo completo: The Infrastructure Constraint. Source: client document rendered page 18.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Sottotitolo: How Artificial Intelligence, Energy and Physical Reality Source: client document rendered page 31.
Are Reshaping the Future of Data Centres.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA: Explore the Publication oppure Download Executive Summary. Source: client document rendered page 126.

- [ ] **[REVIEW - NOT TRACEABLE]** Per gli altri contenuti mostrare categoria, titolo, estratto breve, Source: client document rendered page 332.
data e tempo di lettura.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Aggiungere autore: Enrico Ferri, Founder & Managing Director. Source: client document rendered page 319.

## Insights Centre / Executive Intelligence

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
The Insights Centre will progressively include:</th>
<th><strong>MODIFICA FINALE</strong><br />
Sygnific Executive Intelligence</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Presentare i formati: Executive Articles; Industry Analysis; White Source: client document rendered page 126.
Papers; Executive Briefings; Market Outlooks; Strategy Guides; Books.

- [ ] **[REVIEW - NOT TRACEABLE]** Eliminare il tono da “funzionalità future”; presentare ciò che è Source: client document rendered page 196.
disponibile e indicare chiaramente ciò che arriverà.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Executive Briefings: descriverli come practical 5-10 page papers for Source: client document rendered page 126.
CEOs and boards.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Non usare la dicitura AI Reports. Source: client document rendered page 201.

## Subscribe

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Subscribe to Executive Insights</th>
<th><strong>MODIFICA FINALE</strong><br />
Join Sygnific Executive Intelligence.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Specificare cosa riceve l'iscritto: selected executive perspectives, Source: client document rendered page 217.
market developments and publication updates.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Aggiungere: Delivered only when there is something worth saying. Source: client document rendered page 364.

- [ ] **[REVIEW - NOT TRACEABLE]** Raccogliere solo email e, se necessario, nome; evitare un form lungo. Source: client document rendered page 207.

- [ ] **[REVIEW - NOT TRACEABLE]** Mostrare privacy note e consenso. Source: client document rendered page 348.

## Why We Share Knowledge

- [ ] **[REVIEW - CLIENT SUGGESTION]** Testo finale: Our publications reflect the same executive thinking we Source: client document rendered page 217.
bring to every client engagement.

- [ ] **[REVIEW - NOT TRACEABLE]** Aggiungere che condividere conoscenza migliora decisioni, prepara Source: client document rendered page 261.
leadership teams e crea conversazioni più utili.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Chiudere con: Clarity. Execution. Growth. Source: client document rendered page 126.

## CTA finale Insights

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Continue Exploring</th>
<th><strong>MODIFICA FINALE</strong><br />
Where Will Your Next Decision Take You?</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA primaria: Book a Strategy Conversation. Source: client document rendered page 139.

- [ ] **[REVIEW - CLIENT SUGGESTION]** CTA secondaria: Explore Our Solutions. Source: client document rendered page 147.

- [ ] **[REVIEW - NOT TRACEABLE]** Creare sempre un percorso dai contenuti alla consulenza senza rendere Source: client document rendered page 231.
la pagina commerciale.

# 7. CONTACT PAGE - contact.html

*Riferimento indicativo nel documento cliente: pagine 2-22, 238-247,
436-479.*

## Hero

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Start a Strategic Conversation</th>
<th><strong>MODIFICA FINALE</strong><br />
Great Partnerships Begin Before the Proposal.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Sottotitolo: Every engagement begins with understanding your Source: client document rendered page 135-136.
organisation, objectives and the commercial realities shaping your next
decision.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aumentare hero height di circa 10% e aggiungere divider gold discreto. Source: client document rendered page 411.

## Who we work with

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Who we work with, and why they reach out.</th>
<th><strong>MODIFICA FINALE</strong><br />
Who We Work With &amp; Why Clients Engage Us</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Ordinare i tag: Boards of Directors; Chief Executive Officers; Source: client document rendered page 53.
Managing Directors; Regional Leadership Teams; Business Owners; Private
Equity & Investment Groups; Technology & Infrastructure Companies;
Manufacturers & Engineering Organisations.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Valutare l'aggiunta di High-growth International Businesses. Source: client document rendered page 69.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Typical Reasons Clients Contact Us</th>
<th><strong>MODIFICA FINALE</strong><br />
Why Clients Engage Us</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Expanding into APAC, the Middle East or EMEA Source: client document rendered page 3.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Refining international growth strategy Source: client document rendered page 3.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Building regional commercial capability Source: client document rendered page 3.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Developing high-value strategic partnerships Source: client document rendered page 3-4.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Strengthening executive leadership teams Source: client document rendered page 4.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Accelerating commercial growth Source: client document rendered page 4.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Entering or expanding within the data centre sector Source: client document rendered page 4.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Leading organisational transformation Source: client document rendered page 4.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
If your challenge is not listed above, we are always open to discussing
new opportunities.</th>
<th><strong>MODIFICA FINALE</strong><br />
Every business faces different growth challenges. If yours isn't listed
here, we'd be pleased to discuss how we can help.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Engagement process

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Our Engagement Process</th>
<th><strong>MODIFICA FINALE</strong><br />
From Conversation to Partnership</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Trasformare il processo da 3 a 4 fasi. Source: client document rendered page 190.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** STEP 1 - Executive Discovery Session. Source: client document rendered page 6.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Testo: A confidential executive discussion focused on understanding Source: client document rendered page 7.
your business, strategic objectives, growth ambitions and the challenges
standing in the way of execution.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Indicazione: Typically 30-60 minutes. Source: client document rendered page 7.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** STEP 2 - Strategic Evaluation. Source: client document rendered page 11.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Testo: We assess where Sygnific can create measurable value, determine Source: client document rendered page 126.
the most appropriate engagement model and evaluate whether a partnership
is likely to deliver meaningful commercial impact.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Aggiungere: Where appropriate, we develop a high-level roadmap Source: client document rendered page 8.
outlining priorities, milestones and the recommended path forward.

- [ ] **[REVIEW - CLIENT SUGGESTION]** STEP 3 - Tailored Partnership Proposal. Source: client document rendered page 11.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Testo: If we believe we can create significant value together, we Source: client document rendered page 8-9.
prepare a bespoke engagement proposal.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Elenco: Objectives & Scope; Key Deliverables; Timeline & Milestones; Source: client document rendered page 311.
Commercial Structure; Expected Outcomes.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Nota: Every engagement is tailored. We do not offer standard Source: client document rendered page 242.
consulting packages or one-size-fits-all solutions.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** STEP 4 - Execution & Ongoing Partnership. Source: client document rendered page 10.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Testo: Once engaged, we work alongside your leadership team to execute Source: client document rendered page 10.
the agreed strategy, monitor progress and adapt as priorities evolve.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Aggiungere sotto il processo: Every initial conversation is Source: client document rendered page 379-380.
confidential, exploratory and without obligation.

## Form

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Begin a Partnership</th>
<th><strong>MODIFICA FINALE</strong><br />
Explore a Strategic Partnership</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Inserire sopra il form: Every engagement begins with a confidential Source: client document rendered page 13.
executive conversation. We work with business owners, boards and
leadership teams to solve strategic growth challenges across APAC, the
Middle East and EMEA.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Secondo paragrafo: If we believe we can create measurable value Source: client document rendered page 366.
together, we'll arrange an initial discovery session.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Label: Company / Organisation. Source: client document rendered page 13-14.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Mantenere Business Email, Role / Title e Country / Region. Source: client document rendered page 14.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Reason for Contact options: International Market Expansion; Commercial Source: client document rendered page 37.
Growth; Executive Advisory; Strategic Representation; Interim Executive
Leadership; Data Centre & Infrastructure Strategy; Organisational
Transformation; Speaking Engagement; Other.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Message placeholder generico</th>
<th><strong>MODIFICA FINALE</strong><br />
Briefly describe your objectives, current situation, key challenges and
what success would look like.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
SEND AN ENQUIRY</th>
<th><strong>MODIFICA FINALE</strong><br />
Request an Executive Discussion</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere microcopy sotto il pulsante: Confidential. No obligation. Source: client document rendered page 379.
Executive response within one business day.

- [ ] **[TECHNICAL SAFETY]** Validazione form: messaggi chiari, stato loading, conferma invio, Source: client document rendered page 68.
error handling e spam protection.

## Dati laterali e link

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
HEADQUARTERS</th>
<th><strong>MODIFICA FINALE</strong><br />
REGISTERED OFFICE</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Formattare: Sygnific FZ-LLC / Compass Building / MBAM0485 / Al Shohada Source: client document rendered page 16.
Road / Al Hamra Industrial Zone-FZ / Ras Al Khaimah / United Arab
Emirates.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Future Regional Presence</th>
<th><strong>MODIFICA FINALE</strong><br />
APAC Office (Planned)</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Testo: Singapore - Supporting clients across Asia-Pacific. Source: client document rendered page 16.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
Executive Enquiries</th>
<th><strong>MODIFICA FINALE</strong><br />
Executive Office</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Connect With Us: Schedule a Discovery Call; Connect on LinkedIn; Source: client document rendered page 6.
Subscribe to Executive Intelligence.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Rimuovere Submit Enquiry dall'elenco laterale perché duplica il Source: client document rendered page 17.
pulsante del form.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Mantenere la mappa su Ras Al Khaimah perché corrisponde alla sede Source: client document rendered page 16.
registrata.

## FAQ

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Titolo intro: Common questions before beginning a partnership. Source: client document rendered page 24.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** Aggiungere FAQ: Do you only provide advice, or do you help execute? Source: client document rendered page 6.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Risposta: We remain involved beyond strategy, supporting leadership Source: client document rendered page 126.
teams through execution, stakeholder alignment and commercial delivery.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Aggiungere FAQ: Do you undertake short-term projects? Source: client document rendered page 25.

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Aggiungere FAQ: Can Sygnific represent our company without us Source: client document rendered page 26.
establishing a local office?

- [ ] **[IMPLEMENT - CLIENT PREFERRED/EXACT]** Aggiungere FAQ: Do you work with companies of all sizes? Source: client document rendered page 26-27.

- [ ] **[REVIEW - CLIENT SUGGESTION]** Aggiungere FAQ: Is the initial conversation confidential and without Source: client document rendered page 31.
obligation?

- [ ] **[REVIEW - CLIENT SUGGESTION]** Usare organisation in tutte le risposte. Source: client document rendered page 13.

## CTA finale Contact

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>ATTUALE / ELEMENTO</strong><br />
International growth starts with a conversation, not a commitment.</th>
<th><strong>MODIFICA FINALE</strong><br />
Every successful partnership starts with one conversation.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- [ ] **[REVIEW - CLIENT SUGGESTION]** Testo: Tell us what your organisation is trying to achieve. If we are Source: client document rendered page 105.
not the right partner, we will tell you.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA primaria: Request an Executive Discussion. Source: client document rendered page 126.

- [ ] **[IMPLEMENT - CLEAR CLIENT DOCUMENT]** CTA secondaria: Connect on LinkedIn. Source: client document rendered page 17-18.

# 8. CHECKLIST TECNICA FINALE

- [ ] **[TECHNICAL SAFETY]** Verificare desktop, tablet e mobile per tutte le sezioni modificate. Source: client document rendered page 250.

- [ ] **[TECHNICAL SAFETY]** Controllare che titoli lunghi non vadano fuori schermo su 320-390 px. Source: client document rendered page 401.

- [ ] **[TECHNICAL SAFETY]** Verificare menu mobile, chiusura con Escape, blocco scroll e Source: client document rendered page 191-192.
aria-expanded.

- [ ] **[TECHNICAL SAFETY]** Testare tutti i pulsanti e link, inclusi LinkedIn, email, subscription Source: client document rendered page 368.
e strategy call.

- [ ] **[TECHNICAL SAFETY]** Testare il form Contact con campi vuoti, email non valida, invio Source: client document rendered page 37.
riuscito e errore server.

- [ ] **[TECHNICAL SAFETY]** Controllare che le opzioni del dropdown siano identiche al testo Source: client document rendered page 59-60.
approvato.

- [ ] **[TECHNICAL SAFETY]** Verificare che il font locale venga caricato senza 404 e con Source: client document rendered page 340.
font-display: swap.

- [ ] **[TECHNICAL SAFETY]** Comprimere immagini e usare WebP/AVIF dove possibile. Source: client document rendered page 163.

- [ ] **[TECHNICAL SAFETY]** Impostare width/height o aspect-ratio per evitare layout shift. Source: client document rendered page 151.

- [ ] **[TECHNICAL SAFETY]** Controllare meta title, description, OG title, OG description, OG Source: client document rendered page 22.
image e canonical di ogni pagina.

- [ ] **[TECHNICAL SAFETY]** Aggiungere sitemap.xml, robots.txt e favicon definitive. Source: client document rendered page 85.

- [ ] **[TECHNICAL SAFETY]** Controllare che il dominio definitivo sostituisca Source: client document rendered page 379.
sygnific-site-preview.vercel.app.

- [ ] **[TECHNICAL SAFETY]** Controllare coerenza di APAC, the Middle East and EMEA in tutto il Source: client document rendered page 31.
sito.

- [ ] **[TECHNICAL SAFETY]** Controllare British English in tutto il sito. Source: client document rendered page 108-109.

- [ ] **[TECHNICAL SAFETY]** Rimuovere commenti temporanei, link placeholder, URL Unsplash diretti Source: client document rendered page 322.
e asset esterni non definitivi.

- [ ] **[TECHNICAL SAFETY]** Verificare privacy policy, cookie policy e trattamento dei dati del Source: client document rendered page 399.
form/newsletter.

- [ ] **[TECHNICAL SAFETY]** Eseguire Lighthouse su Home, Solutions e Contact e correggere errori Source: client document rendered page 37.
critici di performance/accessibility.

- [ ] **[TECHNICAL SAFETY]** Controllare che non vi siano testi duplicati fra Home, About, Source: client document rendered page 52-53.
Solutions e Leadership.

- [ ] **[TECHNICAL SAFETY]** Far approvare al cliente metriche, proof points e biografia prima Source: client document rendered page 228.
della pubblicazione.

## Elementi da confermare con il cliente prima di inserirli

- [ ] **[BLOCKED - CLIENT INPUT]** Numeri esatti: anni di esperienza, Paesi, mercati, ruoli, clienti o
progetti.

- [ ] **[BLOCKED - CLIENT INPUT]** URL definitivo per prenotazione strategy/discovery call.

- [ ] **[TECHNICAL SAFETY]** LinkedIn personale e/o aziendale. Source: client document rendered page 38.

- [ ] **[BLOCKED - CLIENT INPUT]** Indirizzi email General Enquiries ed Executive Office.

- [ ] **[BLOCKED - CLIENT INPUT]** Funzionamento e provider della newsletter.

- [ ] **[BLOCKED - CLIENT INPUT]** Disponibilità del PDF/Executive Summary di The Infrastructure
Constraint.

- [ ] **[BLOCKED - CLIENT INPUT]** Foto definitiva di Enrico Ferri e autorizzazione all'uso.

- [ ] **[BLOCKED - CLIENT INPUT]** Tempi reali di risposta dichiarati nel form.

**Documento operativo consolidato - Sygnific**


---


---

# FINAL ACCEPTANCE GATE


Before declaring the project complete, perform a repository-wide review.

## Functional preservation

- [ ] Sticky header still works.
- [ ] Mobile navigation still works.
- [ ] Escape-key closing still works.
- [ ] Body scroll is restored after closing mobile navigation.
- [ ] Active navigation state works on every page.
- [ ] Fade-in animations still work.
- [ ] Flip cards and other interactive components still work.
- [ ] Contact form remains operational.
- [ ] Subscription form remains operational, where present.
- [ ] No JavaScript selector points to a removed or renamed element.

## Content integrity

- [ ] Every approved text change in this file is implemented.
- [ ] No text from the original client commentary was accidentally inserted.
- [ ] No unapproved metric, fact, URL or proof point was invented.
- [ ] British English is consistent.
- [ ] Geographic terminology is consistent.
- [ ] CTAs are consistent and link to the correct destinations.

## Visual and responsive integrity

- [ ] No horizontal scrolling at common viewport sizes.
- [ ] No clipped heading, button or card.
- [ ] Header and hero spacing are correct.
- [ ] Cards remain aligned and usable.
- [ ] Images retain correct aspect ratio.
- [ ] Font files load without 404 errors.
- [ ] Focus indicators remain visible.
- [ ] Colour contrast remains acceptable.

## Technical integrity

- [ ] `git diff --check` passes.
- [ ] HTML validation has no new critical error.
- [ ] Browser console has no new error.
- [ ] Internal links have been checked.
- [ ] External assets have been checked.
- [ ] No duplicate IDs were introduced.
- [ ] No dead CSS or JS was created unnecessarily.
- [ ] No dependency was added without approval.

## Final response format

Use this exact structure:

```text
IMPLEMENTATION COMPLETE

Files changed:
- ...

Commits:
- ...

Implemented:
- ...

Blocked / requires client input:
- ...

Regression tests completed:
- ...

Existing functions preserved:
- ...

Known limitations:
- ...

No existing feature was intentionally removed: YES / NO
```

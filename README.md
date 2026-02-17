# Responsiv Webbplats – Egg Zone

Detta är mitt projekt för kursmomentet JavaScript (grund), byggt vidare på en tidigare HTML/CSS-webbplats.

Jag har skapat en responsiv webbplats som marknadsför olika typer av ägg på ett enkelt och modernt sätt, och därefter lagt till interaktivitet med JavaScript enligt kurskraven.

## Sidor

Webbplatsen består av tre länkade sidor:

- Start (`index.html`)
- Om oss (`om-oss.html`)
- Kontakt (`kontakt.html`)

Alla sidor använder semantisk HTML5 med tydlig struktur (`header`, `nav`, `main`, `footer`).

## Teknik

- HTML5
- CSS3 (variabler, Flexbox, Grid, mobile-first)
- JavaScript (DOM, events, data/state, validering)

## JavaScript-funktioner (kurskrav)

### 1. Form + validering (kontakt-sidan)
- Formuläret valideras med JavaScript vid `submit`
- `preventDefault()` används för att kontrollera flödet
- Tydliga felmeddelanden och success-meddelande visas i UI (inte `alert`)

### 2. Dynamisk lista med data (startsidan)
- Produkter lagras i JavaScript som en array av objekt
- Produkter renderas dynamiskt till DOM via en render-funktion
- Innehåll skapas med `createElement`, `innerHTML`, `append`, `dataset`

### 3. Sök/filter i realtid
- Sökfält filtrerar produkter medan användaren skriver (`input`-event)
- Om inga produkter matchar visas tydlig feedback: “Inga matchningar”

### 4. Event delegation
- Klick på favoritknapp hanteras via en gemensam `click`-listener på föräldraelement
- `dataset` används för att identifiera rätt produkt

### 5. Robusthet och användarfeedback
- Hanterar tomma tillstånd (tom lista / inga matchningar)
- Tydliga statusmeddelanden i gränssnittet
- Escape-tangent rensar sökfältet

## Kodstruktur

Projektet använder separata JS-filer:

- `main.js` för funktionalitet på startsidan
- `contact.js` för formulärhantering och validering på kontaktsidan

Övergripande flöde:
`state/data -> render -> events -> uppdatera state -> render igen`

## Tillgänglighet

- Tydliga kontraster och logisk rubrikstruktur
- Alt-texter på bilder
- `aria-live="polite"` för dynamiska meddelanden i formulär och lista

## Reflektion

Det som utvecklades mest i detta projekt var förståelsen för hur JavaScript kopplas till frontend genom DOM-manipulation och events.  
Jag lärde mig att hålla data i ett state-objekt, rendera UI från data och sedan uppdatera UI genom att trigga render igen efter användarinteraktion.

Jag fick också bättre förståelse för validering, event delegation och hur man bygger en enkel men tydlig kodstruktur med separata funktioner och filer.
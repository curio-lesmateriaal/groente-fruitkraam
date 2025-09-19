# 🛒 JavaScript Product Stand

Dit project is een oefening om te leren werken met **JavaScript**, **DOM-manipulatie** en **event listeners**.  
We bouwen een interactieve “fruit- en groentekraam” waar producten met emoji’s worden weergegeven.  
Bij het klikken op een product verandert de voorraad, en dit wordt direct in de browser bijgewerkt.  

---

## ✨ Functionaliteit
- Een lijst van producten wordt weergegeven in de browser.
- Elk product heeft:
  - Een **emoji** als icoon.
  - Een **voorraad** die wordt weergegeven.
- Wanneer je op een product klikt:
  - De voorraad wordt aangepast (in dit voorbeeld verhoogd).
  - De nieuwe waarde wordt direct op het scherm weergegeven.

---

## 📚 Leeruitkomsten
Met deze opdracht leer je:

1. **Werken met arrays en objecten**
   - Je definieert een array van objecten (`products`) met eigenschappen zoals `emoji`, `name`, `price`, `stock`.

2. **DOM-manipulatie**
   - Dynamisch elementen maken met `document.createElement`.
   - Tekst en HTML toevoegen met `.textContent` en `.innerHTML`.
   - Elementen toevoegen aan de pagina met `.appendChild`.

3. **Event handling**
   - Het gebruik van `.addEventListener` om te reageren op gebruikersacties (zoals klikken).

4. **Data en UI koppelen**
   - Je leert hoe je de data in JavaScript (bijvoorbeeld `product.stock`) koppelt aan de interface (de voorraad die getoond wordt).
   - Bij wijzigingen in de data wordt de UI meteen bijgewerkt.

5. **Gebruik van template literals**
   - Dynamisch HTML en tekst samenstellen met backticks (`` `... ${value} ...` ``).

---

## 🛠️ Benodigdheden
- Een basis HTML-bestand met een `div`-element met het id `product-stand`.
- Het JavaScript-bestand met de code (zoals in dit voorbeeld).
- Een browser om de code in te testen.

---

## 🚀 Gebruik
1. Zet de HTML en JavaScript in hetzelfde project.
2. Zorg dat in de HTML een `div` staat met `id="product-stand"`.
3. Koppel het JavaScript-bestand via een `<script>`-tag.
4. Open de pagina in de browser.
5. Klik op een product en zie hoe de voorraad verandert!

---

## 💡 Uitbreidingsmogelijkheden
- Voorraad **verminderen** in plaats van verhogen.
- Toevoegen van een **winkelmandje** met totaalprijs.
- Styling uitbreiden met **Tailwind CSS** of eigen CSS.
- Products automatisch laden vanuit een **JSON-bestand**.

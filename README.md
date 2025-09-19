# 🛒 JavaScript Groente- en fruitkraam

Dit project is een oefening om te leren werken met **JavaScript**, **DOM-manipulatie** en **event listeners**.  
We bouwen een interactieve “fruit- en groentekraam” waar producten met emoji’s worden weergegeven.  
Bij het klikken op een product verandert de voorraad, en dit wordt direct in de browser bijgewerkt.  

<img width="1549" height="782" alt="image" src="https://github.com/user-attachments/assets/471ac013-e084-4ab4-8d59-3f1bf13af265" />


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

## ℹ️ Dit project clonen

Je kunt dit project op twee manieren clonen: via **GitHub Desktop** of via de **command line**.

### 1. Via GitHub Desktop (Windows)
1. Open **GitHub Desktop**.  
2. Klik op **File > Clone Repository**.  
3. Voer de URL van dit project in, bijvoorbeeld:  
   `https://github.com/jouw-gebruikersnaam/jouw-project.git`  
4. Kies een lokale map waar je het project wilt opslaan.  
5. Klik op **Clone**.  

### 2. Via Command Line
1. Open een terminal (PowerShell, CMD of Git Bash).  
2. Navigeer naar de map waar je het project wilt clonen:  
    ```bash
    cd path/naar/map
    ```
3. Voer het volgende commando uit:  
    ```bash
    git clone https://github.com/jouw-gebruikersnaam/jouw-project.git
    ```
4. Ga daarna de projectmap in:  
    ```bash
    cd jouw-project
    ```




## 💡 Uitbreidingsmogelijkheden
- Toon de titel van het product boven de afbeelding
  Toon de stukprijs van een product ergens naar wens
- Voorraad per product kan nooit meer dan 100 zijn
- Toon je budget ergens op het scherm
- Bij ieder product wat je inkoopt gaat dit van je budget af
- Een product kan niet ingekocht worden als je niet genoeg budget hebt.
- Je budget verhoogt zich automatisch met 1.00 per 3 seconden.
- Styling uitbreiden met **Tailwind CSS** of eigen CSS.
- Products automatisch laden vanuit een **JSON-bestand**.

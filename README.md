# Project 2 | Volkswagen | Valtech

In deze readme staat mijn onderzoek naar de performance en accesibility van de [volkswagen](https://www.volkswagen.nl/) website.

![volkswagen](<volkswagen/Screenshot 2019-04-04 at 17.42.32.png>)

## Audit Volkswagen.nl

**audit**
![volkswagen](<volkswagen/volkswagen/Screenshot 2019-04-02 at 14.12.40.png>)
![volkswagen](<volkswagen/volkswagen/Screenshot 2019-04-02 at 14.12.54.png>)
**network**
![volkswagen](<volkswagen/volkswagen/Screenshot 2019-04-02 at 14.27.16.png>)

**punten die mij zijn opgevallen**

- First meaningfull paint
- Font display
- Images
- Kleur contrast
- Tabben door de pagina

## First meaningfull paint

De firstmeaningfull paint heb ik kunnen verbeteren door de critical css van de pagina in de head te zetten. De firstmeaningfull paint is de eerste relevante content die de gebruiker te zien krijgt, wanneer hij een pagina bezoekt.

Wat de critical css doet is dat de pagina, meteen de styling toont wanneer de html wordt ingeladen. Waardoor het inladen van het css bestand de weergave niet blokkeerd. Dit heb ik gedaan door de css door een [critical css](https://jonassebastianohlsson.com/criticalpathcssgenerator/) generator te gooien. Het is wel belangrijk de @font-family uit de critical css te gooien, omdat dit niet helpt als je langzaam internet hebt, waardoor het weer geblokkeerd wordt.

Ook heb ik een aantal scripts uit de head verplaatst naar het einde van de body, omdat deze het renderen van de pagina blokkeerden. Alleen weet ik niet of dit mogelijk is in het cms.

### POC zonder de critical css

![volkswagen](<volkswagen/volkswagen-poc-basis/Screenshot 2019-04-03 at 11.49.36.png>)
![volkswagen](<volkswagen/volkswagen-poc-basis/Screenshot 2019-04-05 at 09.08.26.png>)

### POC na het toepassen van de critical css

![volkswagen](<volkswagen/volkswagen-poc-critical-css/Screenshot 2019-04-03 at 12.25.07.png>)
![volkswagen](<volkswagen/volkswagen-poc-basis/Screenshot 2019-04-04 at 18.48.00.png>)

## Font-display: swap

Wanneer het font nog niet helemaal ingeladen is, is de tekst op de pagina nog niet zichtbaar. Dit kun je oplossen door font-display swap toe te voegen. Waar je op moet letten is dat het fallback font anders kan zijn kwa formaat dan het orginele font. Hierdoor kan er text verspringen, maar dit kan je verbeteren door een [font style matcher](https://meowni.ca/font-style-matcher/) te gebruiken.

```
@font-face {
    font-family: VWHeadWeb;
    src: url(../fonts/VW-PKW/VWHeadWeb-Bold.woff2) format("woff2");
    font-display: swap;
    font-weight: 700;
    font-style: normal;
}
```

**POC zonder font-display: swap**
![volkswagen](<volkswagen/volkswagen-poc-basis/Screenshot 2019-04-04 at 18.48.00.png>)

**POC met font-display: swap**
![volkswagen](<volkswagen/volkswagen-poc-font-optimalisatie/swap/Screenshot 2019-04-05 at 09.30.03.png>)

Ook heb ik de fonts gepreload, waardoor de gebruiker deze eerder binnen krijgt. De performance wordt hierdoor niet echt verbeterd, maar de gebruiker krijgt wel het gevoel dat het allemaal wat sneller gaat.

## Images

![volkswagen](<volkswagen/volkwagen-poc-images/Screenshot 2019-04-04 at 11.36.12.png>)

Op de website van volkswagen worden veel afbeeldingen gebruikt. Zelf wordt er al goed gebruik gemaakt van srcset en sizes, zodat de juiste afbeelding per schermformaat wordt ingeladen. Maar om het laden nog meer te versnellen, kun je gebruik maken van webp.
Webp wordt nog niet door alle browsers ondersteunt, maar je kan er altijd nog een fallback naar .jpg voor geven.

**browser support:**
![volkswagen](<volkswagen/volkwagen-poc-images/Screenshot 2019-04-05 at 08.05.14.png>)

**toepassing van webp**

```
<picture>
    <source srcset="images/logo.webp" type="image/webp">
    <source srcset="images/logo.png" type="image/png">
    <img class="header-block__home-link-logo-image" src="images/logo.png" alt="vw-pkw">
</picture>
```

**voor webp**
![volkswagen](<volkswagen/volkwagen-poc-images/Screenshot 2019-04-05 at 08.12.20.png>)

**na webp**
![volkswagen](<volkswagen/volkwagen-poc-images/Screenshot 2019-04-05 at 08.12.06.png>)

## Kleur contrast

![volkswagen](<volkswagen/kleuren/Screenshot 2019-04-05 at 08.21.19.png>)
Uit de audit kwam naar voren dat de blauwe kleur die gebruikt wordt, geen hoog genoeg contrast heeft.

Ik heb dit nog even getest in de website [color.review](https://color.review/check/00B1EB-FFFFFF)
![volkswagen](<volkswagen/kleuren/Screenshot 2019-04-05 at 08.27.34.png>)
![volkswagen](<volkswagen/kleuren/Screenshot 2019-04-05 at 08.28.28.png>)
![volkswagen](<volkswagen/kleuren/Screenshot 2019-04-05 at 08.28.33.png>)

Ik heb daarom de kleur naar 4.5 gebracht naar een wat donkerdere blauw: `#0077D8`.

**voor**
![volkswagen](<volkswagen/kleuren/Screenshot 2019-04-05 at 08.45.18.png>)

**na**
![volkswagen](<volkswagen/kleuren/Screenshot 2019-04-05 at 08.44.49.png>)

## Tabben door de pagina

Voor gebruikers die om 1 of andere reden alleen maar kunnen tabben, is semantische html erg belangrijk. Ik merkte zelf namelijk dat je als gebruiker niet overal bij kunt en je krijgt ook niet altijd feedback van waar je zit, als je aan het tabben bent.

Het eerste wat mij opviel, was de `meer` knop. Die kun je als je tabt niet selecteren.
![volkswagen](<volkswagen/tabben/Screenshot 2019-04-05 at 08.53.58.png>)

Ook zijn labels als ontdek meer, niet echt duidelijk voor mensen die gebruik maken van screenreaders.
![volkswagen](<volkswagen/tabben/Screenshot 2019-04-05 at 08.36.05.png>)

Aanmelden voor de nieuwsbrief, waarbij je alleen maar aanmelden te horen krijgt.
![volkswagen](<volkswagen/tabben/Screenshot 2019-04-05 at 08.59.59.png>)

En nog een kleine opservatie:
Als je verder tabt aan het einde van de pagina, ga je vervolgens door naar cookies die nog geaccepteerd moeten worden.
Ik heb deze melding zelf nooit in beeld gekregen en vervolgens kwam er nog een input veld over het invullen van je kentteken.
![volkswagen](<volkswagen/tabben/Screenshot 2019-04-05 at 09.00.21.png>)
![volkswagen](<volkswagen/tabben/Screenshot 2019-04-05 at 09.00.32.png>)

# Project 2 | Volkswagen | Valtech

In deze readme staat mijn onderzoek naar de performance en accesibility van de [volkswagen](www.volkswagen.nl)

![volkswagen](<volkswagen/Screenshot 2019-04-04 at 17.42.32.png>)

## Audit Volkswagen.nl

![volkswagen](<volkswagen/volkswagen/Screenshot 2019-04-02 at 14.12.40.png>)
![volkswagen](<volkswagen/volkswagen/Screenshot 2019-04-02 at 14.12.54.png>)
![volkswagen](<volkswagen/volkswagen/Screenshot 2019-04-02 at 14.27.16.png>)

**punten die mij zijn opgevallen**

- First meaningfull paint
- Font display
- Images
- Kleur contrast
- Tabben door de pagina

## First meaningfull paint

**POC zonder de critical css**
![volkswagen](<volkswagen/volkswagen-poc-basis/Screenshot 2019-04-03 at 11.49.36.png>)
![volkswagen](<volkswagen/volkswagen-poc-basis/Screenshot 2019-04-03 at 11.48.54.png>)

De firstmeaningfull paint heb ik kunnen verbeteren door de critical css van de pagina in de head te zetten. De firstmeaningfull paint is de eerste relevante content die de gebruiker te zien krijgt, wanneer hij een pagina bezoekt.

Wat de critical css doet is dat de pagina, meteen de styling toont wanneer de html wordt ingeladen. Waardoor het css bestand de weergave niet blokkeerd. Dit heb ik gedaan door de css door een [critical css](https://jonassebastianohlsson.com/criticalpathcssgenerator/) generator te gooien. Het is wel belangrijk de @font-family uit de critical css te gooien, omdat dit niet helpt als je langzaam internet hebt, waardoor het weer geblokkeerd wordt.

Ook heb ik een aantal scripts uit de head verplaatst naar het einde van de body, omdat deze het renderen van de pagina blokkeerden. Alleen weet ik niet of dit mogelijk is in het cms.

**POC na het toepassen van de critical css**
![volkswagen](<volkswagen/volkswagen-poc-critical-css/Screenshot 2019-04-03 at 12.25.07.png>)
![volkswagen](<volkswagen/volkswagen-poc-critical-css/Screenshot 2019-04-03 at 12.24.49.png>)

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
![volkswagen](<volkswagen/volkswagen-poc-font-optimalisatie/swap/Screenshot 2019-04-04 at 18.47.18.png>)

**POC met font-display: swap**
![volkswagen](<volkswagen/volkswagen-poc-font-optimalisatie/swap/Screenshot 2019-04-04 at 18.48.00.png>)

Ook heb ik de fonts gepreload, waardoor de gebruiker deze eerder binnen krijgt. De performance wordt hierdoor niet echt verbeterd, maar de gebruiker krijgt wel het gevoel dat het allemaal wat sneller gaat.

## Images

## Kleur contrast

## Tabben door de pagina

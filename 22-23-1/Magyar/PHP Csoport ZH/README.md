# PHP Csoport ZH - Minta
## Lore
Egy baráti társaság összegyűjtötte azokat a helyszíneket, ahova gyakran járnak virágot szedni. Mivel a virágok gyönyörűsége néha megrészegíti őket, könnyen elfelejtik, hogy merre jártak már, így egy egyszerű adminisztrációs rendszert szeretnének készíteni hozzá, mert a Messenger csoportokból már kifejezetten elegük lett.

## Induló kód
```PHP
[
    (object)[
        'place' => 'City center, main park',
        'flowersSmelled' => 12,
        'visitedBy' => ['Steve', 'David', 'Christopher']
    ],
    (object)[
        'place' => 'River island',
        'flowersSmelled' => 27,
        'visitedBy' => ['Laure', 'Christopher', 'Patrick', 'Orsy']
    ],
    (object)[
        'place' => 'Steve\'s apartment',
        'flowersSmelled' => 4,
        'visitedBy' => ['Steve', 'Victor']
    ],
    (object)[
        'place' => 'Univeristy Campus',
        'flowersSmelled' => 43,
        'visitedBy' => ['Steve', 'David', 'Christopher', 'Laure', 'Orsy', 'Patrick', 'Victor']
    ],
    (object)[
        'place' => 'Public Library',
        'flowersSmelled' => 2,
        'visitedBy' => ['Laure', 'Orsy']
    ]
]
```

## Fontos
Nem használhatsz JavaScriptet semmilyen módon, a feladatokat PHP-val kell megoldani!

## Hogy fog kinézni
Az oldal három különböző állapota (elfelejtettem magyar változatot csinálni a képből)

![Példa kép a megoldásról](example.png)

## 1. Feladat - 1 pont
Melyik helyet látogatta meg a legtöbb barát?  
Írd ki a megoldást az oldalra!  

## 2. Feladat - 2+1 pont
Írd ki az összes hely nevét az oldalra egy rendezetlen listába (`ul`), majd mögéjük, hogy hány barát volt ott! (2)  
Ha Steve ott volt valahol, az a sor legyen kék! (1)  

## 3. Feladat - 2+2 pont
Legyen egy űrlap az oldalon, ami egy számot vár. Ha elküldjük az űrlapot, írd ki alá a kapott értéket! (1)  
Listázd ki (`ul`) azokat a helyeket, ahol legalább annyi virágot szagoltak meg a barátok, mint a megadott szám! (1)  
Ha a felhasználó nem számot ad meg, írj ki egy hibát! PHP-t használj, ne valami beépített HTML feature-t! (1)  
Ne legyenek hiányzó paraméterből fakadó figyelmeztetések vagy hibák az oldalon az első betöltéskor! (1)  

## 4. Feladat - 2 pont
PHP-ban tárolás helyett file-ból olvasd be az adatokat!


```JS
[
    {
        place: 'City center, main park',
        flowersSmelled: 12,
        visitedBy: ['Steve', 'David', 'Christopher']
    },
    {
        place: 'River island',
        flowersSmelled: 27,
        visitedBy: ['Laure', 'Christopher', 'Patrick', 'Orsy']
    },
    {
        place: 'Steve\'s apartment',
        flowersSmelled: 4,
        visitedBy: ['Steve', 'Victor']
    },
    {
        place: 'Univeristy Campus',
        flowersSmelled: 43,
        visitedBy: ['Steve', 'David', 'Christopher', 'Laure', 'Orsy', 'Patrick', 'Victor']
    },
    {
        place: 'Public Library',
        flowersSmelled: 2,
        visitedBy: ['Laure', 'Orsy']
    }
]
```
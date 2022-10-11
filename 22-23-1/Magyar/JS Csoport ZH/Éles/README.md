# JS CsoportZH - 10.11.
## Lore

A Jées-római Birodalom uralkodóját a választófejedelmek szavazzák meg, és mekkora szerencséd van, pont most esedékes a választás. A Birodalmi Kamara téged bízott meg pár ügylet lebonyolításával.

## Információk
- Az induló HTML tartalmaz egy scriptet, amit nyugodtan átpakolhatsz egy JS fájlba.
- Az induló fájlban benne van a delegáló függvény és a kiinduló adathalmaz.
- Nem kell külön szedned a kódban a feladatokat, ha össze szeretnél vonni valamit valamivel, nyugodtan, csak jelezd kommentben.
- A *Helyes megoldás* szekciók nem a válasz formátumát tartalmazzák, csak neked támpontot adnak, hogy ellenőrizni tudd a kimenetedet (például az 1. feladatban mindegy, hogy nevet vagy objektumot logolsz ki, a lényeg, hogy a jó eredményt adja)
- A feladatokat értelemszerűen JavaScriptben kell megoldani.
- A feladatokat értelemszerűen programozási logikával kell megoldani, hogy tetszőlegesen módosított, nagy tömbre is a helyes eredményt adja, nem pedig csak kilogolod a jó megoldást amit fejben számoltál.
- Igen, az előző két pontot azért írtam bele, mert volt már olyan, hogy "de nem volt kimondva". Ebből fakadóan pls a ZH írása során a tárgy keretein belül logikus normarendszerben gondolkodjatok, hogy mindenkinek könnyebb legyen az élete.

## 1. Feladat - 1 pont
Körbe settenkedtél az udvarban, beszélgettél a nemesekkel, és megtudtad, melyik jelöltre mely választófejedelmek szavaznak valószínűleg (`likelyToVote`).  
Ez alapján melyik jelölt szerzi majd a legtöbb szavazatot?  
Írd a megoldást a konzolra!  
  
*Helyes megoldás: Sheev Palpatine*

## 2. Feladat - 2 pont
Egyes jelöltek maguk is választófejedelmek.   
Kik azok, akik magukra szavaznak?  
Írd a megoldást a konzolra!  
  
*Helyes megoldás: Paul Atreides, Sheev Palpatine*

## 3. Feladat - 1 pont
Nekeresdországi Nevenincs Király a Birodalom megtámadásával fenyeget, így a szavazás menete változni fog.  
A jelöltek új "pontja" innentől a szavazatszám helyett a **szavazatszám szorozva a seregük méretével** (és ha kisebb számokat szeretnél, ez elosztva ezerrel).  
Logold ki a konzolba a jelölteket és új "pontjaikat".  

*Helyes megoldás: Paul Atreides (66), Babar (400), Padmé Amidala (102), Sheev Palpatine (270), Daenerys Targaryen (120), Julien (24)*

## 4. Feladat - 2 pont
Hogy földi halandó is olvashassa számmisztikád eredményét, tedd azt láthatóvá.  
Írd ki az oldalra egy listába (`ul`) elemenként a jelölteket és melléjük új pontjaikat zárójelben.

*Helyes megoldás: A 3. feladat helyes megoldása, csak egy listában az oldalon. Ha a 3. feladatot nem tudtad megoldani, csak szimplán a szavazatszámokat írd a nevek mellé.*  
  
## 5. Feladat - 2+2 pont
**a)** Be szeretnéd jelenteni az új Császárt.  
Ha rákattintunk egy névre, jelöld meg őt valamilyen módón! (2 pont)  
  
**b)** Csak egy Császár lehet.  
Ha rákattintunk valaki másra, a korona kerüljön át hozzá. Akárhányszor kattinthassunk akárkire, a korona mindig az utolsó neve mellé kerüljön! (2 pont)

**Segítség:** Ha ezt a feladatot úgy szeretnéd megoldani, hogy az előzőleg "kijelölt" emberen valamilyen függvényhívást végzel, előfordulhat, hogy még senki sincs kijelölve. Ez esetben emlékezz vissza, hogy az `if(valami){}` azt is nézi, hogy `valami` esetleg `undefined` vagy `null`, és akkor nem lép be.

## Visszajelzés
Ha végeztél a ZH-val, és még van időd, vagy ha óra után ráérsz, esetleg otthon eszedbe jut, kérlek, töltsd ki a ZH visszajelző űrlapot: https://forms.office.com/r/aVEadcqUVH
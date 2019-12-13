Feladatkiírás: http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/beadando/kuldonc-js

<h1>Lore</h1>
A csillagszemű juhász még gondolat sem volt szülei fejében, mikor Nekeresdországban már az volt a szokás, hogy ha a király tüsszent, akkor mindenkinek jó egészséget kell kívánnia neki. Az egyszerű elv megvalósítása azonban komoly fejtörést okozott. A kivitelezésével Furfangot, a főkamarást bízták meg. Főtt is a főkamarás feje, mert úgy kellett a küldöncök útvonalát megtervezni, hogy a kijelölt várakból a küldöncök elindulva, egymás útját nem keresztezve, nem érintve, az egész birodalmat bejárva jussanak el a kijelölt célba. Segíts Furfangnak a küldöncök útvonalának megtervezésében!

Nekeresdország egy négyzetráccsal ábrázolható. Van benne pár kitüntetett cella, ahonnan a küldöncök indulnak és ahova érkeznek. Egy-egy küldönc útvonalának végpontjait ugyanaz a szám jelzi. A küldönc bármelyik végpontból elindulhat. A küldöncök útvonalait az alábbi szabályok betartásával kell megtervezni:
<ul>
    <li>Az azonos számokat folytonos útvonallal kell összekötni.</li>
    <li>Az útvonalak csak vízszintesen és függőlegesen haladhatnak úgy, hogy a mezők közepét érinteniük kell, de ott 90 fokkal elfordulhatnak.</li>
    <li>Az útvonalak nem keresztezhetik egymást és nem ágazhatnak el.</li>
    <li>Az útvonalak számozott mezőkön nem mehetnek keresztül, viszont az összes fehér mezőn útvonalnak kell áthaladnia.</li>
</ul>

<h1>Feladat</h1>
<ul>
    <li>A nyitóképernyőn lehessen választani nehézséget: könnyű, közepes és nehéz.</li>
    <li>A nehézséget kiválasztva megjelenik az adott feladat.</li>
    <li>Az egér segítségével legyen lehetőség az egyforma számokat a szabályok betartásával összekötni.</li>
    <li>    Egy számozott mezőn lenyomjuk az egérgombot (mousedown), majd nyomva tartva kijelöljük a küldönc útvonalát (mouseover vagy mouseenter) a szabályok betartásával.</li>
    <li>    Ugyanahhoz a számhoz érve elengedve az egérgombot (mousedown) a vonal rögzül.</li>
    <li>    Ha nem ugyanazon a szám mezőn engedjük el a gombot, akkor a vonal megszűnik.</li>
    <li>    Ha a vonallal rossz irányban mentünk, akkor a vonalat visszafele követve lehetőség van az utolsó lépéseket törölni.</li>
    <li>    Ha szabálytalan mezőre lépnénk (pl. egy másik vonalat kereszteznénk vagy rossz szám mezőre lépünk), akkor a vonal nem hosszabbodik meg.</li>
    <li>    Egy már rögzült vonalon jobb gombot nyomva, a vonal törlődik.</li>
    <li>Ha az összes küldönc útvonala a helyére került, és az egész ország le van fedve, akkor a játék írja ki, hogy a felhasználó nyert. Ezután legyen lehetőség a főoldalra visszamenni, és új játékot választani.</li>
    <li>Legyen lehetőség mindhárom pályánál a játékállást elmenteni. Ha már van ilyen játékállás, akkor kérdezzen rá, hogy valóban felül akarja-e írni. Később az adott pályához egy már mentett állás legyen betölthető.</li>
</ul>

<h1>Követelmények</h1>
<h2>Kötelező</h2>
<ul>
    <li>Legalább 1 pálya megjelenik.</li>
    <li>A pontok valamilyen módon (pl. kattintgatással), de egyértelműen (pl. különböző színekkel, vagy számokkal) összeköthetők.</li>
    <li>A végállapot ellenőrzése, nyerés kiírása.</li>
    <li>Az oldalnak tartalmaznia kell a következő kijelentéseket</li>
</ul>
<pre>
[Név]
[Neptun]
[Tárgy & beadandó neve]
[Beküldés ideje]
Ezt a megoldást [Név, Neptun ID] küldte be és készítette a [Tárgy neve] kurzus [Feladat neve] feladatához.
Kijelentem, hogy ez a megoldás a saját munkám.
Nem másoltam vagy használtam harmadik féltől származó megoldásokat.
Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé.
Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere (ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, 
hogy mindaddig, amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét - saját munkájaként mutatja be, 
az fegyelmi vétségnek számít. A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
</pre>

<h2>Opcionális</h2>
<ul>
    <li>A pályák választhatóak, a kiválasztott pálya megjelenik. (1 pont)</li>
    <li>Az egérgombot lenyomva tartva és az egeret mozgatva a küldönc útvonala kijelölhető. (2 pont)</li>
    <li>Az útvonal csak számból indulhat. (1 pont)</li>
    <li>Ha a kiindulásival megegyező számon végzünk, akkor a vonal rögzül. (1 pont)</li>
    <li>Ha nem a kiindulásival megegyező számon végzünk, akkor a húzott vonal eltűnik. (1 pont)</li>
    <li>A vonal a szabályok betartásával húzható, nem mehet át másik vonalon vagy számmezőn. (1 pont)</li>
    <li>A vonal visszafele menve rövidíthető, az utolsó elrontott lépések így visszavonhatók. (2 pont)</li>
    <li>Egy kész vonalra jobb gombbal kattintva a vonal eltűnik. (1 pont)</li>
    <li>Játékállás mindegyik pályánál elmenthető. (1 pont)</li>
    <li>Mentéskor ellenőrzi, hogy van-e már mentett pálya. (1 pont)</li>
    <li>Egy adott pályánál a játékállás betölthető. (1 pont)</li>
    <li>Nincs nagyobb programhiba, nem csalhatók elő furcsa jelenségek (1 pont)</li>
    <li>1 hét késés (-2 pont)</li>
    <li>2 hét késés (-4 pont)</li>
    <li>2 hétnél több késés (nincs elfogadva a beadandó, nincs jegy)</li>
</ul>

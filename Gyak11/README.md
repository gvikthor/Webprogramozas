<h1>AJAX: Asincron JAvascript and Xml</h1>

<h2>Alapfogalmak</h2>
<h3>HTML, XHTML, CSS</h3>
    megjelenítés
<h3>DOM</h3>
    dinamikus felhasználói felület, interakció
<h3>XML, XSLT</h3>
    adatleíró és kommunikációs formátum
<h3>XMLHttpRequest</h3>
    aszinkron kliens-szerver adatátvitel

<h2>Metódusok</h2>
    <h3>open("method", "URL", async)</h3>
        a meghívandó URL, metódus, stb. beállítása
    <h3>send([data])</h3>
        kérés küldése; az opcionális data paraméter a kérés törzseként továbbítódik
    <h3>abort()</h3>
        az aktuális kérés leállítása
    <h3>getAllResponseHeaders()</h3>
        HTTP fejlécek visszaadása szövegként újsorral elválasztott fejléc: érték formában
    <h3>getResponseHeader("fejléc")</h3>
        adott fejléc értékét adja vissza
    <h3>setRequestHeader("fejléc", "érték")</h3>
        a kérés fejlécét állítja be küldés előtt

<h2>Tulajdonságok</h2>
    <h3>readyState</h3>
        a kérés aktuális státusza
        <ol>
            <li>uninitialized</li>
            <li>loading</li>
            <li>loaded</li>
            <li>interactive (néhány adat érkezett)</li>
            <li>complete</li>
        </ol>
    <h3>status
        a szerverről érkező HTTP státuszkód, pl. 200 (oké), 404 (Nem oké)
    <h3>statusText</h3>
        a szerverről érkező szöveges HTTP státusz
    <h3>responseText</h3>
        a szerverről visszaérkezett válasz szöveges változata
    <h3>responseXML</h3>
        ha a válasz XML dokumentum volt, akkor annak XML DOM dokumentuma

<h2>Események</h2>
    <h3>readystatechange</h3>
        a readyState állapot változásainál hívódik meg

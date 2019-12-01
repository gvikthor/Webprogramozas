<h1>AJAX: Asincron JAvascript and Xml</h1>

<h2>Alapfogalmak</h2>
HTML, XHTML, CSS
    megjelenítés
DOM
    dinamikus felhasználói felület, interakció
XML, XSLT
    adatleíró és kommunikációs formátum
XMLHttpRequest
    aszinkron kliens-szerver adatátvitel

<h2>Metódusok</h2>
    open("method", "URL", async)
        a meghívandó URL, metódus, stb. beállítása
    send([data])
        kérés küldése; az opcionális data paraméter a kérés törzseként továbbítódik
    abort()
        az aktuális kérés leállítása
    getAllResponseHeaders()
        HTTP fejlécek visszaadása szövegként újsorral elválasztott fejléc: érték formában
    getResponseHeader("fejléc")
        adott fejléc értékét adja vissza
    setRequestHeader("fejléc", "érték")
        a kérés fejlécét állítja be küldés előtt

<h2>Tulajdonságok</h2>
    readyState
        a kérés aktuális státusza
        0 = uninitialized
        1 = loading
        2 = loaded
        3 = interactive (néhány adat érkezett)
        4 = complete
    status
        a szerverről érkező HTTP státuszkód, pl. 200 (oké), 404 (Nem oké)
    statusText
        a szerverről érkező szöveges HTTP státusz
    responseText
        a szerverről visszaérkezett válasz szöveges változata
    responseXML
        ha a válasz XML dokumentum volt, akkor annak XML DOM dokumentuma

<h2>Események</h2>
    readystatechange
        a readyState állapot változásainál hívódik meg

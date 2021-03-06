<h1>REGEX</h1>
https://github.com/gvikthor/Webprogramozas/tree/master/Gyak09/regex_minta <br>
Például egy xx-xx-xxx-xxxx formátumú telefonszámot úgy tudsz tesztelni, hogy
<pre>
preg_match("/^[0-9][0-9]\-[0-9][0-9]\-[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]$/", $valami);
</pre>
Ahol:<br>
"/ megnyitja a reguláris kifejezést<br>
^ jelzi, hogy ez a kifejezés eleje, tehát semmi más nem lehet előtte<br>
[0-9] egy karakter 0-tól 9-ig<br>
\- levédve egy kötőjel<br>
$ jelzi, hogy ez a kifejezés vége, tehát semmi más nem lehet utána<br>
/" reguláris kifejezés vége<br>

<h1>MIDI és MIXER ZH</h1>
Eredeti pontozás szerint hármasig oldottuk meg őket konzultáción. Amit ti küldtetek, az 240 pontig megy.

<h1>Thoros ZH</h1>
Feladat: http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/zh/2018-19-2/thor <br>
Az 5-ös feladatig készen vannak a feladatok.<br>
A tesztelőben a következők failelnek:
<ul>
<li>Amikor a tesztelő rossz adatot próbál megadni. Ez azért van, mert AJAX-al csináltam, és letiltom a gomb tényleges eventjét, de a teszt GET metódust küld. <b>Tehát ha ZH-ban form kezelés van, ne AJAX hívást csináljatok, hanem töltsétek újra az oldalt, és helyben kezeljétek le</b>, pl.: https://github.com/gvikthor/Webprogramozas/tree/master/Gyak08</li>
<li>Az új menü felvétele failel, mert már vettem fel kézzel tesztelés közben más menüket. Ha JSON-t visszaállítom eredeti állapotba, átmegy a teszten. <b>Erre ZH-n is figyeljetek!</b></li>
</ul>

<h1>Avengerses ZH</h1>
Ti küldtétek.

<h1>Egyéb dolgok</h1>
<ul>
  <li>Visnovitz Marci megoldásai: https://github.com/vimtaai/elte/tree/master/2019-20-1/exam </li>
  <li>Data attribútumok (pl. data-id): https://www.abeautifulsite.net/working-with-html5-data-attributes </li>
  <li>Ne felejtsetek el write jogot adni a file-okra! </li>
  <li>Ha valahol valami érték furcsa, vagy elakadtok, ne féljetek console.log()-ot és var_dump()-ot használni! </li>
  <li>Logikai kifejezések zárójelezésére figyeljetek, főleg a tagadásokra! </li>
  <li>Az AJAX nagyon sok pontot ér. Már ha csak küldesz egy empty post metódust AJAX-el, arra is ad pontot a tesztelő!</li>
  <li>Figyeljetek rá, hogy a sima aposztrófok php stringekben megölhetik a javascripteket! Használjatok inkább shift+2 idézőjelet, de leginkább altgr+7-et mindenhol a javascriptben. Pl.: <br>
  Ez elhal
  <pre>
  < ?php
    $alma = [];
    $alma["elso"] = "Luke's lightsaber";
  ? >

  <script>
      console.log('< ?=$alma["elso"]? >')
  </script>
  </pre>
    
  Ez nem
  <pre>
  < ?php
    $alma = [];
    $alma["elso"] = "Luke's lightsaber";
  ? >

  <script>
      console.log("< ?=$alma["elso"]? >")
  </script>
  </pre>
  
  Ez a legbiztosabb
  <pre>
  < ?php
    $alma = [];
    $alma["elso"] = "Luke's lightsaber";
  ? >

  <script>
      console.log(`< ?=$alma["elso"]? >`)
  </script>
  </pre>
  (A kérdőjelek környékén a szóközök csak a github formázás miatt kellenek)
  </li>
</ul>

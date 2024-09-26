# Szerveroldali 3. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Mi a layout lényege?

Beadás: INF-es bejelentkezéssel formson 

## Elindulás
Folytassuk az előző órai projektet - értelemszerűen, neked nem kell másolni a mappát, én csak azért csinálom, hogy lássuk az előrehaladást. Első lépésként teszteljük, hogy az oldal még mindig működik. Nyissunk két külön konzolt a `blog-dolog` mappában, és az alábbi két parancsot futtassuk.
```
npm run dev
php artisan serve
```

*Ha most töltötted le githubról a projektet, és `composer install` parancsot futtatva szeretnéd telepíteni a függőségeket, nem fogd tudni elindítani az oldalt, 500-as hibát fogsz kapni. Ez azért van, mert a github értelemszerűen a .env filet nem tölti fel. Először másold át a .env.example file tartalmát a .env fileba: `copy .env.example .env` (vagy kézzel). Ezt követően még a legfontosabb elem nincs meg, az `APP_KEY`. Ezt a `php artisan key:generate` parancs fogja kigenerálni.*

Az oldal tartalmát alakítsuk át, hogy valami blogos template-je legyen. Módosítani fogjuk a következő file-okat:
```
resources\views\welcome.blade.php
resources\views\layouts\guest.blade.php
resources\css\app.css
```

A `welcome` oldal body-jába, a h1-es cím alá tegyünk be egy egyszerű kártyát (belőle fogunk többet generálni majd).  
⌨️ `01_welcome.blade.php`

A `guest` oldal bodyja adjon keretet a bejegyzéseknek pár stílusosztállyal.  
⌨️ `02_guest.blade.php`

És végül az `app` css file adja meg a színeket (az `@tailwind`-es sorok után). Ezekből a stílusosztályokból egyelőre az input field-eset még nem most használjuk majd.   
⌨️ `03_app.css`

## Kimenet

Most jön az izgalmas rész, generáljunk tartalmat az oldalra. Adott egy PHP adatszerkezet, és blade utasítások segítségével szeretnénk a `welcome` oldalt feltölteni mindenféle bejegyzésekkel. Mik is voltak a blade php utasításaink?
```
{{-- komment --}}

@php
@endphp

{{$behelyettesites}}

@if ()
@elseif ()
@else
@endif

@foreach ()
@endforeach

@forelse ()
@empty
@endofrelse

@switch ()
    @case ()
        @break
    @case ()
        @break
    @default
@endswitch
```

Töltsünk fel valamilyen tömböt példa adatokkal, és próbáljuk meg kigenerálni a tartalmát az oldalra.  
⌨️ `04_example_data.php`

**⚠️ Feladat: Generáld ki a bejegyzéseket a welcomeban található formátumban!**  
Megoldás:
```
```

## Bemenet

Most, hogy valamit meg tud jeleníteni az oldalon az alkalmazás """adatbázisából""", ideje oda visszajuttatni egyebeket. Hogyan fogjuk ezt megtenni? Oly sok a file, és oly kevés az idő. Szerencsére a laravel erős toolokat ad a kezünkbe, plusz sokat fog segíteni, hogy az unalmas részét előre megírtam. Először is emlékezzünk vissza az első gyakorlatra, volt szó valami rúúútingról. A `routes\web.php` mappa volt az, aki megmondta, milyen kérés hova fog érkezni. Ez a file már kicsit spoilerez nekünk, hogy majd kontrollerekkel hogyan lehet szépen megoldani a feladatot, amit csinálni szeretnénk, de egyelőre még haladjunk egy kisebb lépéssel. Szeretném megadni, hogy lesz egy bejegyzés létrehozás, vagyis `create`-elni fogok egy elemet a `posts`-ok közé.
```PHP
Route::get('/posts/create', function () {
    return view('posts.create');
});
```
Ez a pár sor azt mondja meg, hogy ha egy `get` kérés érkezik a `posts/create` oldalra, akkor azt irányítsuk egy nézetre, ami a `posts` nézetmappában található `create` oldal. Na de hol van ez az oldal? Hozzuk létre! A `views` mappába először csinálnunk kell egy ilyen nézetmappát, tehát hozzunk létre egy `posts` nevű mappát. A `views\posts` mappába pedig alkossuk meg a `create.blade.php` filet, amiben az oldal konkrét tartalma lesz.  
⌨️ `05_create.blade.php`

**Ezen a ponton érdemes mindkét konzolban a futó parancsot megölni és újraindítani.**

Mi is történik most? Ha megnyitjuk a `hostnév/posts/create` oldalt, akkor megjelenik az űrlap. Hogyan történik ez? Meglátogatjuk ezt az oldalt, lefut a `web.php`-ban definiált routing függvényünk. Ebben a függvényben van egy `view` függvény, aminek a scope-ja a view mappa, és a paraméterei megmondják, hogy a posts nézetmappa create oldalát szeretném elkérni. A `view` visszaadja a kigenerált oldalt, amit meg kell jeleníteni.

Űrlapokkal általában egy dolgot szeretnénk: elküldeni. Ehhez két dolog kellett anno webprogon, és nem is változott azóta semmi: action és method. Legyen a metódusunk post (`method="POST"`), ezt talán intuitíven ki is találhattuk. Na de mi legyen az action? Ha visszaemlékszünk, ehhez kellett valami céloldal. Ha pedig oldalt csinálunk, akkor az előbb látott nekifutás kell újra.

Routing: `routes\web.php` fileba kell egy új routing, ezúttal POST kérésre és store oldalra. Azonban ez nem egy megjelenítő oldal, szóval még ne írjunk semmit a returnbe, ellenben biztosan lesznek paramétereim - ezt pedig a kérésen keresztül fogom megszerezni, amit típussal együtt megadok paraméterként.

```PHP
Route::post('/posts/store', function (Request $request) {

});
```

Ez így önmagában sajnos viszont nem elég. Beírtam ide ezt a Request szócskát, mint típust, de a file-ban mág nem ismerjük, hogy ő kicsoda (figyelj oda, hogy ha valami autoimport bővítmény behúzott hozzá valamit!). Ezért meg kell adni a file elején, hogy honnan jön ez a Request osztály.
```PHP
use Illuminate\Http\Request;
```

Na de jön a probléma: nincs szép megfelelőm ennek az átirányításnak. Hogyan tudom megmondnai, hogy ez a `posts.store`? Igazán egyszerűen: megmondom neki erőszakkal, hogy ez a neve. Ezzel a névvel tudok majd erre az egészre hivatkozni.
```PHP
Route::post('/posts/store', function (Request $request) {

})->name('posts.store');
```

Ha pedig most átmászunk a `views\posts\create.blade.php` fileba, be is tudjuk írni az actiont, ami egy ide routolás lesz: `action="{{ route('posts.store') }}"`.

Most már elküldhetem az űrlapot, de az eredmény valami, amit eddig (legtöbben) még nem tapasztaltunk. 419 expired hiba. Az okozat kiderítéséhez meg kell ismerkednünk a CSRF fogalmával. Kis kontextus. Képzeljük el, hogy van ez a blogos oldalunk, és pl. az 1634 ID-jú cikkeket úgy lehet megnézni, hogy `boldogblogdolog.hu/cikk/1634`. Ezt a cikket törölni is lehet a `boldogblogdolog.hu/cikk/1634/delete` URL-en keresztül, de értelemszerűen be van védve, ha nincs valaki bejelentkezve, nem fog működni. No de ha valaki küld nekem (egy törlésre jogosult felhasználónak) mondjuk a munkahelyi e-mailemre egy levelet, amit meg fogok nyitni a böngészőben, ahol valószínűleg be vagyok lépve az oldalba is, akkor tud valami csúnya dolgot csinálni. Beírhatja egy kép source-ának ezt a címet (`<img src="boldogblogdolog.hu/cikk/1634/delete">`), és akkor a böngészőm megpróbálja betölteni, amihez le kell futtatnia a kérést, és hát láss csodát, be vagyok jelentkezve, tudja törölni a cikket.

**⚠️ Próbáljuk meg rákeresés nélkül megfejteni, mit rövidít ez a négy betű!**
Megoldás:
```

```

Ennek első kivédésére a GET kéréseket próbáljuk elkerülni, de ez még nem elég, a szerver kér valami plusz biztosítékot is, hogy itt nem lesz para. Ez a kódírás részéről semmi bonyolultat nem jelent, bele kell írnunk minden formba, hogy `@csrf`.
```PHP
<form ...>
        @csrf
        <label for="title">...
</form>
```

Azonban ha ezután újratöltjük az űrlapot, és megnézzük a kódját, valami nagyon izgalmasat láthatunk:
```HTML
<input type="hidden" name="_token" value="ValamiHosszúToken" autocomplete="off">
```
Bekerült egy olyan kulcs, ami biztosítja, hogy a szerver ugyanazt az oldalt kapja vissza, mint amit elküldött. Ha nem ismeri fel, akkor nem fogja elfogadni a kérést, és azt fogja mondani, hogy lejárt, hiszen már nem létezik ez a token (persze lehet, hogy sose létezett, de ő ezt honnan tudná, neki ugyanaz).

Az elküldött űrlap most egy üres oldalra visz minket. Nyilván, mert semmit nem mondtunk a routingban a view-nak. Persze, hiszen nem megjeleníteni kell itt egy oldalt, hanem validálni az adatokat. Egyelőre ellenőrizzük csak a `title` inputot. Mit szeretnénk? Ne legyen üres, ne legyen túl rövid, ne legyen túl hosszú. Erre nagyon egyszerű toolokat kapunk a laraveltől.
```PHP
Route::post('/posts/store', function (Request $request) {
    $request->validate([
        'title' => 'required|min:3|max:255',
    ]);
})->name('posts.store');
```

Ha most elküldünk egy kérést, két lehetőség van:
1. Nem történik semmi
2. Nem történik semmi

Foglalkozzunk először az előbbivel, amikor nem történik semmi. Itt helyes adatokat adtunk meg (3 - 255 hosszú cím), az oldal elfogadta ezt, majd, mivel még semmit nem mondtam, hogy mi legyen, leáll. Nem volt semmi return view, szóval nem látunk semmit, csak egy fehér oldalt. Ez esetben jó lenne, ha eltárolná a cikket az adatbázisban, illetve visszairányítana a főoldalra. Egyelőre ezzel nem fogunk foglalkozni.

Most foglalkozzunk az utóbbi esettel, mikor is nem történik semmi. Most rossz adatokat adtam meg (pl. 2 hosszú címet). Úgy tűnhet, mintha a create oldalon maradtam volna, pedig nem, igazából visszairányított ide a store, mert hibát talált validálás közben. A hibát ő el is mentette a munkamenetbe/sessionbe. Ennek a hibának a kiolvasása igen egyszerű lesz: van hozzá egy ún. error blokkunk. Az error blokk egy if, ami megnézi, hogy adott mezőhöz tartozik-e hiba, és ha igen, belül tudjuk kezelni a hozzá tartozó hibaüzenetet. Tegyünk például egy piros szöveget a cím input mezője alá, ha hiba volt.
```PHP
@error('title')
    <div class="text-red-500">{{ $message }}</div>
@enderror
```
Itt a message változót úgy érdemes felfogni, mint egy foreachben a ciklusváltozó. A hibaüzenetek szövegeinek kezeléséről részletesen itt olvashatsz: [https://laravel.com/docs/10.x/localization](https://laravel.com/docs/10.x/localization), ez külön fileokkal oldja meg szépen a dolgot. Ha most csak on the fly akarjuk megnézni, ez hogyan működik, megmondhatjuk neki közvetlenül is (bár ez annyira nem javallott irl).
```PHP
$request->validate([
    'title' => 'required|min:3|max:255',
],[
    'required' => 'Kötelezően kitöltendő mező :attribute , abba az attributeba behelyettesítődik, hogy "title"!',
    'name.required' => 'Ez egy specifikusabb megfogalmazás, ide beleírhatom kézzel, hogy "név".'
]);
```
Nyilván van egy halom nyelvi csomag, nem kell kézzel csinálgatni. Github laravel/lang.

Emlékezzünk vissza a webprog tárgyra, elhangzott sokszor az "állapottartó" szó. Hogyan lesz ez az űrlap állapottartó? Egyszerű, az `old(param)` függvény visszaadja azt az értéket, amit beírtak a param nevű inputba. Kombináljuk ezt a nullco operátorunkkal, ami lenyeli az üres (null) értékeket és helyette egy defaultot jelenít meg, és készen is vagyunk.
```PHP
value={{ old('title') ?? '' }}
```
Sőt, ha megsúgom, hogy létezik default value beépítve a függvénybe, akkor mégszebb lesz.
```PHP
value={{ old('title', '') }}
```

**⚠️ Írd meg a maradék validációt és hibakiírást az űrlaphoz!**  
Megoldás:
```
```

**⚠️ Adj hozzá egy új input mezőt, ami valamilyen számot vár (pl. minimum életkor a cikk olvasásához), validáld és kezeld hibaüzenettel! Elérhető validálási szabályok: [https://laravel.com/docs/10.x/validation#available-validation-rules](https://laravel.com/docs/10.x/validation#available-validation-rules)**  

## Összekötés

Most már tudok listázni (még nem adatbázisból) és tudok beolvasni (még nem adatbázisba), egyetlen dolog van hátra, kössük össze a kettőt. A legjobb az lenne, ha keletkezne egy gomb, ami átirányít a welcome oldalról a create oldalra. *puff*
```PHP
<div class=" py-6 ">
    <a
        href="{{ route('posts.create') }}"
        class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >Új bejegyzés</a>
</div>
```
*Igen, ezeket a classokat is a copilot generálta nagyrészt.*

Ez még hibát fog dobni. Miért? Mert a routing még nem tudja, mi az a `posts.create`. Mondjuk meg neki a `routes\web.php` fileban:
```PHP
Route::get('/posts/create', function () {
    return view('posts.create');
})->name('posts.create');
```

Most már van egy szép gombom a főoldalon, amin keresztül eljutok az űrlapra.
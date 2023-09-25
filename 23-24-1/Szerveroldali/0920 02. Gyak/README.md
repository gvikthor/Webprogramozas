# Szerveroldali 2. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*

## KisZH
KisZH: Mit jelent, hogy felseedelek egy adatbázist?

Beadás: INF-es bejelentkezéssel formson https://forms.office.com/e/tr5dpYejNY

## Elindulás
Kiinduló projekt, ezzel fogunk dolgozni a félévben:  
```
composer create-project --prefer-dist laravel/laravel blog-dolog
```

Mozogj bele a projekt mappájába:  
```
cd blog-dolog
```


Majd próbáld ki, hogy működik-e a projekt (fog adni egy localhostos linket, azt kell megnyitni):  
```
php artisan serve
```

Ürítsük ki az oldalunkat, mert most nagyon tele van. Induljunk kb nulláról. A `resources\views\welcome.blade.php` file tartalmát töröld ki, és hozz létre helyette valami nagyon egyszerű kiinduló oldalt.
```HTML
    <!DOCTYPE html>
    <html lang="hu">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Blog dolog</title>
    </head>
    <body>
        <h1>Blog dolog</h1>
        Ez itt egy nagyon igényes blog.
    </body>
    </html>
```

Mi is az a Blade? Emlékezzünk vissza, hogy a PHP felfogható volt úgy, mint a HTML kiterjesztése: minden HTML file valid PHP is. Na így gondolkozunk tovább, a Blade kiterjeszti a PHP-t, csak behoz extra dolgokat is.
```php
    <h2>Blade PHP tag</h2>
    @php
        $one_friend = 'Gergő';
        $firends = ['Rezső', 'Péter', 'Áron'];
        echo 'Ez egy mezei PHP tag';
    @endphp

    <h2>Blade behelyettesítés</h2>
    Van egy {{$one_friend}} nevű barátunk.

    <h2>Blade elágazás</h2>
    @if (count($firends) > 0)
        Van {{count($firends)}} db emberünk.
    @else
        Nincsen egy emberünk se.
    @endif

    <h2>Blade ciklus</h2>
    <ul>
        @foreach ($firends as $friend)
            <li>{{$friend}}</li>
        @endforeach
    </ul>
```


## Breeze
Az oldalunk jelenleg csúnya, illetve alig tud valamit. Milyen jó lenne, ha valaki előre megírt volna nekünk mindenféléket. Telepítük fel a Breeze-t: [https://laravel.com/docs/10.x/starter-kits](https://laravel.com/docs/10.x/starter-kits). 
```
composer require laravel/breeze --dev
```

Most még nem látjuk, hogy sokminden változott volna. Ez azért van, mert most még csak megmondtuk a laravelnek, hogy itt van ez a csmag, majd szükségem lesz rá, készítsd elő a terepet. Most telepítsük ténylegesen a projektbe. Amikor majd kérdezi, értelemszerűen a blade-et válasszuk ki, mint frontend stack. Minden más tök mindegy, bár a dark mode beállításra érdemes emlékezni.  
```
php artisan breeze:install
```

Na most már azért bekerült egy jópár dolog. És kezdünk kicsit kétségbe esni, hogy vajon mi mit csinál, és hova tűnt a kis welcome oldalunk. Egyet se félj, ha megint elindítjuk a szervert, ugyanúgy elérjük.  
```
php artisan serve
```

Azonban menjünk most át a `/login` oldalra, és lássuk meg, hogy generálódott nekünk egy szép bejelentkező oldal. Hogy ezt egy kicsit jobban felfedezzük, másszunk bele a `resources\views\auth` mappában lévő fileokba, valamint fogadjuk be kicsit a `routes\auth.php` filet is.

Na de miért jó mindez? Lett egy halom file, amihez nem is akarunk most nyúlni, ráadásul a welcome oldalunk ugyanúgy formázatlan. Essünk hát neki, és kezdjünk el haladni a cél felé. A `resources\views\layouts` mappába generálódott pár izgalmas file. Azért van külön app és guest, mert a Breeze egy szép nagy csomag, ami sokmindent előkészít nekünk (és hidd el, ezért nagyon hálásak leszünk neki később). Ami most lényeges, hogy nincs még userünk, úgyhogy mindig vendégek leszünk. Ez alapján nézzünk bele a guest fileba. Megint csak, ez nagyon csúnyának tűnik, de kis olvasgatás után rájöhetünk a lényegre: ez egy template, vagyis layout (mappanév már spoilerezett). Arra való, hogy ő megold dolgokat, amik egyformák lesznek a legtöbb oldalon, és így nem kell ugyanazt bemásolni minden oldal elejére, végére (ha hozzám jártál webprogra, és úgy álltak a csillagok, tehát volt erre időnk, mutattam ilyet vanilla PHP-ban, amikor az oldal elejét és végét függvénnyel generáltuk, na az ezt készítette elő koncepcionális szinten). Az aranyos kis `{{ $slot }}` lesz a mi emberünk, ide fog behelyettesülni(??) az oldal tartalma... például a welcome oldalunké.

De hogyan? Ez a guest egy úgynevezett komponens. A komponensek az `app\View\Components` mappában rendelkeznek egy file-al, innen erednek. Ez mondja meg, hogy milyen nézet layout tartozik hozzájuk. Tehát most már megvan, hogy mi végzi az összekötést, mivel kell összekötni mit, egyetlen kérdés maradt, hogyan tesszük ezt meg?? Világi egyszerűen. Menjünk a kedvenc welcome file-unkba, türüljük a felesleges bevezető dolgokat, a body taget és ilyesmiket, és írjuk a tartalom köré a guest tagjeit:
```HTML
<x-guest-layout>
    <h1>Blog dolog</h1>
    Ez itt...
    
    ...@endforeach
    </ul>
</x-guest-layout>
```
Látjuk felül, hogy jelenleg az oldalunk neve az, hogy "Laravel". Na mi nem ezt szeretnénk, hanem jó lenne, ha valami saját dolog kerülne ide, leginkább a "Blog dolog" szöveg, amit korábban beírtunk. Ehhez két változtatás kell. Először is látogassuk meg a layoutunkat (`resources\views\layouts\guest.blade.php`), és nézzük meg, mi van a cím helyén: `config('app.name', 'Laravel')`. Ez valami olyasmiről beszél, hogy egy config fileból megpróbál beolvasni egy változót, és ha nem sikerül, inkább azt írja a helyére, hogy "Laravel" (a .env fileból olvassa ki egyébként). Jöhet a gondolat, hogy jó, akkor írjuk be ide, hogy "Blog dolog" - és itt nagyon bolodg vagyok, ha valakinek nem ez volt az első gondolata. Jogos lehet az is, hogy akkor adjuk meg a .env fileban írjuk át, de mást szeretnék megmutatni. Írjuk be ide, hogy itt egy változó lesz (amit bárhogy hívhatnék, kiscica, kiskutya, de most legyen `$title`):
```PHP
<title>{{ $title }}</title>
```

Na jó, de honnan fogja tudni szerencsétlen PHP, hogy ennek a változónak mi az értéke? Másszunk vissza a welcome fileunkba, és mondjuk meg neki! Elég annyit csinálni, hogy beírjuk az elejére, hogy van változónk, aminek megadjuk az értékét itt most rögtön (nyilván a title lehetne, kiscica, kiskutya, bármi).
```HTML
<x-guest-layout>
    <x-slot name="title">Blog dolog</x-slot>
    ...
```

Na de ha már feljött ez a .env file, foglalkozzunk vele picit: mi lenne, ha a "Blog dolog" mindenhol ki lenne írva, és utána jönne, hogy pontosan melyik oldalon vagyunk, pl.: "Blog dolog | Welcome"? Legyen hát így. Írjuk át a layout fileban, hogy ide kerüljön be a környezeti változó értéke, majd a title. A default értéket átírhatjuk bármire.
```PHP
<title>{{ config('app.name', 'Jaj:(') }} - {{ $title }}</title>
```

A .env fileban (közvetlen a projekt mappájában van) írjuk át az app nevét:
```
APP_NAME="Blog dolog"
```

A welcome fileban pedig a title-t:
```HTML
<x-slot name="title">Welcome</x-slot>
```

Tegyük biztonságossá az alkalmazást, hogy ne haljon meg, ha (amikor) majd később elfelejtjük valamelyik oldalnál, hogy ezt a title-t meg kell adni. A layout fileban használjunk egy szép modern PHP operátort (null coalescing operator), ami annyit biztosít, hogy ha noncs a title megadva, berak valami defaultot.
```PHP
{{ $title ?? 'Guest' }}
```

## Mégtöbb kliensoldal haha
Régen indokolt volt, hogy a böngészők szétszórt világába valami kis rendszert hozzunk, és ezért jött létre a jQuery. Mostanra ez teljesen irrelevánsá vált, csak úgy, mint a CSS Bootstrap, ugyanis mindkettő helyett sokkal sokkal jobb eszközök vannak, és ezekből az eszközökből a Laravelbe/Breeze-be is van építve rögtön.

A jQueryt kiváltják a mindenféle nagy frontend keretrendszerek (Vue, React), illetve az egyszerű kis frameworkök, mint például az Alpine: [https://alpinejs.dev/start-here](https://alpinejs.dev/start-here), ami rögötön bele is van nekünk építve a kapott kiinduló csomagunkba. Az alpine egy nagyon kézenfekvő, tényleg minimális méretű (15 attribute, 6 property, 2 method) dolog, amivel elképesztő eredményeket lehet elérni minimális mennyiségű kóddal. Rakjuk be a welcome oldalunkra a példa számlálót, és próbáljuk ki:
```HTML
<div x-data="{ count: 0 }">
    <button x-on:click="count++">Increment</button>
 
    <span x-text="count"></span>
</div>
```
Részletesen az oldal leír mindent, amit csak lehet, érdemes böngészni. Ezzel lehet pl nagyon könnyen hamburger menüt csinálni.

A Bootstrapet pedig a különböző CSS megoldások váltják, ezek közül mi a Tailwind-et kaptuk kézhez: [https://tailwindcss.com/](https://tailwindcss.com/). Segíteni fog, ha ismered a flexboxokat ( [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ) és a grideket ( [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/) ), de ez nem követelmény. Tailwind CSS-hez VS Code intellisenset érdemes telepíteni. 

Ami nagyon izgalmas, hogy (ha telepítéskor ezt beállítottuk) a darkmode most váltogatható. Próbáljuk ki, hogy átállítjuk a böngészőnket, és nézzük meg, mi történik. A guest layout fileban próbálgassuk kicsit, hogy módosítgatunk az értékeken, és nézzük meg, mi történik (figyeljünk arra, hogy a dark: vagy a sima paramétereket szerkesztjük).

**⚠️Feladat: Érd el, hogy dark mode-ban fehér legyen a szöveg!**

Megoldás:
```HTML
<body class="font-sans text-gray-900 dark:text-gray-100 antialiased">
```

## Mégtöbb frontendes összezavarás
Az életünk nem lehet könnyű természetesen. A legtöbb dolog eddig működött, de igazából nem rendeltetés szerűen. Jelenleg nem használjuk ki a forntendünk adta lehetőségeket, nincsenek a dolgaink "összecompile-olva". Amit az Artisan serve-el, az nem a szép kész projekt, ami ready-to-go. Nézzük meg ezt egy egyszerű példán keresztül: szeretnék más színt használni, mint a szürke ötven árnyalata. Átírom hát a blade layout fileban a szöveg színét:
```
text-pink-600
```
És amikor futtatom az Artisant, kiderül, hogy nem működnek a színek. Ez azért van, mert eddig mindent kierőltettünk a CSS-ből nem szakszerű módon. Mintha csak grafitceruzáink lennének a színező kiszínezésekor. Ahhoz, hogy a színesceruzák megérkezzenek, szükség van rá, hogy megmondjuk, milyen színeket használunk, és ez már a frontend dolga, nem a laravelé. Emiatt az artisan mellett futtatni kell a node-ot is, hogy összebuildelje az alkalmazásunkat.
```
npm run dev
```
Egy másik command lineban pedig elindítjuk ezzel párhuzamosan az artisant is.
```
php artisan serve
```
És most már meg is jelenik a szép rózsaszín szövegünk.

A webalkalmazásokban MINDIG mobile first szemléletmódot használunk. Tehét először mobilra írjuk meg az alkalmazást, utána módosítjuk nagyobb képernyőkre. Ehhez a Tailwind jó eszközöket biztosít: [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design) egyszerűen csak be kell írni, hogy mekkora mérettől felfele alkalmazza az adott stílust.

**⚠️Feladat: Érd el, hogy nagyobb monitorokon rózsaszín legyen a szöveg, kisebbeken pedig alap színű!**

Megoldás:
```HTML
<body class="font-sans text-gray-900 dark:text-gray-100 lg:text-pink-700 dark:lg:text-pink-500 antialiased">
```

Utolsó lépésként pedig hozzunk létre saját classokat, hogy a csúnya hosszú leírásokat egyszerüsítsük. Másoljuk ki a text-color tulajdonságokat, és írjunk be egybe a helyükre valami class nevet, pl.:
```HTML
<body class="font-sans gyak-textcolors antialiased">
```

Ezután lépjünk át a `resources\css\app.css` fileba, és készítsük el ezt az osztályt, a stílusok alkalmazásához pedig használjuk az apply lehetőségét a CSS-nek.
```CSS
.gyak-textcolors {
    @apply text-gray-900 dark:text-gray-100 lg:text-pink-700 dark:lg:text-pink-500;
}
```

Indítsuk el az npm-et és az artisant, és miközben az oldal is meg van nyitva, írjuk át az aktuálisan látható szövegszínt valami másra, és rögtön látni fogjuk, ahogy frissül, amit csináltunk.
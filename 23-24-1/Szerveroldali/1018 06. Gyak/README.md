# Szerveroldali 6. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Most sincs 🌈

## Elindulás
Ha nem fejezted be az előző órai feladatot, frissítettem minden leírást az 5. gyakorlat reame file-ában, de persze az is ér, hogy csak egybe letöltöd a teljeset.
Mit szeretnénk ma csinálni? Megjeleníteni a bejegyzéseinket, címkéinket az oldalon, szép képekkel együtt. Ehhez már elengedhetetlen lesz (vagyis hát nem elengedhetetlen, de indokolatlanul felesleges szenvedés nélküle). hogy beszéljünk a konrollerekről.

## Controller
Szerencsére, mint mindenre, erre is van beépített parancs, ráadásul nagyon ismerős is lesz az eleje.  
`php artisan make:controller PostController --resource`  
`php artisan make:controller TopicController --resource`  
Nézzünk bele az `app\Http\Controllers` mappába. Látható, hogy jelen van egy post controller és egy topic controller, mindkettő most jött létre. Különböző függvényeik vannak, például index, create. Juttassuk át valahogy a jelenlegi index oldalunkat a bejegyzések index oldalába. Mi sem geyszerűbb. A `resources\views\posts` mappába hozzunk létre egy `index.blade.php` nevű filet, és rakjuk át bele a welcome teljes tartalmát.  

Ezt követően a `PostController`-be egy nagyon ismerős dolgot fogunk csinálni (ami már a routingnál előjött). Mondjuk meg az `index` függvénynek, hogy neked annyi a dolgod, hogy visszaadd az index oldalát a postoknak.
```PHP
public function index()
{
    return view('posts.index');
}
```
Na de akkor most mi van a kezdőoldallal? Az mit jelenít meg? Semmit nem kell neki megjelenítenie, csak irányítson át. Menjünk a `routes\web.php`-ba, és mondjuk meg az alap get függvénynek, hogy innentől te irányíts minket a bejegyzéseink főoldalára.
```PHP
Route::get('/', function () {
    return redirect()->route('posts.index');
});
```
Viszont ez az átirányítás még nem létezik, hisz nincs senki, akinek az lenne a neve, hogy `posts.index`, tehát az átirányítás nem tud semmit se kezdeni ezzel az átirányítással. Mutassuk be neki a post controllert.
```PHP
use App\Http\Controllers\PostController;
/*...*/
Route::resource('posts', PostController::class);
```
Ha most futtatjuk az alkalmazást, látható lesz, hogy rögtön átirányulunk(??) a bejegyzések index oldalára. És innentől kezdve egy hatalmas lehetőség nyílik meg előttünk, hiszen felvehetünk a controllerbe változókat. Egészítsük ki ezt az index függvényt úgy, hogy egy változót pakolok bele, sőt, a nézetnek tovább is adom ezt a változót.
```PHP
use App\Models\Post;
/*...*/
public function index()
{
    $posts = Post::all();
    return view('posts.index', [
        'posts' => $posts,
    ]);
}
```
És menjünk is át a bejegyzések index oldalába, hogy használjuk ezt a változót, méghozzá nagyon egyszerűen! Össz vissz annyit kell csinálnunk, hogy kitöröljük a `$posts = [/*...*/]` részt, hiszen a `$post` változót most már azonnal elérjük, minden adattal együtt! Mi fogja azonban a problémát okozni? Természetesen a címkék, amik jelenleg JSON-ben vannak, tehát ne felejtsük el átírni a belső foreachben `json_decode($post->topics)`-ra.
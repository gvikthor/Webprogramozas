# Szerveroldali 6. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: https://forms.office.com/e/0v64m3NPYM

## Elindulás
Mit szeretnénk ma csinálni? Megjeleníteni a bejegyzéseinket, címkéinket az oldalon, szép képekkel együtt. Ehhez már elengedhetetlen lesz, hogy beszéljünk a konrollerekről(vagyis hát nem elengedhetetlen, de indokolatlanul felesleges szenvedés nélküle).

## Controller
Szerencsére, mint mindenre, erre is van beépített parancs, ráadásul nagyon ismerős is lesz az eleje. A `resource` flag azért kell, hogy tudja, hogy egy CRUD műveletes elemről lesz szó.  
`php artisan make:controller PostController --resource`  
Nézzünk bele az `app\Http\Controllers` mappába. Látható, hogy jelen van egy post controller, ez most jött létre. Különböző függvényeik vannak, például index, create. Juttassuk át valahogy a jelenlegi index oldalunkat a bejegyzések index oldalába. Mi sem egyszerűbb. A `resources\views\posts` mappába hozzunk létre egy `index.blade.php` nevű filet, és rakjuk át bele a welcome teljes tartalmát.  

Ezt követően a `PostController`-be egy nagyon ismerős dolgot fogunk csinálni (ami már a routingnál előjött). Mondjuk meg az `index` függvénynek, hogy neked annyi a dolgod, hogy visszaadd az index oldalát a postoknak.
```PHP
public function index()
{
    return view('posts.index');
}
```
Na de akkor most mi van a kezdőoldallal? Az mit jelenít meg? Semmit nem kell neki megjelenítenie, csak irányítson át. Menjünk a `routes\web.php`-ba, és mondjuk meg az alap get függvénynek, hogy innentől te irányíts minket a bejegyzéseink főoldalára.
```PHP
use App\Http\Controllers\PostController;
/*...*/
Route::get('/', function () {
    return redirect()->route('posts.index');
});
```
Ez még mindig csúnya lesz így önmagában. Azt szeretném, hogy semmi alkalmazáslogika ne legyen a routingban, csak a routing. Alakítsuk át ennek megfelelően. Mindent, ami az itteni posts függvényim belsejáben van, átrakok a post controller függvényeibe (észre lehet például venni, hogy a storeban már eleve benne van ez a request változó). Annyi kiegészítés, hogy anno nem csináltuk meg, hogy az új bejegyzés hozzáadása visszairányítson a főoldalra, tehát az előbb látott sort érdemes beleírni a store függvény végére is (a create után).
```PHP
return redirect()->route('posts.index');
```


Ha mindent átraktam, akkor a `web.php` bejegyzésekre vonatkozó része így fog kinézni:
```PHP
Route::get('/', function() {
    return redirect()->route('posts.index');
});
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
Route::post('/posts/store', [PostController::class, 'store'])->name('posts.store');
```
Ez annyit jelent, hogy példáué a `posts` oldalon hívd meg a PostControllernek az index függvényét. A name azért kell, hogy ha különböző oldalakban hivatkozni szeretnénk erre, akkor el tudjuk érni.  


*Opcionálisan*  
Az lenne a jó, ha bejegyzést létrehozni csak bejelentkezett felhasználó tudna. Ehhez először is kell egy bejelentkezett felhasználó.
```
php artisan tinker
```

```
use App\Models\User;
```

```
User::create(['name'=>'Ráczkevei Gergő', 'email' => 'rczkg@elte.hu', 'password' => 'almafa']);
```
Na hát és akkor most jön, hogy elkezdünk szenvedni a bejelentkezéssel, és írunk ifeket, meg error page-eket, meg átirányításokat meg... lol, no. Csak mozgassuk le a create és a store sorokat az authba.
```PHP
Route::middleware('auth')->group(function () {
    /* ... */
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts/store', [PostController::class, 'store'])->name('posts.store');
});
```
Illetve ez alá csináljunk egy logout routot (nem kell kontroller, de lehetne).
```PHP
Route::get('/logout', function () {
    Auth::logout();
    return redirect('/');
})->name('logout');
```
Ez lehetne egy gomb persze. Meg lehetne post, ha űrlappal mennénk rá. Whatevs.

## Controller változók
Na és akkor jöhet végre a lényeg. Ha mindez megvan, 30 másodperc alatt adatbázisból kiolvasósra csinálhatjuk az oldalunkat. A trükk össz vissz annyi, hogy a nézeteknek át lehet adni változókat, és mivel a modellünk már setupolva van, le tudjuk egyetlen függvénnyel kérni mindet. Irány hét az `app\http\Controllers\PostController.php`.
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
És menjünk is át a bejegyzések oldalára (`resources\views\posts\index.blade.php`) hogy használjuk ezt a változót, méghozzá nagyon egyszerűen! Össz vissz annyit kell csinálnunk, hogy kitöröljük a `$posts = [/*...*/]` részt, hiszen a `$posts` változót most már azonnal elérjük, minden adattal együtt! Mi fogja azonban a problémát okozni? Természetesen a címkék, amik jelenleg JSON-ben vannak, tehát ne felejtsük el átírni a belső foreachben `json_decode($post->topics)`-ra.
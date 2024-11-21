# Szerveroldali 10. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Írd le saját szavaiddal, miben más egy API egy sima weboldalhoz képest! (Például miben más, ha egy híroldal cikkeit egy sima oldalon nézem, és ha egy API-val.)  [https://forms.office.com/e/iwyW6FmCWz](https://forms.office.com/e/iwyW6FmCWz)

*A kiinduló kódokért és rengeteg segítségért hatalmas köszönet Németh Tamás (Bajusz)nak!*

*Eléggé imprós lesz a kövi pár gyakorlat, szóval érdemesebb a felvétel alapján haladni, a jegyzet inkább a jövő évieknek lesz hasznos, mert akkor az idei év alapján már meg tudom csinálni előre. Also, itt elég sok lesz az elmélet, amit szóban fogok magyarázni.*

## Elindulás
Az előző órai (helyettesített) gyakot folytatjuk. Ha letöltöd githubról az előző órait, akkor `composer i`.

## Logout (előző órán kimaradt)
`routes/api.php`
```PHP
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [ApiController::class, 'logout'])->name('api.logout');
    Route::get( '/user',   [ApiController::class, 'user'])  ->name('api.user');
});
```

`app/http/Controllers/ApiController.php`
```PHP
class ApiController extends Controller
{
  /* ... */
  public function logout(Request $request) {
    $user = Auth::user();
    // Összes token törlése
    // $user->tokens()->delete();

    // A felhasználó egy bizonyos id-jú tokenjének törlése
    // $user->tokens()->where('id', $tokenId)->delete();

    // A jelenlegi authentikáció során használt token törlése
    $request->user()->currentAccessToken()->delete();

    return response()->json([], 204);
  }

  /**
   * A tokenhez tartozó user lekérdezése.
   */
  public function user(Request $request) {
      return $request->user();
  }
}
```

## Routing (URI paraméterek és validációjuk)
Laravel 11-ben több struktúrális változás is történt, amelyek miatt kidobtak több middleware-t, provider-t és config fájlt. Ezek közül minket a `RouteServiceProvider` és a `routes/api.php` fájlok érintenek a leginkább.

- Beépített megoldás használata (regex) ==> 404 error mindig (ez az esetek nagy részében helyes, hiszen URI paraméterben leginkább azonosítókat szoktunk amúgy is lekérdezni. Ráadásul a lényegi validációra a body-nál van szükség.)
- Custom middleware készítése (`⌨️ 01_ValidateURIParams.php`)
  - ezt persze rendesen a middleare készítő parancs segítségével!
  - `php artisan make:middleware ValidateURIParams`
- Router-en átengedni és lekezelni a controllerben


## REST végpontok, resource-ok

Emlékeztető 4. gyakorlatról:
- `Post::count()`: hány bejegyzésünk van?
- `Post::first()`: melyik az első a listában?
- `Post::find(2)`: add ide a 2 ID-jű bejegyzést! Ha nem létezik, null.
- `Post::findOrFail(10)`: add ide a 10 ID-jű bejegyzést! Ha nem létezik, hiba.
- `Post::find([1,2])`: add ide az 1, 2 ID-jű bejegyzéseket! Ha nem létezik, kihagyja. Egy collectiont ad visza, ami olyasmi, mint egy tömb, csak okos függvénykéi vannak.
- `Post::all()`: add ide az összes bejegyzést!
- `Post::where('author', 'Bátori Gergő')`: ez csak egy buildert ad vissza, nem a konkrét eredményt, tehát ő csak egy queryt/lekérést épít fel
- `Post::where('author', 'Bátori Gergő')->getQuery()->toSql()`: megmutatja az SQL kérést, amit le fog futtatni (ahol a ? a binding, SQL injection ellen véd)
- `Post::where('author', 'Bátori Gergő')->getQuery()->getBindings()`: megmutatja a behelyettesítéseket/bindingokat
- `Post::where('author', 'Bátori Gergő')->get()`: lefuttatja a lekérdezést
- `Post::where('author', '=', 'Bátori Gergő')->get()`: ez ugyanaz
- `$valami = Post::first()`: belerakja a valami válzotóba a lekérés eremdényét
- `$valami->title = 'My son, the dog <3'`: módosítja a változóban az értéket, de még nem tette be az adatbázisba
- `$valami->save()`: elmenti az adatbázisba
- `Post::first()->update(['title' => 'My son, the dog'])`: ugyanez, csak változó nélkül
- `Post::where('id', 1)->delete();`: ezt előbb néztük
- `Post::destroy(1)`: törli a 1 id-jű elemet
- `Post::destroy([1,2,3])`: törli az 1,2,3 id-jű elemeket

Komplexebb kérések:
- API Resource készítése és használata
  - `php artisan make:resource UserResource`
  - `php artisan make:resource TicketResource`
  - `php artisan make:resource CommentResource`
  - Path: `app/Http/Resources`
  - N+1 query probléma elkerülése végett érdemes a `whenLoaded` metódussal meghívni a relációval kapcsolt modelleket. Ezzel sokkal optimálisabb futási időt kapunk. Ekkor azonban a `with` metódust kell a controllerben használni (ahol szeretnénk lekérdezni a kapcsolt adatokat is).
  - Feltételekhez tudjuk kötni, hogy mely mezők jelenjenek meg (`$this->when(...)`, `$this->whenHas(...)`, `$this->whenNotNull(...)`, `$this->mergeWhen(...)` stb.)
- Ha jobban személyre szeretnénk szabni a választ, vagy egyéb funkciókat szeretnénk beépíteni (pl.: pagination, links stb.) akkor Resource Collection-t tudunk készíteni.
  - `php artisan make:resource TicketCollection --collection`


- `⌨️ 02_ApiController.php` - ennek a megfelelő tartalma az `app/http/controllers/ApiController.php`-ba megy
- `⌨️ 03_api.php` - ennek a megfelelő tartalma a `routes/api.php`-ba megy
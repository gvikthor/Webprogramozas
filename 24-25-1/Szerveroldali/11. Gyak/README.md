# Szerveroldali 11. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Írd le saját szavaiddal, miben más egy API egy sima weboldalhoz képest! (Például miben más, ha egy híroldal cikkeit egy sima oldalon nézem, és ha egy API-val.)  [https://forms.office.com/e/wxsuWeQYe7](https://forms.office.com/e/wxsuWeQYe7)

*A kiinduló kódokért és rengeteg segítségért hatalmas köszönet Németh Tamás (Bajusz)nak!*

*Eléggé imprós lesz a kövi pár gyakorlat, szóval érdemesebb a felvétel alapján haladni, a jegyzet inkább a jövő évieknek lesz hasznos, mert akkor az idei év alapján már meg tudom csinálni előre.*

## Elindulás
Az előző órai gyakot folytatjuk. Ha letöltöd githubról az előző órait, akkor `composer i`.

## További REST funkciók
Az előző órán megkezdett példákban már láttunk elég sok érdekességet, most haladjunk velük tovább.
- `⌨️ 01_ApiController.php` - ennek a megfelelő tartalma az `app/http/controllers/ApiController.php`-ba megy
- `⌨️ 02_api.php` - ennek a megfelelő tartalma a `routes/api.php`-ba megy

## Prémium
Azt szeretném, hogy ha a felhasználó prémium, akkor küldhessen annyi kérést, amennyit szeretne, de ha nem prémium, akkor percenként csak egyet.

1. Egészítsük ki az `app/Http/Resouces/UserResource.php` filet, hogy ezek is részei legyenek (a helyettesítéses gyakon lett létrehozva ez a két oszlop)
    ```PHP
    'isPremium' => $this->isPremium,
    'lastRequest' => $this->lastRequest,
    ```
2. Csináljunk egy `teszt` végpontot az autentikáció rétegébe (`routes/api.php`), vagy ha már létezik kívül, mozgassuk bele.
    ```PHP
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/teszt', [ApiController::class, 'teszt'])->name('api.teszt');
    });
    ```
3. Írjuk meg a végpontot úgy, hogy annyit csináljon, hogy frissíti az utolsó kérés dátumát (`app/Http/Controllers/ApiController.php`)
    ```PHP
    public function teszt(Request $request)
    {
        $user = $request->user();
        $user->lastRequest = now();
        return new UserResource($user);
    }
    ```
4. Innentől látjuk, hogyan működik a dolog, és akár írhatunk egy szimpla függvényt, amit mindig meghívunk a kéréseink elején - de persze lehet szebben, middleware-rel (`app/Http/Middleware` mappába hozza létre)
    ```
    php artisan make:middleware CheckRequestFrequency
    ```
5. Töltsük fel a middleware-t logikával : `⌨️ 01_ApiController.php`
6. Adjunk nevet a middleware-ünknek (`bootstrap/app.php`)
    ```PHP
    /*...*/
    ->withMiddleware(function (Middleware $middleware) {
        $middleware
            ->alias([ // ez az alias rész számít
                'rateLimit' =>  \App\Http\Middleware\CheckRequestFrequency::class,
            ])
            ->api(prepend: [ ForceJSONResponseAPI::class ]);
    })
    /*...*/
    ```
7. Használjuk a middleware-t (`routes/api.php`)
    ```PHP
    Route::middleware(['auth:sanctum', 'rateLimit'])->group(function () {
        Route::get('/teszt', [ApiController::class, 'teszt'])->name('api.teszt');
    });
    ```


## GraphQL  
Nem tudom, mindenen végig tudunk-e érni majd, ha igen, akkor GraphQL-ezni kezdünk el:
- https://graphql.org/learn/
- Hasznos még: https://lighthouse-php.com/master/api-reference/directives.html#aggregate
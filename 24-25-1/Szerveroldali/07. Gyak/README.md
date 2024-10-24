# Szerveroldali 7. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Hogyan tud a kontroller adatokat juttatni a nézetnek?

Beadás: INF-es bejelentkezéssel formson [https://forms.office.com/e/H36x0FsCiH](https://forms.office.com/e/H36x0FsCiH)

## Elindulás
Az előző órán láttuk, mi az a kontroller, hogyan juttat adatot a nézetnek. Most véglegesítsük az oldalt, és valósítsuk meg az utolsó funkciókat is:
- olvashassunk el egy konkrét cikket;
- működjön rendesen a seeder;
- legyen felhasználókezelés.

Érdemes implementálni a ⌨️ `00_app.css`-ben írt változtatásokat, de nem muszáj.

## Cikk elolvasása
Első lépésként szükségünk lesz valami oldalra, ami megjeleníti az adott bejegyzést. Hozzuk létre a `resources\views\posts` mappába a `show.blade.php` filet, és másoljuk bele a template tartalmát.
⌨️ `01_show.blade.php`

Ezt követően nagyon szeretnénk, ha megjelenne egy kép a cikkünkben. Alapértelmezetten valami default képet szeretnénk ott látni, ha a cikknek nem lenne saját képe, azonban ez annyira nem magától értetődő folyamat, még ha annak is tűnik. A problémát az okozza, hogy a képeink egy eléggé random helyen vannak tárolva (`storage\app\public`), és ezt nem tudja a beépített URL kezelő feloldani magának. Nem esünk kétségbe, természetesen erre is van artisan command.
```
php artisan storage:link
```
Ez a parancs annyit mond, hogy a storage mappát linkeld össze a publikus dolgokkal, s így a storage public mappáját tedd elérhetővé az alkalmazás számára.
Ezt követően helyezz el valami képet ebbe a mappába, amit meg fogunk jeleníteni, és nevezzük el `default.jpg`-nek.
⌨️ `02_default.jpg`

Ezt követően már megkaphatjuk a kép elérési útvonalát a következő utasítással, amit csak be kell pakolni az src attribútumba (természetesen `{{...}}` jelek közé, hogy a blade szintax behelyettesítésként értzékelje).
```PHP
asset('storage/images/default.jpg')
```
Most már csak azt kéne elérni, hogy lássuk is ezt az oldalt. Mi sem egyszerűbb, irány a kontroller! Ne felejtsük el, hogy azért vagyunk ennyire könnyű helyzetben, mert a routingot kiegyszerüsíti nekünk a kontroller (`routes\web.php`-ban ez a sor `Route::resource('posts', PostController::class)`). Menjünk hát az `app\Http\Controllers\PostController.php` fileba, és piszkáljuk meg a kontroller egyik függvényét, melynek beszédes neve a `show`. Mondjuk azt a shownak, hogy innentől te megjelenítheted a megírt show oldalunkat.
```PHP
public function show(string $id)
{
    return view('posts.show');
}
```
Innentől a `localhostoscímed/posts/1` cím erre a default oldalra hoz. Valójában bármilyen számot ide írva erre az oldalra jutunk (próbáld is ki, írj be egy olyan számot, amilyen ID-jű bejegyzásed tuti nincs).

Most pedig már csak annyi kéne, hogy a megfelelő cím, kép, szöveg, címkék jelenjenek meg. Hogyan fogjuk ezt elérni? A `show` függvény okosabb annál, mintsem hogy csak holmi ID-t tudjon kezelni. Írjuk át az egyetlen paraméterét, hogy ne egy szöveges ID legyen, hanem egy kész bejegyzés.
```PHP
public function show(Post $post)
```

És ha most felmész egy olyan számú oldalra, amilyen bejegyzésed nincs, akkor rögtön a 404-es oldalra irányít a szerver. Ezzel a lendülettel adjuk is át a bejegyzésünk objektumát a nézetnek (illetve kicsit intelligensen előre gondolkozva a kép elérési útvonalának feldolgozását is megejthetjük itt). Itt annyi lehet a szívás, hogy az adatbázisban azok, akiket nem töltöttünk fel rendesen, null helyett üres stringek, ezt javíthatjuk kézzel könnyen SQLiteDeveloperben.
```PHP
$image_src = $post->image_hash_name ?? 'default.jpg';
return view('posts.show', [
    'post' => $post,
    'image_src' => $image_src,
]);
```
És így beírogathatjuk az objektum megfelelő attribútumait az oldalunkba, például:
```PHP
<h1>{{ $post->title }}</h1>
```

Ha pedig van egy kis sütnivalónk, akkor időben átadjuk a címkéket is.
```PHP
use App\Models\Topic;
/*...*/
public function show(Post $post)
{
    $topic_names = json_decode($post->topics);
    $topics = Topic::whereIn('shortname', $topic_names)->get();

    $image_src = $post->image_hash_name ?? 'default.jpg';
    
    return view('posts.show', [
        'post' => $post,
        'image_src' => $image_src,
        'topics' => $topics,
    ]);
}
```
Amiket egy egyszerű foreach-el ki is tudunk írni.
```HTML
<div class="text-gray-900 flex flex-wrap mt-auto">
    @foreach ($topics as $topic)
        <span class="text-xs {{$topic->color}} rounded-full px-2 py-1 mr-1 mb-1">{{$topic->fullname}}</span>
    @endforeach
</div>
```

Még annyit érjünk el, hogy a főoldalról egy cikkre kattintva kerüljünk a megfelelő cikk oldalára. Ez sem kifejezetten bonyolult. Menjünk a `resources\views\posts\index.blade.php` oldalra és írjuk át a listázós foreachet, hogy ne diveket, hanem linkeket listázzon, a linkek pedig mutassanak az adott bejegyzéshez tartozó routingolásra.
```HTML
@foreach ($posts as $post)
    <a href={{ route('posts.show', $post)}} class="...">
        <h2 class="...">{{ $post->title }}</h2>
        ...
    </a>
@endforeach
```

Még egy korrektív lépést tegyünk: töröljök az index oldal elejéről a `topics` változót, és helyette adjuk át normálisan a kontrollerben.
```PHP
public function index()
{
    $topics = Topic::all();
    return view('posts.index', [
        'posts' => Post::all(),
        'topics' => $topics,
    ]);
}
```
De persze ennek a formátuma miatt javítsuk ki az index odlal topic listázását is.
```HTML
@foreach ($topics as $topic)
    @if(in_array($topic->shortname, json_decode($post->topics)))
        <span class="text-xs {{ $topic->color }} rounded-full px-2 py-1 mr-1 mb-1">{{ $topic->fullname }}</span>
    @endif
@endforeach
```
A bejegyzés létrehozásánál még nem az összes címke van listázva, és a hosszú content mező nem létezik. Utóbbit nem orvosoljuk, az csak egy mező hozzáadás, előbbit pedig amikor odaérünk, javítjuk (ld. később).

Költöztessük át még az utolsó maradványokat: Fogjuk meg a csúnya dolgainkat a `web.php`-ben, és mozgassuk át őket a kontrollerbe. Ez világi egyszerű, fogok mindent, ami a `Route::post('/posts/store' ...` függvényében van, és átpakolom a kontroller `store` függvényébe, a `web.php`-ből pedig kitörlöm a függvényt. Hasonlóan teszek a jóval rövidebb `Route::get('/posts/create'...` függvénnyel is. Ne felejtsük el a storage-et use-olni a kontroller fileban `use Illuminate\Support\Facades\Storage;`!

Ez a fehér oldal, ami megjelenik, nagyon jó barátunk, de most már szeretnénk megválni tőle, és helyette rögtön átirányítani a usert az új bejegyzés oldalára. Ezt megtehetjük egy egyszerű függvénnyel, annyit kell megjegyeznünk, hogy a kötelező változókat ki kell szedegetnünk.
```PHP
$post = Post::create([
            ...
]);

$topic_names = json_decode($post->topics);
$topics = Topic::whereIn('shortname', $topic_names)->get();
$image_src = $post->image_hash_name ?? 'default.jpg';

return redirect()->route('posts.show', [
    'post' => $post,
    'image_src' => $image_src,
    'topics' => $topics,
]);
```

Egy jelzés azért jól esne, hogy ha épp most hoztuk létre ezt a bejegyzést, akkor kicsit megnyugtasson minket, hogy igen, sikerült. Ehhez pedig már hozzá fogunk nyúlni a munkamenethez (ami pedig szépen felvezeti a felhasználókezelést, wooow). Ha sikeres volt a létrehozás (nem haltunk el eddig hibával), akkor állítsunk be egy munkamenet változót arra, hogy igaz. Épp a redirect elé írjunk be egy sort, ami annyit mond, hogy a munkamenetbe rakj be egy értéket gyorsan, de ne foglalkozz vele majd túl sokáig.
```PHP
$request->session()->flash('created_just_now', true);
```
A show oldal tetejére a cím alá pedig tegyük be ennek az ellenőrzését, és a siker üzenetet, ha tényleg épp most hoztuk létre a bejegyzést.
```HTML
@if (Session::has('created_just_now'))
    <h2 class="text-green-300">✅ Bejegyzés létrehozva!</h2>
@endif
```

Extra trükk: jelenítsük meg a sortöréseket, amik a contentekben vannak. Ennek pár lépése van:
1. `nl2br` függvény lecseréli a sortöréseket `<br>` tagekre
2. A probléma, hogy biztonsági okokból a dupla kapcsos `{{ }}` minden HTML taget kiyeetel, hogy ne lehessen pl JS injectiont csinálni. Ezt elkerülhetjük a `{!! !!}` taggel.
3. Viszont így nem védekezünk a codeinjection ellen, viszont az `e` függvény ezt megoldja helyettünk.
Így a végleges kód:
```PHP
<div>{!! nl2br(e($post->content)) !!}</div>
```

Csatolmány letöltése elképesztően egyszerűen a show oldal aljára. (Ez megoldható sokkal bonyolultabban kontrollerrel is, de az nagyon erőltetett)
```HTML
@if ($post->attachment_file_name)
    <div class="my-5">
        <p>Csatolt fájl: 
            <a  class="text-blue-500"
                href="{{ asset('storage/files/' . $post->attachment_hash_name) }}"
                download="{{$post->attachment_file_name}}"
                target="_blank"
            >⬇️ {{$post->attachment_file_name}}</a>
        </p>
    </div>
@endif
```

## N-N Kapcsolat
Ezen a ponton lehetne belemenni egy mélyebb részbe, ahol megnézzük, hogyan néz ki rendesen egy N-N kapcsolat (nem így JSON-el, mint ahogy mi csináltuk, hanem properly). Viszont a csoport jelentős része azt mondta, hogy még nem feltétlen áll jól az adatb tanulmányokkal, szóval inkább azt mondom, hogy maradjatok nyugodtan a JSON-ös megoldásnál, ha azt fixen értitek; viszont, akit érdekel a tényleges N-N kapcsolat rendes megoldása, egy régi webes tananyagban le van írva igen részletesen, alaposan: [http://webprogramozas.inf.elte.hu/#!/subjects/webprog-server/handouts/laravel-04-relációk](http://webprogramozas.inf.elte.hu/#!/subjects/webprog-server/handouts/laravel-04-rel%C3%A1ci%C3%B3k)

## Felhasználók létrehozása
Nézzünk most bele a felhasználó osztályba. Nyissuk meg a `app\database\migrations\xx...xx_create_user_...` és a `app\database\factories\UserFactory.php` fileokat. A create fileban található users igazából jó is lesz nekünk, nem akarunk most hozzányúlni, de itt akár bele is írhatnánk plusz logikai mezőket (pl. isAdmin). Ne felejtsük el, hogy ezt érdemes például a beadandóban már az elején megcsinálni, hogy rögtön úgy geenrálódjon az adatbázis, és ne kelljen utólag módosítani (meg van adva előre, milyen mezők legyenek benne, ne nehezítsd a saját dolgod). Izgalmasabb viszont a user factory, ami nagyon jól randomizál nekünk felhasználókat (és légyszi ne írjd át beadandóban a jelszó hasht, jó az a "password" mint jelszó), viszont az izgalmas dolog akkor következik, ha belegondolunk, hogy maga a generálás hogyan fog kinézni.

Írjuk meg újra a seederünket, most már a felhasználókat szem előtt tartva (`DatabaseSeeder.php`)
- Első lépésként töröljük ki a jelenlegi generálásokat, bármi is legyen ott. Ezt követően kicsit jobban fogjuk a kormányt. Ahelyett, hogy csak beadjuk neki a kis seedereket, hogy oldd meg velük, jobban mikromenedzselni fogjuk.
- Ezt követően mondjuk meg a seedernek, hogy ürítse ki az összes fontos táblát.
    ```PHP
    use Illuminate\Support\Facades\DB;
    /*...*/
    public function run(): void
    {
        DB::table('users')->truncate();
        DB::table('topics')->truncate();
        DB::table('posts')->truncate();
    ```
- A `TopicFactory.php` üres, csináljuk meg, hogy ne legyen az.
    ```PHP
    public function definition(): array
    {
        $tailwind_colors = [
            'bg-red-200',
            'bg-green-200',
            'bg-blue-200',
            'bg-yellow-200',
            'bg-indigo-200',
            'bg-purple-200',
            'bg-pink-200',
        ];
        return [
            'shortname' => $this->faker->word(),
            'fullname' => $this->faker->sentence(),
            'color' => $this->faker->randomElement($tailwind_colors),
        ];
    }
    ```
- A `PostFactory.php` is hiányol pár adattagot, illetve már nem tudhatjuk, hogy pontosan milyen címkéink lesznek. Ezt javítsuk ki.
    ```PHP
     return [
        'title' => fake()->sentence(),
        'desc' => fake()->text(),
        'content' => fake()->paragraphs(5, true),
        'author' => fake()->name(),
        'attachment_file_name' => null,
        'attachment_hash_name' => null,
        'image_hash_name' => null,
        'topics' => json_encode([]),
    ];
    ```
- Az adatbázis seederében generáljunk ki pár címkét és usert.
    ```PHP
    use App\Models\Topic;
    use App\Models\User;
    /*...*/
    $topics = Topic::factory(rand(3,5))->create();
    $users  = User::factory(rand(2,5))->create();
    ```
- Most, hogy ez megvan, úgy kéne bejegyzéseket generálnunk, hogy a szerzőik felhazsnálók legyenek (mi esetünkben csak a nevüket rakjuk bele, de el lehet képzelni, hogy például az ID-juk lenne például). Annyi kis trükkhöz fogunk folyamodni, hogy a factory alapértelmezéseit felülírjuk, méghozzá a címkéknél és a szerzőnél.
    ```PHP
    foreach ($users as $user) {
        $post_amount = rand(1, 5);
        for($i = 0; $i < $post_amount; $i++){
            $post_topics = $topics->random(rand(1,3));
            Post::factory()->create([
                'author' => $user->name,
                'topics' => json_encode($post_topics->pluck('shortname')->toArray()),
            ]);
        }
    }
    ```
- *Lehetne egy szép hosszú funkcionális függvényhívást írni, de nem fogunk, mert nem Programozási nyelvek VI. - PHP tárgyon vagyunk. Egyébként valami ilyesmi lenne, nem gondoltam egészen végig:*
    ```PHP
    $posts = collect();
    $users->each(function ($user) use ($topics, $posts) {
        $posts->push($user->posts()->saveMany(
            collect(range(1, rand(1, 5)))->map(function () use ($topics) {
                return [
                    /*...*/
                ];
            })
        ));
    });
    ```


Na ez mind szép és jó, de én szerentém, ha a felhasználó tudna regisztrálni, bejelentkezni stb. Szóval, kezdjünk bele abba, hogy létrehozzuk a login, register, logout, user stb oldalakat. Emlékszünk, hogy webprogramozáson ehhez kellett session, illetve akkor űrlapok, az űrlapok elküldése után az adatbázi 👮🛑 ÁLLJ! Mit művelsz? Mit mondtam első órám, miért tesszük fel a Breeze-t?
- `localhostoscímed/register`
- `localhostoscímed/login`

Alapértelmezetten a Laravel 10 munkamenet (sesison) alapú hitelesítést használ, mi ennél is fogunk maradni, ezt ismerjük webprogramozás tárgyról is. Az alternatív tokenezést majd Node-ban nézzük meg.

Mozogjunk a `routes\web.php` fileba, és görgessünk le a dashboard függvényéhez. A dashboard a felhasználó home screenje gyakorlatilag, ezt csak akkor nézheti meg, ha be van jelentkezve. És mit látunk a `get` függvény és a `name` függvény között? Bizony, egy autentikációt.
```PHP
->middleware(['auth', 'verified'])
```
Ha nem bejelentkezve próbálok a `/dashboard` oldalra mászkálni, át fog dobni rögtön a loginre. Ha szeretnénk átírni, hogy login után ne erre a dashboard oldalra dobjon, akkor az `app\Http\Providers\RouteServiceProvider.php` fileban kell átírni a dashboardot posts-ra.

Szeretnék könnyen be és kijelentkezni, illetve regisztrálni. Ehhez szükségünk lesz pár gombra, amik kontextusfüggően jelennek meg. A nagyon bonyolult utasításunk, ami a login állapotát vizsgálja, így néz ki:
```
@auth

@else

@endauth
```
Menjünk az `index.blade.php` oldalra, és írjuk meg a menüt úgy, hogy csak bejelentkezve lássuk az új bejegyzéses menüitemeket, illetve tudjak bejelentkezni és kijelentkezni. Ne felejtsük el, webprogon már láttuk, a kijelentkező gomb egy űrlap, hiszen egy POST kérést indít! ()
```HTML
<div class="py-6">
    @auth
        <form class="inline-block" method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="thor-menu-item-red">Kijelentkezés</button>
        </form>

        <a
            href="{{ route('posts.create') }}"
            class="thor-menu-item-blue"
        >Új bejegyzés</a>
        
        <a
            href="{{ route('topics.create') }}"
            class="thor-menu-item-blue"
        >Új téma</a>
    @else
        <a
            href="{{ route('login') }}"
            class="thor-menu-item-blue"
        >Bejelentkezés</a>
        <a
            href="{{ route('register') }}"
            class="thor-menu-item-blue"
        >Regisztráció</a>
    @endauth
</div>
```

Probléma viszont, hogy egyelőre bárki tud bejegyzést létrehozni, elég, ha tudja a create URL címét. Egész egyszerűen webprogosan megoldhatjuk ezt a problémát. Mozogjunk bele az `app\Http\Controllers\PostController.php` fileba, és mondjuk meg a `create` függvénynek, hogy ha valaki nincs bejelentkezve, az ne férhessen hozzá az oldalhoz.
```PHP
public function create()
{
    if(!auth()->check()) {
        return redirect()->route('login');
    }
    return view('posts.create');
}
```
Mint említettem korábban, itt most javítsuk ki a címkék hiányát is.
```PHP
$topics = Topic::all();
return view('posts.create', [
    'topics' => $topics,
]);
```
Illetve a `...\create.blade.php` fileban töröljük a tömböt és javítsuk a ciklust.
```HTML
@foreach ($topics as $topic)
    <div class="flex items-center gap-2">
        <input type="checkbox" name="topics[]" id="topic-{{ $topic->shortname }}" value="{{ $topic->shortname }}" class="thor-input-field" @checked(in_array($topic->shortname, old('topics') ?? []))>
        <label for="topic-{{ $topic->shortname }}" class="text-sm text-gray-900 {{ $topic->color }} rounded-full px-2 py-1 mr-1 mb-1">{{ $topic->fullname }}</label>
    </div>
@endforeach
```

Így most már csak bejelentkezett felhasználó tud bejegyzést létrehozni (ugyanezt címkékre is érdemes megcsinálni). DE ez még nem elég!! NAGYON FONTOS!! A kéréseknek minden oldalát le kell védeni! Attól, hogy a create űrlaphoz nem fér hozzá, még postmannel indíthat kérést a store oldalnak!!! Ezért a store függvényt is KÖTELEZŐ LEVÉDENI (ezt mégfontosabb, mint a create-et). Ez beadandóban is high prio követelmény!
```PHP
public function store(Request $request)
{
    if(!auth()->check()) {
        return abort(403); // Ez a forbidden hibakódja
    }
    /*...*/
}
```

Milyen jó lenne, ha az oldal rögtön tudná, hogy én hozom létre a bejegyzést, és nem kéne kézzel beírnom. Maradunk a store függvényben, és megmondjuk, hogy az author az ne a kérésből jöjjön, hanem legyen beírva ott automatikusan (és törölhetjük is az ellenőrzésből meg az űrlapból). Értelemszerűen itt is a userID szebb lenne, de ahogy haladtunk a gyakkal, már így írtuk meg. Légyszi, beadandóban szépen tároljatok ID-kat.
```PHP
$post = Post::create([
    /*...*/
    'author' => auth()->user()->name,
    /*...*/
]);
```

## Szerkesztés, törlés
Jaj, hibát vétettünk az oldalban, valahogy szerkesszük a tartalmát. Ez nagyon hasonlítani fog a létrehozáshoz. Míg ott egy `create` oldalon keresztül `store` folyamat történt, itt most egy `edit` oldalon keresztül fog `update` folyamat megvalósulni. A `PostController`-ben módosítsuk az `edit` függvényt úgy, hogy a megfelelő ID-jű elemet kikeresse, és átadja a nézetnek. Fontos itt is, hogy az autentikáció és a címkék kiszedése megtörténjen.
```PHP
public function edit(string $id)
{
    if(!auth()->check()) {
        return redirect()->route('login');
    }

    $post = Post::findOrFail($id);
    $topics = Topic::all();

    return view('posts.edit', [
        'post' => $post,
        'topics' => $topics,
    ]);
}
```
Az `update` gyakorlatilag ugyanaz, mint a `store`, csak a végén `create` helyett `update` kell (ami előtt persze le kell kérnünk a megfelelő ID-jű elemet; illetve érdemes itt a sessionbe flashelést máshogy hívni, pl. `updated_just_now`).  
⌨️ `03_update.php`  

És ne felejtsük el, hogy szükség van egy oldalra, ahol maga a szerkesztés zajlik. Másoljuk le a `create.blade.php` filet, csak hívjuk `edit.blade.php`-nak. Nézzünk rá az edit függvényre: továbbad egy post változót, valamint egy topics változót. Ezeket fel tudjuk használni a nézetben. Gondoljuk végig, mit cisnál az oldal? Megjeleníti a jelenlegi adatokat, mint alapértelmezett érték. Ha szerkesztünk, és hibát vétünk, akkor viszont legyen állapottartó, tehát a beírt új adatok maradjanak bent. Ez nagyon jó, hiszen csak annyit jelent, hogy az alapértelmezett érték nem üres string, hanem a post változó adott értéke. Vagyis ilyesmi sorokat kell alkotnunk:
```PHP
value="{{ old('title', $post->title) }}"
```
vagy mondjuk
```PHP
@checked(in_array($topic->shortname, old('topics') ?? json_decode($post->topics)))
```

Ne felejtsük el továbbá, hogy az űrlap elején át kell írni az útvonalat, hiszen egyelőre csak létrehozna egy teljesen új recordot az adabázisban. Azt se felejtsük el, hogy ha ránézünk az update függvényre, az két paramétert vár, tehát azt ne felejtsük el megadni neki.
```PHP
action="{{ route('posts.update', $post->id) }}"
```
És itt jön egy speciális dolog: az update eleve nem egy `POST` kérés lenne, hanem egy `PUT`. Azonban az űrlap csak `GET` és `POST` kérést tud küldeni. Mit kell ilyenkor csinálni? Nem esünk kétségbe, van erre is beépített utasítás, amit érdemes az CSRF után beírni.
```
@csrf
@method('PUT')
```

Érdemes továbbá a címet és a title slotot átírni `Bejegyzás módosítása`-ra.

És egy érdekes részhez érkezünk: a kép és file állapottartása. Itt figyelnünk kell arra, hogy ha a kép/file null, akkor ne töröljük ki ezeket az értékeket, hanem tartsuk meg azt, ami jelenleg van. Tehát menjünk vissza a `PostController`-be, és javítsuk ki ezt a hibát.
```PHP
'attachment_file_name' => $attach_file_name ?? $post->attachment_file_name,
'attachment_hash_name' => $attach_hash_name ?? $post->attachment_hash_name,
'image_hash_name' => $image_hash_name ?? $post->image_hash_name,
```

Ha pedig most meglátogatjuk a `localhotcímed/posts/1/edit` oldalt, akkor be is jön a szerkesztő felület. Jó lenne, ha csak akkor tudnánk szerkeszteni egy bejegyzést, ha az a sajátunk, tehát ha az author mi vagyunk. Rakjuk be az `edit` függvénybe ezt az ellenőrzést rögtön a bejegyzés lekérése után. Megint csak, ID-ket tároljatok légyszi beadandóban, azért így cisnáljuk, mert 2. gyaktól ugyanazt a filet építjük, és rossz lenne kijavítani.
```PHP
$post = Post::findOrFail($id);
if($post->author !== auth()->user()->name) {
    return abort(403);
}
```

De lehetne például olyat is, hogy csak admin szerkeszthessen bejegyzést (ezt policy-vel lenne szép, de arra nincs időnk sajnos).
```PHP
if(!auth()->check() || !auth()->user()->isAdmin) {
    return redirect()->route('login');
}
```
Ez persze nem működik most, nincs isAdmin mezője a usernek a blogunkon.

Nem felejtjük el, hogy az űrapot nem elég levédeni, a kérést is le kell. `update` függvénybe rakjuk, és mozgassuk fel a tetejére a post lekérését id alapján egyből.
```PHP
public function update(Request $request, string $id)
{
    if(!auth()->check()) {
        return abort(403);
    }

    $post = Post::findOrFail($id);
    if($post->author !== auth()->user()->name) {
        return abort(403);
    }
    /*...*/
}
```



**⚠️ Feladat: Szerkesztéskor legyen content mező is, ennek értékét ellenőrizzük, és a kontrollerben töltsük is fel a megfelelő adatbázis mezőt a tartalommal!**  

És már csak a törlés maradt hátra, törölhessünk bejegyzést. Nagyon egyszerű a dolgunk, csak a `destroy` függvényt kell módosítani a kontrollerben.
```PHP
public function destroy(string $id)
{
    if(!auth()->check()) {
        return abort(403);
    }

    $post = Post::findOrFail($id);
    if($post->author !== auth()->user()->name) {
        return abort(403);
    }

    $post->delete();

    return redirect()->route('posts.index');
}
```
Értelemszerűen ez önmagában nem elég, hiába látogatjuk meg a `localhostcímed/posts/1/delete` oldalt, nem fogja törölni az 1-es számú bejegyzást, hiszen csak `POST` kérésekre működik, így kell hozzá egy gombnak álcázott űrlap. Csináljuk hát meg a megfelelő gombokat, akkor már az edithez is. Menjünk a `show.blade.php` fileba.
```HTML
@auth
    <div class="py-6">
        <form class="inline-block" method="POST" action="{{ route('posts.destroy', $post->id) }}">
            @csrf
            @method('DELETE')
            <button type="submit" class="thor-menu-item-red">Törlés</button>
        </form>

        <a
            href="{{ route('posts.edit', $post->id) }}"
            class="thor-menu-item-blue"
        >Szerkesztés</a>
    </div>
@endauth
```

## Mik maradtak ki?
- Pagination, ami nagyon szép lapozást tesz lehetővé könnyen az adatbázisból listázott elemk közt.
- Rendes adatbázis összekapcsolások, amik hasznos függvényeket is hoznak magukkal, mint például: `belongsTo`, `hasOne`
- Policy-k, amikhez rendes adatbázos kapcsolások szükségesek, de onnantól lehet olyat mondani valahol, hogy "van joga ennek a usernek bejegyzést törölni?"
    ```HTML
    @can('delete', $post)
        <button>...</button>
    @endcan
    ```
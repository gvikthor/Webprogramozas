# Szerveroldali 4. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Mi a különbség az autorizáció és az autentikáció közt?

Beadás: INF-es bejelentkezéssel formson https://forms.office.com/e/W8mf8JyEnP

## Elindulás
Folytassuk az előző órai projektet - értelemszerűen, neked nem kell másolni a mappát, én csak azért csinálom, hogy lássuk az előrehaladást. Első lépésként teszteljük, hogy az oldal még mindig működik. Nyissunk két külön konzolt a `blog-dolog` mappában, és az alábbi két parancsot futtassuk.
```
npm run dev
php artisan resve
```

*500-as hibát kaptál? A 03. Gyak jegyzetében megtalálod a megoldást!*

## Checkboxok
Kicsit módosítsunk még az előző órai űrlapunkon. Hasznos lenne, ha a bejegyzéseinknek lenne témája, hogy az olvasók majd könnyebben megtalálják, amit keresnek. Viszont nem szeretnék sima input mezőt erre két okból: először is nem jó, ha a cikkírók bármit megadhatnak témának, mégis csak igyekezzenek ragaszkodni a blogunk kereteihez; másodszor pedig egy webprog órán vagyunk, és meg akarok mutatni egy feature-t, amit még nem néztünk.

Irány a `resources\views\welcome.blade.php` file, és illeszük bele az új adatainkat és kigenerálást. Az újdonságok: a `$topics` objektum, a `$posts` tömb elemeiben a `topic` attribútum, illetve a kigenerálásnál a topicok ciklusa.  Nem készítettem új css-t, inline az egész. Ha szeretnéd, kiszervezheted.  
⌨️ `01_welcome.blade.php`

Természetesen most még csak kiírjuk ezeket, de valahogy hozzá is kéne rendelni az új bejegyzésekhez. Menjünk a `resources\views\posts\create.blade.php` fileba, és ide is tegyük be az új adatokat, továbbá a checkboxokat.
⌨️ `02_create.blade.php`

Egy kis időt szánj azért rá, hogy értelmezd a generáló foreach ciklust! A fontosabb részek (CSS kiszedve):
```PHP
@foreach ($topics as $index => $topic)
<div>
    <input
        type="checkbox" 
        name="topics[]"
        id="topic-{{ $index }}"
        value="{{ $index }}"
        @checked(in_array($index, old('topics') ?? []))
    >
    <label for="topic-{{ $index }}">{{ $topic->name }}</label>
</div>
@endforeach
```
0. `$index => $topic`: nem szabad elfelejteni, hogy a PHP lehetőséget ad a ciklusváltozó követésére a foreach ciklusban (ez nem Laravel/Blade feature, hanem natív PHP)
1. `type="checkbox"`: ez mondja meg, hogy checkboxxal fogunk dolgozni
2. `name="topics[]"`: a `topics` az attribútum neve, ez minden, a csoporthoz tartozó checkboxnál megegyezik; a szögletes zárójel pedig azt jelzi, hogy több értéke lesz
3. `id="topic-{{ $index }}"`: ő felel azért, hogy a label a jó checkboxra mutasson
4. `value= {{ $index }}`: ez az érték kerül elküldésre a szerver felé, nem az, ami a labelben megjelenik a felhasználónak
5. `@checked(...)`: egy nagyon hasznos Blade direktíva, annyit csinál, hogy ha a bent megadott feltétel igaz, akkor beírja, hogy `checked`, egyébként nem
6. `in_array($index, old('topics') ?? [])`: ha az adott címke ID-ja előzőleg ki volt választva, akkor igazat ad vissza; a null-coalescing-operator (??) abban segít, hogy ha nem volt előző érték, akkor egy üres tömbben keressünk, amire minden `in_array` keresés hamis lesz
7. `for="topic-{{ $index }}"`: ez mondja meg a labelnek, hogy melyik indexű checkboxhoz tartozik; neki köszönhetjük, hogy ha a labelre kattintunk, akkor a checkbox is bejelölődik
8. `{{ $topic->name }}`: ezt látja a felhasználó kiírva a labelbe

A labelek alá bekerült két hiba mező is, az egyik `topics`, a másik `topics.*` névvel. Ennek megértéséhez mozogjunk át a `routes\web.php` router fileba, és illesszük be a következő sorokat a validáló függvényünkbe:
```
'topics' => 'required|array|min:1',
'topics.*' => 'distinct' // azt még nem ellenőrizzük, hogy létezik-e ilyen topic!
```
Kis gondolkodással rá lehet jönni, melyik mit művel. Az első csak annyit mond, hogy a topics legyen megadva, legyen egy tömb, és legyen legalább egy eleme. A második feladata az, hogy minden egyes elemet a topics tömbben ellenőrizzen, és megnézze, hogy egyediek-e. **Egyelőre azzal nem foglalkozunk, hogy megnézzük, az adatbázis miket tartalmaz.**

UI/UX intuíció szempontból érdemes a multiple choice checkboxokat nem kör alakúra csinálni. Ha ezt szeretnéd, alkalmazd a `thor-checkbox-field` stílusosztályt rájuk a `thor-onput-field` helyett, és tedd is be a CSS fileba (`resources\css\app.css`):
```CSS
.thor-checkbox-field {
    @apply dark:text-gray-900 p-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent;
}
```

## Adatbázis intro
**Ne ijedj meg, ha nem tanultál még adatbázisokat/SQL-t. A mi kis oldalunkhoz szinte semmi komplex dologra nincs szükség!**

Most már tele vagyunk szebbnél szebb oldalakkal, amik abszolút semmi maradandót nem tudnak alkotni. Változtassunk ezen, és végre tegyünk egy adatbázist a blogunk mögé. Kukucskáljunk bele a `.env` fileba.
```CONF
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
Láthathó, hogy előre beír nekünk opciókat egy mysql szerverhez. Értelemszerűen, ha van külön development és production adatbázis, akkor ezen a fileon keresztül tudjuk mindig megadni a megfelelőt. No de mi nem akarunk egy teljes mysql adatbázis felhúzni, mert felesleges, az oldal szempontjából mindegy, mi van mögötte. Annyi a lényeg, hogy lássuk, lehetséges, és utána szemályre tudjuk szabni, ahol csak kell. Emiatt [SQLite](https://www.sqlite.org/index.html)-ot fogunk használni (ezt nem kell telepíteni), mert nagyon nagyon egyszerű összedobni minimálisan működőképesre. Érdemes a portable verzióját letölteni az [SQLite Database Browser](https://sqlitebrowser.org/) alkalmazáskának, ami szép vizuális felületet ad az adatbázisaink piszkálásához.

**❗❗❗A beadandóhoz is ezt használjátok. Órákat vesz el a beadandó javításból, amikor valaki egy mysql vagy bármi egyéb szervert felconfigolt, aztán lehet szenvedni vele, hogy működjön nálam is. A nem SQLite-os beadandókat kinullázzuk.❗❗❗**

Kettő mappába nézzünk bele. Az első a `database`, ide kerül majd az sqlite fileunk is. A második a `config`, ahonnan (értelemszerűen) a `database.php` filera lesz szükségünk. Nyissuk is meg ezutóbbit. Ez a file egyszerűen visszaad egy asszociatív tömböt (objektum, ami nem objektum). Mik találhatók ebben a tömbben? Konfigurációs kulcs-érték párok. Például a `default` attribútum értékét megpróbáljuk kiolvasni a `.env` file `DB_CONNECTION` attribútumából, és ha nincs ilyen, vagy a file se létezik, akkor fogja magát és alapértelmezetten beírja, hogy `mysql`. Lentebb görgetve megtaláljuk a különböző konfigurációkat, és köztük van a mi sqlite-unk is. Ami itt izgalmas, az a `database` attribútum default értéke. Ha nem lenne megadva a `.env` fileban, akkor valami függvény értékelődne ki ide: `database_path('database.sqlite')`. Ez egy nagyon szép függvény, annyit csinál, hogy megmondja a gépen az abszolút útvonalát ennek az adatbázis filenak (konkrétan erre a database mappára fog mutogatni). Ha szeretnéd kipróbálni, futtasd a `php artisan tinker` parancsot, hogy megkapd az artisan REPL CLI-t (read->evaluate->print->loop), ami kb olyan, mintha egy python konzolt futtatnál, csak laravellel. 

Nincs hát szükségünk semmire itt, mert mások nagyon okosan felconfigolták nekünk. Menjünk vissza a `.env` fileba és írjuk be, hogy az adatbázisunk SQLite lesz. Az összes többi DB paramétert törölhetem is.
```CONF
DB_CONNECTION=sqlite
```
Azt érdemes még itt megjegyezni, hogy a Laravel nem mindig hozza létre automatikusan a filet hozzá, tehát be kell raknunk egy üres `database.sqlite` filet a `database` mappába, ha nincs ott.  

## Migrációk
A `database\migrations` mappát kinyitva láthatjuk, hogy timestamp-es fileneveink vannak (év_hónap_nap_órapercmásodperc_leírás). Ezek fontosak, hiszen sorban kell lefuttatni őket, mert adatbázisokban rengeteg dolog függhet már korábban létrehozott tábláktól.

Nyissunk meg egy ilyen filet. Egy osztályt fogunk visszaadni, és ennek az osztálynak két igazán egyszerű függvénye van:
- `up`: akkor fut le, amikor az adott migrációt futtatjuk
    - létrehoz egy `users` táblát
    - a táblának megadja a mindenféle oszlopát szépen funkcionálisan
- `down`: akkor fut le, amikor az adott migrációt visszavonjuk
    - kitörli a táblát, ha létezik

Az id mezőről egy kis megjegyzés: Az SQLite alapértelmezetten olyan ID-kat hoz létre, hogy 1,2,3,4... Ez nekünk most jó lesz, de irl sose csináljatok ilyet. Ez azt jelenti, hogy a usereink bejárhatóak, ami egy rossz dolog. Mindig random egyedi azonosítókat generáljatok! Nézzétek meg pl. a youtube videó ID-kat (pl.: youtube.com/watch?v=dQw4w9WgXcQ). Random karaktersorok, amik még véletlenül sem egymás után következnek, így a csak linkkel elérhető, nem publikus, de nem is privát videókat nem lehet megtalálni szép sorban haladva. 

A `unique()` természetesen azt jelenti, hogy az adatbázis nem enged két egyforma e-mail címet létrehozni; a `nullable()` pedig azt jelenti, hogy lehet üres az adott érték. A jelszót stringként tároljuk, de természetesen nem magát a jelszót, hanem annak a hashét.

<font size="7">**SOHA NEM TÁROLUNK JELSZÓT HASH-ELETLENÜL**</font>

A `timestamps` két dolgot fog megadni: `created_at`, vagyis hogy mikor hozták létre; `updated_at`, vagyis hogy mikor nyúltak hozzá utoljára (másodpercre pontosan).

Öljük meg a konzolainkat. Futtassuk a `php artisan migrate:status` parancsot. Ha minden jól megy, azt kapjuk, hogy "ERROR  Migration table not found." - ha ennél sokkal hosszabb hibaüzenetet kapunk, az gyanús. Ha szerepel benne a "mysql" szó, akkor az méggyanúsabb. Ez esetben ellenőrizd, hogy a `.env` fileban átírtad-e az adatbázist sqlite-ra.

Miért nem található a migration tábla? Mert még nem futtattuk le a migrationöket. Tegyük ezt meg a `php artisan migrate` segítségével. Ha most újra megnézzük a státuszokat, látni fogjuk az eredményüket.

Ezen a ponton, ha letöltötted és telepítetted az SQLite data browsert, érdemes megnyitni a filet, és belenézni (emlékezz, php artisan tinker + database_path() megadja a file helyét).

Jaj! Hibás az egyik migration, vonjuk vissza! `php artisan migrate:rollback --step=1` visszavonja a legutóbbi lépést. Ha megnézzük a státuszt, akkor látszódni fog, hogy ő még pending, majd ha megint lefuttatom a migrate-et, akkor lefuttatja csak a még nem lefuttatottakat. Ha mindent vissza akarunk vonni, akkor `php artisan migrate:reset`, ha pedig csak újra akarom kezdeni, akkor `php artisan migrate:fresh`.

Miért nagyon szép mindez? Nem kell adatbázisokhoz érteni! Mi a Laravel beépített ORM-jével (Objektum-relációs leképezés / Object Relational Mapping / Object Relation Model) fogunk játszani: [Laravel Eloquent ORM](https://laravel.com/docs/master/eloquent). Egy ORM lényege, hogy ne kelljen ismerni az alsóbb rétegét az adatbázisnak, hanem egy egységes interfészen keresztül nyúlhassunk bele az adatokba. Ez rengeteg fejfájástól kímél meg minket, például ha adatbázist váltunk, a kódon nem kell módosítani.

## Modellek
Nyissuk meg az `app\Models\User.php` filet. Mi található ebben? A felhasználó típus modellje. Ez ad nekünk egy keretet ahhoz, hogy a usereket rendesen, objektumként kezelhessük mindenféle handy-dandy függvényekkel. Hogyan tudunk saját modellt készíteni? Írjuk meg kézzel az osztályt? Lol dehogy.
```
php artisan make:model Post
```

Létrejött egy `Post.php` file is. Ha megnyitjuk, látjuk, hogy ez a `Model` osztályból származik, míg a felhasználó az `Authenticatable`-ból, de igazából ez is a `Model`, csak specializálva.

Egyelőre viszont ehhez a modellhez nincs migráció, így nem jelenik meg az adatbázisunkban, plusz kéne hozzá factory is (erről majd beszélünk), meg seeder is. Most lehetne kézzel mindenféle fileokat csinálni, vagy külön külön utasításokat futtatni, de milyen szerencse, hogy ezt gyakran csinálja sok ember, így külön parancsot kapott.

Töröld ki a `Post.php` filet, és egy extra flaggel együtt futtassuk az előző parancsot.
```
php artisan make:model Post -mfs
```
Ez annyit tesz, hogy szia artisan csinálj modellt, meg migrációkat, factoryt és seedert is. Létre is jöttek a megfelelő fileok, osztályok (van beépített szókezelője, többesszámokat szépen generálja, ahol kell):
- `app\Models\Post.php`
- `database\factories\PostFactory.php`
- `database\migartions\****_**_**_******_create_posts_table.php`
- `database\seeders\PostSeeder.php`
Amivel első körben ezek közül foglalkznunk kell, az a migráció. Adjuk meg, hogy mik lesznek egy bejegyzésben. 

A Laravel Eloquent oldalán a Database menüpontban a Migrations alatti [Available Column Types](https://laravel.com/docs/master/migrations#available-column-types) címszó leír nekünk minden hasznosat arról, hogy milyen oszlopokat lehet létrehozni. Adjuk meg a típusainkat. Egyelőre a címkéket JSON-ként kezelem, ezen majd változtatni fogunk a későbbiekben, de most még szeretnénk egyáltalán a működést megérteni.
```PHP
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('desc');
    $table->string('author');
    $table->json('topics');
    $table->timestamps();
});
```
Futtassuk le a mirációkat `php artisan migrate`, és meg is vagyunk. Megnézhetjük akár SQLite browserben. Hozzunk gyorsan létre valami posztot, ezt most a tinkeren keresztül fogjuk csinálni. `php artisan tinker` és ne felejtsd el, hogy command lineban nem ctrl+v a beillesztés, hanem jobbklikk.
```PHP
use App\Models\Post;
Post::create([
    'title' => 'My son, the dog',
    'desc' => 'This is an article about how adopting a dog transformed me into the father figure my friends knew I am, but I never thought I could become.',
    'author' => 'Bátori Gergő',
    'topics' => ['family', 'menthe'],
]);
```
Erre hibát fog dobni. Miért? Mert egy biztonsági réteg nem engedi, hogy direktbe közvetlenül adatokkal töltsem fel az adatbázist. Hogyan tudom ezt mégis megtenni? A bejegyzések modeljébe (`app\Models\Post.php`) beleírom a `use HasFactory` alá, hogy
```PHP
protected $fillable = [
    'title',
    'desc',
    'author',
    'topics',
];
```
Ez után indítsd újra a  (`php artisan tinker`), és most futtasd le a kódot (és utána ne zárd be a tinkert). Most nézzünk bele a data browserben az adatainkba (refresh data gombot nyomd meg) és látjuk, hogy baj van (erre egy warning is felhívta a figyelmünket egyébként). A témák tömböt átalakította arra, hogy "Array". Persze, hiszen a JSON típus az csak egy string, megadott formátumban. Hiába akarok én tömböt beleerőltetni, nem fog menni. Töröljük hát a rossz adatot!
```PHP
Post::where('id', 1)->delete();
```
És most futtassuk le a jó értékkel (a webprogron is látott `json_encode` függvényt eresztjük rá).
```PHP
Post::create([
    'title' => 'My son, the dog',
    'desc' => 'This is an article about how adopting a dog transformed me into the father figure my friends knew I am, but I never thought I could become.',
    'author' => 'Bátori Gergő',
    'topics' => json_encode(['family', 'menthe']),
]);
```

Pár hasznos parancs:
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

## Factoryk
Ezek a gyárak nagyon extrámnek hangzanak, de igazából egy egyszerű koncepcióról van szó. A cél, hogy hihető adatokat generáljunk gyorsan, miközben fejlesztünk, és hát ezek a gyárak pont ezt biztosítják. Ha belenézünk a `database\factories\UserFactory.php` fileba, láthatjuk is, hogy egészen beszédes a dolog. A felhasználó gyár feladata, hogy kamu usereket nyomjon ki magából jó formátumú adatokkal. Sok mindenhez lehet használni a [Faker](https://fakerphp.github.io/) könyvtárat (eleve a Laravel része), ami ilyeneket generálgat. Tinkerben ezt is ki lehet próbálni.
```PHP
$faker = Faker\Factory::create();
```
- `$faker->word()`: szó szerű dolog
- `$faker->sentence()`: mondat szerű dolog
- `$faker->text()`: szöveg szerű dolog
- `$faker->name()`: emberi név szerű dolog
- `$faker->unique()->safeEmail()`: e-mail cím szerű dolog
- `$faker->randomElement(['alma', 'körte', 'szilva'])`: visszaad egy random elemet a tömbből
- `$faker->randomElements(['alma', 'körte', 'szilva'])`: visszaad egy tömböt, aminek egyetlen eleme egy random elem a tömbből 
- `$faker->randomElements(['alma', 'körte', 'szilva'], 2)`: visszaad egy tömböt, aminek két eleme van random a tömbből
- `$faker->randomElements(['alma', 'körte', 'szilva'], null)`: visszaad egy tömböt, aminek rnadom számú eleme van random a tömbből (sose üreset)

**⚠️ Feladat: Írd meg a Post factoryt!**  
*Az osztályban függvényként tudod használni a fake-et, nem kell neki változó, ld. UserFactory.*
Megoldás:
```PHP
```

Ha megvan, indítsd újra a  (`php artisan tinker`).
```PHP
use App\Models\Post;
```
- `Post::factory()->make()`: csinál egy random elemet, de nem menti el az adatbázisba
- `Post::factory()->create()`: csinál egy random elemet és elmenti az adatbázisba
- `Post::factory(5)->create()`: csinál 5 random elemet és elmenti az adatbázisba

## Seeder
Igazából ehhez már mindent tudunk, csak be kell illeszteni jü helyre a sok infónkat. Szeretnénk random elemeket létrehozni. Irány a `database\seeders\PostSeeder.php` file! Az osztály elé mindenképp szúrjuk be, hogy használja a modellt, majd a runban mondjuk meg, hogy mit csináljon, ha lefuttatjuk.
```PHP
use App\Models\Post;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        Post::factory()->count(10)->create();
    }
}
```
Miért nem rakunk mindent a DatabaseSeederbe? 🤷 Lehetne, de csúnya. Inkább a `database\seeders\DatabaseSeeder.php` fileba csak annyit modnunk, hogy a post seeder fusosn le, ha seedeljük az adatbázist.
```PHP
public function run(): void
{
    $this->call([
        PostSeeder::class,
    ]);
}
```

Futtatás: `php artisan db:seed`

## Űrlap
Na és akkor végre végre működjön az űrlapunk! Irány a `routes\web.php` file, ahol lefutnak a mindenféle middleware-ek (most nem kontroller van még, majd később lesz). Mondjuk neki azt az elején, hogy
```PHP
use App\Models\Post;
```
És most a validálás után tegyük be a létrehozást (kiszedem a random hibaüzenet fordításokat, hogy átláthatóbb legyen).
```PHP
Route::post('/posts/store', function (Request $request) {
    $request->validate([
        'title' => 'required|min:5|max:50',
        'desc'  => 'required|min:15|max:250',
        'author'  => 'required|min:4|max:20',
        'topics' => 'required|array|min:1',
        'topics.*' => 'distinct' // azt még nem ellenőrizzük, hogy létezik-e ilyen topic!
    ]);
    Post::create([
        'title' => $request->title,
        'desc'  => $request->desc,
        'author'  => $request->author,
        'topics' => json_encode($request->topics),
    ]);
})->name('posts.store');
```

Lehetne őgy csinálni, hogy  kiszedem a request validált eredményét és még dolgozok vele.
```PHP
$data = $request->validate([...]);
// csinálok valamit a $data változóval
Post::create([
    'title' => $data->title,
    ...
]);
```

Kész is van, mehet az `npm run dev` és a `php artisan serve`, menjünk a create oldalra, és adjunk hozzá valamit. Még mindig az üres fehér oldalra jutunk, de ha megnyitjuk az adatbázist, és ráfrissítünk, akkor látszik is az új elem!

## Összefoglalva
Artisannal migráltunk; Laravel REPL CLI-ban láttuk, hogy az ORM összeköti az sqlite db-t az app modellel; majd egy factoryn keresztül adatokat seedeltünk; és végül a routingban validáció után a request paramétereit a modell segítségével db-be mentettük. 🥳
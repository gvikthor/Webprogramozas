# Szerveroldali 5. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Most nincs 🌈

## Elindulás
Változtatni szeretnék a cikkeinken. Az a probléma, hogy nagyon szépen be tudom vezetni a kis irományokat, de jelenleg nincs tényleges tartalmuk (és ez után se lesz, mert a content változót GPT-vel generáltattam és igazából semmitmondó körmondatok), illetve szeretnénk, ha például képeket, fájlokat is fel lehetne tölteni az oldalunkra. Ehhez szükségünk lesz több dologra is:
1. Az eddigi adatainkat, táblánkat valahogy törölni kell, hiszen jelenleg nem áll készen ilyen jellegű adatok fogadására.
2. Létre kell hozni az új táblát a megfelelő adattagokkal.
3. Fel kell tölteni a táblát teszt adatokkal.

Kezdjük hát az elején. Hogyan lehet visszatörölni olyan adatokat, amik nem igazán jók nekünk? Ennél mi sem egyszerűbb.
`php artisan migrate:rollback --step=1`
Ha most ráfrissítünk sqlite browserben, látni fogjuk, hogy már nincsenek ott az adatok.

Következő lépésként szerkesszük a `2023_10_03_185011_create_posts_table.php` filet (neked eltérhet a neve), hogy a bejegyzések sorai a megfelelő módon nézzenek ki.
```PHP
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('desc');
    $table->string('author');
    $table->json('topics');
    /*új! ==>*/ $table->text('content')->default('This is a default text, because the author left the field empty 🙁');
    /*új! ==>*/ $table->string('attachment_hash_name')->nullable();
    /*új! ==>*/ $table->string('attachment_file_name')->nullable();
    /*új! ==>*/ $table->string('image_hash_name')->nullable();
    $table->timestamps();
});
```
A `nullable` és a `default` pont azt jelentik, amit gondoltok. A `content` is egészen magától értetődő, de a többi nem igazán. Mit jelent ez a három dolog? Van az alkalmazás gyökérkönyvtárában egy `storage\app\public` nevű mappa. Ez a public nem az a public, amibe össze van fordítva a kódunk! Itt tudunk tárolni mindenféle tartalmat, amit nem annyira célszerű adatbázisokba beerőltetni, így például fileokat, képeket (hangsúly a célszerű szón van, nyilván minden tárolható adatbázisokban). A `hash_name` a csatolmány és a kép esetében is azért kell, hogy lehessen azonos nevű fileokat feltölteni többször is (át fogjuk alakítani a nevüket valami full random dologra), és ez alapján a hashelt név alapján fogjuk megtalálni a public(!) mappában; míg a csatolmány `file_name` attribútuma azért kell, hogy ha a user letölti a filet, ne az legyen a neve, hogy `fjghst8owreifbadnv9pbeg48owhbfer8o37z4`. 

Futtassuk hát a migrationt, hogy ez az új tábla létrejöjjön.
`php artisan migrate`

És jöhet az adatfeltöltés. Most ne random adataink legyenek, hanem fogjuk a bejegyzéseinket, amiket példának használtam, és töltsük fel velük az adatbázist. Egyelőre a képek és fileok üresek lesznek, milyen jó lenne, ha majd valami szerkesztés funkciót valaki implementálna az alkalmazásunkba hmmmmmm.

Adottak az adataink, szóval nem random dolgokkal kell feltölteni az adatbázist. Vajon hogy lehetséges ez? Biztosan a seederrel kell játszani, úgyhogy módosítsuk is. Innentől ne a fakert használja, hanem illesszük be most (elég csúnyán) az adatainkat.
⌨️ `01_welcome.blade.php`

**⚠️ Feladat: A Post seedert módosítsd úgy, hogy a megadott tömb adataival töltse fel az adatbázist!**  
Megoldás:
```PHP
public function run(): void
{
    $posts = [ /*...*/ ];

    foreach ($posts as $post) {
        Post::create([
            'title' => $post->title,
            'desc' => $post->desc,
            'author' => $post->author,
            'topics' => json_encode($post->topics),
            'content' => $post->content,
            'attachment_hash_name' => $post->attachment_hash_name,
            'attachment_file_name' => $post->attachment_file_name,
            'image_hash_name' => $post->image_hash_name,
        ]);
    }
}
```

Ne felejtsük el, hogy bizony futtatni is kell ezt a seedet ahhoz, hogy az adatbázis fel legyen töltve az adatokkal.  
`php artisan db:seed`

## Órai munkák
Teszt jelleggel most meg fogjuk próbálni, hogy az eddig tanultakat tudjátok-e alkalmazni. Két feladat van, nem épülnek egymásra. Legalább egyet próbáljatok megcsinálni. Akinek kettő is sikerül, kap pluszpontot. Természetesen fel fogok tölteni teljes megoldást mindegyikhez, ha valakinek nem sikerülne itt megcsinálni! Az egész projektet le tudjátok majd tölteni, és akkor kövi gyakon tudjátok úgy folytatni, mintha az egészet megcsináltátok volna (de én buzdítok mindenkit, hogy itt próbáljátok meg).

Javasolt segítség:
- Korábbi órák jegyzetei, kódjai: GitHub, itt vagy jelenleg
- Laravel dokumentáció: [https://laravel.com/docs/10.x/readme](https://laravel.com/docs/10.x/readme)
- Phind AI tool: [https://www.phind.com/](https://www.phind.com/)

1. **Rövidebb de nehezebb feladat:** Megjelent pár új attribútum az objektumunkban. Az "Új bejegyzés" menüpont űrlapjába kerüljenek be a megfelelő mezők, és ellenőrizd is őket!
    - A `content` csak egy szöveges mező, nem kell formázni semmilyen módon benne a szöveget.
    - A két csatolmány már bonyolultabb téma, ehhez a következő utakon érdemes elindulni:
        - A `resources\views\posts\create.blade.php` file valami ilyesmit vár, de persze hibakezelésre mindenképp szüksége lesz majd.
        ```PHP
        <label for="attach_file">Csatolmány</label>
        <input type="file" name="attach_file" id="attach_file" class="thor-input-field">
        
        <label for="attach_image>">Borítókép</label>
        <input type="file" name="attach_image" id="attach_image" class="thor-input-field">
        ```
        - A `routes\web.php` fileba valamilyen módon bele kell tenni a fileok ellenőrzését. A megfelelő attribútumhoz a következő két ellenőrző láncot érdemes megadni, de persze belátásotok szerint dönthettek. (MIME: Multipurpose Internet Mail Extensions, ez segít standard módon meghatározni a fileformátumot)
        ```
        a filehoz: nullable|file|mimes:txt,doc,docx,pdf,xls|max:4096
        a borítóképhez: nullable|file|mimes:jpg,png|max:4096
        ```
        - Ezeket el is kell menteni. Érdemes egyelőre ezt is a kérés feldolgozó függvényében hagyni. Viszont hogyan lehet elmenteni? Ehhez a küvetkező hasznos függvényekről érdemes tudni:
        - `$request->hasFile('kérésparaméter_neve')`: megmondja, hogy van-e file az adott kérésparaméterben
        - `$request->file('kérésparaméter_neve')`: visszaadja az adott helyen található filet
        - `$file->getOriginalClientName()`: a $file változóban lévő file nevét adja vissza
        - `$file->hashName()`: a $file változóban lévő file nevét adja vissza hashelve
        - `Storage::disk('public')->put('valami/utvonal/ide_írd_be_a_hash_nevet', $file->get())`: elmenti a korábban említett public mappában egy megadott mappaszerkezet alá az adott filet adott néven
    - Mindezek után ne felejtsd el a hibakezelést az űrlapban.

2. **Hosszabb, de könnyebb feladat:** Készítsd el a címkékhez (kategóriákhoz, `topics`) mindazt, amit a bejegyzésekhez is csináltunk. 
- Legyen egy címke adatbázis.
- Minden címkének legyen rövid neve, hosszú neve, színe.
- Lehessen őket űrlappal létrehozni.
- Próbáld feltölteni Factoryval és Seederrel
- Rollbackeld
- Töltsd fel a saját adatainkkal (a topics tömb bent van a `resources\welcome.blade.php` fileban)
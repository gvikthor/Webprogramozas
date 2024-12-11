# Ticket (GraphQL)
Ezt az elképesztően jó jegyzetet köszönjük Tűri Eriknek!

## 1. Lighthouse telepítés / konfigurálás

1. Lighthouse csomag: `composer require nuwave/lighthouse`
1. Alap séma publikálása: `php artisan vendor:publish --tag=lighthouse-schema`
1. GraphiQL felület: `composer require mll-lab/laravel-graphiql`

Elvileg, ha ez sikerült, akkor az appot elindíthatjuk, és meg is nézhetjük böngészőből a `/graphiql` végpontot, amin ki is próbálható az alábbi egyszerű lekérdezés, ehhez az alap séma már el van készítve:
```gql
{
  user(id: 1) {
    id
    name
    email
  }
}
```

Órai jegyzet:
Felmegyünk a http://127.0.0.1:8000/graphiql oldalra, itt van egy előre generált teszt oldal.
```gql
query {
  user(id: 1) {
    id
    name
    email
  }
}
```



## 2. Egymodelles CRUD műveletek sémával

Legyenek a fókuszban most a Ticket modell CRUD műveletei, egyelőre hitelesítés, stb. nélkül. 

Erre annak idején NodeJS-ben kellett egy rakás rezolvert írni, de a Lighthouseban az egyszerű problémák (CRUD műveletek, kapcsolatok, filtering) rögtön a sémában megoldhatók, tehát igazából rezolvert csak akkor kell írni, ha valami nagyon spéci dolgok kellene csináljon a lekérdezés.

A sémában elkészítettem a Ticket típust, és amint látni fogjátok, pl az összes Ticket lekérdezése egy `@all` beírásában kimerül. Magyarul:

```gql
type Query {
    tickets: [Ticket!]! @all
    ticket(id: Int! @eq): Ticket @find
}
```

hasonlóság keresése like-kal

```
LIKE 'alma%'
👍 alma
👍 almafa
👍 alma körte
👎 körte
👎 alm a

LIKE '%a%
👍 kiskutya
👍 madárfészek
👎 eper
👎 

LIKE alma_
👍 almaf
👎 almafa
```

A megoldásomban a `priority` mezőt `Enum` helyett `Int!`-nek vettem, mert a GraphQL nem eszi meg a 0, 1, 2, 3-as enumot. Lásd:
    GraphQL require enum values to match `[_A-Za-z][_0-9A-Za-z]`

Ezeknek a kukacos direktíváknak itt lehet utánanézni:
https://lighthouse-php.com/master/api-reference/directives.html

Elöljáróban annyit hozzájuk, hogy nagyon sok van, és sok minden megoldható velük!

Ezzel a Get-All és Get-One műveleteink meg is vannak, de mi a helyzet a kreálással? Amíg nem találom ki, hogy valami fura visszatérési érték legyen, addig ez sem nehéz, két valid megoldás is van:

```gql
type Mutation {
  createTicket(title: String!, done: Boolean!, priority: Int!): Ticket! @create
}
```

Ehelyett korábban egy darab `input` objektumot használtunk, erre is van lehetőség, csupán akkor a `@spread` direktívára van szükség. Lásd megoldásban a `createTicket2`!

Módosítás műveletére is elég egy `@update` direktíva (természetesen az ID ilyenkor paraméterként ott kell legyen); törlésre pedig egy `@delete` (visszatér a törölt modellel).

## 3. Kapcsolatok átjárása és aggregátumok sémában

Nézzük meg az egy tickethez tartozó kommenteket! Jó hír: még mindig nem kell rezolvert írni, ha a kapcsolat Eloquent-ben rendesen be van állítva! A `Comment` típus elkészítése után ugyanis megadható a kapcsolat, és egy-egy direktívával átjárhatóvá tehető, mint:

```gql
type Ticket {
    comments: [Comment!]! @hasMany
}
```

Természetesen az összes többi kapcsolat is ugyanígy működni fog, pl.

```gql
type Comment {
    ticket: Ticket! @belongsTo
    user: User! @belongsTo
}
```

Még aggregátumokat is lehet számítani vele, vagyis mondhatom azt, hogy pl. hány komment tartozik egy megadott tickethez vagy mennyi az átlagos prioritás:

```gql
type Ticket {
    commentCount: Int! @count(relation: "comments")
}
```

Vigyázat! `relation: "comments"` visszaadja, hogy ehhez a tickethez hány komment van relációban! Közben a `model: "Comment"` ezzel szemben minden ticketre az összes Comment számát adja meg!

Egyéb aggregátumokra példa (`model` és `relation` mező közötti különbség itt is hasonló):
```gql
type Query {
    avgPrio: Float! @aggregate(model: "Ticket", column: "priority", function: AVG)
}
```

## 4. Bonyolultabb kapcsolatok, N:N, saját rezolver

Amikor már egy bonyolultabb N:N van, pl. "hozd kapcsolatba a megadott ID-kkel" és add vissza, hogy "ALREADY THERE, DONE, ERROR" stb., akkor már muszáj lesz saját rezolvert írni. Nézzük egy ilyen példát is!

Adott egy Ticket ID-je, rendeljük hozzá a megadott ID-jű usereket! Ez már az az összetettségű feladat, amit nem állnék hozzá megoldani a beépített direktívákkal (bár ki tudja, talán még lehetséges is.)

Saját mutációkat és lekérdezéseket a megfelelő artisan paranccsel hozhatunk létre, vagyis:
    `php artisan lighthouse:mutation manageUsers

Ilyenkor egy új osztály jön létre egyetlen `__invoke()` metódussal az `App/GraphQL/Mutations` mappában, ide kell megírni a rezolvert.

## További példák

Lásd még: a nyár végén megírt `laravel-zh-pilot` mappában egy komplett korábbi ZH megoldását kommentestül-mindenestül.

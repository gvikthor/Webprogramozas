# Szerveroldali 13. gyak

## Elindulás
Ez egy átírt, kiegészített, részletesebb jegyzet a 12. gyakhoz képest. Ha ezt követed, ugyanúgy a 11. Gyakból indulj, mint a 12. Gyak. Ne a 12. Gyakot másold, mert ott már setupoltuk az alapokat.

1. Lighthouse csomag: `composer require nuwave/lighthouse`
2. Alap séma publikálása: `php artisan vendor:publish --tag=lighthouse-schema`
3. GraphiQL felület: `composer require mll-lab/laravel-graphiql`

A számunkra legfontosabb dolog, ami létrejött, a `graohql/schema.graphql` file. Ebben vannak meghatározva az API-t meghatározó sémák, leírások.

## Kérés (query)
Indítsuk el a szervert: `php artisan serve`

Menjünk fel a `http://127.0.0.1:8000/graphiql` oldalra, ahol be fog tölteni a (harmadikként telepített) Graphiql felület, ami egy UI a graphQL kérések indításához. Tegyük be bal oldalra a következőt:
```gql
query {
  user(id: 1) {
    id
    name
    email
  }
}
```

Itt a `query` szó egyébként elhagyható, tehát elég ennyit írni:
```gql
{
  user(id: 1) {
    id
    name
    email
  }
}
```
Ez vissza fogja adni azt a usert, akinek az ID-ja 1.

## Sémák
Irány a séma file. Nézzünk rá az eleve elkészített két dolgunkra. Az egyik a `type Query`, a másik a `type User`.

Kezdjük a Userrel. Ebben meghatározzuk, hogy az adatbázisunkban hogyan néz ki egy felhasználó. Megadjuk az ettribútum nevét, típusát, esetleg felkiáltójellel azt, hogy ez egy kötelező mező. *(Ezt azért tudta eleve létrehozni, mert a backendünk az alap User típust használja, és a GraphQL példa kód ahhoz van igazítva.)*

A Query ennél izgalmasabb. Megadjuk a "végpont" nevét (ugyebár nincs több végpontunk, hiszen minden ugyanoda megy, pont ez a GraphQL lényege, igazából a query nevét adjuk meg). Egy végpontnak paramétereket is meg lehet adni, hogy mi alapján szeretnénk keresni.
```gql
kiscica(
    id: ID @eq
): User @find
```
Ez a `kiscica` nevű *"végpont"* például azt tudja, hogy id megadásával keres nekünk egy felhasználót. A felületen így kell meghívni:

```gql
{
  kiscica(id: 1) {
    name
  }
}
```
Természetesen lehet bonyolítani a lekéréseket. Például az alap lekérdezés a userre beállít plusz szabályt az id és az email paramétereknek: csak akkor lehet megadni az egyiket, ha nincs megadva a másik; és ha nincs megadva az egyik, akkor a másik kötelező.

A `users` *"végpont"* további érdekességeket tartalmaz, és elég bonyolultnak tűnhet, de valójában nem az.
```gql
users(
    name: String @where(operator: "like")
): [User!]! @paginate(defaultCount: 10)
```
- `name: String` : Bármi is legyen a visszatérési érték típusa (ezen a ponton ugye még nem tudjuk, majd lentebb derül ki), annak a `name` attribútuma érdekel, ami bizonyosan egy `String`.
- `@where` : Ez szimplán a keresési feltétel matchelése.
- `operator: "like"` : A where keresésben használjuk a `like` ("olyan, mint") kulcsszót. Összehasonlításra jó. A `_` karakter pontosan egy karakternyi jokert jelent, a `%` karakter akármennyit (akár nullát is!).
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
- `[]` : a visszatérési érték típusa egy tömb lesz
- `[User]` : a visszatérési érték típusa egy tömb lesz, amiben Userek vannak
- `[User!]` : a visszatérési érték típusa egy tomb lesz, amiben Userek vannak, és egyik User sem `null`
- `[User!]!` : a visszatérési érték... minden ami eddig, ráadásul biztosan nem null
- `@paginate` : beállítja, hogy "oldalanként" hány usert listázzon (tehát ne hozza vissza egyszerre az összeset, csak valamennyit, és lehessen "balra" meg "jobbra" lapozni)
- `default count: 10` : egy "oldalon" egyszerre 10 User legyen

Na de hogy lehet ezt lekérni?
Érdemes megpróbálni beírogatni, de egy halom furi hibát fog dobálni UserPaginatorokról meg típushibákról, amit fun debugolni, de talán egyszerűbb most megnézni a megoldást:
```gql
{
  users(name: "%", first: 2, page: 1) {
    data {
      name
    }
  }
}
```
- `users` : A *"végpont"* neve
- `name`: A paraméter amit bekérünk (ezt fogja like-kal összehasonlítani)
- `%` : Egy üres % jel azt jelenti, hogy bármi lehet ott (hiszen akármennyi karaktert jelent)
- `first` : Ez az oldalméret. Ha növeled, több usert kapsz vissza egyszerre.
- `page` : Hanyadik oldal. Ha növeled, lépked a neveken.

## Saját séma
Csináljunk hát saját típust és *"végpontot"*. Tudjuk, hogy az adatbázisban vannak hibajegyek `ticket` néven. Azt is tudjuk, hogy mik a tulajdonságaik.
![database.png](database.png)

Először a ticket típust kell létrehoznunk, de egyelőre a kommenteket még kihagyjuk (az ugyebár idegen kulcs lesz).
```gql
type Ticket {
    id: ID!
    title: String!
    done: Boolean!
    priority: Int!
    updated_at: DateTime!
    created_at: DateTime!
    deleted_at: DateTime
}
```

Persze ez önmagában kevés, hiszen még nem tudjuk lekérni ezt az adatot. Kell hozzá valami query.
```gql
type Query {
    "..."

    ticket(
        id: ID! @eq
    ) : Ticket @find
}
```
Ez azt jelenti, hogy a ticket nevű *"végpont"* egyetlen paramétere az `id`, és mikor lefut, `Ticket` típust ad vissza kereséssel. Értelemszerűen fontos kiemelni, hogy csak olyan típust tudunk hasraütés szerűen létrehozni itt GraphQL-ben, aminek van megfelelője az alkalmazásban.

Érjük hát el a most létrehozott *"végpontunkat"*.
```gql
{
  ticket(id: 1){
    title
  }
}
```

Ha minden ticketet le szeretnénk kérni, egyszerű írni hozzá egy lekérdezést.
```gql
tickets: [Ticket!]! @all
```

Ezt kérés oldalról pedig így érjük el:
```gql
{
  tickets{
    title
  }
}
```

## Mutációk (mutations)
Mivel informatikában mindent valami furcsa néven kell hívni, mindent, ami módosít az adatokon, mutációnak hívunk. Tehát a CRUD műveletekből az R-t kivéve minden egy mutáció. Kifejezetten egyszerű dologról van szó.

```gql
type Mutation {
    createTicket(
        title: String!,
        done: Boolean!,
        priority: Int!
    ): Ticket! @create
}
```

Hogyan lehet ezt meghívni?
```gql
mutation {
  createTicket(title: "Új ticket", done: false, priority: 1) {
    id
  }
}
```
Ez visszaadja az elkészített ticket ID-ját rögtön, ez hasznos szokott lenni.

A séma deklarációjakor olvashatóbb persze egy sorba írni (mint a függvényargumentumokat).
```gql
type Mutation {
    createTicket(title: String!, done: Boolean!, priority: Int!): Ticket! @create
}
```
De milyen jó lenne, ha ennél még szebbre csinálhatnánk, és persze lehet... na jó, ez már elég meredek hazugság, nem lesz szebb, PHP-ban semmi sem szép, de legalább tanulunk egy új featuret. Tudunk egy input típust készíteni, és azt felhasználni mint elvárt argumentumok.
```gql
input CreateTicketInput {
    title: String!
    done: Boolean!
    priority: Int!
}

type Mutation {
    createTicket(input: CreateTicketInput @spread): Ticket! @create
}
```

És ezt meghívni is... mennyire szép és elegáns lesz.
```gql
mutation {
  createTicket(
    input: {
      title: "Mégegy új ticket",
      done: false,
      priority: 1
    }
	) {
    id
  }
}
```

Update és delete *"végpontokat"* írni sem vészes.
```gql
type Mutation {
    "..."

    updateTicket(id: ID!, title: String, done: Boolean, priority: Int): Ticket! @update
    deleteTicket(id: ID! @whereKey): Ticket! @delete
}
```

```gql
mutation {
  updateTicket(id: 13, title: "Szerkesztett cím") {
    id
    title
  }
}
```

```gql
mutation {
  deleteTicket(id: 13) {
    id
  }
}
```

## Kapcsolat
Ha **van szabályosan beállított kapcsolat** két típus közt az adatbázisban Eloquenten keresztül, akkor GraphQL-ben könnyű setupolni a kapcsolatot. Szóval csináljuk meg a kommenteket.

Először is kell a komment típus.
```gql
type Comment {
    id: ID!
    text: String!
    filename: String
    filename_hash: String
    ticket_id: ID!
    user_id: ID!
    ticket: Ticket! @belongsTo
    user: User! @belongsTo
}
```

Utána rakjuk bele a ticketekbe.
```
type Ticket {
    "..."
    comments: [Comment!]! @hasMany
    commentCount: Int! @count(relation: "comments")
}
```
Itt vigyátni kell a `commentCount`-tal. Míg a `relation: "comments"` azt adja meg, hogy hány komment tartozik a tickethez, ha helyette azt írnánk, hogy `model: "comments"`, akkor az összes ticket összes kommentjét számolná meg.

Ha jól csináltuk, ez a lekérés kilistázza a ticketeket a kommentjeikkel, illetve a kommentjeik számával.
```gql
{
  tickets{
    title
    commentCount
    comments {
      text
    }
  }
}
```
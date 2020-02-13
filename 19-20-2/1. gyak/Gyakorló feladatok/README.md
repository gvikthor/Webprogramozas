# 1. Gyak - Random feladatok
Minden feladat megoldható a gyakorlatok alapján, de nem mindegyik könnyű, ha az volt az első alkalom, hogy js kódot láttál. Ess neki új megközelítéseknek, próbálj meg valami mást, mint ezelőtt!
## Alap szintax
Ez nem egy hasznos program, nem csinál semmi értelmeset, csak random pakoltam egymás után helyes szintaxisú dolgokat.
```javascript
let valtozoValtozo = 10

function fuggveny(parameter){
    return parameter + valtozoValtozo
}

let valtozo = 5
let tomb = [1,'alma',true,-67.5,'valami egyéb','egy kettő három']
let objektum = {
    nev: 'LVIX. Lajos',
    kor: 30 + valtozoValtozo,
    francia: true,
    felesegek: [{
        nev: 'Jeanne',
        kor: 25,
        francia: true
    },
    {
        nev: 'Jean',
        kor: 30,
        francia: true
    }]
}

if(fuggveny(valtozo) > 10){
    for(elem of tomb){
        console.log(`Az aktuális elem értéke ${elem}, és boldogok vagyunk.`)
    }
	console.log('1. ág')
}else{
    if(objektum.felesegek[0].nev != objektum.felesegek[1].nev && (objektum.felesegek[0].kor == objektum.felesegek[1].kor || valtozoValtozo < 5)){
        console.log(objektum)
        if(fuggveny(objektum.kor) > 25 && fuggveny(objektum.kor) !== 30){
            tomb.push('kínai zacskós leves')
			console.log('2. ág')
        }else if(objektum.francia && valtozoValtozo > fuggveny(valtozoValtozo)){
            tomb[2] = 20
			console.log('3. ág')
        }else{
            tomb = [objektum, objektum.felesegek[0]]
			console.log('4. ág')
        }
        console.log(tomb)
    }else{
		console.log('5. ág')
	}
}
```

## Alapok
1. Írj egy függvényt, ami egy listában/tömbben összeadja az értékeket!
    - Igen, összegzés, de túl könnyű lenne nevén nevezni.
    - A tömböt paraméterként add át!
2. Írj egy elágazást, ami ellenőrzi, hogy négy változó közül **pontosan** az egyik teljesül-e.
    - Elsőre elég az ereményt konzolra kiírni.
    - Próbáld meg négy paraméteres függvénnyel, ami visszaadja az eredményt logikai értékként.
3. Készíts két tömböt, amikben egy-egy lakás szobáit tárolod.
    - Minden szobának van neve, mérete, és tudjuk, hogy elér-e addig a wifi, vagy nem.
    - A két lakást valami nagyon fura módon egybe nyitották (egy harmadik tömbbe). Ha két szoba neve megegyezik, a méretük összeadódik, és ha bármelyikben volt wifi, most már a nagyobban is van.
4. Fogd az elején az értelmetlen példakódot, és csak a ```valtozoValtozo``` értékének a módosításával (első sor) próbálj eljutni mind az 5 ágba, ahol ```console.log(n. ág)``` van.

## Eseménykezelés
5. Fogd a harmadik feladatban lévő lakásokat, és egy gomb megnyomására írd ki az egyiket egy táblázatba. Ha megint megnyomják a gombot, akkor a másikat írd bele, és az előző tűnjön el.
    - Használd az ```elem.innerHTML``` tulajdonságot, ```=``` felülírással, ```+=``` hozzáfűzéssel (kövi órán nézzük a másik megoldást).
    - Bármennyiszer lehessen nyomogatni a gombot.
6. Csinálj 3 gombot. Mindegyik megnyomására változzon egy divben lévő szöveg színe.
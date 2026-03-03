const numbers = [4,7,4,12,-1,34,56,-7,5,3,2,4,6,-87,4]

function write(num) {
    console.log(num)
}

function isNegative(num) {
    return num < 0
}

function makeItDouble(num) {
    return num * 2
}

// összehasonlítja a két számot, és
// - ha az egyik a nagyobb, akkor negatív értéket ad vissza
// - ha egynlőek, nullát ad vissza
// - ha a másik a nagyobb, pozitív értéket ad vissza 
function compareNums(a, b) {
    return a - b // ded meg lehetne írni a hármas if elágazást is, de ez rövidebb
}

    /*
    for(const number of numbers) {
        write(number)
    }
    numbers.forEach(num => console.log(num))
    */
   
//numbers.forEach(write)

console.log(
    // tömb --logikai fgv--> egy darab logikai eredmény
    numbers.some(isNegative), // átadok a some-nak egy függvényt, ami egy tömbelemből logikai értéket csinál
    numbers.every(isNegative),
    // tömb --logikai fgv--> egy darab elem eredményül
    numbers.find(isNegative),
    numbers.findIndex(isNegative),
    // tömb --logikai fgv--> több darab elemet eredményül
    numbers.filter(isNegative),
    // tömb --bármilyen függvény--> több darab elem eredményül
    numbers.map(isNegative),
    numbers.map(makeItDouble),
    // tömb --speciális függvény--> egy darab bármilyen értéket készít
    numbers.reduce((snowball, current) => snowball + current, 0),
    numbers.reduce((snowball, current) => snowball * current, 1),
    numbers.reduce((snowball, current) => snowball > current ? snowball : current), // ha nem írok be második paramétert, akkor az első elemről indítja a hógolyót; ha nem lenne ilyen, akkor a kezdőérték az lenne hogy: -Infinity
    // tömb --speciális 3 eredményű függvény--> több darab elem eredményül
    // numbers.sort(compareNums) // veszélyes! átrendezi az eredeti tömböt is!!!
    numbers.toSorted(compareNums)  // ez nem rendezi át az eredeti tömböt
)   

console.log(numbers)


// Írjuk ki minden negatív számnak a dupláját!
console.log(
    numbers
        .filter(isNegative)
        .map(makeItDouble)
)

// Írjk ki, hogy van-e olyan szám, aminek a négyszerese kisebb mint -150
console.log(
    numbers
        .filter(isNegative) // de ez elhagyható, mert a végén úgyis a < -150 szűri
        .map(makeItDouble)
        .map(makeItDouble)
        .some(num => num < -150)
)

// Írjunk ki egy számot (feltételezhetjük hogy bioztosan létezik)
// aminek a négyszerese kisebb mint -150
console.log(
    numbers.find(num => 4 * num < -150)
)

/*
Így csinálná az Excel:
meggyfa
meggyőz
nyitva
Nyx
Áron

Áron
meggyőz
meggyfa
Nyx
nyitva



*/











   
// írja ki mindet
// pozitív / negatív?
// maximum/minimum
// add össze
// rendezd sorba
// hány darab


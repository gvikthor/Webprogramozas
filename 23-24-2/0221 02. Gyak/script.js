let movies = ['terminátor', 'Star Wars', 'avatar', 'Eredet']

function nevelo_08(movie) {
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie[0].toUpperCase()) ? 'az' : 'a'
}

console.log(`Peti megnézte ${movies.map(movie => `${nevelo_08(movie)} ${movie}`).join(', ')} filmeket`)

const testMovie = {
    title: 'Terminátor',
    releaseYear: 1984
}
console.log(testMovie.title)

let movies2 = [
    { title: 'Terminátor', releaseYear: 1984 },
    { title: 'Star Wars', releaseYear: 1976 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'Eredet', releaseYear: 2010 }
]
console.log(`Peti megnézte ${movies2.map(movie => `${nevelo_08(movie.title)} ${movie.title} (${movie.releaseYear})`).join(', ')} filmeket`)

///////////////////////////////////////////////

let password = 'Alma55555'

/*
if(password.length < 8){
    console.log('Hiba! A jelszó legyen legalább 8 karakter hosszú!')
}

if(password.length == 0 || password == password.toUpperCase() || password == password.toLowerCase()){
    console.log('Hiba! A jelszó tartalmazzon kisbetűt és nagybetűt is!')
}

let sum = 0
for(const letter of password){
    if(!isNaN(letter)){
        sum += parseInt(letter)
    }
}

if(sum != 25){
    console.log('Hiba! A jelszóban található számjegyek összege legyen 25!')
}*/

const rules = [
    {
        errorMessage: 'Hiba! A jelszó legyen legalább 8 karakter hosszú!',
        check: password => password.length >= 8
    },
    {
        errorMessage: 'Hiba! A jelszó tartalmazzon kisbetűt és nagybetűt is!',
        check: password => password.length > 0 && password != password.toUpperCase() && password != password.toLowerCase()
    },
    {
        errorMessage: 'Hiba! A jelszóban található számjegyek összege legyen 25!',
        check: password => {
            let sum = 0
            for (const letter of password) {
                if (!isNaN(letter)) {
                    sum += parseInt(letter)
                }
            }
            return sum == 25
        }
    },
    {
        errorMessage: 'Hiba! A jelszó nem elég biztonságos, mert nincs rajta láthatósági mellény! 🦺',
        check: password => false
    },
    {
        errorMessage: 'Hiba! A jelszót nehéz kimondani. Minden második karakter legyen magánhangzó!',
        check: password => false
    },
    {
        errorMessage: 'Hiba! A jelszó nem az ELTE-re jár! Legyen benne a jelszóban az egyik kar! IK TTK TáTK GTK BTK ÁJK BGGyK PPK',
        check: password => false
    }
]

for(const rule of rules){
    let allRulesGood = true
    if(!rule.check(password)){
        allRulesGood = false
        console.log(rule.errorMessage)
    }

    if(allRulesGood){
        console.log('A jelszó elég erős!')
    }
}
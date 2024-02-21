let movies = ['terminátor', 'Star Wars', 'avatar', 'Eredet']

function nevelo_00(){
    return 'a(z)'
}

function nevelo_01(movie){
    let vowels = ['A', 'Á', 'E', 'É', 'I'] // és a többi is
    let firstLetter = movie[0]

    let found = false
    for(const vowel of vowels){
        if(vowel == firstLetter){
            found = true
            break
        }
    }

    if(found){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo_02(movie){
    let vowels = ['A', 'Á', 'E', 'É', 'I'] // és a többi is
    let firstLetter = movie[0]

    let found = false
    for(const vowel of vowels){
        if(vowel == firstLetter){
            found = true
            break
        }
    }

    return found ? 'az' : 'a'
}

function nevelo_03(movie){
    let vowels = ['A', 'Á', 'E', 'É', 'I'] // és a többi is
    let firstLetter = movie[0]

    let found = vowels.includes(firstLetter)

    return found ? 'az' : 'a'
}

function nevelo_04(movie){
    let vowels = ['A', 'Á', 'E', 'É', 'I'] // és a többi is
    let firstLetter = movie[0]

    return vowels.includes(firstLetter) ? 'az' : 'a'
}

function nevelo_05(movie){
    let vowels = ['A', 'Á', 'E', 'É', 'I'] // és a többi is

    return vowels.includes(movie[0]) ? 'az' : 'a'
}

function nevelo_06(movie){
    let vowels = ['A', 'Á', 'E', 'É', 'I'] // és a többi is

    return vowels.includes(movie[0].toUpperCase()) ? 'az' : 'a'
}

function nevelo_07(movie){
    return ['A', 'Á', 'E', 'É', 'I'].includes(movie[0].toUpperCase()) ? 'az' : 'a'
}

function nevelo_08(movie){
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie[0].toUpperCase()) ? 'az' : 'a'
}

/*for(const movie of movies){
    console.log(`Peti megnézte ${nevelo_08(movie)} ${movie} filmet`)
    //console.log(`Peti megnézte ${'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie[0].toUpperCase()) ? 'az' : 'a'} ${movie} filmet`)
}*/

/*let sentence = 'Peti megnézte'
for(const movie of movies){
    sentence += ` ${nevelo_08(movie)} ${movie},`
}
sentence += ' filmeket'
console.log(sentence)*/

/*let sentence = 'Peti megnézte'
let moviesWithNevelos = []
for(const movie of movies){
    moviesWithNevelos.push(`${nevelo_08(movie)} ${movie}`)
}
sentence += moviesWithNevelos.join(', ')
sentence += ' filmeket'
console.log(sentence)*/


/*let moviesWithNevelos = []
for(const movie of movies){
    moviesWithNevelos.push(`${nevelo_08(movie)} ${movie}`)
}
console.log(`Peti megnézte ${moviesWithNevelos.join(', ')} filmeket`)*/

function appendNeveloToMovie(movie){
    return `${nevelo_08(movie)} ${movie}`
}

/*let moviesWithNevelos = []
for(const movie of movies){
    moviesWithNevelos.push(appendNeveloToMovie(movie))
}
console.log(`Peti megnézte ${moviesWithNevelos.join(', ')} filmeket`)*/

/*const moviesWithNevelos = movies.map(appendNeveloToMovie)
console.log(`Peti megnézte ${moviesWithNevelos.join(', ')} filmeket`)*/

//console.log(`Peti megnézte ${movies.map(appendNeveloToMovie).join(', ')} filmeket`)

/*console.log(`Peti megnézte ${movies.map(function(movie){
    return `${nevelo_08(movie)} ${movie}`
}).join(', ')} filmeket`)*/

console.log(`Peti megnézte ${movies.map(movie => `${nevelo_08(movie)} ${movie}`).join(', ')} filmeket`)

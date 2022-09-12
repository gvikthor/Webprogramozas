console.log("Apple")

let number1 = 3
const number2 = 5

console.log(number1 + number2)

console.log(console)

let array1 = [8,3,6,-7,67]

console.log(array1)
console.log(array1[0])
console.log(array1[1])
console.log(array1[2])
console.log(array1[749])
array1[749] = 34
console.log(array1[749])
array1[-7] = 453
array1["apple"] = 9
console.log(array1)
console.log(array1.length)

let array2 = [4,8,2,1,5,6,7,8,9]
//let array2 = [4,8,2,1,null,5,6,7,8,9]
//let array2 = [4,8,2,1,undefined,5,6,7,8,9]
//let array2 = [4,8,2,1,true,5,6,7,8,9]
//let array2 = [4,8,2,1,"apple",5,6,7,8,9]

// single line comment
/*
multi
line
comment
*/

/*
loop
    when to stop? (condition)
    what to do each time? (iterations)
*/

let sum = 0
/*
sum = sum + array2[0] // 0 + 4
sum = sum + array2[1] // 4 + 8
sum = sum + array2[2] // 12 + 2

increase the value of something by some value
sum += array2[0]  //sum is increased by 4 

sum++ //sum is increased by 1
*/

let i = 0
while(i < array2.length){
    sum += array2[i]
    i++
}
console.log(sum)


sum = 0
//for(start; condition; afterEachStep)
for(let i = 0; i < array2.length; i++){
    sum += array2[i]
}
console.log(sum)

//////////////////////////////

sum = 0
for(let number of array2){
    sum += number
}
console.log(sum)

let movie1 = {
    title: "Star Wars",
    rating: 0,
    date: 1977,
    reviews: [
        {
            rating: 7,
            text: "Great plot"
        },
        {
            rating: 10,
            text: 'Amazing'
        },
        {
            rating: 2,
            //text: 'My son said: \"It\'s not Rey\'s lightaber, it\'s Luke\'s\"'
            text: `My son said: 
            "It's not Rey's lightaber, it's Luke's"`
        },
        {
            rating: 1,
            text: 'I hade it, Star Trek is better'
        }
    ]
}

let movie2 = {
    title: "Alienoid",
    rating: 0,
    date: 2022,
    reviews: [
        {
            rating: 8,
            text: "Confusing, but fun"
        },
        {
            rating: 4,
            text: `Didn't understand at all`
        },
        {
            rating: 10,
            text: 'Best movie of my life'
        }
    ]
}

let movie3 = {
    title: "Avangers",
    rating: 0,
    date: 2012,
    reviews: [
        {
            rating: 8,
            text: "Great CGI"
        },
        {
            rating: 6,
            text: `Something`
        }
    ]
}

let movie4 = {
    title: "Shrek 7: Barbie",
    date: null,
    rating: 0,
    reviews: [
        {
            rating: 100,
            text: `Best thing ever, Ryan Gossling kissed Shrek`
        }
    ]
}

function calculateMovieRating(movie){
    if(movie.date && movie.reviews.length > 0){  //and: &&    or: ||
        let ratingSum = 0
        for(let review of movie.reviews){
            ratingSum += review.rating
        }
        movie.rating = ratingSum/movie.reviews.length
    } 
}

let movies = [movie1, movie2, movie3, movie4]
/*
for(let movie of movies){
    if(movie.date && movie.reviews.length > 0){  //and: &&    or: ||
        let ratingSum = 0
        for(let review of movie.reviews){
            ratingSum += review.rating
        }
        movie.rating = ratingSum/movie.reviews.length
    }   
}*/

/*for(let movie of movies){
    calculateMovieRating(movie)
}*/

movies.forEach(calculateMovieRating)

/* [4,8,2,1,5,6,7,8,9] */
function greaterThanFive(num){
    return num > 5
}
array2.some(greaterThanFive)
array2.every(greaterThanFive) 
array2.find(greaterThanFive) 
array2.findIndex(greaterThanFive)
array2.filter(greaterThanFive)

console.log(movies)
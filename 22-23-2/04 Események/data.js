/**
 * Each movie has the following properties:
 * - id: unique id of the movie
 * - title: the title of the movie (string)
 * - length: the length of the movie in minutes (number)
 * - cast: an array of strings, each string is the name of an actor/actress (string[])
 * - year: the year the movie was released (number)
 * - director: the name of the directors (string[])
 * - language: the language of the movie (string of ENG, GER, HUN)
 * - descriptoin: a short description of the movie (string)
 * - genre: the genres of the movie (string[] of ACTION, COMEDY, DRAMA, HORROR, THRILLER)
 * - ratings: an array of numbers, each number is a rating from 1 to 10 (number[])
 */
const movies = [
    {
        id: 'TSR',
        title: "The Shawshank Redemption",
        length: 142,
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown", "Gil Bellows"],
        year: 1994,
        director: ["Frank Darabont"],
        language: "ENG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nisl",
        genre: ["DRAMA"],
        ratings: [9.3, 8.7, 9.6, 8.9, 9.2, 9.1, 9.0, 9.5, 9.4, 8.8]
    },
    {
        id: 'BAT1',
        title: "The Dark Knight",
        length: 152,
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman"],
        year: 2008,
        director: ["Christopher Nolan"],
        language: "ENG",
        description: "The Batman faces his toughest challenge yet as the Joker wreaks havoc on Gotham City.",
        genre: ["ACTION"],
        ratings: [9.0, 8.8, 9.2, 9.5, 8.9, 9.1, 8.7, 8.5, 8.6, 9.3]
    },
    {
        id: 'FG',
        title: "Forrest Gump",
        length: 142,
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
        year: 1994,
        director: ["Robert Zemeckis"],
        language: "ENG",
        description: "Forrest Gump, a simple man with a big heart, experiences some of the most defining moments in American history.",
        genre: ["DRAMA"],
        ratings: [8.9, 8.5, 8.8, 9.1, 9.2, 8.6, 9.0, 8.7, 8.3, 9.3]
    },
    {
        id: 'INC',
        title: "Inception",
        length: 148,
        cast: ["Leonardo DiCaprio", "Ken Watanabe", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
        year: 2010,
        director: ["Christopher Nolan"],
        language: "ENG",
        description: "A thief who enters people's dreams to steal their secrets is hired to plant an idea in a CEO's mind",
        genre: ["DRAMA", "ACTION"],
        ratings: [9.9, 8.5, 8.8, 9.1, 9.5, 8.7, 9.0, 7.7, 8.3, 9.3]
    }
]


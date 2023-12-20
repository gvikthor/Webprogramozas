const { User, Genre, Movie, Rating } = require('../models')

module.exports = {
    Query: {
        test: () => 'Hello There!',
        testWithFriends: (_, {name}) => `Hello ${name}!`,
        genres: () => Genre.findAll(),
        genre: (_, {id}) => Genre.findByPk(id)
    },
    Genre: {
        movies: (genre) => genre.getMovies()
    },
    Movie: {
        genres: (movie) => movie.getGenres()
    }
} 
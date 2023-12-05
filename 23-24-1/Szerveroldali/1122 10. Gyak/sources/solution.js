const { User, Genre, Movie, Rating } = require('./models')
const Sequelize = require('sequelize') /////// <----------- !!!!!!!!!!!!!!
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Hello There!')
    res.send('<ul><li>General Kenobi!</li></ul>')
})

app.get('/movies', async (req, res) => {
    const movies = await Movie.findAll()
    res.json(movies)
})

app.get('/movie/:movieId', async (req, res) => {
    const movie = await Movie.findByPk(req.params.movieId)
    res.json(movie)
})

app.get('/movie/:movieId/add/:number', async (req, res) => {
    const movie = await Movie.findByPk(req.params.movieId)
    res.json(movie.year + parseInt(req.params.number))
})

////// MOVIES //////
app.get('/movies/all', async (req, res) => {
    const movies = await Movie.findAll()
    res.json(movies)
})

app.get('/movies/titles', async (req, res) => {
    const movies = await Movie.findAll()
    const titles = movies.map(movie => movie.title)
    res.send(`<ul>${titles.map(title => `<li>${title}</li>`).join('')}</ul>`)
})

app.get('/movies/nolan', async (req, res) => {
    const nolanMovies = await Movie.findAll({
        where: { director: 'Christopher Nolan' }
    })
    res.json(nolanMovies)
})

app.get('/movies/oldest', async (req, res) => {
    const oldestMovie = await Movie.findOne({
        order: [['year', 'ASC']],
    })
    res.send(`<img src="${oldestMovie.imageUrl}" alt="Oldest Movie">`)
})

app.get('/movies/genre/:genreId', async (req, res) => {
    const genreId = req.params.genreId
    const moviesInGenre = await Movie.findAll({
        include: [{
            model: Genre,
            where: { id: genreId }
        }]
    })
    res.json(moviesInGenre)
})

////// RATINGS //////
app.get('/ratings/happy', async (req, res) => {
    const happyRatings = await Rating.findAll({
        where: { rating: { [Sequelize.Op.in]: [4, 5] } }
    })
    res.json(happyRatings)
})

app.get('/ratings/sad', async (req, res) => {
    const sadRatings = await Rating.findAll({
        where: { rating: { [Sequelize.Op.in]: [1, 2] } }
    })
    res.json(sadRatings)
})

app.get('/ratings/movie/:movieId', async (req, res) => {
    const movieId = req.params.movieId
    const movieRatings = await Rating.findAll({
        where: { MovieId: movieId }
    })
    res.json(movieRatings)
})

app.get('/ratings/user/:userId', async (req, res) => {
    const userId = req.params.userId
    const userRatings = await Rating.findAll({
        where: { UserId: userId }
    })
    res.json(userRatings)
})

app.get('/ratings/all/:pagesize/:page', async (req, res) => {
    const pagesize = parseInt(req.params.pagesize)
    const page = parseInt(req.params.page)
    const offset = (page - 1) * pagesize

    const allRatings = await Rating.findAll({
        limit: pagesize,
        offset: offset
    })
    
    res.send(`<ul>${allRatings.map(rating => `<li>${rating.rating} - ${rating.comment}</li>`).join('')}</ul>`)
})

////// GENRES //////
app.get('/genres/name/:genreName', async (req, res) => {
    const genreName = req.params.genreName
    const genre = await Genre.findOne({
        where: { name: genreName },
        include: [Movie]
    })
    res.json(genre.Movies)
})

////// USERS //////
app.get('/users/likes/:movieId', async (req, res) => {
    const movieId = req.params.movieId
    const likerEmails = await Rating.findAll({
        where: { MovieId: movieId, rating: { [Sequelize.Op.in]: [4, 5] } },
        include: [User]
    })
    res.send(`<ul>${likerEmails.map(rating => `<li>${rating.User.email}</li>`).join('')}</ul>`)
})

app.get('/users/ratingavgs', async (req, res) => {
    const grouped = await Rating.findAll({
        attributes: ['UserId', [Sequelize.fn('AVG', Sequelize.col('rating')), 'avgRating']],
        group: ['UserId']
    })
    res.json(grouped)
})




app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
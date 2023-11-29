const { User, Genre, Movie, Rating } = require('./models')
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

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
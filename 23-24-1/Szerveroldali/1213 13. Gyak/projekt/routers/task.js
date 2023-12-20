const { User, Movie, Rating } = require('../models')
const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')
function authErr(err, req, res, next){
    if(err.name=='UnauthorizedError'){
        res.status(401).json({message: ':('})
    }else{
        next()
    }
}

const paramErr = (reqParams) => (req, res, next) => {
    const missing = reqParams.filter(param => !(param in req.body))
    if(missing.length > 0){
        res.status(400).json({message: `:( missing: ${missing.join(',')}`})
    }else{
        next()
    }
}

router.post('/login', async (req, res) => {
    const { email } = req.body ?? { email: null }
    const user = await User.findOne({ where: { email: email } })

    if(!user){
        return res.status(401).json({message: ':('})
    }else{
        const token = jwt.sign(user.toJSON(), 'secret-key', {
            algorithm: 'HS512',
            expiresIn: '1h'
        })

        res.json({ token })
    }  
})

router.get('/me',
    expressjwt({secret: 'secret-key', algorithms: ['HS512']}),
    authErr,
    async (req, res) => {
        res.json(req.auth)
    }
)

router.post(
    '/task1',
    expressjwt({ secret: 'secret-key', algorithms: ['HS512'] }),
    authErr,
    paramErr(['title', 'director', 'year', 'ratingsEnabled']),
    async (req, res) => {
        const { title, director, year, ratingsEnabled, description, imageUrl } = req.body

        const newMovie = await Movie.create({
            title,
            director,
            year,
            ratingsEnabled,
            description,
            imageUrl,
        })

        res.status(201).json(newMovie)
    }
)

router.patch('/task2/:movieId', async (req, res) => {
    const { movieId } = req.params
    const { description } = req.body

    const movie = await Movie.findByPk(movieId)

    if (!movie) {
        return res.status(404).json({ error: ':(' })
    }

    movie.description = description
    await movie.save()

    res.json(movie)
})

router.post(
    '/task3/:movieId',
    expressjwt({ secret: 'secret-key', algorithms: ['HS512'] }),
    authErr,
    async (req, res) => {
        const { movieId } = req.params
        const { rating, comment } = req.body
        const { id: userId, isAdmin } = req.auth

        const movie = await Movie.findByPk(movieId)

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' })
        }

        const existingRating = await Rating.findOne({
            where: {
                MovieId: movie.id,
                UserId: userId,
            },
        })

        if (existingRating) {
            return res.status(409).json({ error: 'You already rated this movie' })
        }

        //if(!movie.ratingsEnabled && !isAdmin) {
        if(!(movie.ratingsEnabled || isAdmin)) {
            return res.status(403).json({ error: 'Ratings are not enabled for this movie' })
        }

        const newRating = await Rating.create({
            rating,
            comment,
            MovieId: movie.id,
            UserId: userId,
        })

        res.status(201).json(newRating)
    }
)

module.exports = router
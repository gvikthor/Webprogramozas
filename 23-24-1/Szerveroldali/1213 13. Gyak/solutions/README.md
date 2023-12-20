# Megoldások
## REST API
### Task1
```JS
router.post(
    '/task1',
    handleMissingParamError(['title', 'director', 'year', 'ratingsEnabled']),
    expressjwt({ secret: 'secret-key', algorithms: ['HS256'] }),
    handleAuthError,
    async (req, res) => {
        const { title, director, year, ratingsEnabled, description, imageUrl } = req.body

        const newMovie = await Movie.create({
            title,
            director,
            year,
            ratingsEnabled,
            description,
            imageUrl,
        });

        res.status(201).json(newMovie)
    }
)
```

### Task2
```JS
router.patch(
    '/task2/:movieId',
    async (req, res) => {
        const { movieId } = req.params
        const { description } = req.body

        const movie = await Movie.findByPk(movieId)

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' })
        }

        movie.description = description
        await movie.save()

        res.json(movie)
    }
)
```

### Task3
```JS
router.post(
    '/task3/:movieId',
    expressjwt({ secret: 'secret-key', algorithms: ['HS256'] }),
    handleAuthError,
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
```
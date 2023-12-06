const { Genre } = require('../models')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    console.log(req.body)
    const genre = await Genre.create(req.body)
    res.status(201).json(genre)
})

router.delete('/:genreId', async (req, res) => {
    console.log('delete')
    const { genreId } = req.params
    if(!genreId) return res.status(400).json({ message: 'Missing genreId' })
    if(!Number.isInteger(parseInt(genreId))) return res.status(400).json({ message: 'genreId is not an integer' })
    if(parseInt(genreId) < 1) return res.status(400).json({ message: 'genreId is not positive' })

    const genre = await Genre.findByPk(genreId)
    if(!genre) return res.status(404).json({ message: 'Genre not found' })
    await genre.destroy()
    res.json({ message: 'Genre deleted' }) // visszamegy a 200-as kód is, mint minden sima responsenál!
})

module.exports = router
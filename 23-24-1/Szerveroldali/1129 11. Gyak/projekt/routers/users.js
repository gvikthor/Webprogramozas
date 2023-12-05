const { User } = require('../models')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {expressjwt} = require('express-jwt')

router.get('/all', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.get('/test', async (req, res) => {
    const user = await User.findByPk(1)
    res.send(user.passwordCompare('alma'))
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    if(!email || !password) return res.status(400).json({ message: 'Missing email or password' })

    const user = await User.findOne({ where: { email } }) 
    if(!user) return res.status(404).json({ message: 'User not found' })

    if(user.passwordCompare(password)){
        const token = jwt.sign(user.toJSON(), 'secret-key', {algorithm: 'HS256', expiresIn: '1h'})
        res.json({ token })
    } else {
        res.status(401).json({ message: 'Login failed' }) // 401: Unauthorized
    }
})

router.get('/me',
    expressjwt({ secret: 'secret-key', algorithms: ['HS256'] }),
    async (req, res) => {
        //res.json(req.user) <-- nem user, hanem auth, csak hülye vagyok
        res.json(req.auth)
    }
)

module.exports = router
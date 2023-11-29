const { User, Genre, Movie, Rating } = require('./models')
const express = require('express')
require('express-async-errors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/genres', require('./routers/genres'))
app.use('/users', require('./routers/users'))

app.use((err, req, res, next) => {
    if(res.headersSent){
        return next(err) // fusson le a default error handler, ha már küldtünk választ
    }
    res.status(500).json({ // 500: Internal Server Error
        name: err.name,
        message: err.message,
        stack: err.stack.split(/$\s+/gm)
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
const kulsocucc = require('./kulsocucc')
const os = require('os')

kulsocucc.alma('főprogram')

console.log(os.freemem())

const events = require('events')
const esemenykezelo = new events()

esemenykezelo.on('esemenyNeve', arg => {
    console.log(arg)
})

esemenykezelo.emit('esemenyNeve', {
    almafa: 'Valami',
    kortefa: true,
    szilvafa: 1214322
})

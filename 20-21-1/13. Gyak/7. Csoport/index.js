const valami = require('./valami')

valami.kiir('ez egy modulból jött')

const os = require('os')
console.log(os.freemem())

const esemenykezelo = require('events')

const kezelo = new esemenykezelo()

kezelo.on('ValamiEsemeny', (param)=>{
    console.log(param)
})

kezelo.emit('ValamiEsemeny', {
    almaf: 'alma',
    kortefa: true,
    szilvafa: 8421768174
})
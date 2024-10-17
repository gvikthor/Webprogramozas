const gombJatekStart = document.querySelector('#jatek-start')
const vaszon = document.querySelector('canvas')
const ecset = vaszon.getContext('2d')

const solyom = new Image()
solyom.src = 'falcon.png' //480*649px --> 50*70px

const meteorKep = new Image()
meteorKep.src = 'meteor.png' // 360*360px --> 50*50px

const jatekAllapot = {
    solyom: {
        x: 100,
        y: 100
    },
    meteorok: [{ x: 500, y: 500, v: 1 }],
    kirajzolIdozito: null,
    leptetIdozito: null
}

function solyomKirajzol() {
    ecset.drawImage(
        solyom,
        jatekAllapot.solyom.x - 25,
        jatekAllapot.solyom.y - 35,
        50, 70
    )
}
function meteorokKirajzol() {
    for (const meteor of jatekAllapot.meteorok) {
        ecset.drawImage(
            meteorKep,
            meteor.x - 25,
            meteor.y - 25,
            50, 50
        )
    }
}
function meteorLeptet() {
    const bentLevoMeteorok = []
    for (const meteor of jatekAllapot.meteorok) {
        meteor.y += meteor.v
        if(meteor.y < 630) bentLevoMeteorok.push(meteor)
    }
    jatekAllapot.meteorok = bentLevoMeteorok
}

function randomEgesz(min, max) {
    return parseInt(Math.random()*(max-min)) + min
}

function ujMeteor() {
    const ujMeteor = {
        x: randomEgesz(25, 775),
        y: -30,
        v: randomEgesz(1, 4)
    }

    jatekAllapot.meteorok.push(ujMeteor)
}

function utkozik(mx, my) {
    const fx = jatekAllapot.solyom.x;
    const fy = jatekAllapot.solyom.y;

    // Falcon dimensions
    const falconWidth = 50;
    const falconHeight = 75;

    // Meteor dimensions
    const meteorWidth = 50;
    const meteorHeight = 50;

    // Calculate Falcon's bounding box
    const falconLeft = fx - falconWidth / 2;
    const falconRight = fx + falconWidth / 2;
    const falconTop = fy - falconHeight / 2;
    const falconBottom = fy + falconHeight / 2;

    // Calculate Meteor's bounding box
    const meteorLeft = mx - meteorWidth / 2;
    const meteorRight = mx + meteorWidth / 2;
    const meteorTop = my - meteorHeight / 2;
    const meteorBottom = my + meteorHeight / 2;

    // Check for collision
    if (falconRight > meteorLeft &&
        falconLeft < meteorRight &&
        falconBottom > meteorTop &&
        falconTop < meteorBottom) {
        return true; // Collision detected
    } else {
        return false; // No collision
    }
}


function utkozikMeteorokkal(){
    for(const meteor of jatekAllapot.meteorok) {
        if(utkozik(meteor.x, meteor.y)) {
            clearInterval(jatekAllapot.kirajzolIdozito)
            clearInterval(jatekAllapot.leptetIdozito)
            return
        }
    }
}

/////////////////////////////////////////////
// Idő mozgató függvények

function leptet() {
    if(randomEgesz(0,1000) > 992) {
        ujMeteor()
    }
    meteorLeptet()
    utkozikMeteorokkal()
}
jatekAllapot.leptetIdozito = setInterval(leptet, 5)

function kirajzol() {
    ecset.clearRect(0, 0, 800, 600)
    solyomKirajzol()
    meteorokKirajzol()
}
jatekAllapot.kirajzolIdozito = setInterval(kirajzol, 10)

/////////////////////////////////////////////////

gombJatekStart.addEventListener('click', event => {
})

document.body.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            jatekAllapot.solyom.y -= 10
            break

        case 'ArrowDown':
            jatekAllapot.solyom.y += 10
            break

        case 'ArrowLeft':
            jatekAllapot.solyom.x -= 10
            break

        case 'ArrowRight':
            jatekAllapot.solyom.x += 10
            break
    }
})
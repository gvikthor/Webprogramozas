const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const doggy = {
    img: new Image(),
    position: {
        x: 100,
        y: 100
    }
}
doggy.img.src = 'dog.png'

function DrawDoggy(){
    context.clearRect(0, 0, 1400, 600)
    context.drawImage(doggy.img, doggy.position.x, doggy.position.y)
}

doggy.img.addEventListener('load', DrawDoggy)

// !! MODEL UPDATE !!
document.body.addEventListener('keydown', event => {
    switch(event.key){
        case 'w': // felfele, vagyis y negatív
            doggy.position.y -= 10
            break
        case 'a': // blara, vagyis x negatív
            doggy.position.x -= 10
            break
        case 's':  // lefele, vagyis y pozitív
            doggy.position.y += 10
            break
        case 'd':  // jobbra, vagyis x pozitív
            doggy.position.x += 10
            break
        default:

    }
})

// !! RENDER !!
setInterval(DrawDoggy, 50)
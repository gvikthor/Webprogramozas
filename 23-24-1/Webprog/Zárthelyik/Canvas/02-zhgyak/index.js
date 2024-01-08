const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const startBtn = document.querySelector('#start')
const leftCheckbox = document.querySelector('#left')
const rightCheckbox = document.querySelector('#right')
const upCheckbox = document.querySelector('#up')
const downCheckbox = document.querySelector('#down')

const walle = {
    state: 0, // 0: idle, 1: walking, 2: won, 3: lost
    x: 0,
    y: 0
}
startBtn.addEventListener('click', ()=>{
    walle.state = 1
})

// Time-based animation (from the lecture slide)
let lastFrameTime = performance.now()

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000 // seconds
  lastFrameTime = currentTime

  update(dt) // Update current state
  render() // Rerender the frame
  requestAnimationFrame(next)
}

function update(dt) {
    if(walle.state != 1) return
    let speed = 50

    for(const box of terrain){
        if(isCollision(box, { x: walle.x, y: walle.y, width: 50, height: 50 })){
            if(box.type == 'lava'){
                speed = 0
                walle.state = 3
            }else if(box.type == 'grass'){
                speed *= 0.5
            }else if(box.type == 'ice'){
                speed *= 2

                let chance = random(0, 500)
                if(chance < 1){ // Slips both ways
                    leftCheckbox.checked = !leftCheckbox.checked
                    rightCheckbox.checked = !rightCheckbox.checked
                    downCheckbox.checked = !downCheckbox.checked
                    upCheckbox.checked = !upCheckbox.checked
                }else if(chance < 2){ // Slips horizontally
                    leftCheckbox.checked = !leftCheckbox.checked
                    rightCheckbox.checked = !rightCheckbox.checked
                }else if(chance < 3){ // Slips vertically
                    downCheckbox.checked = !downCheckbox.checked
                    upCheckbox.checked = !upCheckbox.checked                    
                }
            }
        }
    }

    let deltaX = 0
    let deltaY = 0
    if(leftCheckbox.checked) deltaX -= speed*dt
    if(rightCheckbox.checked) deltaX += speed*dt
    if(downCheckbox.checked) deltaY += speed*dt
    if(upCheckbox.checked) deltaY -= speed*dt

    walle.x += deltaX
    walle.y += deltaY

    if(isCollision(
        { x: walle.x, y: walle.y, width: 50, height: 50 },
        { x: 450, y: 450, width: 50, height: 50 }
    )){
        walle.state = 2
    }
}

function render() {
    //context.clearRect(0, 0, 500, 500)
    context.drawImage(imgBackground, 0, 0)

    if(walle.state != 0){
        for(const box of terrain){
            if(box.type == 'grass') context.fillStyle = 'green'
            if(box.type == 'lava') context.fillStyle = 'orange'
            if(box.type == 'ice') context.fillStyle = 'blue'

            context.fillRect(box.x, box.y, box.width, box.height)
        }

        if(walle.state == 2){
            context.fillStyle = 'green'
            context.font = '48px Arial'
            context.fillText('Eeeeevaaa!', 170, 50)
        }else if(walle.state == 3){
            context.fillStyle = 'red'
            context.font = '48px Arial'
            context.fillText(':(((', 170, 50)
        }
    }

    context.drawImage(imgWalle, walle.x, walle.y, 50, 50)
    context.drawImage(imgEva, 450, 450, 50, 50)
}

// Start
const imgWalle = new Image()
const imgEva = new Image()
const imgBackground = new Image()
imgWalle.src = 'img/walle.png'
imgEva.src = 'img/eva.png'
imgBackground.src = 'img/background.jpg'

next()

// =============== Segédfüggvények =================

function isCollision(box1, box2) {
  return !(
    box2.y + box2.height < box1.y ||
    box1.x + box1.width < box2.x ||
    box1.y + box1.height < box2.y ||
    box2.x + box2.width < box1.x
  )
}

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}
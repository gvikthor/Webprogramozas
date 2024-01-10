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
}

function render() {
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
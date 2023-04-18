// ========= Selected elements =========
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// =============== Utilities =================
function isCollision(box1, box2) {
  return !(
    box2.y + box2.height < box1.y ||
    box1.x + box1.width < box2.x ||
    box1.y + box1.height < box2.y ||
    box2.x + box2.width < box1.x
  );
}

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// ========= Application state =========
const arrow = {
  fx: 10,
  fy: 290,
  tx: 30,
  ty: 350,
};
const ball = {
  x: 10,
  y: 290,
  width: 20,
  height: 20,
  vx: 0,    // px/s
  vy: 0,    // px/s
  ay: 0,  // px/s2
  img: new Image(),
};
const windows = [
  { x: 479, y: 122, width: 15, height: 30 },
  { x: 494, y: 240, width: 18, height: 42 },
  { x: 562, y: 240, width: 18, height: 42 },
];
const bush = {
  x: 250,
  y: 200,
  width: 100,
  height: 200,
  img: new Image(),
};
let randomIndex = random(0, 2);
let lovedWindow = windows[randomIndex];
let gameState = 0; // 0-start, 1-moving, 2-hit, 3-missed

// ========= Time-based animation (from the lecture slide) =========
let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000; // seconds
  lastFrameTime = currentTime;

  update(dt); // Update current state
  render(); // Rerender the frame

  requestAnimationFrame(next);
}

function isKoUtkozing(){
  return bush.x <= ball.x && ball.x <= bush.x+bush.width &&
         bush.y <= ball.y && ball.y <= bush.y+bush.height
}
function isKoAblakbetoring(windowIndex){
  const w = windows[windowIndex]
  return w.x <= ball.x && ball.x <= w.x+w.width &&
         w.y <= ball.y && ball.y <= w.y+w.height
}

function update(dt) {
  if(isKoUtkozing() || ball.y >= 400){
    ball.vx = 0
    ball.vy = 0
    ball.ay = 0
    gameState = 3
  }
  for(let i = 0; i < 3; i++){
    if(isKoAblakbetoring(i)){
      ball.vx = 0
      ball.vy = 0
      ball.ay = 0
      if(i == randomIndex){
        gameState = 2
      }else{
        gameState = 3
      }
    }
  }
  ball.x += ball.vx
  ball.y += ball.vy
  ball.vy += ball.ay
}
canvas.addEventListener('mousemove', event => {
  arrow.tx = event.clientX - canvas.getBoundingClientRect().x
  arrow.ty = event.clientY - canvas.getBoundingClientRect().y
})
canvas.addEventListener('click', event => {
  ball.vx = (arrow.tx - arrow.fx) / 100
  ball.vy = (arrow.ty - arrow.fy) / 100
  ball.ay = 0.02
})

function render() {
  // Background
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ball/stone
  ctx.drawImage(ball.img, ball.x, ball.y, ball.width, ball.height)

  // Bush/tree
  ctx.drawImage(bush.img, bush.x, bush.y, bush.width, bush.height)

  // Windwos
  windows.forEach((w, i) => {
    ctx.fillStyle = randomIndex == i ? 'yellow' : 'black'
    ctx.fillRect(w.x, w.y, w.width, w.height)
  })
  //ctx.fillStyle = 'yellow'
  //ctx.fillRect(lovedWindow.x, lovedWindow.y, lovedWindow.width, lovedWindow.height)

  ctx.strokeStyle = 'red'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(arrow.fx, arrow.fy)
  ctx.lineTo(arrow.tx, arrow.ty)
  ctx.stroke()

  switch(gameState){
    case 2:
      ctx.fillText('Come, my lover!', 150, 150)
    break
    case 3:
      ctx.fillText('Oops!', 150, 150)
    break
    default:
      console.log(':)')
  }
}

// ========= Start the loop =========
bush.img.src = "bush.png";
ball.img.src = "ball.png";
next(); 

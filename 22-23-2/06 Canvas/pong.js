const canvas = document.querySelector('#game-area')
const context = canvas.getContext('2d')

const state = {
    ball: {
        position: {
            x: 50,
            y: 50
        },
        getX: function(){
            return this.position.x
        },
        getY: function(){
            return this.position.y
        },
        moveLeft: function(){
            this.position.x -= 0.1
        },
        moveRigth: function(){
            this.position.y += 0.1
        }
    },
    left: {
        points: 0,
        position: 50, // percentage,
        getPosition: function(){
            return this.position
        },
        moveUp: function(){
            if(this.position <= 0) return 

            this.position -= 1
        },
        moveDown: function(){
            if(this.position >= 100) return 
            
            this.position += 1
        }
    },
    right: {
        points: 0,
        position: 50,
        getPosition: function(){
            return this.position
        },
        moveUp: function(){
            if(this.position <= 0) return 

            this.position -= 1
        },
        moveDown: function(){
            if(this.position >= 100) return 
            
            this.position += 1
        }
    }
}

const view = {
    viewWidth: 1000,
    viewHeight: 700,
    pongWidth: 10,
    pongHeight: 100,
    leftPosition: -1,
    rightPosition: -1,
    ballPosition: {
        x: -1,
        y: -1
    },
    updatePositions: function(){
        this.leftPosition = this.viewHeight*(state.left.getPosition()/100)
        this.rightPosition = this.viewHeight*(state.right.getPosition()/100)
        this.ballPosition.x = this.viewWidth*(state.ball.getX()/100)
        this.ballPosition.y = this.viewHeight*(state.ball.getY()/100)
    },
    drawPositions: function(){
        context.beginPath()
        context.rect(this.viewWidth-this.pongWidth, this.rightPosition-(this.pongHeight/2), this.pongWidth, this.pongHeight) //bal felső x, bal felső y, szélesség, magasság
        context.rect(0, this.leftPosition-(this.pongHeight/2), this.pongWidth, this.pongHeight) //bal felső x, bal felső y, szélesség, magasság
        context.arc(this.ballPosition.x, this.ballPosition.y, 10, 0, 2*Math.PI)
        context.fill()
    },
    drawState: function(){
        this.updatePositions()
        this.drawPositions()
    }
}

function next() {
  update() // Update current state
  render() // Rerender the frame
  requestAnimationFrame(next)
}

next() // Start the loop

function update() {
    state.ball.moveLeft()
}
function render() {
    context.clearRect(0,0, 1000,700)
    view.drawState()
}

document.body.addEventListener('keydown', event => {
    console.log(event.key)
    if(event.key == 'w'){
        state.left.moveUp()
    }
    if(event.key == 's'){
        state.left.moveDown()
    }
})

document.body.addEventListener('keydown', event => {
    if(event.key == 'ArrowUp'){
        state.right.moveUp()
    }
    if(event.key == 'ArrowDown'){
        state.right.moveDown()
    }
})
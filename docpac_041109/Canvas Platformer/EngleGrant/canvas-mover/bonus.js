var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var player = {
    xPos: 0,
    yPos: 0,

    xVelocity: 0,
    yVelocity: 0,
    gravity: .3,
    grounded: false,

    width: 50,
    height: 50,

    color: "blue",

    speed: 3
}

keysPressed = {
    "w": false,
    "a": false,
    "s": false,
    "d": false,
}

document.addEventListener("DOMContentLoaded", function() {
    drawLoop()
})

document.addEventListener("keydown", function (event) {
    if (!event.repeat) {
        let char = event.key.toLowerCase()
        if (keysPressed[char] != null) {
            keysPressed[char] = true
            console.log(keysPressed)
        }
    }
})

document.addEventListener("keyup", function (event) {
    let char = event.key.toLowerCase()
    if (keysPressed[char] != null) {
        keysPressed[char] = false
        console.log(keysPressed)
    }
})

function drawLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas for the next frame

    updatePlayer()
    drawPlayer()

    requestAnimationFrame(drawLoop)
}

function updatePlayer() {
    if (keysPressed.w) {
        movePlayer(directions.UP)
    }
    if (keysPressed.a) {
        movePlayer(directions.LEFT)
    }
    if (keysPressed.s) {
        movePlayer(directions.DOWN)
    }
    if (keysPressed.d) {
        movePlayer(directions.RIGHT)
    }

    player.yVelocity += player.gravity

    console.log(player.yVelocity)

    if (!(player.yPos+player.height > canvas.height)){ // Ground Check
        player.yPos += player.yVelocity
        player.grounded = false
    } else {
        player.yPos = canvas.height-player.height
        player.yVelocity = 0
        player.grounded = true
    }
}

function drawPlayer() {
    context.fillStyle = player.color
    context.fillRect(
        player.xPos,
        player.yPos,
        player.width,
        player.height
    );
}

const directions = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
}

function movePlayer(direction) {
    if (direction == 1 && !(player.yPos < 0) && player.grounded) { // UP
        player.yVelocity = -4
    }
    if (direction == 2) { // DOWN

    }
    
    if (direction == 3 && !(player.xPos < 0)) { // LEFT
        player.xPos -= player.speed
    }
    if (direction == 4 && !(player.xPos+player.width > canvas.width)) { // RIGHT
        player.xPos += player.speed
    }
}
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var player = {
    xPos: 0,
    yPos: 0,

    yVelocity: 0,
    gravity: .3,
    jumpPower: 10,

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

    "arrowup": false,
    "arrowleft": false,
    "arrowdown": false,
    "arrowright": false
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
    if (keysPressed.w || keysPressed.arrowup) {
        movePlayer(directions.UP)
    }
    if (keysPressed.a || keysPressed.arrowleft) {
        movePlayer(directions.LEFT)
    }
    if (keysPressed.s || keysPressed.arrowdown) {
        movePlayer(directions.DOWN)
    }
    if (keysPressed.d || keysPressed.arrowright) {
        movePlayer(directions.RIGHT)
    }

    player.yVelocity += player.gravity

    if (!(player.yPos+player.height > canvas.height)){ // Ground Check
        player.yPos += player.yVelocity
        player.grounded = false
    } else {
        player.yPos = canvas.height-player.height
        player.yVelocity = 0
        player.grounded = true
    }
    
    if (!(player.yPos+player.height < 0)){ // Ceiling Check
        player.yPos += player.yVelocity
    } else {
        player.yPos = 0-player.height
        player.yVelocity = 0
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
        player.yVelocity = -player.jumpPower
    }
    
    if (direction == 3 && !(player.xPos < 0)) { // LEFT
        player.xPos -= player.speed
    }
    if (direction == 4 && !(player.xPos+player.width > canvas.width)) { // RIGHT
        player.xPos += player.speed
    }
}

function updateJumpPower() {
    jumpPowerInput = document.getElementById("jumpPowerInput")
    player.jumpPower = Number(jumpPowerInput.value)

    console.log("Updated JumpPower to",player.jumpPower)
}

function updateSpeed() {
    speedInput = document.getElementById("speedInput")
    player.speed = Number(speedInput.value)

    console.log("Updated Speed to",player.speed)
}
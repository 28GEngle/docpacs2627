// LOCAL SETTINGS
initialTime = 20
//

directions = {
    "down": 0,
    "down": 1,
    "left": 2,
    "right": 3
}

controllerStatusText = document.getElementById("controller");
scoreText = document.getElementById("score");
timeText = document.getElementById("time");
startButton = document.getElementById("start");

gameTime = initialTime
direction = 0

controller = false

window.addEventListener("gamepadconnected",(listener) => {
    controllerStatusText.textContent = "Detected";
    requestAnimationFrame(pollGamepad)
})

window.addEventListener("gamepaddisconnected",(listener) => {
    controllerStatusText.textContent = "Detected"
    console.log("Controller lost")
})

function pollGamepad() {
    gp = navigator.getGamepads()[0]


    gp.buttons.forEach((button, index) => {
        if (button.pressed) {
            buttonIndex = gp.buttons[index]
            console.log(`Button ${index} was pressed`)
        }
    });

    requestAnimationFrame(pollGamepad)
}

function endGame() {
    console.log("end")
    clearInterval(timeInterval)
    clearInterval(directionInterval)
    startButton.disabled = false
}

function startGame() {
    startButton.disabled = true
    timeText.textContent = gameTime
    gameTime = initialTime
    timeInterval = setInterval(timerTick, 1000)
    directionInterval = setInterval(randomizeDirection, 2000)
}



function randomizeDirection() {
    direction = Math.floor(Math.random()*3.99);
    console.log(direction)
}

function timerTick() {
    requestAnimationFrame(pollGamepad)
    timeText.textContent = gameTime
    gameTime -= 1
    if (gameTime <= 0) {
        endGame()
    }
}
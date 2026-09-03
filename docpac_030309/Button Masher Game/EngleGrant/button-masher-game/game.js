// Settings
var initialTime = 25 // Duration of each game.
var framerate = 2 // Increase if you are having performance issues.
var msPerDirectionChange = 3000
// --------
window.addEventListener("gamepadconnected", (listener) => {
    controllerStatusText.textContent = "Detected";
    requestAnimationFrame(pollGamepad)
})

window.addEventListener("gamepaddisconnected", (listener) => {
    controllerStatusText.textContent = "Detected"
    console.log("Controller lost")
})
// --------
var score = 0
var scoringDirection = 0
var gameTime = initialTime

var directions = {
    "up": 0,
    "down": 1,
    "left": 2,
    "right": 3
}

var controllerStatusText = document.getElementById("controller");
var scoreText = document.getElementById("score");
var timeText = document.getElementById("time");
var directionText = document.getElementById("directionText")
var startButton = document.getElementById("start");

var controller = false
var gameRunning = false

var lastPress = NaN
var lastAxes = [NaN, NaN]

var buttonActivations = {
    0: attemptAward,
    9: startGame
}

var buttonStates = {
    0: false,
    9: false
}

frame = 0
function pollGamepad() {
    frame++

    if (frame >= framerate) {
        frame = 0
        gp = navigator.getGamepads()[0]
        gp.buttons.forEach((button, index) => {
            currentAxes = [gp.axes[0], gp.axes[1]]

            if (button.pressed && !buttonStates[index]) {
                console.log(`${index} pressed`)

                // If the button has a function that can be ran with arguments, run it with the arguments.
                if (buttonActivations[0] && index == 0) {
                    buttonActivations[0](currentAxes);
                } // If the button has a function that can be ran without arguments, run it.
                else if (buttonActivations[index]) {
                    buttonActivations[index]();
                }

                buttonStates[index] = true
            } else if (!button.pressed && buttonStates[index]) {
                console.log(`${index} released`)
                buttonStates[index] = false
            }

            if (
                deadzone(currentAxes[0]) == deadzone(lastAxes[0]) &&
                deadzone(currentAxes[1]) == deadzone(lastAxes[1])
            ) {

            } else {
                console.log(`unique: ${currentAxes}`)
                lastAxes = currentAxes
            }
        });
    }
    requestAnimationFrame(pollGamepad)
}

function endGame() {
    console.log("ending");
    clearInterval(timeInterval);
    clearInterval(directionInterval);

    startButton.disabled = false;

    gameRunning = false;
}

function deadzone(input, min = -0.3, max = 0.3) {
    if (input < max && input > min) {
        return 0
    } else {
        return input
    }
}

function startGame() {
    if (!gameRunning) {
        gameTime = initialTime
        score = 0

        randomizeDirection()
        timeInterval = setInterval(timerTick, 1000)
        directionInterval = setInterval(randomizeDirection, msPerDirectionChange)

        console.log("starting")
        gameRunning = true;

        startButton.disabled = true
        timeText.textContent = initialTime
    }
}

function gamepadDirection(axes) {
    var currentDirection;
    if (deadzone(axes[1]) > 0) {
        currentDirection = directions.up
    } else if (deadzone(axes[1]) < 0) {
        currentDirection = directions.down
    }
    
    if (deadzone(axes[0]) > 0) {
        currentDirection = directions.left
    } else if (deadzone(axes[0]) < 0) {
        currentDirection = directions.right
    }

    return currentDirection
}

function attemptAward(axes) {
    if (scoringDirection == gamepadDirection(axes) && gameRunning) {
        score++
        scoreText.textContent = score
    }
}

function numberToDirectionString(input) {
    if (input == 0) {
        return "DOWN"
    } else if (input == 1) {
        return "UP"
    } else if (input == 2) {
        return "RIGHT"
    } else if (input == 3) {
        return "LEFT"
    }
}

previousDirection = -1
function randomizeDirection() {
    scoringDirection = Math.floor(Math.random() * 3.99);
    if (scoringDirection == previousDirection) {
        if ((scoringDirection + 1) >= 4) {
            scoringDirection -= 1
        } else {
            scoringDirection += 1
        }
    }
    previousDirection = scoringDirection
    directionText.textContent = numberToDirectionString(scoringDirection)
}

function timerTick() {
    gameTime -= 1
    if (gameTime <= 0) {
        endGame()
    }
    timeText.textContent = gameTime
}
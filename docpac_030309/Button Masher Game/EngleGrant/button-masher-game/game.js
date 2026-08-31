directions = {
    "up": 0,
    "down": 1,
    "left": 2,
    "right": 3
}

controllerStatusText = document.getElementById("controller");
scoreText = document.getElementById("score");
timeText = document.getElementById("time");

window.addEventListener("gamepadconnected",(listener) => {
    controllerStatusText.textContent = "Detected"
    console.log("Controller found")
});

gameTime = 5

gametimeID = setInterval(() => {
    if (gameTime <= 0) {
        clearInterval()
    } else {
        gameTime -= 1
        timeText.textContent = String(gameTime);
    }
},1000);

directionID = setInterval(() => {
    direction = Math.floor(Math.random*3.9)
},2000);
//board
var blockSize = 25;
var rows = 20;
var columns = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//apple
var foodX;
var foodY;
//cocacola
var cocacolaX
var cocacolaY
//hamburger
var hamburgerX
var hamburgerY
//pizza
var PizzaX
var Pizzay
//orange
var orangeX
var orangeY

var gameOver = false;
var currentDirection

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = columns * blockSize;
    context = board.getContext("2d"); //to draw on the board

    placeFood();
    document.addEventListener("keyup", changeDirection)
    //update();
    setInterval(update, 1000 / 10); // every 100 ms it will run the function

}

function update() {
    if (gameOver) {
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red"
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX,foodY])
        placeFood();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1]
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize)
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

  //gameOver conditions
    if (snakeX < 0 || snakeX == columns * blockSize || snakeY < 0 || snakeY == rows * blockSize || SnakeX > cols*blockSize - 1 || SnakeX > rows*blockSize - 1) {
        gameOver = true;
        alert("Game Over try not to eat a lot of junk food")
    }  
    
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over try not to eat a lot of junk food")
        }
            
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY !=1 )  {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY !=-1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX !=1) {
        velocityX = -1;
        velocityY = 0;
    }
     else if (e.code == "ArrowRight" && velocityX !=1) {
        velocityX = 1;
        velocityY = 0;
    }
}


function placeFood() {
    //math.random da un numero entre 0-1 y eso lo multiplica por las columns osea 0-19.99, math.floor quita los decimales= 0-19 y luego eso * el blocksize
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * columns) * blockSize;
    
}
var canvas = document.getElementById("game");
var context = convas.getContext("2d");

var grid=16;
var count = 0;

var snake = {
    x:160,
    y:160,
    Dx:grid,
    Dy:0,
    cells:[],
    maxCells:4

}

var = apple{
    x:320,
    y:320
}

function getrandomInt(min,max) {
        return.Math.floor(Math.random()) * (max-min)+min;
}

function loop(){
    requestAnimationFrame(loop);
    if(++Count < 4){return};
    Count = 0;
    Context.clearRect(0,0,canvas.width, canvas.height);
    snake.x += snake.Dx;
    snake.y += snake.Dy;
    if(snake.x < 0){
        snake.x = canvas.width - grid
    }else if(snake.x >= canvas.width){
        snake.x = 0
    };
    if(snake.y < 0){
        snake.y = canvas.width - grid
    }else if(snake.y >= canvas.width){
        snake.y = 0
    };
}

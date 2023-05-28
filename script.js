var canvas = document.getElementById("game");
var context = convas.getContext("2d");

var grid = 16;
var count = 0;

var snake = {
    x: 160,
    y: 160,
    Dx: grid,
    Dy: 0,
    cells: [],
    maxCells: 4

}

var  apple = {
    x: 320,
    y: 320
}

function getrandomInt(min, max) {
    return.Math.floor(Math.random() * (max - min) + min);
}

function loop() {
    requestAnimationFrame(loop);
    if (++Count < 4) {
        return
    };
    Count = 0;
    Context.clearRect(0, 0, canvas.width, canvas.height);
    snake.x += snake.Dx;
    snake.y += snake.Dy;
    if (snake.x < 0) {
        snake.x = canvas.width - grid
    } else if (snake.x >= canvas.width) {
        snake.x = 0
    };
    if (snake.y < 0) {
        snake.y = canvas.width - grid
    } else if (snake.y >= canvas.width) {
        snake.y = 0
    };


    snake.cells.unshift({
        x: snake.x,
        y: snake,
        y
    });
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }
    context.fillstyle = 'red';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

    context.fillstyle = 'green';
    snake.cells.forEach(function (cell, index) {
        context.fillRect(cell.x, cell.x, grid - 1, grid - 1);
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            apple.x = getrandomInt(0, 25) * grid;
            apple.y = getrandomInt(0, 25) * grid;
        };
        var i = index + 1;
        for (i < snake.cells.length, i++) {
            if (cell.x === snake.cell[i].x && cell.y === snake.cell[i].y) {

                snake.x: 160;
                snake.y: 160;
                snake.Dx: grid;
                snake.Dy: 0;
                snake.cells: [];
                snake.maxCells: 4;
                apple.x = getrandomInt(0, 25) * grid;
                apple.y = getrandomInt(0, 25) * grid;
            }
        }
    });
}

document.addEventListener("click", keydown, function e() {
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    } else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    } else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    } else if (e.which === 40 && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = grid;
    }

});

requestAnimationFrame(loop);

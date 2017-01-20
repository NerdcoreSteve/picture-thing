var context = document.getElementById("gameScreen").getContext("2d");
context.canvas.width = window.innerWidth * .95;
context.canvas.height = window.innerHeight * .95;

function clickHandler(mouseEvent)
{
    onClick(mouseEvent.offsetX, mouseEvent.offsetY);
}

document.getElementById('gameScreen').addEventListener("click", clickHandler);

//Game starts here:

var gameState =
{
    rect:
    {
        width: 100,
        height: 100
    }
};

function onClick(x, y)
{
    context.fillRect(x, y, gameState.rect.width, gameState.rect.height);
}


import {Snake} from "./snake.js";

$(document).ready(function() {

    const snake = new Snake();
    snake.init();
    window.onkeydown = e => listenKeys(e, snake);

});


function listenKeys(e, snake) {
    switch(e.key) {
        case "ArrowUp":
            snake.moveUp();
            break;
        case "ArrowDown":
            snake.moveDown();
            break;
        case "ArrowLeft":
            snake.moveLeft();
            break;
        case "ArrowRight":
            snake.moveRight();
            break;
    }
}
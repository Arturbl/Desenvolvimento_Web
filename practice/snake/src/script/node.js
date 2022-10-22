

// represents a node in the matrix (part of the snake)
export class Node {

    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._element = this.getElement(); // represents the div on the screen
    }

    setElement() {
        this._element = this.getElement()
    }

    getElement() {
        const path = "#row" + this.x + " #node" + this.y;
        return $(path);
    }

    paint(color) {
        this._element.css("background-color", color);
    }

    get element() {
        return this._element
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }


    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }


}
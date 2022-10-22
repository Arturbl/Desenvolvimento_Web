import {Node} from "./node.js";

export class Snake {

    constructor() {
        this.nodes = [];
    }

    init() {
        const positions = [[4,4], [4,5]];
        for (let index = 0; index < positions.length; index++) {
            const x = positions[0][index];
            const y = positions[1][index];
            const newNode = new Node(x, y);
            newNode.paint("green");
            this.nodes.push(newNode);
        }
    }


    moveUp() {
        let currentNode = null;
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            if(i == 0) {
                // change head position
            } else {
                // change previous nodes to current node position
            }

        }
    }

    moveDown() {

    }

    moveRight() {

    }

    moveLeft(){
    }

}
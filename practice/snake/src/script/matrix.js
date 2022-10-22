import {Snake} from "./snake.js";

const ROWNUMBER = 10;
const COLSNUMBER = 10;


$(document).ready(function() {
    load();
    styleNodes();
    styleRows();
});

function load() {
    const div = document.getElementById("main");
    for (let i = 0; i < ROWNUMBER; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row" + i);
        for (let j = 0; j < COLSNUMBER; j++) {
            const node = document.createElement("div");
            node.setAttribute("id", "node" + j);
            row.appendChild(node);
        }
        div.appendChild(row);
    }
}

function styleRows() {
    for (let i = 0; i < ROWNUMBER; i++) {
        const rowId = "row" + i;
        const row = document.getElementById(rowId);
        row.setAttribute("height", "50px");
        row.setAttribute("width", "500px");
        row.setAttribute("text-align", "center");
    }
}


function styleNodes() {
    for (let i = 0; i < ROWNUMBER; i++) {
        const rowId = "row" + i;
        for (let j = 0; j < COLSNUMBER; j++) {
            const nodeId = "node" + j;
            const path = "#" + rowId + " #" + nodeId;
            $(path).css("border", "0.1px solid black");
            $(path).css("float", "left");
            $(path).css("clear", "none");
            $(path).css("height", "48px");
            $(path).css("width", "48px");
        }
    }
}

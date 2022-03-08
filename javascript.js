const blackButton = document.getElementById('blackButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const blackboard = document.getElementById('blackboard');

function blackboardSize(xSize, ySize) {
    let y = 1;
    let x = 1;
    for (y = 1; y <= 16; y++) {
        let g = document.createElement('div');
        g.setAttribute("class", `div${y}`);
        blackboard.appendChild(g);
    }
}

function clearBackboard() {

}

function etchColor(color) {

}


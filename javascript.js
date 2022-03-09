const blackButton = document.getElementById('blackButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const blackboard = document.getElementById('blackboard');

// adjusts the size of the cells in the backboard
function blackboardSize(xSize, ySize) {
    let y = 1;
    for (y = 1; y <= 16; y++) {
        let x = 1;
        let g = document.createElement('div');
        g.setAttribute('display', 'block');
        g.setAttribute("class", `ydiv${y} xdiv${x}`);
        g.setAttribute('width', `${640 / xSize}px`);
        g.setAttribute('height', `${640 / ySize}px`);
        g.setAttribute('border', '1px solid black');
        blackboard.appendChild(g);
        for (x = 2; x <= 16; x++) {
            g = document.createElement('div');
            g.setAttribute('display', 'inlineBlock');
            g.setAttribute('class', `ydiv${y} xdiv${x}`);
            g.setAttribute('width', `${640 / xSize}px`);
            g.setAttribute('height', `${640 / ySize}px`);
            g.setAttribute('border', '1px solid black');
            g.setAttribute('background', 'black');
            blackboard.appendChild(g);
        }
    }
}

// Erases everything on the backboard and returns all cells to #f4f4f4
function clearBackboard() {

}

// Sets the color to be used for the etch-a-sketch
function etchColor(color) {

}

// When hovered over, sets the etch-a-sketch cell to the color
function hoverOver() {

}

blackboardSize(16, 16);
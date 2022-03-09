const blackButton = document.getElementById('blackButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const blackboard = document.getElementById('blackboard');

// adjusts the size of the cells in the backboard
function blackboardSize(xSize, ySize) {
    let columns = "auto";
    for (let i = 1; i < xSize; i++) {
        columns = (`${columns} auto`);
    }
    blackboard.setAttribute('gridTemplateColumns', columns);
    blackboard.setAttribute('gridTemplateRows', columns);
    for (y = 1; y <= ySize; y++) {
        for (x = 1; x <= xSize; x++) {
            let g = document.createElement('div');
            g.setAttribute('class', 'grid');
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
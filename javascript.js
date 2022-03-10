const blackButton = document.getElementById('blackButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const buttons = document.getElementsByClassName('buttons');
const blackboard = document.getElementById('blackboard');
const grid = document.getElementsByClassName('grid');
const sideSize = 16;

// adjusts the size of the cells in the backboard
function blackboardSize(xSize) {
    let columns = "auto";
    for (let i = 1; i < xSize; i++) {
        columns = (`${columns} auto`);
    }
    blackboard.style.gridTemplateColumns = columns;
    for (let y = 1; y <= xSize; y++) {
        for (let x = 1; x <= xSize; x++) {
            let g = document.createElement('div');
            g.setAttribute('class', 'grid');
            blackboard.appendChild(g);
            console.log(1);
        }
    }
}
// Erases everything on the backboard and returns all cells to #f4f4f4
function clearBlackboard(xSize) {
    for (let i = 0; i < xSize ** 2; i++) {
        grid[i].style.background = 'f4f4f4';
        console.log(2);
    }

}

// Sets the color to be used for the etch-a-sketch
function etchColor(color) {

}

// When hovered over, sets the etch-a-sketch cell to the color
function hoverOver() {

}

blackboardSize(sideSize);

blackButton.onclick = () => {
    for (let a = 0; a < sideSize ** 2; a++) {
        grid[a].style.background = 'black';
    }
}

clearButton.onclick = clearBlackboard(sideSize);


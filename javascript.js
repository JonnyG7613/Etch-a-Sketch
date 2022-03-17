const body = document.querySelector('body');
// const blackButton = document.getElementById('blackButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const $16 = document.getElementById('size16');
const $32 = document.getElementById('size32');
const $64 = document.getElementById('size64');
const buttons = document.getElementsByClassName('buttons');
const blackboard = document.getElementById('blackboard');
const grid = document.getElementsByClassName('grid');
// const setSize = document.getElementById('setSize');
// const slider = document.getElementById('myRange');
// let sideSize = slider.getAttribute('value');
const colorClass = document.getElementsByClassName('colorClass');
// const slideContainer = document.querySelector('.slideContainer');
let span = document.createElement('span');
const colorPicker = document.getElementById('colorpicker');

// adjusts the size of the cells in the backboard
function blackboardSize(xSize) {
    let columns = "auto";
    if (grid.length > 0) {
        for (let i = grid.length - 1; i >= 0; i--) {
            blackboard.removeChild(grid[i]);
        }
    }
    for (let i = 1; i < xSize; i++) {
        columns = (`${columns} auto`);
    }
    blackboard.style.gridTemplateColumns = columns;
    for (let i = 0; i < xSize ** 2; i++) {
        let g = document.createElement('div');
        g.setAttribute('class', 'grid colorClass');
        blackboard.appendChild(g);
    }
}

//default display of slider
// span.innerHTML = `<h2>${sideSize} x ${sideSize}</h2>`;

// displays the slider dimensions as it's slid
// slider.oninput = function () {
//     let size = slider.value;
//     span.innerHTML = `<h2>${size} x ${size}</h2>`;
//     blackboardSize(size);
// }

// Sets default board size and displays board size
// slideContainer.appendChild(span);
blackboardSize(16);

// when clicked, clears the board of all colors and returns it to a white background
clearButton.onclick = function () {
    for (let i = 0; i < colorClass.length; i++) {
        colorClass[i].style.background = '#b6b4b4';
    }
}

// sets the color of the Etch-a-Sketch to black
colorPicker.onclick = function () {
    for (let i = 0; i < colorClass.length; i++) {
        colorClass[i].addEventListener('mouseover', e => e.target.style.background = colorPicker.value);
    }

}

// sets the color of the Etch-a-Sketch to random colors per square
randomButton.onclick = function () {
    for (let i = 0; i < colorClass.length; i++) {
        if (i % 10 == 0) {
            colorClass[i].addEventListener('mouseover', e => e.target.style.background = `rgba(0, 0, 0, 1.0)`);
        } else {
            let red = parseInt(Math.random() * 256);
            let green = parseInt(Math.random() * 256);
            let blue = parseInt(Math.random() * 256);
            colorClass[i].addEventListener('mouseover', e => e.target.style.background = `rgba(${red}, ${green}, ${blue}, ${Math.random()})`);
        }
    }
}

$16.onclick = function () {
    blackboardSize(16);
}
$32.onclick = function () {
    blackboardSize(32);
}
$64.onclick = function () {
    blackboardSize(64);
}
const blackButton = document.getElementById('blackButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const buttons = document.getElementsByClassName('buttons');
const blackboard = document.getElementById('blackboard');
const grid = document.getElementsByClassName('grid');
let slider = document.getElementById('myRange');
const sideSize = slider.getAttribute('value');


const colorClass = document.getElementsByClassName('colorClass');

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
            g.setAttribute('class', 'grid colorClass');
            blackboard.appendChild(g);
            console.log(1);
        }
    }
}


blackboardSize(sideSize);

clearButton.onclick = function () {
    for (let i = 0; i < colorClass.length; i++) {
        colorClass[i].style.background = '#f4f4f4';
    }
}

blackButton.onclick = function () {
    for (let i = 0; i < colorClass.length; i++) {
        colorClass[i].addEventListener('mouseover', e => e.target.style.background = 'black');
    }

}

randomButton.onclick = function () {
    for (let i = 0; i < colorClass.length; i++) {
        let red = parseInt(Math.random() * 256);
        let green = parseInt(Math.random() * 256);
        let blue = parseInt(Math.random() * 256);
        colorClass[i].addEventListener('mouseover', e => e.target.style.background = `rgba(${red}, ${green}, ${blue}, 1)`);
    }

}

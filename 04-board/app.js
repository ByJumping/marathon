const board = document.querySelector('#board');
const SQUARES_NUMBER = 2040;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=> {
        setColor(square);
    });

    square.addEventListener('mouseleave', ()=> {
        removeColor(square);
    });

    board.append(square);
}

function setColor(element) {
    const color = generateRandomeColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #1d1d1d`;
}

function generateRandomeColor() {
    // let randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

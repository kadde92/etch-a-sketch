// adding the grid(16x16) of divs to the grid-class
const container = document.querySelector('.grid')
const content = document.createElement('div');

let i = 0;
let gridSide = 16



while (i < (gridSide * gridSide)) {
    const singularDiv = document.createElement('div');
    singularDiv.classList.add('singulardiv');
    singularDiv.style.cssText = `width: ${600 / gridSide}px; height: ${600 / gridSide}px`
    container.appendChild(singularDiv)
    i++;
}




const divs = document.querySelectorAll('.grid div')
// const divs = document.getElementsByClassName('grid').childNodes;


// 1st button draw with black color

const black = document.querySelector('#black')
black.addEventListener('click', change)

function change() {
    const divs = document.querySelectorAll('.grid div')
    divs.forEach(div => { div.removeEventListener('mousemove', whiteColor) });
    divs.forEach(div => { div.removeEventListener('mousemove', changeColor) });
    divs.forEach(div => { div.addEventListener('mousemove', blackColor) });

}



function blackColor(e) {
    // e.target.innerText = 'black'
    e.target.style.backgroundColor = 'black'
}

// 2nd button = erase

const eraser = document.querySelector('#erase')
eraser.addEventListener('click', erase)

function erase() {
    const divs = document.querySelectorAll('.grid div')
    divs.forEach(div => { div.removeEventListener('mousemove', blackColor) });
    divs.forEach(div => { div.removeEventListener('mousemove', changeColor) });
    divs.forEach(div => { div.addEventListener('mousemove', whiteColor) });

}

function whiteColor(e) {
    e.target.style.backgroundColor = 'white'
}

// 3rd button = rainbow
// seruaavaks, modaa ekaa while funkctioo niin että grid size päivittyy singuladiv leveys ja pituus kohtiin itsestään
// tee rainbow funktio

const rgbRand = document.querySelector('#rainbow')
rgbRand.addEventListener('click', changeToRainbow)

function changeToRainbow() {
    const divs = document.querySelectorAll('.grid div')
    divs.forEach(div => { div.removeEventListener('mousemove', whiteColor) });
    divs.forEach(div => { div.removeEventListener('mousemove', blackColor) });
    divs.forEach(div => { div.addEventListener('mousemove', changeColor) });

}

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
}


function random() {
    return Math.floor(Math.random() * 256);
}


//4th button, changing the grid size, 1. button that fires an prompt that asks for the grid size -> change the gridsize with the prompt answer, cap is 64x64

const gridBtn = document.querySelector('#gridsize')

gridBtn.addEventListener('click', askUser)

function askUser() {
    let answer = prompt('How many squares per side do you want? (Gridsize)')
    if (answer <= 64) {
        resizeGrid(answer)
    } else {
        alert("Must be <= 64")
    }

}

function resizeGrid(userAnswer) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    
    let i = 0;
    while (i < (userAnswer * userAnswer)) {
        const newGrid = document.createElement('div')
        newGrid.classList.add('newgrid')
        newGrid.style.cssText = `width: ${600 / userAnswer}px; height: ${600 / userAnswer}px`
        container.appendChild(newGrid)
        i++
    }

}



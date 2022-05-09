// adding the grid(16x16) of divs to the grid-class
const container = document.querySelector('.grid')
const content = document.createElement('div');

let i = 0;
let gridSide = 20



while (i < (gridSide * gridSide)) {
    const singularDiv = document.createElement('div');
    singularDiv.classList.add('singulardiv');
    singularDiv.style.cssText = `width: ${600 / gridSide}px; height: ${600 / gridSide}px`
    container.appendChild(singularDiv)
    i++;
}



// 1st button draw with black color

const divs = document.querySelectorAll('.singulardiv')

const black = document.querySelector('#black')
black.addEventListener('click', change)

function change() {
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
    divs.forEach(div => { div.addEventListener('mousemove', changeColor) });

}

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
}


function random() {
    return Math.floor(Math.random() * 255);
}


//4th button, changing the grid size, 1. button that fires an prompt that asks for the grid size -> change the gridsize with the prompt answer, cap is 64x64

const gridBtn = document.querySelector('#gridsize')

gridBtn.addEventListener('click', askUser)

function askUser() {
    let answer = prompt('How many squares per side do you want? (Gridsize)')
    if (answer <= 64) {
        container.removeChild(singularDiv)
    } else {
        console.log("Must be <= 64")
    }
}



// take the answer and insert it to the while function
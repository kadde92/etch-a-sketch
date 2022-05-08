// adding the grid(16x16) of divs to the grid-class
const container = document.querySelector('.grid')
const content = document.createElement('div');

let i = 0;
let gridLimit = 20*20



while (i < gridLimit) {
    const singularDiv = document.createElement('div');
    singularDiv.classList.add('singulardiv');
    singularDiv.style.cssText = `width: ${600/20}px; height: ${600/20}px`
    container.appendChild(singularDiv)
    i++;
}

// add an eventlistener on mouseover for the divs

const divs = document.querySelectorAll('.singulardiv')

divs.forEach(div => { div.addEventListener('mouseover', blackColor) });


function blackColor(e) {
    // e.target.innerText = 'black'
    e.target.style.backgroundColor = 'black'
}

// 1st button = erase

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
rgbRand.addEventListener('click',changeToRainbow)

function changeToRainbow() {
    divs.forEach(div => { div.addEventListener('mousemove', changeColor) });

}

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
}


function random() {
    return Math.floor(Math.random()*255);
}

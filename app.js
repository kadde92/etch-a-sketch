// adding the grid(16x16) of divs to the grid-class
const container = document.querySelector('.grid')
const content = document.createElement('div');

let i = 0;
let gridLimit = 20*20



while (i < gridLimit) {
    const singularDiv = document.createElement('div');
    singularDiv.classList.add('singulardiv');
    // content.style.cssText = `width: ${600/20}; height: ${600/20}`
    container.appendChild(singularDiv)
    i++;
}

// add an eventlistener on mouseover for the divs

const divs = document.querySelectorAll('.singulardiv')

divs.forEach(div => { div.addEventListener('mousemove', blackColor) });


function blackColor(e) {
    // e.target.innerText = 'black'
    e.target.style.backgroundColor = 'black'
}

// 1st button = erase

const eraser = document.querySelector('#paska')
eraser.addEventListener('click', erase)

function erase(e) {
    divs.forEach(div => { div.addEventListener('mousemove', whiteColor) });

}

function whiteColor(e) {
    e.target.style.backgroundColor = 'white'
}

// 2nd button


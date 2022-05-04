// adding the grid(16x16) of divs to the grid-class
const container = document.querySelector('.grid')
const content = document.createElement('div');

let i = 0;
let gridLimit = 16*16


while (i < gridLimit) {
    const singularDiv = document.createElement('div');
    singularDiv.classList.add('singulardiv');
    // content.style.cssText = 'border: 1px solid black; background: pink;'
    container.appendChild(singularDiv)
    i++;
}

const div = document.querySelectorAll('.singulardiv')
div.textContent = "hehe"
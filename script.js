let main = document.querySelector('.main');
let btn = document.querySelector('.main button');
let list = document.querySelectorAll('.menu li');
let minus = document.querySelectorAll('.minus');
let resultNumber = document.querySelector('.number');
let plus = document.querySelector('.plus');
let menu = document.querySelector('.menu');
let marbles = document.querySelector('.marbles-count');
let boxes = document.querySelector('.box-count');
let text = document.querySelector('.menu h4')

let allCounters = [];

boxes.textContent = getBoxesCount();
marbles.textContent = getMarblesCount();

function pushObjects(box) {
    allCounters.push(box)
}

btn.addEventListener('click', () => {
    const counter = { id: crypto.randomUUID(), value: 0}
    pushObjects(counter);
    createNewBox(counter);
    boxes.textContent =  getBoxesCount();
    marbles.textContent = getMarblesCount();
    noVisibleBoxes()
})
function createNewBox(counter) {
    let listElement = document.createElement('li');
    listElement.id = counter.id;
    menu.appendChild(listElement)
    listElement.insertAdjacentHTML('beforeend', `<button class="minus">-</button> <button class="number">${counter.value}</button> <button class="plus">+</button> <img class="trash" src="trash-2.svg">`);

}

function noVisibleBoxes() {
    text.innerHTML = '';
    if(getBoxesCount() === 0) {
        text.innerHTML = 'No marble boxes, yet';
    }
}

function getBoxesCount() {
    return allCounters.length;
}
function getMarblesCount() {
    const counterSum = allCounters.reduce((accumulator, sum) => {
        return accumulator += sum.value;
    },0)
    return counterSum;
}

menu.addEventListener('click', function (event) {
    let currentList = event.target.closest('li');
    let marblesNumber = currentList.querySelector('.number');
    let id = event.target.closest('li').id;
    let position;
    const currentCounter = allCounters.find((box) => {
        return box.id == id;
    })
    position = allCounters.indexOf(currentCounter);
    if(event.target.className == 'minus') {
        currentCounter.value--;
        marbles.textContent = getMarblesCount();
    }
    if(event.target.className == 'plus') {
        currentCounter.value++;
        marbles.textContent = getMarblesCount();
    }
    if(event.target.className == 'trash'){
        menu.removeChild(currentList);
        allCounters.splice(position, 1);
        marbles.textContent = getMarblesCount();
        noVisibleBoxes()
    }
    marblesNumber.textContent = currentCounter.value;
})


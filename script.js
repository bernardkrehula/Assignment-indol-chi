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
    const bernard = [];
    allCounters.push(box)
}

btn.addEventListener('click', () => {
    const counter = { id: crypto.randomUUID(), value: 0}
    pushObjects(counter);
    createNewBox(counter);
    boxes.textContent =  getBoxesCount();
    marbles.textContent = getMarblesCount();
})
function createNewBox(counter) {
    //Pogledaj insertAdjacentHTML
    let listElement = document.createElement('li');
    listElement.id = counter.id;

    let createMinus = document.createElement('button');
    let createNumber = document.createElement('button');
    let createPlus = document.createElement('button');
    let createTrashCan = document.createElement('img');

    createMinus.innerHTML = '-';
    createNumber.innerHTML = counter.value;
    createPlus.innerHTML = '+';

    createTrashCan.addEventListener('click', (event) => {
        deleteBox(event)
        boxes.textContent =  getBoxesCount();
        marbles.textContent = getMarblesCount();
    })

    createMinus.classList.add('minus');
    createNumber.classList.add('number');
    createPlus.classList.add('plus');
    createTrashCan.src = 'trash-2.svg';
    
    listElement.appendChild(createMinus);
    listElement.appendChild(createNumber);
    listElement.appendChild(createPlus);
    listElement.appendChild(createTrashCan);

    menu.appendChild(listElement);
}

/*function noVisibleBoxes() {
    text.innerHTML = '';
    if(boxesCount === 0) {
        text.innerHTML = 'No marble boxes, yet';
    }
}*/

function getBoxesCount() {
    return allCounters.length;
}
function getMarblesCount() {
    const counterSum = allCounters.reduce((accumulator, sum) => {
        return accumulator += sum.value;
    },0)
    return counterSum;
}
let position;
function deleteBox(event) {
    let trash = event.target.closest('li');
    menu.removeChild(trash);
    allCounters.splice(position, 1);
    console.log(allCounters)
    console.log(position)
}
menu.addEventListener('click', function (event) {
    let currentList = event.target.closest('li');
    let marblesNumber = currentList.querySelector('.number');
    let id = event.target.closest('li').id;
    const currentCounter = allCounters.find((box) => {
        return box.id == id;
    })
    if(event.target.className == 'minus') {
        currentCounter.value--;
        marbles.textContent = getMarblesCount();
    }
    if(event.target.className == 'plus') {
        currentCounter.value++;
        marbles.textContent = getMarblesCount();
    }
    marblesNumber.textContent = currentCounter.value;
    position = allCounters.indexOf(currentCounter);
})


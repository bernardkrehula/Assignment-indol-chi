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

let boxesCount = 0;

let marblesCount = 0;

boxes.textContent = boxesCount;
marbles.textContent = marblesCount;

function pushObjects(box) {
    allCounters.push(box)
}

btn.addEventListener('click', () => {
    const counter = { id: crypto.randomUUID(), value: 0}
    pushObjects(counter);
    createNewBox(counter);
    countBoxes()
    noVisibleBoxes()
})
function createNewBox(counter) {
    let listElement = document.createElement('li');
    listElement.id = counter.id;

    let createMinus = document.createElement('button');
    let createNumber = document.createElement('button');
    let createPlus = document.createElement('button');
    let createTrashCan = document.createElement('img');

    createMinus.innerHTML = '-';
    createNumber.innerHTML = counter.value;
    createPlus.innerHTML = '+';

    marbles = document.querySelector('.marbles-count');

    createPlus.addEventListener('click', function (event) {
        let id = event.target.closest('li').id;
        const currentCounter = allCounters.find((box) => {
            return box.id == id;
        })
        currentCounter.value++;
        createNumber.textContent = currentCounter.value;

        marblesCount++;
        marbles.textContent = marblesCount;
        })

    createMinus.addEventListener('click', function(event) {
        let id = event.target.closest('li').id;
        const currentCounter = allCounters.find((box) => {
            return box.id == id;
        })
        currentCounter.value--;
        createNumber.textContent = currentCounter.value;

        marblesCount--;
        marbles.textContent = marblesCount;
    })

    menu = document.querySelector('.menu');
    createTrashCan.addEventListener('click', (event) => {
        let trash = event.target.closest('li');
        let id = event.target.closest('li').id;

        const currentCounter = allCounters.find((box) => {
            return box.id == id;
        })

        marblesCount -= currentCounter.value;

        menu.removeChild(trash);
        boxesCount--;
        boxes.textContent = boxesCount;
        marbles.textContent = marblesCount;

        noVisibleBoxes()
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

function countBoxes() {
    list = document.querySelectorAll('.menu li');
    boxesCount = list.length;
    boxes.textContent = boxesCount;
}
function noVisibleBoxes() {
    text.innerHTML = '';
    if(boxesCount === 0) {
        console.log('hello')
        text.innerHTML = 'No marble boxes, yet';
    }
}

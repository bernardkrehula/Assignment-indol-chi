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
    getBoxesCount()
    getMarblesCount()
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

    createPlus.addEventListener('click', function (event) {
        let id = event.target.closest('li').id;
        const currentCounter = allCounters.find((box) => {
            return box.id == id;
        })
        currentCounter.value++;
        createNumber.textContent = currentCounter.value;
        getMarblesCount();
        })
   
    createMinus.addEventListener('click', function(event) {
        let id = event.target.closest('li').id;
        const currentCounter = allCounters.find((box) => {
            return box.id == id;
        })
        currentCounter.value--;
        createNumber.textContent = currentCounter.value;
        getMarblesCount()
    })

    createTrashCan.addEventListener('click', (event) => {
        updateMarblesValue(event)
        getMarblesCount()
        deleteBox(event)
        noVisibleBoxes()
        getBoxesCount()
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

function noVisibleBoxes() {
    text.innerHTML = '';
    if(boxesCount === 0) {
        text.innerHTML = 'No marble boxes, yet';
    }
}

function getBoxesCount() {
    boxesCount = allCounters.length;
    boxes.textContent = boxesCount;
}
function getMarblesCount() {
    let sum = 0;
    for(let i in allCounters){
        sum += allCounters[i].value;
    }
    marblesCount = sum;
    appendMarblesCount()
}

function appendMarblesCount() {
    marbles.textContent = marblesCount;
}
function deleteBox(event) {
    let trash = event.target.closest('li');
    menu.removeChild(trash);
    allCounters.splice(0, 1);
}
function updateMarblesValue(event) {
    let id = event.target.closest('li').id;
    const currentCounter = allCounters.find((box) => {
        return box.id == id;
    })
    currentCounter.value = null;
}
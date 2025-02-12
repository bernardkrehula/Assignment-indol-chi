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

let marblesCount = 0;

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

    createTrashCan.addEventListener('click', (event) => {
        updateMarblesValue(event)
        marbles.textContent = getMarblesCount();
        deleteBox(event)
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

menu.addEventListener('click', function (event) {
    //console.log('click event se desava')
    subtract(event);
    addValue(event);
    updateBoxesValue(event)




    /*Provjeri ima li event target klasu minus 
    Ako ima znas da je button minus
    */ 
})
function subtract(event) {
    if(event.target.className == 'minus') {
        let id = event.target.closest('li').id;
        const currentCounter = allCounters.find((box) => {
            return box.id == id;
        })
        currentCounter.value--;
        marbles.textContent = getMarblesCount();
    }
}
function addValue(event) {
    if(event.target.className == 'plus') {
        let id = event.target.closest('li').id;
        const currentCounter = allCounters.find((box) => {
            return box.id == id;
        })
        currentCounter.value++;
        marbles.textContent = getMarblesCount();
    }
}
function updateBoxesValue(event) {
    
}
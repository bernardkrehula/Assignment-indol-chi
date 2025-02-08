let main = document.querySelector('.main');
let btn = document.querySelector('.main button');
let list = document.querySelectorAll('.main li');
let minus = document.querySelectorAll('.minus');
let resultNumber = document.querySelector('.number');
let plus = document.querySelector('.plus');
let chosenLi = document.querySelector('.chosen');
let colosestbtns = document.querySelectorAll('.main li button');
/*
Napravi array allCounters = []
Na click dugmeta addNewBox napravi objekat = {id: 1, counter: 0}
Gurni taj objekat u array  allCounters
Napravi funkciju createBoxes
Ona za svaki objekat u arrayu allCounters pravi kutiju


Obrati paznju da na svaki box zakacis id countera koji joj odgovara
Sad svaka kutija ima svoj id koji odgovara id countera u arrayu allCounters
Na click plusa ili minusa nades tu kutiju i procitas njen id (pogledaj closest dom metodu)
Uz pomocu tog id nades counter u arrayu allCounters
Povecas ili smanjis njegov counter
Updejtujes textContent kutije
*/ 
let id = 0;

let allCounters = [];

function createBoxes(id, counter) {
    this.id = id;
    this.counter = counter;
}
function updateId() {
    id++;
}
function appendId() {
    list.forEach((element, index) => {
        index += 1;
        if(index === id){
            element.id = id;
        }
    })
}

function pushObjects(boxes) {
    allCounters.push(boxes)
}


btn.addEventListener('click', () => {
    createNewBox()
    updateId()
    const boxes = new createBoxes(id, 0);
    pushObjects(boxes)
    createBoxes();
    appendId()
    checkListId()
    activateFindCounter()
})
function createNewBox() {
    let createList = document.createElement('li');
    main.appendChild(createList);
    list = document.querySelectorAll('.main li');
    
    let createMinus = document.createElement('button');
    let createNumber = document.createElement('button');
    let createPlus = document.createElement('button');

    createList.appendChild(createMinus).className = 'minus';
    createList.appendChild(createNumber).className = 'number';
    createList.appendChild(createPlus).className = 'plus';

    createMinus.innerHTML = '-';
    createNumber.innerHTML = 0;
    createPlus.innerHTML = '+';

    minus = document.querySelector('.minus');
    resultNumber = document.querySelector('.number');
    plus = document.querySelector('.plus');
}

function addValue() {
    number += 1;
    console.log(number)
}

function subtractValue() {
    number -= 1;
    console.log(number)
}

let counterId = 1;
function checkListId() {
    list = document.querySelectorAll('.main li');
    list.forEach((element) => 
        element.addEventListener('click', (event) => {
        let li = event.target.closest('li').id;
        counterId = li;
        let el = event.target.closest('.plus');
        console.log(el)
    })
)
}
function activateFindCounter() {
    const getObject = allCounters.find(findCounter);
    function findCounter(box) {
        if(box.id == counterId){
        }
    }
}
function createCounter() {
    let counter;
    const getCounter = () => counter;
    const setCounter = (value) => counter = value;
    return { getCounter, setCounter};
}

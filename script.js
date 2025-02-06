let main = document.querySelector('.main');
let btn = document.querySelector('.main button');
let list = document.querySelectorAll('.main li');
let minus = document.querySelector('.minus');
let resultNumber = document.querySelector('.number');
let plus = document.querySelector('.plus');
let chosenLi = document.querySelector('.chosen');

let number = 0;

let activeIndex;
btn.addEventListener('click', () => {
    createNewBox();
    listenForList()
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

}
function addValue() {
    
}

function subtractValue() {
   
}
function listenForList () {
    list.forEach((element) => {
        element.addEventListener('click', () => {
            list.forEach((el) => el.className = '');
            element.classList.add('chosen');
        })
    })
}
function workInChosen() {
    minus = document.querySelector('.chosen button.minus');
    minus.addEventListener('click', () => {
        console.log(minus)
    })
}
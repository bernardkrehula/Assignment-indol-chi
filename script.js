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

let allCounters = [];


function pushObjects(box) {
    allCounters.push(box)
}


btn.addEventListener('click', () => {
    const counter = { id: crypto.randomUUID(), value: 0}
    pushObjects(counter);
    //console.log(allCounters)
    createNewBox(counter) 
})
function createNewBox(counter) {
    let listElement = document.createElement('li');
    listElement.id = counter.id;

    let createMinus = document.createElement('button');
    let createNumber = document.createElement('button');
    let createPlus = document.createElement('button');

    createMinus.innerHTML = '-';
    createNumber.innerHTML = counter.value;
    createPlus.innerHTML = '+';

    createPlus.addEventListener('click', function (event) {
        event.target.value;
        let listEl = event.target.closest('li').id;
        const findValue = allCounters.find(getValue);
        function getValue(box) {
            if(box.id == listEl) {
                box.value++;
                createNumber.textContent = box.value;
            }
        } 
    })
    createMinus.addEventListener('click', function(event) {
        event.target.value;
        let listEl = event.target.closest('li').id;
        const findValue = allCounters.find(getValue);
        function getValue(box) {
            if(box.id == listEl) {
                box.value--;
                createNumber.textContent = box.value;
            }
        } 
    })

    createMinus.classList.add('minus');
    createNumber.classList.add('number');
    createPlus.classList.add('plus');
    
    listElement.appendChild(createMinus);
    listElement.appendChild(createNumber);
    listElement.appendChild(createPlus);

    main.appendChild(listElement);

   
    //Stavi eventlistenere na plus i minus
    //Uz pomoc closest metode nadi list element 
    //Procitaj id sa tog list elementa
    //Uz pomoc find metode pronadi objekat sa tim id unutar arraya allCounters
    //Updejtuj mu .value
    //Updejtuj text content te kutije na ekranu
}

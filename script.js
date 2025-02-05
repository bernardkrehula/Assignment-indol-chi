let main = document.querySelector('.main');
let btn = document.querySelector('.main button');
let listBtn = document.querySelectorAll('.main ul li button');

let number = 0;

let plus;
let minus;

btn.addEventListener('click', () => {
    createNewBox();
})


function createNewBox() {
    let createList = document.createElement('li');
    main.appendChild(createList);
    listBtn = document.querySelectorAll('.main li button');
    if(listBtn.length < 9) {
        for(i = 0; i < 3; i++) {
            let createBtn = document.createElement('button');
            createList.appendChild(createBtn);
        }
    }
    defineButtons();
    activatePlus();
    activteMinus();
}

function defineButtons() {
    listBtn = document.querySelectorAll('.main li button');
    listBtn[0].innerHTML = '-';
    listBtn[1].innerHTML = 0;
    listBtn[2].innerHTML = '+';
    //console.log(listBtn)
}

function activatePlus() {
    plus = listBtn[2];
    plus.addEventListener('click', () => {
        if(number >= 0){
            number += 1;
            console.log(number)
        }
    })
}
   
function activteMinus() {
    minus = listBtn[0];
    minus.addEventListener('click', () => {
        if(number >= 0) {
            number -= 1;
            console.log(number)
        }
    })
}
'use strict';
let bomb = document.querySelector('div');

const bombExpl = setTimeout(() => {
    bomb.textContent = '💣Bomb exploded!💣';
}, 3000);


let buttonChanger = document.querySelector('button');
buttonChanger.addEventListener('click', function () {
    buttonChanger.innerHTML = 'DEFUSED';
    bomb.textContent = '😊'
    clearTimeout(bombExpl);
});

let counter = 10;
function countDownSeconds() {
    for (let i = 10; i > 0; i--) {
        console.log(i)
        bomb.textContent[i];
    }
    setTimeout(() => {
    }, 2000)
}
countDownSeconds();


/* let countFrom = 10;
function countDown(countFrom) {
    for (let i = 0; i < countDown; i--){
        console.log(bomb.textContent = countFrom[i])
    }
}

countDown(10); */
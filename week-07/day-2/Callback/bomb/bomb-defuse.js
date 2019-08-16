'use strict';
let bomb = document.querySelector('div');

/* let bombExpl = setTimeout(() => {
    bomb.textContent = '💣Bomb exploded!💣';
}, 10000) */

let counter = 10;
let countDownSeconds = setInterval(function () {
    counter--;
    document.getElementById("display").innerHTML = counter;
    if (counter <= 0) {
        bomb.textContent = '💣Bomb exploded!💣';
    }
}, 1000);


let buttonChanger = document.querySelector('button');
buttonChanger.addEventListener('click', function () {
    buttonChanger.innerHTML = 'DEFUSED';
    bomb.textContent = '😊'
    clearInterval(countDownSeconds);

});

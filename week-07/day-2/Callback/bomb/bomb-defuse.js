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
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


function drawSquare (x: number, wh:number) {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(147,112,219';
    ctx.fillRect(x,x,wh,wh);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x,x,wh,wh);
}

for (let i: number = 0; i < 15; i++){
    drawSquare(15*i,15);
}


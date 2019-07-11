'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const myCanvasWidth: number = 400;
const myCanvasHeigth: number = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


function drawSquare(xCo: number, yCo: number, size: number): void {
    ctx.beginPath;
    ctx.fillRect(xCo, yCo, size, size);
    ctx.stroke();
}

let toRight: number = 100;

function moveSquare(toRight: number): void {
    for (let i: number = 0; i <= 4; i++) {
        drawSquare(i*=toRight,0, 50);
    }
}
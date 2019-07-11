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

drawSquare(0, 0, 50);

//it's not letting me redo it by giving one variable instead of two.
let toRight: number = 100;
let toDown: number = 100;

function moveSquareDownAndRight(toRight: number): void {
    for (let i: number = 0; i <= 4; i++) {
        for (let j: number = 0; j <= 4; j++) {
            drawSquare(toRight * i, toDown * j, 50);
        }
    }
}
moveSquareDownAndRight(toRight);


function moveSquareDownAndRight2(toRight: number): void {
    for (let k: number = 0; k <= 4; k++) {
        for (let l: number = 0; l <= 4; l++) {
            drawSquare((toRight * k)+50, (toDown * l)+50, 50);
        }
    }
}
moveSquareDownAndRight2(toRight);
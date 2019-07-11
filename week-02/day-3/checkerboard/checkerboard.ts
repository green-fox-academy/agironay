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

drawSquare(0,0,50);

let toRight: number = 100;

function moveSquare(toRight: number): void {
    for (let i: number = 0; i <= 4; i++) {
        drawSquare(toRight*i,0, 50);
    }
}
moveSquare(toRight);

let toDown: number = 100;
function moveSquareDown(toDown: number): void{
    for (let j: number = 0; j<=4; j++) {
        drawSquare(0,toDown*j,50)
    }
}

moveSquareDown(toDown);

/* 
let toDown: number = 100;
function movedownSquare(toDown: number): void{
    for (let j: number = 0; j<=4; j++){
        drawSquare(toDown*100,0,100);
    }
}

moveSquare(toDown); */
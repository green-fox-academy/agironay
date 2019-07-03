'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const myCanvasWidth: number = 600;
const myCanvasHeight: number = 400;

canvas.width = myCanvasWidth;
canvas.height = myCanvasHeight;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let colorS: string[] = ['red','orange','yellow','green','ligthblue','blue','purple'];
let colorsIn: number = 0;

function drawSquare (wh: number, color: number) {
    ctx.beginPath();
    ctx.fillStyle = colorsIn[0]
    ctx.fillRect((myCanvasWidth/2-wh/2),(myCanvasHeight/2-wh/2),wh,wh);
}


/*for (let i: number = 0; i <= 7; i++){
drawSquare(25*i,'blue');
}*/

for (let i: number = 0; i <= 7; i++) {
    colorsIn = colorsIn + 1;
    drawSquare(25*i,colorsIn*i);
}

//colorfulSquares (0,'');
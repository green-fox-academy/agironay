'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const myCanvasWidth: number = 600;
const myCanvasHeight: number = 400;

canvas.width = myCanvasWidth;
canvas.height = myCanvasHeight;
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare (wh) {
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.strokeRect((myCanvasWidth/2-wh/2),(myCanvasHeight/2-wh/2),wh,wh);
    }


for (let i: number = 0; i <= 3; i++){
    drawSquare(50*i);
}

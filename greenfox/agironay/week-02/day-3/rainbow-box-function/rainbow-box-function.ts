'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const myCanvasWidth: number = 600;
const myCanvasHeight: number = 400;

canvas.width = myCanvasWidth;
canvas.height = myCanvasHeight;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill csolor,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.


function drawSquare(wh: number) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.strokeRect((myCanvasWidth / 2 - wh / 2), (myCanvasHeight / 2 - wh / 2), wh, wh);
    ctx.stroke()
}

//draws 7 squares that are increasing in size
for (let i: number = 0; i <= 7; i ++) {
    drawSquare(50*i);
 }


let colorss: string[] = ['red', 'orange', 'yellow', 'green', 'ligthblue', 'blue', 'purple'];
let colorssIndex: number= 0;
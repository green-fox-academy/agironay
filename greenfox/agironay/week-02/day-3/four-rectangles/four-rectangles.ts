'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

//let colorRect: string[] = ['green', 'blue', 'red', 'yellow'];

function fourDiffRects (x,y,width,height) {
    ctx.beginPath();
    for (let i: number = 0; i<=4 ; i++) {
        ctx.fillStyle = colorRect[i];
    }
    for (let j: number = 1; j <= 4; j++){

    
        ctx.fillRect(0,0,60,90);
            ctx.stroke();
    }
        }
fourDiffRects(0,0,0,0)

function drawSquare (x,y) {
    ctx.fillStyle='blue';
    for (let i: number = 1; i <=3; i++) {
        ctx.beginPath();
        ctx.fillRect(x*i,y*i,50,50);
        ctx.stroke();
    }
}

drawSquare(150,100);
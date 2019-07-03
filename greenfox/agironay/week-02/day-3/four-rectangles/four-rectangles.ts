'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.



function fourDiffRects (x,y,width,height) {
    for (let i: number = 0; i<4 ; i+=1) {
        let colorRect: string[] = ['green', 'blue', 'red', 'yellow'];
        ctx.fillStyle = colorRect[i];
        }
    for (let j: number = 1; j <=4; j++){
        ctx.beginPath();
        ctx.fillRect(x*j,y*j,width+10*j,height+2*j);
            ctx.stroke();
    }
}    
fourDiffRects(50,30,0,55)
'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const myCanvasWidth: number = 400;
const myCanvasHeight: number = 400;

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawOneLine (x,y) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(myCanvasWidth/2,myCanvasHeight/2);
    ctx.stroke();
}
drawOneLine(0,0)

function moveByTop (by: number = 20){
    for (let i: number = 0; i<=20; i++){
        drawOneLine(0+by*i,0);
    }
}
moveByTop(20);

function moveByRight (by: number = 20){
    for (let i: number = 0; i<=20; i++){
        drawOneLine(400,0+by*i);
    }
}
moveByRight(20);

function moveByBottom (by: number = 20){
    for (let i: number = 0; i<=20; i++){
        drawOneLine(0+by*i,400);
    }
}
moveByBottom(20);

function moveByLeft (by: number = 20){
    for (let i: number = 0; i<=20; i++){
        drawOneLine(0,0+by*i);
    }
}
moveByLeft(20);
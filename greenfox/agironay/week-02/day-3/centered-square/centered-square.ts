'use strict';

const myCanvasWidth: number = 600;
const myCanvasHeigth: number = 400;



const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(myCanvasWidth/2,myCanvasHeigth/2,10,10);
ctx.stroke();


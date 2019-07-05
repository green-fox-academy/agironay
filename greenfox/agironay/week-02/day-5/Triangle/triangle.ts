'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function drawTrii() {

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(150, 100);
    ctx.lineTo(125, 60);
    ctx.lineTo(100, 100);
    ctx.stroke();
}

for (let i: number = 0; i<=5; i+50){

}
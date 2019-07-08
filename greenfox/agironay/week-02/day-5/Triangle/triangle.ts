'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function drawTrii(a: number, b: number, c: number, d: number) {

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(a, a);
    ctx.lineTo(b, a);
    ctx.lineTo(c, d);
    ctx.lineTo(a, a);
    ctx.stroke();
}

for (let i: number = 0; i <= 5; i + 50) {
    drawTrii(100 + i, 150 + i, 125 + i, 60 + i)
}
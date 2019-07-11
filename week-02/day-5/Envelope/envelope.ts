'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


const canvWidth: number = 400;
const canvHeight: number = 400;

canvas.width = canvWidth;
canvas.height = canvHeight;

let halfW: number = canvWidth / 2;
let halfH: number = canvHeight / 2;

//i know I shouldn't use single letter declarations but it looked so ugly it made me sad


//bottom right chaos
function drawLine(a: number, b: number, c: number, d: number) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

//drawLine(250,200,200,400);


function botRight(yee: number) {
    for (let i: number = 1; i <= 200; i += yee) {
        drawLine(halfW + i, 200, 200, 400 - i);
    }
}
botRight(15);

function botLeft(yee: number) {
    for (let i: number = 1; i <= 200; i += yee) {
        drawLine(halfW - i, 200, 200, 400 - i);
    }
}
botLeft(15);

function topRight(yee: number) {
    for (let i: number = 1; i <= 200; i += yee) {
        drawLine(halfW + i, 200, 200, 0 + i);
    }
}
topRight(15);

function topLeft(yee: number) {
    for (let i: number = 1; i <= 200; i += yee) {
        drawLine(halfW - i, 200, 200, 0 + i);
    }
}
topLeft(15);




//rotation → took the easy way out in the end

/*ctx.translate(canvas.height / 2, canvas.height / 2);
function drawRectangle(size: number, angle: number): void {
    ctx.rotate(Math.PI / 180 * (angle / 14));
    ctx.fillRect(-size, -size, size * 2, size * 2);
}*/


//masnit csinált véletlenül :D
/*function botRight (addSome: number,subSome: number){
    for (let i: number = 0; i<=200; i+=5){
        drawLine(addSome+(i+addSome),200,200,subSome+(subSome+i));
    }*/

//botRight(50,50)
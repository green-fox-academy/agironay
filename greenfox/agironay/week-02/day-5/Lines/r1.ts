'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


const canvWidth: number = 400;
const canvHeight: number = 400;

canvas.width = canvWidth;
canvas.height = canvHeight;

//Bottom kavalkád
function drawBottomLine(moveConst: number, moveIt: number, lineIt: number, canvHeight: number) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(moveConst, moveIt);
    ctx.lineTo(lineIt, canvHeight);
    ctx.stroke();
}


function bottomThingy(moveItt: number, lineItt: number) {
    for (let i: number = 0; i <= 30; i ++) {
    drawBottomLine(0,(moveItt+(i*moveItt)),(lineItt+(lineItt*i)),canvHeight);
}}

bottomThingy (25,25);

//Top kavalkád

function drawTopLine(moveIt: number, moveConst: number, lineConst: number, lineIt: number) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(moveIt, moveConst);
    ctx.lineTo(lineConst, lineIt);
    ctx.stroke();
}


function topThingy(moveItt: number, lineItt: number) {
    for (let i: number = 0; i <= 100; i ++) {
    drawTopLine((moveItt+(i*moveItt)),0,canvWidth,(lineItt+(lineItt*i)));
}}

topThingy (30,30);
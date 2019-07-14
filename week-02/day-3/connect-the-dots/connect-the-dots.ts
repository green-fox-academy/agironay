'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const myCanvasWidth: number = 400;
const myCanvasHeight: number = 400;

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let PointsToConnect: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let PointsToConnect2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];


function connectDots(dots: number[][]) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(dots[0][0], dots[0][1])
    for (let i: number = 0; i < dots.length; i++) {
        ctx.lineTo(dots[i][0], dots[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
}

connectDots(PointsToConnect);
connectDots(PointsToConnect2);

//why is it not working wtf
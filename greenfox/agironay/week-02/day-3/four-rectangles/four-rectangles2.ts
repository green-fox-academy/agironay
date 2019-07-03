let colorArray: string[] = ['yellow', 'green', 'blue', 'red'];

let colorIndex: number = 0;

function drawSquare(x: number, y: number, width:number, hight:number, colors:string[]) {

   ctx.fillStyle = colors[colorIndex]
   ctx.beginPath();
   ctx.fillRect(x, y, width, hight)
   ctx.stroke()
}



let sum: number = 15

for (let i = 0; i < 4; i += 1) {
   drawSquare(sum, sum, sum, sum,colorArray);
   colorIndex = colorIndex + 1;
   sum = sum + sum;

}
drawSquare(10, 10, 50, 50);
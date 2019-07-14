'use strict';
export class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    constructor(color: string, width: number){
        this.color = color;
        this.width = width;
    }

    use(): number{
        return this.inkAmount--;
    }
}

let sharpie1: Sharpie = new Sharpie('red', 1.4);
let sharpie2: Sharpie = new Sharpie('black', 9.4);

sharpie1.use();
sharpie2.use();
sharpie2.use();

console.log(sharpie1);
console.log(sharpie2);
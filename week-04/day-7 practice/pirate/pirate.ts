'use strict';

class Pirate {
    name: string;
    gold: number;
    hp: number;
    isCaptain: boolean;
    hasWoodenLeg: boolean;

    constructor(name: string, gold: number, hp: number = 10, isCaptain: boolean, hasWoodenLeg: boolean){
        this.name = name;
        this.gold = gold;
        this.hp = hp;
        this.isCaptain = isCaptain;
        this.hasWoodenLeg = hasWoodenLeg;
    }

    work(): void{
        if (this.isCaptain == true){
            this.gold +=10;
            this.hp -=5;
        } else {
            this.gold ++;
            this.hp --;
        }
    }

    party(): void{
        if (this.isCaptain == true){
            this.hp +=10;
        } else {
            this.hp ++;
        }
    }

    toString (): string{
        if (this.hasWoodenLeg == true){
            return `Hello, I'm ${this.name}. I have a wooden leg and ${this.gold} golds.`
        } else {
            return `Hello, I'm ${this.name}. I still have my real legs and ${this.gold} golds.`
        }
    }

}

export default Pirate;
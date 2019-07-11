'use strict';

class Animal {
    hunger: number= 50;
    thirst: number= 50;

    constructor(hunger: number, thirst: number) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    canEat (): number{
        return this.hunger--;
    }

    canDrink(): number {
        return this.thirst--;
    }

    canPlay(): number{
        return this.hunger++ && this.thirst++
    }
}


let Animal1: Animal = new Animal(50,50);
let Animal2: Animal = new Animal(50,50);
let Animal3: Animal = new Animal(50,50);


Animal1.canDrink();
Animal1.canDrink();
Animal1.canDrink();
Animal1.canEat();
Animal1.canPlay();
console.log(Animal1);

Animal2.canDrink();
Animal2.canDrink();
Animal2.canDrink();
Animal2.canDrink();
Animal2.canDrink();
Animal2.canEat();
Animal2.canEat();
Animal2.canEat();
Animal2.canEat();
console.log(Animal2);


Animal3.canPlay();
Animal3.canPlay();
console.log(Animal3);

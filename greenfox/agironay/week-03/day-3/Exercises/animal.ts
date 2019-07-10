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

console.log(Animal1);
'use strict'

import Animal from './animal'
import { Cat, Dog, Parrot } from './animalclasses'

class Shelter {
    budget: number;
    animals: Animal[] = [];
    adoptersName: string[] = [];

    constructor(budget: number = 50) {
        this.budget = budget;
    }

    rescue(animal: Animal): number {
        this.animals.push(animal)
        return this.animals.length;
    }

    heal(): number {
        this.animals.forEach(function (element) {
            if (element == this.isHealthy && this.budget > element.healCost) {
                this.budget -= element.healCost;
                return 1;
            }
        })
        return 0
    }

    addAdopter(name: string): void {
        this.adoptersName.push(name)
    }

    findNewOwner(): void {
        if (this.adoptersName.length !== 0 && this.animals.length !== 0) {

            let adopterIndex: number = Math.floor(Math.random() * (this.adoptersName.length - 0) + 0);
            let animalIndex: number = Math.floor(Math.random() * (this.animals.length - 0) + 0);

            this.adoptersName.splice(adopterIndex,1)
            this.animals.splice(animalIndex,1)
        }
    }


    earnDonation(amount: number): number {
        this.budget += amount;
        return this.budget;
    }

    toString(): string {
        let collector: string = "";
        collector += `There are ${this.animals.length} animal(s) and ${this.adoptersName.length} potential adopter(s).\n`;

        this.animals.forEach(function (pet) {
            if (pet.isHealthy == false) {
                collector += `${pet.animalName} is not healthy ${pet.healCost}, and not adoptable. :( \n`
            } else if (pet.isHealthy) {
                collector += `${pet.animalName} is healthy and adoptable! :) \n`
            }
        }
        )
        return collector;
    }
}
let animalCollector: Shelter = new Shelter();

let catto: Cat = new Cat('CatLady', true);
let doggo: Dog = new Dog('DogBro', false);
let parro: Parrot = new Parrot('ParrotPapa', true);

console.log(animalCollector.earnDonation(10));
animalCollector.rescue(catto);
animalCollector.rescue(doggo);
animalCollector.rescue(parro);

animalCollector.addAdopter('John');
animalCollector.addAdopter('Stacey');
animalCollector.addAdopter('Robin');
animalCollector.addAdopter('Alex');


console.log(animalCollector.toString())
animalCollector.findNewOwner();
doggo.heal();
console.log(animalCollector.toString());

//console.log(catto.isAdoptable());
//console.log(catto.healingCost(6,1));
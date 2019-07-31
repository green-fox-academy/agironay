'use strict';
import Animal from './animal'
//import healingCost from './animal'

class Cat extends Animal {
    name: string;
    constructor(ownerName: string, isHealthy: boolean, healCost: number, name: string) {
        super(ownerName, isHealthy, healCost)
        this.name = 'Cat';
        this.healCost = this.healingCost(6, 0);
    }
}

class Dog extends Animal {
    name: string
    constructor(ownerName: string, isHealthy: boolean, healCost: number, name: string) {
        super(ownerName, isHealthy, healCost)
        this.name = 'Dog';
        this.healCost = this.healingCost(8, 1);
    }
}

class Parrot extends Animal {
    name: string
    constructor(ownerName: string, isHealthy: boolean, healCost: number, name: string) {
        super(ownerName, isHealthy, healCost)
        this.name = 'Parrot';
        this.healCost = this.healingCost(10, 4);
    }
}

export default Dog; Cat; Parrot;
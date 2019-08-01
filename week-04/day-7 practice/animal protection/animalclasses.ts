'use strict';
import Animal from './animal'

class Cat extends Animal {
    constructor(ownerName: string, isHealthy: boolean) {
        super(ownerName, isHealthy)
        this.healCost = this.healingCost(6, 0);
    }
}

class Dog extends Animal {
    constructor(ownerName: string, isHealthy: boolean) {
        super(ownerName, isHealthy)
        this.healCost = this.healingCost(8, 1);
    }
}

class Parrot extends Animal {
    constructor(ownerName: string, isHealthy: boolean) {
        super(ownerName, isHealthy)
        this.healCost = this.healingCost(10, 4);
    }
}

export { Dog, Cat, Parrot }
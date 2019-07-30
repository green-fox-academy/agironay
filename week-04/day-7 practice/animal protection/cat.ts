'use strict';
import Animal from './animal'
import healingCost from './animal'

class Cat extends Animal {
    name: string
    constructor(ownerName: string, isHealthy: boolean, healCost: number, name: string) {
        super(ownerName, isHealthy, healCost)
        this.name = name;
        this.healCost = this.healingCost(6, 1);
    }
}

export default Cat;
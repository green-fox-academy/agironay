'use strict'

/* export function healingCost(upto: number, min: number): number {
    return Math.floor(Math.random() * (upto - min + 1) + min);
} */

class Animal {
    ownerName: string;
    isHealthy: boolean;
    healCost: number;

    constructor(ownerName: string, isHealthy: boolean, healCost: number) {
        this.ownerName = ownerName;
        this.isHealthy = isHealthy;
        this.healCost = healCost;
    }

    heal():void {
        this.isHealthy == true;
    }

    isAdoptable(): boolean {
        if (this.isHealthy) {
            return true
        } else {
            return false
        }
    }

    toString():string {
        if (!this.isAdoptable) {
            return `${Animal.name} is not healthy (${this.healCost}€, and not adoptable)`
        } else {
            return `${Animal.name} is healthy and adoptable!`
        }
    }

    healingCost(upto: number, min: number): number {
        return Math.floor(Math.random() * (upto - min + 1) + min);
    }


}

export default Animal;
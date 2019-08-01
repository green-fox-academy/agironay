'use strict'

class Animal {
    animalName: string;
    ownerName: string;
    isHealthy: boolean;
    healCost: number;

    constructor( ownerName: string, isHealthy?: boolean) {
        this.animalName = this.constructor.name;
        this.ownerName = ownerName;
        this.isHealthy = isHealthy;
    }

    heal(): void {
        this.isHealthy = true;
    }

    isAdoptable(): boolean {
        return this.isHealthy
    }

    toString(): string {
        if (!this.isAdoptable) {
            return `${this.animalName} is not healthy (${this.healCost}€, and not adoptable)`
        } else if (this.isAdoptable) {
            return `${this.animalName} is healthy and adoptable!`
        }
    }

    healingCost(upto: number, min: number): number {
        return Math.floor(Math.random() * (upto - min + 1) + min);
    }
}

export default Animal;

/* export function healingCost(upto: number, min: number): number {
    return Math.floor(Math.random() * (upto - min + 1) + min);
} */


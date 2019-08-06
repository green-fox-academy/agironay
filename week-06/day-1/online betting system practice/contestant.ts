'use strict';

export default class Contestant {
    name: string;
    placement: number;

    constructor(name: string, placement: number = 0) {
        this.name = name;
        this.placement = placement
    }

    setPlacement(value: number): number {
        return this.placement = value;
    }

    toString(): string {
        return `${this.name} has finished on place: ${this.placement}`
    }
}


//let jonnie: Contestant = new Contestant();
//jonnie.setPlacement(2);
//console.log(jonnie.toString());
'use strict';

import Pirate from './pirate'

class Ship {
    name: string;
    pirateList: Pirate[] = []
    hasCaptain: boolean;

    constructor(name: string, hasCaptain: boolean) {
        this.name = name;
        this.hasCaptain = hasCaptain;
    }

    addPirate(pirates: Pirate): string {
        if (this.hasCaptain && pirates.isCaptain) {
            return `Sorry, we already have a captain!`
        } else {
            this.pirateList.push(pirates);
        }
    }

    getPoorPirates(): string[] {
        let poorPirateNames: string[] = []
        this.pirateList.forEach(function (pirate) {
            if (pirate.hasWoodenLeg && pirate.gold < 15) {
                poorPirateNames.push(pirate.name)
            }
        })
        return poorPirateNames
    }

    getGolds(): number {
        let totalGold: number = 0;
        this.pirateList.forEach(function (pirate: Pirate) {
            totalGold += pirate.gold;
        })
        return totalGold;
    }

    lastDayOnTheShip() {

    }
}

let ship: Ship = new Ship('Black Pearl', false)

let jack: Pirate = new Pirate('Jack', 15, 10, true, false)
let rose: Pirate = new Pirate('Rose', 150, 14, false, false)
let orli: Pirate = new Pirate('OrlandoBloom', 70, 14, false, false)
let woodie: Pirate = new Pirate('Woodie', 13, 9, false, true)
let spongebob: Pirate = new Pirate('SpongeBob', 700, 25, true, false)
let poorbro: Pirate = new Pirate('Lanky', 1, 25, false, true)

/*spongebob.party();
console.log(spongebob);
spongebob.toString();*/

ship.addPirate(jack);
ship.addPirate(rose);
ship.addPirate(orli);
ship.addPirate(spongebob);
ship.addPirate(woodie);
ship.addPirate(poorbro);
//console.log(ship);
console.log(ship.getGolds()); //ok
console.log(ship.getPoorPirates()); //ok
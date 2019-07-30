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

    addPirate(pirates: Pirate): void {
        if (!this.hasCaptain && !pirates.isCaptain) {
            this.pirateList.push(pirates)
            if (!this.hasCaptain && pirates.isCaptain)
                this.pirateList.push(pirates);
            this.hasCaptain = true;
        }
        else if (this.hasCaptain && pirates.isCaptain) {
            console.log(`Go away ${pirates.name} we already have a captain!`);
        }
        else {
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
        this.pirateList.forEach(function (pirates) {
            pirates.party()
        })
    }

    prepareForBattle() {
        for (let i: number = 0; i < 5; i++) {
            this.pirateList.forEach(function (pirates) {
                pirates.work()
            })
        }
        this.lastDayOnTheShip
    }

}

let ship: Ship = new Ship('Black Pearl', false)

let jack: Pirate = new Pirate('Jack', 15, 10, true, false)
let rose: Pirate = new Pirate('Rose', 150, 14, false, false)
let orli: Pirate = new Pirate('Orlando Bloom', 70, 14, false, false)
let woodie: Pirate = new Pirate('Woodie', 13, 9, false, true)
let spongebob: Pirate = new Pirate('SpongeBob', 700, 25, true, false)
let poorbro: Pirate = new Pirate('Lanky', 1, 25, false, true)

/*spongebob.work();
console.log(spongebob.toString());
spongebob.work();
console.log(spongebob.toString());*/

ship.addPirate(jack);
ship.addPirate(rose);
ship.addPirate(orli);
ship.addPirate(spongebob);
ship.addPirate(woodie);
ship.addPirate(poorbro);


//console.log(ship);
console.log(ship.getGolds());
console.log(ship.getPoorPirates());
ship.lastDayOnTheShip();
ship.prepareForBattle();
console.log(ship);
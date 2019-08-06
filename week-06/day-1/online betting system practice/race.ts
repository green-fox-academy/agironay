'use strict';

import Contestant from './contestant'
import Bet from './bet'
import Player from './player'

export default class Race {
    contestants: Contestant[];
    players: Player[];

    constructor() {
        this.contestants = [];
        this.players = [];
    }

    generatePlacements(): {
        
    }

    startRace():void{
        let placements: number[] = this.generatePlacements();
        for (let i: number = 0; i<this.contestants.length; i++)
        this.contestants[i].setPlacement(placements[i]);
    }
}






/*let contestants: string [] = []
let placements: number [] = [];
for(let i: number = 0; i<contestants.length;){
    let myRandom: number = Math.floor(Math.random() * contestants.length)+1;
    if (placements.indexOf(myRandom) === -1){
        placements.push(myRandom);
    }
}*/
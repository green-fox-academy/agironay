'use strict';

export default class Bet {
    betId: number;
    amount: number;
    player: string;
    contestant: string;

    constructor(amount: number, player: string, contestant: string) {
        this.betId = this.randomNumber(9999, 1000);
        this.amount = amount;
        this.player = player;
        this.contestant = contestant;
    }

    randomNumber(max: number, min: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
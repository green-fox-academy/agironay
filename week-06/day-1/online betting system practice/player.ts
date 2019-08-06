'use strict';

import Bet from './bet'

export default class Player {
    name: string;
    account: number;
    bets: Bet[];

    constructor(name: string, account: number) {
        this.name = name;
        this.account = account
        this.bets = [];
    }

    makeBet(contestant: string, amount: number): void {
        if (this.account >= amount) {
            let myBet: Bet = new Bet[amount, this.name, contestant]
            this.bets.push(myBet);
            this.account -= amount;
        }
    }
}

'use strict';

abstract class Instrument {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;
    constructor(name: string, numberOfStrings: number) {
        super(name)
        this.numberOfStrings = numberOfStrings;
    }
    abstract sound(): string;
}

class ElectricGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 6) {
        super('Electric Guitar', numberOfStrings)
    }
    sound(): string {
        return 'Twang';
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}`)
    }
}

class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Bass Guitar', numberOfStrings)
    }
    sound(): string {
        return 'Duum-duum-duum';
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}`)
    }
}

class Violin extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Violin', numberOfStrings)
    }
    sound(): string {
        return 'Screech';
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}`)
    }
}

export {ElectricGuitar, BassGuitar, Violin};
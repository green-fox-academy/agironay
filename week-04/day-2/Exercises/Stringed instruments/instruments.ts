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
    constructor(name: string, numberOfStrings: number = 6) {
        super(name, numberOfStrings)
    }
    sound(): string {
        return 'Twang';
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}`)
    }
}

class BassGuitar extends StringedInstrument {
    constructor(name: string, numberOfStrings: number = 4) {
        super(name, numberOfStrings)
    }
    sound(): string {
        return 'Duum-duum-duum';
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}`)
    }
}

class Violin extends StringedInstrument {
    constructor(name: string, numberOfStrings: number = 4) {
        super(name, numberOfStrings)
    }
    sound(): string {
        return 'Screech';
    }
    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}`)
    }
}



console.log('Test 1');
let guitar = new ElectricGuitar('Electric Guitar');
let bassGuitar = new BassGuitar('Bass Guitar');
let violin = new Violin('Violin');

guitar.play();
bassGuitar.play();
violin.play();


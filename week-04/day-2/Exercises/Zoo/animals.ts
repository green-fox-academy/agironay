'use strict';

abstract class Animals {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getName();
    abstract breed();
}

class Mammal extends Animals {
    constructor(name: string) {
        super(name)
    }

    getName() {
        return this.name
    }
    breed() {
        return 'ctrl c + ctrl v → and miniaturizes the bebeh';
    }
}

class Reptile extends Animals {
    constructor(name: string) {
        super(name)
    }

    getName() {
        return this.name;
    }
    breed() {
        return 'laying eggs';
    }
}

class Bird extends Animals {
    constructor(name: string) {
        super(name)
    }
    getName() {
        return this.name;
    }
    breed() {
        return 'laying eggs'
    }
}

export {Mammal, Reptile, Bird, Animals};
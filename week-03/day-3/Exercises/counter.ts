'use strict';

class Counter {
    integer: number;

    constructor(integer: number = 0) {
        this.integer = integer;
    }

    addNum(number): number {
        return this.integer += number;
    }

    add(): number {
        return this.integer++;
    }

    get(): void {
        return console.log('Currently our number is: ', this.integer);
    }

    reset(): number {
        return this.integer = 0;
    }
}

let integer: Counter = new Counter();

integer.addNum(5);
integer.addNum(4);
integer.add();
integer.get();
integer.reset();
integer.get();
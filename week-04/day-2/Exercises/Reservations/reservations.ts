'use strict';

interface Reservationy {
    getDowBooking();
    getCodeBooking();
}
let randomChars = Math.random().toString(36).substring(5).toUpperCase();
console.log(randomChars)

let randomDOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];


class Reservation implements Reservationy {
    constructor(getDowBooking: string, getCodeBooking: any) {

    }
    getDowBooking() {
        console.log('hello');
    }
    getCodeBooking() {
        return randomChars;
    }
}
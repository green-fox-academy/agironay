let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHourSec: number = 14*60*60;
let currentMinuteSec: number = 34*60;

let allcurrentsec: number = currentHourSec+currentMinuteSec+currentSeconds;

let fulldaysec: number = 24*60*60;

let secondsLeftToday: number = fulldaysec-allcurrentsec;
console.log('There are',secondsLeftToday,'seconds left today.');
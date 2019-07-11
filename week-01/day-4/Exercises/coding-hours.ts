// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyhr: number = 6;
let weeklyhr: number = 30;
let semester: number = 17;
let allhr: number = weeklyhr*semester;

console.log('Hours spent coding in a semester by an attendee: ', allhr);

let weekly: number = 52;

let perc: number = ((weeklyhr/weekly)*100);

console.log('Percentage of coding hours in a semester is: ', perc);

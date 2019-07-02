'use strict;'

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let ListB: string[] = [...ListA];

if (ListA.includes ('Durian')) {
    console.log("YAY IT HAS IT");
} else {
    console.log("nope");
}

let deleteTheFruit = ListB.indexOf('Durian');
if (deleteTheFruit > -1) {
    ListB.splice(deleteTheFruit, 1);
}

ListA.push('Kiwifruit');

console.log("ListA has:",ListA.length+" elements");
console.log("ListB has:",ListB.length+" elements");

console.log("The index number of Avocado is: "+ListA.indexOf('Avocado'));
console.log("The index number of Durian in List B is: "+ListB.indexOf('Durian'));

ListB.push('Passion Fruit', 'Pomelo');

console.log("The third element in ListA is: ",ListA[2]);
'use strict';
export = {};

let itemPrice = new Map;

itemPrice.set('Milk', 1.07);
itemPrice.set('Rice', 1.59);
itemPrice.set('Eggs', 3.14);
itemPrice.set('Cheese', 12.60);
itemPrice.set('Chicken Breasts', 9.40);
itemPrice.set('Apples', 2.31);
itemPrice.set('Tomato', 2.58);
itemPrice.set('Potato', 1.75);
itemPrice.set('Onion', 1.10);


let BobsList = new Map;

BobsList.set('Milk', 3);
BobsList.set('Rice', 2);
BobsList.set('Eggs', 2);
BobsList.set('Cheese', 1);
BobsList.set('Chicken Breasts', 4);
BobsList.set('Apples', 1);
BobsList.set('Tomato', 2);
BobsList.set('Potato', 1);

let AlicesList = new Map;

AlicesList.set('Rice', 1);
AlicesList.set('Eggs', 5);
AlicesList.set('Chicken Breasts', 2);
AlicesList.set('Apples', 1);
AlicesList.set('Tomato', 10);

//How much does Bob pay?
//How much does Alice pay?
//Who buys more Rice?
//Who buys more Potato?
//Who buys more different products?
//Who buys more products? (piece)


let BobTotal = 0;
BobsList.forEach((v, k) => BobTotal += itemPrice.get(k) * v);
console.log('Bob paid', BobTotal);

let AliceTotal = 0;
AlicesList.forEach((v, k) => AliceTotal += itemPrice.get(k) * v);
console.log('Alice paid', AliceTotal);

if (BobsList.get('Rice') > AlicesList.get('Rice')) {
    console.log('Bob buys more rice')
} else if (BobsList.get('Rice') == AlicesList.get('Rice')) {
    console.log('They buy the same amount of rice')
} else {
    console.log('Alice buys more rice.')
}

if (BobsList.get('Potato') > AlicesList.get('Potato')) {
    console.log('Bob buys more potato')
} else if (BobsList.get('Potato') == AlicesList.get('Potato')) {
    console.log('They buy the same amount of potato')
} else {
    console.log('Alice buys more potato.')
}

if (AlicesList.size > BobsList.size) {
    console.log('Alice buys more products');
}
else if (AlicesList.size == BobsList.size) {
    console.log('They buy equal different amounts of products');
}
else {
    console.log('Bob buys more different kinds of products');
}
// make it bigger by 10

let a: number = 3;
a = a + 7
console.log(a);

// make it smaller by 7
let b: number = 100;
b = b - 7
console.log(b);

// double c's value
let c: number = 44;
c = c * 2
console.log(c);

// divide d's value by 5
let d: number = 125;
d = d / 5
console.log(d);

// what's the cube of e's value?
let e: number = 8;
e = e ** 3
console.log(e);

// tell if f1 is bigger than f2 (as a boolean)
let f1: number = 123;
let f2: number = 345;

if (f1-f2 > 0) {
    console.log('f1 is larger than f2');
} else {
    console.log('f2 is larger than f1');
}

// tell if the double of g2 is bigger than g1 (pras a boolean)
let g1: number = 350;
let g2: number = 200;

if (g2 * 2 > g1 ) {
    console.log('The double of g2 is bigger than g1.');
} else {
    console.log('the double of g2 is not bigger than g1');
}

// tell if 11 is a divisor of h (as a boolean)
let h: number = 1357988018575474;
if (h%11 == 0) {
    console.log('11 is a divisor of this gigantic number →',h);
} else {
    console.log('11 is not the divisor of ',h)
}

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let i1: number = 10;
let i2: number = 3;

if (i1 > i2 ** 2 && i1 < i2 ** 3) {
    console.log(i1,'is larger than',i2 ** 2,'and smaller than',i2 ** 3);
} else {
    console.log('it is not')
}

// tell if j is divisible by 3 or 5 (as a boolean)

let j: number = 1521;

if (j%3 == 0) {
    console.log('it is divisible by 3');
} else if (j%5 == 0) {
    console.log('it is divisible by 5');
} else {
    console.log('neither');
}
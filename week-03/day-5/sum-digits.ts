//Given a non-negative integer n, return the sum of its digits recursively (without loops).

'use strict';


function sumDig(n: number) {
    let remainder = n % 10;
    let sum = remainder;
    if (n >= 10) {
        let rest = Math.floor(n / 10);
        sum += sumDig(rest);
    }
    return sum;
}
console.log(sumDig(52));
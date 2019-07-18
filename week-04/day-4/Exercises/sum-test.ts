'use strict';

import {NumSum} from './sum'
import {test} from 'tape';

test('Should return sum of numbers', t => {
    let sum = new NumSum();
    let numlist: number[] = [5, 10, 1];
    let numlist2: number[] = [];
    let numlist3: number[] = [3];
    sum.getSum(numlist);
    sum.getSum(numlist2);
    let expected = 16;
    t.equal(sum.getSum(numlist), 16)
    t.equal(sum.getSum(numlist2), 16)
    t.equal(sum.getSum(numlist3), 16)
    t.end();
})
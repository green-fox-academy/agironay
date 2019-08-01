'use strict';

import { multiplyRowItems } from './multiplymatrix'
//import { test } from 'tape';
let test = require('tape');

test('should return new matrix', (t:any) => {
    let actual = multiplyRowItems([[1, 3, 6, 2], [7, 5, 6, 1], [3, 3, 1, 5], [9, 0, 5, 3]])
    let expected = [[1, 3, 12, 4], [14, 10, 6, 2], [3, 3, 1, 5], [18, 0, 10, 6]];

    t.deepEqual(actual, expected)
    t.end();
});

test('should return new matrix', (t:any) => {
    let actual = multiplyRowItems([[1, 2], [1, 2]]);
    let expected2 = [[1, 4], [2, 2]];

    t.deepEqual(actual, expected2)
    t.end();
});
'use strict';


import { multiplyRowItems } from './multiplymatrix'
import { test } from '../node_modules/tape';

test('should return new matrix', t => {
    let actual = multiplyRowItems( [[1, 3, 6, 2], [7, 5, 6, 1], [3, 3, 1, 5], [9, 0, 5, 3]])
    let expected = [[1, 3, 12, 4],[14, 10, 6, 2],[3, 3, 1, 5],[18, 0, 10, 6]];

    t.equal(actual, expected)
    t.end();
});
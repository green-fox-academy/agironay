'use strict';

import { Apples } from './apples';
import { test } from 'tape';

test('Should return apple', t => {
    let apple = new Apples();
    
    let actual = apple.getApple();
    let expected = 'apple';
    t.equal(actual, expected)
    t.end();
})
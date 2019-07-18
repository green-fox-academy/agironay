'use strict';

import {sortWord} from './anagram'
import {test} from 'tape';

test('Should return true', t => {

    let actual = sortWord('hello','lloeh');
    let expected = true;
    
    t.equal(actual, expected);
    t.end();
})
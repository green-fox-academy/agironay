'use strict';

import { square } from './square';
import { test } from 'tape';

test(t => {
    t.equals(square(3), 18);
    t.equals(square(1), 1);
    t.equals(square(11), 121);
    t.end();
})


//console.log(square(3));
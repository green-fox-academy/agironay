'use strict';

function countTo10(start: number){
    console.log(start);
    if (start === 10) {
        return;
    }
    countTo10(start +1)
}

countTo10(0);
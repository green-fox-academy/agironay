'use strict';

/* 1) Subscibe to keyup events on the global window object
2) Console log the event object and peek inside
3) Display the last pressed key's code as "Last pressed key code is: __" */

let displayCode = document.getElementsByTagName('h1')[0];

document.addEventListener('keypress', logWhichKey);

function logWhichKey(key) {
    displayCode.textContent = `Last pressed key is: ${key.code} and its code is: ${key.keyCode} `;
}
'use strict;'

let thisMap = new Map();

thisMap.set('978-1-60309-452-8', 'A Letter to Jo');
thisMap.set('978-1-60309-459-71', 'Lupus');
thisMap.set('978-1-60309-444-3', 'Red Panda and Moon Bear');
thisMap.set('978-1-60309-461-0', 'The Lab');


thisMap.forEach(function(v,k) {
    console.log(v, '(ISBN: '+ k +')') ;
})

thisMap.delete('978-1-60309-444-3')
thisMap.delete('978-1-60309-461-0');


thisMap.set('978-1-60309-450-4', 'They Called Us Enemy');
thisMap.set('978-1-60309-453-5', 'Why Did We Trust Him?');

console.log(thisMap.has(478-0-61159-424-8));

console.log(thisMap.has(978-1-60309-453-5));

console.log(thisMap)
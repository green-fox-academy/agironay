let times: number = 0;

while (times < 10) {
    console.log("lalala", "times");
    times ++;
}

for (let iterator: number = 0; iterator < 100; iterator++) {
    console.log(iterator);
}

do {
    times++;
    console.log("lalala", times);
} while (times < 10);
let numbers: number[];
console.log(numbers);

console.log('before - this runs');

try {
    console.log("before try block");
    let firstNumber = numbers[0];
    console.log('after try block');
} catch (e) {
    console.log('something ')
}

console.log('after - this does not run');


// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict;'
//with built in method
let numList= [3, 4, 5, 6, 7].reverse();
console.log(numList);

//with new array + loop
let numList2 = [3, 4, 5, 6, 7];
for (let i: number = 0; i < numList2.length; i++) {
    let newList = 0;
    newList = numList2[i];
    console.log(newList);
}

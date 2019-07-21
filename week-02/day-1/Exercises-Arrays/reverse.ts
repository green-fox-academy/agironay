// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict;'
//with built in method
let numList: number[]= [3, 4, 5, 6, 7];

//with new array + loop
let emptyNumList: number[] =[];
for (let i: number = 0; i < numList.length; i++) {
    emptyNumList[i] = numList[numList.length - i - 1];
}
console.log(emptyNumList);
console.log(numList.reverse());
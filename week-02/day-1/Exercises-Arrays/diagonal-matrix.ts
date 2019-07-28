'use strict;'

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict';

let matrix: number[][] = [
  // [0 , 1 ,2 ,3,],
];

let size: number = 4;
for (let i = 0; i < size; i++) {
  let row: number[] = [];
  for (let inner: number = 0; inner < size; inner++) {
    if (size - inner - 1 === i) {
      row.push(1);
    } else {
      row.push(0);
    }
  }
  matrix.push(row);
}

matrix.forEach(function (row) {
  console.log(row.join(" "));
})

//copied
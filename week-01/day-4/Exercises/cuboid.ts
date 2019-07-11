// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600 → 2*lengthwidth + 2*depthlength + 2*depthwidth
// Volume: 1000 → length*width*height

let llength = 3.5;
let width = 2.9;
let height = 1.4;

let hl:number = height*llength;
let lw:number = llength*width;
let hw:number = height*width;

let surfaceArea = (2*hl)+(2*lw)+(2*hw);
console.log(surfaceArea);

let Volume = llength*width*height;
console.log(Volume);
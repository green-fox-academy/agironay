declare function require(path:string): any;
const fs = require('fs');

let content;

try {
    content = fs.readFileSync('fruits.txt','utf-8');
    console.log(typeof content);
} catch(e) {
    content = ' ';
}

//content = content.replace('\n', 'there is a new line here');

let lines: string[] = content.split('\n');
console.log(lines.length);
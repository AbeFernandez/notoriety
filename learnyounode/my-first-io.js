let fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
let strArray = str.split('\n');
console.log(strArray.length - 1);
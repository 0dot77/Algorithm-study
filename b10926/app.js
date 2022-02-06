'use strict';

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
// input = input.split(' ').map((item) => +item);

solution(input);

function solution(A) {
    console.log(`${A}??!`);
}

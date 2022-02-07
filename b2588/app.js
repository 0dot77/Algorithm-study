'use strict';

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputValue = [];
for (let i = 0; i < input.length; i++) {
    inputValue[i] = +input[i];
}

// solution();

// function solution(a) {

// }

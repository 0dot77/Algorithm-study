"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let result = 0;
// console.log(+input[0]);
solution(+input[0]);

function solution(a) {
  for (let i = 1; i <= a; i++) {
    result += i;
  }
  console.log(result);
}

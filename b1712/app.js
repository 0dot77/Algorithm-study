"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

let result = 0;
if (input[1] >= input[2]) {
  result = -1;
} else {
  result = Math.floor(input[0] / (input[2] - input[1])) + 1;
}

console.log(result);

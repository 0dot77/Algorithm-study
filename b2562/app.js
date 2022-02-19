"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);
// console.log(input);

solution(input);

function solution(arr) {
  let max = arr[0];
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      n = i + 1;
    }
  }
  console.log(`${max}\n${n}`);
}

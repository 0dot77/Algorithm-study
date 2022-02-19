"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

let multiply = String(input[0] * input[1] * input[2]);

solution(multiply);

function solution(arr) {
  for (let i = 0; i < 10; i++) {
    let n = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === Number(arr[j])) {
        n++;
      }
    }
    console.log(n);
  }
}

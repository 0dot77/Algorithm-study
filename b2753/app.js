"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

// console.log(10 % 2);

solution(+input[0]);

function solution(a) {
  if (a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) {
    console.log(1);
  } else {
    console.log(0);
  }
}

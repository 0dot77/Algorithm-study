"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(a) {
  let result = "";
  for (let i = a; i > 0; i--) {
    result += i + "\n";
  }
  console.log(result);
}

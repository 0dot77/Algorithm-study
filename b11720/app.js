"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 첫째줄에 숫자의 개수 N
// 둘째줄에 숫자N개가 공백없이 주어진다.

function solution(n, num) {
  let result = 0;
  for (let i = 0; i < Number(n); i++) {
    result += Number(num[i]);
  }
  console.log(result);
}

solution(input[0], input[1]);

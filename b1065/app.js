"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

function solution(N) {
  let result = 0;
  for (let i = 1; i <= N; i++) {
    if (i < 100) {
      result++;
    } else if (i > 100) {
      let diff1 = Number(String(i)[0]) - Number(String(i)[1]);
      let diff2 = Number(String(i)[1]) - Number(String(i)[2]);
      if (diff1 === diff2) {
        result++;
      }
    }
  }
  console.log(result);
}
solution(input);

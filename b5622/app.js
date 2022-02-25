"use strict";
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

function solution(dial) {
  let resultTime = 0;
  for (let i = 0; i < dial.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (dial[i].includes(input[j])) {
        resultTime += i + 3;
      }
    }
  }
  console.log(resultTime);
}

solution(dial);

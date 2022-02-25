"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

const N = Number(input[0][0]);

function solution(input) {
  for (let i = 1; i <= N; i++) {
    let resultString = "";
    for (let j = 0; j < input[i][1].length; j++) {
      // 문자열의 길이까지 반복
      let countedString = input[i][1];
      for (let k = 1; k <= input[i][0]; k++) {
        // 문자열 하나씩 반복
        resultString += countedString[j];
      }
    }
    console.log(resultString);
  }
}

solution(input);

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// input[0] 의 첫 번째 수가 N, 두 번째 수가 X
// 정수 N 개를 X와 비교해서 X보다 작은 수를 입력 받은 순서대로 공백으로 구분해 출력한다.

const inputNums = input[0].split(" ");
const n = +inputNums[0]; // 10
const x = +inputNums[1]; // 5

const inputCalcNums = input[1].split(" ").map((item) => +item);
// console.log(inputCalcNums);

solution(n, x, inputCalcNums);

function solution(n, x, testArr) {
  let result = "";
  for (let i = 0; i < n; i++) {
    if (testArr[i] < x) {
      result += testArr[i];
      result += " ";
    }
  }
  console.log(result);
}

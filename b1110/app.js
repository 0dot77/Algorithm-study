"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
// console.log(typeof input); // string 26

// 하나씩 분리하기
let first = +input[0];
let second = +input[1];

// 한 자리가 입력됐을 때
if (!second) {
  second = first;
  first = 0;
}

// 원래 수
const init = `${first}${second}`;
// console.log(typeof +init);

// TASK
// - 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
// 그 다음, 주어진 수의 가장 오른쪽 자리 수와 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다.

let sum = 0;
let N = 0;

function solution(a, b) {
  let firstNumber = a;
  let secondNumber = b;
  let result;
  while (result !== +init) {
    sum = firstNumber + secondNumber;
    firstNumber = secondNumber;
    if (sum > 9) {
      let sumParsing = String(sum);
      secondNumber = +sumParsing[1];
    } else {
      secondNumber = sum;
    }
    N++;
    result = +`${firstNumber}${secondNumber}`;
  }
  console.log(N);
}

solution(first, second);

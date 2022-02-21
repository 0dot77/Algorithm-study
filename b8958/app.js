"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 테스트 코드의 개수 구하기
const N = Number(input[0]);
input.shift();

solution(input);

function solution(arr) {
  for (let i = 0; i < N; i++) {
    let result = 0;
    let sum = 0;
    //OOXXOXXOOO
    // console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(`${i}: ${arr[i][j]}`);
      // O를 만나면 수를 더하고, X를 만나면 초기화
      if (arr[i][j] === "O") {
        sum++;
      } else {
        sum = 0;
      }
      result += sum;
    }
    console.log(result);
  }
}

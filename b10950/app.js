"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const testNum = +input[0];
input.shift(); // 5 빼주기
const testCodeArr = input;
let newTestCodeArr = [];
// 첫 줄에 테스트 케이스 개수 t 가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며,각 줄에 A와 B가 주어진다.
// 테스트 케이스마다 A+B를 출력한다.

for (let i = 0; i < testCodeArr.length; i++) {
  newTestCodeArr.push(
    testCodeArr[i]
      .toString()
      .split(" ")
      .map((item) => +item)
  );
}

// console.log(newTestCodeArr[0][0]);

solution(testNum, newTestCodeArr);

function solution(T, arr) {
  for (let i = 0; i < T; i++) {
    console.log(arr[i][0] + arr[i][1]);
  }
}

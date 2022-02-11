"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const testNum = +input[0];
input.shift(); // 5 빼주기
const testCodeArr = input;
let newTestCodeArr = [];

for (let i = 0; i < testCodeArr.length; i++) {
  newTestCodeArr.push(
    testCodeArr[i]
      .toString()
      .split(" ")
      .map((item) => +item)
  );
}
solution(testNum, newTestCodeArr);

function solution(T, arr) {
  let result = "";
  for (let i = 0; i < T; i++) {
    // console.log(arr[i][0] + arr[i][1]);
    result += arr[i][0] + arr[i][1] + "\n";
  }
  console.log(result);
}

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

// 별찍기 2
// 출력을 ''*4 + *
// 공백을 더해서 출력을 하려면 어떻게 해야할까?

// for-loop를 돌리기

function solution(a) {
  for (let i = 1; i <= a; i++) {
    let result = ""; // result를 여기서 초기화 해줘야, 따로따로 출력해낼 수 있었다

    for (let j = a; j > i; j--) {
      // a를 따라가면서 공백 찍어주기
      result += " ";
    }
    for (let w = 1; w <= i; w++) {
      // i를 따라가면서 별 찍어주기
      result += "*";
    }
    console.log(result);
  }
}

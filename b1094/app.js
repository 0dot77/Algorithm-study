"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 1. 지민이가 갖고 있는 막대의 길이를 모두 더한다. 처음에는 64cm 막대 하나만 갖고 있다. 이때, 합이 X보다 크다면, 아래와 같은 과정을 반복한다.
// 2. 이제 남아있는 모든 막대를 풀로 붙여서 Xcm를 만든다.
// let result;
// function solution(x) {
//   let stick = 64;
//   const X = Number(x);
//   let halfStick;
//   let minStick;
//   let num = 1;
//   // while statement 의 사용법

//   while (result >= X) {
//     // - 1. 가지고 있는 막대 중 길이가 가장 짧은 것을 절반으로 자른다.
//     halfStick = stick / 2;

//     // - 2. 만약, 위에서 자른 막대의 절반 중 하나를 버리고, 남아있는 막대의 길이의 합이 X보다 크거나 같다면, 위에서 자른 막대의 절반 중 하나를 버린다.
//     minStick = halfStick / 2;

//     let newStick = halfStick + minStick;

//     if (newStick >= X) {
//       stick = stick - minStick;
//     }
//     num++;
//   }
//   result = stick;
// }

// solution(input);

function solution(input) {
  let X = Number(input);
  let stick = 64;
  let count = 0;

  while (stick > 0) {
    if (stick > X) {
      stick /= 2;
    } else {
      X -= stick;
      count++;
    }
  }
  console.log(count);
}

solution(input);

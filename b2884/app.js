"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

// console.log(input);

// 두 수가 주어진다. 처음주어지는 수는 '시' 부분
// 다음에 주어지는 수는 '분'

solution(input[0], input[1]);

function solution(hour, minutes) {
  let resultHour = hour;
  let resultMinutes = minutes;
  let minuteCheck = false; // 분 단위 카운팅
  let hourCheck = false; // 시 단위 카운팅
  const getUpMinutes = 45;

  if (resultMinutes - getUpMinutes < 0) minuteCheck = true;
  else if (resultMinutes - getUpMinutes > 0) minuteCheck = false;

  if (minuteCheck) {
    hourCheck = true;
    resultMinutes = 60 + resultMinutes - getUpMinutes;
  } else {
    resultMinutes -= getUpMinutes;
  }

  if (hourCheck) {
    if (resultHour === 0) {
      resultHour = 23;
    } else {
      resultHour--;
    }
  }

  console.log(resultHour, resultMinutes);
}

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

//TASK
// 1. 같은 눈이 3개가 나오면 10,000원 + (같은 눈) X 1,000원의 상금을 받게 된다.
// 2. 같은 눈이 2개만 나오는 경우에는 1,000원 + (같은 눈) X 100원의 상금을 받게 된다.
// 3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈) X 100원을 받게 된다.

const dice1 = input[0];
const dice2 = input[1];
const dice3 = input[2];

solution(dice1, dice2, dice3);

function solution(d1, d2, d3) {
  // 수가 모두 같을 때
  if (d1 == d2 && d2 == d3 && d1 == d3) {
    console.log(`${10000 + d1 * 1000}`);

    // 수가 하나만 다를 때
  } else if (d1 == d2 || d2 == d3 || d1 == d3) {
    if (d1 == d2) {
      console.log(`${1000 + d1 * 100}`);
    } else if (d2 == d3) {
      console.log(`${1000 + d2 * 100}`);
    } else {
      console.log(`${1000 + d3 * 100}`);
    }
    // 수가 모두 다 다를 때
  } else if (d1 !== d2 && d2 !== d3) {
    if (d1 > d2 && d1 > d3) {
      console.log(`${d1 * 100}`);
    } else if (d2 > d1 && d2 > d3) {
      console.log(`${d2 * 100}`);
    } else if (d3 > d1 && d3 > d2) {
      console.log(`${d3 * 100}`);
    }
  }
}

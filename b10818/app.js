"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map((item) => +item);

solution(N, arr);

function solution(N, arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < N; i++) {
    //min
    if (min > arr[i]) {
      min = arr[i];
    }

    //max
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(`${min} ${max}`);
}

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

solution(input);

function solution(arr) {
  let res = [];
  arr.map((item) => {
    if (!res.includes(item % 42)) {
      res.push(item % 42);
    }
  });
  console.log(res.length);
}

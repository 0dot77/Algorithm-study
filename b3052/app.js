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

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((item) => Number(item));

// solution(input);

// function solution(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] % 42);
//   }

//   for (let i = 0; i < result.length; i++) {
//     let same = result[i];
//     for (let j = i; j < result.length; j++) {
//       if (same === result[j + 1]) result.splice(j + 1);
//     }
//   }
//   console.log(result.length);
// }

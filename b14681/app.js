"use strict";

/*
// Runtime error
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// .map((item) => (item = +item));

// console.log(input[0],input[1]);

solution(+input[0], +input[1]);

function solution(x, y) {
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x > 0 && y < 0) {
    console.log(4);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  }
}
*/

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

r1.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) console.log(1);
  else if (x > 0 && y < 0) console.log(4);
  else if (x < 0 && y > 0) console.log(2);
  else console.log(3);
});

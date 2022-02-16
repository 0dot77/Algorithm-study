"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let i = 0;
let result = "";

solution(input);

function solution(input) {
  while (i < input.length - 1) {
    let num = input[i].split(" ").map((x) => parseInt(x));
    result += `${num[0] + num[1]}\n`;
    i++;
  }
  console.log(result);
}

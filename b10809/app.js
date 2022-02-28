"use strict";

const fs = require("fs");
const { clearLine } = require("readline");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const text = input[0].split("");

function solution(arr) {
  const result = [];
  for (let i = 97; i <= 122; i++) {
    // a - z 까지의 ascii 코드
    result.push(arr.indexOf(String.fromCharCode(i)));
  }

  console.log(result.join(" "));
}

solution(text);

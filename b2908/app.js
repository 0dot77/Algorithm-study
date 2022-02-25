"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input[0], input[1]);

function solution(a1, a2) {
  let answer1 = a1;
  let answer2 = a2;
  answer1 = answer1.split("").reverse().join("");
  answer2 = answer2.split("").reverse().join("");

  answer1 > answer2
    ? console.log(Number(answer1))
    : console.log(Number(answer2));
}

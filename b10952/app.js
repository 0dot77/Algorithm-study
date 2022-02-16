"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const usageInput = function (arr) {
  const usage = [];
  for (let i = 0; i < input.length; i++) {
    let current = arr[i];
    usage.push(current.split(" "));
  }
  return usage;
};

const usage = usageInput(input);

solution(usage);

function solution(usage) {
  let i = 0;
  while (+usage[i][0] !== 0) {
    console.log(`${+usage[i][0] + +usage[i][1]}`);
    i++;
  }
}

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const N = Number(input);

// 육각형으로 값이 돌아간다.
// 1 = 1 -> 1
// 2 = 2,3,4,5,6,7 -> 6
// 3 = 8,9,10,11,12,13,14,15,16,17,18,19 -> 12
// 4 = 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37 -> 18

// 한 차수 앞에 있는 최고 값 - 전 차수 최고 값 = 차수 앞에 있는 값의 개수

// N에 대입되는 숫자가 반복해서 돌아가는 숫자들에 어디에 위치해 있느냐에 따라서 건너야 하는 육각형의 개수가 달라진다.
// 주어진 N으로 프로그래밍이 가능해야함

// 변수를 할당하는 데에 익숙해지는 게 중요함
let range = 1;
let block = 1;

function solution(N) {
  while (block < N) {
    block += 6 * range;
    range++;
  }

  console.log(range);
}

solution(N);

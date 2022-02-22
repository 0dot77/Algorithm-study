"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);
const N = Number(input[0]); //5
input.shift(); // 5 지워주기

// 배열에 접근해서, 지워서 다시 배열에 넣기

const newArr = [];
for (let i = 0; i < input.length; i++) {
  newArr[i] = input[i].split(" ").map((item) => Number(item));
}

solution(newArr);

function solution(arr) {
  for (let i = 0; i < N; i++) {
    let average = 0;
    let studentNum = 0;
    let studentGrade = 0;
    let averageUp = 0;
    let averageRatio = 0;

    //각각의 평균 구하기
    for (let j = 1; j < arr[i].length; j++) {
      studentNum = arr[i][0];
      studentGrade += arr[i][j];
    }
    average = studentGrade / studentNum;
    // console.log(average);

    for (let k = 1; k < arr[i].length; k++) {
      // 평균값으로 평균이 넘는 학생들의 비율 구하기
      if (arr[i][k] > average) {
        averageUp += 1;
      }
    }
    averageRatio = (averageUp / studentNum) * 100;
    console.log(`${averageRatio.toFixed(3)}%`);
  }
}

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);
const N = Number(input[0]); //5
console.log(input);

const newArr = [];
for (let i = 0; i < input.length; i++) {}

// console.log(typeof input);
// let newInput = input.split(" ");
// console.log(newInput);

// solution(input);

// function solution(arr) {
//   for (let i = 0; i < N; i++) {
//     let average = 0;
//     let averageRatio = 0;
//     for (let j = 1; j < arr.length; j++) {
//       const studentNum = arr[i][0];
//       const studentGrade = arr[i][j];

//       // 학생들의 평균값 저장
//       average += studentGrade / studentNum;
//       console.log(studentGrade);
//     }

//     for (let k = 1; k < arr.length; k++) {
//       // 평균값으로 평균이 넘는 학생들의 비율 구하기
//       let averageUp = 0;
//       if (arr[i][k] > average) {
//         averageUp += 1;
//       }
//       averageRatio += averageUp / arr.length - 1;
//     }
//     // console.log(averageRatio);
//   }
// }

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const grade = input[1].split(" ").map((item) => +item);

function newGrade(gradeArr) {
  let highestGrade = gradeArr[0];
  for (let i = 0; i < gradeArr.length; i++) {
    if (gradeArr[i] > highestGrade) {
      // 가장 높은 점수 획득하기
      highestGrade = gradeArr[i];
    }
  }

  return gradeArr.map((item) => (item / highestGrade) * 100);
}

const newGradeResult = newGrade(grade);

function solution(newGrade) {
  //새로운 평균 계산하기
  let average = 0;
  for (let i = 0; i < newGrade.length; i++) {
    average += newGrade[i];
  }
  console.log(average / n);
}

solution(newGradeResult);

"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// TASK
// 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는
// 시각을 계산하는 프로그램을 작성하시오.

// 첫째 줄에는 현재 시각이 나온다. 둘째 줄에는 요리 하는 데 필요한 시간이 분 단위로 출력된다.
// - 현재 시간을 분리해서 작성해줘야 한다.
// - 분리된 현재 시간에 조리 시간을 더헀을 때 시와 분이 적절하게 넘어갈 수 있도록 작성해야한다.

const currentTime = input[0].split(" ").map((item) => +item);
const cookingTime = +input[1];

solution(currentTime, cookingTime);

function solution(now, cook) {
  let hour = now[0];
  let minutes = now[1];
  const cookTime = cook;
  // 시간은 분이 60을 넘어갔을 때 추가된다.
  // 카운트를 추가해서, 현재 시간 + 조리 시간이 몇 시간을 추가할 수 있는지 설정해보는것?

  minutes += cookTime;

  if (minutes >= 60) {
    const hourCount = Math.trunc(minutes / 60);

    for (let i = 1; i <= hourCount; i++) {
      hour += 1;
      minutes -= 60;

      if (hour > 23) {
        hour = 0;
      }
    }
  }

  console.log(`${hour} ${minutes}`);
}

'use strict';

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// console.log(typeof +input[1][1]);

const inputValue = [];
for (let i = 0; i < input.length; i++) {
    inputValue[i] = +input[i];
}

// console.log(inputValue[0]); //472
// for(let i = 0; i < )


// 곱하는 수는 배열에서 그대로 출력하면 될 것 같고, 곱해지는 수를 string -> number로 바꿔주면서 곱해줘야한다.
// -> 구지 바꿔줄 필요가 없었다. 자바스크립트는 알아서 type coercion 을 해준다.
// console.log(typeof inputValue[0], inputValue[0], typeof input[1], input[1]); // number 472 string 385

solution(inputValue[0], input[1]);

function solution(a,b) {
    let sum = [];
    for(let i = b.length-1; i >= 0; i--) {
        console.log(a * b[i]);
        sum[i] = a * b[i];
    }
    console.log((sum[0] *100) + (sum[1] * 10) + sum[2]);
}

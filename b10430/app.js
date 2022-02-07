'use strict';

/*
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
*/

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
// console.log(input);

const splitString = input[0];
// console.log(splitString);
const arr = splitString.split(' '); // 공백을 기준으로 오브젝트 나누기

const inputNew = [];
for(let i = 0; i < arr.length; i++) {
    inputNew[i] = +arr[i];
}

solution(inputNew);

function solution(a) {
    let newValue = [];
    for(let i = 0; i < a.length; i++) {
        newValue[i] = a[i];
    }
    console.log((newValue[0]+newValue[1])%newValue[2]);
    console.log(((newValue[0]%newValue[2])+(newValue[1]%newValue[2]))%newValue[2]);
    console.log((newValue[0]*newValue[1])%newValue[2]);
    console.log(((newValue[0]%newValue[2]) * (newValue[1]%newValue[2]))%newValue[2]);
}

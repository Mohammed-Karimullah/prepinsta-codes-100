/*

Given an integer input the objective is to reverse the given integer number

*/

const revOfNum = (num) => {
    console.log(num.toString().split('').reverse().join(''));
}

revOfNum(123);
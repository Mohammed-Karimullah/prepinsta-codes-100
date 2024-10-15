/*

Given a number as an input the objective is to calculate the sum of the digits of the number. 
We first break down the number into digits and then add all the digits to the sum variable. 

*/


const sumOfDigitsOfNum = (num) => {
    let res =  num
    .toString()
    .split('')
    .map(Number)
    .reduce((sum,dg) => sum +dg , 0);

    console.log(res);
}

sumOfDigitsOfNum(7890);

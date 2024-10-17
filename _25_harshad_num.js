/*

Check Whether or Not a Number is a Harshad Number 

Harshad Number
A Number that is divisible by the sum of it's digits is known as a Harshad number.
Let's try and understand it even better using an example,

Example
Input : 21
Output : Yes ' It's a Harshad Number.
Explanation : The sum of the digits of 21 is 3 i.e 2 + 1. 
As the number 21 is divisible by 3, It's a Harshad Number.

*/

const harshadNum = (num) => {
    let sum = num.toString().split('').map(Number).reduce((s,d) => s+d,0);
    console.log(num % sum === 0 ? `${num} is a Harshad Number` : `${num} is not a Harshad Number`);
}

harshadNum(27);
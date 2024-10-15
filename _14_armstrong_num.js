/*

Given an integer input, the objective is to check whether or not the given input variable is an Armstrong number. 
In order to do so, we check whether the sum of the digits of each number to the power the length of the number is equal to the number itself or not. 
If the number is the same as the original, it’s an Armstrong number.

*/

const armstrongNum = (num) => {
    let len = num.toString().split('').length;
    let nsplit = num.toString().split('');
    let res = nsplit.map(Number)
                 .reduce((sum,digit) => sum + (digit ** len),0);
    console.log(res === num ? `${num} is an armstrong number` : `${num} is not an armstrong number`);
}

armstrongNum(9474);
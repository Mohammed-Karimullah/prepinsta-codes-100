/*

Given an integer input the objective is to check whether or not the given integer number as an input is palindrome or not.

*/

const palindromeNum = (num) => {
    let rev = num.toString().split('').reverse().join('');
    console.log(rev == num ? num + " is Palindrome number" : num + " is Not Palindrome number");
}

palindromeNum(1771);

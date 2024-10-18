/*

Octal To Decimal Conversion

Here, in this page we will discuss the program for octal to decimal conversion. 
Octal numbers are also called numbers with base 8 and hold values from 0 – 7. 
Whereas in Decimal numbers are with base 10 is Standard number system for denoting integers and non-integers. 

Algorithm :

- Initialize two variable decimal value and base 0, 1 respectively
- Iterate using while loop until num is greater then 0
- For each iteration het the unit place digit and multiply it with base and add it to decimal value
- divide num by 10 and multiply base with 8

*/

const octToDecNum = (num) => {
    let deci_val = 0;
    let base = 1;
    while(num > 0){
        let rem = num % 10;
        deci_val += rem * base;
        base *= 8;
        num = Math.floor(num / 10);
    }
    console.log(deci_val);
}

octToDecNum(564);
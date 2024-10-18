/*

Binary to Decimal Conversion

A Decimal number can be calculated by multiplying every digits of binary number with 2 to the power of the integers
starts from 0 to n-1 where n refers as the total number of digits present in a binary number and finally add all of them.

Algorithm :

- While num is greater then zero
- Store the unit place value of num to a variable (rem)
- Calculate rem with base and add it to answer
- Completely divide Num by 10 and multiply base with 2

*/

const binToDecNum = (num) => {
    let deci_val = 0;
    let base = 1;
    while(num > 0){
        let rem = num % 10;
        deci_val += rem * base;
        num = Math.floor(num / 10);
        base *= 2;
    }
    console.log(deci_val);
}

binToDecNum(1100);

/*

Decimal to binary conversion

Algorithm :

- Initialize a empty array as binaryArray
- while input number is greater then 0
- Append 1 if unit digit of num is odd else append 0
- Assign half the value of num to num
- Print all the values of  binaryArray

*/

const deci2Bin = (num) => {
    var binArr = [];
    while(num > 0){
       binArr.push(num%2);
       num = Math.floor(num / 2);
    }
    binArr.reverse();
    console.log(binArr.join(' '));
}

deci2Bin(15);
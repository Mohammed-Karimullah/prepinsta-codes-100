/*

LCM of two numbers 

find the LCM of Two Numbers which numbers are entered by the user. Basically the LCM of two numbers is the smallest number which can divide the both numbers equally.
This is also called Least Common Divisor or LCD.

Algorithm
For a input num1 and num2. This method uses two following observations –

- LCM of two numbers will at least be equal or greater than max(num1, num2)
- Largest possibility of LCM will be num1 * num2
When iterating in (i) We can linearly find an (i) that is divisible by both num1 & num2

*/

const getGcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


const getLcm = (a, b) => {
    return (a * b) / getGcd(a, b);
}


let num1 = 12;
let num2 = 14;

console.log(`LCM of ${num1} and ${num2} is ` + getLcm(num1, num2));

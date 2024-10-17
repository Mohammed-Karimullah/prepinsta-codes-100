/*

Check Whether or Not the Two Numbers are Friendly Pairs

Friendly Pair Numbers
The numbers whose ( sum of divisors ) / number ratio is same are known as Friendly Pair Numbers.
Let's try and understand it better using an example

Example
Input : 6 28
Output : Yes, they are a friendly pair
Explanation : The factors of 6 and 28 except the numbers themselves are 1, 2, 3 and 1, 2, 4, 7, 14 respectively.
Now the sum of factors of both the numbers are 6 and 28 respectively. 
When we divide the sums with the numbers we get 1 and 1 respectively. 
As the ratio of both the number match, they are considered as a friendly pair.

*/

const sumOfDivisors = (num) => {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

const isFriendlyPair = (num1, num2) => {
    const sum1 = sumOfDivisors(num1);
    const sum2 = sumOfDivisors(num2);

    const ratio1 = Math.round(sum1 / num1);
    const ratio2 = Math.round(sum2 / num2);

    return ratio1 === ratio2;
}

const num1 = 6;
const num2 = 28;

console.log(isFriendlyPair(num1, num2) ? `${num1} & ${num2} are Friendly Pair Numbers` : `${num1} & ${num2} are not Friendly Pair Numbers`);

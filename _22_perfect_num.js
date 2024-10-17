/*

Perfect Number
A Number that can be represented as the sum of all the factors of the number is known as a Perfect Number.
Let's Try and understand it better using an example

Example
Input : 28
Output : It's a Perfect Number
Explanation : Number = 28
28 = 1 + 2 + 14 + 4 + 7
as the number 28 has factors 1, 2, 4, 7 and 14.
We sum them up and check whether they match the original number. 
As we can see from the above example, number 28 is a Perfect Number. 
Make sure you don't include the number itself as a factor.

*/


const perfectNum = (num) => {
    let sum = 0;
    for(let i=1; i< num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    console.log(sum === num ? `${num} is a Perfect Number` : `${num} is not a Perfect Number`);
}

perfectNum(496);

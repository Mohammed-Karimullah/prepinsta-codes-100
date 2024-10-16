/*

Given an integer input the objective is to check whether or not 
the given integer input is a Strong Number based on whether it satisfies the condition or not.

Strong Number
A Number that is equal to the sum of the factorial of it's individual digits is known as Strong Number.
Let's Try and understand it better using an example

Example
Input : 145
Output : It's a Strong Number.
Explanation : Number = 145
145 = 1! + 4! + 5!
145 = 1 + 24 + 120

*/

const fact = (num) => {
        if(num === 0 || num ===1){
            return 1;
        }
        return num * fact(num-1);
}

const strongNum = (num) => {
    let res = num.toString().split('').map(Number).map(fact).reduce((acc,curr) => acc + curr,0);
    let output = res === num ?  `${num} is a Strong number` :  `${num} is not a Strong number`;
    console.log(output);
}

strongNum(1);
/*

Factorial of a Number
Here we will discuss how to find the Factorial of a Number 

Factorial of any number is the product of it and all the positive numbers below it for example factorial of 5 is 120

Factorial of n (n!) = 1 * 2 * 3 * 4....n
5! = 1 x 2 x 3 x 4 x 5 = 120 7! = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040

*/

const factOfNum = (num) => {
    let fact = 1;
    for(let i =1; i<=num; i++){
        fact *= i;
    }
    console.log(fact);
}

factOfNum(7);
/*

Given an integer as an input, the objective is to find the Fibonacci series until the number input as the Nth term. 
Therefore, we write a program to Find the Fibonacci Series up to Nth Term

What is Fibonacci Series
It’s a unique sequence where the next number is the sum of previous two numbers.

Where the first two terms are always 0 and 1

*/

const nthFiboNum = (num) => {
    let fn1 = 0;
    let fn2 = 1;
    let res;
    console.log(fn1 + "\n" + fn2);
    for(let i = 2; i < num; i++){
        res = fn1 + fn2;
        fn1 = fn2;
        fn2 = res;
        console.log(res);
    }
}

nthFiboNum(10);

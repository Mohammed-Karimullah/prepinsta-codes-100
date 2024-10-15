/*

Given an integer input for a number, the objective is to check whether or not the number is a prime. 
In order to do so we keep checking with all the numbers until square root of the number itself for factors of the number input. 
If found any, the number is not a prime

*/

const isPrime = (num) => {
    if (num <= 1) {
        console.log("Not Prime");
        return; 
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Not Prime"); 
            return; 
        }
    }
    console.log("Prime");
}

isPrime(17); 

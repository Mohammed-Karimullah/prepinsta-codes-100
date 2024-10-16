/*

Given an integer Number as input, the objective is to 
search for all the factors of the Given integer input.

*/

const factorOfNum = (num) => {
    let i = 1;
    while(i<=num){
        if(num % i === 0) {
           console.log(i);
        }
        i++;
    }
}

factorOfNum(100);
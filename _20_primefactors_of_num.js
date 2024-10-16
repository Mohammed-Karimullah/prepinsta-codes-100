/*

Given an integer input as the number, the objective is to 
Find all the Prime Factors of a given integer input number. 

*/

const primeFactOfNum = (num) => {
    let pf = [];
    for(let i=2; i<=num; i++){
        if(num % i === 0){
            pf.push(i);
            num /= i;
        }
    }
    console.log(pf);
}

primeFactOfNum(210);
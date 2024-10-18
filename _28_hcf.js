/*

HCF of Two Numbers
Here, in this section we will discuss how to find HCF of two numbers.
HCF means (Highest Common Factor) also known as GCD (Greatest Common Divisor).

x is called HCF of a & b two conditions :

x can completely divide both a & b leaving remainder 0
No, other number greater than x can completely divide both a & b

Algorithm
- Initialize HCF = 1
- Run a loop in the iteration of (i) between [1, min(num1, num2)]
- Note down the highest number that divides both num1 & num2
- If i satisfies (num1 % i == 0 and num2 % i == 0) then new value of HCF is i
- Print value of HCF

*/

const highestCommonFactor = (n1,n2) => {
    let HCF = 1;
    for(let i=1 ; i<Math.min(n1,n2); i++){
        if(n1 % i === 0 & n2 % i === 0){
            HCF = i
        }
    }
    console.log(`HCF of ${n1} & ${n2} is ${HCF}`);
}

highestCommonFactor(36,60);
/*

Given two integer variables for range, the objective is to check for all the prime number that lay in the given interval. 
The two input integers will act as the interval limits low and high.


*/

const isPrime = (num) => {
     if(num <= 1) {
       return "Not Prime";
     }else{
        for(let i = 2; i<num; i++){
            if(num%i === 0){
                return false;
            }
        }
     }
     return "Prime";
}

const isPrimeInGivenRng  = (x,y) =>{
    for(let i=x; i<=y ; i++){
        if(isPrime(i)){
            console.log( i + " Prime");
        }else{
            console.log(i + " Not prime");
        }
    }
}

isPrimeInGivenRng(2,20);
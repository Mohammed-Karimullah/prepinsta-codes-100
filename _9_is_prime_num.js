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

/*

Check Whether or Not the Number is an Abundant Number

Abundant Number
A Number that is smaller than the sum of all it's factors except the number itself is known as an Abundant number.
Let's try and understand the concept better using an example

Example
Input : Number = 12
Output : Yes, It's an Abundant Number
Explanation : The Factors for the number 12 are, 1, 2, 3, 4 and 6. 
We don't want to include the number itself.
Now the sum of the factors except the number itself is :
1 + 2 + 3 + 4 + 6 = 16
as the number 16>12 , the number itself.
It's an abundant number.

*/

const abundantNum = (num) => {
        let sum = 0;
        for(let i = 1; i<num ; i++){
            if(num % i === 0){
                sum += i;
            }
        }
        console.log(sum > num ? `${num} is an Abundant Number` : `${num} is not an Abundant Number`)
}

abundantNum(72)
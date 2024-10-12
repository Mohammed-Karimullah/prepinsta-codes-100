/* 
   Given an integer input the objective is to write a Javascript code to Check Whether a Number is Even or Odd. 
   To do so the main idea is to divide the number by 2 and check if it’s divisible or not. 
   It’s an Even number is it’s perfectly divisible by 2 or an Odd number otherwise. 
*/

const evenOrOdd = (num) => {
    console.log(num %2 === 0 ? num + " is Even number" : num + " is Odd number");
}

evenOrOdd(27);
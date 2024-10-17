/*

Check Whether or Not the Number is an Automorphic Number

Automorphic Number
A number whose square ends with the same number is known as an Automorphic number.
Let's try and understand it even better using an example ,

Example
Input : number = 5
Output : It's an Automorphic number.
Explanation : Number = 5
Square of number = 25
as the square of the number ends with the number itself, It's an Automorphic number.
Therefore, for a number to be Automorphic it number have a square that ends with the number itself.

*/

const automorphicNum = (num) => {
    let res = Math.pow(num,2).toString();
    let n = num.toString();
    let lastDgt = res.slice(-n.length);
    console.log(lastDgt === n ? `${num} is an Automorphic Number` : `${num} is not an Automorphic Number`);
}

automorphicNum(625);


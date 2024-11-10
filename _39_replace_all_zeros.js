/*

Question can come like Way 1
Write a code to change all zero's as one's (0s as 1s) in a given number? 
ex: 120014 needs to be printed as 121114


*/
const replaceZeros = (n) => {
    let res = n.toString().includes('0') ? n.toString().replaceAll('0','1') : `No zeros found`;
    console.log(res);
}

replaceZeros(120014);
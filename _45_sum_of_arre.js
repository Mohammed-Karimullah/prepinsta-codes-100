/*

Calculate the sum of elements in an array

*/

const sumOfArrE = (arr) => {
    let res = arr.reduce((acc,num) => acc + num,0);
    console.log(res);
}

sumOfArrE([1,2,3,4,5]);
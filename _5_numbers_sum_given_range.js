/*
Given two integer inputs as the range [low , high], the objective is to 
find the sum of all the numbers that lay in the given integer inputs as interval.
*/

const sumOfNumsInGivRng = (low,high) => {
    let sum = 0;
    sum = high*(high+1) / 2 - low*(low+1) / 2 + low;
    console.log(sum);
}

sumOfNumsInGivRng(2,5);


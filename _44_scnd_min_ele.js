/*

Find Second Smallest Element in an Array

*/

const scndMinE = (arr) => {
    arr.sort()
    let res = arr[1];
    console.log(res);
}

scndMinE([23,96,21,89,99]);
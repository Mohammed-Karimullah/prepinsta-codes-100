const sumOfDigitsOfNum = (num) => {
    let res =  num
    .toString()
    .split('')
    .map(Number)
    .reduce((sum,dg) => sum +dg , 0);

    console.log(res);
}

sumOfDigitsOfNum(7890);
/*
Find the Sum of The First N Natural Numbers.
*/
const nNaturalNumbers = (num) => {
    let sum = 0;
    sum = (num * (num +1)) / 2;
    console.log(sum);
}

nNaturalNumbers(8);
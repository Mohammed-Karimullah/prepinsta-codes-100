/*

Check for Perfect Square

*/

const perfectSqr = (num) => {
    let sqrt = Math.floor(Math.sqrt(num));
    console.log( sqrt * sqrt === num ? `${num} is a Perfect Square` : `${num} is not a Perfect Square`);
}

perfectSqr(81);
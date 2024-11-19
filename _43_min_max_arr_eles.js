/*

Find the Smallest and largest element in an array

*/

const minMaxArrE = (arr) => {
    let maxE = Math.max(...arr);
    let minE = Math.min(...arr);
    console.log(`Min ele in arr : ${minE}\nMax ele in arr : ${maxE}`); 
}

minMaxArrE([14,72,5,313,99]);
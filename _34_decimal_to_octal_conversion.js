/*

Decimal to octal conversion

Algorithm  :

- Take the decimal number from the user and store it in variable say decimal.
- Create an array say octal to store the octal representation of the given decimal number.
- Run a loop until decimal is not equal to 0 i.e., (decimal !=0)
- Inside the loop insert the remainder that achieved by dividing decimal from 8 i.e., (decimal%8)
- Coming out from the loop print the octal array in reverse order.

*/

const deci2Oct = (num) => {
    let deci = num;
    let octArr = [];
    while(deci > 0){
        let r = deci % 8;
        octArr.push(r);
        deci = Math.floor(deci / 8);
    }
    octArr.reverse();
    console.log(octArr.join(' '));
}

deci2Oct(303);
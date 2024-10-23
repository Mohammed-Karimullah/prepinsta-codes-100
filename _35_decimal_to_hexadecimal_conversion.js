/*

Decimal to Hexadecimal Conversion

The program works in two cases :

- If the current remainder left >= 10
  Must be replaced by (A – F)
- Else if current remainder < 10
  Must be replaced by (0- 9)

  */

  const deci2Hexdeci = (num) => {
    let res = num.toString(16);
    console.log(res);
}

deci2Hexdeci(303);

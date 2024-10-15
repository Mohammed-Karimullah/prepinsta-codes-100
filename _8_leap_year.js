/*

Given an integer input as the year, the objective is to Check if a Year is a Leap Year or Not

Conditions for a Leap Year
Here are the two conditions that any year must satisfy to be called a leap year
1. The year must be perfectly divisible by 400.
2. The number must be divisible by 4 but not by 100.

*/

const leapYr = (year) => {
    console.log(year % 400 === 0 ? `${year} : Leap year` : year % 4 === 0 && year % 100 !== 0 ? `${year} : Leap year` : `${year} : Not a leap year`);
}

leapYr(2024);

const leapYr = (year) => {
    console.log(year % 400 === 0 ? `${year} : Leap year` : year % 4 === 0 && year % 100 !== 0 ? `${year} : Leap year` : `${year} : Not a leap year`);
}

leapYr(2024);
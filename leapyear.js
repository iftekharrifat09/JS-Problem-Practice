function leapYear(year){
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0;
}

let year = 2000;
if(leapYear(year)){
    console.log(`${year} is a leap year.`);
}else{
    console.log(`${year} is not a leap year.`);
}
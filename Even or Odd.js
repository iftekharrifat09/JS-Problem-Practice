function evenOdd(num){
    if(num % 2 === 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}
console.log(`The Number is ${evenOdd(3)}`);
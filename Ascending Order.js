function orderArray(numbers){
    for(let i = 0; i < numbers.length-1; i++){
        for(let j=i+1; j < numbers.length; j++){
            if(numbers[i] > numbers[j]){
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
}
const numbers = [1, 5, 7, 12, 3, 18, 9, 20, 6, 11, 2, 8, 16, 14, 4, 19, 10, 15, 17, 13];

// console.log(numbers.sort((a,b) => a-b));
orderArray(numbers);
console.log(numbers);

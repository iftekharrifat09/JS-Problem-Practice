function removeDuplicates(numbers){
    var uniqueNumbers = [];
    numbers.forEach(function(num){
        if(uniqueNumbers.indexOf(num) === -1){
            uniqueNumbers.push(num);
        }
    });
    return uniqueNumbers;
}
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let result = removeDuplicates(numbers);

result.forEach((i)=>{
    console.log(i);
})
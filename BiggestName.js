function findingBiggestName(friends){
    let biggestName = friends[0];
    for(let i = 1; i < friends.length; i++){
        if(friends[i].length > biggestName.length){
            biggestName = friends[i];
        }
    }
    return biggestName;
}
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(`Biggest name is: ${findingBiggestName(friends)}`);
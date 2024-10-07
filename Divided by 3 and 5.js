function divisor(from,to){
    for(let i = from; i <= to; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i);
        }
    }
}

divisor(1, 50);
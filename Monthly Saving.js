function monthlySaving(payments=[], cost){
    if(!Array.isArray(payments) || typeof(cost) !== "number"){
        return 'Invalid Inputs';
    }
    let totalAmount=0;
    payments.forEach((amount)=>{
        if(amount >= 3000){
            amount -= (amount*(20/100));
        }
        totalAmount += amount;
    })
    let savingAmount = totalAmount - cost;
    if(savingAmount<0){
        return 'Earn More';
    }else{
        return savingAmount;
    }
}
let AllPayments = [1000, 2000, 2500]
console.log(monthlySaving(AllPayments, 5000));

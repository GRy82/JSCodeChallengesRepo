// A person wants to determine the most expensive computer keyboard and USB drive that
// can be purchased with a give budget. Given price lists for keyboards and USB drives
// and a budget, find the cost to buy them. If it is not possible to buy both items,
// return -1.

function getMoneySpent(keyboards, drives, budget){
    let mostExpensiveCombo = -1;
    for(let i = keyboards.length - 1; i >= 0; i--)
        for(let j = drives.length - 1; j >= 0; j--){
            let sum = keyboards[i] + drives[j];
            if (sum > mostExpensiveCombo && sum <= budget){
                mostExpensiveCombo = sum;
                if(sum === budget) return budget;
            }
        }
        
    return mostExpensiveCombo;
}

// The new "Avengers" movie has just been released! There are a lot of people at the cinema 
// box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. 
// An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person 
// in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and
//  sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he
// has at hand at that moment. Otherwise return NO.

// parameter is an array of integers, where the only acceptable integers are 25, 50, and 100.
function tickets(peopleInLine){
    let vasyasBills = []
    while(peopleInLine.length > 0){
        let nextPayment = peopleInLine.shift();
        if(nextPayment === 25)
            vasyasBills.unshift(25);
        else if(nextPayment === 50)
            if(vasyasBills[0] === 50)
                return 'NO';
            else {
                vasyasBills.splice(0, 1);
                vasyasBills.push(50);
            }
        else // nextPayment is 100
            if(vasyasBills[vasyasBills.length - 1] === 50 && vasyasBills[0] === 25){
                vasyasBills.pop();
                vasyasBills.shift();
            }
            else if(vasyasBills.length >= 3 && vasyasBills[2] === 25) 
                vasyasBills.splice(0, 3);
            else
                return 'NO';
    }
    return 'YES';
}

module.exports = tickets;
// This challenge is super dumb in my opinion.  So billItemPrices is an array of prices
// of items eaten while dining out(THey're sharing -- must be tappas). I guess Anna
// habitually abstains from eating one of the items, arbitrarily. Maybe she has a gluten
// allergy of some food sensitivity. Then there's the payment that her error-prone friend 
// calculates. The function basicale has to print out whether her friend was error-free
// for once, or if he isn't, how much he still owes Anna. God, this guy sounds like the 
// worst company.

function bonAppetit(billItemPrices, annasDeclinedItemIndex, annasPayment) {
    let correctPayment = (billItemPrices.reduce((t, c) => t + c) - billItemPrices[annasDeclinedItemIndex]) / 2;
    if(correctPayment === annasPayment) 
        console.log('Bon Appetit');
    else   
        console.log(annasPayment - correctPayment); 
}
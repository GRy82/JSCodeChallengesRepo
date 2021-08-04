// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged(i.e.: fine = 0.)
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos * number of days late.
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, fine = 500 Hackos * number of months late..
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10,000 Hackos.
// Charges are based only on the least precise measure of lateness.For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be 10000 Hackos.


function libraryFine(d1, m1, y1, d2, m2, y2){
    let returnDate = new Date(y1, m1 - 1, d1);
    let dueDate = new Date(y2, m2 - 1, d2);
    if (returnDate <= dueDate) return 0;

    if(y1 > y2) return 10000;
    if(m1 > m2) return 500 * (m1 - m2);
    if(d1 > d2) return 15 * (d1 - d2);
}

console.log(libraryFine(2021, 04, 14, 2021, 03, 12));
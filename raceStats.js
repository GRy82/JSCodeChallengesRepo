// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. 
// Each time you get a string of all race results of every team who has run. For example here is a string showing 
// the individual results of a team of 5 runners:

function stat(strg) {
    // array values are in seconds
    let timesArray = strg.split(', ').map(time => {
        let timeArray = time.split('|');
        let numericArray = timeArray.map(time => parseInt(time));
        return numericArray[0] * 3600 + numericArray[1] * 60 + numericArray[2];
    });

    let arrayLen = timesArray.length;
    let mean = Math.round(timesArray.reduce((total, current) => total + current) / arrayLen);
    let sorted = timesArray.sort((a ,b) => a - b); 
    let median = arrayLen % 2 === 0 ? Math.round((Math.round(sorted[arrayLen / 2]) + Math.round(sorted[arrayLen / 2 - 1])) / 2) :
        sorted[Math.floor(arrayLen / 2)];
    let range = sorted[arrayLen - 1] - sorted[0];
    return 'Range: ' + formatString(range) + ' Average: ' + formatString(mean)+ ' Median: ' + formatString(median);

}

function formatString(seconds){
    let min = Math.floor(seconds / 60);
    seconds -= min * 60;
    let hr = Math.floor(min / 60);
    min -= hr * 60;
    let strings = [hr, min, seconds].map(num => num < 10 ? 
        '0' + num.toString() : num.toString());
    return strings[0] + '|' + strings[1] + '|' + strings[2];
}

// let str = "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17";
// let str2 = "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41";
// let str3 = 3690;
// console.log(stat(str2));
console.log(formatString(90));
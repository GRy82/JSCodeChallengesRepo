// For a given season, a basketball player sets their minimum and maximum points at the 
// number fo points they scored in their first game. From the second game, onward, this
// player wants to keep track of how many times they are able to break their max and min
// points record over the course of the season.

function breakingRecords(scores) {
    let counts = [0, 0];
    let maxPoints = scores[0];
    let minPoints = scores[0];
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > maxPoints){
            maxPoints = scores[i];
            counts[0]++;
        }
        if(scores[i] < minPoints){
            minPoints = scores[i];
            counts[1]++;
        }
    }
    return counts;
}



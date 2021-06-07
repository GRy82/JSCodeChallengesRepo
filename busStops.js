busStops = [[10,0],[3,5],[5,8]];

// var number = function(busStops){
//     var occupants = 0;
//     busStops.forEach(element => {
//         occupants += element[0] - element[1];
//     });
//     return occupants;
// };

var number = busStops.reduce((occupants, element) => { return occupants + (element[0] - element[1])}, 0);

console.log(number);
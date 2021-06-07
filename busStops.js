busStops = [[10,0],[3,5],[5,8]];

var number = function(busStops){
    var occupants = 0;
    busStops.forEach(element => {
        occupants += element[0] - element[1];
    });
    return occupants;
};


console.log(number(busStops));
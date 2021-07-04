function countingValleys(steps, path) {
    let elevation = 0;
    let valleyCount = 0;
    let inValley = null;
    for(let i = 0; i < steps; i++){
        elevation = path[i] === 'U' ? elevation + 1 : elevation - 1;
        if(elevation === -1 && path[i] === 'D')
            inValley = true;
        if(elevation === 0 && inValley){
            inValley = false;
            valleyCount++;
        }
    }

    return valleyCount;
}
// The Utopian Tree goes through 2 cycles of growth every year.Each spring, it doubles in height.
// Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
//How tall will the tree be after  growth cycles?

function utopianTree(growthCycles){
    let height = 1;
    let isSpring = true;
    while(growthCycles > 0){
        if (isSpring) height *= 2;
        else height += 1;
        isSpring = !isSpring;
        growthCycles--;
    }
    return height;
}
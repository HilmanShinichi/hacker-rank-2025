function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const apple = []
    const orange = []

    const appleHome = []
    const orangeHome = []

    for(let i = 0; i < apples.length; i++ ){
        apple.push(a + apples[i])
    }

     for(let i = 0; i < oranges.length; i++ ){
        orange.push(b + oranges[i])
    }

    for(const app of apple){
        if(s <= app && app <= t){
            appleHome.push(app)
        }
    }

     for(const ora of orange ){
        if(s <= ora && ora <= t){
            orangeHome.push(ora)
        }
    }
    
    console.log(`${appleHome.length}\n${orangeHome.length}`); 

}
console.log(countApplesAndOranges2(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ]));

// cara simpel

function countApplesAndOranges2(s, t, a, b, apples, oranges) {
    const appleCount = apples
        .map(d => a + d)
        .filter(pos => pos >= s && pos <= t).length;

    const orangeCount = oranges
        .map(d => b + d)
        .filter(pos => pos >= s && pos <= t).length;

    console.log(`${appleCount}\n${orangeCount}`);
}

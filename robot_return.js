const robot = (moves) => {
    let vertical = 0;
    let horizontal = 0;

    for (let move of moves) {
        switch(move) {
            case 'U': vertical++; break;
            case 'D': vertical--; break;
            case 'R': horizontal++; break;
            case 'L': horizontal--; break;
        }
    }
    return horizontal === 0 && vertical === 0;
}

console.log(robot(['U', 'D', 'R', 'L']));
console.log(robot(['U', 'U', 'R', 'R', 'U']));
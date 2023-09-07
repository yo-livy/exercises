const game = (moves) => {
    const n = 3;
    const rows = Array(n).fill(0);
    const cols = Array(n).fill(0);
    let diagonal1 = 0;
    let diagonal2 = 0;
    let player = 1;

    for (let move of moves) {
        const [row, col] = move;
        rows[row] += player;
        cols[col] += player;
        
        if (row === col) {
            diagonal1 += player;
        }
        if (row + col === n - 1) {
            diagonal2 += player;
        }

        if (Math.abs(rows[row]) === n || Math.abs(cols[col]) === n || Math.abs(diagonal1) === n || Math.abs(diagonal2) === n) {
            return player === 1 ? 'A' : 'B';
        }
        player *= -1;
    }
    return moves.length === n * n ? 'Draw' : 'Pending';
}

console.log(game([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]));
console.log(game([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]));
console.log(game([[0,0],[2,0],[1,1],[2,1],[2,2]]));
const sumMatrix = (mat) => {
    const n = mat.length
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        if (i !== n - 1 - i) {
            sum += mat[i][n - 1 - i];
        }
    }
    return sum;
}

console.log(sumMatrix([[1,2,3],[4,5,6],[7,8,9]]));
console.log(sumMatrix([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]));
console.log(sumMatrix([[5]]));
const maxWealth = (accounts) => {
    return Math.max(...accounts.map((item) => item.reduce((a,b) => a + b, 0)));
}

console.log(maxWealth([[1,2,3],[3,2,1]]));
console.log((maxWealth([[1,5],[7,3],[3,5]])));
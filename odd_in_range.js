const countOdd = (low, high) => {
    return Math.ceil(high/2) - Math.floor(low/2);
}

console.log(countOdd(3,7));
console.log(countOdd(8,10));
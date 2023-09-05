const array = (nums) => {
    let negNums = 0;
    for (let num of nums) {
        if (num === 0) return 0;
        if (num < 0) {
            negNums++;
        }
    }
    return negNums % 2 == 0 ? 1 : -1;
}

console.log(array([1,1,34,4,3]));
console.log(array([0,2,3,5,4,3]));
console.log(array([-1,-2,-3,4,3,4,5]));
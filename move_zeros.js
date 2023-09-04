const moveZeros = (nums) => {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++;
        }
    }
}

nums = [1,2,3,0,0,4,5,0,6,7]
moveZeros(nums);
console.log(nums);

const arProgression = (nums) => {
    nums.sort((a,b) => a - b);
    const diff = nums[1] - nums[0];
    for (let i = 2; i < nums.length; i++){
        if(nums[i] - nums[i-1] !== diff) return false;
    }
    return true;
}

console.log(arProgression([1,5,3]));
console.log(arProgression([1,5,6,2,4,5,12]));
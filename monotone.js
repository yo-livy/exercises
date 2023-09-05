const monotone = (nums) => {
    let increasing = true;
    let decreasing = true;
    for (let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            decreasing = false;
        }else if(nums[i] < nums[i-1]){
            increasing = false;
        }
    }
    return increasing || decreasing;
}

console.log(monotone([1,2,4,6,7,9,12,15]));
console.log(monotone([12,10,8,5,3,1]));
console.log(monotone([1,1,1,1,1,1]));
console.log(monotone([1,3,42,3,5,6,7,4,5,6,7,34,5]));
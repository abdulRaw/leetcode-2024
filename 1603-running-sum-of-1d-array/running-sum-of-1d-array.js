/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum =0;

    nums.forEach((n,index)=>{
    sum+=nums[index];
    nums[index] = sum;
    })

    return nums;
};
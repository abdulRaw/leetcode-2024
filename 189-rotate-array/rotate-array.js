/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const p = k%nums.length

    const reversedArr = nums.toReversed()
    let f = 0
    for(let i =p-1 ;i>=0;i--){
        nums[f++] = reversedArr[i];
    }

    for(let j = nums.length-1; j>=p ;j--  ){
        nums[f++] = reversedArr[j];
    }





    return nums
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let p = (k%nums.length)
    const f = nums.slice(0,nums.length-p);
    const b =  nums.slice(nums.length-p);
    console.log(b.concat(f))
    return Object.assign(nums,b.concat(f))
};
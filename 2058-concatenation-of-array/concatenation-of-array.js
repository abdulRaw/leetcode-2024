/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    const newArr = new Array(2*nums.length).fill(0);

    return newArr.map((n,i)=> nums[i%nums.length])
};
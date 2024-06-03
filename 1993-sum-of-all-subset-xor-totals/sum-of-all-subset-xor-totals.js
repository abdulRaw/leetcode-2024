/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    
    let b = 0;

    nums.forEach((n)=>{
        b = b|n;
    })

    return b* Math.pow(2,nums.length-1)
   
};
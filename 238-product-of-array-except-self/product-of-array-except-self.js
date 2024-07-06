/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    const prefix = [1];

    const suffix = [1];

    for(let i =0;i<nums.length;i++){
        suffix.push(suffix[suffix.length-1]*nums[nums.length-1-i])
        prefix.push(prefix[prefix.length-1]*nums[i]);
    }

    const result = [];
    let j=0;
    for(let i = prefix.length-2;i>=0;i-- ){
        result.push(suffix[i]*prefix[j++])
    }
   
    return result
    
};
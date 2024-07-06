/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const fHash = {};
    const bHash={};
    let j = nums.length;
    let sumf=0;
    let sumR =0;
    // let  mid =(nums.length%2)===0 ? (nums.length/2)+1 : nums.length/2 ;
    for(i=0;i<nums.length;i++){
         sumR+=nums[i];
    }
     for(i=0;i<nums.length;i++){
         sumR-=nums[i];
        if(sumR===sumf) return i;
         sumf+=nums[i]
    }
    return -1;
};
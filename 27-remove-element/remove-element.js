/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j=0;
    //[3,2,2,3]
    //3==3
    for(let i = 0;i<nums.length;i++){

        if(nums[i]!==val){
            nums[j] = nums[i];
            j++;
        }
    }

    return j

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let fmax = Math.max(nums[0],nums[1]);
    let smax = Math.min(nums[0],nums[1]);


   

    for(let i=2;i<nums.length;i++){
        const n = nums[i];
        if(fmax<=n){
            smax = fmax;
            fmax = n;
        }else if(smax<n){
             smax = n;
        }
    }

    return (fmax-1)*(smax-1)
   
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let fmax = 0;
    let smax = -1;

    let fmin = 100001;
    let smin = 100002;

    for(let i=0;i<nums.length;i++){
        const n = nums[i];
        if(fmax<=n){
            smax = fmax;
            fmax = n;
        }else if(smax<n){
             smax = n;
        }
        if(fmin>=n){
            smin = fmin;
            fmin = n;
        }else if(smin>n){
             smin = n;
        }
    }

    return (fmax*smax)-(smin*fmin)
};
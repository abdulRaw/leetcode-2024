/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const preFixhash = {0:1};
    let preFixSum = 0;
    let freq =0;
    nums.forEach((n)=>{
        preFixSum+=n;
        if(preFixhash[preFixSum-goal]){
            freq+=preFixhash[preFixSum-goal]
        }

        if(preFixhash[preFixSum]){
           preFixhash[preFixSum]++;
        }else {
            preFixhash[preFixSum]=1;
        }
    })


 return freq;

}
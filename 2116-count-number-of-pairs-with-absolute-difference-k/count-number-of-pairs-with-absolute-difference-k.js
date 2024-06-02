/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    const hash = {};
    let count  =0;
    nums.forEach((n,i)=>{
        if(hash[n]){
            hash[n]++;
        }else {
             hash[n] =1
        }

    })

      nums.forEach((n,i)=>{
       
        const valCount = hash?.[n-k]??0;

        count+=valCount;

    })



    return count;
};
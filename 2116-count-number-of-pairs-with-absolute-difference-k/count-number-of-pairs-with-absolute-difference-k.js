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
            hash[n].push(i);
        }else {
             hash[n] = [i]
        }

    })

      nums.forEach((n,i)=>{
       
        const arrIndexs = hash[n-k]?.filter((_)=>_!==i) ?? [];

        count+=arrIndexs.length;

        

        
    })



    return count;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const hash = nums.reduce((acc,n)=>{
        if(acc[n]){
            acc[n]++;
        }else{
             acc[n]=1; 
        }
        return acc
    } ,{});

    let pairs = 0;

    for(let n of nums){
        const rem = k-n;
        if(hash[rem]&&hash[n]){
            if(rem==n &&  hash[n]>=2 ){
                hash[n] = hash[n] -2;
               pairs++; 
            }else if(rem!==n){
                 hash[n]--;
                 hash[rem]--;
                  pairs++; 
            }
        }
    }

    return pairs
    
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const hash = new Array(nums.length+1).fill(0);

    nums.forEach((n)=>{
        hash[n]++
    });

    const result = [];

    const [_,...rest] = Object.entries(hash);

    rest.forEach(([key,val])=>{
        if(val==0){
            result.push(Number(key));
        }else if(val>1){
            result.unshift(Number(key));
        }

    })

    





   return result
    
};
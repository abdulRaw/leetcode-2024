/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let result = [] ;
    nums.forEach((k,i)=>{
        if(hash[target-k]!==undefined){
           result =[hash[target-k],i];

           return;
        }
        hash[k]= i;
    });

return result






};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result =[];
    for(let i =0 ;i< nums.length;i++){
        const a = nums[i];
        let c =0;
        for(let j = 0;j<nums.length;j++){
          const b = nums[j];
          if(a>b){
            c++;
          }  
        }
      result.push(c);  
    }
    return result
}
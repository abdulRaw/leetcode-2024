/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let max_sum = nums[0];

    for(let i =1;i<nums.length;i++){
            sum+=nums[i]
            //console.log(sum,nums[i])
          
            if(sum>=max_sum){
                max_sum = sum;
            }
              if(sum < nums[i]){
                if(max_sum<nums[i]){
                    max_sum = nums[i]; 
                }
                sum =  nums[i]; 
            }
             
        }
       

    return max_sum;
};
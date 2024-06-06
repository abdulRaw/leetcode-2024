/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   
   let count = 0 ;
   let maxFeqVal = 0;

    nums.forEach((n)=>{
        if(count==0){
            maxFeqVal = n;
        }

        if(maxFeqVal===n){
            count++;
        }else{
            count--;
        }

    })


    return maxFeqVal;

} 
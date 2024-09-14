/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

const result = [];

for(let i =0;i<nums.length;i++)
{
    const a = nums[i];
    for(let j = i+1;j<nums.length;j++) 
    {
        const b = nums[j];

        if(a+b===target)
        {
         result.push(i,j)   ;
        }

    }

}


// console.log(result)

return result
}

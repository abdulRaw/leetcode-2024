/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

const result = [];
const hashMap = {
//    7: 0,
//    2: 1, 
//    -4:2,
//    -6:3


};
//  0 1 2  3
// [2,7,11,15]
//  I = 2 
//  j 
for(let i =0;i<nums.length;i++) // ON
{
    const a = nums[i];
    const rem = target- a;
    hashMap[rem] = i; 

}

for(let i =0;i<nums.length;i++) 
{
     const a = nums[i];
    if(hashMap[a]!==undefined &&  hashMap[a] !==i){
        result.push(i, hashMap[a])
        //delete hashMap[rem]
        break;
    }


}

 console.log(hashMap)

return result
}

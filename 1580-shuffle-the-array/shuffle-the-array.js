/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    let evnIdex =0;
    let oddIndex = n;
    const newArray = [];

    for(let i=0;i<2*n;i++){
        if(i%2===0){
             newArray.push(nums[evnIdex++]);
        }else{
            newArray.push(nums[oddIndex++]);
        }
    }
    
    return newArray;
    
}
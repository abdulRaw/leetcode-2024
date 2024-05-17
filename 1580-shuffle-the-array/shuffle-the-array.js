/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    let evnIdex =0;
    let oddIndex = n;
    const newArray = new Array(2*n).fill(-1);

    for(let i=0;i<newArray.length;i++){
        if(i%2===0){
             newArray[i]= nums[evnIdex++];
        }else{
            newArray[i]= nums[oddIndex++];
        }
    }
    
    return newArray;
    
}
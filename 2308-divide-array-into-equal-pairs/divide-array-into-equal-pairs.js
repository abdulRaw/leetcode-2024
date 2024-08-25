/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

    //create a freq hash 501 so values of nums array can be used as index
    const freqHash = new Array(501).fill(0);

    nums.forEach((num)=>{
        freqHash[num]++;
    })
    let resultFlag = true;
    freqHash.forEach((freq)=>{
        if(freq%2!==0){
           resultFlag = false; 
           return;
        }
    })

    return resultFlag;

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = nums.reduce((acc,n)=>{
        acc[n] = 1+( acc?.[n] ?? 0)
        return acc;
    },{});
   
    const entries  = Object.entries(hash);
     let maxFreq = entries[0][1] ;
    let maxFeqVal = entries[0][0];

    for(let i = 1;i<entries.length;i++ ){
        const [val,feq] = entries[i];

        if(feq>maxFreq){
            maxFreq= feq;
            maxFeqVal= val;
        }
    }
    return maxFeqVal;

} 
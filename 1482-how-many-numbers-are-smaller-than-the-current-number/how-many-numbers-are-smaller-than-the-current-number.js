/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  
    const hash = new Array(101).fill(0);
    nums.forEach((n)=>{
        hash[n]++;
    });
  
    let sm =0;
    const hashCmf ={};
    hash.forEach((f,n)=>{
    hashCmf[n] = sm; 
    sm+=f;
    })
    console.log(hash,hashCmf )

    const result = nums.map((n)=>hashCmf[n]  )


   

    

    return result;
}
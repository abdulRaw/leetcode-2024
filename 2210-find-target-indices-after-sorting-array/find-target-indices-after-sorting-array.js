/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const arrayHash = new Array(101).fill(0);
    nums.forEach((n)=>{
        arrayHash[n]++;
    })
    

const fIndexHash = {};

let index=0;
   arrayHash.forEach((f,n)=>{
    if(f>0){
        fIndexHash[n] = index;
        index+=f
    }
   })
   
   return new Array(arrayHash[target]).fill(0).map((n,i)=>fIndexHash[target]+ +i)

};
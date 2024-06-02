/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const evnArry = [];
    const oddArry = [];

    nums.forEach((n)=>{
        if(n%2==0){
            evnArry.push(n)
        }else{
              oddArry.push(n)
        }
    })

    return evnArry.concat(oddArry)
};
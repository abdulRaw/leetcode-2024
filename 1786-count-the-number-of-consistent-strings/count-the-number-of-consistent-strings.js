/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
     let result  =0;

     words.forEach((w)=>{
       const isAllowedString =  w.split("").every((c)=> allowed.includes(c))
       if(isAllowedString) result++;

     })

     return result
};
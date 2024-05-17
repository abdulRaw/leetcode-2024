/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    let height = 0 ;
    let prev = 0;

    gain.forEach((g)=>{
        prev = prev+g;
        height = Math.max(height,prev)
    })
   
    return height;
};
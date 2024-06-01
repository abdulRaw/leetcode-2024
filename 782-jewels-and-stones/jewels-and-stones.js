/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    return stones.split("").reduce((acc,stone)=>{
        if(jewels.includes(stone)){
            acc++
        }
        return acc;
    },0)
};
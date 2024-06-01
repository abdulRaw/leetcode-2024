/**
 * @param {number[]} nums
 * @return {number}
 */

 function gcdLg(a, b) {
    if ( b === 0 ) {
        return a;
    }
    return gcdLg(b, a % b);
}
var findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return gcdLg(max,min)
};
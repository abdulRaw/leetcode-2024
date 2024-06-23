/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    return s.trim().split(" ").filter(c=> !!c.trim().length).toReversed().join(" ")
};
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {

       let lastSeen = { 'a': -1, 'b': -1, 'c': -1 };

       let freq = 0;

       for(let i =0;i<s.length;i++){
            
           lastSeen[s[i]] = i;
           freq+= 1 + Math.min(...['a','b','c'].map((c)=>lastSeen[c]))
       }
    return freq
};
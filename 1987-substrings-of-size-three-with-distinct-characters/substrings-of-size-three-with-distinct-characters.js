/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {

let uniqueStringOfLen3 = 0;

for(let i = 1 ; i<s.length-1;i++)
{
    if(s[i-1]!==s[i] && s[i+1]!==s[i] && s[i-1]!==s[i+1])
    {
        uniqueStringOfLen3++;
    }

}
return uniqueStringOfLen3;
};
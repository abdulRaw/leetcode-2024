/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

    let lChar = 0;
    let rChar =0;
    let maxCount = 0;


    for(let i =0;i<s.length;i++)
    {
        const c = s[i];

        if(c==="L"){
            lChar++;
        }
        else
        {
            rChar++;
        }

        if(lChar === rChar)
        {
           maxCount++; 
        }

    }
    return maxCount;
};
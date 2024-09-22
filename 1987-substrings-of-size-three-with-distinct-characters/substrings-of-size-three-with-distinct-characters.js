/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {

//find good string 

const hash = {};
let  countOfUniqe3 =0;
const windowSizeToCheckUnique = 3;
for(let i =0;i<windowSizeToCheckUnique;i++)
{
   if(!hash[s[i]])
   {
     hash[s[i]] = 0;   
   }

   hash[s[i]]++;
}

if(Object.keys(hash).length==3){
    countOfUniqe3++;
}

for(let i=windowSizeToCheckUnique;i<s.length;i++)
{
    hash[s[i-windowSizeToCheckUnique]]--;

    if(hash[s[i-windowSizeToCheckUnique]]===0)
    {
        delete hash[s[i-windowSizeToCheckUnique]]
    }

    if(!hash[s[i]])
    {
        hash[s[i]] = 0;   
    }
    hash[s[i]]++;

    if(Object.keys(hash).length==3)
    {
        countOfUniqe3++;
    }
}

    return countOfUniqe3
};
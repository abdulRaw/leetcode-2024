/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {

//find good string 

const hash = {};
let  countOfUniqe3 =0;
for(let i =0;i<3;i++)
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

for(let i=3;i<s.length;i++)
{
    hash[s[i-3]]--;

    if(hash[s[i-3]]===0)
    {
        delete hash[s[i-3]]
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
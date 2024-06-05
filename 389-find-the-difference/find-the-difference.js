/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hash = {};
    s.split("").forEach((s)=>{
        hash[s] = 1+(hash?.[s] ?? 0)
    })

    t.split("").forEach((s)=>{
        hash[s] = (hash?.[s] ?? 0)-1
    });

    const [key] = Object.entries(hash).find(([k,v])=> v===-1)

    

    return key;

};
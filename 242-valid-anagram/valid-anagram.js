/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const hash = new Array(26).fill(0)
    s.split("").forEach((a)=>{
        hash[a.charCodeAt(0)-"a".charCodeAt(0)]++;
    })

    t.split("").forEach((a)=>{
        hash[a.charCodeAt(0)-"a".charCodeAt(0)]--;
    })
    return  hash.every((c)=>c===0)
};
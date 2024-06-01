/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const hash = {};
    s.split("").forEach((l,i)=>{
        hash[indices[i]]=l;
    })
    
    return new Array(indices.length).fill("").map((_,i)=>hash[i]).join("")
};
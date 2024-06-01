/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const set = new Array(26).fill("a").reduce((acc,a,i)=>{
        acc.add(String.fromCharCode(a.charCodeAt(a)+i));
        return acc;
    }, new Set());

    sentence.split("").forEach((l)=>{
        set.delete(l);
    })

    return set.size===0

};
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    
    const result = [first];

    let prev = first;

    for(let i=0;i<encoded.length;i++){
        prev = prev^encoded[i];
        result.push(prev);
    }

    return result;
};
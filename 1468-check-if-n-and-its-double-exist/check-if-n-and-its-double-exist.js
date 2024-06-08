/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const s = new Set();

    for(let i =0  ; i< arr.length;i++){
        const a = arr[i]
        if(s.has(2*a) || s.has(a/2)){
            return true;
        }
        s.add(a);
    }

    return false;


};
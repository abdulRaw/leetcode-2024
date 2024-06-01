/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const newStringLn = word1.length+word2.length;
    let w1P=0;
    let w2P = 0
    let res = "";
    let i = 0;
    while(w1P<word1.length && w2P<word2.length ){
        if(i%2===0){
            res+=word1[w1P++];
        }else{
            res+=word2[w2P++];
        }
        i++;
    }

    while(w1P<word1.length){
  res+=word1[w1P++];
    }

     while(w2P<word2.length){
        res+=word2[w2P++];
    }

    return res
};
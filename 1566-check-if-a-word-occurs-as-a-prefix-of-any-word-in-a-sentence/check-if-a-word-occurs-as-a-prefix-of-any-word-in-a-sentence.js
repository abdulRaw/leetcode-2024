/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(" ");
    const sChars = searchWord.split("")

    let  matchIndex = words.findIndex((w)=>sChars.every((sc,i)=>w[i]===sc));

    if(matchIndex>-1){
        matchIndex+=1
    }

    return matchIndex;

};
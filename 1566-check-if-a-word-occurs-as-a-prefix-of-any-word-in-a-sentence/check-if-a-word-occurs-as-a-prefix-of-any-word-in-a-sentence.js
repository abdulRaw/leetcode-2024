/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(" ");
    const sChars = searchWord.split("")

    let  matchIndex = words.findIndex((w)=>w.startsWith(searchWord));

    if(matchIndex>-1){
        matchIndex+=1
    }

    return matchIndex;

};
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.split("").findIndex((c)=>c==ch);
    if(index>-1){
        let newStr ="";
        for(let i=index;i>=0;i--){
            newStr+=word[i];
        }

        for(let i = index+1;i<word.length;i++){
             newStr+=word[i];
        }

        return newStr;
    }

    return word
};
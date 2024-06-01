/**
 * @param {string[]} words
 * @return {string}
 */

var isPalindromic = (word)=> {
    const charArr = word.split("");
    let f = 0;
    let b =charArr.length-1;
    let isPalindrome = true;
    while(f<b){
        let fc = charArr[f];
        let bc = charArr[b];
        if(fc!==bc){
            isPalindrome = false;
            break;
        }
        f++;
        b--;
    } 

    return isPalindrome;
} 
var firstPalindrome = function(words) {
    
    return words.find((w)=>isPalindromic(w)) ?? ""
};
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const lookup = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const hash = lookup.reduce((acc,c,i)=> {
    acc[String.fromCharCode("a".charCodeAt(0)+i)] = c;
    return acc;
    }
    ,{});

const s = new Set();
   words.forEach((w)=>{
        const en = w.split("").reduce((acc,l)=>{return acc+hash[l]},"");
        s.add(en);
   }) 

   return [...s].length


};
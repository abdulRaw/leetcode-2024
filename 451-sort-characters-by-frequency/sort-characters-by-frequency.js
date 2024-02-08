/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const letterfeqhash = {};
    const updateOrCreate=(chr)=>{
        if(!letterfeqhash[chr]){
            letterfeqhash[chr]={
                freq:1,
                word:chr,
            }
        }else{
           letterfeqhash[chr].freq++;
            let prev=letterfeqhash[chr].word;
            letterfeqhash[chr].word=prev+chr
        }
    }

    const letters = s.split("");
    for(let i=0;i<letters.length;i++){
        updateOrCreate(letters[i]);
    }

    const result = Object.values(letterfeqhash).sort((a,b)=>b.freq-a.freq).map(v=>v.word).join("");
    console.log(result)
    
    return result;
};
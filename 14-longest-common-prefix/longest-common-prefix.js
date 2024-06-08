/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const sortedStringbyLength = strs.sort((a,b)=>a.length-b.length); // sort in assending order
    const smallerLengthStr = sortedStringbyLength[0];
let min = smallerLengthStr.length;
 for(let j=1;j < sortedStringbyLength.length;j++){
    const word =  sortedStringbyLength[j ];
    let count = 0;
    for(let i = 0 ;i< smallerLengthStr.length;i++){
        if(word[i]===smallerLengthStr[i]){
           count++; 
        }else{
            break;
        }
    } 

    min = Math.min(count,min);   
}

return smallerLengthStr.substring(0,min)

};
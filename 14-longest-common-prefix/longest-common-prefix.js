/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
const sortedStringbyLength = []; // sort in assending order
//find the smallest string = 
let minLenStr = strs[0] ;
let minStrIndex = 0 

for(let i =1;i<strs.length;i++){
    const currentStr =strs[i];
    if(currentStr.length<minLenStr.length){
        minLenStr = currentStr;
        minStrIndex= i;
    } 
}
const smallerLengthStr = minLenStr;
let min = smallerLengthStr.length;

 for(let j=0;j < strs.length;j++){
    if(j!==minStrIndex){
    const word =  strs[j];
    let count = 0;
    for(let i = 0 ;i< min;i++){
        if(word[i]===smallerLengthStr[i]){
           count++; 
        }else{
            break;
        }
    } 

    min = Math.min(count,min);   
    }
}

return smallerLengthStr.substring(0,min)

};
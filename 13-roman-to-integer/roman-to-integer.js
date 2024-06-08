/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hash = {
        I:1, V:5, X:10, L:50, C:100, D:500,M:1000
    }

    const charArray = s.split("");
    let prevValue =  hash[charArray[0]]
    let sum =prevValue;
    for(let i =1;i<charArray.length;i++){
        let currentValue = hash[charArray[i]]
            if(currentValue<=prevValue){
               sum+=currentValue; 
            }else {
                sum+=(currentValue-2*prevValue); 
            }

            prevValue=currentValue
        }

    return sum
}
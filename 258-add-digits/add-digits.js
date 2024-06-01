/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10){
        return num;
    }

    return addDigits(num%10+(Math.floor(num/10)))
};
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x<0){
    return false;
   }

   let rev = 0
   let n = x;

   while(n>0){
    rev=(rev*10)+(n%10);
    n= Math.floor(n/10);
   }

   return rev==x;



};
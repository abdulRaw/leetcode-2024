/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
   // const stack = [];
    const cArray = s.split("");

    let i =0;
    cArray.forEach((c)=>{
        if(c==="*"){
           i--;
        }else{
            cArray[i++] = c;
        }
    });

    let res = "";
    let p =0
    while(p<i){
        res+=cArray[p++] 
    }


    
    return res
};
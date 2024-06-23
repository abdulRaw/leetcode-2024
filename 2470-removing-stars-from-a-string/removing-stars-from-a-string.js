/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];
    const cArray = s.split("");

    cArray.forEach((c)=>{
        if(c==="*"){
            stack.pop();
        }else{
             stack.push(c);
        }
    })
    
    return stack.join("")
};
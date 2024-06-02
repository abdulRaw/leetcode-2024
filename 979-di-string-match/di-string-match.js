/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    
    let min =0;
    let max = s.length;
    const result =[];

    s.split("").forEach((c)=>{
        if(c==="I"){
            result.push(min++)
        }else if(c==="D"){
             result.push(max--) 
        }
    })
    result.push(max)
    return result
};
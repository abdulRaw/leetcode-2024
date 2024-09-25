/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {

    let res = [];

    const items = expression.split("");

    for(let i =0;i<items.length;i++)
    {
        const oper = items[i];

        if(isNaN(oper))
        {
            let s1 =  diffWaysToCompute(expression.slice(0,i)); 
            let s2 =  diffWaysToCompute(expression.slice(i+1));  
             for (let a of s1) {
                for (let b of s2) {
                    if (oper === '+') res.push(a + b);
                    else if (oper === '-') res.push(a - b);
                    else if (oper === '*') res.push(a * b);
                }
            }   
        
        
        }
    }
    if (res.length === 0) res.push(parseInt(expression));
    return res;
};
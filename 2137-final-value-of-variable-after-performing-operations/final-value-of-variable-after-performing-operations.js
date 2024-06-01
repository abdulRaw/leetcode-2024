/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const increments = ["X++","++X"];
    const decrements = ["--X","X--"];
    let v = 0;
    const inCrementOrDecrement = (op)=>{
      
        if(increments.includes(op)){
            v=v+1
        }else if(decrements.includes(op)){
            v=v-1 
        }
    }


    operations.forEach((op)=> inCrementOrDecrement(op))
    return v
};
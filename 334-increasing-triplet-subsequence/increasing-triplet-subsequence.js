/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const stack = [nums.length-1];

    let min = Math.MAX

    for(let i = nums.length-2;i>=0;i--){
        const num = nums[i];
        if(num<min){
            return true;
        }
        const peekItem = (nums)=>  {
            console.log(nums[stack[stack.length-1]])
            return nums[stack[stack.length-1]]
        };

        while(stack.length && peekItem(nums)<=num){
            stack.pop(); 
        }
        stack.push(i)
         if(stack.length==2){
            min = num;
         }
        
    }

 return false
    }

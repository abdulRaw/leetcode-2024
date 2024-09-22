/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let windowSize = nums.reduce((sum,n)=> sum+ +n,0);
    const sizeOfInput = nums.length;

    let slide1s = 0;
    for(let i=0;i<windowSize;i++)
    {
        const n = nums[i];
        slide1s+=n;
    }
    let max1s = slide1s;
    for (let i = 0; i < nums.length; i++) {
        if (nums[(windowSize+i) % sizeOfInput] === 1) {
            slide1s++; // Adding New one
        }

        if (nums[i] === 1) {
            slide1s--; // Removing old one
        }

        max1s = Math.max(max1s, slide1s);
    }

    return windowSize - max1s;

 

};
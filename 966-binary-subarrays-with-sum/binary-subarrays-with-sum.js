/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let prefixSum = 0;
    let prefixSums = new Map();
    
    // Initialize the map with the prefix sum 0
    prefixSums.set(0, 1);
    
    for (let num of nums) {
        prefixSum += num;
        
        // Check if there's a subarray ending at the current index with the required sum
        if (prefixSums.has(prefixSum - goal)) {
            count += prefixSums.get(prefixSum - goal);
        }
        
        // Update the map with the current prefix sum
        if (prefixSums.has(prefixSum)) {
            prefixSums.set(prefixSum, prefixSums.get(prefixSum) + 1);
        } else {
            prefixSums.set(prefixSum, 1);
        }

       
    };
 return count;

}
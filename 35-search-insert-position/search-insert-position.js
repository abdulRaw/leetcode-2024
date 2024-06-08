/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 const bSearch = (arr,left,right,target)=>{
    if(left<=right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            return bSearch(arr,mid+1,right,target);
        }else {
             return bSearch(arr,left,mid-1,target);
        }   
    }
    return left;

   
 }
var searchInsert = function(nums, target) {
    return bSearch(nums,0,nums.length-1,target)
};
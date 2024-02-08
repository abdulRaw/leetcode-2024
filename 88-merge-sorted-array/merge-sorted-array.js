/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i=0;let j=0;
    while(i<m&&j<n){
        const numI = nums1[i];
        const numJ = nums2[j];
        if(numI>numJ){
            const t = nums2[j];
            nums2[j] = nums1[i];
             nums1[i] = t;
             nums2.sort((a,b)=>a-b);

            i++;
        }else if(numI<numJ){
            i++;
        }else {
            i++;
        }
    }

    while(j<n && i<m+n){
      nums1[i++]=nums2[j++];
    }


};
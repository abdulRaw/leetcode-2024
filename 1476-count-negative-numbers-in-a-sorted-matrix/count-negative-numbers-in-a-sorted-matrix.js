/**
 * @param {number[][]} grid
 * @return {number}
 */

 const binarySearch = (arr,l,h)=>{
  
  if(h>=l){
    let mid = Math.floor((l+h)/2);
    const cr = arr[mid];
   // console.log(cr,mid,l,h);
    if(cr<0){
        return binarySearch(arr,l, mid-1)
    }else {
        return binarySearch(arr,mid+1, h)
    }
  }

   return l;
 }
var countNegatives = function(grid) {
    let sum =0;
        const row = grid[0];
        const nIdxStart = binarySearch(row,0,row.length-1);
        prevIndex=row.length-1;
        if(row[nIdxStart]<0){
            sum+=row.length-nIdxStart;
            prevIndex=prevIndex;
        }
    for(let i =1;i<grid.length;i++){
        const row = grid[i];
        const nIdxStart = binarySearch(row,0,prevIndex);
       if(row[nIdxStart]<0){
            sum+=row.length-nIdxStart;
            prevIndex=prevIndex;
        }else {
              prevIndex=row.length-1;
        }
    }
    return sum;
};
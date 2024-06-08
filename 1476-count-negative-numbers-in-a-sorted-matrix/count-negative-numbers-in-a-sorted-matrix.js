/**
 * @param {number[][]} grid
 * @return {number}
 */

 const binarySearch = (arr,l,h)=>{
  
  if(h>=l){
    let mid = Math.floor((l+h)/2);
    const cr = arr[mid];
    console.log(cr,mid,l,h);
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
    for(let i =0;i<grid.length;i++){
        const row = grid[i];
        console.log(row)
        const nIdxStart = binarySearch(row,0,row.length-1);
       
        if(row[nIdxStart]<0)sum+=row.length-nIdxStart
    }
    return sum;
};
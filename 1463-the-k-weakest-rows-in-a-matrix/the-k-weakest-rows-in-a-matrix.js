function quickSortWithIndices(arr) {
  // Initialize indices array with the indices of the original array
  let indices = [...arr.keys()];

  function partition(arr, indices, low, high) {
    let pivot = arr[indices[high]];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[indices[j]] <= pivot) {
        i++;
        [indices[i], indices[j]] = [indices[j], indices[i]];  // swap indices
      }
    }

    [indices[i + 1], indices[high]] = [indices[high], indices[i + 1]];  // place pivot index
    return i + 1;
  }

  function quickSortRecursive(arr, indices, low, high) {
    if (low < high) {
      let pi = partition(arr, indices, low, high);
      quickSortRecursive(arr, indices, low, pi - 1);
      quickSortRecursive(arr, indices, pi + 1, high);
    }
  }

  quickSortRecursive(arr, indices, 0, arr.length - 1);
  return indices;
}



/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {

    const soldierCountPerRow = [];

    for(let row =0;row<mat.length;row++){
        //retrive the row
        const rowItem = mat[row];
        let countOfSolidersPerRow = 0;
        //init solider count per row
       // let countOfSolidersPerRow = soldierCountPerRow[row];
        for(let col = 0;col<rowItem.length;col++)
        {
            const soldier = rowItem[col];
            //if col val is 1 increment soliderCount
            if(soldier ){
                countOfSolidersPerRow++;
            }

        }
        //update solider count per row
        soldierCountPerRow.push([row,countOfSolidersPerRow])
    }
    const result = [];

    soldierCountPerRow.sort((a,b)=> {
        if (a[1] === b[1]) 
        {
          return a[0] - b[0]; // If counts are equal, sort by row index
        }
        return a[1] - b[1]; 
    });
   console.log(soldierCountPerRow)
   return soldierCountPerRow.slice(0,k).map((g)=>g[0])

    
};
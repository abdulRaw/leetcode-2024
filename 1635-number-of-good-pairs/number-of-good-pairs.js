function product_Range(a, b) {
  // Initialize the product with the value of 'a'.
  var prd = a,
      i = a;
 
  // Iterate from 'a' to 'b' (excluding 'b').
  while (i++ < b) {
    // Multiply the product by the current value of 'i'.
    prd *= i;
  }
  
  // Return the final product.
  return prd;
}

function combinations(n, r) {
  // Check if either 'n' equals 'r' or 'r' equals 0.
  if (n == r || r == 0) {
    // If true, return 1.
    return 1;
  } else {
    // If false, determine the larger of (n-r) and 'r' and calculate the combinations using the product_Range function.
    r = (r < n - r) ? n - r : r;
    return product_Range(r + 1, n) / product_Range(1, n - r);
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const hash = {};

    nums.forEach((n)=>{
        hash[n]= (hash?.[n]??0)+ + 1;
    })

console.log(hash)
    return Object.values(hash).reduce((acc,f)=>{
        if(f>=2){
            acc+=combinations(f,2)
        }
        return acc;
    },0)
};
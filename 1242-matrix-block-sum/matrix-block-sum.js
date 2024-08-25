// Given the row and column indices, return the prefix sum within the bounded indices
function getBlockSum(row, col, maxRow, maxCol, prefixSum) {
    // Clamp row and column indices to the valid range
    row = Math.max(Math.min(maxRow, row), 0);
    col = Math.max(Math.min(maxCol, col), 0);
  
    // Return the value at the bounded prefix sum location
    return prefixSum[row][col];
}

function buildPrefixSumMatrix(mat) {
    const rows = mat.length, cols = mat[0].length;
    const prefixSum = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

    // Compute the 2D prefix sum
    for (let i = 1; i <= rows; ++i) {
        for (let j = 1; j <= cols; ++j) {
            prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] 
                            - prefixSum[i - 1][j - 1] + mat[i - 1][j - 1];
        }
    }
  
    return prefixSum;
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    
 const rows = mat.length, cols = mat[0].length;
    const prefixSum = buildPrefixSumMatrix(mat);
    const answer = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Iterate through all the cells of the matrix
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            // Calculate block sum using prefixSum
            answer[i][j] = getBlockSum(i + k + 1, j + k + 1, rows, cols, prefixSum)
                         - getBlockSum(i + k + 1, j - k, rows, cols, prefixSum)
                         - getBlockSum(i - k, j + k + 1, rows, cols, prefixSum)
                         + getBlockSum(i - k, j - k, rows, cols, prefixSum);
        }
    }

    return answer;
}
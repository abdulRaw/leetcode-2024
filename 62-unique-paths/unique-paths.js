/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    const dp = new Array(m+1).fill("").map(()=> new Array(n+1).fill(0))
    const beakAndFindPaths = (m,n)=>{
        //check if already computed values is stored in dp matrix
        if(dp[m][n]){
            return dp[m][n];
        }

        // if any row or any cols is one we only have one path in such case 
        else if(m===1 || n===1){
           dp[m][n] = 1;

           return  dp[m][n]
        }
        // stored newly computed values in dp matrix
        dp[m][n]= beakAndFindPaths(m,n-1)+beakAndFindPaths(m-1,n)

        return dp[m][n]
    }

   // console.log(dp)

    //init paths finding algo
    beakAndFindPaths(m,n)
 console.log(dp)
    return dp[m][n]
};
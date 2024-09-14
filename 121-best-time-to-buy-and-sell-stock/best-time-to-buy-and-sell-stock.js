/**
 * @param {number[]} prices
 * @return {number}
 */

 //[7,1,5,3,6,4]
 //   i 
//       j          // 4
//          j          // -4
//          j          // -4
var maxProfit = function (prices) { //nlognn  //n 
    let maxProfit = 0 //  -6 
    let lastSoldPrice = 0;
    let lowestPriceOfthestock = prices[0];
  
    
    //[5,8,12,15,4,3,2,1]
    // b=4                   //answer = 4 
    //   s=8                  // 0
    //      s=12                 // 0
    //         s=15                // 0
    //           s=4                // 1
    for (let i = 1; i < prices.length; i++) {
        const stockPriceToday = prices[i];



        //should we buy today
        if(lowestPriceOfthestock >stockPriceToday ){
            lowestPriceOfthestock = stockPriceToday
        }
        maxProfit = Math.max(maxProfit,stockPriceToday - lowestPriceOfthestock );

        // //should we sell today 
        // if(stockPriceToday>lowestPriceOfthestock){
        //     lastSoldPrice = stockPriceToday - lowestPriceOfthestock ;
             
        // }
         
    }

    

    return maxProfit
};
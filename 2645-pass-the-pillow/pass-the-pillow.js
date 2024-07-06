/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {

    const totalRoundsCanBecompleted = Math.floor(time/(n-1));
    const lastRoundPeopleCompletedPassingPillow = time%(n-1);
    console.log(totalRoundsCanBecompleted,lastRoundPeopleCompletedPassingPillow)

   

    if(totalRoundsCanBecompleted%2==1){
        let currenlyAt = n;
       // console.log(lastRoundPeopleCompletedPassingPillow)
    
        return currenlyAt-lastRoundPeopleCompletedPassingPillow;
    }else {
         let currenlyAt = 1;
       
       

        return currenlyAt+lastRoundPeopleCompletedPassingPillow;
    }


    
};
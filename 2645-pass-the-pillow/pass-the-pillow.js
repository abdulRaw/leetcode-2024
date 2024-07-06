/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {

    const totalRoundsCanBecompleted = Math.floor(time/(n-1));
    const lastRoundPeopleCompletedPassingPillow = time%(n-1);
    //if last round was in reverse order 
   return  totalRoundsCanBecompleted%2==1 ? n-lastRoundPeopleCompletedPassingPillow : 1+lastRoundPeopleCompletedPassingPillow
};
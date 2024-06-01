/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    
    const sseats = seats.sort((a,b)=>a-b);
    const sstud = students.sort((a,b)=>a-b);
    let result = 0;

    sseats.forEach((s,i)=>{
        result=result+Math.abs(s-sstud[i])
    })

    return result;
};
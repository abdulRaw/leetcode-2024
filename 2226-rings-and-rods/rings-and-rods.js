/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rods = new Array(10).fill("").map(()=>new Array(3).fill(0));
    const addRingToRod = (ring,rodIndex)=>{
        if(ring==="R"){
            rods[rodIndex][0]++
        }else if(ring==="G"){
             rods[rodIndex][1]++
        }else if(ring==="B"){
             rods[rodIndex][2]++
        }
         //console.log(ring,rodIndex,rods)
    }
   const inputArray = rings.split("");
   for(let i=0;i<inputArray.length-1;i=i+2)
   {
    const ring = inputArray[i];
    const rod = inputArray[i+1];
    addRingToRod(ring,Number(rod))
   }

   //console.log(rods)

   return rods.reduce((acc,rings)=>{
    if(rings.every(rc=> rc>0)){
        acc++;
    }
    return acc;
   },0)


};
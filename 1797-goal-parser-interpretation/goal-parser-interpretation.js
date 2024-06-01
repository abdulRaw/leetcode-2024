/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const hash = {
        G:"G",
        "()":"o",
        "(al)":"al"
    }
    let i = 0;
    let ans ="";
    while(i<command.length-1){
        let c = command[i];
        if(c==="G"){
            ans+=hash["G"];
            i++;
        }else if(c==="("){
            const next = command[i+1];
            if(next==="a"){
                ans+=hash['(al)']; 
                i+=4
            }else if(next===")"){
                ans+=hash['()']; 
                i+=2
            }

        }

    }
    if(i<command.length){
        if(command[i++]==="G"){
            ans+=hash["G"];
        }
    }
    return ans
};
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const charsStr = s.split("");
    const charCountHash = charsStr.reduce((acc,c)=> {
        acc[c] = 1+ (acc?.[c] ?? 0)
        return acc;
    } ,{});
    let chars = Object.keys(charCountHash).sort((a,b)=>(a).charCodeAt(0)-(b).charCodeAt(0))
    let charsSet  = new Set(chars);
    let res = "";
    let actualLen = s.length;
    let itr = 0
    // console.log(charCountHash)
    while(charsSet.size>0){
      if(itr%2==0){
        for(let i = 0 ;i<chars.length;i++){
            let s = chars[i];
            if(charCountHash[s]>0)
                {
                    res+=s;
                    charCountHash[s]--;
                }else{
                   charsSet.delete(s) 
                }
        }
      }else {
            for(let i = chars.length-1; i>=0;i--){
                let s = chars[i];
                if(charCountHash[s]>0)
                {
                    res+=s;
                    charCountHash[s]--;
                }else{
                   charsSet.delete(s) 
                }
            }
        }
        actualLen-=chars.length;
        chars = [...charsSet]
        itr++;

    }


    return res;
};
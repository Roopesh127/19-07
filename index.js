function long(x){
    const new = x.split("");
    let newlong = " ";
    for(let i = 0;i<new.length;i++){
        let word = new[i];
        let clean = " ";
        for(let j=0;j<word.length;j++){
            const charact = word[j];
            if((charact>="a" && charact<="z") || (charact>="A" && charact<"Z")|| (charact>="0" && charact<"9")){
                clean+=charact;
            }
        }
        if(clean.length>long.length){
            long = clean;
        }
    }
}
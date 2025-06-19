/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */ 
var uncommonFromSentences = function(s1, s2) {
    let abc1=s1.split(" ")
    let abc2=s2.split(" ")
    let merge= abc1.concat(abc2)
    let count={}
    for(let num of merge){
        if(count[num]){
            count[num]+=1
        }else{
            count[num]=1
        }
    }
    let result=[]
    for(let num in count){
        if(count[num]===1){
            result.push(num)
        }
        
    }return result
    














    
};
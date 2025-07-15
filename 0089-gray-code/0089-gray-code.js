/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let nums=2**n
    let result=[]
    for(let i=0;i<nums;i++){
        result.push(i^(i >> 1))
    }
    
    return result
    
};
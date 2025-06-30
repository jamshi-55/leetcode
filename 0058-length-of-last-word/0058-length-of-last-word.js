/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let name=s.trim().split(" ")
    let number=name.pop()
    let result=number.length
    return result
    
};
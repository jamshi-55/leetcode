/**
 * @param {number} x
 * @return {boolean}
 */
 
var isPalindrome = function(x) {
    if (x<0){
        return false
    }
    let abc=x.toString();
    let cba= abc.split("").reverse().join("");

    return abc === cba
    

};

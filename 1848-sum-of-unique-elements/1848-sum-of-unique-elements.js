/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const arr = {};
    for (let num of nums) {
        arr[num] = (arr[num] || 0) + 1;
    }
    let sum = 0;
    for (let num in arr) {
        if (arr[num] === 1) {
            sum += Number(num);
        }
    }
      return sum  
    
};
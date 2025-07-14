/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let newarry=[]

    for(let num of nums){
        if(num !== val){
            newarry.push(num)
        }
    }
    for(let i=0;i<newarry.length;i++){
        nums[i] = newarry[i]
    }
    return newarry.length
};
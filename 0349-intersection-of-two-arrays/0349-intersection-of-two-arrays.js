/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let unique1=new Set(nums1)
 let unique2=new Set(nums2)
const result=[...unique1].filter(n=>unique2.has(n))
return result
    
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    newArr = []
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums2[j] == nums3[i]) {
                newArr.push(nums2[j])
            }
        }
    }
    return newArr
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    newArr = []
    seen = {}
    for (var i = 0; i < nums1.length; i++) {
        if (seen[nums1[i]]) {
            seen[nums1[i]]['ct1']++
        } else {
            seen[nums1[i]] = {'ct1': 1, 'ct2': 0}
        }
    }
    for (var i = 0; i < nums2.length; i++) {
        if (seen[nums2[i]]) {
            seen[nums2[i]]['ct2']++
        } else {
            seen[nums2[i]] = {'ct1': 0, 'ct2': 1}
        }
    }
    console.log(seen)
    for (key in seen) {
        for (var j = 0; j < Math.min(seen[key]['ct1'], seen[key]['ct2']); j++) {
            newArr.push(parseInt(key))
        }
    }
    return newArr
};
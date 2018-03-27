/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    newArr = []
    seen = {}
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums2[j] == nums1[i]) {
            	if (seen[nums2[j]]) {
	                seen[nums2[j]]['ct2']++
            	} else {
	                seen[nums2[j]] = {'ct1': 0, 'ct2': 1}
            	}
            }
        }
        if (seen[nums1[i]]) { seen[nums1[i]]['ct1']++ }
    }
	console.log(seen)
    for (key in seen) {
        for (var j = 0; j < Math.min(seen[key]['ct1'], seen[key]['ct2']); j++) {
            newArr.push(parseInt(key))
        }
    }
    return newArr
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let c = 0;
    let left = 0;
    let prod = 1;
    for (let right = 0; right < nums.length; right++) {
        let val = nums[right];
        prod *= val;
        while (prod >= k) {
            prod /= nums[left];
            left++;
        }
        c += right - left + 1;
    }
    return c;
};

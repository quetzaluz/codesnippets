/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let c = 0;
    for (let start = 0; start < nums.length; start++) {
        let prod = 1;
        for (let end = start; end < nums.length; end++) {
            prod *= nums[end];
            if (prod < k) {
                c++;
            }
        }
    }
    return c;
};

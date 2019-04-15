/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) { return 0; }
    const dp = new Array(nums.length);
    dp[0] = 1;
    let maxAns = 0;
    for (let i = 1; i <= nums.length; i++) {
        let maxVal = 0;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                maxVal = Math.max(maxVal, dp[j]);
            }
            dp[i] = maxVal + 1;
            maxAns = Math.max(maxAns, dp[i]);
        }
    }
    return maxAns;
};

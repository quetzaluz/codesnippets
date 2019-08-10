/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const seen = {};
    if (nums.length === 1) return nums;
    const majorityCount = Math.floor(nums.length / 3);
    nums.forEach((n) => {
        seen[n] = seen[n] ? seen[n] + 1 : 1; 
    });
    return Object.keys(seen).filter((k) => seen[k] > majorityCount);
};

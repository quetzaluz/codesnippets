/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    var bk = function(nums, curr, start) {
        ans.push(curr.slice(0))
        for (let i = start; i < nums.length; i++) {
            curr.push(nums[i]);
            bk(nums, curr, i + 1);
            curr.pop();
        }
    }
    bk(nums, [], 0);
    return ans;
};

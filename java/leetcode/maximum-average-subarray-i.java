class Solution {
    public double findMaxAverage(int[] nums, int k) {
        double thisSum = 0;
        for (int i = 0; i < k; i++) {
            thisSum += nums[i];
        }
        double maxSum = thisSum;
        for (int i = k; i < nums.length; i++) {
            thisSum += nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, thisSum);
        }
        return maxSum / k;
    }
}

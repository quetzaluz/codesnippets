class Solution {
    public int minSubArrayLen(int s, int[] nums) {
        int thisLen = 0;
        int thisSum = 0;
        int maxLen = nums.length + 1;
        int minLen = maxLen;
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            thisSum = nums[i];
            thisLen = 1;
            j = i + 1;
            while (j < nums.length) {
                if (thisSum >= s) {
                    break;
                }
                thisSum += nums[j];
                thisLen++;
                j++;
            }
            if (thisSum >= s && thisLen < minLen) {
                minLen = thisLen;
            }
        }
        if (minLen < maxLen) {
            return minLen;
        } else {
            return 0;
        }
    }
}

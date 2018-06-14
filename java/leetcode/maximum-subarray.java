class Solution {
    static int maxSubArray(int[] nums) {
    	int startIdx = 0;
    	int maxS = nums[startIdx];
    	int thisSum = maxS;
    	int i = 0;
    	while (startIdx < nums.length) {
    		thisSum = nums[startIdx];
    		if (thisSum > maxS) {
    			maxS = thisSum;
    		}
    		for (i = startIdx + 1; i < nums.length; i++) {
    			thisSum += nums[i];
    			if (thisSum > maxS) {
    				maxS = thisSum;
    			} else if (thisSum < 0) {
    				break;
    			}
    		}
    		startIdx++;
    	}
    	return maxS;
    }
}

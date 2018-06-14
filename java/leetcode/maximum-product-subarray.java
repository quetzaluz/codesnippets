class Solution {
    static int maxProduct(int[] nums) {
    	int startIdx = 0;
    	int maxP = nums[startIdx];
    	int thisProduct = maxP;
    	int i = 0;
    	while (startIdx < nums.length) {
    		thisProduct = nums[startIdx];
    		if (thisProduct > maxP) {
    			maxP = thisProduct;
    		}
    		for (i = startIdx + 1 ; i < nums.length; i++) {
    			thisProduct *= nums[i];
    			if (thisProduct > maxP) {
    				maxP = thisProduct;
    			}
    		}
    		startIdx++;
    	}
    	return maxP;
    }
}

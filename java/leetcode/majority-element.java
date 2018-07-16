class Solution {
    public int majorityElement(int[] nums) {
	    HashMap<Integer, Integer> seen = new HashMap();
	    if (nums.length == 1) { return nums[0]; }
	    int majorityCount = ~~(nums.length / 2);
	    for (int i = 0; i < nums.length; i++) {
	        if (seen.containsKey(nums[i])) {
	            seen.put(nums[i], seen.get(nums[i]) + 1);
	            if (seen.get(nums[i]) > majorityCount) { return nums[i]; }
	        } else { seen.put(nums[i], 1); }
	    }
        return 0;
    }
}

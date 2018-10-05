class Solution {
    public int findDuplicate(int[] nums) {
        HashMap<Integer, Boolean> seen = new HashMap();
        for (int i = 0; i < nums.length; i++) {
            if (seen.containsKey(nums[i])) { return nums[i]; }
            seen.put(nums[i], true);
        }
        return -1;
    }
}

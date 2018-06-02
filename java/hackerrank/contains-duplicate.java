class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashMap<Integer, Integer> seen = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (seen.getOrDefault(nums[i], 0) > 0) { return true; }
            seen.put(nums[i], 1);
        }
        return false;
    }
}
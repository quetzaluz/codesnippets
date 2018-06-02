class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashMap<Integer, Integer> seen = new HashMap<Integer, Integer>();
        int seenValue;
        for (int i = 0; i < nums.length; i++) {
            if (seen.containsKey(nums[i]) && i - seen.get(nums[i]) <= k) { return true; }
            seen.put(nums[i], i);
        }
        return false;
    }
}

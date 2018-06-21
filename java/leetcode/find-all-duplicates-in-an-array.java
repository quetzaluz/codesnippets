class Solution {
    public List<Integer> findDuplicates (int[] nums) {
        HashMap<Integer, Boolean> seen = new HashMap<Integer, Boolean>();
        List<Integer> d = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if (seen.containsKey(nums[i])) {
                d.add(nums[i]);
            } else {
                seen.put(nums[i], true);
            }
        }

        return d;
    }
}

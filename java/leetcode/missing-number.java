class Solution {
    public int missingNumber (int[] nums) {
        int[] seen = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            seen[nums[i]] = 1;
        }
        for (int i = 0; i < seen.length; i++) {
            if (seen[i] != 1) {
                return i;
            }
        }
        return -1;
    }
}

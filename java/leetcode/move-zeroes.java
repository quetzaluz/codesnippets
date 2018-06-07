class Solution {
    public int[] moveZeroes(int[] nums) {
        int lastIdx = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[lastIdx++] = nums[i];
            }
        }
        while (lastIdx < nums.length) {
            nums[lastIdx++] = 0;
        }
        return nums;
    }
}

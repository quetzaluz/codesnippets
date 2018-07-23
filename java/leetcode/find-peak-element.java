class Solution {
    public int findPeakElement(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if ((i - 1 < 0 || nums[i - 1] < nums[i]) && (i + 1 >= nums.length || nums[i] > nums[i + 1])) {
                return i;
            }
        }
        return 0;
    }
}

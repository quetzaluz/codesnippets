class Solution {
    public boolean checkPossibility (int[] nums) {
        int change = -1;
        int i = 0;
        while (i + 1 < nums.length) {
            if (nums[i] > nums[i + 1]) {
                if (change > -1) {
                    return false;
                } else {
                    change = i;
                }
            }
            i++;
        }

        return change == -1 || change == 0 || change == nums.length - 2 || nums[change - 1] <= nums[change + 1] || nums[change] <= nums[change + 2];
    }
}

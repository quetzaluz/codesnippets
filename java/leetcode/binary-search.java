class Solution {
    public int search(int[] nums, int target) {
        int l = 0;
        int r = nums.length;
        while (l < r) {
            int m = Math.round(l + (r - l) / 2);
            if (nums[m] > target) {
                r = m;
            } else if (nums[m] == target) {
                return m;
            } else {
                l = m + 1;
            }
        }
        return -1;
    }
}

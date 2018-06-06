class Solution {
    public int removeElement (int[] nums, int val) {
        int i = 0;
        int l = nums.length;
        while (i < l) {
            if (nums[i] == val) {
                nums[i--] = nums[l-- - 1];
            }
            i++;
        }
        return l;
    }
}

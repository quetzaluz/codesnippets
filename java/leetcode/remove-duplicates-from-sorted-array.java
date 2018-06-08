public class Solution {
    static int removeDuplicates(int[] nums) {
        int c = 0;
        int l = nums.length;
        int i = 0;
        for (int j = 1; j < l; j++) {
            if (nums[i] != nums[j]) {
                nums[++i] = nums[j];
                c = i;
            }
        }
        return c + 1;
    }
}

public class Solution {
    static int removeDuplicates(int[] nums) {
    	int l = nums.length;
    	int i = 0;
        int c = 0;
    	for (int j = 1; j < l; j++) {
            if (nums[i] != nums[j] || j + 1 == l || nums[i] != nums[j + 1]) {
                nums[++i] = nums[j];
                c = i;
            }
        }
    	return c + 1;
    }
}

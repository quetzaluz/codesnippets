class Solution {
    static int[] productExceptSelf(int[] nums) {
        int[] b = new int[nums.length];
        b[0] = 1;
        int a = 1;
        for (int i = 0; i <= nums.length - 2; i++) {
            a *= nums[i];
            b[i + 1] = a;
        }
        a = 1;
        for (int i = (nums.length - 1); i >= 1; i--) {
            a *= nums[i];
            b[i - 1] *= a;
        }
        return b;
    }
}

class Solution {
    public int findMaxLength(int[] nums) {
        int maxLength = 0;
        int thisMaxLength;
        int balance;
        int j;
        for (int i = 0; i < nums.length; i++) {
            thisMaxLength = 0;
            balance = 0;
            j = i;
            while (j < nums.length) {
                balance += nums[j] == 0 ? -1 : 1;
                thisMaxLength++;
                if (balance == 0 && thisMaxLength > maxLength) {
                    maxLength = thisMaxLength;
                }
                j++;
            }
            if (balance == 0) {
                if (thisMaxLength > maxLength) {
                    maxLength = thisMaxLength;
                }
            }
        }
        return maxLength;
    }
}

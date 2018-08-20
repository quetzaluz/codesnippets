class Solution {
    public int findLengthOfLCIS(int[] nums) {
        int longest = 0;
        if (nums.length == 0) { return longest; }
        int last = nums[0];
        longest++;
        int thisLen = longest;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > last) {
                thisLen++;
            } else {
                if (thisLen > longest) { longest = thisLen; }
                thisLen = 1;
            }
            last = nums[i];
        }
        if (thisLen > longest) { longest = thisLen; }
        return longest;
    }
}

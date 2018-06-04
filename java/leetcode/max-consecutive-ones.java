class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int consec = 0;
        int maxConsec = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                consec++;
            } else {
                if (consec > maxConsec) { maxConsec = consec; }
                consec = 0;
            }
        }
        if (consec > maxConsec) { maxConsec = consec; }
        return maxConsec;
    }
}

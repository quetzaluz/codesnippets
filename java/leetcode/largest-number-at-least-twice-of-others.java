class Solution {
    public int dominantIndex (int[] nums) {
        int[] largest = new int[2];
         // value, index
        largest[0] = -1 * Integer.MAX_VALUE;
        largest[1] = -1;
        int[] secondLargest = new int[2]; // value, index
        int twice = 0;
        for (int i = 0; i < nums.length; i++) {
            twice = nums[i] * 2;
            if (twice > largest[0]) {
                secondLargest[0] = largest[0];
                secondLargest[1] = largest[1];
                largest[0] = twice;
                largest[1] = i;
            } else if (twice > secondLargest[0]) {
                secondLargest[0] = twice;
                secondLargest[1] = i;
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] >= secondLargest[0] && i == largest[1]) {
                return i;
            }
        }
        return -1;
    }
}

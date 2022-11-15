class Solution {
    
    public int findMaxK(int[] nums) {
        int[] sortedNums = nums.clone();
        Arrays.sort(sortedNums);
        int i = 0;
        int j = sortedNums.length - 1;
        int maxValue = -1;
        while (i < j) {
            if (sortedNums[i] * -1 == sortedNums[j] && maxValue < sortedNums[j]) {
                maxValue = sortedNums[j];
            } else if (sortedNums[i] * -1 > sortedNums[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxValue;
    }
}

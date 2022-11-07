// TODO: Speed this up, too slow for all test cases.
class Solution {
    Map<Integer, List<Integer>> subArrays = new HashMap();
    int longestPossible = 0;
    
    private void findSubArrays(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            int j = i;
            List<Integer> thisSubArray = new ArrayList();
            int currentSum = 0;
            while (j < nums.length) {
                currentSum += nums[j];
                thisSubArray.add(nums[j]);
                if (currentSum == target) {
                    subArrays.put(i, thisSubArray);
                    break;
                }
                j++;
            }
        }
    }
    
    private void findMaxNonOverlapping(int idx, int countSoFar) {
        if (!subArrays.containsKey(idx)) {
            return;
        }
        int terminatingIndex = idx + subArrays.get(idx).size();
        if (countSoFar > longestPossible) {
            longestPossible = countSoFar;
        }
        for (Map.Entry<Integer, List<Integer>> entry : subArrays.entrySet()) {
            if (entry.getKey() < terminatingIndex) {
                continue;
            }
            findMaxNonOverlapping(entry.getKey(), countSoFar + 1);
        }
    }
    
    public int maxNonOverlapping(int[] nums, int target) {
        findSubArrays(nums, target);
        for (Map.Entry<Integer, List<Integer>> entry1 : subArrays.entrySet()) {
            findMaxNonOverlapping(entry1.getKey(), 1);
        }
        return longestPossible;
    }
}
class Solution {
    public int findMaxLength(int[] nums) {
        int maxLength = 0;
        int balance = 0;
        HashMap<Integer, Integer> results = new HashMap();
        results.put(0, 0);
        for (int i = 0; i < nums.length; i++) {
            balance += nums[i] == 0 ? -1 : 1;
            if (results.containsKey(balance)) {
                maxLength = Math.max(maxLength, i + 1 - results.get(balance));
            } else {
                results.put(balance, i + 1);
            }
        }
        return maxLength;
    }
}

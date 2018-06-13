class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int min = Integer.MAX_VALUE;
        int biggestDiff = 0;
        for (int i = 0; i < prices.length; i++) {
            if (min > prices[i]) { min = prices[i]; }
            if ((prices[i] - min) > biggestDiff) { biggestDiff = (prices[i] - min); }
        }
        return biggestDiff;
    }
 }
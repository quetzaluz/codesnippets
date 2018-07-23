class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int startIdx = 0;
        double maxA = k == 1 ? nums[startIdx] : -1 * Integer.MAX_VALUE;
        double thisSum = 0;
        int thisLength = 1;
        double thisA = 0;
        while (startIdx < nums.length) {
            thisSum = nums[startIdx];
            thisLength = 1;
            if (k == 1) {
                thisA = thisSum / thisLength;
                if (thisA > maxA) {
                    maxA = thisA;
                }
            } else {
                for (int i = startIdx + 1; i < nums.length; i++) {
                    thisSum += nums[i];
                    thisLength += 1;
                    if (thisLength == k) {
                        thisA = thisSum / thisLength;
                        if (thisA > maxA) {
                            maxA = thisA;
                        }
                    }
                }
            }
            startIdx++;
        }

        return maxA;
    }
}

class Solution {
    public int maxRotateFunction(int[] A) {
        if (A.length == 0) { return 0; }
        int rSum = 0;
        int allSum = 0;
        int n = 0;
        for (int i = 0; i < A.length; i++) {
            n = A[i];
            rSum += n * i;
            allSum += n;
        }
        int result = rSum;
        for (int i = A.length - 1; i >= 0; i--) {
            rSum = rSum + allSum - A.length * A[i];
            result = Math.max(rSum, result);
        }
        return result;
    }
}

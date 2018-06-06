class Solution {
    public boolean isPowerOfThree(int n) {
        double divisor = 3.0;
        double num = (double)n;
        while (num > divisor) {
            num /= divisor;
        }
        return num == 1 || num == divisor;
    }
}

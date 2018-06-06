class Solution {
    public boolean isPowerOfFour(int n) {
        double divisor = 4.0;
        double num = (double)n;
        while (num > divisor) {
            num /= divisor;
        }
        return num == 1 || num == divisor;
    }
}

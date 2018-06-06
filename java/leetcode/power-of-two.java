class Solution {
    public boolean isPowerOfTwo(int n) {
        double divisor = 2.0;
        double num = (double)n;
        while (num > divisor) {
            num /= divisor;
        }
        return num == 2 || num == 1;
    }
}

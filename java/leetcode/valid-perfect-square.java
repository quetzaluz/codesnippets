class Solution {
    public boolean isPerfectSquare(int num) {
        if (num <= 1) { return true; }
        int i = 1;
        while (i <= num / 2) {
            if (i * i == num) { return true; }
            i++;
        }
        return false;
    }
}

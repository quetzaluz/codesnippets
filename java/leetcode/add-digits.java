class Solution {
    public int addDigits(int num) {
        int result = num;
        int sum = num;
        while (num > 9) {
            int iterationNum = num;
            sum = 0;
            while (iterationNum > 0) {
                int r = iterationNum % 10;
                sum += r;
                iterationNum = (iterationNum - r) / 10;            
            }
            num = sum;
        }
        return sum;
    }
}


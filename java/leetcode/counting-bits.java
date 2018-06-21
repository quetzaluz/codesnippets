class Solution {
    public int[] countBits(int num) {
        int[] result = new int[num + 1];
        for (int i = 0; i <= num; i++) {
            result[i] = countOnes(i);
        }
        return result;
    }

    private int countOnes(int thisNum) {
        int countOne = 0;
        while(thisNum > 0) {
            if (thisNum % 2 != 0) { countOne++; }
            thisNum = Math.round(thisNum / 2);
        }

        return countOne;
    }
}

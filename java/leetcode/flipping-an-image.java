class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
        if (A.length == 1 && A[0].length == 1) {
            A[0][0] = A[0][0] == 0 ? 1 : 0;
            return A;
        }
        int halfR = A.length > 0 ? (int)Math.floor(A[0].length / 2)  : 0;
        int temp = 0;
        for (int c = 0; c < A.length; c++) {
            for (int r = 0; r < halfR; r++) {
                temp = A[c][r] == 1 ? 0 : 1;
                A[c][r] = A[c][A[c].length - 1 - r] == 1 ? 0 : 1;
                A[c][A[c].length - 1 - r] = temp;
            }
            if (A[0].length % 2 == 1) {
                A[c][halfR] = A[c][halfR] == 1 ? 0 : 1;
            }
        }
        return A;
    }
}

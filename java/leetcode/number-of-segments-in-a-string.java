class Solution {
    public int countSegments(String s) {
        boolean isSeg = false;
        int segCount = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ' ') {
                if (isSeg) { segCount++; }
                isSeg = false;
            } else {
                isSeg = true;
            }
        }
        segCount += isSeg ? 1 : 0;
        return segCount;
    }
}

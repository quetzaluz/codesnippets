class Solution {
    public boolean hasAlternatingBits(int n) {
        String b = Integer.toBinaryString(n);
        char t = 'x'; // arbitrary non-binary initialization
        for (int i = 0; i < b.length(); i++) {
            if (b.charAt(i) == t) { return false; }
            t = b.charAt(i);
        }
        return true;
    }
}

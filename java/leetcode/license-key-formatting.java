class Solution {
    public String licenseKeyFormatting(String S, int K) {
        String res = "";
        int ct = 0;
        for (int i = S.length() - 1; i >= 0; i--) {
            if (S.charAt(i) == '-') { continue; }
            if (ct == K) {
                res = "-" + res;
                ct = 0;
            }
            res = Character.toUpperCase(S.charAt(i)) + res;
            ct++;
        }
        return res;
    }
}
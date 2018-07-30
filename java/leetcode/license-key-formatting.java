class Solution {
    public String licenseKeyFormatting(String S, int K) {
        StringBuilder res = new StringBuilder();
        int ct = 0;
        for (int i = S.length() - 1; i >= 0; i--) {
            if (S.charAt(i) == '-') { continue; }
            if (ct == K) {
                res.append("-");
                ct = 0;
            }
            res.append(Character.toUpperCase(S.charAt(i)));
            ct++;
        }
        return res.reverse().toString();
    }
}
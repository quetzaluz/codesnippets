class Solution {
    public String reverseString (String s) {
        char[] st = s.toCharArray();
        char t;
        for (int i = 0; i < Math.round(st.length / 2); i++) {
            t = st[i];
            st[i] = st[st.length - i - 1];
            st[st.length - i - 1] = t;
        }
        return String.valueOf(st);
    }
}

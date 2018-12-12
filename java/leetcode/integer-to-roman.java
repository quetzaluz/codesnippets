class Solution {
    public static String[] o = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
    public static String[] t = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
    public static String[] h = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
    public static String[] th = {"", "M", "MM", "MMM"};
    public static String[][] u = {th, h, t, o};
    public String intToRoman(int num) {
        StringBuilder res = new StringBuilder();
        int mod = 1000;
        for (int i = 0; i < u.length; i++) {
            while (num >= mod) {
                int r = num % mod;
                int x = Math.round(num / mod);
                num = r;
                res.append(u[i][x]);
            }
            mod /= 10;
        }
        res.append(o[num]);
        return res.toString();
    }
}

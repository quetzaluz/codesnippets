class Solution {
    public String convertToBase7(int num) {
        if (num < 0) {
            return "-" + convertToBase7(num * -1);
        }
        if (num < 7) {
            return String.valueOf(num);
        }
        return convertToBase7(Math.round(num / 7)) + num % 7;
    }
}

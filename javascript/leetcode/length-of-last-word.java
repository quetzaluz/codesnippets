class Solution {
    static int lengthOfLastWord(String s) {
    	String st = s.trim();
    	return (st.substring(st.lastIndexOf(' ') + 1).length());
    }
}
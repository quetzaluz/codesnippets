class Solution {
    static int lengthOfLastWord(String s) {
    	String st = s.trim();
    	return (st.length() - (st.lastIndexOf(' ') + 1));
    }
}
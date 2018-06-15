class Solution {
    static boolean isIsomorphic(String s, String t) {
    	return encodeIsomorphic(s).equals(encodeIsomorphic(t));
    }

    static String encodeIsomorphic(String st) {
    	HashMap<Character, Character> sH = new HashMap<Character, Character>();
    	StringBuilder sR = new StringBuilder();
    	int sC = 0;
    	Character c = ' ';
    	for (int i = 0; i < st.length(); i++) {
    		c = st.charAt(i);
    		if (!sH.containsKey(c)) {
    			sH.put(c, (char)(sC + '0'));
				sC++;
    		}
			sR.append(sH.get(c));
    	}
    	return sR.toString();
    }
}

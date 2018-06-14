class Solution {
    static int longestPalindrome(String s) {
    	HashMap<Character, Integer> seen = new HashMap<Character, Integer>();
    	for (int i = 0; i < s.length(); i++) {
    		seen.put(s.charAt(i), seen.getOrDefault(s.charAt(i), 0) + 1);
    	}
    	int evens = 0;
    	int odds = 0;
    	Iterator keys = seen.entrySet().iterator();
    	while (keys.hasNext()) {
    		Map.Entry<String, Integer> pair = (Map.Entry)keys.next();
    		if (pair.getValue() % 2 == 0) {
    			evens += pair.getValue();
    		} else {
    			evens += pair.getValue() - 1;
    			odds = 1;
    		}
    	}
    	return evens + odds;
    }
}
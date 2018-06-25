class Solution {
    public boolean checkInclusion(String s1, String s2) {
        HashMap<Character, Integer> characterMap = buildCharMap(s1);
        for (int i = 0; i <= s2.length() - s1.length(); i++) {
            HashMap<Character, Integer> thisWordMap = new HashMap();
            boolean isMatch = true;
            for (int j = i; j < i + s1.length(); j++) {
                if (!characterMap.containsKey(s2.charAt(j))) {
                    isMatch = false;
                    break;
                }
                thisWordMap.put(s2.charAt(j), thisWordMap.getOrDefault(s2.charAt(j), 0) + 1);
                if (thisWordMap.get(s2.charAt(j)) > characterMap.get(s2.charAt(j))) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) {
                return true;
            }
        }
        return false;
    }
    
    private HashMap<Character, Integer> buildCharMap(String s) {
        HashMap<Character, Integer> result = new HashMap();
        for (int i = 0; i < s.length(); i++) {
            result.put(s.charAt(i), result.getOrDefault(s.charAt(i), 0) + 1);
        }
        return result;
    }
}

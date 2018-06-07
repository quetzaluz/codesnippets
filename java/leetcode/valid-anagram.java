class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) { return false; }
        HashMap<Character, Integer> hmapS = new HashMap<Character, Integer>();
        HashMap<Character, Integer> hmapT = new HashMap<Character, Integer>();
        int i = 0;
        while (i < s.length()) {
            if (hmapS.containsKey(s.charAt(i))) {
                int newValue = hmapS.get(s.charAt(i)) + 1;
                hmapS.put(s.charAt(i), newValue);
            } else {
                hmapS.put(s.charAt(i), 1);
            }
            i++;
        }
        i = 0;
        while (i < t.length()) {
            if (hmapT.containsKey(t.charAt(i))) {
                int newValue = hmapT.get(t.charAt(i)) + 1;
                hmapT.put(t.charAt(i), newValue);
            } else {
                hmapT.put(t.charAt(i), 1);
            }
            if (hmapT.getOrDefault(t.charAt(i), 0) > hmapS.getOrDefault(t.charAt(i), 0)) { return false; }
            i++;
        }
        return true;
    }
}

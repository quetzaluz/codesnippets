class Solution {
    public List<Integer> findAnagrams (String s, String p) {
        List<Integer> foundIndexes = new ArrayList();
        int pLen = p.length();
        for (int i = 0; i < s.length() - (pLen - 1); i++) {
            if (substringIsAnagram(s.substring(i, i + pLen), p)) {
                foundIndexes.add(i);
            }
        }
        return foundIndexes;
    }

    private boolean substringIsAnagram (String s, String p) {
        char[] pArr = p.toCharArray();
        for (int c = 0; c < s.length(); c++) {
            int letterIndex = findIndex(pArr, s.charAt(c));
            if (letterIndex > -1) {
                pArr[letterIndex] = ' ';
            } else {
                return false;
            }
        }
        return true;
    }

    private int findIndex(char[] pArr, char c) {
        for (int i = 0; i < pArr.length; i++) {
            if (pArr[i] == c) {
                return i;
            }
        }
        return -1;
    }
}

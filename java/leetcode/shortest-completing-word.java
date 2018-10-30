class Solution {
    public String shortestCompletingWord(String licensePlate, String[] words) {
        char[] lp = pullLetters(licensePlate);
        int minLen = 1000;
        String shortestWord = "";
        for (int i = 0; i < words.length; i++) {
            if (hasMatch(lp, words[i])) {
                if (words[i].length() < minLen) {
                    minLen = words[i].length();
                    shortestWord = words[i]; 
                }
            }
        }
        return shortestWord;
    }
    
    private char[] pullLetters(String licensePlate) {
        return licensePlate.toLowerCase().replaceAll("[\\d|\\s]?", "").toCharArray();
    }
    
    private boolean hasMatch(char[] lp, String word) {
        // checks if all letters contained in lp char array
        int total = lp.length;
        char[] lpc = lp.clone();
        for (int i = 0; i < word.length(); i++) {
            int charIndex = indexOf(lpc, word.charAt(i));
            if (charIndex != -1) {
                lpc[charIndex] = ' ';
                total--;
            }
            if (total == 0) { return true; }
        }
        return false;
    }
    
    private int indexOf(char[] lp, char search) {
        for (int i = 0; i < lp.length; i++) {
            if (lp[i] == search) { return i; }
        }
        
        return -1;
    }
}

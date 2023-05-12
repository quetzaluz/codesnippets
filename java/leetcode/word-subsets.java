class Solution {
    // TODO -- optimize further by serializing / sorting seen values.
    HashMap<String, HashSet<String>> seen = new HashMap(); // memoizes matching subsets per word
    public List<String> wordSubsets(String[] words1, String[] words2) {
        ArrayList<String> output = new ArrayList();
        for (String word1 : words1) {
            if (containsSubsets(word1, words2)) {
                output.add(word1);
            }
        }
        return output;
    }

    private boolean containsSubsets(String word1, String[] words2) {
        for (String word2 : words2) {
            if (!hasSeenSubset(word1, word2) && !containsSubset(word1, word2)) {
                return false;
            }
        }
        return true;
    }

    private boolean containsSubset(String word1, String word2) {
        int[] seenK = new int[word1.length()]; // inits array of 0's we will flip when letter has been seen.
        for (int i = 0; i < word2.length(); i++) {
            boolean bitFlipped = false;
            for (int k = 0; k < seenK.length; k++) {
                if (seenK[k] != 1 && word1.charAt(k) == word2.charAt(i)) {
                    seenK[k] = 1;
                    bitFlipped = true;
                    break;
                }
            }
            if (!bitFlipped) {
                return false;
            }
        }
        if (!seen.containsKey(word1)) {
            HashSet seenSubsets = new HashSet();
            seenSubsets.add(word2);
            seen.put(word1, seenSubsets);
        } else {
            HashSet seenSubsets = seen.get(word1);
            seenSubsets.add(word2);
            seen.put(word1, seenSubsets);
        }
        return true;
    }

    private boolean hasSeenSubset(String word1, String word2) {
        if (!seen.containsKey(word1)) {
            return false;
        }
        return seen.get(word1).contains(word2);
    }
}

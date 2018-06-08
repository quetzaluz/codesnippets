class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        HashMap<String, Integer> seen = new HashMap<String, Integer>();
        HashMap<String, Boolean> ban = new HashMap<String, Boolean>();
        String w;
        String wKey;
        for (int i = 0; i < banned.length; i++) {
            w = banned[i];
            wKey = w.toLowerCase();
            ban.put(wKey, true);
        }
        int seenMostCount = 0;
        String seenMostWord = "";
        String[] words = paragraph.split(" ");
        for (int j = 0; j < words.length; j++) {
            w = words[j];
            wKey = w.replaceAll("[\\?!,\\.;'\"]", "").toLowerCase();
            if (!ban.containsKey(wKey)) {
                if (seen.containsKey(wKey)) {
                    seen.put(wKey, seen.get(wKey) + 1);
                } else {
                    seen.put(wKey, 1);
                }
                if (seen.get(wKey) > seenMostCount) {
                    seenMostCount = seen.get(wKey);
                    seenMostWord = wKey;
                }
            }
        }
        return seenMostWord;
    }
}

class Solution {
    public int hIndex(int[] citations) {
        int ans = 0;
        Arrays.sort(citations);
        for (int i = citations.length - 1; i >= 0; i--) {
            if (citations.length - i - 1 < citations[i]) {
                ans++;
            }
        }
        return ans;
    }
}

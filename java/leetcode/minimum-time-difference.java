class Solution {
    public int findMinDifference(List<String> timePoints) {
        int[] minutes = new int[timePoints.size()];
        String[] s = new String[2]; // For split time strings
        for (int i = 0; i < timePoints.size(); i++) {
            s = timePoints.get(i).split(":");
            minutes[i] = (Integer.parseInt(s[0]) * 60) + Integer.parseInt(s[1]);
        }
        int fullCycle = 60 * 24;
        int minDist = fullCycle;
        int dist = 0;
        for (int k = 0; k < minutes.length; k++) {
            for (int j = 0; j < minutes.length; j++) {
                if (k != j) {
                    dist = Math.abs(minutes[k] - minutes[j]);
                    dist = Math.min(Math.abs(minutes[k] + fullCycle) - minutes[j], dist);
                    dist = Math.min(Math.abs(minutes[j] + fullCycle) - minutes[k], dist);
                    if (dist < minDist) { minDist = dist; }
                }
            }
        }
        return minDist;
    }
}

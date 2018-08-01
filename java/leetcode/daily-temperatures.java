class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] result = new int[temperatures.length];
        int ti = 0;
        int oTemp = 0;
        int c = 0;
        boolean greaterFound = false;
        for (int i = 0; i < temperatures.length; i++) {
            ti = i;
            oTemp = temperatures[i];
            greaterFound = false;
            c = 0;
            while (ti < temperatures.length) {
                if (temperatures[ti] > oTemp) {
                    greaterFound = true;
                    break;
                } else {
                    c++;
                }
                ti++;
            }
            result[i] = greaterFound ? c : 0;
        }
        return result;
    }
}

class Solution {
    public int largestRectangleArea(int[] heights) {
        int maxSize = 0;
        int i = 0;
        if (heights.length == 0) { return 0; }
        while (i < heights.length) {
            int thisHeight = heights[i];
            while (thisHeight >= 1) {
                int thisSize = thisHeight;
                for (int j = i + 1; j < heights.length; j++) {
                    if (thisHeight <= heights[j]) {
                        thisSize += thisHeight;
                    } else {
                        break;
                    }
                }

                if (thisSize > maxSize) { maxSize = thisSize; }
                if (i + 1 < heights.length) {
                    int nextHeight = heights[i + 1];
                    if (nextHeight < thisHeight) {
                        thisHeight = nextHeight;
                    } else {
                        thisHeight--;
                    }
                } else {
                    thisHeight = 0;
                }
            }
            i++;
        }
        return maxSize;
    }
}

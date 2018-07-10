class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int startN = 0;
        int endN = matrix.length - 1;
        int startM = 0;
        int endM = matrix.length > 0 ? matrix[0].length - 1 : -1;
        int[] result = new int[(endN + 1) * (endM + 1)];
        int idx = 0;
        while (startN <= endN && startM <= endM) {
            for (int i = startM; i <= endM; i++) {
                result[idx] = matrix[startN][i];
                idx++;
            }
            startN++;

            for (int i = startN; i <= endN; i++) {
                result[idx] = matrix[i][endM];
                idx++;
            }
            endM--;

            if (startN <= endN) {
                for (int i = endM; i >= startM; i--) {
                    result[idx] = matrix[endN][i];
                    idx++;
                }
                endN--;
            }

            if (startM <= endM) {
                for (int i = endN; i >= startN; i--) {
                    result[idx] = matrix[i][startM];
                    idx++;
                }
                startM++;    
            }

        }
        return Arrays.stream(result).boxed().collect(Collectors.toList());
    }
}

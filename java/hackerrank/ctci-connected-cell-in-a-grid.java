import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the maxRegion function below.
    static int maxRegion(int[][] grid) {
        int maxArea = 0;
        List<String> seen = new ArrayList<String>();
        int thisArea = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1 && !seen.contains((i +","+j))) {
                    List<int[]> stack = new ArrayList<int[]>();
                    stack.add(new int[]{i, j});
                    seen.add((i+","+j));
                    while(stack.size() > 0) {
                        int[] thisCoord = stack.remove(stack.size() - 1);
                        thisArea++;
                        if (grid[thisCoord[0]][thisCoord[1]+1] == 1 && !seen.contains((thisCoord[0]+","+(thisCoord[1]+1)))) {
                            stack.add(new int[]{thisCoord[0], thisCoord[1]+1});
                            seen.add(thisCoord[0]+","+(thisCoord[1]+1));
                        }
                        if (grid[thisCoord[0]][thisCoord[1]-1] == 1 && !seen.contains((thisCoord[0]+","+(thisCoord[1]-1)))) {
                            stack.add(new int[]{thisCoord[0], thisCoord[1]-1});
                            seen.add(thisCoord[0]+","+(thisCoord[1]-1));
                        }
                        if (grid[thisCoord[0]-1] != null && grid[thisCoord[0]-1][thisCoord[1]] == 1 && !seen.contains(((thisCoord[0]-1)+","+thisCoord[1]))) {
                            stack.add(new int[]{thisCoord[0]-1, thisCoord[1]});
                            seen.add((thisCoord[0]-1)+","+(thisCoord[1]));
                        }
                        if (grid[thisCoord[0]+1] != null && grid[thisCoord[0]+1][thisCoord[1]] == 1 && !seen.contains(((thisCoord[0]+1)+","+thisCoord[1]))) {
                            stack.add(new int[]{thisCoord[0]+1, thisCoord[1]});
                            seen.add((thisCoord[0]+1)+","+(thisCoord[1]));
                        }
                        if (grid[thisCoord[0]+1] != null && grid[thisCoord[0]+1][thisCoord[1]+1] == 1 && !seen.contains(((thisCoord[0]+1)+","+(thisCoord[1]+1)))) {
                            stack.add(new int[]{thisCoord[0]+1, thisCoord[1]+1});
                            seen.add((thisCoord[0]+1)+","+(thisCoord[1]+1));
                        }
                        if (grid[thisCoord[0]+1] != null && grid[thisCoord[0]+1][thisCoord[1]-1] == 1 && !seen.contains(((thisCoord[0]+1)+","+(thisCoord[1]-1)))) {
                            stack.add(new int[]{thisCoord[0]+1, thisCoord[1]-1});
                            seen.add((thisCoord[0]+1)+","+(thisCoord[1]-1));
                        }
                        if (grid[thisCoord[0]-1] != null && grid[thisCoord[0]-1][thisCoord[1]-1] == 1 && !seen.contains(((thisCoord[0]-1)+","+(thisCoord[1]-1)))) {
                            stack.add(new int[]{thisCoord[0]-1, thisCoord[1]-1});
                            seen.add((thisCoord[0]-1)+","+(thisCoord[1]-1));
                        }
                        if (grid[thisCoord[0]-1] != null && grid[thisCoord[0]-1][thisCoord[1]+1] == 1 && !seen.contains(((thisCoord[0]-1)+","+(thisCoord[1]+1)))) {
                            stack.add(new int[]{thisCoord[0]-1, thisCoord[1]+1});
                            seen.add((thisCoord[0]-1)+","+(thisCoord[1]+1));
                        }
                    }
                    if (thisArea > maxArea) {maxArea = thisArea;}
                }
            }
        }
        return maxArea;

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int m = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[][] grid = new int[n][m];

        for (int i = 0; i < n; i++) {
            String[] gridRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < m; j++) {
                int gridItem = Integer.parseInt(gridRowItems[j]);
                grid[i][j] = gridItem;
            }
        }

        int res = maxRegion(grid);

        bufferedWriter.write(String.valueOf(res));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}

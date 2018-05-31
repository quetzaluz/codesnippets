import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
  
    public static String getSmallestAndLargest(String s, int k) {
        String smallest = "";
        String largest = "";
        
        // Complete the function
        // 'smallest' must be the lexicographically smallest substring of length 'k'
        // 'largest' must be the lexicographically largest substring of length 'k'
        int i = 0;
        while (i < s.length() - (k - 1)) {
            String sub = s.substring(i, i + k);
            if (smallest == "") {
                smallest = sub;
            }
            if (smallest.compareTo(sub) > 0) {
                smallest = sub;
            }
            if (sub.compareTo(largest) > 0) {
                largest = sub;
            }
            i++;
        }
        return smallest + "\n" + largest;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();
        System.out.println(getSmallestAndLargest(s, k));
    }
}

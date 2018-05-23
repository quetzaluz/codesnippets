import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int lineCount = 1;
        while(sc.hasNext()) {
            System.out.printf("%d ", lineCount);
            System.out.println(sc.nextLine());
            lineCount++;
        }
    }
}

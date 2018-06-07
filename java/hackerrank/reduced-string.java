import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the super_reduced_string function below.
    static String super_reduced_string(String s) {
        int i = 1;
        while (i < s.length()) {
            if (s.charAt(i - 1) == s.charAt(i)) {
                s = s.substring(0, i - 1) + s.substring(i + 1);
                i = 0;
            }
            i++;
        }
        return s.length() == 0 ? "Empty String" : s;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scanner.nextLine();

        String result = super_reduced_string(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}

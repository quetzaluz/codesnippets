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
        StringBuilder res = new StringBuilder();
        char[] chars = s.toCharArray();
        int i = 0;
        while (i < chars.length) {
            if ((i + 1) < chars.length && chars[i] == chars[i + 1]) {
                i++;
            } else {
                System.out.println("append " + chars[i]);
                res.append(chars[i]);
            }
            i++;
        }
        return res.length() == 0 ? "Empty String" : res.toString();
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

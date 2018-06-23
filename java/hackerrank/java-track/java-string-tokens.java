import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        // Write your code here.
        // Character.isLetter
        int firstAlphabeticIndex = 0;
        int lastAlphabeticIndex = 0;
        List<String> tokens = new ArrayList<String>();
        for (int i = 0; i < s.length(); i++) {
            if (Character.isLetter(s.charAt(i))) {
                lastAlphabeticIndex++;
            } else {
                if (firstAlphabeticIndex < lastAlphabeticIndex) {
                    tokens.add(s.substring(firstAlphabeticIndex, lastAlphabeticIndex));
                }
                firstAlphabeticIndex = i + 1;
                lastAlphabeticIndex = i + 1;
            }
        }
        if (firstAlphabeticIndex < lastAlphabeticIndex) {
            tokens.add(s.substring(firstAlphabeticIndex, lastAlphabeticIndex));
        }
        System.out.println(tokens.size());
        for (String element : tokens) {
            System.out.println(element);
        }
        scan.close();
    }
}

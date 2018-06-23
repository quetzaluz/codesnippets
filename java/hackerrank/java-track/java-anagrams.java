import java.io.*;
import java.util.*;

public class Solution {
    static boolean isAnagram(String a, String b) {
        // Complete the function
        if (a.length() != b.length()) { return false; }
        HashMap<Character, Integer> hmapA = new HashMap<Character, Integer>();
        HashMap<Character, Integer> hmapB = new HashMap<Character, Integer>();
        int i = 0;
        int newValue = 0;
        char lowerCaseChar;
        while (i < a.length()) {
            lowerCaseChar = Character.toLowerCase(a.charAt(i));
            newValue = hmapA.getOrDefault(lowerCaseChar, 0) + 1;
            hmapA.put(lowerCaseChar, newValue);
            i++;
        }
        i = 0;
        while (i < b.length()) {
            lowerCaseChar = Character.toLowerCase(b.charAt(i));
            newValue = hmapB.getOrDefault(lowerCaseChar, 0) + 1;
            hmapB.put(lowerCaseChar, newValue);
            if (!hmapA.containsKey(lowerCaseChar) || hmapB.get(lowerCaseChar) > hmapA.get(lowerCaseChar)) {
                return false;
            }
            i++;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}
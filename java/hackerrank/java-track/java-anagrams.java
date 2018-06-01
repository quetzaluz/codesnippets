import java.io.*;
import java.util.*;

public class Solution {
    static boolean isAnagram(String a, String b) {
        // Complete the function
		if (a.length() != b.length()) { return false; }
        HashMap<Character, Integer> hmapA = new HashMap<Character, Integer>();
        HashMap<Character, Integer> hmapB = new HashMap<Character, Integer>();
        int i = 0;
		while (i < a.length()) {
            if (hmapA.get(a.charAt(i)) > 0) {
                int newValue = hmapA.get(a.charAt(i)) + 1;
                hmapA.put(a.charAt(i), newValue);
            } else {
                hmapA.put(a.charAt(i), 1);
            }
            i++;
		}
        i = 0;
		while (i < b.length()) {
            if (hmapB.get(b.charAt(i)) > 0) {
                int newValue = hmapB.get(b.charAt(i)) + 1;
                hmapB.put(b.charAt(i), newValue);
            } else {
                hmapA.put(a.charAt(i), 1);
            }
			if (hmapB.getOrDefault(a.charAt(i), 0) > hmapA.getOrDefault(b.charAt(i), 0) > 0) { return false; }
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
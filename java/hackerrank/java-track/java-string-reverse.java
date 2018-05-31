/* file/question was called java string reverse, but more palindrome detection problem */
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        /* Enter your code here. Print output to STDOUT. */
        int i = 0;
        int strLen = A.length();
        while (i < (strLen / 2) - 1) {
            if (A.charAt(i) != A.charAt(strLen - i - 1)) {
                System.out.println("No");
                return;
            }
            i++;
        }
        System.out.println("Yes");
    }
}

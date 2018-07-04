import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {



    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        BigInteger num = scanner.nextBigInteger();
        System.out.println(num.isProbablePrime(10) ? "prime" : "not prime");
        scanner.close();
    }
}

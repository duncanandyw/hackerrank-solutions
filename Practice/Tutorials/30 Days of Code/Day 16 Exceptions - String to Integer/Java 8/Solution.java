import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String S = in.next();
        in.close();

        int n = 0;
        try {
            n = Integer.parseInt(S);
            // cast back to string to print?
            System.out.println(n);
        } catch (NumberFormatException e) {
            System.out.println("Bad String");
        }
        
    }
}

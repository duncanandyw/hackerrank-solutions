import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt(); scan.nextLine();

        for (int i = 0; i < n; i++) {
            String s = scan.nextLine();
            char c[] = new char[s.length()];
            char even[] = new char[s.length()];
            char odd[] = new char[s.length()];
            // wrong answer
            c = s.toCharArray();
            // wrong answer
//            s.getChars(0,s.length(),c,0);

            for (int j = 0; j < c.length; j++) {
                if (j % 2 == 0) {
                    even[j] = c[j];
                } else {
                    odd[j] = c[j];
                }
            }
            // wrong answer
//            System.out.println(even.length);
//            System.out.println("Hce akr");
//            System.out.println("Rn ak");
//            String t = new String(even);
//            String u = new String(odd);

//            System.out.println(t + " " + u);

            // wrong answer
//            System.out.print(even);
//            System.out.print(" ");
//            System.out.print(odd);
//            System.out.println();

            // wrong answer
            for (int k = 0; k < even.length; k++) {
                if (k % 2 == 0)
                   System.out.print(even[k]);
            }
            System.out.print(" ");
            for (int l = 0; l < odd.length; l++) {
                if (l % 2 != 0)
                    System.out.print(odd[l]);
            }
            System.out.println();
        }

        scan.close();
    }
}

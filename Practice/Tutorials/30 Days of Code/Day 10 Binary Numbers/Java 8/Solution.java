import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        int input = scan.nextInt();
        scan.close();

        String s = Integer.toBinaryString(input);
        int j = 0;
        int max = 0;

        for (int i = 0; i < s.length(); i++) {
            if (Character.getNumericValue(s.charAt(i)) == 1) {
                j++;
                if (max < j)
                    max = j;
            } else {
                j = 0;
            }
                
        }
        System.out.println(max);

    }
}

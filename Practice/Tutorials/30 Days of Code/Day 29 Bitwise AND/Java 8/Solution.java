import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scanner = new Scanner(System.in);
        int m = scanner.nextInt();
        for (int i = 0; i < m; ++i) {
            int n = scanner.nextInt();
            int k = scanner.nextInt();
            int max = 0;
            for (int j = 1; j < n; ++j) {
                for (int l = (j + 1); l <= n; ++l) {
//                    System.out.println(j + " " + l);
//                    System.out.println((j & l) + " " + ((j & l) < k));
                    max = ((max < (j & l)) && ((j & l) < k)) ? (j & l) : max;
                }
            }
            System.out.println(max);
        }
        scanner.close();
    }
}

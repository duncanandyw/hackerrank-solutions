import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        String s = new String();
        String t = new String();
        String A[] = new String[n];

        for (int i = 0; i < n; ++i) {
            s = scanner.next().trim();
            t = scanner.next().trim();
            if (t.matches("\\S*@gmail.com")) {
                A[i] = s;
            } else {
                A[i] = "-1";
            }
        }

        scanner.close();
        Arrays.sort(A);
        for (String u : A)
            if (!(u.matches("-1")))
                System.out.println(u);

    }
}

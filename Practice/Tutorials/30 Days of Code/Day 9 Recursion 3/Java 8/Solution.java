import java.io.*;
import java.util.*;

public class Solution {

    private static int factorial(int n) {
        if (n <= 1)
            return n;
        else
            return (n * factorial(n - 1));
    }

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);

        int input = scan.nextInt();
        scan.close();
        int result = factorial(input);

        System.out.println(result);
    }
}

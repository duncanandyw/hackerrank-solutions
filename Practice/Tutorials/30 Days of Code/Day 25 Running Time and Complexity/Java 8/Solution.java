import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        // write your code here
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        int[] input = new int[n];

        for (int k = 0; k < n; ++k) {
            input[k] = scanner.nextInt();
        }
        scanner.close();

        int bigN = 2000000000;
        int sqN = 44722;
        boolean broken = false;
        int upperB = sqN;

        for (int k = 0; k < n; ++k) {
            if(input[k] == 0 || input[k] == 1){
                System.out.println("Not prime");

                continue;
            }
            if (input[k] < sqN)
                upperB = input[k];
            for (int i = 2; i < upperB; ++i) {
                if (0 == (input[k] % i)) {
                    System.out.println("Not prime");

                    broken = true;
                    break;
                }
            }
            if (!broken) {
                System.out.println("Prime");
            }
            broken = false;
        }

    }
}

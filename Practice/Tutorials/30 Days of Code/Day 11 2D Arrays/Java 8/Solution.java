import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    private static int sumArray(int tl[][], int row, int col) {
        int sum = 0;

        // sum hourglass
        sum = tl[row + 0][col + 0] + tl[row + 2][col + 0] 
            + tl[row + 0][col + 1] + tl[row + 1][col + 1] + tl[row + 2][col + 1] 
            + tl[row + 0][col + 2] + tl[row + 2][col + 2];
//                System.out.println(sum);

        return sum;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int arr[][] = new int[6][6];
        for(int i=0; i < 6; i++){
            for(int j=0; j < 6; j++){
                arr[i][j] = in.nextInt();
            }
        }
        in.close();
        
        // 7 * (-9) = -63 is lowest hourglass sum value can start at, so -999 is safe initial value to compare against
        int maxSum = -999;

        for (int k = 0; k < 4; k++) {
            for (int l = 0; l < 4; l++) {
                // pass top left value of hourglass
                int result = sumArray(arr, k, l);
//                System.out.println(maxSum);
                if (result > maxSum)
                    maxSum = result;
            }
        }

        System.out.println(maxSum);
    }
}

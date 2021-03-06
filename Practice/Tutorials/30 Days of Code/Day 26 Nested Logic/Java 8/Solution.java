import java.io.*;
import java.time.LocalDate;
import java.time.Period;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scanner = new Scanner(System.in);

        int dayActual = scanner.nextInt();
        int monthActual = scanner.nextInt();
        int yearActual = scanner.nextInt();
        int dayExpected = scanner.nextInt();
        int monthExpected = scanner.nextInt();
        int yearExpected = scanner.nextInt();

        scanner.close();

        // non-zero-based month
//        LocalDate dateActual = LocalDate.of(yearActual, monthActual, dayActual);
//        LocalDate dateExpected = LocalDate.of(yearExpected, monthExpected, dayExpected);

//        Period p = Period.between(dateExpected, dateActual);

        int fine = 0;
        int years = yearActual - yearExpected;
        int months = monthActual - monthExpected;
        int days = dayActual - dayExpected;

        fine = (years > 0) ? 10000 :
                (!(years < 0) && months > 0) ? 500 * months :
                        (!(years < 0) && !(months < 0) && days > 0) ? 15 * days :
                                0 ;

        System.out.println(fine);
    }
}

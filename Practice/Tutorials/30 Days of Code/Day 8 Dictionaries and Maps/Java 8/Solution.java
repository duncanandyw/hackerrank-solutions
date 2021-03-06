//Complete this code or write your own from scratch
import java.util.*;
import java.io.*;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        Map<String,Integer> mapX = new HashMap<String,Integer>();

        for(int i = 0; i < n; i++){
            String name = in.next();
            int phone = in.nextInt();
            Integer intX = new Integer(phone);
            // Write code here
            // input to hashmap
            mapX.put(name,intX);
        }
        while(in.hasNext()){
            String s = in.next();
            // Write code here
            // lookup, "Not found" if dne
            if (mapX.get(s) != null) {
                System.out.println(s + "=" + mapX.get(s));
            } else {
                System.out.println("Not found");
            }
        }
        in.close();
    }
}

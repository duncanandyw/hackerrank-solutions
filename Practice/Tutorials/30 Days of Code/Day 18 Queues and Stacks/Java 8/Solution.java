import java.io.*;
import java.util.*;

public class Solution {
    // Write your code here.
/*
    Two instance variables: one for your stack, and one for your queue.
A void pushCharacter(char ch) method that pushes a character onto a stack.
A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.
*/

    String stack = new String();
    String queue = new String();

    Solution() {}
    void pushCharacter(char ch) {
        this.stack = this.stack + ch;
//        System.out.println("push, stack: " + stack);
    }
    void enqueueCharacter(char ch) {
        this.queue = ch + this.queue;
//        System.out.println("enqueue, queue: " + queue);
    }
    char popCharacter() {
        char tmp = this.stack.charAt(stack.length() - 1);
        this.stack = this.stack.substring(0, stack.length() - 1); // will be len - 2 effectively
//        System.out.println("pop, stack: " + stack);
        return tmp;
    }
    char dequeueCharacter() {
        char tmp = this.queue.charAt(queue.length() - 1);
        this.queue = this.queue.substring(0, queue.length() - 1); // will be len - 2 effectively
//        System.out.println("dequeue, queue: " + queue);
        return tmp;
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        scan.close();

        // Convert input String to an array of characters:
        char[] s = input.toCharArray();

        // Create a Solution object:
        Solution p = new Solution();

        // Enqueue/Push all chars to their respective data structures:
        for (char c : s) {
            p.pushCharacter(c);
            p.enqueueCharacter(c);
        }

        // Pop/Dequeue the chars at the head of both data structures and compare them:
        boolean isPalindrome = true;
        for (int i = 0; i < s.length/2; i++) {
            if (p.popCharacter() != p.dequeueCharacter()) {
                isPalindrome = false;                
                break;
            }
        }

        //Finally, print whether string s is palindrome or not.
        System.out.println( "The word, " + input + ", is " 
                           + ( (!isPalindrome) ? "not a palindrome." : "a palindrome." ) );
    }
}
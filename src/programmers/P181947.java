package programmers;

import java.util.Scanner;

public class P181947 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = a + b;

        System.out.println(a + " + " + b + " = " + c);

        sc.close();
    }
}

// P181947 : 덧셈식 출력하기
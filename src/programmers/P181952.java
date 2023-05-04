package programmers;

import java.util.Scanner;

public class P181952 {

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        
        System.out.println(a.replaceAll(" ",  ""));

        
        sc.close();
	}

}

// str 입력받아 공백없이 출력
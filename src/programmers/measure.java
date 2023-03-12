package programmers;

import java.util.*;

public class measure {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int sum = 0;
		
		for(int i=1; i<=n; i++) {
			if(n%i==0) {
				sum += i;
			}
		}
		System.out.println(sum);
		
		sc.close();
	}
}

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴
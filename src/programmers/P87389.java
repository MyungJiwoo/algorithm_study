package programmers;

public class P87389 {

	public static void main(String[] args) {
//		int answer = 0;
		
		int n = 10;
		
		int x = 1;
		while(n % x != 1) {
			x++; 
		}
		System.out.println(x);
	}

}

// P873898
// 주어진 n을 x으로 나눴을 때, 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x
package programmers;

public class P12954 {

	public static void main(String[] args) {
		int x = 2;
		int n = 5;
		
		long[] answer = new long[n];
		answer[0] = x;
		
		for(int i=1; i<n; ++i) {
			answer[i] = answer[i-1] + x;
		}
		
		for(int i=0; i<n; i++) {
			System.out.println(answer[i]);
		}
	}

}

// P12954: x만큼 간격이 있는 n개의 숫자
// 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지나는 리스트 리턴
package programmers;

public class P12924 {

	public static void main(String[] args) {
		int n = 15;
		int answer = 0;
		
		// 어차피 연속된 수의 합으로 나올 수 있는 최대는 n 그 자체 (n-n=0)
		for(int j=1; j<=n; j++) {
			// 더하는 것을 시작하는 숫자 i
			int i = j;
			int num = n;
			
			// num이 0보다 크거나 같은 동안 i를 하나씩 빼기 (연속된 수로 빼기)
			while(num >= 0) {
				num -= i;
				// 만약 0으로 딱 떨어지면 연속된 수로 된 합이 있다는 것 => answer ++
				if(num==0) answer ++;
				i++;
			}
		}
		
		System.out.println(answer);
	}

}

// P12924: 숫자의 표현
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return

// 15-4 = 11 
// 11-5 = 6

// n-i = a
// a-(i+1) = b
// n-(i+2) = 0
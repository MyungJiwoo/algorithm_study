package programmers;

public class P120924 {

	public static void main(String[] args) {
		int answer = 0;
//		int[] common = {1, 2, 3, 4};
		int[] common = {2, 4, 8, 16};
		
		// n항과 n-1항의 차이
		int num1 = common[common.length-1] - common[common.length-2];
		// n-1항과 n-2항의 차이
		int num2 = common[common.length-2] - common[common.length-3];
		
		System.out.println(num1 + " " + num2);
		
		// 등차수열
		if(num1-num2==0) {
			answer = common[common.length-1] + num1;
			System.out.println(answer);
			
		}
		// 등비수열
		else if(num1%num2==0) {
			answer = common[common.length-1] * num1/num2;
			System.out.println(answer);
		}

	}

}

// P120924
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 작성
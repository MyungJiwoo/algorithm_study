package programmers;

public class P12937 {

	public static void main(String[] args) {
		int num = 3;
		String answer = "";
		answer = (num%2==0) ? "Even" : "Odd";
		
		System.out.println(answer);

	}

}

// 짝수와 홀수
// 정수 num이 짝수일 경우 "Even" 반환 / 홀수인 경우 "Odd" 반환
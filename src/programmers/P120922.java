package programmers;

public class P120922 {

	public static void main(String[] args) {
		int M = 2;
		int N = 2;
		
		int answer = 0;
		
		answer = M * N - 1;
		
		System.out.println(answer);

	}

}

// P120922 : 종이 자르기
// 머쓱이는 큰 종이를 1x1 크기로 자르려고 합니다. 예를 들어 2x2 크기의 종이를 1x1 크기로 자르려면 최소 가위질 3번이 필요합니다.
// 정수 M, N이 매개변수로 주어질 때, MxN 크기의 종이를 최소로 가위질 해야하는 횟수를 리턴
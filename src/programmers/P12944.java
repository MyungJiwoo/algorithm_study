package programmers;

public class P12944 {

	public static void main(String[] args) {
		int[] arr = {5,5};
		double answer = 0;
		
		for(int a:arr) {
			answer += a;
		}
		
		System.out.println(answer/arr.length);

	}

}

// P12944 평균 구하기
// 정수를 담고 있는 배열 arr의 평균 값을 리턴하는 함수를 완성